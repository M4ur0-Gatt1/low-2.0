/* Recorrido E2E real en Chromium: lienzo -> biblioteca -> humano -> Animar.
   Requiere un Chromium con CDP en http://127.0.0.1:9223. */
const endpoint = process.argv[2] || "http://127.0.0.1:9223";
const pageUrl = process.argv[3] || "http://127.0.0.1:8791/ui/index.html?mock=1";

async function main() {
  const targets = await (await fetch(endpoint + "/json")).json();
  const target = targets.find(t => t.type === "page") || targets[0];
  if (!target?.webSocketDebuggerUrl) throw Error("Chromium no expuso una página CDP");
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((ok, fail) => { ws.onopen = ok; ws.onerror = fail; });
  let id = 0; const pending = new Map();
  ws.onmessage = event => {
    const msg = JSON.parse(event.data);
    if (!msg.id || !pending.has(msg.id)) return;
    const { ok, fail } = pending.get(msg.id); pending.delete(msg.id);
    msg.error ? fail(Error(JSON.stringify(msg.error))) : ok(msg.result);
  };
  const send = (method, params = {}) => new Promise((ok, fail) => {
    const callId = ++id; pending.set(callId, { ok, fail });
    ws.send(JSON.stringify({ id: callId, method, params }));
  });
  await send("Page.enable"); await send("Runtime.enable");
  await send("Page.navigate", { url: pageUrl });
  await new Promise(ok => setTimeout(ok, 1800));
  const expression = `(async()=>{
    await openDesign("C:\\\\mock\\\\rig-test.svg");
    await dzDocInit();
    if(!DZ.rigMode) dzRigToggle();
    dzRigLibraryAdd("human_standard");
    dzRigPanelSync();
    const button=document.querySelector("#rigModeAnim");
    const before={disabled:button.disabled,bones:Object.keys(DZ.doc.scene.rig.bones||{}).length};
    button.click();
    return {...before,submode:DZ.rigSubmode,tool:DZ.rigTool,active:button.classList.contains("on")};
  })()`;
  const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  ws.close();
  if (result.exceptionDetails) throw Error(result.exceptionDetails.exception?.description
    || result.exceptionDetails.text || "Excepción en la interfaz");
  const value = result.result?.value;
  if (!value || value.disabled || value.bones < 1 || value.submode !== "fk" || value.tool !== "pose" || !value.active)
    throw Error("REGRESIÓN: Animar no abrió con esqueleto solo: " + JSON.stringify(value));
  console.log("E2E RIG OK: humano sin personaje -> Animar FK -> Posar", JSON.stringify(value));
}

main().catch(error => { console.error(error.stack || error); process.exit(1); });
