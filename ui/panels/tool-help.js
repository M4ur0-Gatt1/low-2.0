/* Hover and keyboard help for the drawing toolbar. */
(() => {
  let current=null,timer=null,bubble=null;
  const hide=()=>{clearTimeout(timer);bubble?.remove();bubble=null;current=null;};
  const show=(target)=>{
    if(current===target)return;hide();if(!target)return;current=target;
    timer=setTimeout(()=>{
      if(!target.isConnected)return;const text=target.getAttribute('title');if(!text)return;
      bubble=document.createElement('div');bubble.className='dz-tool-tooltip';bubble.setAttribute('role','tooltip');bubble.textContent=text;document.body.appendChild(bubble);
      const rect=target.getBoundingClientRect(), b=bubble.getBoundingClientRect();
      bubble.style.left=Math.max(8,Math.min(innerWidth-b.width-8,rect.right+8))+'px';bubble.style.top=Math.max(8,Math.min(innerHeight-b.height-8,rect.top))+'px';
    },180);
  };
  const pick=e=>e.target.closest?.('#designView button[title],#designView [data-tool][title]');
  document.addEventListener('pointerover',e=>show(pick(e)));
  document.addEventListener('focusin',e=>show(pick(e)));
  document.addEventListener('pointerdown',hide,true);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')hide();});
  document.addEventListener('focusout',hide);
})();
