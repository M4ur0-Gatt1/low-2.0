const endpoint=process.argv[2]||"http://127.0.0.1:9223";
const url=process.argv[3]||"http://127.0.0.1:8791/ui/index.html?mock=1";
async function main(){
 const existing=url==="-";
 const target=existing?(await(await fetch(endpoint+"/json")).json()).find(t=>t.type==="page"):
   await(await fetch(endpoint+"/json/new?about:blank",{method:"PUT"})).json();
 const ws=new WebSocket(target.webSocketDebuggerUrl); await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});
 let id=0;const pending=new Map();ws.onmessage=e=>{const m=JSON.parse(e.data),p=pending.get(m.id);if(p){pending.delete(m.id);m.error?p.reject(Error(JSON.stringify(m.error))):p.resolve(m.result);}};
 const send=(method,params={})=>new Promise((resolve,reject)=>{const n=++id;const timer=setTimeout(()=>{pending.delete(n);reject(Error("Timeout "+method));},30000);pending.set(n,{resolve:v=>{clearTimeout(timer);resolve(v);},reject:e=>{clearTimeout(timer);reject(e);}});ws.send(JSON.stringify({id:n,method,params}));});
 try{
 await send("Page.enable");await send("Runtime.enable");await send("Network.enable");await send("Network.setCacheDisabled",{cacheDisabled:true});
 if(!existing)await send("Page.navigate",{url});
 else await send("Page.reload",{ignoreCache:true});
 let ready=false;for(let i=0;i<80;i++){const r=await send("Runtime.evaluate",{expression:'!!globalThis.LOW?.rigging?.flexibleLimbUI && !!api',returnByValue:true});if(r.result?.value){ready=true;break;}await new Promise(r=>setTimeout(r,250));}
 if(!ready)throw Error("La herramienta de articulación no arrancó");
 const result=await send("Runtime.evaluate",{awaitPromise:true,returnByValue:true,expression:`(async()=>{
 const wait=ms=>new Promise(r=>setTimeout(r,ms));const assert=(v,m)=>{if(!v)throw Error(m)};
 await openDesign(${JSON.stringify(process.argv[4]||"mock.svg")});await dzDocInit();await wait(500);
 if(!DZ.anim)await dzAnimToggle();
 if(!DZ.rigMode)dzRigToggle();dzRigSetMode("build");await wait(200);
 let svg=document.querySelector("#dzCanvas > svg");svg.innerHTML='<path id="limbtest" d="M100 180 L500 180 L500 220 L100 220 Z" fill="#ed853b"/>';
 dzDocCommit();await wait(100);svg=document.querySelector("#dzCanvas > svg");
 const original=DZ.doc.drawing.content;dzSelect(svg.querySelector("#limbtest"));
 const before=DZ.history.undoStack.length;
 document.querySelector("#rigLimbArm").click();
 for(const p of [{x:100,y:200},{x:300,y:200},{x:500,y:200}]){
 const q=new DOMPoint(p.x,p.y).matrixTransform(svg.getScreenCTM());
 document.querySelector("#dzCanvas").dispatchEvent(new PointerEvent("pointerdown",{bubbles:true,cancelable:true,button:0,clientX:q.x,clientY:q.y}));}
 await wait(350);
 const sc=DZ.doc.scene, mesh=sc.rigMesh("limbtest");
 assert(mesh,"Los tres clics no crearon malla: "+document.querySelector("#rigLimbHint").textContent);
 assert(sc.rigNode("limbtest:lower").parentId==="limbtest:upper","Sin cadena articulada");
 assert(mesh.weights.every(w=>Math.abs(Object.values(w).reduce((a,b)=>a+b,0)-1)<1e-6),"Pesos inválidos");
 assert(DZ.history.undoStack.length-before===1,"Crear articulación requiere más de un Undo: "+JSON.stringify(DZ.history.undoStack.slice(before).map(e=>e.label)));
 dzUndo();await wait(150);assert(!DZ.doc.scene.rigMesh("limbtest"),"Undo conserva la malla");assert(DZ.doc.drawing.content===original,"Undo no devuelve el dibujo original");
 dzRedo();await wait(150);assert(DZ.doc.scene.rigMesh("limbtest"),"Redo no recupera el rig");
 const base=document.querySelector("#limbtest").getAttribute("d");
 DZ.doc.setRigKey("limbtest:lower",1,{r:70,x:0,y:0,sx:1,sy:1});await wait(200);dzRigApplyLive(1);
 const painted=document.querySelector("#limbtest").getAttribute("d");assert(painted!==base,"El hueso no dobla el dibujo visible");
 const mapper=DZ.doc.scene.rigMallaAt("limbtest",1), root=mapper.punto({x:100,y:200}), tip=mapper.punto({x:500,y:200});
 assert(Math.hypot(root.x-100,root.y-200)<1,"El hombro se mueve al doblar el codo");assert(tip.y>300,"La muñeca no sigue al codo");
 const restored=LOW.animation.LowDoc.fromJSON(JSON.stringify(DZ.doc.toJSON()));
 assert(restored.scene.rigMallaAt("limbtest",1),"Guardar/reabrir pierde el doblez");
 dzRigSetMode("build");
 svg=document.querySelector("#dzCanvas > svg");const rect=document.createElementNS(svg.namespaceURI,"rect");rect.id="legtest";rect.setAttribute("x","600");rect.setAttribute("y","100");rect.setAttribute("width","40");rect.setAttribute("height","400");rect.setAttribute("fill","#46b5ca");svg.appendChild(rect);dzDocCommit();
 dzSelect(document.querySelector("#legtest"));document.querySelector("#rigLimbLeg").click();
 document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:true,cancelable:true}));
 assert(!document.querySelector(".rig-limb-guide")&&!DZ.doc.scene.rigNode("legtest"),"Cancelar modifica el dibujo o deja el gesto activo");
 dzSelect(document.querySelector("#legtest"));document.querySelector("#rigLimbLeg").click();
 svg=document.querySelector("#dzCanvas > svg");
 for(const p of [{x:620,y:100},{x:620,y:300},{x:620,y:500}]){const q=new DOMPoint(p.x,p.y).matrixTransform(svg.getScreenCTM());document.querySelector("#dzCanvas").dispatchEvent(new PointerEvent("pointerdown",{bubbles:true,cancelable:true,button:0,clientX:q.x,clientY:q.y}));}
 await wait(300);assert(DZ.doc.scene.rigMesh("legtest"),"No crea rodilla sobre rectángulo");assert(document.querySelector("#legtest").tagName.toLowerCase()==="path","El rectángulo no se convirtió en geometría flexible");
 DZ.doc.setRigKey("legtest:lower",1,{r:-60,x:0,y:0,sx:1,sy:1});dzRigApplyLive(1);
 assert(DZ.doc.scene.rigMallaAt("legtest",1).punto({x:620,y:500}).x>700,"La rodilla no dobla");
 dzRigSetMode("build");svg=document.querySelector("#dzCanvas > svg");
 const shape=document.createElementNS(svg.namespaceURI,"rect");shape.id="cuttest";shape.setAttribute("x","700");shape.setAttribute("y","100");shape.setAttribute("width","200");shape.setAttribute("height","100");shape.setAttribute("fill","#7fc975");svg.appendChild(shape);dzDocCommit();
 const precut=DZ.doc.drawing.content;dzSelect(document.querySelector("#cuttest"));const cutBefore=DZ.history.undoStack.length;
 document.querySelector("#rigLimbCut").click();
 for(const p of [{x:800,y:50},{x:800,y:250}]){const q=new DOMPoint(p.x,p.y).matrixTransform(svg.getScreenCTM());document.querySelector("#dzCanvas").dispatchEvent(new PointerEvent("pointerdown",{bubbles:true,cancelable:true,button:0,clientX:q.x,clientY:q.y}));}
 await wait(300);const pieces=[...document.querySelectorAll('#dzCanvas [id^="cuttest"]')];
 assert(pieces.length===2,"El corte no produce dos piezas");assert(pieces.every(p=>p.getBBox().width>95&&p.getBBox().width<105),"El corte altera el ancho de las piezas");
 assert(DZ.history.undoStack.length-cutBefore===1,"El corte requiere varios Undo");dzUndo();await wait(150);assert(DZ.doc.drawing.content===precut,"Undo no vuelve a unir el dibujo cortado");dzRedo();await wait(150);assert(document.querySelectorAll('#dzCanvas [id^="cuttest"]').length===2,"Redo pierde una pieza");
 return {vertices:mesh.rest.length,undo:1,visible:painted!==base,root,tip,persiste:true,rodilla:true,cancelar:true,corte:2};})()`});
 if(result.exceptionDetails)throw Error(result.exceptionDetails.exception?.description||result.exceptionDetails.text);
 console.log("E2E articulación flexible OK",JSON.stringify(result.result.value));
 if(process.env.LOW_LIMB_SCREENSHOT){const shot=await send("Page.captureScreenshot",{format:"png"});require("fs").writeFileSync(process.env.LOW_LIMB_SCREENSHOT,Buffer.from(shot.data,"base64"));}
 }finally{ws.close();if(!existing)await fetch(endpoint+"/json/close/"+target.id);}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
