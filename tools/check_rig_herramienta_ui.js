/* UN PINCEL NO PUEDE QUEDAR PUESTO ENCIMA DEL ESQUELETO.
   CDP :9223 + mock :8791.

   POR QUE EXISTE. Reportado mirando la pantalla: «las herramientas del rigging
   tienen defectos, aparece como un pincel en lugar de hacer lo que deberia».

   Medido: con `DZ.rigMode` encendido, el riel sigue ofreciendo las 17
   herramientas de dibujo y `dzSetTool()` las aceptaba sin preguntar, asi que
   quedaba un pincel sobre el esqueleto: el gesto de mover una articulacion
   pintaba. El contrato ya existia y no se usaba —`application/mode-machine.js`
   es «la autoridad sobre que herramientas son validas en dibujo y rigging»—
   pero `dzSetTool` nunca lo consultaba.

   Lo que se cuida acá:

   1. Elegir un pincel con el esqueleto puesto NO deja el pincel sobre el rig.
   2. Y no se resuelve con un boton muerto: la herramienta se aplica, pero
      saliendo del rig, y AVISANDO. Un boton que no hace nada es otro defecto.
   3. Las que si sirven con el esqueleto —seleccion, mano, pivote y las de
      rig— no sacan del modo: eso volveria inusable el armado.

   Las tres juntas: un arreglo que solo rechace pasa (1) y rompe (2). */
const endpoint = process.argv[2] || "http://127.0.0.1:9223";
const pageUrl = process.argv[3] || "http://127.0.0.1:8791/ui/index.html?mock=1";

async function main() {
  const target = await (await fetch(endpoint + "/json/new?about:blank", { method: "PUT" })).json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((ok, fail) => { ws.onopen = ok; ws.onerror = fail; });
  let id = 0; const pending = new Map(), errores = [];
  ws.onmessage = event => { const m = JSON.parse(event.data);
    if (m.method === "Runtime.exceptionThrown")
      errores.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
    if (!m.id || !pending.has(m.id)) return; const p = pending.get(m.id); pending.delete(m.id);
    m.error ? p.reject(Error(JSON.stringify(m.error))) : p.resolve(m.result); };
  const send = (method, params = {}) => new Promise((resolve, reject) => { const n = ++id;
    const timer = setTimeout(() => { pending.delete(n); reject(Error("CDP sin respuesta: " + method)); }, 120000);
    pending.set(n, { resolve: v => { clearTimeout(timer); resolve(v); }, reject: e => { clearTimeout(timer); reject(e); } });
    ws.send(JSON.stringify({ id: n, method, params })); });
  const ev = async (expr) => { const r = await send("Runtime.evaluate",
    { expression: expr, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
    return r.result?.value; };
  const w = ms => new Promise(r => setTimeout(r, ms));
  const mal = (m, d) => { throw Error("REGRESIÓN: " + m + " :: " + JSON.stringify(d)); };

  await send("Page.enable"); await send("Runtime.enable"); await send("Network.enable");
  await send("Network.setCacheDisabled", { cacheDisabled: true });
  await send("Emulation.setDeviceMetricsOverride", { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });
  await send("Page.navigate", { url: pageUrl });
  for (let i = 0; i < 90; i++) {
    if (await ev('typeof dzSetTool==="function" && typeof openDesign==="function" && !!api').catch(() => false)) break;
    await w(400);
  }

  const r = await ev(`(async()=>{
    const wait = ms => new Promise(x=>setTimeout(x,ms));
    try{localStorage.clear()}catch(e){}
    await openDesign("mock.svg"); await dzDocInit();
    if (typeof closeL3d==="function") closeL3d();
    await wait(500);
    if (!DZ.rigMode && typeof dzRigToggle==="function") dzRigToggle();
    await wait(300);
    const salida = { entroAlRig: !!DZ.rigMode, guardPuesto: !!(dzSetTool && dzSetTool.__conModo) };

    // 3. las que SI sirven con el esqueleto no sacan del modo
    const quedanEnRig = {};
    for (const h of ["select", "hand", "pivot"]) {
      dzSetTool(h); await wait(150);
      quedanEnRig[h] = { tool: DZ.tool, rig: !!DZ.rigMode };
      if (!DZ.rigMode && typeof dzRigToggle==="function") { dzRigToggle(); await wait(200); }
    }
    salida.quedanEnRig = quedanEnRig;

    // 1 y 2. el pincel: no queda sobre el rig, se aplica, y avisa
    if (!DZ.rigMode && typeof dzRigToggle==="function") { dzRigToggle(); await wait(200); }
    dzSetTool("rigedit"); await wait(200);
    salida.antes = { tool: DZ.tool, rig: !!DZ.rigMode };
    dzSetTool("brush"); await wait(350);
    salida.conPincel = { tool: DZ.tool, rig: !!DZ.rigMode,
      aviso: (document.querySelector("#dzStatus") || {}).textContent || "" };
    return salida;
  })()`);

  if (!r.entroAlRig) mal("no se pudo entrar al modo rig: no se mide nada", r);
  if (!r.guardPuesto) mal("el guard de herramienta/modo no está enganchado", r);
  for (const [h, v] of Object.entries(r.quedanEnRig))
    if (!v.rig) mal("elegir «" + h + "» sacó del esqueleto, y esa sí sirve con el rig puesto", r);
  if (r.antes.tool !== "rigedit" || !r.antes.rig) mal("no quedó la herramienta de rig antes de probar", r);
  if (r.conPincel.rig) mal("el pincel quedó puesto ENCIMA del esqueleto: es el defecto reportado", r);
  if (r.conPincel.tool !== "brush")
    mal("el botón del pincel quedó muerto: rechazar no alcanza, tiene que aplicar saliendo del rig", r);
  if (!/[Ss]alí|[Ss]ali/.test(r.conPincel.aviso))
    mal("salió del esqueleto sin avisar: cambiar de modo en silencio pierde a cualquiera", r);

  const crasheos = errores.filter(e => /TypeError|ReferenceError/.test(String(e)));
  if (crasheos.length) mal("el cambio de herramienta tiró errores", crasheos.slice(0, 3));

  console.log("E2E herramienta y modo OK " + JSON.stringify(r));
  ws.close();
}
main().catch(e => { console.error(e.message); process.exit(1); });
