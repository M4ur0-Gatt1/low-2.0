(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function g_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var hg={exports:{}},sc={},dg={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),v_=Symbol.for("react.portal"),__=Symbol.for("react.fragment"),y_=Symbol.for("react.strict_mode"),x_=Symbol.for("react.profiler"),S_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),E_=Symbol.for("react.forward_ref"),w_=Symbol.for("react.suspense"),T_=Symbol.for("react.memo"),A_=Symbol.for("react.lazy"),uf=Symbol.iterator;function b_(n){return n===null||typeof n!="object"?null:(n=uf&&n[uf]||n["@@iterator"],typeof n=="function"?n:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pg=Object.assign,mg={};function Zs(n,e,t){this.props=n,this.context=e,this.refs=mg,this.updater=t||fg}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Zs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function gg(){}gg.prototype=Zs.prototype;function $h(n,e,t){this.props=n,this.context=e,this.refs=mg,this.updater=t||fg}var Zh=$h.prototype=new gg;Zh.constructor=$h;pg(Zh,Zs.prototype);Zh.isPureReactComponent=!0;var hf=Array.isArray,vg=Object.prototype.hasOwnProperty,Kh={current:null},_g={key:!0,ref:!0,__self:!0,__source:!0};function yg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vg.call(e,i)&&!_g.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:aa,type:n,key:s,ref:o,props:r,_owner:Kh.current}}function C_(n,e){return{$$typeof:aa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Qh(n){return typeof n=="object"&&n!==null&&n.$$typeof===aa}function R_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var df=/\/+/g;function Pc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?R_(""+n.key):e.toString(36)}function fl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case aa:case v_:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Pc(o,0):i,hf(r)?(t="",n!=null&&(t=n.replace(df,"$&/")+"/"),fl(r,e,t,"",function(c){return c})):r!=null&&(Qh(r)&&(r=C_(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(df,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Pc(s,a);o+=fl(s,e,t,l,r)}else if(l=b_(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Pc(s,a++),o+=fl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ga(n,e,t){if(n==null)return n;var i=[],r=0;return fl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function P_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var cn={current:null},pl={transition:null},L_={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Kh};function xg(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:ga,forEach:function(n,e,t){ga(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ga(n,function(){e++}),e},toArray:function(n){return ga(n,function(e){return e})||[]},only:function(n){if(!Qh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ye.Component=Zs;Ye.Fragment=__;Ye.Profiler=x_;Ye.PureComponent=$h;Ye.StrictMode=y_;Ye.Suspense=w_;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L_;Ye.act=xg;Ye.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=pg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)vg.call(e,l)&&!_g.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:aa,type:n.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(n){return n={$$typeof:M_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:S_,_context:n},n.Consumer=n};Ye.createElement=yg;Ye.createFactory=function(n){var e=yg.bind(null,n);return e.type=n,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(n){return{$$typeof:E_,render:n}};Ye.isValidElement=Qh;Ye.lazy=function(n){return{$$typeof:A_,_payload:{_status:-1,_result:n},_init:P_}};Ye.memo=function(n,e){return{$$typeof:T_,type:n,compare:e===void 0?null:e}};Ye.startTransition=function(n){var e=pl.transition;pl.transition={};try{n()}finally{pl.transition=e}};Ye.unstable_act=xg;Ye.useCallback=function(n,e){return cn.current.useCallback(n,e)};Ye.useContext=function(n){return cn.current.useContext(n)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(n){return cn.current.useDeferredValue(n)};Ye.useEffect=function(n,e){return cn.current.useEffect(n,e)};Ye.useId=function(){return cn.current.useId()};Ye.useImperativeHandle=function(n,e,t){return cn.current.useImperativeHandle(n,e,t)};Ye.useInsertionEffect=function(n,e){return cn.current.useInsertionEffect(n,e)};Ye.useLayoutEffect=function(n,e){return cn.current.useLayoutEffect(n,e)};Ye.useMemo=function(n,e){return cn.current.useMemo(n,e)};Ye.useReducer=function(n,e,t){return cn.current.useReducer(n,e,t)};Ye.useRef=function(n){return cn.current.useRef(n)};Ye.useState=function(n){return cn.current.useState(n)};Ye.useSyncExternalStore=function(n,e,t){return cn.current.useSyncExternalStore(n,e,t)};Ye.useTransition=function(){return cn.current.useTransition()};Ye.version="18.3.1";dg.exports=Ye;var rt=dg.exports;const D_=g_(rt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_=rt,N_=Symbol.for("react.element"),U_=Symbol.for("react.fragment"),O_=Object.prototype.hasOwnProperty,F_=I_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k_={key:!0,ref:!0,__self:!0,__source:!0};function Sg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)O_.call(e,i)&&!k_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:N_,type:n,key:s,ref:o,props:r,_owner:F_.current}}sc.Fragment=U_;sc.jsx=Sg;sc.jsxs=Sg;hg.exports=sc;var U=hg.exports,Mg={exports:{}},Cn={},Eg={exports:{}},wg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,O){var B=N.length;N.push(O);e:for(;0<B;){var Z=B-1>>>1,Q=N[Z];if(0<r(Q,O))N[Z]=O,N[B]=Q,B=Z;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var O=N[0],B=N.pop();if(B!==O){N[0]=B;e:for(var Z=0,Q=N.length,q=Q>>>1;Z<q;){var K=2*(Z+1)-1,ce=N[K],ye=K+1,xe=N[ye];if(0>r(ce,B))ye<Q&&0>r(xe,ce)?(N[Z]=xe,N[ye]=B,Z=ye):(N[Z]=ce,N[K]=B,Z=K);else if(ye<Q&&0>r(xe,B))N[Z]=xe,N[ye]=B,Z=ye;else break e}}return O}function r(N,O){var B=N.sortIndex-O.sortIndex;return B!==0?B:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,d=null,f=3,p=!1,_=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var O=t(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=N)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=t(c)}}function x(N){if(y=!1,m(N),!_)if(t(l)!==null)_=!0,X(A);else{var O=t(c);O!==null&&$(x,O.startTime-N)}}function A(N,O){_=!1,y&&(y=!1,u(L),L=-1),p=!0;var B=f;try{for(m(O),d=t(l);d!==null&&(!(d.expirationTime>O)||N&&!z());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,f=d.priorityLevel;var Q=Z(d.expirationTime<=O);O=n.unstable_now(),typeof Q=="function"?d.callback=Q:d===t(l)&&i(l),m(O)}else i(l);d=t(l)}if(d!==null)var q=!0;else{var K=t(c);K!==null&&$(x,K.startTime-O),q=!1}return q}finally{d=null,f=B,p=!1}}var T=!1,S=null,L=-1,M=5,w=-1;function z(){return!(n.unstable_now()-w<M)}function V(){if(S!==null){var N=n.unstable_now();w=N;var O=!0;try{O=S(!0,N)}finally{O?J():(T=!1,S=null)}}else T=!1}var J;if(typeof g=="function")J=function(){g(V)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,k=I.port2;I.port1.onmessage=V,J=function(){k.postMessage(null)}}else J=function(){v(V,0)};function X(N){S=N,T||(T=!0,J())}function $(N,O){L=v(function(){N(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,X(A))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var B=f;f=O;try{return N()}finally{f=B}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=f;f=N;try{return O()}finally{f=B}},n.unstable_scheduleCallback=function(N,O,B){var Z=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Z+B:Z):B=Z,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=B+Q,N={id:h++,callback:O,priorityLevel:N,startTime:B,expirationTime:Q,sortIndex:-1},B>Z?(N.sortIndex=B,e(c,N),t(l)===null&&N===t(c)&&(y?(u(L),L=-1):y=!0,$(x,B-Z))):(N.sortIndex=Q,e(l,N),_||p||(_=!0,X(A))),N},n.unstable_shouldYield=z,n.unstable_wrapCallback=function(N){var O=f;return function(){var B=f;f=O;try{return N.apply(this,arguments)}finally{f=B}}}})(wg);Eg.exports=wg;var z_=Eg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_=rt,bn=z_;function ie(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tg=new Set,Bo={};function Vr(n,e){ks(n,e),ks(n+"Capture",e)}function ks(n,e){for(Bo[n]=e,n=0;n<e.length;n++)Tg.add(e[n])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=Object.prototype.hasOwnProperty,H_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ff={},pf={};function G_(n){return ju.call(pf,n)?!0:ju.call(ff,n)?!1:H_.test(n)?pf[n]=!0:(ff[n]=!0,!1)}function V_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function W_(n,e,t,i){if(e===null||typeof e>"u"||V_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){jt[n]=new un(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];jt[e]=new un(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){jt[n]=new un(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){jt[n]=new un(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){jt[n]=new un(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){jt[n]=new un(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){jt[n]=new un(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){jt[n]=new un(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){jt[n]=new un(n,5,!1,n.toLowerCase(),null,!1,!1)});var Jh=/[\-:]([a-z])/g;function ed(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Jh,ed);jt[e]=new un(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Jh,ed);jt[e]=new un(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Jh,ed);jt[e]=new un(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){jt[n]=new un(n,1,!1,n.toLowerCase(),null,!1,!1)});jt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){jt[n]=new un(n,1,!1,n.toLowerCase(),null,!0,!0)});function td(n,e,t,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(W_(e,t,r,i)&&(t=null),i||r===null?G_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Pi=B_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),Xu=Symbol.for("react.profiler"),Ag=Symbol.for("react.provider"),bg=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),qu=Symbol.for("react.suspense_list"),rd=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),Cg=Symbol.for("react.offscreen"),mf=Symbol.iterator;function ro(n){return n===null||typeof n!="object"?null:(n=mf&&n[mf]||n["@@iterator"],typeof n=="function"?n:null)}var vt=Object.assign,Lc;function xo(n){if(Lc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Lc=e&&e[1]||""}return`
`+Lc+n}var Dc=!1;function Ic(n,e){if(!n||Dc)return"";Dc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Dc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?xo(n):""}function j_(n){switch(n.tag){case 5:return xo(n.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return n=Ic(n.type,!1),n;case 11:return n=Ic(n.type.render,!1),n;case 1:return n=Ic(n.type,!0),n;default:return""}}function $u(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ms:return"Fragment";case ps:return"Portal";case Xu:return"Profiler";case nd:return"StrictMode";case Yu:return"Suspense";case qu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case bg:return(n.displayName||"Context")+".Consumer";case Ag:return(n._context.displayName||"Context")+".Provider";case id:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rd:return e=n.displayName||null,e!==null?e:$u(n.type)||"Memo";case Bi:e=n._payload,n=n._init;try{return $u(n(e))}catch{}}return null}function X_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $u(e);case 8:return e===nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Rg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Y_(n){var e=Rg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function _a(n){n._valueTracker||(n._valueTracker=Y_(n))}function Pg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Rg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Cl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Zu(n,e){var t=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function gf(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=cr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Lg(n,e){e=e.checked,e!=null&&td(n,"checked",e,!1)}function Ku(n,e){Lg(n,e);var t=cr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Qu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Qu(n,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function vf(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Qu(n,e,t){(e!=="number"||Cl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var So=Array.isArray;function Rs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+cr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Ju(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _f(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ie(92));if(So(t)){if(1<t.length)throw Error(ie(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:cr(t)}}function Dg(n,e){var t=cr(e.value),i=cr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function yf(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Ig(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Ig(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ya,Ng=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ho(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q_=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(n){q_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ao[e]=Ao[n]})});function Ug(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ao.hasOwnProperty(n)&&Ao[n]?(""+e).trim():e+"px"}function Og(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Ug(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var $_=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function th(n,e){if(e){if($_[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function nh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ih=null;function sd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rh=null,Ps=null,Ls=null;function xf(n){if(n=ua(n)){if(typeof rh!="function")throw Error(ie(280));var e=n.stateNode;e&&(e=uc(e),rh(n.stateNode,n.type,e))}}function Fg(n){Ps?Ls?Ls.push(n):Ls=[n]:Ps=n}function kg(){if(Ps){var n=Ps,e=Ls;if(Ls=Ps=null,xf(n),e)for(n=0;n<e.length;n++)xf(e[n])}}function zg(n,e){return n(e)}function Bg(){}var Nc=!1;function Hg(n,e,t){if(Nc)return n(e,t);Nc=!0;try{return zg(n,e,t)}finally{Nc=!1,(Ps!==null||Ls!==null)&&(Bg(),kg())}}function Go(n,e){var t=n.stateNode;if(t===null)return null;var i=uc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ie(231,e,typeof t));return t}var sh=!1;if(Ti)try{var so={};Object.defineProperty(so,"passive",{get:function(){sh=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{sh=!1}function Z_(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(h){this.onError(h)}}var bo=!1,Rl=null,Pl=!1,oh=null,K_={onError:function(n){bo=!0,Rl=n}};function Q_(n,e,t,i,r,s,o,a,l){bo=!1,Rl=null,Z_.apply(K_,arguments)}function J_(n,e,t,i,r,s,o,a,l){if(Q_.apply(this,arguments),bo){if(bo){var c=Rl;bo=!1,Rl=null}else throw Error(ie(198));Pl||(Pl=!0,oh=c)}}function Wr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Gg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Sf(n){if(Wr(n)!==n)throw Error(ie(188))}function ey(n){var e=n.alternate;if(!e){if(e=Wr(n),e===null)throw Error(ie(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Sf(r),n;if(s===i)return Sf(r),e;s=s.sibling}throw Error(ie(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(t.alternate!==i)throw Error(ie(190))}if(t.tag!==3)throw Error(ie(188));return t.stateNode.current===t?n:e}function Vg(n){return n=ey(n),n!==null?Wg(n):null}function Wg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Wg(n);if(e!==null)return e;n=n.sibling}return null}var jg=bn.unstable_scheduleCallback,Mf=bn.unstable_cancelCallback,ty=bn.unstable_shouldYield,ny=bn.unstable_requestPaint,Et=bn.unstable_now,iy=bn.unstable_getCurrentPriorityLevel,od=bn.unstable_ImmediatePriority,Xg=bn.unstable_UserBlockingPriority,Ll=bn.unstable_NormalPriority,ry=bn.unstable_LowPriority,Yg=bn.unstable_IdlePriority,oc=null,ci=null;function sy(n){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(oc,n,void 0,(n.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:ly,oy=Math.log,ay=Math.LN2;function ly(n){return n>>>=0,n===0?32:31-(oy(n)/ay|0)|0}var xa=64,Sa=4194304;function Mo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Dl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Mo(a):(s&=o,s!==0&&(i=Mo(s)))}else o=t&~r,o!==0?i=Mo(o):s!==0&&(i=Mo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Jn(e),r=1<<t,i|=n[t],e&=~r;return i}function cy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=cy(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ah(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qg(){var n=xa;return xa<<=1,!(xa&4194240)&&(xa=64),n}function Uc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function la(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Jn(e),n[e]=t}function hy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Jn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function ad(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Jn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var tt=0;function $g(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Zg,ld,Kg,Qg,Jg,lh=!1,Ma=[],Qi=null,Ji=null,er=null,Vo=new Map,Wo=new Map,Wi=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(n,e){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function oo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ua(e),e!==null&&ld(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function fy(n,e,t,i,r){switch(e){case"focusin":return Qi=oo(Qi,n,e,t,i,r),!0;case"dragenter":return Ji=oo(Ji,n,e,t,i,r),!0;case"mouseover":return er=oo(er,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Vo.set(s,oo(Vo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wo.set(s,oo(Wo.get(s)||null,n,e,t,i,r)),!0}return!1}function e0(n){var e=Cr(n.target);if(e!==null){var t=Wr(e);if(t!==null){if(e=t.tag,e===13){if(e=Gg(t),e!==null){n.blockedOn=e,Jg(n.priority,function(){Kg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ml(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=ch(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);ih=i,t.target.dispatchEvent(i),ih=null}else return e=ua(t),e!==null&&ld(e),n.blockedOn=t,!1;e.shift()}return!0}function wf(n,e,t){ml(n)&&t.delete(e)}function py(){lh=!1,Qi!==null&&ml(Qi)&&(Qi=null),Ji!==null&&ml(Ji)&&(Ji=null),er!==null&&ml(er)&&(er=null),Vo.forEach(wf),Wo.forEach(wf)}function ao(n,e){n.blockedOn===e&&(n.blockedOn=null,lh||(lh=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,py)))}function jo(n){function e(r){return ao(r,n)}if(0<Ma.length){ao(Ma[0],n);for(var t=1;t<Ma.length;t++){var i=Ma[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Qi!==null&&ao(Qi,n),Ji!==null&&ao(Ji,n),er!==null&&ao(er,n),Vo.forEach(e),Wo.forEach(e),t=0;t<Wi.length;t++)i=Wi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Wi.length&&(t=Wi[0],t.blockedOn===null);)e0(t),t.blockedOn===null&&Wi.shift()}var Ds=Pi.ReactCurrentBatchConfig,Il=!0;function my(n,e,t,i){var r=tt,s=Ds.transition;Ds.transition=null;try{tt=1,cd(n,e,t,i)}finally{tt=r,Ds.transition=s}}function gy(n,e,t,i){var r=tt,s=Ds.transition;Ds.transition=null;try{tt=4,cd(n,e,t,i)}finally{tt=r,Ds.transition=s}}function cd(n,e,t,i){if(Il){var r=ch(n,e,t,i);if(r===null)jc(n,e,i,Nl,t),Ef(n,i);else if(fy(r,n,e,t,i))i.stopPropagation();else if(Ef(n,i),e&4&&-1<dy.indexOf(n)){for(;r!==null;){var s=ua(r);if(s!==null&&Zg(s),s=ch(n,e,t,i),s===null&&jc(n,e,i,Nl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else jc(n,e,i,null,t)}}var Nl=null;function ch(n,e,t,i){if(Nl=null,n=sd(i),n=Cr(n),n!==null)if(e=Wr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Gg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Nl=n,null}function t0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iy()){case od:return 1;case Xg:return 4;case Ll:case ry:return 16;case Yg:return 536870912;default:return 16}default:return 16}}var Yi=null,ud=null,gl=null;function n0(){if(gl)return gl;var n,e=ud,t=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return gl=r.slice(n,1<i?1-i:void 0)}function vl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ea(){return!0}function Tf(){return!1}function Rn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:Tf,this.isPropagationStopped=Tf,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=Rn(Ks),ca=vt({},Ks,{view:0,detail:0}),vy=Rn(ca),Oc,Fc,lo,ac=vt({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==lo&&(lo&&n.type==="mousemove"?(Oc=n.screenX-lo.screenX,Fc=n.screenY-lo.screenY):Fc=Oc=0,lo=n),Oc)},movementY:function(n){return"movementY"in n?n.movementY:Fc}}),Af=Rn(ac),_y=vt({},ac,{dataTransfer:0}),yy=Rn(_y),xy=vt({},ca,{relatedTarget:0}),kc=Rn(xy),Sy=vt({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),My=Rn(Sy),Ey=vt({},Ks,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),wy=Rn(Ey),Ty=vt({},Ks,{data:0}),bf=Rn(Ty),Ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},by={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ry(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Cy[n])?!!e[n]:!1}function dd(){return Ry}var Py=vt({},ca,{key:function(n){if(n.key){var e=Ay[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=vl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?by[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(n){return n.type==="keypress"?vl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ly=Rn(Py),Dy=vt({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=Rn(Dy),Iy=vt({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),Ny=Rn(Iy),Uy=vt({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oy=Rn(Uy),Fy=vt({},ac,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ky=Rn(Fy),zy=[9,13,27,32],fd=Ti&&"CompositionEvent"in window,Co=null;Ti&&"documentMode"in document&&(Co=document.documentMode);var By=Ti&&"TextEvent"in window&&!Co,i0=Ti&&(!fd||Co&&8<Co&&11>=Co),Rf=" ",Pf=!1;function r0(n,e){switch(n){case"keyup":return zy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function Hy(n,e){switch(n){case"compositionend":return s0(e);case"keypress":return e.which!==32?null:(Pf=!0,Rf);case"textInput":return n=e.data,n===Rf&&Pf?null:n;default:return null}}function Gy(n,e){if(gs)return n==="compositionend"||!fd&&r0(n,e)?(n=n0(),gl=ud=Yi=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return i0&&e.locale!=="ko"?null:e.data;default:return null}}var Vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Vy[n.type]:e==="textarea"}function o0(n,e,t,i){Fg(i),e=Ul(e,"onChange"),0<e.length&&(t=new hd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ro=null,Xo=null;function Wy(n){v0(n,0)}function lc(n){var e=ys(n);if(Pg(e))return n}function jy(n,e){if(n==="change")return e}var a0=!1;if(Ti){var zc;if(Ti){var Bc="oninput"in document;if(!Bc){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),Bc=typeof Df.oninput=="function"}zc=Bc}else zc=!1;a0=zc&&(!document.documentMode||9<document.documentMode)}function If(){Ro&&(Ro.detachEvent("onpropertychange",l0),Xo=Ro=null)}function l0(n){if(n.propertyName==="value"&&lc(Xo)){var e=[];o0(e,Xo,n,sd(n)),Hg(Wy,e)}}function Xy(n,e,t){n==="focusin"?(If(),Ro=e,Xo=t,Ro.attachEvent("onpropertychange",l0)):n==="focusout"&&If()}function Yy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return lc(Xo)}function qy(n,e){if(n==="click")return lc(e)}function $y(n,e){if(n==="input"||n==="change")return lc(e)}function Zy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ti=typeof Object.is=="function"?Object.is:Zy;function Yo(n,e){if(ti(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ju.call(e,r)||!ti(n[r],e[r]))return!1}return!0}function Nf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Uf(n,e){var t=Nf(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Nf(t)}}function c0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?c0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function u0(){for(var n=window,e=Cl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Cl(n.document)}return e}function pd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Ky(n){var e=u0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&c0(t.ownerDocument.documentElement,t)){if(i!==null&&pd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Uf(t,s);var o=Uf(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Qy=Ti&&"documentMode"in document&&11>=document.documentMode,vs=null,uh=null,Po=null,hh=!1;function Of(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hh||vs==null||vs!==Cl(i)||(i=vs,"selectionStart"in i&&pd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Po&&Yo(Po,i)||(Po=i,i=Ul(uh,"onSelect"),0<i.length&&(e=new hd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=vs)))}function wa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var _s={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},Hc={},h0={};Ti&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function cc(n){if(Hc[n])return Hc[n];if(!_s[n])return n;var e=_s[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in h0)return Hc[n]=e[t];return n}var d0=cc("animationend"),f0=cc("animationiteration"),p0=cc("animationstart"),m0=cc("transitionend"),g0=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(n,e){g0.set(n,e),Vr(e,[n])}for(var Gc=0;Gc<Ff.length;Gc++){var Vc=Ff[Gc],Jy=Vc.toLowerCase(),ex=Vc[0].toUpperCase()+Vc.slice(1);dr(Jy,"on"+ex)}dr(d0,"onAnimationEnd");dr(f0,"onAnimationIteration");dr(p0,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(m0,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function kf(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,J_(i,e,void 0,n),n.currentTarget=null}function v0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;kf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;kf(r,a,c),s=l}}}if(Pl)throw n=oh,Pl=!1,oh=null,n}function at(n,e){var t=e[gh];t===void 0&&(t=e[gh]=new Set);var i=n+"__bubble";t.has(i)||(_0(e,n,2,!1),t.add(i))}function Wc(n,e,t){var i=0;e&&(i|=4),_0(t,n,i,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function qo(n){if(!n[Ta]){n[Ta]=!0,Tg.forEach(function(t){t!=="selectionchange"&&(tx.has(t)||Wc(t,!1,n),Wc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,Wc("selectionchange",!1,e))}}function _0(n,e,t,i){switch(t0(e)){case 1:var r=my;break;case 4:r=gy;break;default:r=cd}t=r.bind(null,e,t,n),r=void 0,!sh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function jc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Cr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Hg(function(){var c=s,h=sd(t),d=[];e:{var f=g0.get(n);if(f!==void 0){var p=hd,_=n;switch(n){case"keypress":if(vl(t)===0)break e;case"keydown":case"keyup":p=Ly;break;case"focusin":_="focus",p=kc;break;case"focusout":_="blur",p=kc;break;case"beforeblur":case"afterblur":p=kc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ny;break;case d0:case f0:case p0:p=My;break;case m0:p=Oy;break;case"scroll":p=vy;break;case"wheel":p=ky;break;case"copy":case"cut":case"paste":p=wy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Cf}var y=(e&4)!==0,v=!y&&n==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,m;g!==null;){m=g;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,u!==null&&(x=Go(g,u),x!=null&&y.push($o(g,x,m)))),v)break;g=g.return}0<y.length&&(f=new p(f,_,null,t,h),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==ih&&(_=t.relatedTarget||t.fromElement)&&(Cr(_)||_[Ai]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=c,_=_?Cr(_):null,_!==null&&(v=Wr(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Af,x="onMouseLeave",u="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(y=Cf,x="onPointerLeave",u="onPointerEnter",g="pointer"),v=p==null?f:ys(p),m=_==null?f:ys(_),f=new y(x,g+"leave",p,t,h),f.target=v,f.relatedTarget=m,x=null,Cr(h)===c&&(y=new y(u,g+"enter",_,t,h),y.target=m,y.relatedTarget=v,x=y),v=x,p&&_)t:{for(y=p,u=_,g=0,m=y;m;m=Xr(m))g++;for(m=0,x=u;x;x=Xr(x))m++;for(;0<g-m;)y=Xr(y),g--;for(;0<m-g;)u=Xr(u),m--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Xr(y),u=Xr(u)}y=null}else y=null;p!==null&&zf(d,f,p,y,!1),_!==null&&v!==null&&zf(d,v,_,y,!0)}}e:{if(f=c?ys(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var A=jy;else if(Lf(f))if(a0)A=$y;else{A=Yy;var T=Xy}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=qy);if(A&&(A=A(n,c))){o0(d,A,t,h);break e}T&&T(n,f,c),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Qu(f,"number",f.value)}switch(T=c?ys(c):window,n){case"focusin":(Lf(T)||T.contentEditable==="true")&&(vs=T,uh=c,Po=null);break;case"focusout":Po=uh=vs=null;break;case"mousedown":hh=!0;break;case"contextmenu":case"mouseup":case"dragend":hh=!1,Of(d,t,h);break;case"selectionchange":if(Qy)break;case"keydown":case"keyup":Of(d,t,h)}var S;if(fd)e:{switch(n){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else gs?r0(n,t)&&(L="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(i0&&t.locale!=="ko"&&(gs||L!=="onCompositionStart"?L==="onCompositionEnd"&&gs&&(S=n0()):(Yi=h,ud="value"in Yi?Yi.value:Yi.textContent,gs=!0)),T=Ul(c,L),0<T.length&&(L=new bf(L,n,null,t,h),d.push({event:L,listeners:T}),S?L.data=S:(S=s0(t),S!==null&&(L.data=S)))),(S=By?Hy(n,t):Gy(n,t))&&(c=Ul(c,"onBeforeInput"),0<c.length&&(h=new bf("onBeforeInput","beforeinput",null,t,h),d.push({event:h,listeners:c}),h.data=S))}v0(d,e)})}function $o(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ul(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Go(n,t),s!=null&&i.unshift($o(n,s,r)),s=Go(n,e),s!=null&&i.push($o(n,s,r))),n=n.return}return i}function Xr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zf(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Go(t,s),l!=null&&o.unshift($o(t,l,a))):r||(l=Go(t,s),l!=null&&o.push($o(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var nx=/\r\n?/g,ix=/\u0000|\uFFFD/g;function Bf(n){return(typeof n=="string"?n:""+n).replace(nx,`
`).replace(ix,"")}function Aa(n,e,t){if(e=Bf(e),Bf(n)!==e&&t)throw Error(ie(425))}function Ol(){}var dh=null,fh=null;function ph(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mh=typeof setTimeout=="function"?setTimeout:void 0,rx=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,sx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(n){return Hf.resolve(null).then(n).catch(ox)}:mh;function ox(n){setTimeout(function(){throw n})}function Xc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),jo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);jo(e)}function tr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Gf(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),li="__reactFiber$"+Qs,Zo="__reactProps$"+Qs,Ai="__reactContainer$"+Qs,gh="__reactEvents$"+Qs,ax="__reactListeners$"+Qs,lx="__reactHandles$"+Qs;function Cr(n){var e=n[li];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ai]||t[li]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Gf(n);n!==null;){if(t=n[li])return t;n=Gf(n)}return e}n=t,t=n.parentNode}return null}function ua(n){return n=n[li]||n[Ai],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function uc(n){return n[Zo]||null}var vh=[],xs=-1;function fr(n){return{current:n}}function ct(n){0>xs||(n.current=vh[xs],vh[xs]=null,xs--)}function st(n,e){xs++,vh[xs]=n.current,n.current=e}var ur={},tn=fr(ur),pn=fr(!1),Or=ur;function zs(n,e){var t=n.type.contextTypes;if(!t)return ur;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function mn(n){return n=n.childContextTypes,n!=null}function Fl(){ct(pn),ct(tn)}function Vf(n,e,t){if(tn.current!==ur)throw Error(ie(168));st(tn,e),st(pn,t)}function y0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,X_(n)||"Unknown",r));return vt({},t,i)}function kl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ur,Or=tn.current,st(tn,n),st(pn,pn.current),!0}function Wf(n,e,t){var i=n.stateNode;if(!i)throw Error(ie(169));t?(n=y0(n,e,Or),i.__reactInternalMemoizedMergedChildContext=n,ct(pn),ct(tn),st(tn,n)):ct(pn),st(pn,t)}var xi=null,hc=!1,Yc=!1;function x0(n){xi===null?xi=[n]:xi.push(n)}function cx(n){hc=!0,x0(n)}function pr(){if(!Yc&&xi!==null){Yc=!0;var n=0,e=tt;try{var t=xi;for(tt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}xi=null,hc=!1}catch(r){throw xi!==null&&(xi=xi.slice(n+1)),jg(od,pr),r}finally{tt=e,Yc=!1}}return null}var Ss=[],Ms=0,zl=null,Bl=0,In=[],Nn=0,Fr=null,Si=1,Mi="";function Mr(n,e){Ss[Ms++]=Bl,Ss[Ms++]=zl,zl=n,Bl=e}function S0(n,e,t){In[Nn++]=Si,In[Nn++]=Mi,In[Nn++]=Fr,Fr=n;var i=Si;n=Mi;var r=32-Jn(i)-1;i&=~(1<<r),t+=1;var s=32-Jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Si=1<<32-Jn(e)+r|t<<r|i,Mi=s+n}else Si=1<<s|t<<r|i,Mi=n}function md(n){n.return!==null&&(Mr(n,1),S0(n,1,0))}function gd(n){for(;n===zl;)zl=Ss[--Ms],Ss[Ms]=null,Bl=Ss[--Ms],Ss[Ms]=null;for(;n===Fr;)Fr=In[--Nn],In[Nn]=null,Mi=In[--Nn],In[Nn]=null,Si=In[--Nn],In[Nn]=null}var Tn=null,wn=null,ht=!1,Zn=null;function M0(n,e){var t=Bn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function jf(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Tn=n,wn=tr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Tn=n,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Fr!==null?{id:Si,overflow:Mi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Bn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Tn=n,wn=null,!0):!1;default:return!1}}function _h(n){return(n.mode&1)!==0&&(n.flags&128)===0}function yh(n){if(ht){var e=wn;if(e){var t=e;if(!jf(n,e)){if(_h(n))throw Error(ie(418));e=tr(t.nextSibling);var i=Tn;e&&jf(n,e)?M0(i,t):(n.flags=n.flags&-4097|2,ht=!1,Tn=n)}}else{if(_h(n))throw Error(ie(418));n.flags=n.flags&-4097|2,ht=!1,Tn=n}}}function Xf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Tn=n}function ba(n){if(n!==Tn)return!1;if(!ht)return Xf(n),ht=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ph(n.type,n.memoizedProps)),e&&(e=wn)){if(_h(n))throw E0(),Error(ie(418));for(;e;)M0(n,e),e=tr(e.nextSibling)}if(Xf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){wn=tr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}wn=null}}else wn=Tn?tr(n.stateNode.nextSibling):null;return!0}function E0(){for(var n=wn;n;)n=tr(n.nextSibling)}function Bs(){wn=Tn=null,ht=!1}function vd(n){Zn===null?Zn=[n]:Zn.push(n)}var ux=Pi.ReactCurrentBatchConfig;function co(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ie(309));var i=t.stateNode}if(!i)throw Error(ie(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ie(284));if(!t._owner)throw Error(ie(290,n))}return n}function Ca(n,e){throw n=Object.prototype.toString.call(e),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Yf(n){var e=n._init;return e(n._payload)}function w0(n){function e(u,g){if(n){var m=u.deletions;m===null?(u.deletions=[g],u.flags|=16):m.push(g)}}function t(u,g){if(!n)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=sr(u,g),u.index=0,u.sibling=null,u}function s(u,g,m){return u.index=m,n?(m=u.alternate,m!==null?(m=m.index,m<g?(u.flags|=2,g):m):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return n&&u.alternate===null&&(u.flags|=2),u}function a(u,g,m,x){return g===null||g.tag!==6?(g=eu(m,u.mode,x),g.return=u,g):(g=r(g,m),g.return=u,g)}function l(u,g,m,x){var A=m.type;return A===ms?h(u,g,m.props.children,x,m.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Bi&&Yf(A)===g.type)?(x=r(g,m.props),x.ref=co(u,g,m),x.return=u,x):(x=wl(m.type,m.key,m.props,null,u.mode,x),x.ref=co(u,g,m),x.return=u,x)}function c(u,g,m,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=tu(m,u.mode,x),g.return=u,g):(g=r(g,m.children||[]),g.return=u,g)}function h(u,g,m,x,A){return g===null||g.tag!==7?(g=Dr(m,u.mode,x,A),g.return=u,g):(g=r(g,m),g.return=u,g)}function d(u,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=eu(""+g,u.mode,m),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case va:return m=wl(g.type,g.key,g.props,null,u.mode,m),m.ref=co(u,null,g),m.return=u,m;case ps:return g=tu(g,u.mode,m),g.return=u,g;case Bi:var x=g._init;return d(u,x(g._payload),m)}if(So(g)||ro(g))return g=Dr(g,u.mode,m,null),g.return=u,g;Ca(u,g)}return null}function f(u,g,m,x){var A=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return A!==null?null:a(u,g,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case va:return m.key===A?l(u,g,m,x):null;case ps:return m.key===A?c(u,g,m,x):null;case Bi:return A=m._init,f(u,g,A(m._payload),x)}if(So(m)||ro(m))return A!==null?null:h(u,g,m,x,null);Ca(u,m)}return null}function p(u,g,m,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(m)||null,a(g,u,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case va:return u=u.get(x.key===null?m:x.key)||null,l(g,u,x,A);case ps:return u=u.get(x.key===null?m:x.key)||null,c(g,u,x,A);case Bi:var T=x._init;return p(u,g,m,T(x._payload),A)}if(So(x)||ro(x))return u=u.get(m)||null,h(g,u,x,A,null);Ca(g,x)}return null}function _(u,g,m,x){for(var A=null,T=null,S=g,L=g=0,M=null;S!==null&&L<m.length;L++){S.index>L?(M=S,S=null):M=S.sibling;var w=f(u,S,m[L],x);if(w===null){S===null&&(S=M);break}n&&S&&w.alternate===null&&e(u,S),g=s(w,g,L),T===null?A=w:T.sibling=w,T=w,S=M}if(L===m.length)return t(u,S),ht&&Mr(u,L),A;if(S===null){for(;L<m.length;L++)S=d(u,m[L],x),S!==null&&(g=s(S,g,L),T===null?A=S:T.sibling=S,T=S);return ht&&Mr(u,L),A}for(S=i(u,S);L<m.length;L++)M=p(S,u,L,m[L],x),M!==null&&(n&&M.alternate!==null&&S.delete(M.key===null?L:M.key),g=s(M,g,L),T===null?A=M:T.sibling=M,T=M);return n&&S.forEach(function(z){return e(u,z)}),ht&&Mr(u,L),A}function y(u,g,m,x){var A=ro(m);if(typeof A!="function")throw Error(ie(150));if(m=A.call(m),m==null)throw Error(ie(151));for(var T=A=null,S=g,L=g=0,M=null,w=m.next();S!==null&&!w.done;L++,w=m.next()){S.index>L?(M=S,S=null):M=S.sibling;var z=f(u,S,w.value,x);if(z===null){S===null&&(S=M);break}n&&S&&z.alternate===null&&e(u,S),g=s(z,g,L),T===null?A=z:T.sibling=z,T=z,S=M}if(w.done)return t(u,S),ht&&Mr(u,L),A;if(S===null){for(;!w.done;L++,w=m.next())w=d(u,w.value,x),w!==null&&(g=s(w,g,L),T===null?A=w:T.sibling=w,T=w);return ht&&Mr(u,L),A}for(S=i(u,S);!w.done;L++,w=m.next())w=p(S,u,L,w.value,x),w!==null&&(n&&w.alternate!==null&&S.delete(w.key===null?L:w.key),g=s(w,g,L),T===null?A=w:T.sibling=w,T=w);return n&&S.forEach(function(V){return e(u,V)}),ht&&Mr(u,L),A}function v(u,g,m,x){if(typeof m=="object"&&m!==null&&m.type===ms&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case va:e:{for(var A=m.key,T=g;T!==null;){if(T.key===A){if(A=m.type,A===ms){if(T.tag===7){t(u,T.sibling),g=r(T,m.props.children),g.return=u,u=g;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Bi&&Yf(A)===T.type){t(u,T.sibling),g=r(T,m.props),g.ref=co(u,T,m),g.return=u,u=g;break e}t(u,T);break}else e(u,T);T=T.sibling}m.type===ms?(g=Dr(m.props.children,u.mode,x,m.key),g.return=u,u=g):(x=wl(m.type,m.key,m.props,null,u.mode,x),x.ref=co(u,g,m),x.return=u,u=x)}return o(u);case ps:e:{for(T=m.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){t(u,g.sibling),g=r(g,m.children||[]),g.return=u,u=g;break e}else{t(u,g);break}else e(u,g);g=g.sibling}g=tu(m,u.mode,x),g.return=u,u=g}return o(u);case Bi:return T=m._init,v(u,g,T(m._payload),x)}if(So(m))return _(u,g,m,x);if(ro(m))return y(u,g,m,x);Ca(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(t(u,g.sibling),g=r(g,m),g.return=u,u=g):(t(u,g),g=eu(m,u.mode,x),g.return=u,u=g),o(u)):t(u,g)}return v}var Hs=w0(!0),T0=w0(!1),Hl=fr(null),Gl=null,Es=null,_d=null;function yd(){_d=Es=Gl=null}function xd(n){var e=Hl.current;ct(Hl),n._currentValue=e}function xh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Is(n,e){Gl=n,_d=Es=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(fn=!0),n.firstContext=null)}function Gn(n){var e=n._currentValue;if(_d!==n)if(n={context:n,memoizedValue:e,next:null},Es===null){if(Gl===null)throw Error(ie(308));Es=n,Gl.dependencies={lanes:0,firstContext:n}}else Es=Es.next=n;return e}var Rr=null;function Sd(n){Rr===null?Rr=[n]:Rr.push(n)}function A0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Sd(e)):(t.next=r.next,r.next=t),e.interleaved=t,bi(n,i)}function bi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Hi=!1;function Md(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function wi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(n,t)}return r=i.interleaved,r===null?(e.next=e,Sd(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(n,t)}function _l(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ad(n,t)}}function qf(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Vl(n,e,t,i){var r=n.updateQueue;Hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=n.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,h=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,y=a;switch(f=e,p=t,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=vt({},d,f);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=o,n.lanes=o,n.memoizedState=d}}function $f(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var ha={},ui=fr(ha),Ko=fr(ha),Qo=fr(ha);function Pr(n){if(n===ha)throw Error(ie(174));return n}function Ed(n,e){switch(st(Qo,e),st(Ko,n),st(ui,ha),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:eh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=eh(e,n)}ct(ui),st(ui,e)}function Gs(){ct(ui),ct(Ko),ct(Qo)}function C0(n){Pr(Qo.current);var e=Pr(ui.current),t=eh(e,n.type);e!==t&&(st(Ko,n),st(ui,t))}function wd(n){Ko.current===n&&(ct(ui),ct(Ko))}var pt=fr(0);function Wl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function Td(){for(var n=0;n<qc.length;n++)qc[n]._workInProgressVersionPrimary=null;qc.length=0}var yl=Pi.ReactCurrentDispatcher,$c=Pi.ReactCurrentBatchConfig,kr=0,mt=null,Rt=null,Ut=null,jl=!1,Lo=!1,Jo=0,hx=0;function Yt(){throw Error(ie(321))}function Ad(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ti(n[t],e[t]))return!1;return!0}function bd(n,e,t,i,r,s){if(kr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=n===null||n.memoizedState===null?mx:gx,n=t(i,r),Lo){s=0;do{if(Lo=!1,Jo=0,25<=s)throw Error(ie(301));s+=1,Ut=Rt=null,e.updateQueue=null,yl.current=vx,n=t(i,r)}while(Lo)}if(yl.current=Xl,e=Rt!==null&&Rt.next!==null,kr=0,Ut=Rt=mt=null,jl=!1,e)throw Error(ie(300));return n}function Cd(){var n=Jo!==0;return Jo=0,n}function si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?mt.memoizedState=Ut=n:Ut=Ut.next=n,Ut}function Vn(){if(Rt===null){var n=mt.alternate;n=n!==null?n.memoizedState:null}else n=Rt.next;var e=Ut===null?mt.memoizedState:Ut.next;if(e!==null)Ut=e,Rt=n;else{if(n===null)throw Error(ie(310));Rt=n,n={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ut===null?mt.memoizedState=Ut=n:Ut=Ut.next=n}return Ut}function ea(n,e){return typeof e=="function"?e(n):e}function Zc(n){var e=Vn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=Rt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((kr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,mt.lanes|=h,zr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ti(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,mt.lanes|=s,zr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Kc(n){var e=Vn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ti(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function R0(){}function P0(n,e){var t=mt,i=Vn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,Rd(I0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(t.flags|=2048,ta(9,D0.bind(null,t,i,r,e),void 0,null),zt===null)throw Error(ie(349));kr&30||L0(t,e,r)}return r}function L0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function D0(n,e,t,i){e.value=t,e.getSnapshot=i,N0(e)&&U0(n)}function I0(n,e,t){return t(function(){N0(e)&&U0(n)})}function N0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ti(n,t)}catch{return!0}}function U0(n){var e=bi(n,1);e!==null&&ei(e,n,1,-1)}function Zf(n){var e=si();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},e.queue=n,n=n.dispatch=px.bind(null,mt,n),[e.memoizedState,n]}function ta(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function O0(){return Vn().memoizedState}function xl(n,e,t,i){var r=si();mt.flags|=n,r.memoizedState=ta(1|e,t,void 0,i===void 0?null:i)}function dc(n,e,t,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&Ad(i,o.deps)){r.memoizedState=ta(e,t,s,i);return}}mt.flags|=n,r.memoizedState=ta(1|e,t,s,i)}function Kf(n,e){return xl(8390656,8,n,e)}function Rd(n,e){return dc(2048,8,n,e)}function F0(n,e){return dc(4,2,n,e)}function k0(n,e){return dc(4,4,n,e)}function z0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function B0(n,e,t){return t=t!=null?t.concat([n]):null,dc(4,4,z0.bind(null,e,n),t)}function Pd(){}function H0(n,e){var t=Vn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ad(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function G0(n,e){var t=Vn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ad(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function V0(n,e,t){return kr&21?(ti(t,e)||(t=qg(),mt.lanes|=t,zr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,fn=!0),n.memoizedState=t)}function dx(n,e){var t=tt;tt=t!==0&&4>t?t:4,n(!0);var i=$c.transition;$c.transition={};try{n(!1),e()}finally{tt=t,$c.transition=i}}function W0(){return Vn().memoizedState}function fx(n,e,t){var i=rr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},j0(n))X0(e,t);else if(t=A0(n,e,t,i),t!==null){var r=ln();ei(t,n,i,r),Y0(t,e,i)}}function px(n,e,t){var i=rr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(j0(n))X0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ti(a,o)){var l=e.interleaved;l===null?(r.next=r,Sd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=A0(n,e,r,i),t!==null&&(r=ln(),ei(t,n,i,r),Y0(t,e,i))}}function j0(n){var e=n.alternate;return n===mt||e!==null&&e===mt}function X0(n,e){Lo=jl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Y0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ad(n,t)}}var Xl={readContext:Gn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},mx={readContext:Gn,useCallback:function(n,e){return si().memoizedState=[n,e===void 0?null:e],n},useContext:Gn,useEffect:Kf,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,xl(4194308,4,z0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return xl(4194308,4,n,e)},useInsertionEffect:function(n,e){return xl(4,2,n,e)},useMemo:function(n,e){var t=si();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=si();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=fx.bind(null,mt,n),[i.memoizedState,n]},useRef:function(n){var e=si();return n={current:n},e.memoizedState=n},useState:Zf,useDebugValue:Pd,useDeferredValue:function(n){return si().memoizedState=n},useTransition:function(){var n=Zf(!1),e=n[0];return n=dx.bind(null,n[1]),si().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=mt,r=si();if(ht){if(t===void 0)throw Error(ie(407));t=t()}else{if(t=e(),zt===null)throw Error(ie(349));kr&30||L0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Kf(I0.bind(null,i,s,n),[n]),i.flags|=2048,ta(9,D0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=si(),e=zt.identifierPrefix;if(ht){var t=Mi,i=Si;t=(i&~(1<<32-Jn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Jo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=hx++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},gx={readContext:Gn,useCallback:H0,useContext:Gn,useEffect:Rd,useImperativeHandle:B0,useInsertionEffect:F0,useLayoutEffect:k0,useMemo:G0,useReducer:Zc,useRef:O0,useState:function(){return Zc(ea)},useDebugValue:Pd,useDeferredValue:function(n){var e=Vn();return V0(e,Rt.memoizedState,n)},useTransition:function(){var n=Zc(ea)[0],e=Vn().memoizedState;return[n,e]},useMutableSource:R0,useSyncExternalStore:P0,useId:W0,unstable_isNewReconciler:!1},vx={readContext:Gn,useCallback:H0,useContext:Gn,useEffect:Rd,useImperativeHandle:B0,useInsertionEffect:F0,useLayoutEffect:k0,useMemo:G0,useReducer:Kc,useRef:O0,useState:function(){return Kc(ea)},useDebugValue:Pd,useDeferredValue:function(n){var e=Vn();return Rt===null?e.memoizedState=n:V0(e,Rt.memoizedState,n)},useTransition:function(){var n=Kc(ea)[0],e=Vn().memoizedState;return[n,e]},useMutableSource:R0,useSyncExternalStore:P0,useId:W0,unstable_isNewReconciler:!1};function qn(n,e){if(n&&n.defaultProps){e=vt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Sh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:vt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var fc={isMounted:function(n){return(n=n._reactInternals)?Wr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=ln(),r=rr(n),s=wi(i,r);s.payload=e,t!=null&&(s.callback=t),e=nr(n,s,r),e!==null&&(ei(e,n,r,i),_l(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=ln(),r=rr(n),s=wi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=nr(n,s,r),e!==null&&(ei(e,n,r,i),_l(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ln(),i=rr(n),r=wi(t,i);r.tag=2,e!=null&&(r.callback=e),e=nr(n,r,i),e!==null&&(ei(e,n,i,t),_l(e,n,i))}};function Qf(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(t,i)||!Yo(r,s):!0}function q0(n,e,t){var i=!1,r=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=mn(e)?Or:tn.current,i=e.contextTypes,s=(i=i!=null)?zs(n,r):ur),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Jf(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&fc.enqueueReplaceState(e,e.state,null)}function Mh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Md(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=mn(e)?Or:tn.current,r.context=zs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fc.enqueueReplaceState(r,r.state,null),Vl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Vs(n,e){try{var t="",i=e;do t+=j_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Qc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Eh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var _x=typeof WeakMap=="function"?WeakMap:Map;function $0(n,e,t){t=wi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ql||(ql=!0,Ih=i),Eh(n,e)},t}function Z0(n,e,t){t=wi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Eh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Eh(n,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function ep(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new _x;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Dx.bind(null,n,e,t),e.then(n,n))}function tp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function np(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=wi(-1,1),e.tag=2,nr(t,e,1))),t.lanes|=1),n)}var yx=Pi.ReactCurrentOwner,fn=!1;function on(n,e,t,i){e.child=n===null?T0(e,null,t,i):Hs(e,n.child,t,i)}function ip(n,e,t,i,r){t=t.render;var s=e.ref;return Is(e,r),i=bd(n,e,t,i,s,r),t=Cd(),n!==null&&!fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ci(n,e,r)):(ht&&t&&md(e),e.flags|=1,on(n,e,i,r),e.child)}function rp(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!kd(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,K0(n,e,s,i,r)):(n=wl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Yo,t(o,i)&&n.ref===e.ref)return Ci(n,e,r)}return e.flags|=1,n=sr(s,i),n.ref=e.ref,n.return=e,e.child=n}function K0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Yo(s,i)&&n.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(fn=!0);else return e.lanes=n.lanes,Ci(n,e,r)}return wh(n,e,t,i,r)}function Q0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(Ts,Mn),Mn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,st(Ts,Mn),Mn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,st(Ts,Mn),Mn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,st(Ts,Mn),Mn|=i;return on(n,e,r,t),e.child}function J0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function wh(n,e,t,i,r){var s=mn(t)?Or:tn.current;return s=zs(e,s),Is(e,r),t=bd(n,e,t,i,s,r),i=Cd(),n!==null&&!fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ci(n,e,r)):(ht&&i&&md(e),e.flags|=1,on(n,e,t,r),e.child)}function sp(n,e,t,i,r){if(mn(t)){var s=!0;kl(e)}else s=!1;if(Is(e,r),e.stateNode===null)Sl(n,e),q0(e,t,i),Mh(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=mn(t)?Or:tn.current,c=zs(e,c));var h=t.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Jf(e,o,i,c),Hi=!1;var f=e.memoizedState;o.state=f,Vl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||pn.current||Hi?(typeof h=="function"&&(Sh(e,t,h,i),l=e.memoizedState),(a=Hi||Qf(e,t,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,b0(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:qn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=mn(t)?Or:tn.current,l=zs(e,l));var p=t.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Jf(e,o,i,l),Hi=!1,f=e.memoizedState,o.state=f,Vl(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||pn.current||Hi?(typeof p=="function"&&(Sh(e,t,p,i),_=e.memoizedState),(c=Hi||Qf(e,t,c,i,f,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Th(n,e,t,i,s,r)}function Th(n,e,t,i,r,s){J0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Wf(e,t,!1),Ci(n,e,s);i=e.stateNode,yx.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Hs(e,n.child,null,s),e.child=Hs(e,null,a,s)):on(n,e,a,s),e.memoizedState=i.state,r&&Wf(e,t,!0),e.child}function ev(n){var e=n.stateNode;e.pendingContext?Vf(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Vf(n,e.context,!1),Ed(n,e.containerInfo)}function op(n,e,t,i,r){return Bs(),vd(r),e.flags|=256,on(n,e,t,i),e.child}var Ah={dehydrated:null,treeContext:null,retryLane:0};function bh(n){return{baseLanes:n,cachePool:null,transitions:null}}function tv(n,e,t){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),st(pt,r&1),n===null)return yh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gc(o,i,0,null),n=Dr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=bh(t),e.memoizedState=Ah,n):Ld(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return xx(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Dr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?bh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Ah,i}return s=n.child,n=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Ld(n,e){return e=gc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ra(n,e,t,i){return i!==null&&vd(i),Hs(e,n.child,null,t),n=Ld(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function xx(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Qc(Error(ie(422))),Ra(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gc({mode:"visible",children:i.children},r,0,null),s=Dr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,n.child,null,o),e.child.memoizedState=bh(o),e.memoizedState=Ah,s);if(!(e.mode&1))return Ra(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Qc(s,i,void 0),Ra(n,e,o,i)}if(a=(o&n.childLanes)!==0,fn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(n,r),ei(i,n,r,-1))}return Fd(),i=Qc(Error(ie(421))),Ra(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Ix.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,wn=tr(r.nextSibling),Tn=e,ht=!0,Zn=null,n!==null&&(In[Nn++]=Si,In[Nn++]=Mi,In[Nn++]=Fr,Si=n.id,Mi=n.overflow,Fr=e),e=Ld(e,i.children),e.flags|=4096,e)}function ap(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),xh(n.return,e,t)}function Jc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function nv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(n,e,i.children,t),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ap(n,t,e);else if(n.tag===19)ap(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(st(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Wl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Jc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Wl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Jc(e,!0,t,null,s);break;case"together":Jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ci(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),zr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ie(153));if(e.child!==null){for(n=e.child,t=sr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=sr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Sx(n,e,t){switch(e.tag){case 3:ev(e),Bs();break;case 5:C0(e);break;case 1:mn(e.type)&&kl(e);break;case 4:Ed(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(pt,pt.current&1),e.flags|=128,null):t&e.child.childLanes?tv(n,e,t):(st(pt,pt.current&1),n=Ci(n,e,t),n!==null?n.sibling:null);st(pt,pt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return nv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Q0(n,e,t)}return Ci(n,e,t)}var iv,Ch,rv,sv;iv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ch=function(){};rv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Pr(ui.current);var s=null;switch(t){case"input":r=Zu(n,r),i=Zu(n,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Ju(n,r),i=Ju(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ol)}th(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};sv=function(n,e,t,i){t!==i&&(e.flags|=4)};function uo(n,e){if(!ht)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function qt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Mx(n,e,t){var i=e.pendingProps;switch(gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return mn(e.type)&&Fl(),qt(e),null;case 3:return i=e.stateNode,Gs(),ct(pn),ct(tn),Td(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ba(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(Oh(Zn),Zn=null))),Ch(n,e),qt(e),null;case 5:wd(e);var r=Pr(Qo.current);if(t=e.type,n!==null&&e.stateNode!=null)rv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return qt(e),null}if(n=Pr(ui.current),ba(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[li]=e,i[Zo]=s,n=(e.mode&1)!==0,t){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Eo.length;r++)at(Eo[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":gf(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":_f(i,s),at("invalid",i)}th(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Aa(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Aa(i.textContent,a,n),r=["children",""+a]):Bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(t){case"input":_a(i),vf(i,s,!0);break;case"textarea":_a(i),yf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ig(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[li]=e,n[Zo]=i,iv(n,e,!1,!1),e.stateNode=n;e:{switch(o=nh(t,i),t){case"dialog":at("cancel",n),at("close",n),r=i;break;case"iframe":case"object":case"embed":at("load",n),r=i;break;case"video":case"audio":for(r=0;r<Eo.length;r++)at(Eo[r],n);r=i;break;case"source":at("error",n),r=i;break;case"img":case"image":case"link":at("error",n),at("load",n),r=i;break;case"details":at("toggle",n),r=i;break;case"input":gf(n,i),r=Zu(n,i),at("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),at("invalid",n);break;case"textarea":_f(n,i),r=Ju(n,i),at("invalid",n);break;default:r=i}th(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Og(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ng(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ho(n,l):typeof l=="number"&&Ho(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",n):l!=null&&td(n,s,l,o))}switch(t){case"input":_a(n),vf(n,i,!1);break;case"textarea":_a(n),yf(n);break;case"option":i.value!=null&&n.setAttribute("value",""+cr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Rs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ol)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(n&&e.stateNode!=null)sv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=Pr(Qo.current),Pr(ui.current),ba(e)){if(i=e.stateNode,t=e.memoizedProps,i[li]=e,(s=i.nodeValue!==t)&&(n=Tn,n!==null))switch(n.tag){case 3:Aa(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Aa(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return qt(e),null;case 13:if(ct(pt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ht&&wn!==null&&e.mode&1&&!(e.flags&128))E0(),Bs(),e.flags|=98560,s=!1;else if(s=ba(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[li]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Zn!==null&&(Oh(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||pt.current&1?Pt===0&&(Pt=3):Fd())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Gs(),Ch(n,e),n===null&&qo(e.stateNode.containerInfo),qt(e),null;case 10:return xd(e.type._context),qt(e),null;case 17:return mn(e.type)&&Fl(),qt(e),null;case 19:if(ct(pt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)uo(s,!1);else{if(Pt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Wl(n),o!==null){for(e.flags|=128,uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return st(pt,pt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Et()>Ws&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Wl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return qt(e),null}else 2*Et()-s.renderingStartTime>Ws&&t!==1073741824&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,t=pt.current,st(pt,i?t&1|2:t&1),e):(qt(e),null);case 22:case 23:return Od(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Ex(n,e){switch(gd(e),e.tag){case 1:return mn(e.type)&&Fl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Gs(),ct(pn),ct(tn),Td(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return wd(e),null;case 13:if(ct(pt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Bs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ct(pt),null;case 4:return Gs(),null;case 10:return xd(e.type._context),null;case 22:case 23:return Od(),null;case 24:return null;default:return null}}var Pa=!1,en=!1,wx=typeof WeakSet=="function"?WeakSet:Set,me=null;function ws(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){xt(n,e,i)}else t.current=null}function Rh(n,e,t){try{t()}catch(i){xt(n,e,i)}}var lp=!1;function Tx(n,e){if(dh=Il,n=u0(),pd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++h===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(fh={focusedElem:n,selectionRange:t},Il=!1,me=e;me!==null;)if(e=me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,me=n;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,v=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:qn(e.type,y),v);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(x){xt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}return _=lp,lp=!1,_}function Do(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rh(e,t,s)}r=r.next}while(r!==i)}}function pc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ph(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function ov(n){var e=n.alternate;e!==null&&(n.alternate=null,ov(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[li],delete e[Zo],delete e[gh],delete e[ax],delete e[lx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function av(n){return n.tag===5||n.tag===3||n.tag===4}function cp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||av(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(n=n.child,n!==null))for(Lh(n,e,t),n=n.sibling;n!==null;)Lh(n,e,t),n=n.sibling}function Dh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Dh(n,e,t),n=n.sibling;n!==null;)Dh(n,e,t),n=n.sibling}var Gt=null,$n=!1;function Di(n,e,t){for(t=t.child;t!==null;)lv(n,e,t),t=t.sibling}function lv(n,e,t){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(oc,t)}catch{}switch(t.tag){case 5:en||ws(t,e);case 6:var i=Gt,r=$n;Gt=null,Di(n,e,t),Gt=i,$n=r,Gt!==null&&($n?(n=Gt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Gt.removeChild(t.stateNode));break;case 18:Gt!==null&&($n?(n=Gt,t=t.stateNode,n.nodeType===8?Xc(n.parentNode,t):n.nodeType===1&&Xc(n,t),jo(n)):Xc(Gt,t.stateNode));break;case 4:i=Gt,r=$n,Gt=t.stateNode.containerInfo,$n=!0,Di(n,e,t),Gt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rh(t,e,o),r=r.next}while(r!==i)}Di(n,e,t);break;case 1:if(!en&&(ws(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){xt(t,e,a)}Di(n,e,t);break;case 21:Di(n,e,t);break;case 22:t.mode&1?(en=(i=en)||t.memoizedState!==null,Di(n,e,t),en=i):Di(n,e,t);break;default:Di(n,e,t)}}function up(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new wx),e.forEach(function(i){var r=Nx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Wn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,$n=!1;break e;case 3:Gt=a.stateNode.containerInfo,$n=!0;break e;case 4:Gt=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Gt===null)throw Error(ie(160));lv(s,o,r),Gt=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cv(e,n),e=e.sibling}function cv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Wn(e,n),ii(n),i&4){try{Do(3,n,n.return),pc(3,n)}catch(y){xt(n,n.return,y)}try{Do(5,n,n.return)}catch(y){xt(n,n.return,y)}}break;case 1:Wn(e,n),ii(n),i&512&&t!==null&&ws(t,t.return);break;case 5:if(Wn(e,n),ii(n),i&512&&t!==null&&ws(t,t.return),n.flags&32){var r=n.stateNode;try{Ho(r,"")}catch(y){xt(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Lg(r,s),nh(a,o);var c=nh(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?Og(r,d):h==="dangerouslySetInnerHTML"?Ng(r,d):h==="children"?Ho(r,d):td(r,h,d,c)}switch(a){case"input":Ku(r,s);break;case"textarea":Dg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Rs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Zo]=s}catch(y){xt(n,n.return,y)}}break;case 6:if(Wn(e,n),ii(n),i&4){if(n.stateNode===null)throw Error(ie(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){xt(n,n.return,y)}}break;case 3:if(Wn(e,n),ii(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(y){xt(n,n.return,y)}break;case 4:Wn(e,n),ii(n);break;case 13:Wn(e,n),ii(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nd=Et())),i&4&&up(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(en=(c=en)||h,Wn(e,n),en=c):Wn(e,n),ii(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!h&&n.mode&1)for(me=n,h=n.child;h!==null;){for(d=me=h;me!==null;){switch(f=me,p=f.child,f.tag){case 0:case 11:case 14:case 15:Do(4,f,f.return);break;case 1:ws(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){xt(i,t,y)}}break;case 5:ws(f,f.return);break;case 22:if(f.memoizedState!==null){dp(d);continue}}p!==null?(p.return=f,me=p):dp(d)}h=h.sibling}e:for(h=null,d=n;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ug("display",o))}catch(y){xt(n,n.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){xt(n,n.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Wn(e,n),ii(n),i&4&&up(n);break;case 21:break;default:Wn(e,n),ii(n)}}function ii(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(av(t)){var i=t;break e}t=t.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ho(r,""),i.flags&=-33);var s=cp(n);Dh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=cp(n);Lh(n,a,o);break;default:throw Error(ie(161))}}catch(l){xt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Ax(n,e,t){me=n,uv(n)}function uv(n,e,t){for(var i=(n.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Pa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=Pa;var c=en;if(Pa=o,(en=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?fp(r):l!==null?(l.return=o,me=l):fp(r);for(;s!==null;)me=s,uv(s),s=s.sibling;me=r,Pa=a,en=c}hp(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):hp(n)}}function hp(n){for(;me!==null;){var e=me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||pc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:qn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$f(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}$f(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&jo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}en||e.flags&512&&Ph(e)}catch(f){xt(e,e.return,f)}}if(e===n){me=null;break}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}}function dp(n){for(;me!==null;){var e=me;if(e===n){me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,me=t;break}me=e.return}}function fp(n){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{pc(4,e)}catch(l){xt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Ph(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{Ph(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===n){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var bx=Math.ceil,Yl=Pi.ReactCurrentDispatcher,Dd=Pi.ReactCurrentOwner,Hn=Pi.ReactCurrentBatchConfig,Ke=0,zt=null,Ct=null,Wt=0,Mn=0,Ts=fr(0),Pt=0,na=null,zr=0,mc=0,Id=0,Io=null,dn=null,Nd=0,Ws=1/0,yi=null,ql=!1,Ih=null,ir=null,La=!1,qi=null,$l=0,No=0,Nh=null,Ml=-1,El=0;function ln(){return Ke&6?Et():Ml!==-1?Ml:Ml=Et()}function rr(n){return n.mode&1?Ke&2&&Wt!==0?Wt&-Wt:ux.transition!==null?(El===0&&(El=qg()),El):(n=tt,n!==0||(n=window.event,n=n===void 0?16:t0(n.type)),n):1}function ei(n,e,t,i){if(50<No)throw No=0,Nh=null,Error(ie(185));la(n,t,i),(!(Ke&2)||n!==zt)&&(n===zt&&(!(Ke&2)&&(mc|=t),Pt===4&&ji(n,Wt)),gn(n,i),t===1&&Ke===0&&!(e.mode&1)&&(Ws=Et()+500,hc&&pr()))}function gn(n,e){var t=n.callbackNode;uy(n,e);var i=Dl(n,n===zt?Wt:0);if(i===0)t!==null&&Mf(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Mf(t),e===1)n.tag===0?cx(pp.bind(null,n)):x0(pp.bind(null,n)),sx(function(){!(Ke&6)&&pr()}),t=null;else{switch($g(i)){case 1:t=od;break;case 4:t=Xg;break;case 16:t=Ll;break;case 536870912:t=Yg;break;default:t=Ll}t=_v(t,hv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function hv(n,e){if(Ml=-1,El=0,Ke&6)throw Error(ie(327));var t=n.callbackNode;if(Ns()&&n.callbackNode!==t)return null;var i=Dl(n,n===zt?Wt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Zl(n,i);else{e=i;var r=Ke;Ke|=2;var s=fv();(zt!==n||Wt!==e)&&(yi=null,Ws=Et()+500,Lr(n,e));do try{Px();break}catch(a){dv(n,a)}while(!0);yd(),Yl.current=s,Ke=r,Ct!==null?e=0:(zt=null,Wt=0,e=Pt)}if(e!==0){if(e===2&&(r=ah(n),r!==0&&(i=r,e=Uh(n,r))),e===1)throw t=na,Lr(n,0),ji(n,i),gn(n,Et()),t;if(e===6)ji(n,i);else{if(r=n.current.alternate,!(i&30)&&!Cx(r)&&(e=Zl(n,i),e===2&&(s=ah(n),s!==0&&(i=s,e=Uh(n,s))),e===1))throw t=na,Lr(n,0),ji(n,i),gn(n,Et()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Er(n,dn,yi);break;case 3:if(ji(n,i),(i&130023424)===i&&(e=Nd+500-Et(),10<e)){if(Dl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){ln(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=mh(Er.bind(null,n,dn,yi),e);break}Er(n,dn,yi);break;case 4:if(ji(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*bx(i/1960))-i,10<i){n.timeoutHandle=mh(Er.bind(null,n,dn,yi),i);break}Er(n,dn,yi);break;case 5:Er(n,dn,yi);break;default:throw Error(ie(329))}}}return gn(n,Et()),n.callbackNode===t?hv.bind(null,n):null}function Uh(n,e){var t=Io;return n.current.memoizedState.isDehydrated&&(Lr(n,e).flags|=256),n=Zl(n,e),n!==2&&(e=dn,dn=t,e!==null&&Oh(e)),n}function Oh(n){dn===null?dn=n:dn.push.apply(dn,n)}function Cx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(n,e){for(e&=~Id,e&=~mc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Jn(e),i=1<<t;n[t]=-1,e&=~i}}function pp(n){if(Ke&6)throw Error(ie(327));Ns();var e=Dl(n,0);if(!(e&1))return gn(n,Et()),null;var t=Zl(n,e);if(n.tag!==0&&t===2){var i=ah(n);i!==0&&(e=i,t=Uh(n,i))}if(t===1)throw t=na,Lr(n,0),ji(n,e),gn(n,Et()),t;if(t===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Er(n,dn,yi),gn(n,Et()),null}function Ud(n,e){var t=Ke;Ke|=1;try{return n(e)}finally{Ke=t,Ke===0&&(Ws=Et()+500,hc&&pr())}}function Br(n){qi!==null&&qi.tag===0&&!(Ke&6)&&Ns();var e=Ke;Ke|=1;var t=Hn.transition,i=tt;try{if(Hn.transition=null,tt=1,n)return n()}finally{tt=i,Hn.transition=t,Ke=e,!(Ke&6)&&pr()}}function Od(){Mn=Ts.current,ct(Ts)}function Lr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,rx(t)),Ct!==null)for(t=Ct.return;t!==null;){var i=t;switch(gd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fl();break;case 3:Gs(),ct(pn),ct(tn),Td();break;case 5:wd(i);break;case 4:Gs();break;case 13:ct(pt);break;case 19:ct(pt);break;case 10:xd(i.type._context);break;case 22:case 23:Od()}t=t.return}if(zt=n,Ct=n=sr(n.current,null),Wt=Mn=e,Pt=0,na=null,Id=mc=zr=0,dn=Io=null,Rr!==null){for(e=0;e<Rr.length;e++)if(t=Rr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Rr=null}return n}function dv(n,e){do{var t=Ct;try{if(yd(),yl.current=Xl,jl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jl=!1}if(kr=0,Ut=Rt=mt=null,Lo=!1,Jo=0,Dd.current=null,t===null||t.return===null){Pt=1,na=e,Ct=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=tp(o);if(p!==null){p.flags&=-257,np(p,o,a,s,e),p.mode&1&&ep(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){ep(s,c,e),Fd();break e}l=Error(ie(426))}}else if(ht&&a.mode&1){var v=tp(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),np(v,o,a,s,e),vd(Vs(l,a));break e}}s=l=Vs(l,a),Pt!==4&&(Pt=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=$0(s,l,e);qf(s,u);break e;case 1:a=l;var g=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ir===null||!ir.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Z0(s,a,e);qf(s,x);break e}}s=s.return}while(s!==null)}mv(t)}catch(A){e=A,Ct===t&&t!==null&&(Ct=t=t.return);continue}break}while(!0)}function fv(){var n=Yl.current;return Yl.current=Xl,n===null?Xl:n}function Fd(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),zt===null||!(zr&268435455)&&!(mc&268435455)||ji(zt,Wt)}function Zl(n,e){var t=Ke;Ke|=2;var i=fv();(zt!==n||Wt!==e)&&(yi=null,Lr(n,e));do try{Rx();break}catch(r){dv(n,r)}while(!0);if(yd(),Ke=t,Yl.current=i,Ct!==null)throw Error(ie(261));return zt=null,Wt=0,Pt}function Rx(){for(;Ct!==null;)pv(Ct)}function Px(){for(;Ct!==null&&!ty();)pv(Ct)}function pv(n){var e=vv(n.alternate,n,Mn);n.memoizedProps=n.pendingProps,e===null?mv(n):Ct=e,Dd.current=null}function mv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Ex(t,e),t!==null){t.flags&=32767,Ct=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Pt=6,Ct=null;return}}else if(t=Mx(t,e,Mn),t!==null){Ct=t;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=n}while(e!==null);Pt===0&&(Pt=5)}function Er(n,e,t){var i=tt,r=Hn.transition;try{Hn.transition=null,tt=1,Lx(n,e,t,i)}finally{Hn.transition=r,tt=i}return null}function Lx(n,e,t,i){do Ns();while(qi!==null);if(Ke&6)throw Error(ie(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(hy(n,s),n===zt&&(Ct=zt=null,Wt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||La||(La=!0,_v(Ll,function(){return Ns(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=tt;tt=1;var a=Ke;Ke|=4,Dd.current=null,Tx(n,t),cv(t,n),Ky(fh),Il=!!dh,fh=dh=null,n.current=t,Ax(t),ny(),Ke=a,tt=o,Hn.transition=s}else n.current=t;if(La&&(La=!1,qi=n,$l=r),s=n.pendingLanes,s===0&&(ir=null),sy(t.stateNode),gn(n,Et()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ql)throw ql=!1,n=Ih,Ih=null,n;return $l&1&&n.tag!==0&&Ns(),s=n.pendingLanes,s&1?n===Nh?No++:(No=0,Nh=n):No=0,pr(),null}function Ns(){if(qi!==null){var n=$g($l),e=Hn.transition,t=tt;try{if(Hn.transition=null,tt=16>n?16:n,qi===null)var i=!1;else{if(n=qi,qi=null,$l=0,Ke&6)throw Error(ie(331));var r=Ke;for(Ke|=4,me=n.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var h=me;switch(h.tag){case 0:case 11:case 15:Do(8,h,s)}var d=h.child;if(d!==null)d.return=h,me=d;else for(;me!==null;){h=me;var f=h.sibling,p=h.return;if(ov(h),h===c){me=null;break}if(f!==null){f.return=p,me=f;break}me=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Do(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var g=n.current;for(me=g;me!==null;){o=me;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,me=m;else e:for(o=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pc(9,a)}}catch(A){xt(a,a.return,A)}if(a===o){me=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,me=x;break e}me=a.return}}if(Ke=r,pr(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(oc,n)}catch{}i=!0}return i}finally{tt=t,Hn.transition=e}}return!1}function mp(n,e,t){e=Vs(t,e),e=$0(n,e,1),n=nr(n,e,1),e=ln(),n!==null&&(la(n,1,e),gn(n,e))}function xt(n,e,t){if(n.tag===3)mp(n,n,t);else for(;e!==null;){if(e.tag===3){mp(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){n=Vs(t,n),n=Z0(e,n,1),e=nr(e,n,1),n=ln(),e!==null&&(la(e,1,n),gn(e,n));break}}e=e.return}}function Dx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=ln(),n.pingedLanes|=n.suspendedLanes&t,zt===n&&(Wt&t)===t&&(Pt===4||Pt===3&&(Wt&130023424)===Wt&&500>Et()-Nd?Lr(n,0):Id|=t),gn(n,e)}function gv(n,e){e===0&&(n.mode&1?(e=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):e=1);var t=ln();n=bi(n,e),n!==null&&(la(n,e,t),gn(n,t))}function Ix(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),gv(n,t)}function Nx(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),gv(n,t)}var vv;vv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||pn.current)fn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return fn=!1,Sx(n,e,t);fn=!!(n.flags&131072)}else fn=!1,ht&&e.flags&1048576&&S0(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sl(n,e),n=e.pendingProps;var r=zs(e,tn.current);Is(e,t),r=bd(null,e,i,n,r,t);var s=Cd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Md(e),r.updater=fc,e.stateNode=r,r._reactInternals=e,Mh(e,i,n,t),e=Th(null,e,i,!0,s,t)):(e.tag=0,ht&&s&&md(e),on(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Sl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ox(i),n=qn(i,n),r){case 0:e=wh(null,e,i,n,t);break e;case 1:e=sp(null,e,i,n,t);break e;case 11:e=ip(null,e,i,n,t);break e;case 14:e=rp(null,e,i,qn(i.type,n),t);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),wh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),sp(n,e,i,r,t);case 3:e:{if(ev(e),n===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,b0(n,e),Vl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vs(Error(ie(423)),e),e=op(n,e,i,t,r);break e}else if(i!==r){r=Vs(Error(ie(424)),e),e=op(n,e,i,t,r);break e}else for(wn=tr(e.stateNode.containerInfo.firstChild),Tn=e,ht=!0,Zn=null,t=T0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Bs(),i===r){e=Ci(n,e,t);break e}on(n,e,i,t)}e=e.child}return e;case 5:return C0(e),n===null&&yh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,ph(i,r)?o=null:s!==null&&ph(i,s)&&(e.flags|=32),J0(n,e),on(n,e,o,t),e.child;case 6:return n===null&&yh(e),null;case 13:return tv(n,e,t);case 4:return Ed(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Hs(e,null,i,t):on(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),ip(n,e,i,r,t);case 7:return on(n,e,e.pendingProps,t),e.child;case 8:return on(n,e,e.pendingProps.children,t),e.child;case 12:return on(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Hl,i._currentValue),i._currentValue=o,s!==null)if(ti(s.value,o)){if(s.children===r.children&&!pn.current){e=Ci(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),xh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),xh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,t),r=Gn(r),i=i(r),e.flags|=1,on(n,e,i,t),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),rp(n,e,i,r,t);case 15:return K0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Sl(n,e),e.tag=1,mn(i)?(n=!0,kl(e)):n=!1,Is(e,t),q0(e,i,r),Mh(e,i,r,t),Th(null,e,i,!0,n,t);case 19:return nv(n,e,t);case 22:return Q0(n,e,t)}throw Error(ie(156,e.tag))};function _v(n,e){return jg(n,e)}function Ux(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(n,e,t,i){return new Ux(n,e,t,i)}function kd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ox(n){if(typeof n=="function")return kd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===id)return 11;if(n===rd)return 14}return 2}function sr(n,e){var t=n.alternate;return t===null?(t=Bn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function wl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")kd(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ms:return Dr(t.children,r,s,e);case nd:o=8,r|=8;break;case Xu:return n=Bn(12,t,e,r|2),n.elementType=Xu,n.lanes=s,n;case Yu:return n=Bn(13,t,e,r),n.elementType=Yu,n.lanes=s,n;case qu:return n=Bn(19,t,e,r),n.elementType=qu,n.lanes=s,n;case Cg:return gc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ag:o=10;break e;case bg:o=9;break e;case id:o=11;break e;case rd:o=14;break e;case Bi:o=16,i=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return e=Bn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Dr(n,e,t,i){return n=Bn(7,n,i,e),n.lanes=t,n}function gc(n,e,t,i){return n=Bn(22,n,i,e),n.elementType=Cg,n.lanes=t,n.stateNode={isHidden:!1},n}function eu(n,e,t){return n=Bn(6,n,null,e),n.lanes=t,n}function tu(n,e,t){return e=Bn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Fx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zd(n,e,t,i,r,s,o,a,l){return n=new Fx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Md(s),n}function kx(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function yv(n){if(!n)return ur;n=n._reactInternals;e:{if(Wr(n)!==n||n.tag!==1)throw Error(ie(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(n.tag===1){var t=n.type;if(mn(t))return y0(n,t,e)}return e}function xv(n,e,t,i,r,s,o,a,l){return n=zd(t,i,!0,n,r,s,o,a,l),n.context=yv(null),t=n.current,i=ln(),r=rr(t),s=wi(i,r),s.callback=e??null,nr(t,s,r),n.current.lanes=r,la(n,r,i),gn(n,i),n}function vc(n,e,t,i){var r=e.current,s=ln(),o=rr(r);return t=yv(t),e.context===null?e.context=t:e.pendingContext=t,e=wi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=nr(r,e,o),n!==null&&(ei(n,r,o,s),_l(n,r,o)),o}function Kl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function gp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Bd(n,e){gp(n,e),(n=n.alternate)&&gp(n,e)}function zx(){return null}var Sv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hd(n){this._internalRoot=n}_c.prototype.render=Hd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ie(409));vc(n,e,null,null)};_c.prototype.unmount=Hd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Br(function(){vc(null,n,null,null)}),e[Ai]=null}};function _c(n){this._internalRoot=n}_c.prototype.unstable_scheduleHydration=function(n){if(n){var e=Qg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Wi.length&&e!==0&&e<Wi[t].priority;t++);Wi.splice(t,0,n),t===0&&e0(n)}};function Gd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vp(){}function Bx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Kl(o);s.call(c)}}var o=xv(e,i,n,0,null,!1,!1,"",vp);return n._reactRootContainer=o,n[Ai]=o.current,qo(n.nodeType===8?n.parentNode:n),Br(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Kl(l);a.call(c)}}var l=zd(n,0,!1,null,null,!1,!1,"",vp);return n._reactRootContainer=l,n[Ai]=l.current,qo(n.nodeType===8?n.parentNode:n),Br(function(){vc(e,l,t,i)}),l}function xc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Kl(o);a.call(l)}}vc(e,o,n,r)}else o=Bx(t,e,n,r,i);return Kl(o)}Zg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Mo(e.pendingLanes);t!==0&&(ad(e,t|1),gn(e,Et()),!(Ke&6)&&(Ws=Et()+500,pr()))}break;case 13:Br(function(){var i=bi(n,1);if(i!==null){var r=ln();ei(i,n,1,r)}}),Bd(n,1)}};ld=function(n){if(n.tag===13){var e=bi(n,134217728);if(e!==null){var t=ln();ei(e,n,134217728,t)}Bd(n,134217728)}};Kg=function(n){if(n.tag===13){var e=rr(n),t=bi(n,e);if(t!==null){var i=ln();ei(t,n,e,i)}Bd(n,e)}};Qg=function(){return tt};Jg=function(n,e){var t=tt;try{return tt=n,e()}finally{tt=t}};rh=function(n,e,t){switch(e){case"input":if(Ku(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=uc(i);if(!r)throw Error(ie(90));Pg(i),Ku(i,r)}}}break;case"textarea":Dg(n,t);break;case"select":e=t.value,e!=null&&Rs(n,!!t.multiple,e,!1)}};zg=Ud;Bg=Br;var Hx={usingClientEntryPoint:!1,Events:[ua,ys,uc,Fg,kg,Ud]},ho={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gx={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vg(n),n===null?null:n.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||zx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{oc=Da.inject(Gx),ci=Da}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;Cn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gd(e))throw Error(ie(200));return kx(n,e,null,t)};Cn.createRoot=function(n,e){if(!Gd(n))throw Error(ie(299));var t=!1,i="",r=Sv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zd(n,1,!1,null,null,t,!1,i,r),n[Ai]=e.current,qo(n.nodeType===8?n.parentNode:n),new Hd(e)};Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=Vg(e),n=n===null?null:n.stateNode,n};Cn.flushSync=function(n){return Br(n)};Cn.hydrate=function(n,e,t){if(!yc(e))throw Error(ie(200));return xc(null,n,e,!0,t)};Cn.hydrateRoot=function(n,e,t){if(!Gd(n))throw Error(ie(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Sv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=xv(e,null,n,1,t??null,r,!1,s,o),n[Ai]=e.current,qo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new _c(e)};Cn.render=function(n,e,t){if(!yc(e))throw Error(ie(200));return xc(null,n,e,!1,t)};Cn.unmountComponentAtNode=function(n){if(!yc(n))throw Error(ie(40));return n._reactRootContainer?(Br(function(){xc(null,null,n,!1,function(){n._reactRootContainer=null,n[Ai]=null})}),!0):!1};Cn.unstable_batchedUpdates=Ud;Cn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!yc(t))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return xc(n,e,t,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function Mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mv)}catch(n){console.error(n)}}Mv(),Mg.exports=Cn;var Ev=Mg.exports,wv,_p=Ev;wv=_p.createRoot,_p.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vd="160",Gi={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vx=0,yp=1,Wx=2,Tv=1,jx=2,_i=3,hr=0,vn=1,kn=2,or=0,Us=1,xp=2,Sp=3,Mp=4,Xx=5,Ar=100,Yx=101,qx=102,Ep=103,wp=104,$x=200,Zx=201,Kx=202,Qx=203,Fh=204,kh=205,Jx=206,eS=207,tS=208,nS=209,iS=210,rS=211,sS=212,oS=213,aS=214,lS=0,cS=1,uS=2,Ql=3,hS=4,dS=5,fS=6,pS=7,Av=0,mS=1,gS=2,ar=0,vS=1,_S=2,yS=3,bv=4,xS=5,SS=6,Cv=300,js=301,Xs=302,zh=303,Bh=304,Sc=306,Hh=1e3,Kn=1001,Gh=1002,an=1003,Tp=1004,nu=1005,Un=1006,MS=1007,ia=1008,lr=1009,ES=1010,wS=1011,Wd=1012,Rv=1013,$i=1014,Zi=1015,ra=1016,Pv=1017,Lv=1018,Ir=1020,TS=1021,Qn=1023,AS=1024,bS=1025,Nr=1026,Ys=1027,CS=1028,Dv=1029,RS=1030,Iv=1031,Nv=1033,iu=33776,ru=33777,su=33778,ou=33779,Ap=35840,bp=35841,Cp=35842,Rp=35843,Uv=36196,Pp=37492,Lp=37496,Dp=37808,Ip=37809,Np=37810,Up=37811,Op=37812,Fp=37813,kp=37814,zp=37815,Bp=37816,Hp=37817,Gp=37818,Vp=37819,Wp=37820,jp=37821,au=36492,Xp=36494,Yp=36495,PS=36283,qp=36284,$p=36285,Zp=36286,Ov=3e3,Ur=3001,LS=3200,DS=3201,Fv=0,IS=1,zn="",Ot="srgb",Ri="srgb-linear",jd="display-p3",Mc="display-p3-linear",Jl="linear",lt="srgb",ec="rec709",tc="p3",Yr=7680,Kp=519,NS=512,US=513,OS=514,kv=515,FS=516,kS=517,zS=518,BS=519,Qp=35044,Jp="300 es",Vh=1035,Ei=2e3,nc=2001;class jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let em=1234567;const Os=Math.PI/180,sa=180/Math.PI;function Js(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function Xd(n,e){return(n%e+e)%e}function HS(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function GS(n,e,t){return n!==e?(t-n)/(e-n):0}function Uo(n,e,t){return(1-t)*n+t*e}function VS(n,e,t,i){return Uo(n,e,1-Math.exp(-t*i))}function WS(n,e=1){return e-Math.abs(Xd(n,e*2)-e)}function jS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function XS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function YS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qS(n,e){return n+Math.random()*(e-n)}function $S(n){return n*(.5-Math.random())}function ZS(n){n!==void 0&&(em=n);let e=em+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KS(n){return n*Os}function QS(n){return n*sa}function Wh(n){return(n&n-1)===0&&n!==0}function JS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ic(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function eM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hn={DEG2RAD:Os,RAD2DEG:sa,generateUUID:Js,clamp:Ft,euclideanModulo:Xd,mapLinear:HS,inverseLerp:GS,lerp:Uo,damp:VS,pingpong:WS,smoothstep:jS,smootherstep:XS,randInt:YS,randFloat:qS,randFloatSpread:$S,seededRandom:ZS,degToRad:KS,radToDeg:QS,isPowerOfTwo:Wh,ceilPowerOfTwo:JS,floorPowerOfTwo:ic,setQuaternionFromProperEuler:eM,normalize:nn,denormalize:fs};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],_=i[8],y=r[0],v=r[3],u=r[6],g=r[1],m=r[4],x=r[7],A=r[2],T=r[5],S=r[8];return s[0]=o*y+a*g+l*A,s[3]=o*v+a*m+l*T,s[6]=o*u+a*x+l*S,s[1]=c*y+h*g+d*A,s[4]=c*v+h*m+d*T,s[7]=c*u+h*x+d*S,s[2]=f*y+p*g+_*A,s[5]=f*v+p*m+_*T,s[8]=f*u+p*x+_*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,p=c*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(lu.makeScale(e,t)),this}rotate(e){return this.premultiply(lu.makeRotation(-e)),this}translate(e,t){return this.premultiply(lu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lu=new Xe;function zv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tM(){const n=rc("canvas");return n.style.display="block",n}const tm={};function Oo(n){n in tm||(tm[n]=!0,console.warn(n))}const nm=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),im=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ia={[Ri]:{transfer:Jl,primaries:ec,toReference:n=>n,fromReference:n=>n},[Ot]:{transfer:lt,primaries:ec,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Mc]:{transfer:Jl,primaries:tc,toReference:n=>n.applyMatrix3(im),fromReference:n=>n.applyMatrix3(nm)},[jd]:{transfer:lt,primaries:tc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(im),fromReference:n=>n.applyMatrix3(nm).convertLinearToSRGB()}},nM=new Set([Ri,Mc]),nt={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!nM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ia[e].toReference,r=Ia[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ia[n].primaries},getTransfer:function(n){return n===zn?Jl:Ia[n].transfer}};function Fs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qr;class Bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qr===void 0&&(qr=rc("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fs(t[i]/255)*255):t[i]=Fs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iM=0;class Hv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Js(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(uu(r[o].image)):s.push(uu(r[o]))}else s=uu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function uu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rM=0;class An extends jr{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,i=Kn,r=Kn,s=Un,o=ia,a=Qn,l=lr,c=An.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Js(),this.name="",this.source=new Hv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ur?Ot:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hh:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hh:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Ur:Ov}set encoding(e){Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ur?Ot:zn}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Cv;An.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],y=l[2],v=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(_-v)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(_+v)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(c+1)/2,x=(p+1)/2,A=(u+1)/2,T=(h+f)/4,S=(d+y)/4,L=(_+v)/4;return m>x&&m>A?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=T/i,s=S/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=L/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=S/s,r=L/s),this.set(i,r,s,t),this}let g=Math.sqrt((v-_)*(v-_)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(v-_)/g,this.y=(d-y)/g,this.z=(f-h)/g,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends jr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Oo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ur?Ot:zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new An(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends sM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gv extends An{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oM extends An{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(d!==y||l!==f||c!==p||h!==_){let v=1-a;const u=l*f+c*p+h*_+d*y,g=u>=0?1:-1,m=1-u*u;if(m>Number.EPSILON){const A=Math.sqrt(m),T=Math.atan2(A,u*g);v=Math.sin(v*T)/A,a=Math.sin(a*T)/A}const x=a*g;if(l=l*v+f*x,c=c*v+p*x,h=h*v+_*x,d=d*v+y*x,v===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+h*d+l*p-c*f,e[t+1]=l*_+h*f+c*d-a*p,e[t+2]=c*_+h*p+a*f-l*d,e[t+3]=h*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"YZX":this._x=f*h*d+c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d-f*p*_;break;case"XZY":this._x=f*h*d-c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hu.copy(this).projectOnVector(e),this.sub(hu)}reflect(e){return this.sub(hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hu=new R,rm=new Vt;class eo{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Na.copy(i.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Ua.subVectors(this.max,fo),$r.subVectors(e.a,fo),Zr.subVectors(e.b,fo),Kr.subVectors(e.c,fo),Ii.subVectors(Zr,$r),Ni.subVectors(Kr,Zr),vr.subVectors($r,Kr);let t=[0,-Ii.z,Ii.y,0,-Ni.z,Ni.y,0,-vr.z,vr.y,Ii.z,0,-Ii.x,Ni.z,0,-Ni.x,vr.z,0,-vr.x,-Ii.y,Ii.x,0,-Ni.y,Ni.x,0,-vr.y,vr.x,0];return!du(t,$r,Zr,Kr,Ua)||(t=[1,0,0,0,1,0,0,0,1],!du(t,$r,Zr,Kr,Ua))?!1:(Oa.crossVectors(Ii,Ni),t=[Oa.x,Oa.y,Oa.z],du(t,$r,Zr,Kr,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new R,new R,new R,new R,new R,new R,new R,new R],jn=new R,Na=new eo,$r=new R,Zr=new R,Kr=new R,Ii=new R,Ni=new R,vr=new R,fo=new R,Ua=new R,Oa=new R,_r=new R;function du(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){_r.fromArray(n,s);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),c=t.dot(_r),h=i.dot(_r);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const aM=new eo,po=new R,fu=new R;class Ec{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):aM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);const t=po.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(fu)),this.expandByPoint(po.copy(e.center).sub(fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new R,pu=new R,Fa=new R,Ui=new R,mu=new R,ka=new R,gu=new R;class wc{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){pu.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(pu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Fa),a=Ui.dot(this.direction),l=-Ui.dot(Fa),c=Ui.lengthSq(),h=Math.abs(1-o*o);let d,f,p,_;if(h>0)if(d=o*l-a,f=o*a-l,_=s*h,d>=0)if(f>=-_)if(f<=_){const y=1/h;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(pu).addScaledVector(Fa,f),p}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,r,s){mu.subVectors(t,e),ka.subVectors(i,e),gu.crossVectors(mu,ka);let o=this.direction.dot(gu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(ka.crossVectors(Ui,ka));if(l<0)return null;const c=a*this.direction.dot(mu.cross(Ui));if(c<0||l+c>o)return null;const h=-a*Ui.dot(gu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,r,s,o,a,l,c,h,d,f,p,_,y,v){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,d,f,p,_,y,v)}set(e,t,i,r,s,o,a,l,c,h,d,f,p,_,y,v){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=_,u[11]=y,u[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*d,_=a*h,y=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,_=c*h,y=c*d;t[0]=f+y*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,_=c*h,y=c*d;t[0]=f-y*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,_=a*h,y=a*d;t[0]=l*h,t[4]=_*c-p,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,y=a*c;t[0]=l*h,t[4]=y-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+_,t[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,y=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+y,t[5]=o*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*h,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lM,e,cM)}lookAt(e,t,i){const r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Oi.crossVectors(i,yn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Oi.crossVectors(i,yn)),Oi.normalize(),za.crossVectors(yn,Oi),r[0]=Oi.x,r[4]=za.x,r[8]=yn.x,r[1]=Oi.y,r[5]=za.y,r[9]=yn.y,r[2]=Oi.z,r[6]=za.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],_=i[2],y=i[6],v=i[10],u=i[14],g=i[3],m=i[7],x=i[11],A=i[15],T=r[0],S=r[4],L=r[8],M=r[12],w=r[1],z=r[5],V=r[9],J=r[13],I=r[2],k=r[6],X=r[10],$=r[14],N=r[3],O=r[7],B=r[11],Z=r[15];return s[0]=o*T+a*w+l*I+c*N,s[4]=o*S+a*z+l*k+c*O,s[8]=o*L+a*V+l*X+c*B,s[12]=o*M+a*J+l*$+c*Z,s[1]=h*T+d*w+f*I+p*N,s[5]=h*S+d*z+f*k+p*O,s[9]=h*L+d*V+f*X+p*B,s[13]=h*M+d*J+f*$+p*Z,s[2]=_*T+y*w+v*I+u*N,s[6]=_*S+y*z+v*k+u*O,s[10]=_*L+y*V+v*X+u*B,s[14]=_*M+y*J+v*$+u*Z,s[3]=g*T+m*w+x*I+A*N,s[7]=g*S+m*z+x*k+A*O,s[11]=g*L+m*V+x*X+A*B,s[15]=g*M+m*J+x*$+A*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],_=e[3],y=e[7],v=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*h-s*l*h)+v*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*h-i*c*h)+u*(-r*a*h-t*l*d+t*a*f+r*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],_=e[12],y=e[13],v=e[14],u=e[15],g=d*v*c-y*f*c+y*l*p-a*v*p-d*l*u+a*f*u,m=_*f*c-h*v*c-_*l*p+o*v*p+h*l*u-o*f*u,x=h*y*c-_*d*c+_*a*p-o*y*p-h*a*u+o*d*u,A=_*d*l-h*y*l-_*a*f+o*y*f+h*a*v-o*d*v,T=t*g+i*m+r*x+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/T;return e[0]=g*S,e[1]=(y*f*s-d*v*s-y*r*p+i*v*p+d*r*u-i*f*u)*S,e[2]=(a*v*s-y*l*s+y*r*c-i*v*c-a*r*u+i*l*u)*S,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*S,e[4]=m*S,e[5]=(h*v*s-_*f*s+_*r*p-t*v*p-h*r*u+t*f*u)*S,e[6]=(_*l*s-o*v*s-_*r*c+t*v*c+o*r*u-t*l*u)*S,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*p+t*l*p)*S,e[8]=x*S,e[9]=(_*d*s-h*y*s-_*i*p+t*y*p+h*i*u-t*d*u)*S,e[10]=(o*y*s-_*a*s+_*i*c-t*y*c-o*i*u+t*a*u)*S,e[11]=(h*a*s-o*d*s-h*i*c+t*d*c+o*i*p-t*a*p)*S,e[12]=A*S,e[13]=(h*y*r-_*d*r+_*i*f-t*y*f-h*i*v+t*d*v)*S,e[14]=(_*a*r-o*y*r-_*i*l+t*y*l+o*i*v-t*a*v)*S,e[15]=(o*d*r-h*a*r+h*i*l-t*d*l-o*i*f+t*a*f)*S,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,f=s*c,p=s*h,_=s*d,y=o*h,v=o*d,u=a*d,g=l*c,m=l*h,x=l*d,A=i.x,T=i.y,S=i.z;return r[0]=(1-(y+u))*A,r[1]=(p+x)*A,r[2]=(_-m)*A,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(f+u))*T,r[6]=(v+g)*T,r[7]=0,r[8]=(_+m)*S,r[9]=(v-g)*S,r[10]=(1-(f+y))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const c=1/s,h=1/o,d=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,t.setFromRotationMatrix(Xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ei){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(a===Ei)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===nc)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ei){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(o-s),f=(t+e)*c,p=(i+r)*h;let _,y;if(a===Ei)_=(o+s)*d,y=-2*d;else if(a===nc)_=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qr=new R,Xn=new gt,lM=new R(0,0,0),cM=new R(1,1,1),Oi=new R,za=new R,yn=new R,sm=new gt,om=new Vt;class da{constructor(e=0,t=0,i=0,r=da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class Yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uM=0;const am=new R,Jr=new Vt,mi=new gt,Ba=new R,mo=new R,hM=new R,dM=new Vt,lm=new R(1,0,0),cm=new R(0,1,0),um=new R(0,0,1),fM={type:"added"},pM={type:"removed"};class wt extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new R,t=new da,i=new Vt,r=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Xe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,t){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ba.copy(e):Ba.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(mo,Ba,this.up):mi.lookAt(Ba,mo,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(mi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,hM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,dM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DEFAULT_UP=new R(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new R,gi=new R,vu=new R,vi=new R,es=new R,ts=new R,hm=new R,_u=new R,yu=new R,xu=new R;let Ha=!1;class On{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yn.subVectors(e,t),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yn.subVectors(r,t),gi.subVectors(i,t),vu.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(gi),l=Yn.dot(vu),c=gi.dot(gi),h=gi.dot(vu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,_=(o*h-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,t,i,r,s,o,a,l){return Ha===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ha=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static isFrontFacing(e,t,i,r){return Yn.subVectors(i,t),gi.subVectors(e,t),Yn.cross(gi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Yn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ha===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ha=!0),On.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;es.subVectors(r,i),ts.subVectors(s,i),_u.subVectors(e,i);const l=es.dot(_u),c=ts.dot(_u);if(l<=0&&c<=0)return t.copy(i);yu.subVectors(e,r);const h=es.dot(yu),d=ts.dot(yu);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(es,o);xu.subVectors(e,s);const p=es.dot(xu),_=ts.dot(xu);if(_>=0&&p<=_)return t.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(ts,a);const v=h*_-p*d;if(v<=0&&d-h>=0&&p-_>=0)return hm.subVectors(s,r),a=(d-h)/(d-h+(p-_)),t.copy(r).addScaledVector(hm,a);const u=1/(v+y+f);return o=y*u,a=f*u,t.copy(i).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function Su(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Xd(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Su(o,s,e+1/3),this.g=Su(o,s,e),this.b=Su(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=Vv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=cu(e.r),this.g=cu(e.g),this.b=cu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return nt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Ft(Zt.r*255,0,255))*65536+Math.round(Ft(Zt.g*255,0,255))*256+Math.round(Ft(Zt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Zt.copy(this),t);const i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Ot){nt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,r=Zt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Ga);const i=Uo(Fi.h,Ga.h,t),r=Uo(Fi.s,Ga.s,t),s=Uo(Fi.l,Ga.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new ke;ke.NAMES=Vv;let mM=0;class to extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Us,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=kh,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fh&&(i.blendSrc=this.blendSrc),this.blendDst!==kh&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ql&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fa extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new R,Va=new ge;class hi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qp&&(e.usage=this.usage),e}}class Wv extends hi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class jv extends hi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Je extends hi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gM=0;const Ln=new gt,Mu=new wt,ns=new R,xn=new eo,go=new eo,Nt=new R;class dt extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?jv:Wv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return Mu.lookAt(e),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ec);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];go.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(xn.min,go.min),xn.expandByPoint(Nt),Nt.addVectors(xn.max,go.max),xn.expandByPoint(Nt)):(xn.expandByPoint(go.min),xn.expandByPoint(go.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Nt.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(e,c),Nt.add(ns)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new R,h[w]=new R;const d=new R,f=new R,p=new R,_=new ge,y=new ge,v=new ge,u=new R,g=new R;function m(w,z,V){d.fromArray(r,w*3),f.fromArray(r,z*3),p.fromArray(r,V*3),_.fromArray(o,w*2),y.fromArray(o,z*2),v.fromArray(o,V*2),f.sub(d),p.sub(d),y.sub(_),v.sub(_);const J=1/(y.x*v.y-v.x*y.y);isFinite(J)&&(u.copy(f).multiplyScalar(v.y).addScaledVector(p,-y.y).multiplyScalar(J),g.copy(p).multiplyScalar(y.x).addScaledVector(f,-v.x).multiplyScalar(J),c[w].add(u),c[z].add(u),c[V].add(u),h[w].add(g),h[z].add(g),h[V].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let w=0,z=x.length;w<z;++w){const V=x[w],J=V.start,I=V.count;for(let k=J,X=J+I;k<X;k+=3)m(i[k+0],i[k+1],i[k+2])}const A=new R,T=new R,S=new R,L=new R;function M(w){S.fromArray(s,w*3),L.copy(S);const z=c[w];A.copy(z),A.sub(S.multiplyScalar(S.dot(z))).normalize(),T.crossVectors(L,z);const J=T.dot(h[w])<0?-1:1;l[w*4]=A.x,l[w*4+1]=A.y,l[w*4+2]=A.z,l[w*4+3]=J}for(let w=0,z=x.length;w<z;++w){const V=x[w],J=V.start,I=V.count;for(let k=J,X=J+I;k<X;k+=3)M(i[k+0]),M(i[k+1]),M(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,v),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,_=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let u=0;u<h;u++)f[_++]=c[p++]}return new hi(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dm=new gt,yr=new wc,Wa=new Ec,fm=new R,is=new R,rs=new R,ss=new R,Eu=new R,ja=new R,Xa=new ge,Ya=new ge,qa=new ge,pm=new R,mm=new R,gm=new R,$a=new R,Za=new R;class de extends wt{constructor(e=new dt,t=new fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Eu.fromBufferAttribute(d,e),o?ja.addScaledVector(Eu,h):ja.addScaledVector(Eu.sub(t),h))}t.add(ja)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(Wa.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Wa,fm)===null||yr.origin.distanceToSquared(fm)>(e.far-e.near)**2))&&(dm.copy(s).invert(),yr.copy(e.ray).applyMatrix4(dm),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const v=f[_],u=o[v.materialIndex],g=Math.max(v.start,p.start),m=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let x=g,A=m;x<A;x+=3){const T=a.getX(x),S=a.getX(x+1),L=a.getX(x+2);r=Ka(this,u,e,i,c,h,d,T,S,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let v=_,u=y;v<u;v+=3){const g=a.getX(v),m=a.getX(v+1),x=a.getX(v+2);r=Ka(this,o,e,i,c,h,d,g,m,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const v=f[_],u=o[v.materialIndex],g=Math.max(v.start,p.start),m=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let x=g,A=m;x<A;x+=3){const T=x,S=x+1,L=x+2;r=Ka(this,u,e,i,c,h,d,T,S,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let v=_,u=y;v<u;v+=3){const g=v,m=v+1,x=v+2;r=Ka(this,o,e,i,c,h,d,g,m,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function vM(n,e,t,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===hr,a),l===null)return null;Za.copy(a),Za.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Za);return c<t.near||c>t.far?null:{distance:c,point:Za.clone(),object:n}}function Ka(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,is),n.getVertexPosition(l,rs),n.getVertexPosition(c,ss);const h=vM(n,e,t,i,is,rs,ss,$a);if(h){r&&(Xa.fromBufferAttribute(r,a),Ya.fromBufferAttribute(r,l),qa.fromBufferAttribute(r,c),h.uv=On.getInterpolation($a,is,rs,ss,Xa,Ya,qa,new ge)),s&&(Xa.fromBufferAttribute(s,a),Ya.fromBufferAttribute(s,l),qa.fromBufferAttribute(s,c),h.uv1=On.getInterpolation($a,is,rs,ss,Xa,Ya,qa,new ge),h.uv2=h.uv1),o&&(pm.fromBufferAttribute(o,a),mm.fromBufferAttribute(o,l),gm.fromBufferAttribute(o,c),h.normal=On.getInterpolation($a,is,rs,ss,pm,mm,gm,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new R,materialIndex:0};On.getNormal(is,rs,ss,d.normal),h.face=d}return h}class bt extends dt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(d,2));function _(y,v,u,g,m,x,A,T,S,L,M){const w=x/S,z=A/L,V=x/2,J=A/2,I=T/2,k=S+1,X=L+1;let $=0,N=0;const O=new R;for(let B=0;B<X;B++){const Z=B*z-J;for(let Q=0;Q<k;Q++){const q=Q*w-V;O[y]=q*g,O[v]=Z*m,O[u]=I,c.push(O.x,O.y,O.z),O[y]=0,O[v]=0,O[u]=T>0?1:-1,h.push(O.x,O.y,O.z),d.push(Q/S),d.push(1-B/L),$+=1}}for(let B=0;B<L;B++)for(let Z=0;Z<S;Z++){const Q=f+Z+k*B,q=f+Z+k*(B+1),K=f+(Z+1)+k*(B+1),ce=f+(Z+1)+k*B;l.push(Q,q,ce),l.push(q,K,ce),N+=6}a.addGroup(p,N,M),p+=N,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=qs(n[t]);for(const r in i)e[r]=i[r]}return e}function _M(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xv(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const yM={clone:qs,merge:rn};var xM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xM,this.fragmentShader=SM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=_M(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yv extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fn extends Yv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const os=-90,as=1;class MM extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(os,as,e,t);r.layers=this.layers,this.add(r);const s=new Fn(os,as,e,t);s.layers=this.layers,this.add(s);const o=new Fn(os,as,e,t);o.layers=this.layers,this.add(o);const a=new Fn(os,as,e,t);a.layers=this.layers,this.add(a);const l=new Fn(os,as,e,t);l.layers=this.layers,this.add(l);const c=new Fn(os,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class qv extends An{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EM extends Hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Oo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ur?Ot:zn),this.texture=new qv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new bt(5,5,5),s=new Gr({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:or});s.uniforms.tEquirect.value=t;const o=new de(r,s),a=t.minFilter;return t.minFilter===ia&&(t.minFilter=Un),new MM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const wu=new R,wM=new R,TM=new Xe;class oi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wu.subVectors(i,t).cross(wM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||TM.getNormalMatrix(e),r=this.coplanarPoint(wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Ec,Qa=new R;class qd{constructor(e=new oi,t=new oi,i=new oi,r=new oi,s=new oi,o=new oi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],p=r[8],_=r[9],y=r[10],v=r[11],u=r[12],g=r[13],m=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,v-p,x-u).normalize(),i[1].setComponents(l+s,f+c,v+p,x+u).normalize(),i[2].setComponents(l+o,f+h,v+_,x+g).normalize(),i[3].setComponents(l-o,f-h,v-_,x-g).normalize(),i[4].setComponents(l-a,f-d,v-y,x-m).normalize(),t===Ei)i[5].setComponents(l+a,f+d,v+y,x+m).normalize();else if(t===nc)i[5].setComponents(a,d,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $v(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function AM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,p=d.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,d,f),c.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,h,d){const f=h.array,p=h._updateRange,_=h.updateRanges;if(n.bindBuffer(d,c),p.count===-1&&_.length===0&&n.bufferSubData(d,0,f),_.length!==0){for(let y=0,v=_.length;y<v;y++){const u=_[y];t?n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}class $s extends dt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=t/l,p=[],_=[],y=[],v=[];for(let u=0;u<h;u++){const g=u*f-o;for(let m=0;m<c;m++){const x=m*d-s;_.push(x,-g,0),y.push(0,0,1),v.push(m/a),v.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const m=g+c*u,x=g+c*(u+1),A=g+1+c*(u+1),T=g+1+c*u;p.push(m,x,T),p.push(x,A,T)}this.setIndex(p),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(y,3)),this.setAttribute("uv",new Je(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}var bM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,FM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ZM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iE="gl_FragColor = linearToOutputTexel( gl_FragColor );",rE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ME=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,IE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,NE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,GE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,VE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,WE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$E=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,n1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,h1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,p1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,N1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,K1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ew=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:bM,alphahash_pars_fragment:CM,alphamap_fragment:RM,alphamap_pars_fragment:PM,alphatest_fragment:LM,alphatest_pars_fragment:DM,aomap_fragment:IM,aomap_pars_fragment:NM,batching_pars_vertex:UM,batching_vertex:OM,begin_vertex:FM,beginnormal_vertex:kM,bsdfs:zM,iridescence_fragment:BM,bumpmap_pars_fragment:HM,clipping_planes_fragment:GM,clipping_planes_pars_fragment:VM,clipping_planes_pars_vertex:WM,clipping_planes_vertex:jM,color_fragment:XM,color_pars_fragment:YM,color_pars_vertex:qM,color_vertex:$M,common:ZM,cube_uv_reflection_fragment:KM,defaultnormal_vertex:QM,displacementmap_pars_vertex:JM,displacementmap_vertex:eE,emissivemap_fragment:tE,emissivemap_pars_fragment:nE,colorspace_fragment:iE,colorspace_pars_fragment:rE,envmap_fragment:sE,envmap_common_pars_fragment:oE,envmap_pars_fragment:aE,envmap_pars_vertex:lE,envmap_physical_pars_fragment:xE,envmap_vertex:cE,fog_vertex:uE,fog_pars_vertex:hE,fog_fragment:dE,fog_pars_fragment:fE,gradientmap_pars_fragment:pE,lightmap_fragment:mE,lightmap_pars_fragment:gE,lights_lambert_fragment:vE,lights_lambert_pars_fragment:_E,lights_pars_begin:yE,lights_toon_fragment:SE,lights_toon_pars_fragment:ME,lights_phong_fragment:EE,lights_phong_pars_fragment:wE,lights_physical_fragment:TE,lights_physical_pars_fragment:AE,lights_fragment_begin:bE,lights_fragment_maps:CE,lights_fragment_end:RE,logdepthbuf_fragment:PE,logdepthbuf_pars_fragment:LE,logdepthbuf_pars_vertex:DE,logdepthbuf_vertex:IE,map_fragment:NE,map_pars_fragment:UE,map_particle_fragment:OE,map_particle_pars_fragment:FE,metalnessmap_fragment:kE,metalnessmap_pars_fragment:zE,morphcolor_vertex:BE,morphnormal_vertex:HE,morphtarget_pars_vertex:GE,morphtarget_vertex:VE,normal_fragment_begin:WE,normal_fragment_maps:jE,normal_pars_fragment:XE,normal_pars_vertex:YE,normal_vertex:qE,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:ZE,clearcoat_normal_fragment_maps:KE,clearcoat_pars_fragment:QE,iridescence_pars_fragment:JE,opaque_fragment:e1,packing:t1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:r1,dithering_pars_fragment:s1,roughnessmap_fragment:o1,roughnessmap_pars_fragment:a1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:c1,shadowmap_vertex:u1,shadowmask_pars_fragment:h1,skinbase_vertex:d1,skinning_pars_vertex:f1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:g1,specularmap_pars_fragment:v1,tonemapping_fragment:_1,tonemapping_pars_fragment:y1,transmission_fragment:x1,transmission_pars_fragment:S1,uv_pars_fragment:M1,uv_pars_vertex:E1,uv_vertex:w1,worldpos_vertex:T1,background_vert:A1,background_frag:b1,backgroundCube_vert:C1,backgroundCube_frag:R1,cube_vert:P1,cube_frag:L1,depth_vert:D1,depth_frag:I1,distanceRGBA_vert:N1,distanceRGBA_frag:U1,equirect_vert:O1,equirect_frag:F1,linedashed_vert:k1,linedashed_frag:z1,meshbasic_vert:B1,meshbasic_frag:H1,meshlambert_vert:G1,meshlambert_frag:V1,meshmatcap_vert:W1,meshmatcap_frag:j1,meshnormal_vert:X1,meshnormal_frag:Y1,meshphong_vert:q1,meshphong_frag:$1,meshphysical_vert:Z1,meshphysical_frag:K1,meshtoon_vert:Q1,meshtoon_frag:J1,points_vert:ew,points_frag:tw,shadow_vert:nw,shadow_frag:iw,sprite_vert:rw,sprite_frag:sw},le={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ai={basic:{uniforms:rn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:rn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:rn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:rn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:rn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:rn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:rn([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:rn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:rn([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:rn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:rn([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:rn([le.common,le.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:rn([le.lights,le.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ai.physical={uniforms:rn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ja={r:0,b:0,g:0};function ow(n,e,t,i,r,s,o){const a=new ke(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function _(v,u){let g=!1,m=u.isScene===!0?u.background:null;m&&m.isTexture&&(m=(u.backgroundBlurriness>0?t:e).get(m)),m===null?y(a,l):m&&m.isColor&&(y(m,1),g=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Sc)?(h===void 0&&(h=new de(new bt(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:qs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=m,h.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=nt.getTransfer(m.colorSpace)!==lt,(d!==m||f!==m.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=m,f=m.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new de(new $s(2,2),new Gr({name:"BackgroundMaterial",uniforms:qs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=nt.getTransfer(m.colorSpace)!==lt,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(d!==m||f!==m.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=m,f=m.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function y(v,u){v.getRGB(Ja,Xv(n)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(v,u=1){a.set(v),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,y(a,l)},render:_}}function aw(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=v(null);let c=l,h=!1;function d(I,k,X,$,N){let O=!1;if(o){const B=y($,X,k);c!==B&&(c=B,p(c.object)),O=u(I,$,X,N),O&&g(I,$,X,N)}else{const B=k.wireframe===!0;(c.geometry!==$.id||c.program!==X.id||c.wireframe!==B)&&(c.geometry=$.id,c.program=X.id,c.wireframe=B,O=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,L(I,k,X,$),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function y(I,k,X){const $=X.wireframe===!0;let N=a[I.id];N===void 0&&(N={},a[I.id]=N);let O=N[k.id];O===void 0&&(O={},N[k.id]=O);let B=O[$];return B===void 0&&(B=v(f()),O[$]=B),B}function v(I){const k=[],X=[],$=[];for(let N=0;N<r;N++)k[N]=0,X[N]=0,$[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:$,object:I,attributes:{},index:null}}function u(I,k,X,$){const N=c.attributes,O=k.attributes;let B=0;const Z=X.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const K=N[Q];let ce=O[Q];if(ce===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;B++}return c.attributesNum!==B||c.index!==$}function g(I,k,X,$){const N={},O=k.attributes;let B=0;const Z=X.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let K=O[Q];K===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),N[Q]=ce,B++}c.attributes=N,c.attributesNum=B,c.index=$}function m(){const I=c.newAttributes;for(let k=0,X=I.length;k<X;k++)I[k]=0}function x(I){A(I,0)}function A(I,k){const X=c.newAttributes,$=c.enabledAttributes,N=c.attributeDivisors;X[I]=1,$[I]===0&&(n.enableVertexAttribArray(I),$[I]=1),N[I]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),N[I]=k)}function T(){const I=c.newAttributes,k=c.enabledAttributes;for(let X=0,$=k.length;X<$;X++)k[X]!==I[X]&&(n.disableVertexAttribArray(X),k[X]=0)}function S(I,k,X,$,N,O,B){B===!0?n.vertexAttribIPointer(I,k,X,N,O):n.vertexAttribPointer(I,k,X,$,N,O)}function L(I,k,X,$){if(i.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const N=$.attributes,O=X.getAttributes(),B=k.defaultAttributeValues;for(const Z in O){const Q=O[Z];if(Q.location>=0){let q=N[Z];if(q===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),q!==void 0){const K=q.normalized,ce=q.itemSize,ye=t.get(q);if(ye===void 0)continue;const xe=ye.buffer,Ue=ye.type,Oe=ye.bytesPerElement,Re=i.isWebGL2===!0&&(Ue===n.INT||Ue===n.UNSIGNED_INT||q.gpuType===Rv);if(q.isInterleavedBufferAttribute){const qe=q.data,G=qe.stride,Bt=q.offset;if(qe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<Q.locationSize;Ae++)A(Q.location+Ae,qe.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Ae=0;Ae<Q.locationSize;Ae++)x(Q.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Ae=0;Ae<Q.locationSize;Ae++)S(Q.location+Ae,ce/Q.locationSize,Ue,K,G*Oe,(Bt+ce/Q.locationSize*Ae)*Oe,Re)}else{if(q.isInstancedBufferAttribute){for(let qe=0;qe<Q.locationSize;qe++)A(Q.location+qe,q.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let qe=0;qe<Q.locationSize;qe++)x(Q.location+qe);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let qe=0;qe<Q.locationSize;qe++)S(Q.location+qe,ce/Q.locationSize,Ue,K,ce*Oe,ce/Q.locationSize*qe*Oe,Re)}}else if(B!==void 0){const K=B[Z];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(Q.location,K);break;case 3:n.vertexAttrib3fv(Q.location,K);break;case 4:n.vertexAttrib4fv(Q.location,K);break;default:n.vertexAttrib1fv(Q.location,K)}}}}T()}function M(){V();for(const I in a){const k=a[I];for(const X in k){const $=k[X];for(const N in $)_($[N].object),delete $[N];delete k[X]}delete a[I]}}function w(I){if(a[I.id]===void 0)return;const k=a[I.id];for(const X in k){const $=k[X];for(const N in $)_($[N].object),delete $[N];delete k[X]}delete a[I.id]}function z(I){for(const k in a){const X=a[k];if(X[I.id]===void 0)continue;const $=X[I.id];for(const N in $)_($[N].object),delete $[N];delete X[I.id]}}function V(){J(),h=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:m,enableAttribute:x,disableUnusedAttributes:T}}function lw(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,d){n.drawArrays(s,h,d),t.update(d,s,1)}function l(h,d,f){if(f===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,h,d,f),t.update(d,s,f)}function c(h,d,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f;_++)this.render(h[_],d[_]);else{p.multiDrawArraysWEBGL(s,h,0,d,0,f);let _=0;for(let y=0;y<f;y++)_+=d[y];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function cw(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),m=f>0,x=o||e.has("OES_texture_float"),A=m&&x,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:v,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:x,floatVertexTextures:A,maxSamples:T}}function uw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new oi,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,y=d.clipIntersection,v=d.clipShadows,u=n.get(d);if(!r||_===null||_.length===0||s&&!v)s?h(null):c();else{const g=s?0:i,m=g*4;let x=u.clippingState||null;l.value=x,x=h(_,f,m,p);for(let A=0;A!==m;++A)x[A]=t[A];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,_){const y=d!==null?d.length:0;let v=null;if(y!==0){if(v=l.value,_!==!0||v===null){const u=p+y*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(v===null||v.length<u)&&(v=new Float32Array(u));for(let m=0,x=p;m!==y;++m,x+=4)o.copy(d[m]).applyMatrix4(g,a),o.normal.toArray(v,x),v[x+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function hw(n){let e=new WeakMap;function t(o,a){return a===zh?o.mapping=js:a===Bh&&(o.mapping=Xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zh||a===Bh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new EM(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $d extends Yv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,vm=[.125,.215,.35,.446,.526,.582],br=20,Tu=new $d,_m=new ke;let Au=null,bu=0,Cu=0;const wr=(1+Math.sqrt(5))/2,ls=1/wr,ym=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,wr,ls),new R(0,wr,-ls),new R(ls,0,wr),new R(-ls,0,wr),new R(wr,ls,0),new R(-wr,ls,0)];class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Au=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,bu,Cu),e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ra,format:Qn,colorSpace:Ri,depthBuffer:!1},r=Sm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dw(s)),this._blurMaterial=fw(s,e,t)}return r}_compileMaterial(e){const t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Tu)}_sceneToCubeUV(e,t,i,r){const a=new Fn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(_m),h.toneMapping=ar,h.autoClear=!1;const p=new fa({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),_=new de(new bt,p);let y=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,y=!0):(p.color.copy(_m),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const m=this._cubeSize;el(r,g*m,u>2?m:0,m,m),h.setRenderTarget(r),y&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===js||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;el(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Tu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ym[(r-1)%ym.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new de(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*br-1),y=s/_,v=isFinite(s)?1+Math.floor(h*y):br;v>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${br}`);const u=[];let g=0;for(let S=0;S<br;++S){const L=S/y,M=Math.exp(-L*L/2);u.push(M),S===0?g+=M:S<v&&(g+=2*M)}for(let S=0;S<u.length;S++)u[S]=u[S]/g;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:m}=this;f.dTheta.value=_,f.mipInt.value=m-i;const x=this._sizeLods[r],A=3*x*(r>m-As?r-m+As:0),T=4*(this._cubeSize-x);el(t,A,T,3*x,2*x),l.setRenderTarget(t),l.render(d,Tu)}}function dw(n){const e=[],t=[],i=[];let r=n;const s=n-As+1+vm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-As?l=vm[o-n+As-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,y=3,v=2,u=1,g=new Float32Array(y*_*p),m=new Float32Array(v*_*p),x=new Float32Array(u*_*p);for(let T=0;T<p;T++){const S=T%3*2/3-1,L=T>2?0:-1,M=[S,L,0,S+2/3,L,0,S+2/3,L+1,0,S,L,0,S+2/3,L+1,0,S,L+1,0];g.set(M,y*_*T),m.set(f,v*_*T);const w=[T,T,T,T,T,T];x.set(w,u*_*T)}const A=new dt;A.setAttribute("position",new hi(g,y)),A.setAttribute("uv",new hi(m,v)),A.setAttribute("faceIndex",new hi(x,u)),e.push(A),r>As&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sm(n,e,t){const i=new Hr(n,e,t);return i.texture.mapping=Sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function el(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function fw(n,e,t){const i=new Float32Array(br),r=new R(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Mm(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Em(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===zh||l===Bh,h=l===js||l===Xs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new xm(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new xm(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function mw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gw(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let v=0,u=y.length;v<u;v++)e.remove(y[v])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const y=p[_];for(let v=0,u=y.length;v<u;v++)e.update(y[v],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,_=d.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let m=0,x=g.length;m<x;m+=3){const A=g[m+0],T=g[m+1],S=g[m+2];f.push(A,T,T,S,S,A)}}else if(_!==void 0){const g=_.array;y=_.version;for(let m=0,x=g.length/3-1;m<x;m+=3){const A=m+0,T=m+1,S=m+2;f.push(A,T,T,S,S,A)}}else return;const v=new(zv(f)?jv:Wv)(f,1);v.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,v)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function vw(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,_){n.drawElements(s,_,a,p*l),t.update(_,s,1)}function d(p,_,y){if(y===0)return;let v,u;if(r)v=n,u="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[u](s,_,a,p*l,y),t.update(_,s,y)}function f(p,_,y){if(y===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let u=0;u<y;u++)this.render(p[u]/l,_[u]);else{v.multiDrawElementsWEBGL(s,_,0,a,p,0,y);let u=0;for(let g=0;g<y;g++)u+=_[g];t.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function _w(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yw(n,e){return n[0]-e[0]}function xw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Sw(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new kt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=_!==void 0?_.length:0;let v=s.get(h);if(v===void 0||v.count!==y){let k=function(){J.dispose(),s.delete(h),h.removeEventListener("dispose",k)};var p=k;v!==void 0&&v.texture.dispose();const m=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let M=0;m===!0&&(M=1),x===!0&&(M=2),A===!0&&(M=3);let w=h.attributes.position.count*M,z=1;w>e.maxTextureSize&&(z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const V=new Float32Array(w*z*4*y),J=new Gv(V,w,z,y);J.type=Zi,J.needsUpdate=!0;const I=M*4;for(let X=0;X<y;X++){const $=T[X],N=S[X],O=L[X],B=w*z*4*X;for(let Z=0;Z<$.count;Z++){const Q=Z*I;m===!0&&(o.fromBufferAttribute($,Z),V[B+Q+0]=o.x,V[B+Q+1]=o.y,V[B+Q+2]=o.z,V[B+Q+3]=0),x===!0&&(o.fromBufferAttribute(N,Z),V[B+Q+4]=o.x,V[B+Q+5]=o.y,V[B+Q+6]=o.z,V[B+Q+7]=0),A===!0&&(o.fromBufferAttribute(O,Z),V[B+Q+8]=o.x,V[B+Q+9]=o.y,V[B+Q+10]=o.z,V[B+Q+11]=O.itemSize===4?o.w:1)}}v={count:y,texture:J,size:new ge(w,z)},s.set(h,v),h.addEventListener("dispose",k)}let u=0;for(let m=0;m<f.length;m++)u+=f[m];const g=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",g),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const _=f===void 0?0:f.length;let y=i[h.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[h.id]=y}for(let x=0;x<_;x++){const A=y[x];A[0]=x,A[1]=f[x]}y.sort(xw);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(yw);const v=h.morphAttributes.position,u=h.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const A=a[x],T=A[0],S=A[1];T!==Number.MAX_SAFE_INTEGER&&S?(v&&h.getAttribute("morphTarget"+x)!==v[T]&&h.setAttribute("morphTarget"+x,v[T]),u&&h.getAttribute("morphNormal"+x)!==u[T]&&h.setAttribute("morphNormal"+x,u[T]),r[x]=S,g+=S):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),u&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const m=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",m),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Mw(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Zv extends An{constructor(e,t,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:Nr,h!==Nr&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Nr&&(i=$i),i===void 0&&h===Ys&&(i=Ir),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Kv=new An,Qv=new Zv(1,1);Qv.compareFunction=kv;const Jv=new Gv,e_=new oM,t_=new qv,wm=[],Tm=[],Am=new Float32Array(16),bm=new Float32Array(9),Cm=new Float32Array(4);function no(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wm[r];if(s===void 0&&(s=new Float32Array(r),wm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tc(n,e){let t=Tm[e];t===void 0&&(t=new Int32Array(e),Tm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ew(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ww(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function Tw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function Aw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function bw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Cm.set(i),n.uniformMatrix2fv(this.addr,!1,Cm),Dt(t,i)}}function Cw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;bm.set(i),n.uniformMatrix3fv(this.addr,!1,bm),Dt(t,i)}}function Rw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Am.set(i),n.uniformMatrix4fv(this.addr,!1,Am),Dt(t,i)}}function Pw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function Dw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function Iw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function Nw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Uw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function Ow(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function Fw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function kw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Qv:Kv;t.setTexture2D(e||s,r)}function zw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||e_,r)}function Bw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||t_,r)}function Hw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Jv,r)}function Gw(n){switch(n){case 5126:return Ew;case 35664:return ww;case 35665:return Tw;case 35666:return Aw;case 35674:return bw;case 35675:return Cw;case 35676:return Rw;case 5124:case 35670:return Pw;case 35667:case 35671:return Lw;case 35668:case 35672:return Dw;case 35669:case 35673:return Iw;case 5125:return Nw;case 36294:return Uw;case 36295:return Ow;case 36296:return Fw;case 35678:case 36198:case 36298:case 36306:case 35682:return kw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return Bw;case 36289:case 36303:case 36311:case 36292:return Hw}}function Vw(n,e){n.uniform1fv(this.addr,e)}function Ww(n,e){const t=no(e,this.size,2);n.uniform2fv(this.addr,t)}function jw(n,e){const t=no(e,this.size,3);n.uniform3fv(this.addr,t)}function Xw(n,e){const t=no(e,this.size,4);n.uniform4fv(this.addr,t)}function Yw(n,e){const t=no(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qw(n,e){const t=no(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $w(n,e){const t=no(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zw(n,e){n.uniform1iv(this.addr,e)}function Kw(n,e){n.uniform2iv(this.addr,e)}function Qw(n,e){n.uniform3iv(this.addr,e)}function Jw(n,e){n.uniform4iv(this.addr,e)}function eT(n,e){n.uniform1uiv(this.addr,e)}function tT(n,e){n.uniform2uiv(this.addr,e)}function nT(n,e){n.uniform3uiv(this.addr,e)}function iT(n,e){n.uniform4uiv(this.addr,e)}function rT(n,e,t){const i=this.cache,r=e.length,s=Tc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Kv,s[o])}function sT(n,e,t){const i=this.cache,r=e.length,s=Tc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||e_,s[o])}function oT(n,e,t){const i=this.cache,r=e.length,s=Tc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||t_,s[o])}function aT(n,e,t){const i=this.cache,r=e.length,s=Tc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jv,s[o])}function lT(n){switch(n){case 5126:return Vw;case 35664:return Ww;case 35665:return jw;case 35666:return Xw;case 35674:return Yw;case 35675:return qw;case 35676:return $w;case 5124:case 35670:return Zw;case 35667:case 35671:return Kw;case 35668:case 35672:return Qw;case 35669:case 35673:return Jw;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return aT}}class cT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gw(t.type)}}class uT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lT(t.type)}}class hT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ru=/(\w+)(\])?(\[|\.)?/g;function Rm(n,e){n.seq.push(e),n.map[e.id]=e}function dT(n,e,t){const i=n.name,r=i.length;for(Ru.lastIndex=0;;){const s=Ru.exec(i),o=Ru.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Rm(t,c===void 0?new cT(a,n,e):new uT(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new hT(a),Rm(t,d)),t=d}}}class Tl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);dT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Pm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const fT=37297;let pT=0;function mT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function gT(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===tc&&t===ec?i="LinearDisplayP3ToLinearSRGB":e===ec&&t===tc&&(i="LinearSRGBToLinearDisplayP3"),n){case Ri:case Mc:return[i,"LinearTransferOETF"];case Ot:case jd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Lm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+mT(n.getShaderSource(e),o)}else return r}function vT(n,e){const t=gT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _T(n,e){let t;switch(e){case vS:t="Linear";break;case _S:t="Reinhard";break;case yS:t="OptimizedCineon";break;case bv:t="ACESFilmic";break;case SS:t="AgX";break;case xS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yT(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function xT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bs).join(`
`)}function ST(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function MT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function bs(n){return n!==""}function Dm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ET=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(n){return n.replace(ET,TT)}const wT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function TT(n,e){let t=Ge[e];if(t===void 0){const i=wT.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jh(t)}const AT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(n){return n.replace(AT,bT)}function bT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Um(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function RT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case js:case Xs:e="ENVMAP_TYPE_CUBE";break;case Sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function LT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Av:e="ENVMAP_BLENDING_MULTIPLY";break;case mS:e="ENVMAP_BLENDING_MIX";break;case gS:e="ENVMAP_BLENDING_ADD";break}return e}function DT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function IT(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=CT(t),c=RT(t),h=PT(t),d=LT(t),f=DT(t),p=t.isWebGL2?"":yT(t),_=xT(t),y=ST(s),v=r.createProgram();let u,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(bs).join(`
`),u.length>0&&(u+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(bs).join(`
`),g.length>0&&(g+=`
`)):(u=[Um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),g=[p,Um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ar?_T("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,vT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),o=jh(o),o=Dm(o,t),o=Im(o,t),a=jh(a),a=Dm(a,t),a=Im(a,t),o=Nm(o),a=Nm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=m+u+o,A=m+g+a,T=Pm(r,r.VERTEX_SHADER,x),S=Pm(r,r.FRAGMENT_SHADER,A);r.attachShader(v,T),r.attachShader(v,S),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function L(V){if(n.debug.checkShaderErrors){const J=r.getProgramInfoLog(v).trim(),I=r.getShaderInfoLog(T).trim(),k=r.getShaderInfoLog(S).trim();let X=!0,$=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,S);else{const N=Lm(r,T,"vertex"),O=Lm(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+N+`
`+O)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(I===""||k==="")&&($=!1);$&&(V.diagnostics={runnable:X,programLog:J,vertexShader:{log:I,prefix:u},fragmentShader:{log:k,prefix:g}})}r.deleteShader(T),r.deleteShader(S),M=new Tl(r,v),w=MT(r,v)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(v,fT)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=S,this}let NT=0;class UT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new OT(e),t.set(e,i)),i}}class OT{constructor(e){this.id=NT++,this.code=e,this.usedTimes=0}}function FT(n,e,t,i,r,s,o){const a=new Yd,l=new UT,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function v(M,w,z,V,J){const I=V.fog,k=J.geometry,X=M.isMeshStandardMaterial?V.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),N=$&&$.mapping===Sc?$.image.height:null,O=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const B=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Z=B!==void 0?B.length:0;let Q=0;k.morphAttributes.position!==void 0&&(Q=1),k.morphAttributes.normal!==void 0&&(Q=2),k.morphAttributes.color!==void 0&&(Q=3);let q,K,ce,ye;if(O){const St=ai[O];q=St.vertexShader,K=St.fragmentShader}else q=M.vertexShader,K=M.fragmentShader,l.update(M),ce=l.getVertexShaderID(M),ye=l.getFragmentShaderID(M);const xe=n.getRenderTarget(),Ue=J.isInstancedMesh===!0,Oe=J.isBatchedMesh===!0,Re=!!M.map,qe=!!M.matcap,G=!!$,Bt=!!M.aoMap,Ae=!!M.lightMap,De=!!M.bumpMap,Se=!!M.normalMap,ot=!!M.displacementMap,ze=!!M.emissiveMap,C=!!M.metalnessMap,E=!!M.roughnessMap,H=M.anisotropy>0,re=M.clearcoat>0,te=M.iridescence>0,se=M.sheen>0,Me=M.transmission>0,he=H&&!!M.anisotropyMap,_e=re&&!!M.clearcoatMap,Ce=re&&!!M.clearcoatNormalMap,Be=re&&!!M.clearcoatRoughnessMap,ee=te&&!!M.iridescenceMap,et=te&&!!M.iridescenceThicknessMap,Ve=se&&!!M.sheenColorMap,Ie=se&&!!M.sheenRoughnessMap,Te=!!M.specularMap,fe=!!M.specularColorMap,P=!!M.specularIntensityMap,oe=Me&&!!M.transmissionMap,Ee=Me&&!!M.thicknessMap,ve=!!M.gradientMap,ne=!!M.alphaMap,D=M.alphaTest>0,ae=!!M.alphaHash,ue=!!M.extensions,Pe=!!k.attributes.uv1,be=!!k.attributes.uv2,$e=!!k.attributes.uv3;let Ze=ar;return M.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ze=n.toneMapping),{isWebGL2:h,shaderID:O,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:K,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Oe,instancing:Ue,instancingColor:Ue&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ri,map:Re,matcap:qe,envMap:G,envMapMode:G&&$.mapping,envMapCubeUVHeight:N,aoMap:Bt,lightMap:Ae,bumpMap:De,normalMap:Se,displacementMap:f&&ot,emissiveMap:ze,normalMapObjectSpace:Se&&M.normalMapType===IS,normalMapTangentSpace:Se&&M.normalMapType===Fv,metalnessMap:C,roughnessMap:E,anisotropy:H,anisotropyMap:he,clearcoat:re,clearcoatMap:_e,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Be,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:et,sheen:se,sheenColorMap:Ve,sheenRoughnessMap:Ie,specularMap:Te,specularColorMap:fe,specularIntensityMap:P,transmission:Me,transmissionMap:oe,thicknessMap:Ee,gradientMap:ve,opaque:M.transparent===!1&&M.blending===Us,alphaMap:ne,alphaTest:D,alphaHash:ae,combine:M.combine,mapUv:Re&&y(M.map.channel),aoMapUv:Bt&&y(M.aoMap.channel),lightMapUv:Ae&&y(M.lightMap.channel),bumpMapUv:De&&y(M.bumpMap.channel),normalMapUv:Se&&y(M.normalMap.channel),displacementMapUv:ot&&y(M.displacementMap.channel),emissiveMapUv:ze&&y(M.emissiveMap.channel),metalnessMapUv:C&&y(M.metalnessMap.channel),roughnessMapUv:E&&y(M.roughnessMap.channel),anisotropyMapUv:he&&y(M.anisotropyMap.channel),clearcoatMapUv:_e&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:et&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&y(M.sheenRoughnessMap.channel),specularMapUv:Te&&y(M.specularMap.channel),specularColorMapUv:fe&&y(M.specularColorMap.channel),specularIntensityMapUv:P&&y(M.specularIntensityMap.channel),transmissionMapUv:oe&&y(M.transmissionMap.channel),thicknessMapUv:Ee&&y(M.thicknessMap.channel),alphaMapUv:ne&&y(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Se||H),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:be,vertexUv3s:$e,pointsUvs:J.isPoints===!0&&!!k.attributes.uv&&(Re||ne),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Re&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===kn,flipSided:M.side===vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ue&&M.extensions.derivatives===!0,extensionFragDepth:ue&&M.extensions.fragDepth===!0,extensionDrawBuffers:ue&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)w.push(z),w.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(g(w,M),m(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function g(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function m(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function x(M){const w=_[M.type];let z;if(w){const V=ai[w];z=yM.clone(V.uniforms)}else z=M.uniforms;return z}function A(M,w){let z;for(let V=0,J=c.length;V<J;V++){const I=c[V];if(I.cacheKey===w){z=I,++z.usedTimes;break}}return z===void 0&&(z=new IT(n,w,M,s),c.push(z)),z}function T(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function S(M){l.remove(M)}function L(){l.dispose()}return{getParameters:v,getProgramCacheKey:u,getUniforms:x,acquireProgram:A,releaseProgram:T,releaseShaderCache:S,programs:c,dispose:L}}function kT(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function zT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Om(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,_,y,v){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:y,group:v},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=y,u.group=v),e++,u}function a(d,f,p,_,y,v){const u=o(d,f,p,_,y,v);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):t.push(u)}function l(d,f,p,_,y,v){const u=o(d,f,p,_,y,v);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||zT),i.length>1&&i.sort(f||Om),r.length>1&&r.sort(f||Om)}function h(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function BT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Fm,n.set(i,[o])):r>=s.length?(o=new Fm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function HT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ke};break;case"SpotLight":t={position:new R,direction:new R,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function GT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let VT=0;function WT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jT(n,e){const t=new HT,i=GT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new R);const s=new R,o=new gt,a=new gt;function l(h,d){let f=0,p=0,_=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let y=0,v=0,u=0,g=0,m=0,x=0,A=0,T=0,S=0,L=0,M=0;h.sort(WT);const w=d===!0?Math.PI:1;for(let V=0,J=h.length;V<J;V++){const I=h[V],k=I.color,X=I.intensity,$=I.distance,N=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=k.r*X*w,p+=k.g*X*w,_+=k.b*X*w;else if(I.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(I.sh.coefficients[O],X);M++}else if(I.isDirectionalLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const B=I.shadow,Z=i.get(I);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=N,r.directionalShadowMatrix[y]=I.shadow.matrix,x++}r.directional[y]=O,y++}else if(I.isSpotLight){const O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(k).multiplyScalar(X*w),O.distance=$,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,r.spot[u]=O;const B=I.shadow;if(I.map&&(r.spotLightMap[S]=I.map,S++,B.updateMatrices(I),I.castShadow&&L++),r.spotLightMatrix[u]=B.matrix,I.castShadow){const Z=i.get(I);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,r.spotShadow[u]=Z,r.spotShadowMap[u]=N,T++}u++}else if(I.isRectAreaLight){const O=t.get(I);O.color.copy(k).multiplyScalar(X),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),r.rectArea[g]=O,g++}else if(I.isPointLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*w),O.distance=I.distance,O.decay=I.decay,I.castShadow){const B=I.shadow,Z=i.get(I);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,r.pointShadow[v]=Z,r.pointShadowMap[v]=N,r.pointShadowMatrix[v]=I.shadow.matrix,A++}r.point[v]=O,v++}else if(I.isHemisphereLight){const O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(X*w),O.groundColor.copy(I.groundColor).multiplyScalar(X*w),r.hemi[m]=O,m++}}g>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=_;const z=r.hash;(z.directionalLength!==y||z.pointLength!==v||z.spotLength!==u||z.rectAreaLength!==g||z.hemiLength!==m||z.numDirectionalShadows!==x||z.numPointShadows!==A||z.numSpotShadows!==T||z.numSpotMaps!==S||z.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=g,r.point.length=v,r.hemi.length=m,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=T+S-L,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=M,z.directionalLength=y,z.pointLength=v,z.spotLength=u,z.rectAreaLength=g,z.hemiLength=m,z.numDirectionalShadows=x,z.numPointShadows=A,z.numSpotShadows=T,z.numSpotMaps=S,z.numLightProbes=M,r.version=VT++)}function c(h,d){let f=0,p=0,_=0,y=0,v=0;const u=d.matrixWorldInverse;for(let g=0,m=h.length;g<m;g++){const x=h[g];if(x.isDirectionalLight){const A=r.directional[f];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),f++}else if(x.isSpotLight){const A=r.spot[_];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),_++}else if(x.isRectAreaLight){const A=r.rectArea[y];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(u),a.identity(),o.copy(x.matrixWorld),o.premultiply(u),a.extractRotation(o),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(u),p++}else if(x.isHemisphereLight){const A=r.hemi[v];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(u),v++}}}return{setup:l,setupView:c,state:r}}function km(n,e){const t=new jT(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function XT(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new km(n,e),t.set(s,[l])):o>=a.length?(l=new km(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class YT extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qT extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KT(n,e,t){let i=new qd;const r=new ge,s=new ge,o=new kt,a=new YT({depthPacking:DS}),l=new qT,c={},h=t.maxTextureSize,d={[hr]:vn,[vn]:hr,[kn]:kn},f=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:$T,fragmentShader:ZT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new dt;_.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new de(_,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tv;let u=this.type;this.render=function(T,S,L){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),V=n.state;V.setBlending(or),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const J=u!==_i&&this.type===_i,I=u===_i&&this.type!==_i;for(let k=0,X=T.length;k<X;k++){const $=T[k],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const O=N.getFrameExtents();if(r.multiply(O),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/O.x),r.x=s.x*O.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/O.y),r.y=s.y*O.y,N.mapSize.y=s.y)),N.map===null||J===!0||I===!0){const Z=this.type!==_i?{minFilter:an,magFilter:an}:{};N.map!==null&&N.map.dispose(),N.map=new Hr(r.x,r.y,Z),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const B=N.getViewportCount();for(let Z=0;Z<B;Z++){const Q=N.getViewport(Z);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),V.viewport(o),N.updateMatrices($,Z),i=N.getFrustum(),x(S,L,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===_i&&g(N,L),N.needsUpdate=!1}u=this.type,v.needsUpdate=!1,n.setRenderTarget(M,w,z)};function g(T,S){const L=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hr(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(S,null,L,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(S,null,L,p,y,null)}function m(T,S,L,M){let w=null;const z=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0)w=z;else if(w=L.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const V=w.uuid,J=S.uuid;let I=c[V];I===void 0&&(I={},c[V]=I);let k=I[J];k===void 0&&(k=w.clone(),I[J]=k,S.addEventListener("dispose",A)),w=k}if(w.visible=S.visible,w.wireframe=S.wireframe,M===_i?w.side=S.shadowSide!==null?S.shadowSide:S.side:w.side=S.shadowSide!==null?S.shadowSide:d[S.side],w.alphaMap=S.alphaMap,w.alphaTest=S.alphaTest,w.map=S.map,w.clipShadows=S.clipShadows,w.clippingPlanes=S.clippingPlanes,w.clipIntersection=S.clipIntersection,w.displacementMap=S.displacementMap,w.displacementScale=S.displacementScale,w.displacementBias=S.displacementBias,w.wireframeLinewidth=S.wireframeLinewidth,w.linewidth=S.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const V=n.properties.get(w);V.light=L}return w}function x(T,S,L,M,w){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===_i)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const J=e.update(T),I=T.material;if(Array.isArray(I)){const k=J.groups;for(let X=0,$=k.length;X<$;X++){const N=k[X],O=I[N.materialIndex];if(O&&O.visible){const B=m(T,O,M,w);T.onBeforeShadow(n,T,S,L,J,B,N),n.renderBufferDirect(L,null,J,B,T,N),T.onAfterShadow(n,T,S,L,J,B,N)}}}else if(I.visible){const k=m(T,I,M,w);T.onBeforeShadow(n,T,S,L,J,k,null),n.renderBufferDirect(L,null,J,k,T,null),T.onAfterShadow(n,T,S,L,J,k,null)}}const V=T.children;for(let J=0,I=V.length;J<I;J++)x(V[J],S,L,M,w)}function A(T){T.target.removeEventListener("dispose",A);for(const L in c){const M=c[L],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function QT(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const ae=new kt;let ue=null;const Pe=new kt(0,0,0,0);return{setMask:function(be){ue!==be&&!D&&(n.colorMask(be,be,be,be),ue=be)},setLocked:function(be){D=be},setClear:function(be,$e,Ze,_t,St){St===!0&&(be*=_t,$e*=_t,Ze*=_t),ae.set(be,$e,Ze,_t),Pe.equals(ae)===!1&&(n.clearColor(be,$e,Ze,_t),Pe.copy(ae))},reset:function(){D=!1,ue=null,Pe.set(-1,0,0,0)}}}function s(){let D=!1,ae=null,ue=null,Pe=null;return{setTest:function(be){be?Oe(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(be){ae!==be&&!D&&(n.depthMask(be),ae=be)},setFunc:function(be){if(ue!==be){switch(be){case lS:n.depthFunc(n.NEVER);break;case cS:n.depthFunc(n.ALWAYS);break;case uS:n.depthFunc(n.LESS);break;case Ql:n.depthFunc(n.LEQUAL);break;case hS:n.depthFunc(n.EQUAL);break;case dS:n.depthFunc(n.GEQUAL);break;case fS:n.depthFunc(n.GREATER);break;case pS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=be}},setLocked:function(be){D=be},setClear:function(be){Pe!==be&&(n.clearDepth(be),Pe=be)},reset:function(){D=!1,ae=null,ue=null,Pe=null}}}function o(){let D=!1,ae=null,ue=null,Pe=null,be=null,$e=null,Ze=null,_t=null,St=null;return{setTest:function(Qe){D||(Qe?Oe(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Qe){ae!==Qe&&!D&&(n.stencilMask(Qe),ae=Qe)},setFunc:function(Qe,Tt,ni){(ue!==Qe||Pe!==Tt||be!==ni)&&(n.stencilFunc(Qe,Tt,ni),ue=Qe,Pe=Tt,be=ni)},setOp:function(Qe,Tt,ni){($e!==Qe||Ze!==Tt||_t!==ni)&&(n.stencilOp(Qe,Tt,ni),$e=Qe,Ze=Tt,_t=ni)},setLocked:function(Qe){D=Qe},setClear:function(Qe){St!==Qe&&(n.clearStencil(Qe),St=Qe)},reset:function(){D=!1,ae=null,ue=null,Pe=null,be=null,$e=null,Ze=null,_t=null,St=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let f={},p={},_=new WeakMap,y=[],v=null,u=!1,g=null,m=null,x=null,A=null,T=null,S=null,L=null,M=new ke(0,0,0),w=0,z=!1,V=null,J=null,I=null,k=null,X=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,O=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=O>=1):B.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=O>=2);let Z=null,Q={};const q=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ce=new kt().fromArray(q),ye=new kt().fromArray(K);function xe(D,ae,ue,Pe){const be=new Uint8Array(4),$e=n.createTexture();n.bindTexture(D,$e),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<ue;Ze++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(ae+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return $e}const Ue={};Ue[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(n.DEPTH_TEST),l.setFunc(Ql),ze(!1),C(yp),Oe(n.CULL_FACE),Se(or);function Oe(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function Re(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function qe(D,ae){return p[D]!==ae?(n.bindFramebuffer(D,ae),p[D]=ae,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ae),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function G(D,ae){let ue=y,Pe=!1;if(D)if(ue=_.get(ae),ue===void 0&&(ue=[],_.set(ae,ue)),D.isWebGLMultipleRenderTargets){const be=D.texture;if(ue.length!==be.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let $e=0,Ze=be.length;$e<Ze;$e++)ue[$e]=n.COLOR_ATTACHMENT0+$e;ue.length=be.length,Pe=!0}}else ue[0]!==n.COLOR_ATTACHMENT0&&(ue[0]=n.COLOR_ATTACHMENT0,Pe=!0);else ue[0]!==n.BACK&&(ue[0]=n.BACK,Pe=!0);Pe&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Bt(D){return v!==D?(n.useProgram(D),v=D,!0):!1}const Ae={[Ar]:n.FUNC_ADD,[Yx]:n.FUNC_SUBTRACT,[qx]:n.FUNC_REVERSE_SUBTRACT};if(i)Ae[Ep]=n.MIN,Ae[wp]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ae[Ep]=D.MIN_EXT,Ae[wp]=D.MAX_EXT)}const De={[$x]:n.ZERO,[Zx]:n.ONE,[Kx]:n.SRC_COLOR,[Fh]:n.SRC_ALPHA,[iS]:n.SRC_ALPHA_SATURATE,[tS]:n.DST_COLOR,[Jx]:n.DST_ALPHA,[Qx]:n.ONE_MINUS_SRC_COLOR,[kh]:n.ONE_MINUS_SRC_ALPHA,[nS]:n.ONE_MINUS_DST_COLOR,[eS]:n.ONE_MINUS_DST_ALPHA,[rS]:n.CONSTANT_COLOR,[sS]:n.ONE_MINUS_CONSTANT_COLOR,[oS]:n.CONSTANT_ALPHA,[aS]:n.ONE_MINUS_CONSTANT_ALPHA};function Se(D,ae,ue,Pe,be,$e,Ze,_t,St,Qe){if(D===or){u===!0&&(Re(n.BLEND),u=!1);return}if(u===!1&&(Oe(n.BLEND),u=!0),D!==Xx){if(D!==g||Qe!==z){if((m!==Ar||T!==Ar)&&(n.blendEquation(n.FUNC_ADD),m=Ar,T=Ar),Qe)switch(D){case Us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xp:n.blendFunc(n.ONE,n.ONE);break;case Sp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,A=null,S=null,L=null,M.set(0,0,0),w=0,g=D,z=Qe}return}be=be||ae,$e=$e||ue,Ze=Ze||Pe,(ae!==m||be!==T)&&(n.blendEquationSeparate(Ae[ae],Ae[be]),m=ae,T=be),(ue!==x||Pe!==A||$e!==S||Ze!==L)&&(n.blendFuncSeparate(De[ue],De[Pe],De[$e],De[Ze]),x=ue,A=Pe,S=$e,L=Ze),(_t.equals(M)===!1||St!==w)&&(n.blendColor(_t.r,_t.g,_t.b,St),M.copy(_t),w=St),g=D,z=!1}function ot(D,ae){D.side===kn?Re(n.CULL_FACE):Oe(n.CULL_FACE);let ue=D.side===vn;ae&&(ue=!ue),ze(ue),D.blending===Us&&D.transparent===!1?Se(or):Se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Pe=D.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),H(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Oe(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(D){V!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),V=D)}function C(D){D!==Vx?(Oe(n.CULL_FACE),D!==J&&(D===yp?n.cullFace(n.BACK):D===Wx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),J=D}function E(D){D!==I&&(N&&n.lineWidth(D),I=D)}function H(D,ae,ue){D?(Oe(n.POLYGON_OFFSET_FILL),(k!==ae||X!==ue)&&(n.polygonOffset(ae,ue),k=ae,X=ue)):Re(n.POLYGON_OFFSET_FILL)}function re(D){D?Oe(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function te(D){D===void 0&&(D=n.TEXTURE0+$-1),Z!==D&&(n.activeTexture(D),Z=D)}function se(D,ae,ue){ue===void 0&&(Z===null?ue=n.TEXTURE0+$-1:ue=Z);let Pe=Q[ue];Pe===void 0&&(Pe={type:void 0,texture:void 0},Q[ue]=Pe),(Pe.type!==D||Pe.texture!==ae)&&(Z!==ue&&(n.activeTexture(ue),Z=ue),n.bindTexture(D,ae||Ue[D]),Pe.type=D,Pe.texture=ae)}function Me(){const D=Q[Z];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function he(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(D){ce.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function oe(D){ye.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ye.copy(D))}function Ee(D,ae){let ue=d.get(ae);ue===void 0&&(ue=new WeakMap,d.set(ae,ue));let Pe=ue.get(D);Pe===void 0&&(Pe=n.getUniformBlockIndex(ae,D.name),ue.set(D,Pe))}function ve(D,ae){const Pe=d.get(ae).get(D);h.get(ae)!==Pe&&(n.uniformBlockBinding(ae,Pe,D.__bindingPointIndex),h.set(ae,Pe))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Z=null,Q={},p={},_=new WeakMap,y=[],v=null,u=!1,g=null,m=null,x=null,A=null,T=null,S=null,L=null,M=new ke(0,0,0),w=0,z=!1,V=null,J=null,I=null,k=null,X=null,ce.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:Re,bindFramebuffer:qe,drawBuffers:G,useProgram:Bt,setBlending:Se,setMaterial:ot,setFlipSided:ze,setCullFace:C,setLineWidth:E,setPolygonOffset:H,setScissorTest:re,activeTexture:te,bindTexture:se,unbindTexture:Me,compressedTexImage2D:he,compressedTexImage3D:_e,texImage2D:Te,texImage3D:fe,updateUBOMapping:Ee,uniformBlockBinding:ve,texStorage2D:Ve,texStorage3D:Ie,texSubImage2D:Ce,texSubImage3D:Be,compressedTexSubImage2D:ee,compressedTexSubImage3D:et,scissor:P,viewport:oe,reset:ne}}function JT(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return p?new OffscreenCanvas(C,E):rc("canvas")}function y(C,E,H,re){let te=1;if((C.width>re||C.height>re)&&(te=re/Math.max(C.width,C.height)),te<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const se=E?ic:Math.floor,Me=se(te*C.width),he=se(te*C.height);d===void 0&&(d=_(Me,he));const _e=H?_(Me,he):d;return _e.width=Me,_e.height=he,_e.getContext("2d").drawImage(C,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+he+")."),_e}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return Wh(C.width)&&Wh(C.height)}function u(C){return a?!1:C.wrapS!==Kn||C.wrapT!==Kn||C.minFilter!==an&&C.minFilter!==Un}function g(C,E){return C.generateMipmaps&&E&&C.minFilter!==an&&C.minFilter!==Un}function m(C){n.generateMipmap(C)}function x(C,E,H,re,te=!1){if(a===!1)return E;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=E;if(E===n.RED&&(H===n.FLOAT&&(se=n.R32F),H===n.HALF_FLOAT&&(se=n.R16F),H===n.UNSIGNED_BYTE&&(se=n.R8)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(se=n.R8UI),H===n.UNSIGNED_SHORT&&(se=n.R16UI),H===n.UNSIGNED_INT&&(se=n.R32UI),H===n.BYTE&&(se=n.R8I),H===n.SHORT&&(se=n.R16I),H===n.INT&&(se=n.R32I)),E===n.RG&&(H===n.FLOAT&&(se=n.RG32F),H===n.HALF_FLOAT&&(se=n.RG16F),H===n.UNSIGNED_BYTE&&(se=n.RG8)),E===n.RGBA){const Me=te?Jl:nt.getTransfer(re);H===n.FLOAT&&(se=n.RGBA32F),H===n.HALF_FLOAT&&(se=n.RGBA16F),H===n.UNSIGNED_BYTE&&(se=Me===lt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function A(C,E,H){return g(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function T(C){return C===an||C===Tp||C===nu?n.NEAREST:n.LINEAR}function S(C){const E=C.target;E.removeEventListener("dispose",S),M(E),E.isVideoTexture&&h.delete(E)}function L(C){const E=C.target;E.removeEventListener("dispose",L),z(E)}function M(C){const E=i.get(C);if(E.__webglInit===void 0)return;const H=C.source,re=f.get(H);if(re){const te=re[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(C),Object.keys(re).length===0&&f.delete(H)}i.remove(C)}function w(C){const E=i.get(C);n.deleteTexture(E.__webglTexture);const H=C.source,re=f.get(H);delete re[E.__cacheKey],o.memory.textures--}function z(C){const E=C.texture,H=i.get(C),re=i.get(E);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(H.__webglFramebuffer[te]))for(let se=0;se<H.__webglFramebuffer[te].length;se++)n.deleteFramebuffer(H.__webglFramebuffer[te][se]);else n.deleteFramebuffer(H.__webglFramebuffer[te]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[te])}else{if(Array.isArray(H.__webglFramebuffer))for(let te=0;te<H.__webglFramebuffer.length;te++)n.deleteFramebuffer(H.__webglFramebuffer[te]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,se=E.length;te<se;te++){const Me=i.get(E[te]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(E[te])}i.remove(E),i.remove(C)}let V=0;function J(){V=0}function I(){const C=V;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),V+=1,C}function k(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function X(C,E){const H=i.get(C);if(C.isVideoTexture&&ot(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(H,C,E);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function $(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ce(H,C,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function N(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ce(H,C,E);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function O(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ye(H,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}const B={[Hh]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[Gh]:n.MIRRORED_REPEAT},Z={[an]:n.NEAREST,[Tp]:n.NEAREST_MIPMAP_NEAREST,[nu]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[MS]:n.LINEAR_MIPMAP_NEAREST,[ia]:n.LINEAR_MIPMAP_LINEAR},Q={[NS]:n.NEVER,[BS]:n.ALWAYS,[US]:n.LESS,[kv]:n.LEQUAL,[OS]:n.EQUAL,[zS]:n.GEQUAL,[FS]:n.GREATER,[kS]:n.NOTEQUAL};function q(C,E,H){if(H?(n.texParameteri(C,n.TEXTURE_WRAP_S,B[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,B[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,B[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Z[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Z[E.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Kn||E.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,T(E.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==an&&E.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===an||E.minFilter!==nu&&E.minFilter!==ia||E.type===Zi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ra&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function K(C,E){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",S));const re=E.source;let te=f.get(re);te===void 0&&(te={},f.set(re,te));const se=k(E);if(se!==C.__cacheKey){te[se]===void 0&&(te[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[se].usedTimes++;const Me=te[C.__cacheKey];Me!==void 0&&(te[C.__cacheKey].usedTimes--,Me.usedTimes===0&&w(E)),C.__cacheKey=se,C.__webglTexture=te[se].texture}return H}function ce(C,E,H){let re=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=n.TEXTURE_3D);const te=K(C,E),se=E.source;t.bindTexture(re,C.__webglTexture,n.TEXTURE0+H);const Me=i.get(se);if(se.version!==Me.__version||te===!0){t.activeTexture(n.TEXTURE0+H);const he=nt.getPrimaries(nt.workingColorSpace),_e=E.colorSpace===zn?null:nt.getPrimaries(E.colorSpace),Ce=E.colorSpace===zn||he===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Be=u(E)&&v(E.image)===!1;let ee=y(E.image,Be,!1,r.maxTextureSize);ee=ze(E,ee);const et=v(ee)||a,Ve=s.convert(E.format,E.colorSpace);let Ie=s.convert(E.type),Te=x(E.internalFormat,Ve,Ie,E.colorSpace,E.isVideoTexture);q(re,E,et);let fe;const P=E.mipmaps,oe=a&&E.isVideoTexture!==!0&&Te!==Uv,Ee=Me.__version===void 0||te===!0,ve=A(E,ee,et);if(E.isDepthTexture)Te=n.DEPTH_COMPONENT,a?E.type===Zi?Te=n.DEPTH_COMPONENT32F:E.type===$i?Te=n.DEPTH_COMPONENT24:E.type===Ir?Te=n.DEPTH24_STENCIL8:Te=n.DEPTH_COMPONENT16:E.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Nr&&Te===n.DEPTH_COMPONENT&&E.type!==Wd&&E.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=$i,Ie=s.convert(E.type)),E.format===Ys&&Te===n.DEPTH_COMPONENT&&(Te=n.DEPTH_STENCIL,E.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ir,Ie=s.convert(E.type))),Ee&&(oe?t.texStorage2D(n.TEXTURE_2D,1,Te,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Te,ee.width,ee.height,0,Ve,Ie,null));else if(E.isDataTexture)if(P.length>0&&et){oe&&Ee&&t.texStorage2D(n.TEXTURE_2D,ve,Te,P[0].width,P[0].height);for(let ne=0,D=P.length;ne<D;ne++)fe=P[ne],oe?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,Ie,fe.data):t.texImage2D(n.TEXTURE_2D,ne,Te,fe.width,fe.height,0,Ve,Ie,fe.data);E.generateMipmaps=!1}else oe?(Ee&&t.texStorage2D(n.TEXTURE_2D,ve,Te,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,Ve,Ie,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Te,ee.width,ee.height,0,Ve,Ie,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){oe&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Te,P[0].width,P[0].height,ee.depth);for(let ne=0,D=P.length;ne<D;ne++)fe=P[ne],E.format!==Qn?Ve!==null?oe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ee.depth,Ve,fe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Te,fe.width,fe.height,ee.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ee.depth,Ve,Ie,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Te,fe.width,fe.height,ee.depth,0,Ve,Ie,fe.data)}else{oe&&Ee&&t.texStorage2D(n.TEXTURE_2D,ve,Te,P[0].width,P[0].height);for(let ne=0,D=P.length;ne<D;ne++)fe=P[ne],E.format!==Qn?Ve!==null?oe?t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,Ie,fe.data):t.texImage2D(n.TEXTURE_2D,ne,Te,fe.width,fe.height,0,Ve,Ie,fe.data)}else if(E.isDataArrayTexture)oe?(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Te,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ve,Ie,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ee.width,ee.height,ee.depth,0,Ve,Ie,ee.data);else if(E.isData3DTexture)oe?(Ee&&t.texStorage3D(n.TEXTURE_3D,ve,Te,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ve,Ie,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ee.width,ee.height,ee.depth,0,Ve,Ie,ee.data);else if(E.isFramebufferTexture){if(Ee)if(oe)t.texStorage2D(n.TEXTURE_2D,ve,Te,ee.width,ee.height);else{let ne=ee.width,D=ee.height;for(let ae=0;ae<ve;ae++)t.texImage2D(n.TEXTURE_2D,ae,Te,ne,D,0,Ve,Ie,null),ne>>=1,D>>=1}}else if(P.length>0&&et){oe&&Ee&&t.texStorage2D(n.TEXTURE_2D,ve,Te,P[0].width,P[0].height);for(let ne=0,D=P.length;ne<D;ne++)fe=P[ne],oe?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Ve,Ie,fe):t.texImage2D(n.TEXTURE_2D,ne,Te,Ve,Ie,fe);E.generateMipmaps=!1}else oe?(Ee&&t.texStorage2D(n.TEXTURE_2D,ve,Te,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ve,Ie,ee)):t.texImage2D(n.TEXTURE_2D,0,Te,Ve,Ie,ee);g(E,et)&&m(re),Me.__version=se.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ye(C,E,H){if(E.image.length!==6)return;const re=K(C,E),te=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+H);const se=i.get(te);if(te.version!==se.__version||re===!0){t.activeTexture(n.TEXTURE0+H);const Me=nt.getPrimaries(nt.workingColorSpace),he=E.colorSpace===zn?null:nt.getPrimaries(E.colorSpace),_e=E.colorSpace===zn||Me===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ce=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let ne=0;ne<6;ne++)!Ce&&!Be?ee[ne]=y(E.image[ne],!1,!0,r.maxCubemapSize):ee[ne]=Be?E.image[ne].image:E.image[ne],ee[ne]=ze(E,ee[ne]);const et=ee[0],Ve=v(et)||a,Ie=s.convert(E.format,E.colorSpace),Te=s.convert(E.type),fe=x(E.internalFormat,Ie,Te,E.colorSpace),P=a&&E.isVideoTexture!==!0,oe=se.__version===void 0||re===!0;let Ee=A(E,et,Ve);q(n.TEXTURE_CUBE_MAP,E,Ve);let ve;if(Ce){P&&oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,fe,et.width,et.height);for(let ne=0;ne<6;ne++){ve=ee[ne].mipmaps;for(let D=0;D<ve.length;D++){const ae=ve[D];E.format!==Qn?Ie!==null?P?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D,0,0,ae.width,ae.height,Ie,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D,fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D,0,0,ae.width,ae.height,Ie,Te,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D,fe,ae.width,ae.height,0,Ie,Te,ae.data)}}}else{ve=E.mipmaps,P&&oe&&(ve.length>0&&Ee++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,fe,ee[0].width,ee[0].height));for(let ne=0;ne<6;ne++)if(Be){P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ee[ne].width,ee[ne].height,Ie,Te,ee[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,ee[ne].width,ee[ne].height,0,Ie,Te,ee[ne].data);for(let D=0;D<ve.length;D++){const ue=ve[D].image[ne].image;P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D+1,0,0,ue.width,ue.height,Ie,Te,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D+1,fe,ue.width,ue.height,0,Ie,Te,ue.data)}}else{P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,Te,ee[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,Ie,Te,ee[ne]);for(let D=0;D<ve.length;D++){const ae=ve[D];P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D+1,0,0,Ie,Te,ae.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D+1,fe,Ie,Te,ae.image[ne])}}}g(E,Ve)&&m(n.TEXTURE_CUBE_MAP),se.__version=te.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function xe(C,E,H,re,te,se){const Me=s.convert(H.format,H.colorSpace),he=s.convert(H.type),_e=x(H.internalFormat,Me,he,H.colorSpace);if(!i.get(E).__hasExternalTextures){const Be=Math.max(1,E.width>>se),ee=Math.max(1,E.height>>se);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,se,_e,Be,ee,E.depth,0,Me,he,null):t.texImage2D(te,se,_e,Be,ee,0,Me,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Se(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,te,i.get(H).__webglTexture,0,De(E)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,te,i.get(H).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(C,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let re=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||Se(E)){const te=E.depthTexture;te&&te.isDepthTexture&&(te.type===Zi?re=n.DEPTH_COMPONENT32F:te.type===$i&&(re=n.DEPTH_COMPONENT24));const se=De(E);Se(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,re,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,re,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const re=De(E);H&&Se(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,E.width,E.height):Se(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const re=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0;te<re.length;te++){const se=re[te],Me=s.convert(se.format,se.colorSpace),he=s.convert(se.type),_e=x(se.internalFormat,Me,he,se.colorSpace),Ce=De(E);H&&Se(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,_e,E.width,E.height):Se(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,_e,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,_e,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const re=i.get(E.depthTexture).__webglTexture,te=De(E);if(E.depthTexture.format===Nr)Se(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(E.depthTexture.format===Ys)Se(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Re(C){const E=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Oe(E.__webglFramebuffer,C)}else if(H){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]=n.createRenderbuffer(),Ue(E.__webglDepthbuffer[re],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ue(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(C,E,H){const re=i.get(C);E!==void 0&&xe(re.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Re(C)}function G(C){const E=C.texture,H=i.get(C),re=i.get(E);C.addEventListener("dispose",L),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=E.version,o.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,Me=v(C)||a;if(te){H.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[he]=[];for(let _e=0;_e<E.mipmaps.length;_e++)H.__webglFramebuffer[he][_e]=n.createFramebuffer()}else H.__webglFramebuffer[he]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)H.__webglFramebuffer[he]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(se)if(r.drawBuffers){const he=C.texture;for(let _e=0,Ce=he.length;_e<Ce;_e++){const Be=i.get(he[_e]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Se(C)===!1){const he=se?E:[E];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _e=0;_e<he.length;_e++){const Ce=he[_e];H.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[_e]);const Be=s.convert(Ce.format,Ce.colorSpace),ee=s.convert(Ce.type),et=x(Ce.internalFormat,Be,ee,Ce.colorSpace,C.isXRRenderTarget===!0),Ve=De(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,et,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,H.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),q(n.TEXTURE_CUBE_MAP,E,Me);for(let he=0;he<6;he++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)xe(H.__webglFramebuffer[he][_e],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else xe(H.__webglFramebuffer[he],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(E,Me)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const he=C.texture;for(let _e=0,Ce=he.length;_e<Ce;_e++){const Be=he[_e],ee=i.get(Be);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),q(n.TEXTURE_2D,Be,Me),xe(H.__webglFramebuffer,C,Be,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),g(Be,Me)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?he=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,re.__webglTexture),q(he,E,Me),a&&E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)xe(H.__webglFramebuffer[_e],C,E,n.COLOR_ATTACHMENT0,he,_e);else xe(H.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,he,0);g(E,Me)&&m(he),t.unbindTexture()}C.depthBuffer&&Re(C)}function Bt(C){const E=v(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,te=H.length;re<te;re++){const se=H[re];if(g(se,E)){const Me=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(se).__webglTexture;t.bindTexture(Me,he),m(Me),t.unbindTexture()}}}function Ae(C){if(a&&C.samples>0&&Se(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,re=C.height;let te=n.COLOR_BUFFER_BIT;const se=[],Me=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(C),_e=C.isWebGLMultipleRenderTargets===!0;if(_e)for(let Ce=0;Ce<E.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){se.push(n.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&se.push(Me);const Be=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Be===!1&&(C.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]),Be===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),_e){const ee=i.get(E[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,H,re,0,0,H,re,te,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Ce=0;Ce<E.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]);const Be=i.get(E[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function De(C){return Math.min(r.maxSamples,C.samples)}function Se(C){const E=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ot(C){const E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function ze(C,E){const H=C.colorSpace,re=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Vh||H!==Ri&&H!==zn&&(nt.getTransfer(H)===lt?a===!1?e.has("EXT_sRGB")===!0&&re===Qn?(C.format=Vh,C.minFilter=Un,C.generateMipmaps=!1):E=Bv.sRGBToLinear(E):(re!==Qn||te!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=I,this.resetTextureUnits=J,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=N,this.setTextureCube=O,this.rebindTextures=qe,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Se}function eA(n,e,t){const i=t.isWebGL2;function r(s,o=zn){let a;const l=nt.getTransfer(o);if(s===lr)return n.UNSIGNED_BYTE;if(s===Pv)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Lv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===ES)return n.BYTE;if(s===wS)return n.SHORT;if(s===Wd)return n.UNSIGNED_SHORT;if(s===Rv)return n.INT;if(s===$i)return n.UNSIGNED_INT;if(s===Zi)return n.FLOAT;if(s===ra)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===TS)return n.ALPHA;if(s===Qn)return n.RGBA;if(s===AS)return n.LUMINANCE;if(s===bS)return n.LUMINANCE_ALPHA;if(s===Nr)return n.DEPTH_COMPONENT;if(s===Ys)return n.DEPTH_STENCIL;if(s===Vh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===CS)return n.RED;if(s===Dv)return n.RED_INTEGER;if(s===RS)return n.RG;if(s===Iv)return n.RG_INTEGER;if(s===Nv)return n.RGBA_INTEGER;if(s===iu||s===ru||s===su||s===ou)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===iu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===iu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ru)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===su)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ou)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ap||s===bp||s===Cp||s===Rp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ap)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pp||s===Lp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Pp)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Lp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dp||s===Ip||s===Np||s===Up||s===Op||s===Fp||s===kp||s===zp||s===Bp||s===Hp||s===Gp||s===Vp||s===Wp||s===jp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Dp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ip)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Np)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Up)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Op)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===kp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===jp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===au||s===Xp||s===Yp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===au)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Xp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===PS||s===qp||s===$p||s===Zp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===au)return a.COMPRESSED_RED_RGTC1_EXT;if(s===qp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$p)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ir?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class tA extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dn extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nA={type:"move"};class Pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const v=t.getJointPose(y,i),u=this._getHandJoint(c,y);v!==null&&(u.matrix.fromArray(v.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=v.radius),u.visible=v!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Dn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class iA extends jr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,_=null;const y=t.getContextAttributes();let v=null,u=null;const g=[],m=[],x=new ge;let A=null;const T=new Fn;T.layers.enable(1),T.viewport=new kt;const S=new Fn;S.layers.enable(2),S.viewport=new kt;const L=[T,S],M=new tA;M.layers.enable(1),M.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=g[q];return K===void 0&&(K=new Pu,g[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=g[q];return K===void 0&&(K=new Pu,g[q]=K),K.getGripSpace()},this.getHand=function(q){let K=g[q];return K===void 0&&(K=new Pu,g[q]=K),K.getHandSpace()};function V(q){const K=m.indexOf(q.inputSource);if(K===-1)return;const ce=g[K];ce!==void 0&&(ce.update(q.inputSource,q.frame,c||o),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",I);for(let q=0;q<g.length;q++){const K=m[q];K!==null&&(m[q]=null,g[q].disconnect(K))}w=null,z=null,e.setRenderTarget(v),p=null,f=null,d=null,r=null,u=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",J),r.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new Hr(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let K=null,ce=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=y.stencil?Ys:Nr,ce=y.stencil?Ir:$i);const xe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Hr(f.textureWidth,f.textureHeight,{format:Qn,type:lr,depthTexture:new Zv(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ue=e.properties.get(u);Ue.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(q){for(let K=0;K<q.removed.length;K++){const ce=q.removed[K],ye=m.indexOf(ce);ye>=0&&(m[ye]=null,g[ye].disconnect(ce))}for(let K=0;K<q.added.length;K++){const ce=q.added[K];let ye=m.indexOf(ce);if(ye===-1){for(let Ue=0;Ue<g.length;Ue++)if(Ue>=m.length){m.push(ce),ye=Ue;break}else if(m[Ue]===null){m[Ue]=ce,ye=Ue;break}if(ye===-1)break}const xe=g[ye];xe&&xe.connect(ce)}}const k=new R,X=new R;function $(q,K,ce){k.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const ye=k.distanceTo(X),xe=K.projectionMatrix.elements,Ue=ce.projectionMatrix.elements,Oe=xe[14]/(xe[10]-1),Re=xe[14]/(xe[10]+1),qe=(xe[9]+1)/xe[5],G=(xe[9]-1)/xe[5],Bt=(xe[8]-1)/xe[0],Ae=(Ue[8]+1)/Ue[0],De=Oe*Bt,Se=Oe*Ae,ot=ye/(-Bt+Ae),ze=ot*-Bt;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ze),q.translateZ(ot),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const C=Oe+ot,E=Re+ot,H=De-ze,re=Se+(ye-ze),te=qe*Re/E*C,se=G*Re/E*C;q.projectionMatrix.makePerspective(H,re,te,se,C,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function N(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;M.near=S.near=T.near=q.near,M.far=S.far=T.far=q.far,(w!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,z=M.far);const K=q.parent,ce=M.cameras;N(M,K);for(let ye=0;ye<ce.length;ye++)N(ce[ye],K);ce.length===2?$(M,T,S):M.projectionMatrix.copy(T.projectionMatrix),O(q,M,K)};function O(q,K,ce){ce===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=sa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let B=null;function Z(q,K){if(h=K.getViewerPose(c||o),_=K,h!==null){const ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let ye=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,ye=!0);for(let xe=0;xe<ce.length;xe++){const Ue=ce[xe];let Oe=null;if(p!==null)Oe=p.getViewport(Ue);else{const qe=d.getViewSubImage(f,Ue);Oe=qe.viewport,xe===0&&(e.setRenderTargetTextures(u,qe.colorTexture,f.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(u))}let Re=L[xe];Re===void 0&&(Re=new Fn,Re.layers.enable(xe),Re.viewport=new kt,L[xe]=Re),Re.matrix.fromArray(Ue.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ue.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),xe===0&&(M.matrix.copy(Re.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ye===!0&&M.cameras.push(Re)}}for(let ce=0;ce<g.length;ce++){const ye=m[ce],xe=g[ce];ye!==null&&xe!==void 0&&xe.update(ye,K,c||o)}B&&B(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Q=new $v;Q.setAnimationLoop(Z),this.setAnimationLoop=function(q){B=q},this.dispose=function(){}}}function rA(n,e){function t(v,u){v.matrixAutoUpdate===!0&&v.updateMatrix(),u.value.copy(v.matrix)}function i(v,u){u.color.getRGB(v.fogColor.value,Xv(n)),u.isFog?(v.fogNear.value=u.near,v.fogFar.value=u.far):u.isFogExp2&&(v.fogDensity.value=u.density)}function r(v,u,g,m,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(v,u):u.isMeshToonMaterial?(s(v,u),d(v,u)):u.isMeshPhongMaterial?(s(v,u),h(v,u)):u.isMeshStandardMaterial?(s(v,u),f(v,u),u.isMeshPhysicalMaterial&&p(v,u,x)):u.isMeshMatcapMaterial?(s(v,u),_(v,u)):u.isMeshDepthMaterial?s(v,u):u.isMeshDistanceMaterial?(s(v,u),y(v,u)):u.isMeshNormalMaterial?s(v,u):u.isLineBasicMaterial?(o(v,u),u.isLineDashedMaterial&&a(v,u)):u.isPointsMaterial?l(v,u,g,m):u.isSpriteMaterial?c(v,u):u.isShadowMaterial?(v.color.value.copy(u.color),v.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(v,u){v.opacity.value=u.opacity,u.color&&v.diffuse.value.copy(u.color),u.emissive&&v.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(v.map.value=u.map,t(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,t(u.alphaMap,v.alphaMapTransform)),u.bumpMap&&(v.bumpMap.value=u.bumpMap,t(u.bumpMap,v.bumpMapTransform),v.bumpScale.value=u.bumpScale,u.side===vn&&(v.bumpScale.value*=-1)),u.normalMap&&(v.normalMap.value=u.normalMap,t(u.normalMap,v.normalMapTransform),v.normalScale.value.copy(u.normalScale),u.side===vn&&v.normalScale.value.negate()),u.displacementMap&&(v.displacementMap.value=u.displacementMap,t(u.displacementMap,v.displacementMapTransform),v.displacementScale.value=u.displacementScale,v.displacementBias.value=u.displacementBias),u.emissiveMap&&(v.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,v.emissiveMapTransform)),u.specularMap&&(v.specularMap.value=u.specularMap,t(u.specularMap,v.specularMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(v.envMap.value=g,v.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=u.reflectivity,v.ior.value=u.ior,v.refractionRatio.value=u.refractionRatio),u.lightMap){v.lightMap.value=u.lightMap;const m=n._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=u.lightMapIntensity*m,t(u.lightMap,v.lightMapTransform)}u.aoMap&&(v.aoMap.value=u.aoMap,v.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,v.aoMapTransform))}function o(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,u.map&&(v.map.value=u.map,t(u.map,v.mapTransform))}function a(v,u){v.dashSize.value=u.dashSize,v.totalSize.value=u.dashSize+u.gapSize,v.scale.value=u.scale}function l(v,u,g,m){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.size.value=u.size*g,v.scale.value=m*.5,u.map&&(v.map.value=u.map,t(u.map,v.uvTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,t(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function c(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.rotation.value=u.rotation,u.map&&(v.map.value=u.map,t(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,t(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function h(v,u){v.specular.value.copy(u.specular),v.shininess.value=Math.max(u.shininess,1e-4)}function d(v,u){u.gradientMap&&(v.gradientMap.value=u.gradientMap)}function f(v,u){v.metalness.value=u.metalness,u.metalnessMap&&(v.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,v.metalnessMapTransform)),v.roughness.value=u.roughness,u.roughnessMap&&(v.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,v.roughnessMapTransform)),e.get(u).envMap&&(v.envMapIntensity.value=u.envMapIntensity)}function p(v,u,g){v.ior.value=u.ior,u.sheen>0&&(v.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),v.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(v.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,v.sheenColorMapTransform)),u.sheenRoughnessMap&&(v.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,v.sheenRoughnessMapTransform))),u.clearcoat>0&&(v.clearcoat.value=u.clearcoat,v.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(v.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,v.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(v.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===vn&&v.clearcoatNormalScale.value.negate())),u.iridescence>0&&(v.iridescence.value=u.iridescence,v.iridescenceIOR.value=u.iridescenceIOR,v.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(v.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,v.iridescenceMapTransform)),u.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),u.transmission>0&&(v.transmission.value=u.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(v.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,v.transmissionMapTransform)),v.thickness.value=u.thickness,u.thicknessMap&&(v.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=u.attenuationDistance,v.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(v.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(v.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=u.specularIntensity,v.specularColor.value.copy(u.specularColor),u.specularColorMap&&(v.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,v.specularColorMapTransform)),u.specularIntensityMap&&(v.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,u){u.matcap&&(v.matcap.value=u.matcap)}function y(v,u){const g=e.get(u).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sA(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,m){const x=m.program;i.uniformBlockBinding(g,x)}function c(g,m){let x=r[g.id];x===void 0&&(_(g),x=h(g),r[g.id]=x,g.addEventListener("dispose",v));const A=m.program;i.updateUBOMapping(g,A);const T=e.render.frame;s[g.id]!==T&&(f(g),s[g.id]=T)}function h(g){const m=d();g.__bindingPointIndex=m;const x=n.createBuffer(),A=g.__size,T=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,m,x),x}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const m=r[g.id],x=g.uniforms,A=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,m);for(let T=0,S=x.length;T<S;T++){const L=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,w=L.length;M<w;M++){const z=L[M];if(p(z,T,M,A)===!0){const V=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let I=0;for(let k=0;k<J.length;k++){const X=J[k],$=y(X);typeof X=="number"||typeof X=="boolean"?(z.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,V+I,z.__data)):X.isMatrix3?(z.__data[0]=X.elements[0],z.__data[1]=X.elements[1],z.__data[2]=X.elements[2],z.__data[3]=0,z.__data[4]=X.elements[3],z.__data[5]=X.elements[4],z.__data[6]=X.elements[5],z.__data[7]=0,z.__data[8]=X.elements[6],z.__data[9]=X.elements[7],z.__data[10]=X.elements[8],z.__data[11]=0):(X.toArray(z.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,m,x,A){const T=g.value,S=m+"_"+x;if(A[S]===void 0)return typeof T=="number"||typeof T=="boolean"?A[S]=T:A[S]=T.clone(),!0;{const L=A[S];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return A[S]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function _(g){const m=g.uniforms;let x=0;const A=16;for(let S=0,L=m.length;S<L;S++){const M=Array.isArray(m[S])?m[S]:[m[S]];for(let w=0,z=M.length;w<z;w++){const V=M[w],J=Array.isArray(V.value)?V.value:[V.value];for(let I=0,k=J.length;I<k;I++){const X=J[I],$=y(X),N=x%A;N!==0&&A-N<$.boundary&&(x+=A-N),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=$.storage}}}const T=x%A;return T>0&&(x+=A-T),g.__size=x,g.__cache={},this}function y(g){const m={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(m.boundary=4,m.storage=4):g.isVector2?(m.boundary=8,m.storage=8):g.isVector3||g.isColor?(m.boundary=16,m.storage=12):g.isVector4?(m.boundary=16,m.storage=16):g.isMatrix3?(m.boundary=48,m.storage=48):g.isMatrix4?(m.boundary=64,m.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),m}function v(g){const m=g.target;m.removeEventListener("dispose",v);const x=o.indexOf(m.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function u(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class n_{constructor(e={}){const{canvas:t=tM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,v=null;const u=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=ar,this.toneMappingExposure=1;const m=this;let x=!1,A=0,T=0,S=null,L=-1,M=null;const w=new kt,z=new kt;let V=null;const J=new ke(0);let I=0,k=t.width,X=t.height,$=1,N=null,O=null;const B=new kt(0,0,k,X),Z=new kt(0,0,k,X);let Q=!1;const q=new qd;let K=!1,ce=!1,ye=null;const xe=new gt,Ue=new ge,Oe=new R,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return S===null?$:1}let G=i;function Bt(b,F){for(let j=0;j<b.length;j++){const Y=b[j],W=t.getContext(Y,F);if(W!==null)return W}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vd}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ae,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&F.shift(),G=Bt(F,b),G===null)throw Bt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ae,De,Se,ot,ze,C,E,H,re,te,se,Me,he,_e,Ce,Be,ee,et,Ve,Ie,Te,fe,P,oe;function Ee(){Ae=new mw(G),De=new cw(G,Ae,e),Ae.init(De),fe=new eA(G,Ae,De),Se=new QT(G,Ae,De),ot=new _w(G),ze=new kT,C=new JT(G,Ae,Se,ze,De,fe,ot),E=new hw(m),H=new pw(m),re=new AM(G,De),P=new aw(G,Ae,re,De),te=new gw(G,re,ot,P),se=new Mw(G,te,re,ot),Ve=new Sw(G,De,C),Be=new uw(ze),Me=new FT(m,E,H,Ae,De,P,Be),he=new rA(m,ze),_e=new BT,Ce=new XT(Ae,De),et=new ow(m,E,H,Se,se,f,l),ee=new KT(m,se,De),oe=new sA(G,ot,De,Se),Ie=new lw(G,Ae,ot,De),Te=new vw(G,Ae,ot,De),ot.programs=Me.programs,m.capabilities=De,m.extensions=Ae,m.properties=ze,m.renderLists=_e,m.shadowMap=ee,m.state=Se,m.info=ot}Ee();const ve=new iA(m,G);this.xr=ve,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=Ae.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ae.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(k,X,!1))},this.getSize=function(b){return b.set(k,X)},this.setSize=function(b,F,j=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,X=F,t.width=Math.floor(b*$),t.height=Math.floor(F*$),j===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(k*$,X*$).floor()},this.setDrawingBufferSize=function(b,F,j){k=b,X=F,$=j,t.width=Math.floor(b*j),t.height=Math.floor(F*j),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(B)},this.setViewport=function(b,F,j,Y){b.isVector4?B.set(b.x,b.y,b.z,b.w):B.set(b,F,j,Y),Se.viewport(w.copy(B).multiplyScalar($).floor())},this.getScissor=function(b){return b.copy(Z)},this.setScissor=function(b,F,j,Y){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,F,j,Y),Se.scissor(z.copy(Z).multiplyScalar($).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(b){Se.setScissorTest(Q=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){O=b},this.getClearColor=function(b){return b.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(b=!0,F=!0,j=!0){let Y=0;if(b){let W=!1;if(S!==null){const pe=S.texture.format;W=pe===Nv||pe===Iv||pe===Dv}if(W){const pe=S.texture.type,we=pe===lr||pe===$i||pe===Wd||pe===Ir||pe===Pv||pe===Lv,Le=et.getClearColor(),Ne=et.getClearAlpha(),We=Le.r,Fe=Le.g,He=Le.b;we?(p[0]=We,p[1]=Fe,p[2]=He,p[3]=Ne,G.clearBufferuiv(G.COLOR,0,p)):(_[0]=We,_[1]=Fe,_[2]=He,_[3]=Ne,G.clearBufferiv(G.COLOR,0,_))}else Y|=G.COLOR_BUFFER_BIT}F&&(Y|=G.DEPTH_BUFFER_BIT),j&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),_e.dispose(),Ce.dispose(),ze.dispose(),E.dispose(),H.dispose(),se.dispose(),P.dispose(),oe.dispose(),Me.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",St),ve.removeEventListener("sessionend",Qe),ye&&(ye.dispose(),ye=null),Tt.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const b=ot.autoReset,F=ee.enabled,j=ee.autoUpdate,Y=ee.needsUpdate,W=ee.type;Ee(),ot.autoReset=b,ee.enabled=F,ee.autoUpdate=j,ee.needsUpdate=Y,ee.type=W}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ue(b){const F=b.target;F.removeEventListener("dispose",ue),Pe(F)}function Pe(b){be(b),ze.remove(b)}function be(b){const F=ze.get(b).programs;F!==void 0&&(F.forEach(function(j){Me.releaseProgram(j)}),b.isShaderMaterial&&Me.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,j,Y,W,pe){F===null&&(F=Re);const we=W.isMesh&&W.matrixWorld.determinant()<0,Le=d_(b,F,j,Y,W);Se.setMaterial(Y,we);let Ne=j.index,We=1;if(Y.wireframe===!0){if(Ne=te.getWireframeAttribute(j),Ne===void 0)return;We=2}const Fe=j.drawRange,He=j.attributes.position;let Mt=Fe.start*We,_n=(Fe.start+Fe.count)*We;pe!==null&&(Mt=Math.max(Mt,pe.start*We),_n=Math.min(_n,(pe.start+pe.count)*We)),Ne!==null?(Mt=Math.max(Mt,0),_n=Math.min(_n,Ne.count)):He!=null&&(Mt=Math.max(Mt,0),_n=Math.min(_n,He.count));const It=_n-Mt;if(It<0||It===1/0)return;P.setup(W,Y,Le,j,Ne);let di,ft=Ie;if(Ne!==null&&(di=re.get(Ne),ft=Te,ft.setIndex(di)),W.isMesh)Y.wireframe===!0?(Se.setLineWidth(Y.wireframeLinewidth*qe()),ft.setMode(G.LINES)):ft.setMode(G.TRIANGLES);else if(W.isLine){let je=Y.linewidth;je===void 0&&(je=1),Se.setLineWidth(je*qe()),W.isLineSegments?ft.setMode(G.LINES):W.isLineLoop?ft.setMode(G.LINE_LOOP):ft.setMode(G.LINE_STRIP)}else W.isPoints?ft.setMode(G.POINTS):W.isSprite&&ft.setMode(G.TRIANGLES);if(W.isBatchedMesh)ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ft.renderInstances(Mt,It,W.count);else if(j.isInstancedBufferGeometry){const je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ac=Math.min(j.instanceCount,je);ft.renderInstances(Mt,It,Ac)}else ft.render(Mt,It)};function $e(b,F,j){b.transparent===!0&&b.side===kn&&b.forceSinglePass===!1?(b.side=vn,b.needsUpdate=!0,ma(b,F,j),b.side=hr,b.needsUpdate=!0,ma(b,F,j),b.side=kn):ma(b,F,j)}this.compile=function(b,F,j=null){j===null&&(j=b),v=Ce.get(j),v.init(),g.push(v),j.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),b!==j&&b.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights(m._useLegacyLights);const Y=new Set;return b.traverse(function(W){const pe=W.material;if(pe)if(Array.isArray(pe))for(let we=0;we<pe.length;we++){const Le=pe[we];$e(Le,j,W),Y.add(Le)}else $e(pe,j,W),Y.add(pe)}),g.pop(),v=null,Y},this.compileAsync=function(b,F,j=null){const Y=this.compile(b,F,j);return new Promise(W=>{function pe(){if(Y.forEach(function(we){ze.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){W(b);return}setTimeout(pe,10)}Ae.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Ze=null;function _t(b){Ze&&Ze(b)}function St(){Tt.stop()}function Qe(){Tt.start()}const Tt=new $v;Tt.setAnimationLoop(_t),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(b){Ze=b,ve.setAnimationLoop(b),b===null?Tt.stop():Tt.start()},ve.addEventListener("sessionstart",St),ve.addEventListener("sessionend",Qe),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(F),F=ve.getCamera()),b.isScene===!0&&b.onBeforeRender(m,b,F,S),v=Ce.get(b,g.length),v.init(),g.push(v),xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(xe),ce=this.localClippingEnabled,K=Be.init(this.clippingPlanes,ce),y=_e.get(b,u.length),y.init(),u.push(y),ni(b,F,0,m.sortObjects),y.finish(),m.sortObjects===!0&&y.sort(N,O),this.info.render.frame++,K===!0&&Be.beginShadows();const j=v.state.shadowsArray;if(ee.render(j,b,F),K===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(y,b),v.setupLights(m._useLegacyLights),F.isArrayCamera){const Y=F.cameras;for(let W=0,pe=Y.length;W<pe;W++){const we=Y[W];rf(y,b,we,we.viewport)}}else rf(y,b,F);S!==null&&(C.updateMultisampleRenderTarget(S),C.updateRenderTargetMipmap(S)),b.isScene===!0&&b.onAfterRender(m,b,F),P.resetDefaultState(),L=-1,M=null,g.pop(),g.length>0?v=g[g.length-1]:v=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function ni(b,F,j,Y){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){Y&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xe);const we=se.update(b),Le=b.material;Le.visible&&y.push(b,we,Le,j,Oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const we=se.update(b),Le=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Oe.copy(we.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(xe)),Array.isArray(Le)){const Ne=we.groups;for(let We=0,Fe=Ne.length;We<Fe;We++){const He=Ne[We],Mt=Le[He.materialIndex];Mt&&Mt.visible&&y.push(b,we,Mt,j,Oe.z,He)}}else Le.visible&&y.push(b,we,Le,j,Oe.z,null)}}const pe=b.children;for(let we=0,Le=pe.length;we<Le;we++)ni(pe[we],F,j,Y)}function rf(b,F,j,Y){const W=b.opaque,pe=b.transmissive,we=b.transparent;v.setupLightsView(j),K===!0&&Be.setGlobalState(m.clippingPlanes,j),pe.length>0&&h_(W,pe,F,j),Y&&Se.viewport(w.copy(Y)),W.length>0&&pa(W,F,j),pe.length>0&&pa(pe,F,j),we.length>0&&pa(we,F,j),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function h_(b,F,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const pe=De.isWebGL2;ye===null&&(ye=new Hr(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?ra:lr,minFilter:ia,samples:pe?4:0})),m.getDrawingBufferSize(Ue),pe?ye.setSize(Ue.x,Ue.y):ye.setSize(ic(Ue.x),ic(Ue.y));const we=m.getRenderTarget();m.setRenderTarget(ye),m.getClearColor(J),I=m.getClearAlpha(),I<1&&m.setClearColor(16777215,.5),m.clear();const Le=m.toneMapping;m.toneMapping=ar,pa(b,j,Y),C.updateMultisampleRenderTarget(ye),C.updateRenderTargetMipmap(ye);let Ne=!1;for(let We=0,Fe=F.length;We<Fe;We++){const He=F[We],Mt=He.object,_n=He.geometry,It=He.material,di=He.group;if(It.side===kn&&Mt.layers.test(Y.layers)){const ft=It.side;It.side=vn,It.needsUpdate=!0,sf(Mt,j,Y,_n,It,di),It.side=ft,It.needsUpdate=!0,Ne=!0}}Ne===!0&&(C.updateMultisampleRenderTarget(ye),C.updateRenderTargetMipmap(ye)),m.setRenderTarget(we),m.setClearColor(J,I),m.toneMapping=Le}function pa(b,F,j){const Y=F.isScene===!0?F.overrideMaterial:null;for(let W=0,pe=b.length;W<pe;W++){const we=b[W],Le=we.object,Ne=we.geometry,We=Y===null?we.material:Y,Fe=we.group;Le.layers.test(j.layers)&&sf(Le,F,j,Ne,We,Fe)}}function sf(b,F,j,Y,W,pe){b.onBeforeRender(m,F,j,Y,W,pe),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(m,F,j,Y,b,pe),W.transparent===!0&&W.side===kn&&W.forceSinglePass===!1?(W.side=vn,W.needsUpdate=!0,m.renderBufferDirect(j,F,Y,W,b,pe),W.side=hr,W.needsUpdate=!0,m.renderBufferDirect(j,F,Y,W,b,pe),W.side=kn):m.renderBufferDirect(j,F,Y,W,b,pe),b.onAfterRender(m,F,j,Y,W,pe)}function ma(b,F,j){F.isScene!==!0&&(F=Re);const Y=ze.get(b),W=v.state.lights,pe=v.state.shadowsArray,we=W.state.version,Le=Me.getParameters(b,W.state,pe,F,j),Ne=Me.getProgramCacheKey(Le);let We=Y.programs;Y.environment=b.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(b.isMeshStandardMaterial?H:E).get(b.envMap||Y.environment),We===void 0&&(b.addEventListener("dispose",ue),We=new Map,Y.programs=We);let Fe=We.get(Ne);if(Fe!==void 0){if(Y.currentProgram===Fe&&Y.lightsStateVersion===we)return af(b,Le),Fe}else Le.uniforms=Me.getUniforms(b),b.onBuild(j,Le,m),b.onBeforeCompile(Le,m),Fe=Me.acquireProgram(Le,Ne),We.set(Ne,Fe),Y.uniforms=Le.uniforms;const He=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=Be.uniform),af(b,Le),Y.needsLights=p_(b),Y.lightsStateVersion=we,Y.needsLights&&(He.ambientLightColor.value=W.state.ambient,He.lightProbe.value=W.state.probe,He.directionalLights.value=W.state.directional,He.directionalLightShadows.value=W.state.directionalShadow,He.spotLights.value=W.state.spot,He.spotLightShadows.value=W.state.spotShadow,He.rectAreaLights.value=W.state.rectArea,He.ltc_1.value=W.state.rectAreaLTC1,He.ltc_2.value=W.state.rectAreaLTC2,He.pointLights.value=W.state.point,He.pointLightShadows.value=W.state.pointShadow,He.hemisphereLights.value=W.state.hemi,He.directionalShadowMap.value=W.state.directionalShadowMap,He.directionalShadowMatrix.value=W.state.directionalShadowMatrix,He.spotShadowMap.value=W.state.spotShadowMap,He.spotLightMatrix.value=W.state.spotLightMatrix,He.spotLightMap.value=W.state.spotLightMap,He.pointShadowMap.value=W.state.pointShadowMap,He.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Fe,Y.uniformsList=null,Fe}function of(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Tl.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function af(b,F){const j=ze.get(b);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function d_(b,F,j,Y,W){F.isScene!==!0&&(F=Re),C.resetTextureUnits();const pe=F.fog,we=Y.isMeshStandardMaterial?F.environment:null,Le=S===null?m.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ri,Ne=(Y.isMeshStandardMaterial?H:E).get(Y.envMap||we),We=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Fe=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),He=!!j.morphAttributes.position,Mt=!!j.morphAttributes.normal,_n=!!j.morphAttributes.color;let It=ar;Y.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(It=m.toneMapping);const di=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ft=di!==void 0?di.length:0,je=ze.get(Y),Ac=v.state.lights;if(K===!0&&(ce===!0||b!==M)){const Pn=b===M&&Y.id===L;Be.setState(Y,b,Pn)}let yt=!1;Y.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ac.state.version||je.outputColorSpace!==Le||W.isBatchedMesh&&je.batching===!1||!W.isBatchedMesh&&je.batching===!0||W.isInstancedMesh&&je.instancing===!1||!W.isInstancedMesh&&je.instancing===!0||W.isSkinnedMesh&&je.skinning===!1||!W.isSkinnedMesh&&je.skinning===!0||W.isInstancedMesh&&je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&je.instancingColor===!1&&W.instanceColor!==null||je.envMap!==Ne||Y.fog===!0&&je.fog!==pe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Be.numPlanes||je.numIntersection!==Be.numIntersection)||je.vertexAlphas!==We||je.vertexTangents!==Fe||je.morphTargets!==He||je.morphNormals!==Mt||je.morphColors!==_n||je.toneMapping!==It||De.isWebGL2===!0&&je.morphTargetsCount!==ft)&&(yt=!0):(yt=!0,je.__version=Y.version);let mr=je.currentProgram;yt===!0&&(mr=ma(Y,F,W));let lf=!1,io=!1,bc=!1;const Xt=mr.getUniforms(),gr=je.uniforms;if(Se.useProgram(mr.program)&&(lf=!0,io=!0,bc=!0),Y.id!==L&&(L=Y.id,io=!0),lf||M!==b){Xt.setValue(G,"projectionMatrix",b.projectionMatrix),Xt.setValue(G,"viewMatrix",b.matrixWorldInverse);const Pn=Xt.map.cameraPosition;Pn!==void 0&&Pn.setValue(G,Oe.setFromMatrixPosition(b.matrixWorld)),De.logarithmicDepthBuffer&&Xt.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Xt.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,io=!0,bc=!0)}if(W.isSkinnedMesh){Xt.setOptional(G,W,"bindMatrix"),Xt.setOptional(G,W,"bindMatrixInverse");const Pn=W.skeleton;Pn&&(De.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),Xt.setValue(G,"boneTexture",Pn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Xt.setOptional(G,W,"batchingTexture"),Xt.setValue(G,"batchingTexture",W._matricesTexture,C));const Cc=j.morphAttributes;if((Cc.position!==void 0||Cc.normal!==void 0||Cc.color!==void 0&&De.isWebGL2===!0)&&Ve.update(W,j,mr),(io||je.receiveShadow!==W.receiveShadow)&&(je.receiveShadow=W.receiveShadow,Xt.setValue(G,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(gr.envMap.value=Ne,gr.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),io&&(Xt.setValue(G,"toneMappingExposure",m.toneMappingExposure),je.needsLights&&f_(gr,bc),pe&&Y.fog===!0&&he.refreshFogUniforms(gr,pe),he.refreshMaterialUniforms(gr,Y,$,X,ye),Tl.upload(G,of(je),gr,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Tl.upload(G,of(je),gr,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Xt.setValue(G,"center",W.center),Xt.setValue(G,"modelViewMatrix",W.modelViewMatrix),Xt.setValue(G,"normalMatrix",W.normalMatrix),Xt.setValue(G,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Pn=Y.uniformsGroups;for(let Rc=0,m_=Pn.length;Rc<m_;Rc++)if(De.isWebGL2){const cf=Pn[Rc];oe.update(cf,mr),oe.bind(cf,mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mr}function f_(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function p_(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(b,F,j){ze.get(b.texture).__webglTexture=F,ze.get(b.depthTexture).__webglTexture=j;const Y=ze.get(b);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){const j=ze.get(b);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,j=0){S=b,A=F,T=j;let Y=!0,W=null,pe=!1,we=!1;if(b){const Ne=ze.get(b);Ne.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(G.FRAMEBUFFER,null),Y=!1):Ne.__webglFramebuffer===void 0?C.setupRenderTarget(b):Ne.__hasExternalTextures&&C.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Fe=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?W=Fe[F][j]:W=Fe[F],pe=!0):De.isWebGL2&&b.samples>0&&C.useMultisampledRTT(b)===!1?W=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[j]:W=Fe,w.copy(b.viewport),z.copy(b.scissor),V=b.scissorTest}else w.copy(B).multiplyScalar($).floor(),z.copy(Z).multiplyScalar($).floor(),V=Q;if(Se.bindFramebuffer(G.FRAMEBUFFER,W)&&De.drawBuffers&&Y&&Se.drawBuffers(b,W),Se.viewport(w),Se.scissor(z),Se.setScissorTest(V),pe){const Ne=ze.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ne.__webglTexture,j)}else if(we){const Ne=ze.get(b.texture),We=F||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ne.__webglTexture,j||0,We)}L=-1},this.readRenderTargetPixels=function(b,F,j,Y,W,pe,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){Se.bindFramebuffer(G.FRAMEBUFFER,Le);try{const Ne=b.texture,We=Ne.format,Fe=Ne.type;if(We!==Qn&&fe.convert(We)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Fe===ra&&(Ae.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Fe!==lr&&fe.convert(Fe)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Zi&&(De.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-Y&&j>=0&&j<=b.height-W&&G.readPixels(F,j,Y,W,fe.convert(We),fe.convert(Fe),pe)}finally{const Ne=S!==null?ze.get(S).__webglFramebuffer:null;Se.bindFramebuffer(G.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(b,F,j=0){const Y=Math.pow(2,-j),W=Math.floor(F.image.width*Y),pe=Math.floor(F.image.height*Y);C.setTexture2D(F,0),G.copyTexSubImage2D(G.TEXTURE_2D,j,0,0,b.x,b.y,W,pe),Se.unbindTexture()},this.copyTextureToTexture=function(b,F,j,Y=0){const W=F.image.width,pe=F.image.height,we=fe.convert(j.format),Le=fe.convert(j.type);C.setTexture2D(j,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment),F.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,b.x,b.y,W,pe,we,Le,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,we,F.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Y,b.x,b.y,we,Le,F.image),Y===0&&j.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(b,F,j,Y,W=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=b.max.x-b.min.x+1,we=b.max.y-b.min.y+1,Le=b.max.z-b.min.z+1,Ne=fe.convert(Y.format),We=fe.convert(Y.type);let Fe;if(Y.isData3DTexture)C.setTexture3D(Y,0),Fe=G.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)C.setTexture2DArray(Y,0),Fe=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const He=G.getParameter(G.UNPACK_ROW_LENGTH),Mt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),_n=G.getParameter(G.UNPACK_SKIP_PIXELS),It=G.getParameter(G.UNPACK_SKIP_ROWS),di=G.getParameter(G.UNPACK_SKIP_IMAGES),ft=j.isCompressedTexture?j.mipmaps[W]:j.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,ft.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ft.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,b.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,b.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,b.min.z),j.isDataTexture||j.isData3DTexture?G.texSubImage3D(Fe,W,F.x,F.y,F.z,pe,we,Le,Ne,We,ft.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Fe,W,F.x,F.y,F.z,pe,we,Le,Ne,ft.data)):G.texSubImage3D(Fe,W,F.x,F.y,F.z,pe,we,Le,Ne,We,ft),G.pixelStorei(G.UNPACK_ROW_LENGTH,He),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,_n),G.pixelStorei(G.UNPACK_SKIP_ROWS,It),G.pixelStorei(G.UNPACK_SKIP_IMAGES,di),W===0&&Y.generateMipmaps&&G.generateMipmap(Fe),Se.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),Se.unbindTexture()},this.resetState=function(){A=0,T=0,S=null,Se.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jd?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Mc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Ur:Ov}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ur?Ot:Ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class oA extends n_{}oA.prototype.isWebGL1Renderer=!0;class Kd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new Kd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class aA extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ki extends to{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zm=new R,Bm=new R,Hm=new gt,Lu=new wc,tl=new Ec;class En extends wt{constructor(e=new dt,t=new Ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)zm.fromBufferAttribute(t,r-1),Bm.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=zm.distanceTo(Bm);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(r),tl.radius+=s,e.ray.intersectsSphere(tl)===!1)return;Hm.copy(r).invert(),Lu.copy(e.ray).applyMatrix4(Hm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,h=new R,d=new R,f=new R,p=this.isLineSegments?2:1,_=i.index,v=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),g=Math.min(_.count,o.start+o.count);for(let m=u,x=g-1;m<x;m+=p){const A=_.getX(m),T=_.getX(m+1);if(c.fromBufferAttribute(v,A),h.fromBufferAttribute(v,T),Lu.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),g=Math.min(v.count,o.start+o.count);for(let m=u,x=g-1;m<x;m+=p){if(c.fromBufferAttribute(v,m),h.fromBufferAttribute(v,m+1),Lu.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Gm=new R,Vm=new R;class Fo extends En{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Gm.fromBufferAttribute(t,r),Vm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Gm.distanceTo(Vm);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Li{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],f=i[r+1]-h,p=(o-h)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ge:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new R,r=[],s=[],o=[],a=new R,l=new gt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ft(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ft(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class i_ extends Li{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new ge,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lA extends i_{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qd(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const nl=new R,Du=new Qd,Iu=new Qd,Nu=new Qd;class r_ extends Li{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(nl.subVectors(r[0],r[1]).add(r[0]),c=nl);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(nl.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=nl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(h),p);y<1e-4&&(y=1),_<1e-4&&(_=y),v<1e-4&&(v=y),Du.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,_,y,v),Iu.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,_,y,v),Nu.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,_,y,v)}else this.curveType==="catmullrom"&&(Du.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Iu.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Nu.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(Du.calc(l),Iu.calc(l),Nu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wm(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function cA(n,e){const t=1-n;return t*t*e}function uA(n,e){return 2*(1-n)*n*e}function hA(n,e){return n*n*e}function ko(n,e,t,i){return cA(n,e)+uA(n,t)+hA(n,i)}function dA(n,e){const t=1-n;return t*t*t*e}function fA(n,e){const t=1-n;return 3*t*t*n*e}function pA(n,e){return 3*(1-n)*n*n*e}function mA(n,e){return n*n*n*e}function zo(n,e,t,i,r){return dA(n,e)+fA(n,t)+pA(n,i)+mA(n,r)}class gA extends Li{constructor(e=new ge,t=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ge){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,r.x,s.x,o.x,a.x),zo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vA extends Li{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,r.x,s.x,o.x,a.x),zo(e,r.y,s.y,o.y,a.y),zo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _A extends Li{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yA extends Li{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xA extends Li{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class s_ extends Li{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y),ko(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SA extends Li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Wm(a,l.x,c.x,h.x,d.x),Wm(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ge().fromArray(r))}return this}}var MA=Object.freeze({__proto__:null,ArcCurve:lA,CatmullRomCurve3:r_,CubicBezierCurve:gA,CubicBezierCurve3:vA,EllipseCurve:i_,LineCurve:_A,LineCurve3:yA,QuadraticBezierCurve:xA,QuadraticBezierCurve3:s_,SplineCurve:SA});class Ht extends dt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],p=[];let _=0;const y=[],v=i/2;let u=0;g(),o===!1&&(e>0&&m(!0),t>0&&m(!1)),this.setIndex(h),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function g(){const x=new R,A=new R;let T=0;const S=(t-e)/i;for(let L=0;L<=s;L++){const M=[],w=L/s,z=w*(t-e)+e;for(let V=0;V<=r;V++){const J=V/r,I=J*l+a,k=Math.sin(I),X=Math.cos(I);A.x=z*k,A.y=-w*i+v,A.z=z*X,d.push(A.x,A.y,A.z),x.set(k,S,X).normalize(),f.push(x.x,x.y,x.z),p.push(J,1-w),M.push(_++)}y.push(M)}for(let L=0;L<r;L++)for(let M=0;M<s;M++){const w=y[M][L],z=y[M+1][L],V=y[M+1][L+1],J=y[M][L+1];h.push(w,z,J),h.push(z,V,J),T+=6}c.addGroup(u,T,0),u+=T}function m(x){const A=_,T=new ge,S=new R;let L=0;const M=x===!0?e:t,w=x===!0?1:-1;for(let V=1;V<=r;V++)d.push(0,v*w,0),f.push(0,w,0),p.push(.5,.5),_++;const z=_;for(let V=0;V<=r;V++){const I=V/r*l+a,k=Math.cos(I),X=Math.sin(I);S.x=M*X,S.y=v*w,S.z=M*k,d.push(S.x,S.y,S.z),f.push(0,w,0),T.x=k*.5+.5,T.y=X*.5*w+.5,p.push(T.x,T.y),_++}for(let V=0;V<r;V++){const J=A+V,I=z+V;x===!0?h.push(I,I+1,J):h.push(I+1,I,J),L+=3}c.addGroup(u,L,x===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jd extends dt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const m=new R,x=new R,A=new R;for(let T=0;T<t.length;T+=3)p(t[T+0],m),p(t[T+1],x),p(t[T+2],A),l(m,x,A,g)}function l(g,m,x,A){const T=A+1,S=[];for(let L=0;L<=T;L++){S[L]=[];const M=g.clone().lerp(x,L/T),w=m.clone().lerp(x,L/T),z=T-L;for(let V=0;V<=z;V++)V===0&&L===T?S[L][V]=M:S[L][V]=M.clone().lerp(w,V/z)}for(let L=0;L<T;L++)for(let M=0;M<2*(T-L)-1;M++){const w=Math.floor(M/2);M%2===0?(f(S[L][w+1]),f(S[L+1][w]),f(S[L][w])):(f(S[L][w+1]),f(S[L+1][w+1]),f(S[L+1][w]))}}function c(g){const m=new R;for(let x=0;x<s.length;x+=3)m.x=s[x+0],m.y=s[x+1],m.z=s[x+2],m.normalize().multiplyScalar(g),s[x+0]=m.x,s[x+1]=m.y,s[x+2]=m.z}function h(){const g=new R;for(let m=0;m<s.length;m+=3){g.x=s[m+0],g.y=s[m+1],g.z=s[m+2];const x=v(g)/2/Math.PI+.5,A=u(g)/Math.PI+.5;o.push(x,1-A)}_(),d()}function d(){for(let g=0;g<o.length;g+=6){const m=o[g+0],x=o[g+2],A=o[g+4],T=Math.max(m,x,A),S=Math.min(m,x,A);T>.9&&S<.1&&(m<.2&&(o[g+0]+=1),x<.2&&(o[g+2]+=1),A<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,m){const x=g*3;m.x=e[x+0],m.y=e[x+1],m.z=e[x+2]}function _(){const g=new R,m=new R,x=new R,A=new R,T=new ge,S=new ge,L=new ge;for(let M=0,w=0;M<s.length;M+=9,w+=6){g.set(s[M+0],s[M+1],s[M+2]),m.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),T.set(o[w+0],o[w+1]),S.set(o[w+2],o[w+3]),L.set(o[w+4],o[w+5]),A.copy(g).add(m).add(x).divideScalar(3);const z=v(A);y(T,w+0,g,z),y(S,w+2,m,z),y(L,w+4,x,z)}}function y(g,m,x,A){A<0&&g.x===1&&(o[m]=g.x-1),x.x===0&&x.z===0&&(o[m]=A/2/Math.PI+.5)}function v(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.vertices,e.indices,e.radius,e.details)}}const il=new R,rl=new R,Uu=new R,sl=new On;class EA extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Os*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:v,c:u}=sl;if(y.fromBufferAttribute(a,c[0]),v.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),sl.getNormal(Uu),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let g=0;g<3;g++){const m=(g+1)%3,x=d[g],A=d[m],T=sl[h[g]],S=sl[h[m]],L=`${x}_${A}`,M=`${A}_${x}`;M in f&&f[M]?(Uu.dot(f[M].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(S.x,S.y,S.z)),f[M]=null):L in f||(f[L]={index0:c[g],index1:c[m],normal:Uu.clone()})}}for(const _ in f)if(f[_]){const{index0:y,index1:v}=f[_];il.fromBufferAttribute(a,y),rl.fromBufferAttribute(a,v),p.push(il.x,il.y,il.z),p.push(rl.x,rl.y,rl.z)}this.setAttribute("position",new Je(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Cs extends Jd{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cs(e.radius,e.detail)}}class oa extends dt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new R,f=new R,p=[],_=[],y=[],v=[];for(let u=0;u<=i;u++){const g=[],m=u/i;let x=0;u===0&&o===0?x=.5/t:u===i&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const T=A/t;d.x=-e*Math.cos(r+T*s)*Math.sin(o+m*a),d.y=e*Math.cos(o+m*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+m*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),v.push(T+x,1-m),g.push(c++)}h.push(g)}for(let u=0;u<i;u++)for(let g=0;g<t;g++){const m=h[u][g+1],x=h[u][g],A=h[u+1][g],T=h[u+1][g+1];(u!==0||o>0)&&p.push(m,x,T),(u!==i-1||l<Math.PI)&&p.push(x,A,T)}this.setIndex(p),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(y,3)),this.setAttribute("uv",new Je(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xi extends dt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new R,d=new R,f=new R;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const y=_/r*s,v=p/i*Math.PI*2;d.x=(e+t*Math.cos(v))*Math.cos(y),d.y=(e+t*Math.cos(v))*Math.sin(y),d.z=t*Math.sin(v),a.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const y=(r+1)*p+_-1,v=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,g=(r+1)*p+_;o.push(y,v,g),o.push(v,u,g)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ef extends dt{constructor(e=new s_(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new ge;let h=new R;const d=[],f=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function y(){for(let m=0;m<t;m++)v(m);v(s===!1?t:0),g(),u()}function v(m){h=e.getPointAt(m/t,h);const x=o.normals[m],A=o.binormals[m];for(let T=0;T<=r;T++){const S=T/r*Math.PI*2,L=Math.sin(S),M=-Math.cos(S);l.x=M*x.x+L*A.x,l.y=M*x.y+L*A.y,l.z=M*x.z+L*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function u(){for(let m=1;m<=t;m++)for(let x=1;x<=r;x++){const A=(r+1)*(m-1)+(x-1),T=(r+1)*m+(x-1),S=(r+1)*m+x,L=(r+1)*(m-1)+x;_.push(A,T,L),_.push(T,S,L)}}function g(){for(let m=0;m<=t;m++)for(let x=0;x<=r;x++)c.x=m/t,c.y=x/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ef(new MA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ou extends to{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fv,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class o_ extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class wA extends o_{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fu=new gt,jm=new R,Xm=new R;class TA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qd,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;jm.setFromMatrixPosition(e.matrixWorld),t.position.copy(jm),Xm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xm),t.updateMatrixWorld(),Fu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class AA extends TA{constructor(){super(new $d(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ym extends o_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new AA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class a_{constructor(e,t,i=0,r=1/0){this.ray=new wc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Yd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Xh(e,this,i,t),i.sort(qm),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Xh(e[r],this,i,t);return i.sort(qm),i}}function qm(n,e){return n.distance-e.distance}function Xh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Xh(r[s],e,t,!0)}}class $m{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bA extends Fo{constructor(e=10,t=10,i=4473924,r=8947848){i=new ke(i),r=new ke(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=f===s?i:r;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const h=new dt;h.setAttribute("position",new Je(l,3)),h.setAttribute("color",new Je(c,3));const d=new Ki({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class CA extends Fo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new dt;r.setAttribute("position",new Je(t,3)),r.setAttribute("color",new Je(i,3));const s=new Ki({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new ke,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);const Zm={type:"change"},ku={type:"start"},Km={type:"end"},ol=new wc,Qm=new oi,RA=Math.cos(70*hn.DEG2RAD);class PA extends jr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ce),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Zm),i.update(),s=r.NONE},this.update=function(){const P=new R,oe=new Vt().setFromUnitVectors(e.up,new R(0,1,0)),Ee=oe.clone().invert(),ve=new R,ne=new Vt,D=new R,ae=2*Math.PI;return function(Pe=null){const be=i.object.position;P.copy(be).sub(i.target),P.applyQuaternion(oe),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&V(w(Pe)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let $e=i.minAzimuthAngle,Ze=i.maxAzimuthAngle;isFinite($e)&&isFinite(Ze)&&($e<-Math.PI?$e+=ae:$e>Math.PI&&($e-=ae),Ze<-Math.PI?Ze+=ae:Ze>Math.PI&&(Ze-=ae),$e<=Ze?a.theta=Math.max($e,Math.min(Ze,a.theta)):a.theta=a.theta>($e+Ze)/2?Math.max($e,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?a.radius=B(a.radius):a.radius=B(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(Ee),be.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let _t=!1;if(i.zoomToCursor&&T){let St=null;if(i.object.isPerspectiveCamera){const Qe=P.length();St=B(Qe*c);const Tt=Qe-St;i.object.position.addScaledVector(x,Tt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Qe=new R(A.x,A.y,0);Qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),_t=!0;const Tt=new R(A.x,A.y,0);Tt.unproject(i.object),i.object.position.sub(Tt).add(Qe),i.object.updateMatrixWorld(),St=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;St!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(St).add(i.object.position):(ol.origin.copy(i.object.position),ol.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ol.direction))<RA?e.lookAt(i.target):(Qm.setFromNormalAndCoplanarPoint(i.object.up,i.target),ol.intersectPlane(Qm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),_t=!0);return c=1,T=!1,_t||ve.distanceToSquared(i.object.position)>o||8*(1-ne.dot(i.object.quaternion))>o||D.distanceToSquared(i.target)>0?(i.dispatchEvent(Zm),ve.copy(i.object.position),ne.copy(i.object.quaternion),D.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",et),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",H),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",H),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ce),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new $m,l=new $m;let c=1;const h=new R,d=new ge,f=new ge,p=new ge,_=new ge,y=new ge,v=new ge,u=new ge,g=new ge,m=new ge,x=new R,A=new ge;let T=!1;const S=[],L={};let M=!1;function w(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function z(P){const oe=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*oe)}function V(P){l.theta-=P}function J(P){l.phi-=P}const I=function(){const P=new R;return function(Ee,ve){P.setFromMatrixColumn(ve,0),P.multiplyScalar(-Ee),h.add(P)}}(),k=function(){const P=new R;return function(Ee,ve){i.screenSpacePanning===!0?P.setFromMatrixColumn(ve,1):(P.setFromMatrixColumn(ve,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Ee),h.add(P)}}(),X=function(){const P=new R;return function(Ee,ve){const ne=i.domElement;if(i.object.isPerspectiveCamera){const D=i.object.position;P.copy(D).sub(i.target);let ae=P.length();ae*=Math.tan(i.object.fov/2*Math.PI/180),I(2*Ee*ae/ne.clientHeight,i.object.matrix),k(2*ve*ae/ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(Ee*(i.object.right-i.object.left)/i.object.zoom/ne.clientWidth,i.object.matrix),k(ve*(i.object.top-i.object.bottom)/i.object.zoom/ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(P,oe){if(!i.zoomToCursor)return;T=!0;const Ee=i.domElement.getBoundingClientRect(),ve=P-Ee.left,ne=oe-Ee.top,D=Ee.width,ae=Ee.height;A.x=ve/D*2-1,A.y=-(ne/ae)*2+1,x.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function B(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function Z(P){d.set(P.clientX,P.clientY)}function Q(P){O(P.clientX,P.clientX),u.set(P.clientX,P.clientY)}function q(P){_.set(P.clientX,P.clientY)}function K(P){f.set(P.clientX,P.clientY),p.subVectors(f,d).multiplyScalar(i.rotateSpeed);const oe=i.domElement;V(2*Math.PI*p.x/oe.clientHeight),J(2*Math.PI*p.y/oe.clientHeight),d.copy(f),i.update()}function ce(P){g.set(P.clientX,P.clientY),m.subVectors(g,u),m.y>0?$(z(m.y)):m.y<0&&N(z(m.y)),u.copy(g),i.update()}function ye(P){y.set(P.clientX,P.clientY),v.subVectors(y,_).multiplyScalar(i.panSpeed),X(v.x,v.y),_.copy(y),i.update()}function xe(P){O(P.clientX,P.clientY),P.deltaY<0?N(z(P.deltaY)):P.deltaY>0&&$(z(P.deltaY)),i.update()}function Ue(P){let oe=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?J(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),oe=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?J(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),oe=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),oe=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),oe=!0;break}oe&&(P.preventDefault(),i.update())}function Oe(P){if(S.length===1)d.set(P.pageX,P.pageY);else{const oe=fe(P),Ee=.5*(P.pageX+oe.x),ve=.5*(P.pageY+oe.y);d.set(Ee,ve)}}function Re(P){if(S.length===1)_.set(P.pageX,P.pageY);else{const oe=fe(P),Ee=.5*(P.pageX+oe.x),ve=.5*(P.pageY+oe.y);_.set(Ee,ve)}}function qe(P){const oe=fe(P),Ee=P.pageX-oe.x,ve=P.pageY-oe.y,ne=Math.sqrt(Ee*Ee+ve*ve);u.set(0,ne)}function G(P){i.enableZoom&&qe(P),i.enablePan&&Re(P)}function Bt(P){i.enableZoom&&qe(P),i.enableRotate&&Oe(P)}function Ae(P){if(S.length==1)f.set(P.pageX,P.pageY);else{const Ee=fe(P),ve=.5*(P.pageX+Ee.x),ne=.5*(P.pageY+Ee.y);f.set(ve,ne)}p.subVectors(f,d).multiplyScalar(i.rotateSpeed);const oe=i.domElement;V(2*Math.PI*p.x/oe.clientHeight),J(2*Math.PI*p.y/oe.clientHeight),d.copy(f)}function De(P){if(S.length===1)y.set(P.pageX,P.pageY);else{const oe=fe(P),Ee=.5*(P.pageX+oe.x),ve=.5*(P.pageY+oe.y);y.set(Ee,ve)}v.subVectors(y,_).multiplyScalar(i.panSpeed),X(v.x,v.y),_.copy(y)}function Se(P){const oe=fe(P),Ee=P.pageX-oe.x,ve=P.pageY-oe.y,ne=Math.sqrt(Ee*Ee+ve*ve);g.set(0,ne),m.set(0,Math.pow(g.y/u.y,i.zoomSpeed)),$(m.y),u.copy(g);const D=(P.pageX+oe.x)*.5,ae=(P.pageY+oe.y)*.5;O(D,ae)}function ot(P){i.enableZoom&&Se(P),i.enablePan&&De(P)}function ze(P){i.enableZoom&&Se(P),i.enableRotate&&Ae(P)}function C(P){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",E),i.domElement.addEventListener("pointerup",H)),Ve(P),P.pointerType==="touch"?Be(P):re(P))}function E(P){i.enabled!==!1&&(P.pointerType==="touch"?ee(P):te(P))}function H(P){Ie(P),S.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",H)),i.dispatchEvent(Km),s=r.NONE}function re(P){let oe;switch(P.button){case 0:oe=i.mouseButtons.LEFT;break;case 1:oe=i.mouseButtons.MIDDLE;break;case 2:oe=i.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case Gi.DOLLY:if(i.enableZoom===!1)return;Q(P),s=r.DOLLY;break;case Gi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;q(P),s=r.PAN}else{if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}break;case Gi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}else{if(i.enablePan===!1)return;q(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ku)}function te(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;K(P);break;case r.DOLLY:if(i.enableZoom===!1)return;ce(P);break;case r.PAN:if(i.enablePan===!1)return;ye(P);break}}function se(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(ku),xe(Me(P)),i.dispatchEvent(Km))}function Me(P){const oe=P.deltaMode,Ee={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(oe){case 1:Ee.deltaY*=16;break;case 2:Ee.deltaY*=100;break}return P.ctrlKey&&!M&&(Ee.deltaY*=10),Ee}function he(P){P.key==="Control"&&(M=!0,document.addEventListener("keyup",_e,{passive:!0,capture:!0}))}function _e(P){P.key==="Control"&&(M=!1,document.removeEventListener("keyup",_e,{passive:!0,capture:!0}))}function Ce(P){i.enabled===!1||i.enablePan===!1||Ue(P)}function Be(P){switch(Te(P),S.length){case 1:switch(i.touches.ONE){case Vi.ROTATE:if(i.enableRotate===!1)return;Oe(P),s=r.TOUCH_ROTATE;break;case Vi.PAN:if(i.enablePan===!1)return;Re(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Vi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;G(P),s=r.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Bt(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ku)}function ee(P){switch(Te(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ae(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;De(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ot(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ze(P),i.update();break;default:s=r.NONE}}function et(P){i.enabled!==!1&&P.preventDefault()}function Ve(P){S.push(P.pointerId)}function Ie(P){delete L[P.pointerId];for(let oe=0;oe<S.length;oe++)if(S[oe]==P.pointerId){S.splice(oe,1);return}}function Te(P){let oe=L[P.pointerId];oe===void 0&&(oe=new ge,L[P.pointerId]=oe),oe.set(P.pageX,P.pageY)}function fe(P){const oe=P.pointerId===S[0]?S[1]:S[0];return L[oe]}i.domElement.addEventListener("contextmenu",et),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",H),i.domElement.addEventListener("wheel",se,{passive:!1}),document.addEventListener("keydown",he,{passive:!0,capture:!0}),this.update()}}const Sr=new a_,Jt=new R,ki=new R,ut=new Vt,Jm={X:new R(1,0,0),Y:new R(0,1,0),Z:new R(0,0,1)},zu={type:"change"},eg={type:"mouseDown"},tg={type:"mouseUp",mode:null},ng={type:"objectChange"};class LA extends wt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const i=new FA;this._gizmo=i,this.add(i);const r=new kA;this._plane=r,this.add(r);const s=this;function o(g,m){let x=m;Object.defineProperty(s,g,{get:function(){return x!==void 0?x:m},set:function(A){x!==A&&(x=A,r[g]=A,i[g]=A,s.dispatchEvent({type:g+"-changed",value:A}),s.dispatchEvent(zu))}}),s[g]=m,r[g]=m,i[g]=m}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new R,l=new R,c=new Vt,h=new Vt,d=new R,f=new Vt,p=new R,_=new R,y=new R,v=0,u=new R;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",h),o("cameraPosition",d),o("cameraQuaternion",f),o("pointStart",p),o("pointEnd",_),o("rotationAxis",y),o("rotationAngle",v),o("eye",u),this._offset=new R,this._startNorm=new R,this._endNorm=new R,this._cameraScale=new R,this._parentPosition=new R,this._parentQuaternion=new Vt,this._parentQuaternionInv=new Vt,this._parentScale=new R,this._worldScaleStart=new R,this._worldQuaternionInv=new Vt,this._worldScale=new R,this._positionStart=new R,this._quaternionStart=new Vt,this._scaleStart=new R,this._getPointer=DA.bind(this),this._onPointerDown=NA.bind(this),this._onPointerHover=IA.bind(this),this._onPointerMove=UA.bind(this),this._onPointerUp=OA.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;Sr.setFromCamera(e,this.camera);const t=Bu(this._gizmo.picker[this.mode],Sr);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){Sr.setFromCamera(e,this.camera);const t=Bu(this._plane,Sr,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,eg.mode=this.mode,this.dispatchEvent(eg)}}pointerMove(e){const t=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e.button!==-1)return;Sr.setFromCamera(e,this.camera);const o=Bu(this._plane,Sr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(ut.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Jt.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Jt.setFromMatrixPosition(r.parent.matrixWorld))));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ki.set(a,a,a)}else Jt.copy(this.pointStart),ki.copy(this.pointEnd),Jt.applyQuaternion(this._worldQuaternionInv),ki.applyQuaternion(this._worldQuaternionInv),ki.divide(Jt),t.search("X")===-1&&(ki.x=1),t.search("Y")===-1&&(ki.y=1),t.search("Z")===-1&&(ki.z=1);r.scale.copy(this._scaleStart).multiply(ki),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Jt.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Jt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Jm[t]),Jt.copy(Jm[t]),s==="local"&&Jt.applyQuaternion(this.worldQuaternion),Jt.cross(this.eye),Jt.length()===0?l=!0:this.rotationAngle=this._offset.dot(Jt.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(ut.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(ut.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(zu),this.dispatchEvent(ng)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(tg.mode=this.mode,this.dispatchEvent(tg)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(zu),this.dispatchEvent(ng),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Sr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function DA(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function IA(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function NA(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function UA(n){this.enabled&&this.pointerMove(this._getPointer(n))}function OA(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function Bu(n,e,t){const i=e.intersectObject(n,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||t)return i[r];return!1}const al=new da,it=new R(0,1,0),ig=new R(0,0,0),rg=new gt,ll=new Vt,Al=new Vt,ri=new R,sg=new gt,wo=new R(1,0,0),Tr=new R(0,1,0),To=new R(0,0,1),cl=new R,vo=new R,_o=new R;class FA extends wt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new fa({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Ki({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const h=e.clone();h.color.setHex(255),h.opacity=.5;const d=e.clone();d.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25,e.clone().color.setHex(16776960);const _=e.clone();_.color.setHex(7895160);const y=new Ht(0,.04,.1,12);y.translate(0,.05,0);const v=new bt(.08,.08,.08);v.translate(0,.04,0);const u=new dt;u.setAttribute("position",new Je([0,0,0,1,0,0],3));const g=new Ht(.0075,.0075,.5,3);g.translate(0,.25,0);function m(k,X){const $=new Xi(k,.0075,3,64,X*Math.PI*2);return $.rotateY(Math.PI/2),$.rotateX(Math.PI/2),$}function x(){const k=new dt;return k.setAttribute("position",new Je([0,0,0,1,1,1],3)),k}const A={X:[[new de(y,s),[.5,0,0],[0,0,-Math.PI/2]],[new de(y,s),[-.5,0,0],[0,0,Math.PI/2]],[new de(g,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new de(y,o),[0,.5,0]],[new de(y,o),[0,-.5,0],[Math.PI,0,0]],[new de(g,o)]],Z:[[new de(y,a),[0,0,.5],[Math.PI/2,0,0]],[new de(y,a),[0,0,-.5],[-Math.PI/2,0,0]],[new de(g,a),null,[Math.PI/2,0,0]]],XYZ:[[new de(new Cs(.1,0),d.clone()),[0,0,0]]],XY:[[new de(new bt(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new de(new bt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new bt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},T={X:[[new de(new Ht(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new Ht(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new Ht(.2,0,.6,4),i),[0,.3,0]],[new de(new Ht(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new Ht(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new Ht(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new de(new Cs(.2,0),i)]],XY:[[new de(new bt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new bt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new bt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},S={START:[[new de(new Cs(.01,2),r),null,null,null,"helper"]],END:[[new de(new Cs(.01,2),r),null,null,null,"helper"]],DELTA:[[new En(x(),r),null,null,null,"helper"]],X:[[new En(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new En(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new En(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},L={XYZE:[[new de(m(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new de(m(.5,.5),s)]],Y:[[new de(m(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new de(m(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new de(m(.75,1),f),null,[0,Math.PI/2,0]]]},M={AXIS:[[new En(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},w={XYZE:[[new de(new oa(.25,10,8),i)]],X:[[new de(new Xi(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new de(new Xi(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new de(new Xi(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new de(new Xi(.75,.1,2,24),i)]]},z={X:[[new de(v,s),[.5,0,0],[0,0,-Math.PI/2]],[new de(g,s),[0,0,0],[0,0,-Math.PI/2]],[new de(v,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new de(v,o),[0,.5,0]],[new de(g,o)],[new de(v,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new de(v,a),[0,0,.5],[Math.PI/2,0,0]],[new de(g,a),[0,0,0],[Math.PI/2,0,0]],[new de(v,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new de(new bt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new de(new bt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new bt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new bt(.1,.1,.1),d.clone())]]},V={X:[[new de(new Ht(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new Ht(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new Ht(.2,0,.6,4),i),[0,.3,0]],[new de(new Ht(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new Ht(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new Ht(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new de(new bt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new bt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new bt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new bt(.2,.2,.2),i),[0,0,0]]]},J={X:[[new En(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new En(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new En(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function I(k){const X=new wt;for(const $ in k)for(let N=k[$].length;N--;){const O=k[$][N][0].clone(),B=k[$][N][1],Z=k[$][N][2],Q=k[$][N][3],q=k[$][N][4];O.name=$,O.tag=q,B&&O.position.set(B[0],B[1],B[2]),Z&&O.rotation.set(Z[0],Z[1],Z[2]),Q&&O.scale.set(Q[0],Q[1],Q[2]),O.updateMatrix();const K=O.geometry.clone();K.applyMatrix4(O.matrix),O.geometry=K,O.renderOrder=1/0,O.position.set(0,0,0),O.rotation.set(0,0,0),O.scale.set(1,1,1),X.add(O)}return X}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=I(A)),this.add(this.gizmo.rotate=I(L)),this.add(this.gizmo.scale=I(z)),this.add(this.picker.translate=I(T)),this.add(this.picker.rotate=I(w)),this.add(this.picker.scale=I(V)),this.add(this.helper.translate=I(S)),this.add(this.helper.rotate=I(M)),this.add(this.helper.scale=I(J)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Al;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(ut.setFromEuler(al.set(0,0,0)),o.quaternion.copy(i).multiply(ut),Math.abs(it.copy(wo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(ut.setFromEuler(al.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(ut),Math.abs(it.copy(Tr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(ut.setFromEuler(al.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(ut),Math.abs(it.copy(To).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(ut.setFromEuler(al.set(0,Math.PI/2,0)),it.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(rg.lookAt(ig,it,Tr)),o.quaternion.multiply(ut),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Jt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Jt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Jt),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(it.copy(wo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(it.copy(Tr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(it.copy(To).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(it.copy(To).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(it.copy(wo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(it.copy(Tr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(ll.copy(i),it.copy(this.eye).applyQuaternion(ut.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(rg.lookAt(this.eye,ig,Tr)),o.name==="X"&&(ut.setFromAxisAngle(wo,Math.atan2(-it.y,it.z)),ut.multiplyQuaternions(ll,ut),o.quaternion.copy(ut)),o.name==="Y"&&(ut.setFromAxisAngle(Tr,Math.atan2(it.x,it.z)),ut.multiplyQuaternions(ll,ut),o.quaternion.copy(ut)),o.name==="Z"&&(ut.setFromAxisAngle(To,Math.atan2(it.y,it.x)),ut.multiplyQuaternions(ll,ut),o.quaternion.copy(ut))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class kA extends de{constructor(){super(new $s(1e5,1e5,2,2),new fa({visible:!1,wireframe:!0,side:kn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),cl.copy(wo).applyQuaternion(t==="local"?this.worldQuaternion:Al),vo.copy(Tr).applyQuaternion(t==="local"?this.worldQuaternion:Al),_o.copy(To).applyQuaternion(t==="local"?this.worldQuaternion:Al),it.copy(vo),this.mode){case"translate":case"scale":switch(this.axis){case"X":it.copy(this.eye).cross(cl),ri.copy(cl).cross(it);break;case"Y":it.copy(this.eye).cross(vo),ri.copy(vo).cross(it);break;case"Z":it.copy(this.eye).cross(_o),ri.copy(_o).cross(it);break;case"XY":ri.copy(_o);break;case"YZ":ri.copy(cl);break;case"XZ":it.copy(_o),ri.copy(vo);break;case"XYZ":case"E":ri.set(0,0,0);break}break;case"rotate":default:ri.set(0,0,0)}ri.length()===0?this.quaternion.copy(this.cameraQuaternion):(sg.lookAt(Jt.set(0,0,0),ri,it),this.quaternion.setFromRotationMatrix(sg)),super.updateMatrixWorld(e)}}const zA={currentTool:"pencil",activeSurface:null,mirrorMode:!1,brushSettings:{color:"#22252e",size:12,opacity:1,hardness:.8,pressureSensitivity:.6,stabilization:.35},selectedObject:null,layers:[{id:"layer-0",name:"Capa 1",visible:!0,locked:!1,opacity:1}],activeLayerId:"layer-0",gizmoMode:"translate"};let sn=zA;const Yh=new Set;let BA=1;const tf={setCurrentTool:n=>Sn({currentTool:n}),setActiveSurface:n=>Sn({activeSurface:n}),setMirrorMode:n=>Sn({mirrorMode:n}),setBrushSettings:n=>Sn({brushSettings:n}),setSelectedObject:n=>Sn({selectedObject:n}),setGizmoMode:n=>Sn({gizmoMode:n}),addLayer:()=>{const n=`layer-${BA++}`,e={id:n,name:`Capa ${sn.layers.length+1}`,visible:!0,locked:!1,opacity:1};Sn({layers:[...sn.layers,e],activeLayerId:n})},removeLayer:n=>{if(sn.layers.length<=1)return;const e=sn.layers.filter(i=>i.id!==n),t=sn.activeLayerId===n?e[e.length-1].id:sn.activeLayerId;Sn({layers:e,activeLayerId:t})},setActiveLayer:n=>Sn({activeLayerId:n}),toggleLayerVisibility:n=>Sn({layers:sn.layers.map(e=>e.id===n?{...e,visible:!e.visible}:e)}),toggleLayerLock:n=>Sn({layers:sn.layers.map(e=>e.id===n?{...e,locked:!e.locked}:e)}),renameLayer:(n,e)=>Sn({layers:sn.layers.map(t=>t.id===n?{...t,name:e}:t)}),setLayerOpacity:(n,e)=>Sn({layers:sn.layers.map(t=>t.id===n?{...t,opacity:Math.max(0,Math.min(1,e))}:t)})};let l_={...sn,...tf};function Sn(n){sn={...sn,...n},l_={...sn,...tf},Yh.forEach(e=>e())}function c_(n){return Yh.add(n),()=>{Yh.delete(n)}}function og(){return l_}function nf(){return rt.useSyncExternalStore(c_,og,og)}const zi={getState:()=>sn,subscribe:c_,...tf},ul=.012,HA=2.5,GA=6,VA=4,cs="http://www.w3.org/2000/svg",Qt=class Qt{constructor(){this.raycaster=new a_,this.pointer=new ge,this.surfaces=[],this.strokes=[],this.guides=[],this.activeGuide=null,this.selectedGuide=null,this.selected=new Set,this.fallbackPlane=new oi(new R(0,0,1),0),this.view="persp",this.orthoSize=VA,this.mode="idle",this.current=null,this.downScreen=new ge,this.lastMoveWorld=new R,this.moveStart=new Map,this.lassoPts=[],this.showAxes=!1,this.editingStroke=null,this.pointHandles=[],this.dragPointIndex=-1,this.dragPointStart=new R,this.gizmoTarget=null,this.gizmoDragStart=new R,this.clipboard=[],this.smoothed=null,this.undoStack=[],this.redoStack=[],this.raf=0,this.seq=0,this.disposed=!1,this.tool="pencil",this.brush={color:"#22252e",size:12,opacity:1,hardness:.8,pressureSensitivity:.6,stabilization:.35},this.mirror=!1,this.theme="light",this.lastSurfaceKey="",this.activeSurfaceId=null,this.onPointerDown=e=>{var t;if(!(e.button!==0||e.pointerType==="touch")){if(this.setPointerFromEvent(e),this.updateCursor(e),this.downScreen.set(...this.screenOf(e)),this.tool==="pencil"||this.tool==="guide")this.beginDraw(e);else if(this.tool==="move"){if((t=this.gizmo)!=null&&t.axis)return;const i=this.pickStroke();if(i)this.selected.has(i)||this.setSelection([i]),this.beginMove();else{const r=this.pickGuide();r?this.selectGuide(r):(this.selectGuide(null),this.beginLasso(e))}}else if(this.tool==="select")this.onSelectPointerDown(e);else if(this.tool==="eraser")this.beginLasso(e);else if(this.tool==="scissors"){const i=this.pickCutPoint();i&&this.cutStroke(i.rec,i.index)}}},this.onPointerMove=e=>{this.updateCursor(e),this.setPointerFromEvent(e),this.mode==="draw"?this.moveDraw(e):this.mode==="move"?this.moveDrag(e):this.mode==="lasso"?this.moveLasso(e):this.mode==="point-drag"&&this.movePointDrag()},this.onPointerLeave=()=>{this.mode==="idle"&&(this.cursorEl.style.display="none")},this.onPointerUp=e=>{this.mode==="draw"?this.endDraw(e):this.mode==="move"?this.endMove():this.mode==="lasso"?this.endLasso(e):this.mode==="point-drag"&&this.endPointDrag(),this.mode="idle",this.controls.enabled=!0;try{this.canvas.releasePointerCapture(e.pointerId)}catch{}},this.onKeyDown=e=>{const t=e.ctrlKey||e.metaKey,i=document.activeElement,r=i&&["INPUT","TEXTAREA","SELECT"].includes(i.tagName);if(!t&&!e.altKey&&!r&&Qt.TOOL_KEYS[e.key.toLowerCase()]){e.preventDefault(),zi.setCurrentTool(Qt.TOOL_KEYS[e.key.toLowerCase()]);return}t&&e.key.toLowerCase()==="z"?(e.preventDefault(),e.shiftKey||e.altKey?this.redo():this.undo()):t&&e.key.toLowerCase()==="y"?(e.preventDefault(),this.redo()):e.key==="Delete"||e.key==="Backspace"?this.selected.size&&(e.preventDefault(),this.deleteSelection()):t&&e.key.toLowerCase()==="c"?this.selected.size&&(e.preventDefault(),this.copySelection()):t&&e.key.toLowerCase()==="v"?this.clipboard.length&&(e.preventDefault(),this.pasteClipboard()):t&&e.key.toLowerCase()==="d"?this.selectedGuide&&(e.preventDefault(),this.duplicateGuide(this.selectedGuide)):e.key==="Escape"&&(this.setSelection([]),this.selectGuide(null),this.clearPointEdit())},this.animate=()=>{this.disposed||(this.raf=requestAnimationFrame(this.animate),this.resize(),this.controls.update(),this.renderer.render(this.scene,this.camera),this.showAxes&&this.updateVPOverlay())}}mount(e,t){this.canvas=e,this.container=t,this.renderer=new n_({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Ot,this.renderer.toneMapping=bv,this.renderer.toneMappingExposure=1.05,this.scene=new aA,this.perspCamera=new Fn(45,1,.05,500),this.perspCamera.position.set(0,1.2,6),this.camera=this.perspCamera,this.makeControls(),this.controls.target.set(0,.6,0),this.buildEnvironment(),this.surfacesGroup=new Dn,this.guidesGroup=new Dn,this.strokesGroup=new Dn,this.handlesGroup=new Dn,this.scene.add(this.surfacesGroup,this.guidesGroup,this.strokesGroup,this.handlesGroup),this.axesHelper=new CA(3),this.axesHelper.visible=!1,this.scene.add(this.axesHelper),this.gizmo=new LA(this.camera,this.canvas),this.gizmo.setMode("translate"),this.gizmo.setSize(.85),this.gizmo.detach(),this.gizmo.addEventListener("dragging-changed",i=>{if(this.controls.enabled=!i.value,i.value)this.gizmoTarget=this.gizmo.object??null,this.gizmoTarget&&this.gizmoDragStart.copy(this.gizmoTarget.position);else if(this.gizmoTarget){const r=this.gizmoTarget,s=this.gizmoDragStart.clone(),o=r.position.clone();this.gizmoTarget=null,s.distanceToSquared(o)>1e-8&&this.pushCmd({undo:()=>r.position.copy(s),redo:()=>r.position.copy(o)})}}),this.scene.add(this.gizmo),this.vpEl=document.createElementNS(cs,"svg"),Object.assign(this.vpEl.style,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"20",display:"none"}),t.appendChild(this.vpEl),this.cursorEl=document.createElement("div"),Object.assign(this.cursorEl.style,{position:"absolute",left:"0",top:"0",borderRadius:"50%",border:"1.5px solid #333",transform:"translate(-50%, -50%)",pointerEvents:"none",display:"none",zIndex:"50",mixBlendMode:"difference"}),t.appendChild(this.cursorEl),this.lassoEl=document.createElementNS(cs,"svg"),Object.assign(this.lassoEl.style,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"40",display:"none"}),this.lassoPoly=document.createElementNS(cs,"polygon"),this.lassoPoly.setAttribute("fill","rgba(76,155,255,0.12)"),this.lassoPoly.setAttribute("stroke","#4c9bff"),this.lassoPoly.setAttribute("stroke-width","1.5"),this.lassoPoly.setAttribute("stroke-dasharray","5 4"),this.lassoEl.appendChild(this.lassoPoly),t.appendChild(this.lassoEl),this.syncFromStore(zi.getState()),this.unsub=zi.subscribe(()=>this.syncFromStore(zi.getState())),e.style.cursor="none",e.style.touchAction="none",e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerleave",this.onPointerLeave),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("keydown",this.onKeyDown),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize(),this.setTheme(this.theme),this.animate()}dispose(){var e,t,i,r,s,o,a,l,c,h,d,f;this.disposed=!0,cancelAnimationFrame(this.raf),(e=this.unsub)==null||e.call(this),(t=this.ro)==null||t.disconnect(),(i=this.canvas)==null||i.removeEventListener("pointerdown",this.onPointerDown),(r=this.canvas)==null||r.removeEventListener("pointermove",this.onPointerMove),(s=this.canvas)==null||s.removeEventListener("pointerleave",this.onPointerLeave),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),(o=this.cursorEl)==null||o.remove(),(a=this.lassoEl)==null||a.remove(),(l=this.vpEl)==null||l.remove(),(c=this.gizmo)==null||c.dispose(),(h=this.controls)==null||h.dispose(),(d=this.scene)==null||d.traverse(p=>this.disposeNode(p)),(f=this.renderer)==null||f.dispose()}makeControls(){var e;(e=this.controls)==null||e.dispose(),this.controls=new PA(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.mouseButtons={LEFT:-1,MIDDLE:Gi.PAN,RIGHT:Gi.ROTATE},this.controls.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.controls.enableRotate=this.view==="persp"}buildEnvironment(){this.scene.add(new wA(16777215,9476522,1.1));const e=new Ym(16777215,1.15);e.position.set(3,6,5),this.scene.add(e);const t=new Ym(12374271,.5);t.position.set(-5,2,-4),this.scene.add(t),this.grid=new bA(20,40,12765394,14146788);const i=this.grid.material;i.transparent=!0,i.opacity=.5,this.scene.add(this.grid)}setTheme(e){this.theme=e;const t=e==="dark";this.scene.fog=t?new Kd(921363,.025):null;const i=this.grid.material,r=this.grid.geometry.getAttribute("color"),s=new ke(t?3817291:12765394),o=new ke(t?2303534:14146788);for(let a=0;a<r.count;a++){const l=a<r.count/2?s:o;r.setXYZ(a,l.r,l.g,l.b)}r.needsUpdate=!0,i.opacity=t?.35:.5,this.cursorEl.style.borderColor=t?"#e6ebf5":"#2a2f3a"}toggleAxes(){return this.showAxes=!this.showAxes,this.axesHelper.visible=this.showAxes,this.updateVPOverlay(),this.showAxes}axesOn(){return this.showAxes}updateVPOverlay(){if(!this.vpEl)return;if(!this.showAxes||this.view!=="persp"){this.vpEl.style.display="none";return}for(this.vpEl.style.display="block";this.vpEl.lastChild;)this.vpEl.removeChild(this.vpEl.lastChild);const e=this.canvas.getBoundingClientRect(),t=e.width||1,i=e.height||1,r=this.camera,s=new R;r.getWorldDirection(s);const o=Math.max(t,i)*3;for(const[a,l]of Qt.VP_AXES){const c=s.dot(a);if(Math.abs(c)>.985)continue;const h=c>=0?a:a.clone().negate(),f=r.position.clone().add(h.clone().multiplyScalar(500)).project(r);if(!isFinite(f.x)||!isFinite(f.y))continue;const p=(f.x+1)/2*t,_=(1-f.y)/2*i;if(Math.abs(p)>t*4||Math.abs(_)>i*4)continue;const y=document.createElementNS(cs,"g"),v=8;for(let g=0;g<v;g++){const m=g/v*Math.PI*2,x=document.createElementNS(cs,"line");x.setAttribute("x1",p.toFixed(1)),x.setAttribute("y1",_.toFixed(1)),x.setAttribute("x2",(p+Math.cos(m)*o).toFixed(1)),x.setAttribute("y2",(_+Math.sin(m)*o).toFixed(1)),x.setAttribute("stroke",l),x.setAttribute("stroke-width","1.4"),x.setAttribute("stroke-opacity","0.4"),y.appendChild(x)}const u=document.createElementNS(cs,"circle");u.setAttribute("cx",p.toFixed(1)),u.setAttribute("cy",_.toFixed(1)),u.setAttribute("r","5"),u.setAttribute("fill",l),y.appendChild(u),this.vpEl.appendChild(y)}}setView(e){const t=this.controls.target.clone(),i=this.camera.position.distanceTo(t)||8;if(e==="persp")this.camera=this.perspCamera;else{const s={front:[0,0,1],back:[0,0,-1],top:[0,1,0],bottom:[0,-1,0],left:[-1,0,0],right:[1,0,0]}[e],o=new $d(-1,1,1,-1,-500,500);o.position.set(t.x+s[0]*i,t.y+s[1]*i,t.z+s[2]*i),(e==="top"||e==="bottom")&&o.up.set(0,0,e==="top"?-1:1),this.camera=o}this.view=e,this.camera.lookAt(t),this.makeControls(),this.controls.target.copy(t),this.applyOrthoFrustum(),this.gizmo&&(this.gizmo.camera=this.camera)}applyOrthoFrustum(){if(this.view==="persp")return;const e=this.camera,t=this.renderer.domElement,i=(t.clientWidth||1)/(t.clientHeight||1);e.left=-this.orthoSize*i,e.right=this.orthoSize*i,e.top=this.orthoSize,e.bottom=-this.orthoSize,e.updateProjectionMatrix()}removeActiveSurface(){if(!this.activeSurfaceId)return;const e=this.surfaces.find(t=>t.id===this.activeSurfaceId);e&&(this.surfacesGroup.remove(e.mesh),e.mesh.traverse(t=>{var s;const i=t;(s=i.geometry)==null||s.dispose();const r=i.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r==null||r.dispose()}),this.surfaces=this.surfaces.filter(t=>t.id!==this.activeSurfaceId)),this.activeSurfaceId=null}addSurface(e){this.removeActiveSurface();const t=e==="plane"?new $s(4,4):this.surfaceGeometry(e,1.4),i=this.makeSurfaceMesh(t);i.position.copy(this.controls.target),e==="plane"&&i.lookAt(this.camera.position);const r={id:`surf-${this.seq++}`,type:e,mesh:i};i.userData.surfaceId=r.id,this.surfacesGroup.add(i),this.surfaces.push(r),this.activeSurfaceId=r.id}makeSurfaceMesh(e){const t=new de(e,new Ou({color:5012432,roughness:.9,metalness:0,transparent:!0,opacity:.08,side:kn,depthWrite:!1}));return t.add(new Fo(new EA(e),new Ki({color:5020671,transparent:!0,opacity:.3}))),t}surfaceGeometry(e,t){switch(e){case"sphere":return new oa(t,48,32);case"cylinder":return new Ht(t,t,t*2,48,1,!0);case"torus":return new Xi(t,t*.35,24,64);default:return new $s(t*2,t*2)}}syncFromStore(e){var r;this.tool==="select"&&e.currentTool!=="select"&&this.clearPointEdit();const t=this.tool!==e.currentTool;this.tool=e.currentTool,this.brush=e.brushSettings,this.mirror=e.mirrorMode;const i=e.activeSurface?e.activeSurface.type:"";i!==this.lastSurfaceKey&&(i?this.addSurface(e.activeSurface.type):this.removeActiveSurface()),this.lastSurfaceKey=i,t&&this.syncGizmo(),(r=this.gizmo)==null||r.setMode(e.gizmoMode||"translate"),this.applyLayerStyles()}setPointerFromEvent(e){const t=this.canvas.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1}screenOf(e){const t=this.canvas.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}updateCursor(e){const[t,i]=this.screenOf(e),r=Math.max(6,this.brush.size);this.cursorEl.style.display="block",this.cursorEl.style.width=`${r}px`,this.cursorEl.style.height=`${r}px`,this.cursorEl.style.left=`${t}px`,this.cursorEl.style.top=`${i}px`}resolveHit(){var r;this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.surfaces.map(s=>s.mesh);if(this.tool!=="guide"&&this.strokesGroup.traverse(s=>{s.isMesh&&e.push(s)}),e.length){const s=this.raycaster.intersectObjects(e,!1);if(s.length){const o=s[0],a=o.face?o.face.normal.clone().transformDirection(o.object.matrixWorld).normalize():new R(0,0,1);return{point:o.point.clone(),normal:a}}}if(this.tool!=="guide"&&((r=this.activeGuide)!=null&&r.plane)){const s=new R;if(this.raycaster.ray.intersectPlane(this.activeGuide.plane,s))return{point:s.clone(),normal:this.activeGuide.plane.normal.clone()}}const t=new R;this.camera.getWorldDirection(t),this.fallbackPlane.setFromNormalAndCoplanarPoint(t.clone().negate(),this.controls.target);const i=new R;return this.raycaster.ray.intersectPlane(this.fallbackPlane,i)?{point:i.clone(),normal:this.fallbackPlane.normal.clone()}:null}pickStroke(){this.raycaster.setFromCamera(this.pointer,this.camera);const e=[],t=s=>s.traverse(o=>{o.isMesh&&e.push(o)});t(this.strokesGroup),t(this.guidesGroup);const i=this.raycaster.intersectObjects(e,!1);if(!i.length)return null;let r=i[0].object;for(;r&&!r.userData.strokeId;)r=r.parent;return r?this.strokes.find(s=>s.id===r.userData.strokeId)??null:null}pickCutPoint(){const e=this.canvas.getBoundingClientRect(),t=(this.pointer.x+1)/2*e.width,i=(1-this.pointer.y)/2*e.height,r=this.camera;let s=null,o=22;for(const a of this.strokes)if(!(a.kind!=="stroke"||a.points.length<3))for(let l=0;l<a.points.length;l++){const c=a.points[l].clone().add(a.object.position).project(r),h=(c.x+1)/2*e.width,d=(1-c.y)/2*e.height,f=Math.hypot(h-t,d-i);f<o&&(o=f,s={rec:a,index:l})}return s}cutStroke(e,t){if(t<=0||t>=e.points.length-1)return;const i=e.points.slice(0,t+1).map(h=>h.clone()),r=e.pressures.slice(0,t+1),s=e.points.slice(t).map(h=>h.clone()),o=e.pressures.slice(t);if(i.length<2||s.length<2)return;const a=(h,d)=>{const f=new Dn;f.position.copy(e.object.position);const p=this.buildTube(h,d);p&&f.add(p);const _={id:`stroke-${this.seq++}`,object:f,points:h,pressures:d,kind:"stroke",layerId:e.layerId,baseOpacity:e.baseOpacity};return f.userData.strokeId=_.id,_},l=a(i,r),c=a(s,o);this.removeStrokeRecord(e),this.addStrokeRecord(l),this.addStrokeRecord(c),this.pushCmd({undo:()=>{this.removeStrokeRecord(l),this.removeStrokeRecord(c),this.addStrokeRecord(e)},redo:()=>{this.removeStrokeRecord(e),this.addStrokeRecord(l),this.addStrokeRecord(c)}})}copySelection(){const e=[...this.selected].filter(t=>t.kind==="stroke");e.length&&(this.clipboard=e.map(t=>({points:t.points.map(i=>i.clone().add(t.object.position)),pressures:[...t.pressures]})))}pasteClipboard(){if(!this.clipboard.length)return;const e=new R(.18,0,.18),t=[];for(const i of this.clipboard){const r=i.points.map(c=>c.clone()),s=[...i.pressures],o=new Dn,a=this.buildTube(r,s);a&&o.add(a),o.position.copy(e);const l={id:`stroke-${this.seq++}`,object:o,points:r,pressures:s,kind:"stroke",layerId:this.activeLayerId(),baseOpacity:1};o.userData.strokeId=l.id,t.push(l)}for(const i of t)this.addStrokeRecord(i);this.setSelection(t),this.pushCmd({undo:()=>t.forEach(i=>this.removeStrokeRecord(i)),redo:()=>t.forEach(i=>this.addStrokeRecord(i))})}samplePressure(e){return e.pointerType!=="pen"?1:hn.clamp(e.pressure||.5,0,1)}findSnapVertex(e,t,i=1/0){const r=this.canvas.getBoundingClientRect(),s=e.clientX-r.left,o=e.clientY-r.top,a=this.camera;let l=null,c=Qt.SNAP_PX;for(const h of this.strokes)for(const d of h.points){const f=d.clone().add(h.object.position);if(t&&f.distanceTo(t)>i)continue;const p=f.clone().project(a),_=(p.x+1)/2*r.width,y=(1-p.y)/2*r.height,v=Math.hypot(_-s,y-o);v<c&&(c=v,l=f)}return l}snapToNearestAxis(e,t){const i=t.clone().sub(e);if(i.lengthSq()<1e-10)return t;const r=i.clone().normalize();let s=Qt.VP_AXES[0][0],o=-1;for(const[l]of Qt.VP_AXES){const c=Math.abs(r.dot(l));c>o&&(o=c,s=l)}const a=i.dot(s);return e.clone().add(s.clone().multiplyScalar(a))}beginDraw(e){const t=this.resolveHit(),i=this.findSnapVertex(e,t==null?void 0:t.point,.8),r=i?{point:i,normal:(t==null?void 0:t.normal)??new R(0,0,1)}:t;if(!r)return;this.canvas.setPointerCapture(e.pointerId),this.mode="draw",this.controls.enabled=!1;const s=this.tool==="guide"?"guide":"stroke",o=this.makePreviewLine(s);this.strokesGroup.add(o);let a;this.mirror&&s==="stroke"&&(a=this.makePreviewLine(s),this.strokesGroup.add(a)),this.smoothed=r.point.clone(),this.current={points:[r.point],pressures:[this.samplePressure(e)],kind:s,line:o,mirrorLine:a,baseNormal:r.normal.clone()},this.updatePreview()}stabilizedPoint(e){const t=hn.clamp(this.brush.stabilization??0,0,1);if(this.smoothed||(this.smoothed=e.clone()),t<=0)return this.smoothed.copy(e),e;const i=hn.lerp(1,.15,t);return this.smoothed.lerp(e,i),this.smoothed}resamplePoints(e,t){if(e.length<2)return{points:e,pressures:t};const i=Qt.RESAMPLE_GAP,r=[e[0].clone()],s=[t[0]];for(let o=1;o<e.length;o++){const a=e[o-1],l=e[o],c=a.distanceTo(l),h=Math.min(40,Math.max(1,Math.ceil(c/i)));for(let d=1;d<=h;d++){const f=d/h;r.push(a.clone().lerp(l,f)),s.push(t[o-1]+(t[o]-t[o-1])*f)}}return{points:r,pressures:s}}refineStroke(e,t){const i=hn.clamp(this.brush.stabilization??0,0,1);if(i<=0||e.length<4)return{points:e,pressures:t};const r=Math.round(hn.lerp(0,3,i));let s=e.map(a=>a.clone()),o=[...t];for(let a=0;a<r;a++){const l=s.map((h,d)=>d===0||d===s.length-1?h.clone():s[d-1].clone().add(h).add(s[d+1]).divideScalar(3)),c=o.map((h,d)=>d===0||d===o.length-1?h:(o[d-1]+h+o[d+1])/3);s=l,o=c}return{points:s,pressures:o}}moveDraw(e){if(!this.current)return;const t=this.resolveHit();if(!t)return;const i=this.current.points,r=this.current.pressures;if(e.altKey&&i.length>=1){const a=i[0],l=this.stabilizedPoint(t.point).clone(),c=this.snapToNearestAxis(a,l);i.length=1,r.length=1,c.distanceTo(a)>=ul&&(i.push(c),r.push(this.samplePressure(e))),this.updatePreview();return}if(e.shiftKey&&i.length>=1){const a=i[0],l=this.stabilizedPoint(t.point).clone();i.length=1,r.length=1,l.distanceTo(a)>=ul&&(i.push(l),r.push(this.samplePressure(e))),this.updatePreview();return}const s=this.stabilizedPoint(t.point).clone(),o=s.distanceTo(i[i.length-1]);o<ul||i.length>=1&&o>HA||(i.push(s),r.push(this.samplePressure(e)),this.updatePreview())}endDraw(e){if((e.ctrlKey||e.metaKey)&&this.current&&this.current.kind==="stroke"&&this.current.points.length>=4){this.beautifyCircle(this.current),this.commitStroke();return}if(this.current&&this.current.points.length>=2&&this.current.kind==="stroke"){const t=this.current.points,i=t[t.length-1],r=this.findSnapVertex(e,i,.6);r&&(t[t.length-1]=r.clone())}this.commitStroke()}beautifyCircle(e){const t=e.points,i=new R;t.forEach(d=>i.add(d)),i.multiplyScalar(1/t.length);const r=new R;for(let d=0;d<t.length;d++){const f=t[d],p=t[(d+1)%t.length];r.x+=(f.y-p.y)*(f.z+p.z),r.y+=(f.z-p.z)*(f.x+p.x),r.z+=(f.x-p.x)*(f.y+p.y)}if(r.lengthSq()<1e-8)return;r.normalize();let s=0;if(t.forEach(d=>s+=d.distanceTo(i)),s/=t.length,s<.001)return;const o=new R(1,0,0);Math.abs(r.dot(o))>.9&&o.set(0,1,0),o.crossVectors(r,o).normalize();const a=new R().crossVectors(r,o).normalize(),l=Math.max(48,t.length),c=[],h=[];for(let d=0;d<=l;d++){const f=d/l*Math.PI*2;c.push(i.clone().addScaledVector(o,s*Math.cos(f)).addScaledVector(a,s*Math.sin(f))),h.push(1)}e.points.length=0,e.points.push(...c),e.pressures.length=0,e.pressures.push(...h)}makePreviewLine(e){const t=new dt,i=new Ki({color:e==="guide"?16753978:new ke(this.brush.color),transparent:!0,opacity:e==="guide"?.95:Math.max(this.brush.opacity,.6)});return new En(t,i)}updatePreview(){var e;this.current&&((e=this.current.line)==null||e.geometry.setFromPoints(this.current.points),this.current.mirrorLine&&this.current.mirrorLine.geometry.setFromPoints(this.mirrored(this.current.points)))}strokeRadius(){return .01+this.brush.size/100*.12}radiusAt(e){const t=this.strokeRadius(),i=hn.clamp(this.brush.pressureSensitivity??0,0,1),r=hn.lerp(1,.15,i);return t*hn.lerp(r,1,hn.clamp(e,0,1))}pressureAtT(e,t){const i=e.length;if(i<2)return e[0]??1;const r=hn.clamp(t,0,1)*(i-1),s=Math.floor(r),o=Math.min(s+1,i-1),a=r-s;return e[s]*(1-a)+e[o]*a}buildTube(e,t){if(e.length<2)return null;const i=new r_(e,!1,"centripetal"),r=10,s=Math.min(Math.max(e.length*6,8),1400),o=new ef(i,s,1,r,!1),a=o.getAttribute("position"),l=r+1,c=s+1;for(let d=0;d<c;d++){const f=d/s,p=i.getUtoTmapping(f,0),_=i.getPoint(p),y=this.radiusAt(this.pressureAtT(t,p));for(let v=0;v<l;v++){const u=d*l+v,g=a.getX(u)-_.x,m=a.getY(u)-_.y,x=a.getZ(u)-_.z;a.setXYZ(u,_.x+g*y,_.y+m*y,_.z+x*y)}}a.needsUpdate=!0,o.computeVertexNormals();const h=new ke(this.brush.color);return new de(o,new Ou({color:h,emissive:h.clone().multiplyScalar(.06),roughness:hn.lerp(.9,.25,this.brush.hardness??.8),metalness:0,transparent:this.brush.opacity<1,opacity:this.brush.opacity}))}buildGuideSurface(e,t){if(e.length<2)return null;const i=new R;this.camera.getWorldDirection(i).normalize();const r=new R;e.forEach(g=>r.add(g)),r.multiplyScalar(1/e.length);let s=(t??i).clone();s.lengthSq()<1e-6&&s.copy(i),s.normalize();const o=new eo().setFromPoints(e),a=hn.clamp(o.getSize(new R).length()*2,5,14),l=e.length,c=[],h=[],d=[],f=[];for(let g=0;g<l;g++){const m=e[g].clone().sub(r),x=m.clone().addScaledVector(s,a),A=m.clone().addScaledVector(s,-a);d.push(x),f.push(A),c.push(x.x,x.y,x.z,A.x,A.y,A.z)}for(let g=0;g<l-1;g++){const m=2*g,x=2*g+1,A=2*(g+1),T=2*(g+1)+1;h.push(m,x,A,A,x,T)}const p=new dt;p.setAttribute("position",new Je(c,3)),p.setIndex(h),p.computeVertexNormals();const _=new de(p,new Ou({color:5020671,roughness:1,metalness:0,transparent:!0,opacity:.09,side:kn,depthWrite:!1}));_.position.copy(r);const y=new Ki({color:5020671,transparent:!0,opacity:.25});_.add(new En(new dt().setFromPoints(d),y)),_.add(new En(new dt().setFromPoints(f),y.clone()));const v=[],u=Math.max(1,Math.floor(l/6));for(let g=0;g<l;g+=u)v.push(d[g],f[g]);return _.add(new Fo(new dt().setFromPoints(v),y.clone())),_.add(new En(new dt().setFromPoints(e.map(g=>g.clone().sub(r))),new Ki({color:16753978}))),_.userData.guidePlane=new oi().setFromNormalAndCoplanarPoint(s,r),_}mirrored(e){return e.map(t=>new R(-t.x,t.y,t.z))}commitStroke(){if(!this.current)return;this.smoothed=null;for(const l of[this.current.line,this.current.mirrorLine])l&&(this.strokesGroup.remove(l),l.geometry.dispose(),l.material.dispose());let{points:e,pressures:t}=this.current;const{kind:i,baseNormal:r}=this.current;if(this.current=null,e.length<2)return;if(i==="guide"){const l=this.buildGuideSurface(e,r);l&&this.setGuide(l);return}({points:e,pressures:t}=this.resamplePoints(e,t)),{points:e,pressures:t}=this.refineStroke(e,t);const s=new Dn,o=this.buildTube(e,t);if(o&&s.add(o),this.mirror){const l=this.buildTube(this.mirrored(e),t);l&&s.add(l)}const a={id:`stroke-${this.seq++}`,object:s,points:e,pressures:t,kind:i,layerId:this.activeLayerId(),baseOpacity:this.brush.opacity};s.userData.strokeId=a.id,this.addStrokeRecord(a),this.pushCmd({undo:()=>this.removeStrokeRecord(a),redo:()=>this.addStrokeRecord(a)})}rebuildStrokeMesh(e){var i,r;for(;e.object.children.length;){const s=e.object.children[0];e.object.remove(s),(i=s.geometry)==null||i.dispose(),(r=s.material)==null||r.dispose()}const t=this.buildTube(e.points,e.pressures);if(t&&e.object.add(t),this.mirror){const s=this.buildTube(this.mirrored(e.points),e.pressures);s&&e.object.add(s)}}addStrokeRecord(e){this.strokesGroup.add(e.object),this.strokes.includes(e)||this.strokes.push(e),this.applyLayerStyles()}removeStrokeRecord(e){var t;this.strokesGroup.remove(e.object),this.strokes=this.strokes.filter(i=>i!==e),this.selected.delete(e),this.editingStroke===e&&this.clearPointEdit(),((t=this.gizmo)==null?void 0:t.object)===e.object&&this.gizmo.detach()}activeLayerId(){return zi.getState().activeLayerId??"layer-0"}applyLayerStyles(){const e=zi.getState().layers,t=new Map(e.map(i=>[i.id,i]));for(const i of this.strokes){const r=t.get(i.layerId),s=r?r.visible:!0,o=r?r.opacity:1;i.object.visible=s,i.object.traverse(a=>{const l=a.material;l&&"opacity"in l&&(l.opacity=i.baseOpacity*o,l.transparent=l.opacity<1,l.needsUpdate=!0)})}}strokesOfLayer(e){return this.strokes.filter(t=>t.layerId===e)}selectLayer(e){this.setSelection(this.strokesOfLayer(e)),this.syncGizmo()}getStrokeColor(e){let t="#22252e";return e.object.traverse(i=>{const r=i.material;r&&r.color&&(t="#"+r.color.getHexString())}),t}paintStroke(e,t){const i=new ke(t);e.object.traverse(r=>{const s=r.material;s&&s.color&&(s.color.copy(i),s.emissive&&s.emissive.copy(i.clone().multiplyScalar(.06)),s.needsUpdate=!0)})}setLayerColor(e,t){const i=this.strokesOfLayer(e);if(!i.length)return;const r=i.map(o=>this.getStrokeColor(o)),s=()=>i.forEach(o=>this.paintStroke(o,t));s(),this.pushCmd({undo:()=>i.forEach((o,a)=>this.paintStroke(o,r[a])),redo:s})}deleteLayer(e){const t=this.strokesOfLayer(e),i=()=>t.forEach(s=>this.removeStrokeRecord(s)),r=()=>t.forEach(s=>this.addStrokeRecord(s));i(),t.length&&this.pushCmd({undo:r,redo:i}),zi.removeLayer(e)}setGuide(e){const t=`guide-${this.seq++}`;e.userData.surfaceId=t,e.userData.guideId=t;const i=e.userData.guidePlane,r={id:t,mesh:e,plane:i},s=()=>{this.guidesGroup.add(e),this.surfaces.push({id:t,type:"loft",mesh:e}),this.guides.push(r),this.activeGuide=r};s(),this.pushCmd({undo:()=>this.detachGuide(r),redo:()=>s()})}detachGuide(e){var t,i,r;this.guidesGroup.remove(e.mesh),this.surfaces=this.surfaces.filter(s=>s.id!==e.id),this.guides=this.guides.filter(s=>s.id!==e.id),((t=this.activeGuide)==null?void 0:t.id)===e.id&&(this.activeGuide=this.guides[this.guides.length-1]??null),((i=this.selectedGuide)==null?void 0:i.id)===e.id&&(this.selectedGuide=null,(r=this.gizmo)==null||r.detach())}deleteGuide(){return this.activeGuide?this.deleteGuideById(this.activeGuide.id):!1}deleteGuideById(e){const t=this.guides.find(i=>i.id===e);return t?(this.detachGuide(t),this.pushCmd({undo:()=>{this.guidesGroup.add(t.mesh),this.surfaces.push({id:t.id,type:"loft",mesh:t.mesh}),this.guides.push(t),this.activeGuide=t},redo:()=>this.detachGuide(t)}),!0):!1}pickGuide(){this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.raycaster.intersectObjects(this.guidesGroup.children,!1);if(!e.length)return null;let t=e[0].object;for(;t&&!t.userData.guideId;)t=t.parent;if(!t)return null;const i=t.userData.guideId;return this.guides.find(r=>r.id===i)??null}hasGuide(){return this.guides.length>0}setGuideOpacity(e){const t=hn.clamp(e,0,1);for(const i of this.guides){i.mesh.material.opacity=t*.08;const r=i.mesh.children.find(s=>s instanceof Fo);r&&(r.material.opacity=t*.25)}}setSelection(e){this.selectedGuide=null;for(const t of this.selected)this.highlight(t,!1);this.selected=new Set(e);for(const t of this.selected)this.highlight(t,!0);this.syncGizmo()}selectGuide(e){this.selectedGuide=e;for(const t of this.selected)this.highlight(t,!1);this.selected=new Set,this.syncGizmo()}duplicateGuide(e){const t=new R(.4,0,.4),i=e.mesh.clone(!0);i.position.add(t),i.traverse(s=>{const o=s;o.material&&(o.material=Array.isArray(o.material)?o.material.map(a=>a.clone()):o.material.clone())});const r=e.mesh.userData.guidePlane;r&&(i.userData.guidePlane=r.clone().translate(t)),this.setGuide(i),this.selectGuide({id:i.userData.guideId,mesh:i})}syncGizmo(){if(this.gizmo){if(this.tool!=="move"){this.gizmo.detach();return}if(this.selected.size===1){this.gizmo.attach([...this.selected][0].object);return}if(this.selectedGuide){this.gizmo.attach(this.selectedGuide.mesh);return}this.gizmo.detach()}}highlight(e,t){e.object.traverse(i=>{const r=i.material;r&&r.emissive&&(r.emissive.set(t?2846719:0),r.emissiveIntensity=t?.9:1,r.needsUpdate=!0)})}selectedCount(){return this.selected.size}deleteSelection(){const e=[...this.selected];if(!e.length)return;const t=()=>{var r,s;for(const o of e)(r=o.object.parent)==null||r.remove(o.object),this.strokes=this.strokes.filter(a=>a!==o),o.kind==="guide"&&(this.surfaces=this.surfaces.filter(a=>a.id!==o.id),((s=this.activeGuide)==null?void 0:s.id)===o.id&&(this.activeGuide=null))},i=()=>{for(const r of e)(r.kind==="guide"?this.guidesGroup:this.strokesGroup).add(r.object),this.strokes.includes(r)||this.strokes.push(r),r.kind==="guide"&&(this.surfaces.push({id:r.id,type:"loft",mesh:r.object}),this.activeGuide={id:r.id,mesh:r.object})};t(),this.setSelection([]),this.pushCmd({undo:i,redo:t})}beginMove(){this.mode="move",this.controls.enabled=!1;const e=this.resolveHit();this.lastMoveWorld.copy(e?e.point:this.controls.target),this.moveStart.clear();for(const t of this.selected)this.moveStart.set(t.object,t.object.position.clone())}moveDrag(e){const t=this.resolveHit();if(!t)return;const i=t.point.clone().sub(this.lastMoveWorld);for(const r of this.selected)r.object.position.add(i);this.lastMoveWorld.copy(t.point)}endMove(){const e=[...this.selected],t=e.map(i=>i.object.position.clone().sub(this.moveStart.get(i.object)??i.object.position));t.every(i=>i.lengthSq()<1e-8)||this.pushCmd({undo:()=>e.forEach((i,r)=>i.object.position.sub(t[r])),redo:()=>e.forEach((i,r)=>i.object.position.add(t[r]))})}makeHandleMesh(){const e=new oa(Qt.HANDLE_RADIUS,16,12),t=new fa({color:2846719,depthTest:!1}),i=new de(e,t);return i.renderOrder=999,i}showPointHandles(e){this.clearPointEdit(),this.editingStroke=e,this.pointHandles=e.points.map((t,i)=>{const r=this.makeHandleMesh();return r.position.copy(t).add(e.object.position),r.userData.pointIndex=i,this.handlesGroup.add(r),r})}clearPointEdit(){for(const e of this.pointHandles)this.handlesGroup.remove(e),e.geometry.dispose(),e.material.dispose();this.pointHandles=[],this.editingStroke=null,this.dragPointIndex=-1}pickHandle(){this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.raycaster.intersectObjects(this.pointHandles,!1);return e.length?e[0].object.userData.pointIndex??-1:-1}onSelectPointerDown(e){const t=this.editingStroke?this.pickHandle():-1;if(t>=0&&this.editingStroke){this.canvas.setPointerCapture(e.pointerId),this.mode="point-drag",this.controls.enabled=!1,this.dragPointIndex=t,this.dragPointStart.copy(this.editingStroke.points[t]);return}const i=this.pickStroke();i&&i.kind==="stroke"?this.showPointHandles(i):this.clearPointEdit()}movePointDrag(){if(!this.editingStroke||this.dragPointIndex<0)return;const e=this.resolveHit();if(!e)return;const t=e.point.clone().sub(this.editingStroke.object.position);this.editingStroke.points[this.dragPointIndex].copy(t),this.rebuildStrokeMesh(this.editingStroke);const i=this.pointHandles[this.dragPointIndex];i&&i.position.copy(t).add(this.editingStroke.object.position)}endPointDrag(){if(!this.editingStroke||this.dragPointIndex<0)return;const e=this.editingStroke,t=this.dragPointIndex,i=this.dragPointStart.clone(),r=e.points[t].clone();this.dragPointIndex=-1,!(i.distanceToSquared(r)<1e-8)&&this.pushCmd({undo:()=>{var s;e.points[t].copy(i),this.rebuildStrokeMesh(e),this.editingStroke===e&&((s=this.pointHandles[t])==null||s.position.copy(i).add(e.object.position))},redo:()=>{var s;e.points[t].copy(r),this.rebuildStrokeMesh(e),this.editingStroke===e&&((s=this.pointHandles[t])==null||s.position.copy(r).add(e.object.position))}})}beginLasso(e){this.mode="lasso",this.controls.enabled=!1,this.canvas.setPointerCapture(e.pointerId),this.lassoPts=[this.screenOf(e)],this.lassoEl.style.display="block",this.lassoPoly.setAttribute("points","")}moveLasso(e){this.lassoPts.push(this.screenOf(e)),this.lassoPoly.setAttribute("points",this.lassoPts.map(t=>t.join(",")).join(" "))}endLasso(e){if(this.lassoEl.style.display="none",Math.hypot(...this.screenOf(e).map((r,s)=>r-[this.downScreen.x,this.downScreen.y][s]))<GA){const r=this.pickStroke();if(this.tool==="eraser")if(r)this.setSelection([r]),this.deleteSelection();else{const s=this.pickGuide();s&&this.deleteGuideById(s.id)}else this.setSelection(r?[r]:[]);return}const i=this.strokesInLasso();this.tool==="eraser"?(this.setSelection(i),this.deleteSelection()):this.setSelection(i)}strokesInLasso(){if(this.lassoPts.length<3)return[];const e=this.canvas.getBoundingClientRect(),t=this.camera,i=[];for(const r of this.strokes){const s=r.points;let o=0;for(const a of s){const l=a.clone().applyMatrix4(r.object.matrixWorld).project(t),c=(l.x+1)/2*e.width,h=(-l.y+1)/2*e.height;if(this.pointInPoly(c,h)&&(o++,o>=Math.max(1,s.length*.3)))break}o>=Math.max(1,s.length*.3)&&i.push(r)}return i}pointInPoly(e,t){const i=this.lassoPts;let r=!1;for(let s=0,o=i.length-1;s<i.length;o=s++){const[a,l]=i[s],[c,h]=i[o];l>t!=h>t&&e<(c-a)*(t-l)/(h-l)+a&&(r=!r)}return r}pushCmd(e){this.undoStack.push(e),this.redoStack=[]}undo(){const e=this.undoStack.pop();e&&(e.undo(),this.redoStack.push(e),this.setSelection([]))}redo(){const e=this.redoStack.pop();e&&(e.redo(),this.undoStack.push(e),this.setSelection([]))}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}disposeNode(e){e.traverse(t=>{const i=t;i.geometry&&i.geometry.dispose();const r=i.material;Array.isArray(r)?r.forEach(s=>s.dispose()):r==null||r.dispose()})}clear(){var e,t;for(const i of this.strokes)(e=i.object.parent)==null||e.remove(i.object);this.strokes=[];for(const i of[...this.guides])this.detachGuide(i);this.removeActiveSurface(),this.selected.clear(),this.clearPointEdit(),(t=this.gizmo)==null||t.detach(),this.undoStack=[],this.redoStack=[]}resize(){const e=this.renderer.domElement,t=Math.min(window.devicePixelRatio,2),i=e.clientWidth,r=e.clientHeight;if(i===0||r===0)return;const s=Math.floor(i*t),o=Math.floor(r*t);e.width===s&&e.height===o||(this.renderer.setPixelRatio(t),this.renderer.setSize(i,r,!1),this.view==="persp"?(this.perspCamera.aspect=i/r,this.perspCamera.updateProjectionMatrix()):this.applyOrthoFrustum())}debugDemo(){const e=[];for(let o=0;o<=40;o++){const a=o/40*Math.PI*2;e.push(new R(Math.cos(a)*1.2,.6+Math.sin(a)*1.2,0))}const t=e.map(()=>1),i=new Dn,r=this.buildTube(e,t);r&&i.add(r);const s={id:`stroke-${this.seq++}`,object:i,points:e,pressures:t,kind:"stroke",layerId:this.activeLayerId(),baseOpacity:1};i.userData.strokeId=s.id,this.addStrokeRecord(s)}};Qt.VP_AXES=[[new R(1,0,0),"#e74c3c"],[new R(0,1,0),"#2ecc71"],[new R(0,0,1),"#3b82f6"]],Qt.TOOL_KEYS={p:"pencil",g:"guide",v:"move",a:"select",e:"eraser",l:"liquify",c:"scissors"},Qt.SNAP_PX=14,Qt.RESAMPLE_GAP=ul*2.5,Qt.GUIDE_SIZE=24,Qt.HANDLE_RADIUS=.028;let qh=Qt;function ag(n){const e=n.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e,i=parseInt(t||"000000",16);return[i>>16&255,i>>8&255,i&255]}function lg(n,e,t){return"#"+[n,e,t].map(i=>Math.max(0,Math.min(255,Math.round(i))).toString(16).padStart(2,"0")).join("")}function cg(n,e,t){n/=255,e/=255,t/=255;const i=Math.max(n,e,t),r=Math.min(n,e,t),s=i-r;let o=0;s!==0&&(i===n?o=(e-t)/s%6:i===e?o=(t-n)/s+2:o=(n-e)/s+4,o*=60,o<0&&(o+=360));const a=i===0?0:s/i;return[o,a,i]}function ug(n,e,t){const i=t*e,r=i*(1-Math.abs(n/60%2-1)),s=t-i;let o=0,a=0,l=0;return n<60?(o=i,a=r,l=0):n<120?(o=r,a=i,l=0):n<180?(o=0,a=i,l=r):n<240?(o=0,a=r,l=i):n<300?(o=r,a=0,l=i):(o=i,a=0,l=r),[(o+s)*255,(a+s)*255,(l+s)*255]}const bl=112,yo=bl/2,WA=({value:n,onChange:e})=>{const t=rt.useRef(null),[i,r]=rt.useState(()=>cg(...ag(n)));rt.useEffect(()=>r(cg(...ag(n))),[n]);const s=rt.useCallback((p,_,y)=>{const v=t.current;if(!v)return;const u=v.getBoundingClientRect(),g=p-(u.left+u.width/2),m=_-(u.top+u.height/2),x=Math.min(1,Math.hypot(g,m)/yo);let A=Math.atan2(m,g)*180/Math.PI;A<0&&(A+=360),r([A,x,y]),e(lg(...ug(A,x,y)))},[e]),o=p=>{try{p.currentTarget.setPointerCapture(p.pointerId)}catch{}s(p.clientX,p.clientY,i[2]);const _=v=>s(v.clientX,v.clientY,i[2]),y=()=>{window.removeEventListener("pointermove",_),window.removeEventListener("pointerup",y)};window.addEventListener("pointermove",_),window.addEventListener("pointerup",y)},a=p=>{const _=p/100;r([i[0],i[1],_]),e(lg(...ug(i[0],i[1],_)))},[l,c,h]=i,d=yo+Math.cos(l*Math.PI/180)*c*yo,f=yo+Math.sin(l*Math.PI/180)*c*yo;return U.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[U.jsx("div",{ref:t,onPointerDown:o,style:{width:bl,height:bl,borderRadius:"50%",position:"relative",cursor:"crosshair",filter:`brightness(${h})`,background:"radial-gradient(circle at center, #fff 0%, rgba(255,255,255,0) 100%), conic-gradient(from 90deg, red, yellow, lime, cyan, blue, magenta, red)",boxShadow:"inset 0 0 0 1px rgba(255,255,255,.15)"},children:U.jsx("div",{style:{position:"absolute",left:d-6,top:f-6,width:12,height:12,borderRadius:"50%",border:"2px solid #fff",boxShadow:"0 0 0 1px rgba(0,0,0,.6)",pointerEvents:"none",background:n}})}),U.jsx("input",{type:"range",min:0,max:100,value:Math.round(h*100),onChange:p=>a(Number(p.target.value)),title:"Brillo",style:{width:bl,accentColor:"#0078d4"}})]})},jA=[{id:"fine",label:"Fino",values:{size:3,opacity:1,hardness:.9,pressureSensitivity:.3,stabilization:.2}},{id:"pencil",label:"Lápiz",values:{size:6,opacity:1,hardness:.3,pressureSensitivity:.25,stabilization:.2}},{id:"ink",label:"Tinta",values:{size:10,opacity:1,hardness:.95,pressureSensitivity:.75,stabilization:.45}},{id:"marker",label:"Marcador",values:{size:34,opacity:.85,hardness:.6,pressureSensitivity:.1,stabilization:.3}},{id:"brush",label:"Pincel",values:{size:22,opacity:.92,hardness:.15,pressureSensitivity:.55,stabilization:.35}},{id:"charcoal",label:"Carboncillo",values:{size:28,opacity:.8,hardness:.05,pressureSensitivity:.8,stabilization:.35}}],Kt={Pencil:()=>U.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:U.jsx("path",{d:"M18 2l4 4-10 10H7v-5L18 2z"})}),Guide:()=>U.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeDasharray:"3 3",strokeLinecap:"round",children:U.jsx("line",{x1:"3",y1:"20",x2:"21",y2:"4"})}),Move:()=>U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("polyline",{points:"5 9 2 12 5 15"}),U.jsx("polyline",{points:"9 5 12 2 15 5"}),U.jsx("polyline",{points:"15 19 12 22 9 19"}),U.jsx("polyline",{points:"19 9 22 12 19 15"}),U.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),U.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"22"})]}),Select:()=>U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("path",{d:"M4 3l7 17 2-7 7-2z",strokeLinejoin:"round"}),U.jsx("circle",{cx:"4",cy:"3",r:"1.6",fill:"currentColor",stroke:"none"}),U.jsx("circle",{cx:"11",cy:"20",r:"1.6",fill:"currentColor",stroke:"none"}),U.jsx("circle",{cx:"18",cy:"11",r:"1.6",fill:"currentColor",stroke:"none"})]}),Eraser:()=>U.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:U.jsx("path",{d:"M20 20H7L3 16c-.8-.8-.8-2 0-2.8L14 2.2c.8-.8 2-.8 2.8 0L22 7.4c.8.8.8 2 0 2.8L12 20"})}),Liquify:()=>U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("path",{d:"M8 3c-1.3 0-2.5.5-3.5 1.5C3.5 5.5 3 6.7 3 8s.5 2.5 1.5 3.5S7 13 8 13s2.5-.5 3.5-1.5S13 9 13 8s-.5-2.5-1.5-3.5S9 3 8 3z"}),U.jsx("path",{d:"M16 11c-1.3 0-2.5.5-3.5 1.5S11 15 11 16s.5 2.5 1.5 3.5 2.5 1.5 3.5 1.5 2.5-.5 3.5-1.5 1.5-2.5 1.5-3.5-.5-2.5-1.5-3.5-2.5-1.5-3.5-1.5z"})]}),Scissors:()=>U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("circle",{cx:"6",cy:"6",r:"3"}),U.jsx("circle",{cx:"6",cy:"18",r:"3"}),U.jsx("line",{x1:"20",y1:"4",x2:"8.12",y2:"15.88"}),U.jsx("line",{x1:"14.47",y1:"14.48",x2:"20",y2:"20"}),U.jsx("line",{x1:"8.12",y1:"8.12",x2:"12",y2:"12"})]}),Plane:()=>U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),U.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),U.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"3"})]}),Cylinder:()=>U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),U.jsx("path",{d:"M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"})]}),Sphere:()=>U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("circle",{cx:"12",cy:"12",r:"9"}),U.jsx("ellipse",{cx:"12",cy:"12",rx:"9",ry:"3"}),U.jsx("path",{d:"M12 3v18"})]}),Torus:()=>U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("circle",{cx:"12",cy:"12",r:"9"}),U.jsx("ellipse",{cx:"12",cy:"12",rx:"9",ry:"4"})]}),Loft:()=>U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("path",{d:"M3 7c3-2 6-2 9 0s6 2 9 0M3 17c3-2 6-2 9 0s6 2 9 0"}),U.jsx("path",{d:"M3 7v10M21 7v10"})]}),Mirror:()=>U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("path",{d:"M12 3v18M3 12h18"}),U.jsx("path",{d:"M8 7l-4 5 4 5M16 7l4 5-4 5"})]}),GizmoMove:()=>U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("path",{d:"M12 2v20M2 12h20"}),U.jsx("path",{d:"M9 5l3-3 3 3M9 19l3 3 3-3M5 9l-3 3 3 3M19 9l3 3-3 3"})]}),GizmoScale:()=>U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[U.jsx("rect",{x:"4",y:"4",width:"9",height:"9"}),U.jsx("path",{d:"M13 20h7v-7M20 20L11 11"})]}),GizmoRotate:()=>U.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[U.jsx("path",{d:"M21 12a9 9 0 1 1-3-6.7"}),U.jsx("polyline",{points:"21 3 21 9 15 9"})]})},hl=({title:n,open:e,onToggle:t,children:i})=>U.jsxs("div",{children:[U.jsxs("button",{onClick:t,style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",border:"none",background:"transparent",color:"#9aa3b2",cursor:"pointer",fontSize:"10px",textTransform:"uppercase",letterSpacing:"0.5px",padding:"4px 2px",fontFamily:"system-ui, sans-serif"},children:[U.jsx("span",{children:n}),U.jsx("span",{style:{transform:e?"rotate(90deg)":"none",transition:"transform .15s"},children:"▸"})]}),e&&U.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",padding:"2px 0 6px"},children:i})]}),dl=n=>({width:"40px",height:"40px",border:"none",borderRadius:"6px",backgroundColor:n?"#0078d4":"transparent",color:n?"#fff":"#ccc",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"}),Hu=(n,e)=>{e||(n.currentTarget.style.backgroundColor="#3d3d3d",n.currentTarget.style.color="#fff")},Gu=(n,e)=>{e||(n.currentTarget.style.backgroundColor="transparent",n.currentTarget.style.color="#ccc")},XA=()=>{const{currentTool:n,setCurrentTool:e,activeSurface:t,setActiveSurface:i,mirrorMode:r,setMirrorMode:s,brushSettings:o,setBrushSettings:a,gizmoMode:l,setGizmoMode:c}=nf(),[h,d]=rt.useState(!1),[f,p]=rt.useState(null),_=rt.useRef(null),y=()=>{if(!h&&_.current){const S=_.current.getBoundingClientRect();p({top:S.top,left:S.right+8})}d(S=>!S)},[v,u]=rt.useState({dibujo:!0,seleccion:!1,superficies:!1,pincel:!0}),g=S=>u(L=>({...L,[S]:!L[S]})),m=[{id:"pencil",icon:Kt.Pencil,label:"Lápiz (P)"},{id:"guide",icon:Kt.Guide,label:"Línea guía — define un plano de dibujo (G)"},{id:"eraser",icon:Kt.Eraser,label:"Borrar (E)"},{id:"scissors",icon:Kt.Scissors,label:"Tijera — corta el trazo donde clickees encima (C)"},{id:"liquify",icon:Kt.Liquify,label:"Liquify (L)"}],x=[{id:"move",icon:Kt.Move,label:"Seleccionar / Mover (click o lazo) (V)"},{id:"select",icon:Kt.Select,label:"Editar puntos del vector (A)"}],A=[{id:"plane",icon:Kt.Plane,label:"Plano"},{id:"cylinder",icon:Kt.Cylinder,label:"Cilindro"},{id:"sphere",icon:Kt.Sphere,label:"Esfera"},{id:"torus",icon:Kt.Torus,label:"Toro"},{id:"loft",icon:Kt.Loft,label:"Loft"}],T=S=>U.jsx("button",{onClick:()=>e(S.id),title:S.label,style:dl(n===S.id),onMouseEnter:L=>Hu(L,n===S.id),onMouseLeave:L=>Gu(L,n===S.id),children:U.jsx("div",{style:{width:"20px",height:"20px"},children:U.jsx(S.icon,{})})},S.id);return U.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",padding:"10px",backgroundColor:"#2d2d2d",width:156,maxHeight:"calc(100vh - 90px)",overflowY:"auto"},children:[U.jsx(hl,{title:"Dibujo",open:v.dibujo,onToggle:()=>g("dibujo"),children:m.map(T)}),U.jsxs(hl,{title:"Selección",open:v.seleccion,onToggle:()=>g("seleccion"),children:[x.map(T),n==="move"&&[{id:"translate",icon:Kt.GizmoMove,label:"Gizmo: mover"},{id:"rotate",icon:Kt.GizmoRotate,label:"Gizmo: rotar"},{id:"scale",icon:Kt.GizmoScale,label:"Gizmo: redimensionar"}].map(S=>U.jsx("button",{onClick:()=>c(S.id),title:S.label,style:{...dl(l===S.id),width:32,height:32},children:U.jsx("div",{style:{width:"16px",height:"16px"},children:U.jsx(S.icon,{})})},S.id))]}),U.jsxs(hl,{title:"Superficies",open:v.superficies,onToggle:()=>g("superficies"),children:[A.map(S=>U.jsx("button",{onClick:()=>i(S.id===(t==null?void 0:t.type)?null:{type:S.id,params:{}}),title:S.label,style:dl((t==null?void 0:t.type)===S.id),onMouseEnter:L=>Hu(L,(t==null?void 0:t.type)===S.id),onMouseLeave:L=>Gu(L,(t==null?void 0:t.type)===S.id),children:U.jsx("div",{style:{width:"20px",height:"20px"},children:U.jsx(S.icon,{})})},S.id)),U.jsx("button",{onClick:()=>s(!r),title:"Modo Espejo X",style:dl(r),onMouseEnter:S=>Hu(S,r),onMouseLeave:S=>Gu(S,r),children:U.jsx("div",{style:{width:"20px",height:"20px"},children:U.jsx(Kt.Mirror,{})})})]}),U.jsxs(hl,{title:"Pincel",open:v.pincel,onToggle:()=>g("pincel"),children:[jA.map(S=>U.jsx("button",{onClick:()=>a({...o,...S.values}),title:`Preset "${S.label}"`,style:{height:26,minWidth:42,padding:"0 6px",border:"none",borderRadius:6,backgroundColor:"transparent",color:"#ccc",cursor:"pointer",fontSize:10,fontFamily:"system-ui, sans-serif"},onMouseEnter:L=>{L.currentTarget.style.backgroundColor="#3d3d3d",L.currentTarget.style.color="#fff"},onMouseLeave:L=>{L.currentTarget.style.backgroundColor="transparent",L.currentTarget.style.color="#ccc"},children:S.label},S.id)),U.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,width:"100%",marginTop:4},children:[U.jsx("button",{ref:_,onClick:y,title:"Color del pincel (círculo cromático)",style:{width:40,height:40,border:h?"2px solid #0078d4":"2px solid transparent",borderRadius:6,cursor:"pointer",backgroundColor:o.color}}),U.jsx("input",{type:"range",min:"1",max:"100",value:o.size,onChange:S=>a({...o,size:Number(S.target.value)}),title:"Tamaño del pincel",style:{flex:1,accentColor:"#0078d4"}})]})]}),h&&f&&Ev.createPortal(U.jsxs(U.Fragment,{children:[U.jsx("div",{onClick:()=>d(!1),style:{position:"fixed",inset:0,zIndex:99998}}),U.jsx("div",{style:{position:"fixed",top:f.top,left:f.left,zIndex:99999,padding:12,backgroundColor:"#2d2d2d",borderRadius:8,boxShadow:"0 4px 16px rgba(0,0,0,0.4)"},children:U.jsx(WA,{value:o.color,onChange:S=>a({...o,color:S})})})]}),document.body)]})},YA={display:"flex",flexDirection:"column",gap:"12px",padding:"14px",width:"220px",backgroundColor:"#2d2d2d",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",color:"#ccc",fontSize:"12px",fontFamily:"system-ui, sans-serif"},us={display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"},hs={width:"100%",accentColor:"#0078d4"},Vu={fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.5px",color:"#888",marginBottom:"2px"},qA=()=>{const{brushSettings:n,setBrushSettings:e,activeSurface:t,setActiveSurface:i,selectedObject:r}=nf(),s=Number((t==null?void 0:t.params.radius)??1),o=Number((t==null?void 0:t.params.segments)??32),a=(l,c)=>{t&&i({...t,params:{...t.params,[l]:c}})};return U.jsxs("div",{style:YA,children:[U.jsx("div",{style:Vu,children:"Pincel"}),U.jsxs("label",{style:us,children:[U.jsx("span",{children:"Opacidad"}),U.jsxs("span",{children:[Math.round(n.opacity*100),"%"]})]}),U.jsx("input",{type:"range",min:0,max:100,value:Math.round(n.opacity*100),onChange:l=>e({...n,opacity:Number(l.target.value)/100}),style:hs}),U.jsxs("label",{style:us,children:[U.jsx("span",{children:"Dureza"}),U.jsxs("span",{children:[Math.round(n.hardness*100),"%"]})]}),U.jsx("input",{type:"range",min:0,max:100,value:Math.round(n.hardness*100),onChange:l=>e({...n,hardness:Number(l.target.value)/100}),style:hs}),U.jsxs("label",{style:us,children:[U.jsx("span",{children:"Sensibilidad a la presión"}),U.jsxs("span",{children:[Math.round(n.pressureSensitivity*100),"%"]})]}),U.jsx("input",{type:"range",min:0,max:100,value:Math.round(n.pressureSensitivity*100),onChange:l=>e({...n,pressureSensitivity:Number(l.target.value)/100}),title:"Cuánto adelgaza el trazo con poca presión del lápiz (0% = ancho constante). El mouse siempre dibuja a ancho completo.",style:hs}),U.jsxs("label",{style:us,children:[U.jsx("span",{children:"Estabilizador (pulso)"}),U.jsxs("span",{children:[Math.round(n.stabilization*100),"%"]})]}),U.jsx("input",{type:"range",min:0,max:100,value:Math.round(n.stabilization*100),onChange:l=>e({...n,stabilization:Number(l.target.value)/100}),title:"Suaviza el temblor de la mano retrasando un poco el trazo respecto al puntero real (0% = crudo, como antes).",style:hs}),U.jsx("div",{style:{height:"1px",backgroundColor:"#444",margin:"2px 0"}}),U.jsxs("div",{style:Vu,children:["Superficie",t?`: ${t.type}`:""]}),t?U.jsxs(U.Fragment,{children:[U.jsxs("label",{style:us,children:[U.jsx("span",{children:"Radio"}),U.jsx("span",{children:s.toFixed(1)})]}),U.jsx("input",{type:"range",min:1,max:100,value:s*10,onChange:l=>a("radius",Number(l.target.value)/10),style:hs}),U.jsxs("label",{style:us,children:[U.jsx("span",{children:"Segmentos"}),U.jsx("span",{children:o})]}),U.jsx("input",{type:"range",min:3,max:128,value:o,onChange:l=>a("segments",Number(l.target.value)),style:hs})]}):U.jsx("div",{style:{opacity:.6,fontStyle:"italic"},children:"Elegí una superficie en la barra para editar sus parámetros."}),r&&U.jsxs(U.Fragment,{children:[U.jsx("div",{style:{height:"1px",backgroundColor:"#444",margin:"2px 0"}}),U.jsx("div",{style:Vu,children:"Selección"}),U.jsxs("div",{children:[r.name??r.id," ",U.jsxs("span",{style:{opacity:.6},children:["(",r.type,")"]})]})]})]})},ds={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,lineHeight:1,padding:"2px 5px",borderRadius:4},$A=({engine:n})=>{const{layers:e,activeLayerId:t,brushSettings:i,setActiveLayer:r,addLayer:s,toggleLayerVisibility:o,toggleLayerLock:a,renameLayer:l,setLayerOpacity:c}=nf(),[h,d]=rt.useState(null),[f,p]=rt.useState(""),_=()=>n.current;return U.jsxs("div",{style:{backgroundColor:"#2d2d2d",color:"#ccc",fontSize:12,fontFamily:"system-ui, sans-serif",maxHeight:320,display:"flex",flexDirection:"column"},children:[U.jsx("div",{style:{display:"flex",justifyContent:"flex-end",padding:"6px 10px",borderBottom:"1px solid #444"},children:U.jsx("button",{style:ds,title:"Nueva capa",onClick:()=>s(),children:"＋ capa"})}),U.jsx("div",{style:{overflowY:"auto"},children:[...e].reverse().map(y=>{const v=y.id===t;return U.jsxs("div",{onClick:()=>r(y.id),style:{display:"flex",flexDirection:"column",gap:4,padding:"8px 10px",cursor:"pointer",borderBottom:"1px solid #383838",backgroundColor:v?"#0e5fa8":"transparent",color:v?"#fff":"#ccc"},children:[U.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[U.jsx("button",{style:{...ds,opacity:y.visible?1:.4},title:y.visible?"Ocultar capa":"Mostrar capa",onClick:u=>{u.stopPropagation(),o(y.id)},children:y.visible?"👁":"⊘"}),U.jsx("button",{style:{...ds,opacity:y.locked?1:.4},title:y.locked?"Desbloquear":"Bloquear",onClick:u=>{u.stopPropagation(),a(y.id)},children:y.locked?"🔒":"🔓"}),h===y.id?U.jsx("input",{autoFocus:!0,value:f,onClick:u=>u.stopPropagation(),onChange:u=>p(u.target.value),onBlur:()=>{l(y.id,f.trim()||y.name),d(null)},onKeyDown:u=>{u.key==="Enter"&&u.target.blur(),u.key==="Escape"&&d(null)},style:{flex:1,minWidth:0,background:"#1e1e1e",color:"#fff",border:"1px solid #555",borderRadius:3,padding:"1px 4px",font:"inherit"}}):U.jsx("span",{onDoubleClick:u=>{u.stopPropagation(),d(y.id),p(y.name)},title:"Doble click para renombrar",style:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:y.name})]}),U.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},onClick:u=>u.stopPropagation(),children:[U.jsx("input",{type:"range",min:0,max:100,value:Math.round(y.opacity*100),title:"Opacidad de la capa",onChange:u=>c(y.id,Number(u.target.value)/100),style:{flex:1,accentColor:"#4c9bff",height:3}}),U.jsx("button",{style:ds,title:"Seleccionar todas las curvas de la capa",onClick:()=>{var u;return(u=_())==null?void 0:u.selectLayer(y.id)},children:"⛶"}),U.jsx("button",{style:ds,title:"Pintar toda la capa con el color actual del pincel",onClick:()=>{var u;return(u=_())==null?void 0:u.setLayerColor(y.id,i.color)},children:"🎨"}),U.jsx("button",{style:{...ds,opacity:e.length>1?.8:.25},title:"Eliminar capa y su contenido",disabled:e.length<=1,onClick:()=>{var u;return(u=_())==null?void 0:u.deleteLayer(y.id)},children:"🗑"})]})]},y.id)})})]})},Wu=({title:n,initial:e,width:t,children:i})=>{const r=rt.useRef(null),s=rt.useRef(null),[o,a]=rt.useState(null),[l,c]=rt.useState(!1),h=_=>{const y=r.current,v=y==null?void 0:y.offsetParent;if(!y||!v||!s.current)return;const u=v.getBoundingClientRect();a({left:_.clientX-u.left-s.current.ox,top:_.clientY-u.top-s.current.oy})},d=()=>{s.current=null,window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",d)},f=_=>{const y=r.current,v=y==null?void 0:y.offsetParent;if(!y||!v)return;const u=y.getBoundingClientRect(),g=v.getBoundingClientRect();s.current={ox:_.clientX-u.left,oy:_.clientY-u.top},a({left:u.left-g.left,top:u.top-g.top}),window.addEventListener("pointermove",h),window.addEventListener("pointerup",d)},p={position:"absolute",...t?{width:t}:{},zIndex:100,borderRadius:8,boxShadow:"0 6px 18px rgba(0,0,0,0.35)",...o?{left:o.left,top:o.top}:e};return U.jsxs("div",{ref:r,style:p,children:[U.jsxs("div",{onPointerDown:f,style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"#3a3f4b",color:"#dfe4ee",fontSize:11,fontFamily:"system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.5px",cursor:"grab",userSelect:"none",touchAction:"none",borderTopLeftRadius:8,borderTopRightRadius:8},children:[U.jsx("span",{children:n}),U.jsx("button",{onPointerDown:_=>_.stopPropagation(),onClick:()=>c(_=>!_),title:l?"Expandir":"Minimizar",style:{border:"none",background:"transparent",color:"#dfe4ee",cursor:"pointer",fontSize:14,lineHeight:1,padding:"0 4px"},children:l?"▢":"–"})]}),!l&&U.jsx("div",{children:i})]})},ZA={light:"radial-gradient(120% 120% at 50% 10%, #ffffff 0%, #eef1f6 70%, #e6eaf1 100%)",dark:"radial-gradient(120% 120% at 50% 15%, #1b2030 0%, #0e0f13 60%, #08090c 100%)"},KA=({projectId:n="default"})=>{const e=rt.useRef(null),t=rt.useRef(null),i=rt.useRef(null),[r,s]=rt.useState("light");rt.useEffect(()=>{if(!e.current||!t.current)return;const m=new qh;return m.mount(e.current,t.current),m.setTheme(r),i.current=m,window.__low3d=m,window.__lowStore=zi,()=>{m.dispose(),i.current=null}},[n]),rt.useEffect(()=>{var m;(m=i.current)==null||m.setTheme(r)},[r]);const[o,a]=rt.useState("persp"),[l,c]=rt.useState(!1),[h,d]=rt.useState(100),f=r==="dark",p=f?"rgba(20,22,28,0.6)":"rgba(255,255,255,0.7)",_=f?"#8a93a6":"#5b6472",y="#0078d4",v=()=>i.current,u=m=>{var x;(x=v())==null||x.setView(m),a(m)},g=(m,x,A=!1,T)=>U.jsx("button",{onClick:x,title:T??m,style:{height:30,padding:"0 10px",borderRadius:6,border:"none",cursor:"pointer",background:A?y:"transparent",color:A?"#fff":_,fontSize:12},children:m});return U.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",background:ZA[r],overflow:"hidden"},ref:t,children:[U.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block"},onContextMenu:m=>m.preventDefault()}),U.jsx(Wu,{title:"Herramientas",initial:{left:14,top:60},children:U.jsx(XA,{})}),U.jsx(Wu,{title:"Pincel / Superficie",initial:{right:14,top:60},width:220,children:U.jsx(qA,{})}),U.jsx(Wu,{title:"Capas",initial:{left:14,bottom:14},width:240,children:U.jsx($A,{engine:i})}),U.jsx("button",{onClick:()=>s(f?"light":"dark"),title:"Fondo claro / oscuro",style:{position:"absolute",top:14,right:250,zIndex:100,width:36,height:36,borderRadius:8,border:"none",cursor:"pointer",background:p,color:_,fontSize:16},children:f?"☀":"☾"}),U.jsxs("div",{style:{position:"absolute",top:14,left:"50%",transform:"translateX(-50%)",zIndex:100,display:"flex",alignItems:"center",gap:2,padding:4,borderRadius:8,background:p},children:[g("⟲",()=>{var m;return(m=v())==null?void 0:m.undo()},!1,"Deshacer (Ctrl+Z)"),g("⟳",()=>{var m;return(m=v())==null?void 0:m.redo()},!1,"Rehacer (Ctrl+Alt+Z / Ctrl+Shift+Z)"),U.jsx("span",{style:{width:1,height:18,background:f?"#3a3f4b":"#cfd4dd",margin:"0 4px"}}),g("Persp",()=>u("persp"),o==="persp"),g("Frente",()=>u("front"),o==="front","Vista ortogonal de frente (para el primer dibujo)"),g("Detrás",()=>u("back"),o==="back","Vista ortogonal de atrás"),g("Izquierda",()=>u("left"),o==="left","Vista ortogonal desde la izquierda"),g("Derecha",()=>u("right"),o==="right","Vista ortogonal desde la derecha"),g("Arriba",()=>u("top"),o==="top","Vista ortogonal desde arriba"),g("Abajo",()=>u("bottom"),o==="bottom","Vista ortogonal desde abajo"),U.jsx("span",{style:{width:1,height:18,background:f?"#3a3f4b":"#cfd4dd",margin:"0 4px"}}),g("XYZ",()=>{var m;return c(!!((m=v())!=null&&m.toggleAxes()))},l,"Ejes globales XYZ + puntos de fuga de cada eje (solo en perspectiva) — guía visual, no se dibuja ni exporta")]}),U.jsx("button",{onClick:()=>{var m;return(m=i.current)==null?void 0:m.deleteGuide()},title:"Borrar la última guía creada (los trazos se conservan) — para borrar cualquier otra, Goma + click sobre ella",style:{position:"absolute",top:14,right:294,zIndex:100,height:36,padding:"0 12px",borderRadius:8,border:"none",cursor:"pointer",background:p,color:_,fontSize:12,display:"flex",alignItems:"center",gap:6},children:"🗑 Borrar guía"}),U.jsxs("div",{title:"Opacidad de las guías — bajala a 0 para dibujar 'en el aire' sin que la hoja estorbe visualmente; sigue dando soporte a los trazos aunque no se vea (truco de Feather)",style:{position:"absolute",top:14,right:356,zIndex:100,height:36,padding:"0 10px",borderRadius:8,background:p,display:"flex",alignItems:"center",gap:6},children:[U.jsx("span",{style:{fontSize:11,color:_},children:"👻"}),U.jsx("input",{type:"range",min:0,max:100,value:h,onChange:m=>{var A;const x=Number(m.target.value);d(x),(A=v())==null||A.setGuideOpacity(x/100)},style:{width:70,accentColor:"#0078d4"}})]}),U.jsx("div",{style:{position:"absolute",bottom:14,right:14,zIndex:100,color:_,fontSize:11,fontFamily:"system-ui, sans-serif",background:p,padding:"6px 10px",borderRadius:6,lineHeight:1.5,pointerEvents:"none"},children:"Teclas: P lápiz · G guía · V mover (click en una guía = mover/deformar con gizmo, Ctrl+D duplica) · A puntos · E goma · C tijera · Shift recta · Alt hilo tenso (eje X/Y/Z) · Ctrl+C/V copia · Supr borra · Ctrl+Z/Ctrl+Alt+Z"})]})},u_=document.getElementById("root");if(!u_)throw new Error("No se encontró #root");wv(u_).render(U.jsx(D_.StrictMode,{children:U.jsx(KA,{projectId:"demo"})}));
