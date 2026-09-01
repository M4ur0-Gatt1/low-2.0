/* Captura de movimiento por video — modelo persistente, independiente de UI. */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const animation = LOW.animation = LOW.animation || {};
  const engines = new Map();

  class MotionCaptureTrack {
    constructor(doc) {
      this.doc = doc || null;
      this.source = null;
      this.range = { in: 1, out: 1 };
      this.status = "empty";
      this.engine = null;
      this.subjectRegion = null;
      this.analysisOptions = { threshold: 54, cleanup: 4, poseInterpolation: true, keyTolerance: 2 };
      this.samples = {};
      this.silhouettes = {};
    }
    setSubjectRegion(region) {
      if (!region) { this.subjectRegion = null; return null; }
      const x=Math.max(0,Math.min(1,Number(region.x)||0)), y=Math.max(0,Math.min(1,Number(region.y)||0));
      const w=Math.max(.01,Math.min(1-x,Number(region.w)||1)), h=Math.max(.01,Math.min(1-y,Number(region.h)||1));
      this.subjectRegion={x,y,w,h}; return this.subjectRegion;
    }
    setSource(meta) {
      meta = meta || {};
      this.source = {
        name: String(meta.name || "video"), path: String(meta.path || ""),
        duration: Math.max(0, Number(meta.duration) || 0),
        width: Math.max(0, Number(meta.width) || 0),
        height: Math.max(0, Number(meta.height) || 0),
        fps: Math.max(0, Number(meta.fps) || 0)
      };
      const sceneFps = this.doc && this.doc.scene ? this.doc.scene.fps : 24;
      this.range = { in: 1, out: Math.max(1, Math.round(this.source.duration * sceneFps)) };
      this.status = "reference";
      return this;
    }
    setPose(frame, joints, confidence) {
      const f = Math.max(1, Math.round(Number(frame) || 1));
      this.samples[f] = { joints: JSON.parse(JSON.stringify(joints || {})),
        confidence: confidence == null ? 1 : Math.max(0, Math.min(1, Number(confidence) || 0)) };
      this.status = "tracked";
      return this.samples[f];
    }
    setSilhouette(frame, data) {
      const f = Math.max(1, Math.round(Number(frame) || 1));
      this.silhouettes[f] = Object.assign({}, data || {});
      this.status = "tracked";
      return this.silhouettes[f];
    }
    silhouetteAt(frame) { return this.silhouettes[Math.max(1, Math.round(Number(frame) || 1))] || null; }
    poseAt(frame) { return this.samples[Math.max(1, Math.round(Number(frame) || 1))] || null; }
    timeAt(frame, sceneFps) {
      const fps = Math.max(1, Number(sceneFps) || (this.doc && this.doc.scene && this.doc.scene.fps) || 24);
      return Math.max(0, (Math.max(1, Number(frame) || 1) - this.range.in) / fps);
    }
    toJSON() {
      return { version: 2, source: this.source, range: this.range, status: this.status,
        subjectRegion: this.subjectRegion,
        analysisOptions: this.analysisOptions,
        engine: this.engine, samples: this.samples, silhouettes: this.silhouettes };
    }
    fromJSON(data) {
      data = data || {};
      this.source = data.source ? Object.assign({}, data.source) : null;
      this.range = Object.assign({ in: 1, out: 1 }, data.range || {});
      this.status = data.status || (this.source ? "reference" : "empty");
      this.engine = data.engine || null;
      this.subjectRegion = data.subjectRegion ? this.setSubjectRegion(data.subjectRegion) : null;
      this.analysisOptions = Object.assign({threshold:54,cleanup:4,poseInterpolation:true,keyTolerance:2},data.analysisOptions||{});
      this.samples = Object.assign({}, data.samples || {});
      this.silhouettes = Object.assign({}, data.silhouettes || {});
      return this;
    }
  }

  function registerMocapEngine(id, engine) {
    if (!id || !engine || typeof engine.analyze !== "function") throw new Error("Motor mocap inválido");
    engines.set(String(id), engine);
  }

  function waitForVideo(video, event) {
    return new Promise((resolve, reject) => {
      const ok = () => { clean(); resolve(); };
      const bad = () => { clean(); reject(new Error("No se pudo decodificar el video")); };
      const clean = () => { video.removeEventListener(event, ok); video.removeEventListener("error", bad); };
      video.addEventListener(event, ok, { once: true });
      video.addEventListener("error", bad, { once: true });
    });
  }
  async function seek(video, time) {
    if (Math.abs(video.currentTime - time) < .002) return;
    const done = waitForVideo(video, "seeked");
    video.currentTime = time;
    await done;
  }
  function encodeMask(mask) {
    const runs = [];
    for (let i = 0; i < mask.length;) {
      const value = mask[i], start = i;
      while (i < mask.length && mask[i] === value && i - start < 65535) i++;
      runs.push(i - start, value);
    }
    return runs;
  }
  function decodeMask(data) {
    const size = Math.max(0, (data.width || 0) * (data.height || 0));
    const out = new Uint8Array(size), runs = data.runs || [];
    let at = 0;
    for (let i = 0; i + 1 < runs.length && at < size; i += 2) {
      out.fill(runs[i + 1] ? 255 : 0, at, Math.min(size, at + runs[i])); at += runs[i];
    }
    return out;
  }

  /* Motor local y determinista. Extrae siluetas de movimiento comparando cada
     cuadro con el primero. No afirma estimar articulaciones: entrega material
     real de rotoscopía aun sin APIs, GPU ni conexión. */
  const localSilhouetteEngine = {
    async analyze(track, video, options) {
      if (!video || !video.duration || !video.videoWidth) throw new Error("El video no está listo");
      if (typeof document === "undefined") throw new Error("El analizador necesita el lienzo de LOW");
      options = options || {};
      const analysis=Object.assign({threshold:54,cleanup:4},track.analysisOptions||{},options.analysis||{});
      const fps = Math.max(1, Number(track.doc && track.doc.scene && track.doc.scene.fps) || 24);
      const width = Math.min(192, Math.max(64, video.videoWidth));
      const height = Math.max(36, Math.round(width * video.videoHeight / video.videoWidth));
      const canvas = document.createElement("canvas"); canvas.width = width; canvas.height = height;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      const oldTime = video.currentTime, oldPaused = video.paused;
      const roi=track.subjectRegion||{x:0,y:0,w:1,h:1};
      const rx0=Math.floor(roi.x*width), ry0=Math.floor(roi.y*height);
      const rx1=Math.ceil((roi.x+roi.w)*width), ry1=Math.ceil((roi.y+roi.h)*height);
      video.pause();
      await seek(video, 0);
      ctx.drawImage(video, 0, 0, width, height);
      const background = ctx.getImageData(0, 0, width, height).data.slice();
      const last = Math.min(track.range.out, track.range.in + Math.max(1, Math.floor(video.duration * fps)) - 1);
      const previous=track.silhouettes;track.silhouettes = {};
      try {
        for (let frame = track.range.in; frame <= last; frame++) {
          if (options.signal && options.signal.aborted) { const e=new Error("Análisis cancelado");e.name="AbortError";throw e; }
          const time = Math.min(video.duration - .001, track.timeAt(frame, fps));
          await seek(video, Math.max(0, time));
          ctx.drawImage(video, 0, 0, width, height);
          const pixels = ctx.getImageData(0, 0, width, height).data;
          const raw = new Uint8Array(width * height), mask = new Uint8Array(width * height);
          for (let p = 0, q = 0; p < pixels.length; p += 4, q++) {
            const px=q%width, py=Math.floor(q/width);
            if(px<rx0||px>=rx1||py<ry0||py>=ry1){ raw[q]=0; continue; }
            const delta = Math.abs(pixels[p] - background[p]) + Math.abs(pixels[p+1] - background[p+1]) + Math.abs(pixels[p+2] - background[p+2]);
            raw[q] = delta > Math.max(1,Number(analysis.threshold)||54) ? 1 : 0;
          }
          let minX=width,minY=height,maxX=-1,maxY=-1,count=0;
          for (let y=1;y<height-1;y++) for (let x=1;x<width-1;x++) {
            const q=y*width+x; let near=0;
            for(let yy=-1;yy<=1;yy++) for(let xx=-1;xx<=1;xx++) near+=raw[q+yy*width+xx];
            if(near>=Math.max(1,Math.min(9,Number(analysis.cleanup)||4))){ mask[q]=1; count++; minX=Math.min(minX,x); minY=Math.min(minY,y); maxX=Math.max(maxX,x); maxY=Math.max(maxY,y); }
          }
          track.setSilhouette(frame,{width,height,runs:encodeMask(mask),coverage:count/mask.length,
            bounds:maxX<0?null:{x:minX/width,y:minY/height,w:(maxX-minX+1)/width,h:(maxY-minY+1)/height}});
          if (options.onProgress) options.onProgress((frame-track.range.in+1)/(last-track.range.in+1), frame, last);
          if ((frame-track.range.in)%4===0) await new Promise(resolve => setTimeout(resolve,0));
        }
      } catch(error) { track.silhouettes=previous;throw error; }
      finally { await seek(video, Math.min(oldTime, video.duration - .001));if (!oldPaused) video.play().catch(()=>{}); }
      track.engine = "local-motion-silhouette"; track.status = "tracked";
      return track;
    }
  };
  const RETARGET_CHAINS = [
    ["spine","hips","neck"],["head","neck","nose"],
    ["clavicle_L","neck","left_shoulder"],["upper_arm_L","left_shoulder","left_elbow"],["forearm_L","left_elbow","left_wrist"],
    ["clavicle_R","neck","right_shoulder"],["upper_arm_R","right_shoulder","right_elbow"],["forearm_R","right_elbow","right_wrist"],
    ["thigh_L","hips","left_knee"],["shin_L","left_knee","left_ankle"],
    ["thigh_R","hips","right_knee"],["shin_R","right_knee","right_ankle"]
  ];
  const MOCAP_JOINTS = ["nose","neck","left_shoulder","right_shoulder","left_elbow","right_elbow","left_wrist","right_wrist","hips","left_knee","right_knee","left_ankle","right_ankle"];
  const clone=value=>JSON.parse(JSON.stringify(value));
  const angle=(a,b)=>Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI;
  const normAngle=value=>{let n=(value+180)%360;if(n<0)n+=360;return n-180;};
  function mocapPoseSequence(track, interpolate = true) {
    const source=track&&track.samples||{},frames=Object.keys(source).map(Number).filter(Number.isFinite).sort((a,b)=>a-b),out={};
    for(const frame of frames)out[frame]=clone(source[frame]);
    if(!interpolate||frames.length<2)return out;
    const names=new Set();for(const frame of frames)Object.keys(source[frame]?.joints||{}).forEach(name=>names.add(name));
    for(const name of names){const keys=frames.filter(frame=>source[frame]?.joints?.[name]);
      for(let index=0;index<keys.length-1;index++){const first=keys[index],last=keys[index+1],a=source[first].joints[name],b=source[last].joints[name];if(last-first<2)continue;
        for(let frame=first+1;frame<last;frame++){out[frame]||(out[frame]={joints:{},confidence:1});out[frame].joints||(out[frame].joints={});if(out[frame].joints[name])continue;const t=(frame-first)/(last-first);
          out[frame].joints[name]={x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t,confidence:Math.min(a.confidence??source[first].confidence??1,b.confidence??source[last].confidence??1),interpolated:true};}
      }
    }
    return Object.fromEntries(Object.entries(out).sort((a,b)=>Number(a[0])-Number(b[0])));
  }
  function mocapPoseReport(track, sequence) {
    const exact=track&&track.samples||{},expanded=sequence||mocapPoseSequence(track,true),confirmed=new Set();
    Object.values(exact).forEach(sample=>Object.keys(sample?.joints||{}).forEach(name=>confirmed.add(name)));
    const chainFrames={};for(const [suffix,a,b] of RETARGET_CHAINS)chainFrames[suffix]=Object.values(expanded).filter(sample=>sample?.joints?.[a]&&sample?.joints?.[b]).length;
    return {confirmedFrames:Object.keys(exact).length,generatedFrames:Object.keys(expanded).length,confirmedJoints:confirmed.size,totalJoints:MOCAP_JOINTS.length,
      missingJoints:MOCAP_JOINTS.filter(name=>!confirmed.has(name)),chainFrames};
  }
  function retargetHumanPose(sample,rig,size) {
    const joints=sample&&sample.joints||{},nodes=rig&&rig.nodes||{},width=Math.max(1,size&&size.width||1),height=Math.max(1,size&&size.height||1);
    const bySuffix=suffix=>Object.values(nodes).find(n=>n.id===suffix||n.id.endsWith("_"+suffix));
    const poses={},worldDelta={};
    const inherited=node=>{let sum=0,parent=node&&node.parentId,guard=0;while(parent&&guard++<64){sum+=worldDelta[parent]||0;parent=nodes[parent]&&nodes[parent].parentId;}return sum;};
    const root=bySuffix("root"),hips=joints.hips;
    if(root&&hips&&root.pivot)poses[root.id]={x:hips.x*width-root.pivot.x,y:hips.y*height-root.pivot.y,r:0,sx:1,sy:1};
    for(const [suffix,aName,bName] of RETARGET_CHAINS){const node=bySuffix(suffix),a=joints[aName],b=joints[bName];if(!node||!a||!b||!node.head||!node.tail)continue;
      const desired=angle({x:a.x*width,y:a.y*height},{x:b.x*width,y:b.y*height}),rest=angle(node.head,node.tail),r=normAngle(desired-rest-inherited(node));
      poses[node.id]={x:0,y:0,r,sx:1,sy:1};worldDelta[node.id]=r;
    }
    return poses;
  }
  function reduceRigPoseSequence(sequence, tolerance = 2) {
    const amount=Math.max(0,Number(tolerance)||0);if(!amount)return clone(sequence||{});
    const byNode={};for(const [rawFrame,poses] of Object.entries(sequence||{})){const frame=Number(rawFrame);for(const [id,pose] of Object.entries(poses||{}))(byNode[id]||(byNode[id]=[])).push({frame,pose});}
    const result={},positionTolerance=Math.max(.01,amount),rotationTolerance=Math.max(.05,amount*.75),scaleTolerance=Math.max(.0001,amount/500);
    const put=(frame,id,pose)=>{(result[frame]||(result[frame]={}))[id]=clone(pose);};
    for(const [id,rawPoints] of Object.entries(byNode)){const points=rawPoints.sort((a,b)=>a.frame-b.frame);if(points.length<=2){points.forEach(point=>put(point.frame,id,point.pose));continue;}
      const keep=new Set([0,points.length-1]);
      const error=(point,start,end)=>{const span=end.frame-start.frame,t=span?Math.max(0,Math.min(1,(point.frame-start.frame)/span)):0,a=start.pose,b=end.pose,p=point.pose;
        const linear=name=>(+a[name]||0)+((+b[name]||0)-(+a[name]||0))*t;
        const predictedRotation=(+a.r||0)+normAngle((+b.r||0)-(+a.r||0))*t;
        return Math.max(Math.abs((+p.x||0)-linear("x"))/positionTolerance,Math.abs((+p.y||0)-linear("y"))/positionTolerance,
          Math.abs(normAngle((+p.r||0)-predictedRotation))/rotationTolerance,Math.abs((p.sx??1)-((a.sx??1)+((b.sx??1)-(a.sx??1))*t))/scaleTolerance,
          Math.abs((p.sy??1)-((a.sy??1)+((b.sy??1)-(a.sy??1))*t))/scaleTolerance);};
      const simplify=(first,last)=>{if(last-first<2)return;let worst=0,index=-1;for(let i=first+1;i<last;i++){const value=error(points[i],points[first],points[last]);if(value>worst){worst=value;index=i;}}if(worst>1&&index>first){keep.add(index);simplify(first,index);simplify(index,last);}};
      simplify(0,points.length-1);Array.from(keep).sort((a,b)=>a-b).forEach(index=>put(points[index].frame,id,points[index].pose));
    }
    return Object.fromEntries(Object.entries(result).sort((a,b)=>Number(a[0])-Number(b[0])));
  }
  animation.MotionCaptureTrack = MotionCaptureTrack;
  animation.encodeMocapMask = encodeMask;
  animation.decodeMocapMask = decodeMask;
  animation.mocapPoseSequence = mocapPoseSequence;
  animation.mocapPoseReport = mocapPoseReport;
  animation.retargetHumanPose = retargetHumanPose;
  animation.reduceRigPoseSequence = reduceRigPoseSequence;
  animation.mocapEngines = {
    register: registerMocapEngine,
    get: (id) => engines.get(String(id)) || null,
    list: () => Array.from(engines.keys())
  };
  registerMocapEngine("local-motion-silhouette", localSilhouetteEngine);
})(typeof window !== "undefined" ? window : globalThis);
