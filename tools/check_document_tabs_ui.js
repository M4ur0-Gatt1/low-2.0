/* Aceptación de jerarquía y documentos múltiples en Chromium. CDP :9223 + mock :8791. */
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
    const timer = setTimeout(() => { pending.delete(n); reject(Error("CDP sin respuesta: " + method)); }, 30000);
    pending.set(n, { resolve: value => { clearTimeout(timer); resolve(value); }, reject: error => { clearTimeout(timer); reject(error); } });
    ws.send(JSON.stringify({ id: n, method, params }));
  });
  await send("Page.enable"); await send("Runtime.enable"); await send("Network.enable");
  await send("Network.setCacheDisabled", { cacheDisabled: true }); await send("Page.navigate", { url: pageUrl });
  for (let i = 0; i < 60; i++) { const ready = await send("Runtime.evaluate", { expression: 'typeof dzDocumentTabActivate==="function"', returnByValue: true });
    if (ready.result?.value) break; await new Promise(resolve => setTimeout(resolve, 250)); }
  const expression = `(async()=>{
    await openDesign("C:\\mock\\personaje-a.svg");
    const first=DZ.activeDocumentTab,svg=document.querySelector('#dzCanvas > svg');
    svg.setAttribute('data-document-proof','A');dzMarkDirty();
    await openDesign("C:\\mock\\fondo-b.svg");
    const second=DZ.activeDocumentTab;
    await dzDocumentTabActivate(first);
    const restored=document.querySelector('#dzCanvas > svg')?.getAttribute('data-document-proof');
    await dzDocumentTabActivate(second);await dzDocumentTabClose(second);
    const menu=[...document.querySelectorAll('#dzMenubar > .dz-menu')].map(n=>n.dataset.menu);
    const tools=[...document.querySelectorAll('.dz-tools > [data-tool],.dz-tools > #dzShapePicker,.dz-tools > #dzAddText,.dz-tools > #dzAddLine')].map(n=>n.dataset.tool||n.id);
    const tabs=document.querySelector('#dzDocumentTabs'),opts=document.querySelector('#dzToolOpts'),body=document.querySelector('.dz-body');
    const tr=tabs.getBoundingClientRect(),orr=opts.getBoundingClientRect(),br=body.getBoundingClientRect();
    return {count:DZ.documentTabs.length,active:DZ.activeDocumentTab===first,restored,
      dirty:DZ.documentTabs[0]?.dirty,titleHidden:getComputedStyle(document.querySelector('#dzTitle')).display==='none',
      menu,tools,tabsRole:tabs.getAttribute('role'),between:tr.top>=orr.bottom-1&&tr.bottom<=br.top+1,
      tabButtons:tabs.querySelectorAll('[role="tab"]').length,errors:window.__errs||[]};
  })()`;
  const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  const value = result.result?.value;
  const expectedMenu = ["archivo", "edicion", "capa", "animacion", "vista", "ventana", "ayuda"];
  const primaryTools = ["select", "direct", "nodes", "brush", "pencil", "eraser", "bucket", "dropper", "pen"];
  const ok = value?.count === 1 && value.active && value.restored === "A" && value.dirty && value.titleHidden &&
    JSON.stringify(value.menu) === JSON.stringify(expectedMenu) &&
    JSON.stringify(value.tools.slice(-14, -5)) === JSON.stringify(primaryTools) &&
    value.tabsRole === "tablist" && value.between && value.tabButtons === 1 && !errors.length && !value.errors.length;
  if (!ok) throw Error("REGRESIÓN documentos/jerarquía: " + JSON.stringify({ value, errors }));
  console.log("E2E DOCUMENTOS OK", JSON.stringify(value));
  ws.close(); try { await fetch(endpoint + "/json/close/" + target.id); } catch (_) { /* cierre best effort */ }
}
main().catch(error => { console.error(error.stack || error); process.exit(1); });
