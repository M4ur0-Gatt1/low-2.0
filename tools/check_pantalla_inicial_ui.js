/* LA PRIMERA PANTALLA ES EL MODULO 2D. CDP :9223 + mock :8791.

   Decision de Mauro: «un solo programa, avanzando mas sobre el modulo 2D y
   haciendolo mas presente, que sea la primera pantalla, y que la IA y redes
   sean un boton — al reves de lo que es ahora».

   Este recorrido comprueba las cuatro cosas que harian de esto un desastre si
   se rompen, y las cuatro salieron de mirar que pasaba de verdad:

   1. NO SE CREA NINGUN ARCHIVO AL ARRANCAR. El camino que ya existia para
      entrar al diseno llama a new_design(), que ESCRIBE un
      disenos/diseno_<fecha>.svg. Usarlo en el arranque dejaria un SVG nuevo por
      cada vez que se abre LOW.

   2. EL MODULO VACIO NO PUEDE PARECER ROTO. Medido antes de tocar nada: abrir
      el estudio sin documento deja las herramientas y los paneles, y en el
      medio un damero enorme sin lienzo, sin pestanas y sin nada que hacer.

   3. EL BOTON A LA IA NO ES EL DE CERRAR. El boton X corre closeDesign(), que
      CIERRA EL DOCUMENTO. Si el interruptor de pantalla fuera ese, cambiar de
      pantalla te haria perder el dibujo.

   Lo que este recorrido NO prueba, y a proposito: que el boton X siga cerrando
   el documento. Cerrar un documento sin guardar abre un modal PROPIO —LOW no
   usa confirm() nativo— y el arnes se cuelga esperandolo. Eso ya lo cubre
   check_document_tabs_ui, que sabe clickear el modal.

   4. EL ARRANQUE NO SE PUEDE CAER POR ESTO. La llamada va por window: un
      identificador suelto con `?.` lanza ReferenceError si el modulo no cargo
      —el `?.` no protege identificadores no declarados— y init() moriria ahi,
      dejando el programa en nada. */
const endpoint = process.argv[2] || "http://127.0.0.1:9223";
const pageUrl = process.argv[3] || "http://127.0.0.1:8791/ui/index.html?mock=1";

