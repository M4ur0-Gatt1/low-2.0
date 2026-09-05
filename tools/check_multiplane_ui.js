/* E2E Chromium: viewport 3D → inspector/gizmo → Undo/Redo → Auto-key → reapertura. */
const endpoint = process.argv[2] || "http://127.0.0.1:9223";
const pageUrl = process.argv[3] || "http://127.0.0.1:8791/ui/index.html?mock=1";

async function main() {
  const stage = name => console.error("E2E etapa: " + name);
  stage("conectar");
  const created = await (await fetch(endpoint + "/json/new?about:blank", { method: "PUT" })).json();
  if (!created?.webSocketDebuggerUrl) throw Error("Chromium no expuso una página CDP");
  const ws = new WebSocket(created.webSocketDebuggerUrl);
  await new Promise((ok, fail) => { ws.onopen = ok; ws.onerror = fail; });
  let id = 0; const pending = new Map(), errores = [];
  ws.onmessage = event => {
    const msg = JSON.parse(event.data);
    if (msg.method === "Page.javascriptDialogOpening")
      return ws.send(JSON.stringify({ id: ++id, method: "Page.handleJavaScriptDialog", params: { accept: false } }));
    if (msg.method === "Runtime.exceptionThrown") errores.push(msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text || "error");
    if (!msg.id || !pending.has(msg.id)) return;
    const task = pending.get(msg.id); pending.delete(msg.id);
    msg.error ? task.fail(Error(JSON.stringify(msg.error))) : task.ok(msg.result);
  };
  const send = (method, params = {}) => new Promise((ok, fail) => {
    const callId = ++id, timer = setTimeout(() => { pending.delete(callId); fail(Error("CDP sin respuesta")); }, 30000);
    pending.set(callId, { ok: value => { clearTimeout(timer); ok(value); }, fail: error => { clearTimeout(timer); fail(error); } });
    ws.send(JSON.stringify({ id: callId, method, params }));
  });
  await send("Page.enable"); await send("Runtime.enable"); await send("Network.enable");
  await send("Network.setCacheDisabled", { cacheDisabled: true });
  stage("navegar"); await send("Page.navigate", { url: pageUrl });
  await new Promise(ok => setTimeout(ok, 2400));

  stage("ejecutar flujo");
  const expression = `(async()=>{
    const wait=ms=>new Promise(r=>setTimeout(r,ms));
    await openDesign("C:\\\\mock\\\\multiplane.svg"); await dzDocInit(); await wait(400);
    LOW.workspace.workspaces.activate("composite",dzWsAplicar); await wait(500);
    const svg=document.querySelector("#dzCanvas > svg");
    if(!svg.children.length){const g=document.createElementNS("http://www.w3.org/2000/svg","g");g.id="fondo";g.innerHTML='<rect x="0" y="0" width="200" height="100" fill="#567"/>';svg.appendChild(g);dzDocCommit();}
    dzCompositionViewRender(); await wait(250);
    const root=document.querySelector("#dzComposition3D"),auto=root.querySelector('[data-a="autokey"]');
    if(auto.classList.contains("active")) auto.click();
    let kids=dzCompositionElements(svg),el=kids[0]; dzSelect(el); DZ_COMPOSITION_VIEW.select(dzCompositionPlaneRef(el,0).id);
    const ref=dzCompositionPlaneRef(el,0),history0=DZ.history.undoStack.length;
    let exact=root.querySelector('.cmp3-inspector input[data-p="z"]'); exact.value="180"; exact.dispatchEvent(new Event("change",{bubbles:true})); await wait(350);
    kids=dzCompositionElements(document.querySelector("#dzCanvas > svg")); el=kids[0];
    root.focus(); root.dispatchEvent(new KeyboardEvent("keydown",{key:"g",bubbles:true})); root.dispatchEvent(new KeyboardEvent("keydown",{key:"z",bubbles:true}));
    const shortcut={tool:DZ_COMPOSITION_VIEW.pendingTool,label:root.querySelector('.cmp3-mode').textContent};
    root.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:true}));
    const changed={panel:!root.hidden&&document.querySelector("#dzZPanel").hidden,z:DZ.doc.scene.compositionTransformAt(ref.id).z,
      attr:+el.getAttribute("data-z"),history:DZ.history.undoStack.length-history0,planes:root.querySelectorAll('.cmp3-card').length,
      outliner:root.querySelectorAll('.cmp3-list button').length,gizmos:root.querySelectorAll('.cmp3-gizmo [data-axis]').length,
      snap:root.querySelector('[data-a="snap"]').classList.contains('active'),feather:!!DZ.d3||!document.querySelector("#l3dView").hidden};
    dzUndo(); await wait(350); kids=dzCompositionElements(document.querySelector("#dzCanvas > svg")); el=kids[0];
    const undone={z:DZ.doc.scene.compositionTransformAt(ref.id).z,attr:+el.getAttribute("data-z")||0};
    dzRedo(); await wait(350); kids=dzCompositionElements(document.querySelector("#dzCanvas > svg")); el=kids[0];
    const redone={z:DZ.doc.scene.compositionTransformAt(ref.id).z,attr:+el.getAttribute("data-z")||0};
    if(!auto.classList.contains("active")) auto.click();
    DZ.doc.goTo(8); await wait(350); kids=dzCompositionElements(document.querySelector("#dzCanvas > svg")); el=kids[0]; dzSelect(el); dzZPanelRender();
    dzCompositionViewRender(); exact=root.querySelector('.cmp3-inspector input[data-p="z"]'); exact.value="240"; exact.dispatchEvent(new Event("change",{bubbles:true})); await wait(350);
    const rotation=root.querySelector('.cmp3-inspector input[data-p="rotationZ"]'); rotation.value="12"; rotation.dispatchEvent(new Event("change",{bubbles:true})); await wait(350);
    const keyed=DZ.doc.scene.compositionPlane(ref.id).keys[8]?.z;
    const keyedRotation=DZ.doc.scene.compositionPlane(ref.id).keys[8]?.rotationZ;
    const reopened=new LOW.animation.Scene(DZ.doc.scene.toJSON());
    dzDocCommit(); let saved=null;
    api.save_file=async(path,content,name)=>{saved={path,content,name};return {path:"C:\\mock\\roundtrip.lowscene",name:"roundtrip.lowscene"};};
    const savedOk=await dzSceneSave(true), diskDoc=saved&&LOW.animation.LowDoc.fromJSON(saved.content);
    const exportSvg=dzCuadroSvgTexto(8), cameraSvg=dzCamView(exportSvg,dzCamDefault());
    DZ.tlView?.render(); await wait(100);
    return {changed,shortcut,undone,redone,keyed,keyedRotation,reopened:reopened.compositionTransformAt(ref.id,8)?.z,
      disk:{ok:savedOk,name:saved?.name,z:diskDoc?.scene.compositionTransformAt(ref.id,8)?.z},
      export:{z:/data-z=["']240["']/.test(exportSvg),rotation:/data-comp-rz=["']12["']/.test(exportSvg),wrapped:cameraSvg.includes("translate(")},
      timeline:{keys:document.querySelectorAll('.tl2-tick.compkey').length,title:[...document.querySelectorAll('.tl2-tick.compkey')].some(n=>/composición/.test(n.title))}};
  })()`;
  const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  const value = result.result?.value;
  stage("verificar");
  if (!value?.changed?.panel || value.changed.z !== 180 || value.changed.attr !== 180 || value.changed.history !== 1)
    throw Error("REGRESIÓN: Z no confirmó una sola transacción: " + JSON.stringify(value));
  if (!value.changed.planes || value.changed.planes !== value.changed.outliner || value.changed.gizmos !== 4 || !value.changed.snap)
    throw Error("REGRESIÓN: viewport, outliner o gizmo incompletos: " + JSON.stringify(value));
  if (value.shortcut?.tool !== "z" || value.shortcut?.label !== "Mover Z")
    throw Error("REGRESIÓN: atajo G Z no activa profundidad: " + JSON.stringify(value));
  if (value.changed.feather) throw Error("REGRESIÓN: Composición abrió el módulo Feather: " + JSON.stringify(value));
  if (value.undone.z !== 0 || value.undone.attr !== 0 || value.redone.z !== 180 || value.redone.attr !== 180)
    throw Error("REGRESIÓN: Undo/Redo no sincronizó modelo y vista: " + JSON.stringify(value));
  if (value.keyed !== 240 || value.keyedRotation !== 12 || value.reopened !== 240)
    throw Error("REGRESIÓN: Auto-key o reapertura perdió Z: " + JSON.stringify(value));
  if (!value.disk?.ok || value.disk.z !== 240 || !/\.lowscene$/i.test(value.disk.name || ""))
    throw Error("REGRESIÓN: guardado físico/reapertura perdió la composición: " + JSON.stringify(value));
  if (!value.export?.z || !value.export?.rotation || !value.export?.wrapped)
    throw Error("REGRESIÓN: export no aplicó la transformación del frame: " + JSON.stringify(value));
  if (!value.timeline?.keys || !value.timeline?.title)
    throw Error("REGRESIÓN: Timeline no muestra claves de composición: " + JSON.stringify(value));
  if (errores.length) throw Error("REGRESIÓN: excepciones UI: " + errores.slice(0, 3).join(" | "));
  console.log("E2E multiplano OK", JSON.stringify(value));
  try { await fetch(endpoint + "/json/close/" + created.id); } catch (_) {}
}
main().catch(error => { console.error(error.stack || error); process.exit(1); });
