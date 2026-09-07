/* Formas dibujadas ARRASTRANDO, como en Illustrator. CDP :9223 + mock :8791.

   Este recorrido existe por un reporte concreto: «la herramienta de formas no
   esta funcionando». No estaba roto el codigo — elegir una forma la plantaba en
   el CENTRO DEL LIENZO con tamaño fijo, y con la mesa paneada al 32 % de zoom
   eso cae fuera de la pantalla: uno clickea, no aparece nada donde tiene los
   ojos, y la herramienta parece muerta.

   Se comprueba lo que un dibujante espera: que elegir la forma no plante nada,
   que el arrastre la dibuje y la haga crecer, que Shift la deje proporcionada y
   Alt la abra desde el centro, que un clic simple la deje DONDE SE CLICKEO y no
   en el centro, que Escape no deje nada a medias y que entre al historial como
   un solo paso. */
const endpoint = process.argv[2] || "http://127.0.0.1:9223";
const pageUrl = process.argv[3] || "http://127.0.0.1:8791/ui/index.html?mock=1";

async function main() {
  const target = await (await fetch(endpoint + "/json/new?about:blank", { method: "PUT" })).json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((ok, fail) => { ws.onopen = ok; ws.onerror = fail; });
  let id = 0; const pending = new Map(), errors = [];
  ws.onmessage = event => { const m = JSON.parse(event.data);
    if (m.method === "Page.javascriptDialogOpening") return ws.send(JSON.stringify({ id: ++id, method: "Page.handleJavaScriptDialog", params: { accept: true } }));
    if (m.method === "Runtime.exceptionThrown") errors.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
    if (!m.id || !pending.has(m.id)) return; const p = pending.get(m.id); pending.delete(m.id);
    m.error ? p.reject(Error(JSON.stringify(m.error))) : p.resolve(m.result);
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => { const n = ++id;
    const timer = setTimeout(() => { pending.delete(n); reject(Error("CDP sin respuesta: " + method)); }, 120000);
    pending.set(n, { resolve: v => { clearTimeout(timer); resolve(v); }, reject: e => { clearTimeout(timer); reject(e); } });
    ws.send(JSON.stringify({ id: n, method, params }));
  });
  await send("Page.enable"); await send("Runtime.enable"); await send("Network.enable");
  await send("Network.setCacheDisabled", { cacheDisabled: true });
  await send("Emulation.setDeviceMetricsOverride", { width: 1366, height: 900, deviceScaleFactor: 1, mobile: false });
  await send("Page.navigate", { url: pageUrl });
  for (let i = 0; i < 60; i++) {
    const r = await send("Runtime.evaluate", { expression: 'typeof dzFormaElegir==="function"', returnByValue: true });
    if (r.result?.value) break; await new Promise(r => setTimeout(r, 250));
  }

  const expression = `(async()=>{
    const wait=ms=>new Promise(r=>setTimeout(r,ms));
    const errs=[];
    window.addEventListener("error", ev=>errs.push(String(ev.message)));
    try{localStorage.clear()}catch(e){}
    await openDesign("mock.svg"); await dzDocInit(); await wait(500);
    LOW.workspace.workspaces.activate("drawing",dzWsAplicar); await wait(300);

    const lienzo=document.querySelector("#dzCanvas");
    const hoja=()=>lienzo.querySelector(":scope > svg");
    const limpiar=()=>{ hoja().innerHTML=""; };
    const caja=lienzo.getBoundingClientRect();
    const X=(f)=>Math.round(caja.left+caja.width*f), Y=(f)=>Math.round(caja.top+caja.height*f);
    const pt=(t,x,y,shift,alt)=>lienzo.dispatchEvent(new PointerEvent(t,{bubbles:true,
      cancelable:true,pointerId:1,pointerType:"mouse",isPrimary:true,
      button:t==="pointerdown"?0:-1,buttons:t==="pointerup"?0:1,
      clientX:x,clientY:y,pressure:.5,shiftKey:!!shift,altKey:!!alt}));
    const uno=(sel)=>hoja().querySelector(sel);

    // 1. elegir una forma ARMA la herramienta y no dibuja nada
    limpiar(); dzFormaElegir("rect"); await wait(250);
    const armado={herramienta:DZ.tool, dibujoAlgo:!!uno("rect"),
      dice:(document.querySelector("#sbHint")||{}).textContent||""};

    // 2. el arrastre la dibuja y la hace crecer
    pt("pointerdown",X(.2),Y(.2)); await wait(70);
    const alEmpezar=uno("rect")?+uno("rect").getAttribute("width"):-1;
    pt("pointermove",X(.32),Y(.34)); await wait(70);
    const aMitad=uno("rect")?+uno("rect").getAttribute("width"):-1;
    pt("pointermove",X(.5),Y(.6)); await wait(70);
    const antesDeSoltar=uno("rect")?+uno("rect").getAttribute("width"):-1;
    pt("pointerup",X(.5),Y(.6)); await wait(500);
    const r1=uno("rect");
    const arrastre={aparecio:alEmpezar>=0, crecio:antesDeSoltar>aMitad && aMitad>0,
      w:r1?Math.round(+r1.getAttribute("width")):0,
      h:r1?Math.round(+r1.getAttribute("height")):0,
      seleccion:DZ.sel?DZ.sel.tagName:null,
      dice:(document.querySelector("#sbHint")||{}).textContent||""};

    // 3. Shift deja la forma PROPORCIONADA
    limpiar(); dzFormaElegir("rect"); await wait(200);
    pt("pointerdown",X(.2),Y(.2));
    pt("pointermove",X(.45),Y(.28),true); await wait(70);
    pt("pointerup",X(.45),Y(.28),true); await wait(400);
    const r2=uno("rect");
    const conShift=r2?{w:Math.round(+r2.getAttribute("width")),
      h:Math.round(+r2.getAttribute("height"))}:null;

    // 4. Alt la abre DESDE EL CENTRO: el ancla queda en el medio
    limpiar(); dzFormaElegir("circle"); await wait(200);
    const ax=X(.4), ay=Y(.45), ancla=dzToUser(ax,ay);
    pt("pointerdown",ax,ay);
    pt("pointermove",X(.5),Y(.6),false,true); await wait(70);
    pt("pointerup",X(.5),Y(.6),false,true); await wait(400);
    const c1=uno("circle");
    const conAlt=c1?{centroEnElAncla:Math.abs(+c1.getAttribute("cx")-ancla.x)<3,
      r:Math.round(+c1.getAttribute("r"))}:null;

    // 5. un clic simple la deja DONDE SE CLICKEO, no en el centro del lienzo.
    //    Esto es el reporte original: con la mesa paneada, el centro no se ve.
    limpiar(); dzFormaElegir("rect"); await wait(200);
    const cx=X(.78), cy=Y(.78), donde=dzToUser(cx,cy);
    pt("pointerdown",cx,cy); pt("pointerup",cx,cy); await wait(500);
    const r3=uno("rect"); const vb=dzVB();
    const clicSimple=r3?{
      cercaDelClic:Math.abs(+r3.getAttribute("x")-donde.x)<6,
      lejosDelCentro:Math.abs(+r3.getAttribute("x")-(vb[0]+vb[2]/2))>40,
      tieneTamano:+r3.getAttribute("width")>10}:null;

    // 6. un solo paso de historial, y Ctrl+Z la saca
    limpiar(); dzFormaElegir("ellipse"); await wait(200);
    const pasosAntes=DZ.history?DZ.history.undoStack.length:0;
    pt("pointerdown",X(.25),Y(.25));
    pt("pointermove",X(.45),Y(.45)); pt("pointerup",X(.45),Y(.45)); await wait(500);
    const hayElipse=!!uno("ellipse");
    dzUndo(); await wait(500);
    const historial={hayElipse, trasUndo:!!uno("ellipse")};

    // 7. Escape a mitad del gesto no deja nada a medias
    limpiar(); dzFormaElegir("star"); await wait(200);
    pt("pointerdown",X(.3),Y(.3)); pt("pointermove",X(.5),Y(.5)); await wait(80);
    const durante=!!uno("polygon");
    document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:true}));
    await wait(500);
    const escape={habiaDurante:durante, quedaAlgo:!!uno("polygon"),
      dice:(document.querySelector("#sbHint")||{}).textContent||""};

    // 8. cambiar de herramienta a mitad del gesto tambien cancela
    limpiar(); dzFormaElegir("rect"); await wait(200);
    pt("pointerdown",X(.3),Y(.3)); pt("pointermove",X(.5),Y(.5)); await wait(80);
    dzSetTool("pencil"); await wait(400);
    const cambioHerramienta={quedaAlgo:!!uno("rect"), herramienta:DZ.tool};

    return {armado,arrastre,conShift,conAlt,clicSimple,historial,escape,
      cambioHerramienta,errs:errs.slice(0,3)};
  })()`;

  const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  const v = result.result?.value;
  const mal = (m, d) => { throw Error("REGRESIÓN: " + m + " :: " + JSON.stringify(d)); };

  if (v?.armado?.herramienta !== "shape")
    mal("elegir una forma no arma la herramienta", v?.armado);
  if (v.armado.dibujoAlgo)
    mal("elegir una forma la planta sola: tiene que esperar el arrastre", v.armado);
  if (!/arrastr/.test(v.armado.dice))
    mal("no se le dice al dibujante que hay que arrastrar", v.armado);

  if (!v.arrastre.aparecio) mal("el arrastre no dibuja la forma", v.arrastre);
  if (!v.arrastre.crecio) mal("la forma no crece con el arrastre", v.arrastre);
  if (v.arrastre.w < 50 || v.arrastre.h < 50)
    mal("la forma no quedó del tamaño del gesto", v.arrastre);
  if (v.arrastre.seleccion !== "rect")
    mal("la forma recién dibujada no queda seleccionada", v.arrastre);
  if (!/\d+ × \d+/.test(v.arrastre.dice))
    mal("no informa la medida de lo que se dibujó", v.arrastre);

  if (!v.conShift || Math.abs(v.conShift.w - v.conShift.h) > 2)
    mal("Shift no deja la forma proporcionada", v.conShift);

  if (!v.conAlt || !v.conAlt.centroEnElAncla)
    mal("Alt no abre la forma desde el centro", v.conAlt);

  if (!v.clicSimple) mal("un clic simple no deja ninguna forma", v.clicSimple);
  if (!v.clicSimple.cercaDelClic)
    mal("un clic simple no deja la forma donde se clickeó", v.clicSimple);
  if (!v.clicSimple.lejosDelCentro)
    mal("la forma volvió a plantarse en el centro del lienzo: con la mesa paneada no se ve",
      v.clicSimple);
  if (!v.clicSimple.tieneTamano) mal("el clic simple deja una forma sin tamaño", v.clicSimple);

  if (!v.historial.hayElipse) mal("el gesto no dejó la elipse", v.historial);
  if (v.historial.trasUndo) mal("Ctrl+Z no saca la forma de una", v.historial);

  if (!v.escape.habiaDurante) mal("la forma no se previsualiza durante el gesto", v.escape);
  if (v.escape.quedaAlgo) mal("Escape deja la forma a medias", v.escape);
  if (!/cancel/i.test(v.escape.dice)) mal("Escape no avisa que canceló", v.escape);

  if (v.cambioHerramienta.quedaAlgo)
    mal("cambiar de herramienta a mitad del gesto deja la forma a medias", v.cambioHerramienta);

  if (v.errs?.length) throw Error("REGRESIÓN: excepciones con la herramienta de formas: " + v.errs.join(" | "));

  console.log("E2E formas OK", JSON.stringify({ arrastre: v.arrastre.w + "x" + v.arrastre.h,
    dice: v.arrastre.dice, shift: v.conShift, alt: v.conAlt, clic: v.clicSimple,
    historial: v.historial, escape: v.escape.dice }));
  ws.close(); try { await fetch(endpoint + "/json/close/" + target.id); } catch (_) { /* best effort */ }
}
main().catch(error => { console.error(error.stack || error); process.exit(1); });
