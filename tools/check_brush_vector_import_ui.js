/* E2E: pincel raster importado + personaje SVG estilo Illustrator por piezas. */
const fs = require("fs");
const endpoint = process.argv[2] || "http://127.0.0.1:9223";
const pageUrl = process.argv[3] || "http://127.0.0.1:8791/ui/index.html?mock=1";
const screenshotPath = process.argv[4] || "";

async function main() {
  const page = await (await fetch(endpoint + "/json/new?about:blank", { method: "PUT" })).json();
  const ws = new WebSocket(page.webSocketDebuggerUrl); await new Promise((ok, fail) => { ws.onopen = ok; ws.onerror = fail; });
  let seq = 0; const pending = new Map(), errors = [];
  ws.onmessage = event => {
    const message = JSON.parse(event.data);
    if (message.method === "Page.javascriptDialogOpening") ws.send(JSON.stringify({ id: ++seq, method: "Page.handleJavaScriptDialog", params: { accept: false } }));
    if (message.method === "Runtime.exceptionThrown") errors.push(message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text);
    const task = pending.get(message.id); if (!task) return; pending.delete(message.id); message.error ? task.reject(message.error) : task.resolve(message.result);
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++seq, timer = setTimeout(() => { pending.delete(id); reject(Error("CDP timeout: " + method)); }, 30000);
    pending.set(id, { resolve: value => { clearTimeout(timer); resolve(value); }, reject: value => { clearTimeout(timer); reject(Error(JSON.stringify(value))); } });
    ws.send(JSON.stringify({ id, method, params }));
  });
  await send("Page.enable"); await send("Runtime.enable"); await send("Network.enable"); await send("Network.setCacheDisabled", { cacheDisabled: true });
  await send("Page.navigate", { url: pageUrl }); await new Promise(resolve => setTimeout(resolve, 2200));
  const expression = `(async()=>{
    const wait=ms=>new Promise(r=>setTimeout(r,ms));
    await openDesign("C:\\mock\\imports.svg"); await dzDocInit(); await wait(250);
    const illustrator='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style>.skin{fill:#e98}</style></defs><g id="Layer_1" transform="translate(2 3)" opacity=".9"><path id="brazo" class="skin" d="M0 0h20v50z"/><path id="cabeza" class="skin" d="M40 10h30v30z"/></g></svg>';
    api.import_character_art=async()=>({svg:illustrator,name:"personaje-illustrator.svg",kind:"svg",source_kind:"svg"});
    const pieces=await dzRigImportCharacter();
    const tip='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';
    api.import_brush_pack=async()=>({name:"photoshop.abr",format:"abr",presets:[{name:"Tinta importada",engine:"raster",size:24,opacity:1,flow:.8,spacing:.2,pressureSize:.7,tipData:tip}]});
    const before=LOW.drawing.brushes.all().length; await dzImportBrushes();
    const brush=LOW.drawing.brushes.get(DZ.brushPreset),made=dzBrushFinalElement([[0,0,.2,10,0,0,0],[20,0,.8,20,0,0,10],[40,8,1,30,0,0,20]],"#e5322d");
    const longStroke=Array.from({length:5000},(_,i)=>[i*.8,Math.sin(i/18)*8,.65,0,0,0,i*2]),savedWidth=DZ.drawW; DZ.drawW=.5;
    const longMade=dzBrushFinalElement(longStroke,"#e5322d"); DZ.drawW=savedWidth;
    DZ.brushPreset="charcoal"; const procedural=dzBrushFinalElement([[0,0,.2,10,0,0,0],[20,0,.8,20,0,0,10],[40,8,1,30,0,0,20]],"#222222");
    const importedDelta=LOW.drawing.brushes.all().length-before;
    LOW.workspace.workspaces.activate("composite",dzWsAplicar); await wait(60);
    dzSetTool("brush"); dzBrushStudioOpen(); await wait(100);
    const studio=document.querySelector("#dzBrushStudio"),rect=studio.getBoundingClientRect(),studioState={visible:!studio.hidden&&getComputedStyle(studio).display!=="none"&&rect.width>300&&rect.height>300,workspace:LOW.workspace.workspaces.activeId,docked:document.querySelector("#dzInspector").classList.contains("brush-studio-open"),
      cards:studio.querySelectorAll(".bst-brush").length,controls:studio.querySelectorAll(".bst-controls input").length,preview:studio.querySelector(".bst-preview svg").childElementCount};
    DZ_BRUSH_STUDIO.filter="all"; DZ_BRUSH_STUDIO.selected="animation-pencil"; DZ_BRUSH_STUDIO.render();
    const countBeforeEdit=LOW.drawing.brushes.all().length, sizeControl=studio.querySelector('[data-p="size"]'); sizeControl.value="17"; sizeControl.dispatchEvent(new Event("input",{bubbles:true}));
    studioState.customCreated=LOW.drawing.brushes.all().length===countBeforeEdit+1&&DZ.brushPreset.startsWith("custom-");
    DZ.pressureMin=.1;DZ.pressureMax=.9;
    return {pieces:pieces?.length,ids:pieces?.map(n=>n.id),wrappers:pieces?.every(n=>n.tagName.toLowerCase()==='g'),
      brushes:importedDelta,selected:brush?.name,stamps:made?.querySelectorAll('use').length,
      portable:made?.querySelectorAll('image[href^="data:image/png"]').length===1,filter:!!made?.querySelector('filter feComposite'),
      longStamps:longMade?.querySelectorAll('use').length,longSource:+(longMade?.getAttribute('data-source-dab-count')||0),longAssets:longMade?.querySelectorAll('image[href^="data:image/png"]').length,
      procedural:procedural?.querySelectorAll('ellipse').length,proceduralKind:procedural?.getAttribute('data-low'),studio:studioState,
      penLow:_otPressure({pointerType:'pen',pressure:.1}),penHigh:_otPressure({pointerType:'pen',pressure:.9}),mouse:_otPressure({pointerType:'mouse',pressure:.5})};
  })()`;
  const evaluated = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (evaluated.exceptionDetails) throw Error(evaluated.exceptionDetails.exception?.description || evaluated.exceptionDetails.text);
  const value = evaluated.result.value;
  if (value.pieces !== 2 || !value.wrappers || !value.ids.includes("brazo") || !value.ids.includes("cabeza")) throw Error("SVG no se separó por objetos: " + JSON.stringify(value));
  if (value.brushes !== 1 || value.selected !== "Tinta importada" || !value.stamps || !value.portable || !value.filter) throw Error("Pincel importado no produce stamps: " + JSON.stringify(value));
  if (!value.procedural || value.proceduralKind !== "raster-brush") throw Error("Pincel raster incorporado volvió a cinta vectorial: " + JSON.stringify(value));
  if (!value.longStamps || value.longStamps > 1600 || value.longSource <= value.longStamps || value.longAssets !== 1) throw Error("Trazo raster largo no está optimizado: " + JSON.stringify(value));
  if (!value.studio?.visible || value.studio.workspace !== "drawing" || !value.studio.docked || !value.studio.cards || value.studio.controls !== 9 || !value.studio.preview || !value.studio.customCreated) throw Error("Brush Studio incompleto: " + JSON.stringify(value));
  if (value.penLow !== 0 || value.penHigh !== 1 || value.mouse !== 1) throw Error("Calibración de tableta incorrecta: " + JSON.stringify(value));
  if (errors.length) throw Error(errors.join(" | "));
  console.log("E2E imports OK", JSON.stringify(value));
  if (screenshotPath) {
    const shot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
    fs.writeFileSync(screenshotPath, Buffer.from(shot.data, "base64"));
  }
  try { await fetch(endpoint + "/json/close/" + page.id); } catch (_) {}
}
main().catch(error => { console.error(error.stack || error); process.exit(1); });
