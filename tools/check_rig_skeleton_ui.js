/* Recorrido E2E real en Chromium: lienzo -> biblioteca -> humano -> Animar.
   Requiere un Chromium con CDP en http://127.0.0.1:9223. */
const endpoint = process.argv[2] || "http://127.0.0.1:9223";
const pageUrl = process.argv[3] || "http://127.0.0.1:8791/ui/index.html?mock=1";

async function main() {
  const stage = name => console.error("E2E etapa: " + name);
  stage("conectar");
  const targets = await (await fetch(endpoint + "/json")).json();
  const target = targets.find(t => t.type === "page") || targets[0];
  if (!target?.webSocketDebuggerUrl) throw Error("Chromium no expuso una página CDP");
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((ok, fail) => { ws.onopen = ok; ws.onerror = fail; });
  stage("CDP conectado");
  let id = 0; const pending = new Map();
  ws.onmessage = event => {
    const msg = JSON.parse(event.data);
    if (msg.method === "Page.javascriptDialogOpening") {
      ws.send(JSON.stringify({ id:++id, method:"Page.handleJavaScriptDialog",
        params:{ accept:false } }));
      return;
    }
    if (!msg.id || !pending.has(msg.id)) return;
    const { ok, fail } = pending.get(msg.id); pending.delete(msg.id);
    msg.error ? fail(Error(JSON.stringify(msg.error))) : ok(msg.result);
  };
  const send = (method, params = {}) => new Promise((ok, fail) => {
    const callId = ++id;
    const timer = setTimeout(() => {
      pending.delete(callId); fail(Error("CDP sin respuesta en " + method));
    }, 15000);
    pending.set(callId, { ok:value => { clearTimeout(timer); ok(value); },
      fail:error => { clearTimeout(timer); fail(error); } });
    ws.send(JSON.stringify({ id: callId, method, params }));
  });
  await send("Page.enable"); await send("Runtime.enable");
  stage("navegar");
  await send("Page.navigate", { url: pageUrl });
  await new Promise(ok => setTimeout(ok, 1800));
  stage("ejecutar flujo");
  const expression = `(async()=>{
    await openDesign("C:\\\\mock\\\\rig-test.svg");
    await dzDocInit();
    if(!DZ.rigMode) dzRigToggle();
    dzRigLibraryAdd("human_standard");
    dzRigPanelSync();
    const button=document.querySelector("#rigModeAnim");
    const before={disabled:button.disabled,bones:Object.keys(DZ.doc.scene.rig.bones||{}).length};
    button.click();
    const rig={...before,submode:DZ.rigSubmode,tool:DZ.rigTool,active:button.classList.contains("on")};
    const svg=document.querySelector("#dzCanvas > svg");
    const rect=document.createElementNS("http://www.w3.org/2000/svg","rect");
    rect.setAttribute("x","100"); rect.setAttribute("y","100");
    rect.setAttribute("width","120"); rect.setAttribute("height","80");
    rect.setAttribute("fill","#e5322d"); svg.appendChild(rect); dzSelect(rect);
    const box=rect.getBoundingClientRect(), cx=box.left+box.width/2, cy=box.top+box.height/2;
    const event=(type,x,y)=>({type,clientX:x,clientY:y,pointerId:71,shiftKey:false,
      target:rect,preventDefault(){},stopPropagation(){}});
    const original=rect.getAttribute("width");
    dzInflatorDown(event("pointerdown",box.right,cy));
    dzInflatorMove(event("pointermove",box.right+80,cy));
    const changed=rect.getAttribute("width")!==original;
    const cancelled=dzVectorGestureCancel("e2e");
    const vector={changed,cancelled,restored:rect.getAttribute("width")===original,
      idle:!window.LOW.input.pointerController.active};
    // Flujo real del cuadro delimitador: rotar y luego escalar. La geometría
    // SVG debe permanecer intacta y ambos gestos deben seguir al puntero.
    dzSelect(rect);
    const rb0=rect.getBoundingClientRect(), rc={x:rb0.left+rb0.width/2,y:rb0.top+rb0.height/2};
    dzRotateDown({clientX:rc.x,clientY:rb0.top-30,pointerId:72,target:rect,
      preventDefault(){},stopPropagation(){}});
    document.dispatchEvent(new PointerEvent("pointermove",{clientX:rb0.right+30,clientY:rc.y,pointerId:72,bubbles:true}));
    document.dispatchEvent(new PointerEvent("pointerup",{clientX:rb0.right+30,clientY:rc.y,pointerId:72,bubbles:true}));
    const afterRotate=rect.getBoundingClientRect(), transformAfterRotate=rect.getAttribute("transform");
    dzHandleDown({clientX:afterRotate.right,clientY:afterRotate.bottom,pointerId:73,target:rect,
      preventDefault(){},stopPropagation(){}});
    document.dispatchEvent(new PointerEvent("pointermove",{clientX:afterRotate.right+60,clientY:afterRotate.bottom+60,pointerId:73,bubbles:true}));
    document.dispatchEvent(new PointerEvent("pointerup",{clientX:afterRotate.right+60,clientY:afterRotate.bottom+60,pointerId:73,bubbles:true}));
    const afterScale=rect.getBoundingClientRect();
    const transform={rotated:(transformAfterRotate||"").startsWith("matrix("),
      grew:afterScale.width>afterRotate.width&&afterScale.height>afterRotate.height,
      geometryIntact:rect.getAttribute("width")===original&&rect.getAttribute("height")==="80",
      finite:[afterScale.left,afterScale.top,afterScale.width,afterScale.height].every(Number.isFinite)};
    const samples=dzPuntosDeMuestra(rect), localCenter=svg.createSVGPoint();
    localCenter.x=160; localCenter.y=140;
    const expectedCenter=localCenter.matrixTransform(rect.getCTM());
    const rigSampling={count:samples.length,
      transformed:Math.hypot(samples[0].x-expectedCenter.x,samples[0].y-expectedCenter.y)<.01};
    DZ.dirty=false;
    await dzRigEjemplo();
    const exampleIds=Object.keys(DZ_EJEMPLO_RIG);
    const example={pieces:exampleIds.length,allVisible:exampleIds.every(id=>document.getElementById(id)),
      allBound:exampleIds.every(id=>DZ.doc.scene.rigNode(id)?.binding?.elementId===id),
      shoulders:["hombro_izq","hombro_der"].every(id=>DZ.doc.scene.rigNode(id))};
    DZ.doc.setRigKey("brazo_der",12,{x:4,y:-3,r:28,sx:1,sy:1});
    const saved=JSON.parse(JSON.stringify(DZ.doc.toJSON()));
    const reopened=LOW.animation.LowDoc.fromJSON(saved), reopenedArm=reopened.scene.rigNode("brazo_der");
    const exported=dzRigView(svg.outerHTML,12);
    const persistence={bindings:Object.keys(reopened.scene.rig.bindings||{}).length,
      pose:reopenedArm?.keys?.[12]?.r,diagnostics:(reopened.scene.rig.diagnostics||[]).length,
      exportPosed:exported.includes("matrix("),exportClean:!exported.includes("data-rigbase")};
    const track=new LOW.animation.MotionCaptureTrack(DZ.doc);
    track.setPose(1,{hips:{x:.45,y:.7},neck:{x:.45,y:.4}},1);
    track.setPose(5,{hips:{x:.55,y:.7},neck:{x:.55,y:.4}},1);DZ.doc.mocap=track;dzMocapWire();
    const complete=document.querySelector("#mocapPoseInterpolation"),tolerance=document.querySelector("#mocapKeyTolerance");
    complete.checked=true;complete.dispatchEvent(new Event("change",{bubbles:true}));tolerance.value="3";tolerance.dispatchEvent(new Event("input",{bubbles:true}));
    const poseState=dzMocapPoseStatus(),mocap={generated:poseState.report.generatedFrames,spine:poseState.report.chainFrames.spine,
      optionSaved:DZ.doc.mocap.analysisOptions.poseInterpolation===true&&DZ.doc.mocap.analysisOptions.keyTolerance===3,
      applyVisible:!document.querySelector("#mocapApplyRig").hidden,status:document.querySelector("#mocapPoseStatus").textContent};
    dzSelect(document.getElementById("mano_izq"));
    dzReleaseFocus();
    window.__deleteSeen=null;
    window.addEventListener("keydown",e=>{window.__deleteSeen=e.key;},{once:true});
    const objectBefore={selected:DZ.sel?.id,activeTag:document.activeElement?.tagName,
      shortcuts:!!window.__lowAnimKeys,node:!!DZ.doc.scene.rigNode("mano_izq")};
    document.dispatchEvent(new KeyboardEvent("keydown",{key:"Delete",bubbles:true,cancelable:true}));
    const objectDeleted=!document.getElementById("mano_izq");
    dzRigSetMode("build"); DZ.rigSelectedId="mano_der"; dzRigPanelSync();
    dzReleaseFocus();
    document.dispatchEvent(new KeyboardEvent("keydown",{key:"Delete",bubbles:true,cancelable:true}));
    const boneDeleted=!DZ.doc.scene.rigNode("mano_der");
    const deletion={objectDeleted,boneDeleted,objectBefore,eventSeen:window.__deleteSeen};
    const canvas={width:DZ.doc.scene.width,height:DZ.doc.scene.height};
    return {rig,vector,transform,rigSampling,example,persistence,mocap,deletion,canvas};
  })()`;
  const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  stage("evaluar resultado");
  ws.close();
  if (result.exceptionDetails) throw Error(result.exceptionDetails.exception?.description
    || result.exceptionDetails.text || "Excepción en la interfaz");
  const value = result.result?.value, rig=value?.rig, vector=value?.vector;
  if (!rig || rig.disabled || rig.bones < 1 || rig.submode !== "fk" || rig.tool !== "pose" || !rig.active)
    throw Error("REGRESIÓN: Animar no abrió con esqueleto solo: " + JSON.stringify(value));
  if (!vector?.changed || !vector.cancelled || !vector.restored || !vector.idle)
    throw Error("REGRESIÓN: gesto vectorial no se pudo cancelar limpiamente: " + JSON.stringify(value));
  if (!value.transform?.rotated || !value.transform.grew || !value.transform.geometryIntact || !value.transform.finite)
    throw Error("REGRESIÓN: giro/escala del cuadro delimitador: " + JSON.stringify(value));
  if (value.rigSampling?.count !== 5 || !value.rigSampling.transformed)
    throw Error("REGRESIÓN: Repartir compara pieza y hueso en sistemas distintos: " + JSON.stringify(value));
  if (value.example?.pieces < 18 || !value.example.allVisible || !value.example.allBound || !value.example.shoulders)
    throw Error("REGRESIÓN: personaje completo de Ayuda incompleto o sin vincular: " + JSON.stringify(value));
  if (value.persistence?.bindings < 18 || value.persistence.pose !== 28 || value.persistence.diagnostics ||
      !value.persistence.exportPosed || !value.persistence.exportClean)
    throw Error("REGRESIÓN: rig no sobrevive guardar/reabrir/exportar: " + JSON.stringify(value));
  if (value.mocap?.generated !== 5 || value.mocap?.spine !== 5 || !value.mocap.optionSaved || !value.mocap.applyVisible)
    throw Error("REGRESIÓN: diagnóstico/opciones de retargeting no funcionan en la interfaz: " + JSON.stringify(value));
  if (!value.deletion?.objectDeleted || !value.deletion?.boneDeleted)
    throw Error("REGRESIÓN: Supr no elimina objeto y hueso según contexto: " + JSON.stringify(value));
  if (value.canvas?.width !== 1920 || value.canvas?.height !== 1080)
    throw Error("REGRESIÓN: el lienzo nuevo no es Full HD: " + JSON.stringify(value));
  console.log("E2E 2D OK: rig, vectores y personaje completo de Ayuda", JSON.stringify(value));
}

main().catch(error => { console.error(error.stack || error); process.exit(1); });