async function main() {
  const target = await (await fetch(endpoint + "/json/new?about:blank", { method: "PUT" })).json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((ok, fail) => { ws.onopen = ok; ws.onerror = fail; });
  let id = 0; const pending = new Map(), errores = [];
  ws.onmessage = event => { const m = JSON.parse(event.data);
    if (m.method === "Runtime.exceptionThrown") errores.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
    if (!m.id || !pending.has(m.id)) return; const p = pending.get(m.id); pending.delete(m.id);
    m.error ? p.reject(Error(JSON.stringify(m.error))) : p.resolve(m.result); };
  const send = (method, params = {}) => new Promise((resolve, reject) => { const n = ++id;
    const timer = setTimeout(() => { pending.delete(n); reject(Error("CDP sin respuesta: " + method)); }, 180000);
    pending.set(n, { resolve: v => { clearTimeout(timer); resolve(v); }, reject: e => { clearTimeout(timer); reject(e); } });
    ws.send(JSON.stringify({ id: n, method, params })); });
  await send("Page.enable"); await send("Runtime.enable"); await send("Network.enable");
  await send("Network.setCacheDisabled", { cacheDisabled: true });
  await send("Emulation.setDeviceMetricsOverride", { width: 1500, height: 900, deviceScaleFactor: 1, mobile: false });
  await send("Page.navigate", { url: pageUrl });
  for (let i = 0; i < 60; i++) {
    const r = await send("Runtime.evaluate", { expression: 'typeof dzPantallaInicial==="function" && !!api', returnByValue: true });
    if (r.result?.value) break; await new Promise(r => setTimeout(r, 250));
  }

  const expression = `(async()=>{
    const w=ms=>new Promise(r=>setTimeout(r,ms));
    const errs=[]; window.addEventListener("error", e=>errs.push(String(e.message)));
    // El arranque no se toca: se lo deja terminar SOLO, que es justamente lo
    // que hay que comprobar.
    await w(2600);

    const dv=document.querySelector("#designView");
    const inv=document.querySelector("#dzBienvenida2D");
    const bot=document.querySelector("#dzIrAlAgente");
    const arranque={
      elDosDeEstaAbierto:!!(dv && !dv.hidden),
      // el arranque completo: si init() se hubiera caido en la llamada, el
      // mensaje de bienvenida —que va DESPUES— no estaria
      elArranqueTermino:/— listo/.test((document.querySelector("#msgs")||{}).textContent||""),
      hayInvitacion:!!inv,
      titulo:inv?(inv.querySelector("h2")||{}).textContent:null,
      acciones:inv?[...inv.querySelectorAll("button")].map(b=>b.textContent.trim()):[],
      hayBotonIA:!!bot, textoBoton:bot?bot.textContent.trim():null,
      // 1. NADA CREADO
      sinArchivoCreado:!DZ.path, sinDocumento:!DZ.doc,
      // el boton nuevo NO es el de cerrar
      esOtroBoton:!!(bot && document.querySelector("#dzClose") && bot!==document.querySelector("#dzClose")),
      // y va ANTES del de cerrar, para que el de cerrar siga siendo el ultimo
      antesDelCerrar:!!(bot && (bot.compareDocumentPosition(document.querySelector("#dzClose"))&4)===4)};

    // ── EL BOTON: esconde el estudio y NO cierra el documento.
    dzMenuAction("nuevo"); await w(1400);
    const conDocumento={hayDoc:!!DZ.doc, invitacionSeFue:!document.querySelector("#dzBienvenida2D")};
    const antes={doc:!!DZ.doc, pestanas:DZ.documentTabs?DZ.documentTabs.length:0};
    document.querySelector("#dzIrAlAgente").click(); await w(500);
    const trasIrALaIA={oculto:document.querySelector("#designView").hidden,
      // LO QUE IMPORTA: el documento sigue abierto
      sigueElDoc:!!DZ.doc, mismasPestanas:(DZ.documentTabs?DZ.documentTabs.length:0)===antes.pestanas,
      plumaMarcada:!!(document.querySelector("#abDesign")||{}).classList?.contains("vuelve-al-2d")};
    // ── LA VUELTA, por el camino real: la pluma de la barra izquierda. Y no
    //    puede crear un archivo: con la IA detras de un boton este viaje es
    //    constante, y el camino viejo escribia un SVG cada vez que no habia
    //    DZ.path —que es justo el caso con un documento .low abierto—.
    const pestanasAntes=DZ.documentTabs?DZ.documentTabs.length:0;
    document.querySelector("#abDesign").click(); await w(700);
    const trasVolver={visible:!document.querySelector("#designView").hidden,
      sigueElDoc:!!DZ.doc,
      noCreoNada:(DZ.documentTabs?DZ.documentTabs.length:0)===pestanasAntes,
      plumaSinMarca:!(document.querySelector("#abDesign")||{}).classList?.contains("vuelve-al-2d")};

    return {arranque,conDocumento,trasIrALaIA,trasVolver,errs:errs.slice(0,4)};
  })()`;

  const r = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) throw Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
  const v = r.result?.value;
  const mal = (m, d) => { throw Error("REGRESIÓN: " + m + " :: " + JSON.stringify(d)); };
  const a = v?.arranque;

  if (!a) mal("el recorrido no devolvió nada", v);
  if (!a.elArranqueTermino)
    mal("el arranque NO llegó al final: la llamada a la primera pantalla se llevó puesto " +
      "init(), y el programa queda en nada", a);
  if (!a.elDosDeEstaAbierto)
    mal("el módulo 2D no es la primera pantalla: arrancó escondido", a);
  if (!a.sinArchivoCreado || !a.sinDocumento)
    mal("el arranque CREÓ algo: dejaría un archivo nuevo por cada vez que se abre LOW", a);
  if (!a.hayInvitacion) mal("el estudio abre vacío y sin nada que hacer: parece roto", a);
  if (!/2D|Animaci/i.test(a.titulo || "")) mal("la invitación no dice qué es esto", a);
  if (a.acciones.length < 3 || !a.acciones.some(t => /Nuevo/i.test(t)) ||
      !a.acciones.some(t => /Abrir/i.test(t)))
    mal("la invitación no ofrece crear ni abrir", a);
  if (!a.hayBotonIA) mal("no hay botón a IA y redes: eso era el pedido", a);
  if (!/IA/.test(a.textoBoton || "")) mal("el botón a IA no se lee", a);
  if (!a.esOtroBoton) mal("el botón a IA es el mismo que cierra el documento", a);
  if (!a.antesDelCerrar) mal("el botón a IA quedó después del de cerrar", a);

  if (!v.conDocumento.hayDoc) mal("«Nuevo documento» de la invitación no crea nada", v.conDocumento);
  if (!v.conDocumento.invitacionSeFue)
    mal("la invitación sigue puesta con un documento abierto: taparía el dibujo",
      v.conDocumento);

  if (!v.trasIrALaIA.oculto) mal("el botón a IA no cambia de pantalla", v.trasIrALaIA);
  if (!v.trasIrALaIA.sigueElDoc || !v.trasIrALaIA.mismasPestanas)
    mal("ir a IA CERRÓ el documento: era el peligro de usar el botón de cerrar como " +
      "interruptor de pantalla", v.trasIrALaIA);
  if (!v.trasIrALaIA.plumaMarcada)
    mal("nada indica cómo volver al dibujo", v.trasIrALaIA);
  if (!v.trasVolver.visible || !v.trasVolver.sigueElDoc)
    mal("no se puede volver al estudio con el documento intacto", v.trasVolver);
  if (!v.trasVolver.noCreoNada)
    mal("volver al estudio CREÓ un documento: con la IA detrás de un botón el viaje es " +
      "constante y dejaría un archivo por cada vuelta", v.trasVolver);
  if (!v.trasVolver.plumaSinMarca)
    mal("la pluma sigue marcada después de volver", v.trasVolver);


  if (v.errs?.length) throw Error("REGRESIÓN: excepciones en el arranque: " + v.errs.join(" | "));
  if (errores.length) throw Error("REGRESIÓN: excepciones: " + errores.slice(0, 3).join(" | "));

  console.log("E2E primera pantalla OK", JSON.stringify({ abre2D: a.elDosDeEstaAbierto,
    sinCrearNada: a.sinArchivoCreado, invitacion: a.acciones, boton: a.textoBoton,
    irALaIA: v.trasIrALaIA, volver: v.trasVolver, cerrarSigueCerrando: v.cerrar }));
  ws.close(); try { await fetch(endpoint + "/json/close/" + target.id); } catch (_) { /* best effort */ }
}
main().catch(error => { console.error(error.stack || error); process.exit(1); });
