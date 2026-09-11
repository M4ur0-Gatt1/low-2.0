// Real pointer and keyboard regression for the drawing tools reported by Mauro.
const endpoint=process.argv[2]||'http://127.0.0.1:9223';
const url=process.argv[3]||'http://127.0.0.1:8791/ui/index.html?mock=1';
(async()=>{
 const target=await(await fetch(endpoint+'/json/new?about:blank',{method:'PUT'})).json();
 const ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});
 let id=0;const pending=new Map();
 ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.method==='Page.javascriptDialogOpening'){ws.send(JSON.stringify({id:++id,method:'Page.handleJavaScriptDialog',params:{accept:false}}));return;}const p=pending.get(m.id);if(!p)return;pending.delete(m.id);m.error?p.reject(Error(JSON.stringify(m.error))):p.resolve(m.result);};
 const send=(method,params={})=>new Promise((resolve,reject)=>{const n=++id;const timer=setTimeout(()=>reject(Error('Timeout '+method)),60000);pending.set(n,{resolve:v=>{clearTimeout(timer);resolve(v);},reject:e=>{clearTimeout(timer);reject(e);}});ws.send(JSON.stringify({id:n,method,params}));});
 const value=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result.value;};
 const wait=ms=>new Promise(r=>setTimeout(r,ms));
 const point=async selector=>value(`(()=>{const r=document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2};})()`);
 const screen=async(x,y)=>value(`(()=>{const p=new DOMPoint(${x},${y}).matrixTransform(document.querySelector('#dzCanvas > svg').getScreenCTM());return{x:p.x,y:p.y};})()`);
 const mouse=(type,p)=>send('Input.dispatchMouseEvent',{type,...p,button:type==='mouseMoved'?'none':'left',buttons:type==='mousePressed'?1:0,clickCount:1});
 const click=async p=>{await mouse('mousePressed',p);await mouse('mouseReleased',p);};
 const button=async s=>click(await point(s));
 const key=async key=>{await send('Input.dispatchKeyEvent',{type:'keyDown',key,code:key});await send('Input.dispatchKeyEvent',{type:'keyUp',key,code:key});};
 try{
 await send('Page.enable');await send('Network.enable');await send('Network.setCacheDisabled',{cacheDisabled:true});await send('Emulation.setDeviceMetricsOverride',{width:1366,height:900,deviceScaleFactor:1,mobile:false});await send('Emulation.setFocusEmulationEnabled',{enabled:true});await send('Page.navigate',{url});
 for(let i=0;i<80;i++){if(await value('typeof api!=="undefined"&&!!api&&typeof dzTextToolStart==="function"'))break;await wait(150);}
 await value(`(async()=>{await openDesign('mock.svg');await dzDocInit();closeL3d();LOW.workspace.workspaces.activate('drawing',dzWsAplicar);window.testSvg=document.querySelector('#dzCanvas > svg');testSvg.innerHTML='';dzDocCommit();})()`);
 await button('#dzAddText');await click(await screen(600,300));await send('Input.insertText',{text:'Texto editable'});
 if(!await value('!!DZ_TEXT_EDIT&&!testSvg.querySelector("text")'))throw Error('Texto se escribe antes de Aplicar');
 await button('.dz-text-editor button');
 if(!await value('testSvg.querySelector("text")?.textContent==="Texto editable"'))throw Error('Texto no se aplica');
 await value('dzUndo()');if(await value('!!document.querySelector("#dzCanvas text")'))throw Error('Texto no deshace');
 await button('#dzAddText');await click(await screen(600,300));await send('Input.insertText',{text:'Cancelar'});await key('Escape');
 if(await value('!!testSvg.querySelector("text")||!!DZ_TEXT_EDIT'))throw Error('Texto cancelado deja contenido');
 console.log('Texto: clic, escritura, aplicar, Undo y Escape OK');
 await value(`(()=>{testSvg=document.querySelector('#dzCanvas > svg');DZ.brushPreset='dry-brush';DZ.drawW=20;const brush=dzBrushFinalElement([[600,500,1],[700,500,1],[800,500,1]],'#111');brush.id='test-brush';const layer=document.createElementNS(testSvg.namespaceURI,'g');layer.setAttribute('data-low-art','line');layer.append(brush);testSvg.append(layer);dzDocCommit();dzBienvenida2DPintar();dzSetTool('select');})()`);
 const dab=await point('#test-brush ellipse');console.log(await value(`({hit:dzHitTest(${dab.x},${dab.y})?.outerHTML?.slice(0,100),top:document.elementFromPoint(${dab.x},${dab.y})?.outerHTML?.slice(0,150),text:!!DZ_TEXT_EDIT})`));await click(dab);
 if(!await value('DZ.sel?.id==="test-brush"'))throw Error('Seleccionó círculo interno '+JSON.stringify(await value('({selected:DZ.sel?.outerHTML?.slice(0,120),tool:DZ.tool,rect:document.querySelector("#test-brush").getBoundingClientRect().toJSON()})'))+' point '+JSON.stringify(dab));
 console.log(await value(`(()=>{const n=document.querySelector('[data-tool="handler"]'),r=n.getBoundingClientRect();return{rect:r.toJSON(),css:getComputedStyle(n).display,top:document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)?.outerHTML?.slice(0,150)}})()`));await button('[data-tool="handler"]');await mouse('mousePressed',dab);console.log(await value('({tool:DZ.tool,handler:!!HANDLER,el:HANDLER?.el?.id,width:HANDLER?.startW,state:HANDLER?.brushWidth?.kind})'));await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:dab.x,y:dab.y-40,buttons:1});await mouse('mouseReleased',{x:dab.x,y:dab.y-40});await wait(400);
 if(!await value('+document.querySelector("#test-brush").getAttribute("data-low-brush-size")>20'))throw Error('Bomba no engrosa pincel');
 await value('dzUndo()');if(!await value('+document.querySelector("#test-brush").getAttribute("data-low-brush-size")===20'))throw Error('Bomba no deshace');
 console.log('Pincel texturado: selección atómica y bomba física con Undo OK');
 await value(`(()=>{testSvg=document.querySelector('#dzCanvas > svg');testSvg.innerHTML='<rect data-low-page="1" width="1920" height="1080" fill="white"/><rect x="600" y="200" width="200" height="180" fill="none" stroke="black" stroke-width="4"/>';dzDeselect();dzDocCommit();dzColoringPrefsSet('scope','drawing');DZ.fillColor='#b83232';dzSetTool('bucket');})()`);
 await click(await screen(650,250));for(let i=0;i<100;i++){if(!await value('!!DZ.coloringBusy'))break;await wait(100);}
 if(!await value(`(()=>{const p=testSvg.querySelector('[data-low="fill"]');if(!p)return false;const b=p.getBBox();return b.x>=598&&b.y>=198&&b.x+b.width<=802&&b.y+b.height<=382;})()`))throw Error('Relleno se sale del rectángulo');
 const before=await value('DZ.doc.drawing.content');await click(await screen(350,250));for(let i=0;i<100;i++){if(!await value('!!DZ.coloringBusy'))break;await wait(100);}
 if(await value('DZ.doc.drawing.content')!==before)throw Error('Balde llena exterior de la hoja');
 console.log('Balde: borde recto y exterior sin relleno OK');
 await send('Input.dispatchMouseEvent',{type:'mouseMoved',...await point('[data-tool="handler"]')});await wait(250);
 if(!await value('!!document.querySelector(".dz-tool-tooltip")'))throw Error('Falta ayuda visible');
 console.log('Ayuda al pasar el puntero OK');
 if(process.env.LOW_DRAWING_SCREENSHOT){const shot=await send('Page.captureScreenshot',{format:'png'});require('fs').writeFileSync(process.env.LOW_DRAWING_SCREENSHOT,Buffer.from(shot.data,'base64'));}
 }finally{ws.close();await fetch(endpoint+'/json/close/'+target.id);}
})().catch(e=>{console.error(e.stack);process.exit(1);});
