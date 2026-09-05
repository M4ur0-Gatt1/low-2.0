/* Recorrido E2E real en Chromium: IK/FK match y pole del rig cut-out.
   Comprueba con botones y puntero reales que cambiar de modo no mueva la
   cadena y que el pole decida de qué lado dobla la articulación.
   Requiere un Chromium con CDP en http://127.0.0.1:9223 y el proyecto servido
   en http://127.0.0.1:8791. */
const endpoint = process.argv[2] || "http://127.0.0.1:9223";
const pageUrl = process.argv[3] || "http://127.0.0.1:8791/ui/index.html?mock=1";

async function main() {
  const stage = name => console.error("E2E etapa: " + name);
  stage("conectar");
  const created = await (await fetch(endpoint + "/json/new?about:blank", { method: "PUT" })).json();
  if (!created?.webSocketDebuggerUrl) throw Error("Chromium no expuso una página CDP");
  const ws = new WebSocket(created.webSocketDebuggerUrl);
  await new Promise((ok, fail) => { ws.onopen = ok; ws.onerror = fail; });
  let id = 0; const pending = new Map(); const errores = [];
  ws.onmessage = event => {
    const msg = JSON.parse(event.data);
    // El confirm() de recuperación congela el renderer si no se atiende.
    if (msg.method === "Page.javascriptDialogOpening")
      return ws.send(JSON.stringify({ id: ++id, method: "Page.handleJavaScriptDialog", params: { accept: false } }));
    if (msg.method === "Runtime.exceptionThrown")
      errores.push((msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text || "").slice(0, 200));
    if (!msg.id || !pending.has(msg.id)) return;
    const task = pending.get(msg.id); pending.delete(msg.id);
    msg.error ? task.fail(Error(JSON.stringify(msg.error))) : task.ok(msg.result);
  };
  const send = (method, params = {}) => new Promise((ok, fail) => {
    const callId = ++id;
    const timer = setTimeout(() => { pending.delete(callId); fail(Error("CDP sin respuesta en " + method)); }, 30000);
    pending.set(callId, { ok: value => { clearTimeout(timer); ok(value); },
      fail: error => { clearTimeout(timer); fail(error); } });
    ws.send(JSON.stringify({ id: callId, method, params }));
  });
  await send("Page.enable"); await send("Runtime.enable");
  // Los scripts se piden con ?v=<versión>: sin esto Chromium sirve el archivo
  // anterior y la prueba certifica código que ya no existe.
  await send("Network.enable"); await send("Network.setCacheDisabled", { cacheDisabled: true });
  stage("navegar");
  await send("Page.navigate", { url: pageUrl });
  // Esperar por CONDICIoN, no por reloj: con la maquina cargada un sleep fijo
  // se queda corto, la app todavia no expuso sus funciones y la prueba falla
  // por lentitud en vez de por una regresion real.
  const listo = async () => {
    for (let intento = 0; intento < 60; intento++) {
      const r = await send("Runtime.evaluate", { returnByValue: true, expression:
        `typeof openDesign === "function" && typeof dzDocInit === "function"
         && !!document.querySelector("#dzMenubar .dz-menu[data-menu='ventana']")` });
      if (r.result?.value === true) return true;
      await new Promise(ok => setTimeout(ok, 250));
    }
    throw Error("la aplicacion no terminó de arrancar en 15 s");
  };
  await listo();

  stage("ejecutar flujo");
  const expression = `(async()=>{
    const espera=ms=>new Promise(r=>setTimeout(r,ms));
    await openDesign("C:\\\\mock\\\\rig-test.svg");
    await dzDocInit();
    if(!DZ.rigMode) dzRigToggle();
    dzRigLibraryAdd("human_standard");
    dzRigPanelSync();
    await espera(300);

    const doc=DZ.doc, ids=Object.keys(doc.scene.rig.nodes);
    const buscar=fin=>ids.find(id=>id===fin||id.endsWith("_"+fin)||id.endsWith(fin));
    const brazo=buscar("upper_arm_L"), antebrazo=buscar("forearm_L"), mano=buscar("hand_L");
    if(!brazo||!antebrazo||!mano) return {error:"no se encontró la cadena del brazo",ids};

    // 1. Crear la cadena por la interfaz, no por la API.
    document.querySelector("#rigIkRoot").value=brazo;
    document.querySelector("#rigIkMid").value=antebrazo;
    document.querySelector("#rigIkEnd").value=mano;
    document.querySelector("#rigIkCreate").click();
    await espera(300);
    const cid=DZ.rigConstraintId;
    const creada={id:cid,existe:!!doc.scene.rigConstraint(cid)};

    const frame=dzRigCur();
    const nodo=id=>doc.scene.rigNode(id);
    const mundo=id=>doc.scene.rigWorldPoint(id,frame,nodo(id).pivot);
    const lado=()=>{const r=mundo(brazo),t=mundo(mano),j=mundo(antebrazo);
      return Math.sign((t.x-r.x)*(j.y-r.y)-(t.y-r.y)*(j.x-r.x));};
    const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);

    // 2. Pose FK a mano, doblando el codo hacia un lado concreto.
    doc.setRigKey(brazo,frame,{x:0,y:0,r:35,sx:1,sy:1});
    doc.setRigKey(antebrazo,frame,{x:0,y:0,r:-65,sx:1,sy:1});
    dzRigApplyLive(frame);
    await espera(200);
    const puntaFk=mundo(mano), codoFk=mundo(antebrazo), ladoFk=lado();

    // 3. El botón Emparejar lleva el objetivo a la pose actual.
    document.querySelector("#rigIkMatch").click();
    await espera(300);
    const objetivo=doc.scene.rigTargetAt(cid,frame);
    const match={objetivoEnLaPunta:dist(objetivo,puntaFk)<0.01};
    doc.setRigIKTarget(cid,frame,objetivo);
    dzRigApplyLive(frame);
    await espera(200);
    match.sinSaltoDelExtremo=dist(mundo(mano),puntaFk)<0.01;
    match.sinDarVueltaElCodo=dist(mundo(antebrazo),codoFk)<0.01 && lado()===ladoFk;

    // 4. El pole: manija real en la mesa, arrastrada con puntero real.
    dzRigOverlayRender();
    await espera(200);
    const manija=document.querySelector(".dz-rig-pole");
    const pole={hayManija:!!manija,sugeridaAlPrincipio:!!manija&&manija.classList.contains("sugerido")};
    if(manija){
      const lienzo=document.querySelector("#dzCanvas").getBoundingClientRect();
      const desde={x:lienzo.left+ +manija.getAttribute("cx"),y:lienzo.top+ +manija.getAttribute("cy")};
      // destino: reflejar el codo al otro lado de la recta hombro→mano
      const r=mundo(brazo),t=mundo(mano),j=mundo(antebrazo);
      const ux=t.x-r.x,uy=t.y-r.y,largo=Math.hypot(ux,uy)||1;
      const proy=((j.x-r.x)*ux+(j.y-r.y)*uy)/(largo*largo);
      const pie={x:r.x+ux*proy,y:r.y+uy*proy};
      const opuesto={x:pie.x+(pie.x-j.x)*2.2,y:pie.y+(pie.y-j.y)*2.2};
      const hasta=dzFromUser(opuesto.x,opuesto.y);
      const opciones=(x,y)=>({bubbles:true,cancelable:true,pointerId:31,clientX:x,clientY:y});

      // 4a. Cancelar un arrastre no puede dejar rastro en el documento.
      manija.dispatchEvent(new PointerEvent("pointerdown",opciones(desde.x,desde.y)));
      document.dispatchEvent(new PointerEvent("pointermove",opciones(hasta.x,hasta.y)));
      document.dispatchEvent(new PointerEvent("pointercancel",opciones(hasta.x,hasta.y)));
      await espera(250);
      pole.cancelarNoEscribe=!Object.keys(doc.scene.rigConstraint(cid).poleKeys||{}).length
        && lado()===ladoFk;

      // 4b. El arrastre completo sí mueve la articulación y queda clavado.
      const manija2=document.querySelector(".dz-rig-pole");
      manija2.dispatchEvent(new PointerEvent("pointerdown",opciones(desde.x,desde.y)));
      document.dispatchEvent(new PointerEvent("pointermove",opciones(hasta.x,hasta.y)));
      document.dispatchEvent(new PointerEvent("pointerup",opciones(hasta.x,hasta.y)));
      await espera(350);
      pole.claveEscrita=!!Object.keys(doc.scene.rigConstraint(cid).poleKeys||{}).length;
      pole.codoCambioDeLado=lado()!==ladoFk;
      pole.manijaYaNoEsSugerida=!document.querySelector(".dz-rig-pole")?.classList.contains("sugerido");
      pole.extremoSigueEnSuSitio=dist(mundo(mano),puntaFk)<0.5;
    }

    // 5. Apoyo clavado: mover el cuerpo deja de arrastrar el extremo.
    const raiz=buscar("root")||buscar("upper_chest");
    const boton=document.querySelector("#rigIkPin");
    const pin={etiquetaInicial:boton.textContent};
    boton.click();
    await espera(300);
    pin.clavado=doc.scene.rigPinnedAt(cid,frame);
    pin.etiquetaCambia=document.querySelector("#rigIkPin").textContent!==pin.etiquetaInicial;
    dzRigOverlayRender();
    await espera(150);
    pin.seVeEnLaMesa=!!document.querySelector(".dz-rig-target.clavado");
    const manoClavada=mundo(mano);
    if(raiz){
      doc.setRigKey(raiz,frame,{x:35,y:0,r:0,sx:1,sy:1});
      dzRigApplyLive(frame);
      await espera(250);
      pin.laManoNoPatina=dist(mundo(mano),manoClavada)<1.5;
      // y soltarlo devuelve el comportamiento normal
      document.querySelector("#rigIkPin").click();
      await espera(300);
      const sueltaAntes=mundo(mano);
      doc.setRigKey(raiz,frame,{x:90,y:0,r:0,sx:1,sy:1});
      dzRigApplyLive(frame);
      await espera(250);
      pin.soltarloDevuelveElArrastre=dist(mundo(mano),sueltaAntes)>1;
    }

    // 6. Pasar a FK: apaga la cadena sin mover el dibujo.
    const antesDeFk={mano:mundo(mano),codo:mundo(antebrazo)};
    document.querySelector("#rigIkToFk").click();
    await espera(300);
    const fk={apagada:doc.scene.rigConstraint(cid).enabled===false,
      sinSalto:dist(mundo(mano),antesDeFk.mano)<0.01 && dist(mundo(antebrazo),antesDeFk.codo)<0.01,
      clavesReales:!!nodo(brazo).keys[frame] && !!nodo(antebrazo).keys[frame]};

    // 7. Nada de esto puede sobrevivir a un Undo a medias.
    const antesUndo=doc.scene.rigConstraint(cid).enabled;
    dzUndo(); await espera(300);
    const undo={rehabilita:doc.scene.rigConstraint(cid)?.enabled!==antesUndo};
    return {creada,match,pole,pin,fk,undo};
  })()`;
  const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails)
    throw Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text || "Excepción en la interfaz");
  const value = result.result?.value || {};

  stage("verificar");
  if (value.error) throw Error("REGRESIÓN: " + value.error + " " + JSON.stringify(value.ids || []));
  const { creada, match, pole, pin, fk, undo } = value;
  if (!creada?.existe)
    throw Error("REGRESIÓN: el botón Crear IK no dejó una cadena: " + JSON.stringify(value));
  if (!match?.objetivoEnLaPunta)
    throw Error("REGRESIÓN: Emparejar no lleva el objetivo al extremo actual: " + JSON.stringify(match));
  if (!match.sinSaltoDelExtremo || !match.sinDarVueltaElCodo)
    throw Error("REGRESIÓN: pasar a IK después de emparejar mueve la cadena: " + JSON.stringify(match));
  if (!pole?.hayManija || !pole.sugeridaAlPrincipio)
    throw Error("REGRESIÓN: la cadena activa no ofrece manija de pole: " + JSON.stringify(pole));
  if (!pole.cancelarNoEscribe)
    throw Error("REGRESIÓN: cancelar el arrastre del pole deja rastro en el documento: " + JSON.stringify(pole));
  if (!pole.claveEscrita || !pole.codoCambioDeLado || !pole.manijaYaNoEsSugerida)
    throw Error("REGRESIÓN: arrastrar el pole no manda sobre la articulación: " + JSON.stringify(pole));
  if (!pole.extremoSigueEnSuSitio)
    throw Error("REGRESIÓN: mover el pole arrastró también el extremo: " + JSON.stringify(pole));
  if (!pin?.clavado || !pin.etiquetaCambia || !pin.seVeEnLaMesa)
    throw Error("REGRESIÓN: clavar el apoyo no queda registrado ni visible: " + JSON.stringify(pin));
  if (!pin.laManoNoPatina)
    throw Error("REGRESIÓN: con el apoyo clavado, mover el cuerpo igual arrastra el extremo: " + JSON.stringify(pin));
  if (!pin.soltarloDevuelveElArrastre)
    throw Error("REGRESIÓN: soltar el apoyo no devuelve el comportamiento normal: " + JSON.stringify(pin));
  if (!fk?.apagada || !fk.sinSalto || !fk.clavesReales)
    throw Error("REGRESIÓN: Pasar a FK no hornea la pose o mueve el dibujo: " + JSON.stringify(fk));
  if (!undo?.rehabilita)
    throw Error("REGRESIÓN: el cambio a FK no entra en el historial: " + JSON.stringify(undo));
  if (errores.length)
    throw Error("REGRESIÓN: la interfaz lanzó excepciones: " + errores.slice(0, 3).join(" | "));
  console.log("E2E rig IK OK: match, pole, apoyo clavado y paso a FK", JSON.stringify(value));
  try { await fetch(endpoint + "/json/close/" + created.id); } catch (_) {}
}

main().catch(error => { console.error(error.stack || error); process.exit(1); });
