(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function m_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hg={exports:{}},ic={},dg={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),g_=Symbol.for("react.portal"),v_=Symbol.for("react.fragment"),__=Symbol.for("react.strict_mode"),y_=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),S_=Symbol.for("react.context"),M_=Symbol.for("react.forward_ref"),E_=Symbol.for("react.suspense"),w_=Symbol.for("react.memo"),T_=Symbol.for("react.lazy"),uf=Symbol.iterator;function A_(t){return t===null||typeof t!="object"?null:(t=uf&&t[uf]||t["@@iterator"],typeof t=="function"?t:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pg=Object.assign,mg={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||fg}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gg(){}gg.prototype=Zs.prototype;function qh(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||fg}var $h=qh.prototype=new gg;$h.constructor=qh;pg($h,Zs.prototype);$h.isPureReactComponent=!0;var hf=Array.isArray,vg=Object.prototype.hasOwnProperty,Zh={current:null},_g={key:!0,ref:!0,__self:!0,__source:!0};function yg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vg.call(e,i)&&!_g.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:oa,type:t,key:s,ref:o,props:r,_owner:Zh.current}}function b_(t,e){return{$$typeof:oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kh(t){return typeof t=="object"&&t!==null&&t.$$typeof===oa}function C_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var df=/\/+/g;function Cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?C_(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case oa:case g_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Cc(o,0):i,hf(r)?(n="",t!=null&&(n=t.replace(df,"$&/")+"/"),hl(r,e,n,"",function(c){return c})):r!=null&&(Kh(r)&&(r=b_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(df,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Cc(s,a);o+=hl(s,e,n,l,r)}else if(l=A_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Cc(s,a++),o+=hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ma(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function R_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},dl={transition:null},P_={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:dl,ReactCurrentOwner:Zh};function xg(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:ma,forEach:function(t,e,n){ma(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ma(t,function(){e++}),e},toArray:function(t){return ma(t,function(e){return e})||[]},only:function(t){if(!Kh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Zs;Ye.Fragment=v_;Ye.Profiler=y_;Ye.PureComponent=qh;Ye.StrictMode=__;Ye.Suspense=E_;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P_;Ye.act=xg;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=pg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)vg.call(e,l)&&!_g.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:oa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:S_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:x_,_context:t},t.Consumer=t};Ye.createElement=yg;Ye.createFactory=function(t){var e=yg.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:M_,render:t}};Ye.isValidElement=Kh;Ye.lazy=function(t){return{$$typeof:T_,_payload:{_status:-1,_result:t},_init:R_}};Ye.memo=function(t,e){return{$$typeof:w_,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=dl.transition;dl.transition={};try{t()}finally{dl.transition=e}};Ye.unstable_act=xg;Ye.useCallback=function(t,e){return an.current.useCallback(t,e)};Ye.useContext=function(t){return an.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return an.current.useEffect(t,e)};Ye.useId=function(){return an.current.useId()};Ye.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return an.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Ye.useRef=function(t){return an.current.useRef(t)};Ye.useState=function(t){return an.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return an.current.useTransition()};Ye.version="18.3.1";dg.exports=Ye;var ut=dg.exports;const L_=m_(ut);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_=ut,I_=Symbol.for("react.element"),N_=Symbol.for("react.fragment"),U_=Object.prototype.hasOwnProperty,O_=D_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F_={key:!0,ref:!0,__self:!0,__source:!0};function Sg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)U_.call(e,i)&&!F_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:I_,type:t,key:s,ref:o,props:r,_owner:O_.current}}ic.Fragment=N_;ic.jsx=Sg;ic.jsxs=Sg;hg.exports=ic;var k=hg.exports,Mg={exports:{}},bn={},Eg={exports:{}},wg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,U){var B=N.length;N.push(U);e:for(;0<B;){var Z=B-1>>>1,Q=N[Z];if(0<r(Q,U))N[Z]=U,N[B]=Q,B=Z;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var U=N[0],B=N.pop();if(B!==U){N[0]=B;e:for(var Z=0,Q=N.length,q=Q>>>1;Z<q;){var K=2*(Z+1)-1,ce=N[K],ye=K+1,xe=N[ye];if(0>r(ce,B))ye<Q&&0>r(xe,ce)?(N[Z]=xe,N[ye]=B,Z=ye):(N[Z]=ce,N[K]=B,Z=K);else if(ye<Q&&0>r(xe,B))N[Z]=xe,N[ye]=B,Z=ye;else break e}}return U}function r(N,U){var B=N.sortIndex-U.sortIndex;return B!==0?B:N.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,d=3,m=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var U=n(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=N)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function x(N){if(y=!1,p(N),!_)if(n(l)!==null)_=!0,j(b);else{var U=n(c);U!==null&&$(x,U.startTime-N)}}function b(N,U){_=!1,y&&(y=!1,u(D),D=-1),m=!0;var B=d;try{for(p(U),f=n(l);f!==null&&(!(f.expirationTime>U)||N&&!z());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,d=f.priorityLevel;var Q=Z(f.expirationTime<=U);U=t.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(l)&&i(l),p(U)}else i(l);f=n(l)}if(f!==null)var q=!0;else{var K=n(c);K!==null&&$(x,K.startTime-U),q=!1}return q}finally{f=null,d=B,m=!1}}var T=!1,w=null,D=-1,S=5,E=-1;function z(){return!(t.unstable_now()-E<S)}function V(){if(w!==null){var N=t.unstable_now();E=N;var U=!0;try{U=w(!0,N)}finally{U?J():(T=!1,w=null)}}else T=!1}var J;if(typeof v=="function")J=function(){v(V)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,F=I.port2;I.port1.onmessage=V,J=function(){F.postMessage(null)}}else J=function(){g(V,0)};function j(N){w=N,T||(T=!0,J())}function $(N,U){D=g(function(){N(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,j(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var B=d;d=U;try{return N()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,U){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=d;d=N;try{return U()}finally{d=B}},t.unstable_scheduleCallback=function(N,U,B){var Z=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Z+B:Z):B=Z,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=B+Q,N={id:h++,callback:U,priorityLevel:N,startTime:B,expirationTime:Q,sortIndex:-1},B>Z?(N.sortIndex=B,e(c,N),n(l)===null&&N===n(c)&&(y?(u(D),D=-1):y=!0,$(x,B-Z))):(N.sortIndex=Q,e(l,N),_||m||(_=!0,j(b))),N},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(N){var U=d;return function(){var B=d;d=U;try{return N.apply(this,arguments)}finally{d=B}}}})(wg);Eg.exports=wg;var k_=Eg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=ut,An=k_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tg=new Set,zo={};function Vr(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(zo[t]=e,t=0;t<e.length;t++)Tg.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wu=Object.prototype.hasOwnProperty,B_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ff={},pf={};function H_(t){return Wu.call(pf,t)?!0:Wu.call(ff,t)?!1:B_.test(t)?pf[t]=!0:(ff[t]=!0,!1)}function G_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function V_(t,e,n,i){if(e===null||typeof e>"u"||G_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qh=/[\-:]([a-z])/g;function Jh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qh,Jh);Xt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qh,Jh);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qh,Jh);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function ed(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(V_(e,n,r,i)&&(n=null),i||r===null?H_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Pi=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ga=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),td=Symbol.for("react.strict_mode"),Xu=Symbol.for("react.profiler"),Ag=Symbol.for("react.provider"),bg=Symbol.for("react.context"),nd=Symbol.for("react.forward_ref"),ju=Symbol.for("react.suspense"),Yu=Symbol.for("react.suspense_list"),id=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),Cg=Symbol.for("react.offscreen"),mf=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=mf&&t[mf]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,Rc;function xo(t){if(Rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+t}var Pc=!1;function Lc(t,e){if(!t||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xo(t):""}function W_(t){switch(t.tag){case 5:return xo(t.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return t=Lc(t.type,!1),t;case 11:return t=Lc(t.type.render,!1),t;case 1:return t=Lc(t.type,!0),t;default:return""}}function qu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case Xu:return"Profiler";case td:return"StrictMode";case ju:return"Suspense";case Yu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bg:return(t.displayName||"Context")+".Consumer";case Ag:return(t._context.displayName||"Context")+".Provider";case nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case id:return e=t.displayName||null,e!==null?e:qu(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return qu(t(e))}catch{}}return null}function X_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qu(e);case 8:return e===td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function j_(t){var e=Rg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function va(t){t._valueTracker||(t._valueTracker=j_(t))}function Pg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Rg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $u(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Lg(t,e){e=e.checked,e!=null&&ed(t,"checked",e,!1)}function Zu(t,e){Lg(t,e);var n=cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ku(t,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ku(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var So=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _f(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(So(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cr(n)}}function Dg(t,e){var n=cr(e.value),i=cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function yf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ig(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ig(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _a,Ng=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_a=_a||document.createElement("div"),_a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y_=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(t){Y_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ao[e]=Ao[t]})});function Ug(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ao.hasOwnProperty(t)&&Ao[t]?(""+e).trim():e+"px"}function Og(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ug(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var q_=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eh(t,e){if(e){if(q_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function th(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nh=null;function rd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ih=null,Ps=null,Ls=null;function xf(t){if(t=ca(t)){if(typeof ih!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=lc(e),ih(t.stateNode,t.type,e))}}function Fg(t){Ps?Ls?Ls.push(t):Ls=[t]:Ps=t}function kg(){if(Ps){var t=Ps,e=Ls;if(Ls=Ps=null,xf(t),e)for(t=0;t<e.length;t++)xf(e[t])}}function zg(t,e){return t(e)}function Bg(){}var Dc=!1;function Hg(t,e,n){if(Dc)return t(e,n);Dc=!0;try{return zg(t,e,n)}finally{Dc=!1,(Ps!==null||Ls!==null)&&(Bg(),kg())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var i=lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var rh=!1;if(Ti)try{var so={};Object.defineProperty(so,"passive",{get:function(){rh=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{rh=!1}function $_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var bo=!1,bl=null,Cl=!1,sh=null,Z_={onError:function(t){bo=!0,bl=t}};function K_(t,e,n,i,r,s,o,a,l){bo=!1,bl=null,$_.apply(Z_,arguments)}function Q_(t,e,n,i,r,s,o,a,l){if(K_.apply(this,arguments),bo){if(bo){var c=bl;bo=!1,bl=null}else throw Error(ie(198));Cl||(Cl=!0,sh=c)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sf(t){if(Wr(t)!==t)throw Error(ie(188))}function J_(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sf(r),t;if(s===i)return Sf(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Vg(t){return t=J_(t),t!==null?Wg(t):null}function Wg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wg(t);if(e!==null)return e;t=t.sibling}return null}var Xg=An.unstable_scheduleCallback,Mf=An.unstable_cancelCallback,ey=An.unstable_shouldYield,ty=An.unstable_requestPaint,Et=An.unstable_now,ny=An.unstable_getCurrentPriorityLevel,sd=An.unstable_ImmediatePriority,jg=An.unstable_UserBlockingPriority,Rl=An.unstable_NormalPriority,iy=An.unstable_LowPriority,Yg=An.unstable_IdlePriority,rc=null,ci=null;function ry(t){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(rc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:ay,sy=Math.log,oy=Math.LN2;function ay(t){return t>>>=0,t===0?32:31-(sy(t)/oy|0)|0}var ya=64,xa=4194304;function Mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Mo(a):(s&=o,s!==0&&(i=Mo(s)))}else o=n&~r,o!==0?i=Mo(o):s!==0&&(i=Mo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function ly(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ly(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qg(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function Ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function uy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function $g(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zg,ad,Kg,Qg,Jg,ah=!1,Sa=[],Qi=null,Ji=null,er=null,Go=new Map,Vo=new Map,Wi=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function oo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ca(e),e!==null&&ad(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function dy(t,e,n,i,r){switch(e){case"focusin":return Qi=oo(Qi,t,e,n,i,r),!0;case"dragenter":return Ji=oo(Ji,t,e,n,i,r),!0;case"mouseover":return er=oo(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Go.set(s,oo(Go.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Vo.set(s,oo(Vo.get(s)||null,t,e,n,i,r)),!0}return!1}function e0(t){var e=Cr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=Gg(n),e!==null){t.blockedOn=e,Jg(t.priority,function(){Kg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);nh=i,n.target.dispatchEvent(i),nh=null}else return e=ca(n),e!==null&&ad(e),t.blockedOn=n,!1;e.shift()}return!0}function wf(t,e,n){fl(t)&&n.delete(e)}function fy(){ah=!1,Qi!==null&&fl(Qi)&&(Qi=null),Ji!==null&&fl(Ji)&&(Ji=null),er!==null&&fl(er)&&(er=null),Go.forEach(wf),Vo.forEach(wf)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,ah||(ah=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,fy)))}function Wo(t){function e(r){return ao(r,t)}if(0<Sa.length){ao(Sa[0],t);for(var n=1;n<Sa.length;n++){var i=Sa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qi!==null&&ao(Qi,t),Ji!==null&&ao(Ji,t),er!==null&&ao(er,t),Go.forEach(e),Vo.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)e0(n),n.blockedOn===null&&Wi.shift()}var Ds=Pi.ReactCurrentBatchConfig,Ll=!0;function py(t,e,n,i){var r=tt,s=Ds.transition;Ds.transition=null;try{tt=1,ld(t,e,n,i)}finally{tt=r,Ds.transition=s}}function my(t,e,n,i){var r=tt,s=Ds.transition;Ds.transition=null;try{tt=4,ld(t,e,n,i)}finally{tt=r,Ds.transition=s}}function ld(t,e,n,i){if(Ll){var r=lh(t,e,n,i);if(r===null)Vc(t,e,i,Dl,n),Ef(t,i);else if(dy(r,t,e,n,i))i.stopPropagation();else if(Ef(t,i),e&4&&-1<hy.indexOf(t)){for(;r!==null;){var s=ca(r);if(s!==null&&Zg(s),s=lh(t,e,n,i),s===null&&Vc(t,e,i,Dl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vc(t,e,i,null,n)}}var Dl=null;function lh(t,e,n,i){if(Dl=null,t=rd(i),t=Cr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function t0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ny()){case sd:return 1;case jg:return 4;case Rl:case iy:return 16;case Yg:return 536870912;default:return 16}default:return 16}}var Yi=null,cd=null,pl=null;function n0(){if(pl)return pl;var t,e=cd,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return pl=r.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function Tf(){return!1}function Cn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:Tf,this.isPropagationStopped=Tf,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ud=Cn(Ks),la=vt({},Ks,{view:0,detail:0}),gy=Cn(la),Nc,Uc,lo,sc=vt({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Nc=t.screenX-lo.screenX,Uc=t.screenY-lo.screenY):Uc=Nc=0,lo=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),Af=Cn(sc),vy=vt({},sc,{dataTransfer:0}),_y=Cn(vy),yy=vt({},la,{relatedTarget:0}),Oc=Cn(yy),xy=vt({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),Sy=Cn(xy),My=vt({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ey=Cn(My),wy=vt({},Ks,{data:0}),bf=Cn(wy),Ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},by={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=by[t])?!!e[t]:!1}function hd(){return Cy}var Ry=vt({},la,{key:function(t){if(t.key){var e=Ty[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ay[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hd,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Py=Cn(Ry),Ly=vt({},sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=Cn(Ly),Dy=vt({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hd}),Iy=Cn(Dy),Ny=vt({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uy=Cn(Ny),Oy=vt({},sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fy=Cn(Oy),ky=[9,13,27,32],dd=Ti&&"CompositionEvent"in window,Co=null;Ti&&"documentMode"in document&&(Co=document.documentMode);var zy=Ti&&"TextEvent"in window&&!Co,i0=Ti&&(!dd||Co&&8<Co&&11>=Co),Rf=" ",Pf=!1;function r0(t,e){switch(t){case"keyup":return ky.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function By(t,e){switch(t){case"compositionend":return s0(e);case"keypress":return e.which!==32?null:(Pf=!0,Rf);case"textInput":return t=e.data,t===Rf&&Pf?null:t;default:return null}}function Hy(t,e){if(gs)return t==="compositionend"||!dd&&r0(t,e)?(t=n0(),pl=cd=Yi=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return i0&&e.locale!=="ko"?null:e.data;default:return null}}var Gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gy[t.type]:e==="textarea"}function o0(t,e,n,i){Fg(i),e=Il(e,"onChange"),0<e.length&&(n=new ud("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ro=null,Xo=null;function Vy(t){v0(t,0)}function oc(t){var e=ys(t);if(Pg(e))return t}function Wy(t,e){if(t==="change")return e}var a0=!1;if(Ti){var Fc;if(Ti){var kc="oninput"in document;if(!kc){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),kc=typeof Df.oninput=="function"}Fc=kc}else Fc=!1;a0=Fc&&(!document.documentMode||9<document.documentMode)}function If(){Ro&&(Ro.detachEvent("onpropertychange",l0),Xo=Ro=null)}function l0(t){if(t.propertyName==="value"&&oc(Xo)){var e=[];o0(e,Xo,t,rd(t)),Hg(Vy,e)}}function Xy(t,e,n){t==="focusin"?(If(),Ro=e,Xo=n,Ro.attachEvent("onpropertychange",l0)):t==="focusout"&&If()}function jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oc(Xo)}function Yy(t,e){if(t==="click")return oc(e)}function qy(t,e){if(t==="input"||t==="change")return oc(e)}function $y(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:$y;function jo(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Wu.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function Nf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uf(t,e){var n=Nf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nf(n)}}function c0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?c0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function u0(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zy(t){var e=u0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&c0(n.ownerDocument.documentElement,n)){if(i!==null&&fd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Uf(n,s);var o=Uf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ky=Ti&&"documentMode"in document&&11>=document.documentMode,vs=null,ch=null,Po=null,uh=!1;function Of(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uh||vs==null||vs!==Al(i)||(i=vs,"selectionStart"in i&&fd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Po&&jo(Po,i)||(Po=i,i=Il(ch,"onSelect"),0<i.length&&(e=new ud("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=vs)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},zc={},h0={};Ti&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function ac(t){if(zc[t])return zc[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in h0)return zc[t]=e[n];return t}var d0=ac("animationend"),f0=ac("animationiteration"),p0=ac("animationstart"),m0=ac("transitionend"),g0=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){g0.set(t,e),Vr(e,[t])}for(var Bc=0;Bc<Ff.length;Bc++){var Hc=Ff[Bc],Qy=Hc.toLowerCase(),Jy=Hc[0].toUpperCase()+Hc.slice(1);dr(Qy,"on"+Jy)}dr(d0,"onAnimationEnd");dr(f0,"onAnimationIteration");dr(p0,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(m0,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function kf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Q_(i,e,void 0,t),t.currentTarget=null}function v0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;kf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;kf(r,a,c),s=l}}}if(Cl)throw t=sh,Cl=!1,sh=null,t}function ot(t,e){var n=e[mh];n===void 0&&(n=e[mh]=new Set);var i=t+"__bubble";n.has(i)||(_0(e,t,2,!1),n.add(i))}function Gc(t,e,n){var i=0;e&&(i|=4),_0(n,t,i,e)}var wa="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[wa]){t[wa]=!0,Tg.forEach(function(n){n!=="selectionchange"&&(ex.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wa]||(e[wa]=!0,Gc("selectionchange",!1,e))}}function _0(t,e,n,i){switch(t0(e)){case 1:var r=py;break;case 4:r=my;break;default:r=ld}n=r.bind(null,e,n,t),r=void 0,!rh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Vc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Cr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Hg(function(){var c=s,h=rd(n),f=[];e:{var d=g0.get(t);if(d!==void 0){var m=ud,_=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":m=Py;break;case"focusin":_="focus",m=Oc;break;case"focusout":_="blur",m=Oc;break;case"beforeblur":case"afterblur":m=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Iy;break;case d0:case f0:case p0:m=Sy;break;case m0:m=Uy;break;case"scroll":m=gy;break;case"wheel":m=Fy;break;case"copy":case"cut":case"paste":m=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Cf}var y=(e&4)!==0,g=!y&&t==="scroll",u=y?d!==null?d+"Capture":null:d;y=[];for(var v=c,p;v!==null;){p=v;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,u!==null&&(x=Ho(v,u),x!=null&&y.push(qo(v,x,p)))),g)break;v=v.return}0<y.length&&(d=new m(d,_,null,n,h),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==nh&&(_=n.relatedTarget||n.fromElement)&&(Cr(_)||_[Ai]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Cr(_):null,_!==null&&(g=Wr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=Af,x="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Cf,x="onPointerLeave",u="onPointerEnter",v="pointer"),g=m==null?d:ys(m),p=_==null?d:ys(_),d=new y(x,v+"leave",m,n,h),d.target=g,d.relatedTarget=p,x=null,Cr(h)===c&&(y=new y(u,v+"enter",_,n,h),y.target=p,y.relatedTarget=g,x=y),g=x,m&&_)t:{for(y=m,u=_,v=0,p=y;p;p=jr(p))v++;for(p=0,x=u;x;x=jr(x))p++;for(;0<v-p;)y=jr(y),v--;for(;0<p-v;)u=jr(u),p--;for(;v--;){if(y===u||u!==null&&y===u.alternate)break t;y=jr(y),u=jr(u)}y=null}else y=null;m!==null&&zf(f,d,m,y,!1),_!==null&&g!==null&&zf(f,g,_,y,!0)}}e:{if(d=c?ys(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var b=Wy;else if(Lf(d))if(a0)b=qy;else{b=jy;var T=Xy}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=Yy);if(b&&(b=b(t,c))){o0(f,b,n,h);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Ku(d,"number",d.value)}switch(T=c?ys(c):window,t){case"focusin":(Lf(T)||T.contentEditable==="true")&&(vs=T,ch=c,Po=null);break;case"focusout":Po=ch=vs=null;break;case"mousedown":uh=!0;break;case"contextmenu":case"mouseup":case"dragend":uh=!1,Of(f,n,h);break;case"selectionchange":if(Ky)break;case"keydown":case"keyup":Of(f,n,h)}var w;if(dd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else gs?r0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(i0&&n.locale!=="ko"&&(gs||D!=="onCompositionStart"?D==="onCompositionEnd"&&gs&&(w=n0()):(Yi=h,cd="value"in Yi?Yi.value:Yi.textContent,gs=!0)),T=Il(c,D),0<T.length&&(D=new bf(D,t,null,n,h),f.push({event:D,listeners:T}),w?D.data=w:(w=s0(n),w!==null&&(D.data=w)))),(w=zy?By(t,n):Hy(t,n))&&(c=Il(c,"onBeforeInput"),0<c.length&&(h=new bf("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=w))}v0(f,e)})}function qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ho(t,n),s!=null&&i.unshift(qo(t,s,r)),s=Ho(t,e),s!=null&&i.push(qo(t,s,r))),t=t.return}return i}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ho(n,s),l!=null&&o.unshift(qo(n,l,a))):r||(l=Ho(n,s),l!=null&&o.push(qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tx=/\r\n?/g,nx=/\u0000|\uFFFD/g;function Bf(t){return(typeof t=="string"?t:""+t).replace(tx,`
`).replace(nx,"")}function Ta(t,e,n){if(e=Bf(e),Bf(t)!==e&&n)throw Error(ie(425))}function Nl(){}var hh=null,dh=null;function fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,ix=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(t){return Hf.resolve(null).then(t).catch(sx)}:ph;function sx(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Wo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wo(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),li="__reactFiber$"+Qs,$o="__reactProps$"+Qs,Ai="__reactContainer$"+Qs,mh="__reactEvents$"+Qs,ox="__reactListeners$"+Qs,ax="__reactHandles$"+Qs;function Cr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gf(t);t!==null;){if(n=t[li])return n;t=Gf(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[li]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function lc(t){return t[$o]||null}var gh=[],xs=-1;function fr(t){return{current:t}}function lt(t){0>xs||(t.current=gh[xs],gh[xs]=null,xs--)}function rt(t,e){xs++,gh[xs]=t.current,t.current=e}var ur={},Jt=fr(ur),dn=fr(!1),Or=ur;function zs(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Ul(){lt(dn),lt(Jt)}function Vf(t,e,n){if(Jt.current!==ur)throw Error(ie(168));rt(Jt,e),rt(dn,n)}function y0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,X_(t)||"Unknown",r));return vt({},n,i)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Or=Jt.current,rt(Jt,t),rt(dn,dn.current),!0}function Wf(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=y0(t,e,Or),i.__reactInternalMemoizedMergedChildContext=t,lt(dn),lt(Jt),rt(Jt,t)):lt(dn),rt(dn,n)}var xi=null,cc=!1,Xc=!1;function x0(t){xi===null?xi=[t]:xi.push(t)}function lx(t){cc=!0,x0(t)}function pr(){if(!Xc&&xi!==null){Xc=!0;var t=0,e=tt;try{var n=xi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,cc=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),Xg(sd,pr),r}finally{tt=e,Xc=!1}}return null}var Ss=[],Ms=0,Fl=null,kl=0,Ln=[],Dn=0,Fr=null,Si=1,Mi="";function Mr(t,e){Ss[Ms++]=kl,Ss[Ms++]=Fl,Fl=t,kl=e}function S0(t,e,n){Ln[Dn++]=Si,Ln[Dn++]=Mi,Ln[Dn++]=Fr,Fr=t;var i=Si;t=Mi;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Si=1<<32-Jn(e)+r|n<<r|i,Mi=s+t}else Si=1<<s|n<<r|i,Mi=t}function pd(t){t.return!==null&&(Mr(t,1),S0(t,1,0))}function md(t){for(;t===Fl;)Fl=Ss[--Ms],Ss[Ms]=null,kl=Ss[--Ms],Ss[Ms]=null;for(;t===Fr;)Fr=Ln[--Dn],Ln[Dn]=null,Mi=Ln[--Dn],Ln[Dn]=null,Si=Ln[--Dn],Ln[Dn]=null}var wn=null,En=null,ht=!1,Zn=null;function M0(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,En=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,En=null,!0):!1;default:return!1}}function vh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _h(t){if(ht){var e=En;if(e){var n=e;if(!Xf(t,e)){if(vh(t))throw Error(ie(418));e=tr(n.nextSibling);var i=wn;e&&Xf(t,e)?M0(i,n):(t.flags=t.flags&-4097|2,ht=!1,wn=t)}}else{if(vh(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ht=!1,wn=t}}}function jf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function Aa(t){if(t!==wn)return!1;if(!ht)return jf(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fh(t.type,t.memoizedProps)),e&&(e=En)){if(vh(t))throw E0(),Error(ie(418));for(;e;)M0(t,e),e=tr(e.nextSibling)}if(jf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=wn?tr(t.stateNode.nextSibling):null;return!0}function E0(){for(var t=En;t;)t=tr(t.nextSibling)}function Bs(){En=wn=null,ht=!1}function gd(t){Zn===null?Zn=[t]:Zn.push(t)}var cx=Pi.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yf(t){var e=t._init;return e(t._payload)}function w0(t){function e(u,v){if(t){var p=u.deletions;p===null?(u.deletions=[v],u.flags|=16):p.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=sr(u,v),u.index=0,u.sibling=null,u}function s(u,v,p){return u.index=p,t?(p=u.alternate,p!==null?(p=p.index,p<v?(u.flags|=2,v):p):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,p,x){return v===null||v.tag!==6?(v=Qc(p,u.mode,x),v.return=u,v):(v=r(v,p),v.return=u,v)}function l(u,v,p,x){var b=p.type;return b===ms?h(u,v,p.props.children,x,p.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Bi&&Yf(b)===v.type)?(x=r(v,p.props),x.ref=co(u,v,p),x.return=u,x):(x=Ml(p.type,p.key,p.props,null,u.mode,x),x.ref=co(u,v,p),x.return=u,x)}function c(u,v,p,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==p.containerInfo||v.stateNode.implementation!==p.implementation?(v=Jc(p,u.mode,x),v.return=u,v):(v=r(v,p.children||[]),v.return=u,v)}function h(u,v,p,x,b){return v===null||v.tag!==7?(v=Dr(p,u.mode,x,b),v.return=u,v):(v=r(v,p),v.return=u,v)}function f(u,v,p){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Qc(""+v,u.mode,p),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ga:return p=Ml(v.type,v.key,v.props,null,u.mode,p),p.ref=co(u,null,v),p.return=u,p;case ps:return v=Jc(v,u.mode,p),v.return=u,v;case Bi:var x=v._init;return f(u,x(v._payload),p)}if(So(v)||ro(v))return v=Dr(v,u.mode,p,null),v.return=u,v;ba(u,v)}return null}function d(u,v,p,x){var b=v!==null?v.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:a(u,v,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ga:return p.key===b?l(u,v,p,x):null;case ps:return p.key===b?c(u,v,p,x):null;case Bi:return b=p._init,d(u,v,b(p._payload),x)}if(So(p)||ro(p))return b!==null?null:h(u,v,p,x,null);ba(u,p)}return null}function m(u,v,p,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(p)||null,a(v,u,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ga:return u=u.get(x.key===null?p:x.key)||null,l(v,u,x,b);case ps:return u=u.get(x.key===null?p:x.key)||null,c(v,u,x,b);case Bi:var T=x._init;return m(u,v,p,T(x._payload),b)}if(So(x)||ro(x))return u=u.get(p)||null,h(v,u,x,b,null);ba(v,x)}return null}function _(u,v,p,x){for(var b=null,T=null,w=v,D=v=0,S=null;w!==null&&D<p.length;D++){w.index>D?(S=w,w=null):S=w.sibling;var E=d(u,w,p[D],x);if(E===null){w===null&&(w=S);break}t&&w&&E.alternate===null&&e(u,w),v=s(E,v,D),T===null?b=E:T.sibling=E,T=E,w=S}if(D===p.length)return n(u,w),ht&&Mr(u,D),b;if(w===null){for(;D<p.length;D++)w=f(u,p[D],x),w!==null&&(v=s(w,v,D),T===null?b=w:T.sibling=w,T=w);return ht&&Mr(u,D),b}for(w=i(u,w);D<p.length;D++)S=m(w,u,D,p[D],x),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?D:S.key),v=s(S,v,D),T===null?b=S:T.sibling=S,T=S);return t&&w.forEach(function(z){return e(u,z)}),ht&&Mr(u,D),b}function y(u,v,p,x){var b=ro(p);if(typeof b!="function")throw Error(ie(150));if(p=b.call(p),p==null)throw Error(ie(151));for(var T=b=null,w=v,D=v=0,S=null,E=p.next();w!==null&&!E.done;D++,E=p.next()){w.index>D?(S=w,w=null):S=w.sibling;var z=d(u,w,E.value,x);if(z===null){w===null&&(w=S);break}t&&w&&z.alternate===null&&e(u,w),v=s(z,v,D),T===null?b=z:T.sibling=z,T=z,w=S}if(E.done)return n(u,w),ht&&Mr(u,D),b;if(w===null){for(;!E.done;D++,E=p.next())E=f(u,E.value,x),E!==null&&(v=s(E,v,D),T===null?b=E:T.sibling=E,T=E);return ht&&Mr(u,D),b}for(w=i(u,w);!E.done;D++,E=p.next())E=m(w,u,D,E.value,x),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?D:E.key),v=s(E,v,D),T===null?b=E:T.sibling=E,T=E);return t&&w.forEach(function(V){return e(u,V)}),ht&&Mr(u,D),b}function g(u,v,p,x){if(typeof p=="object"&&p!==null&&p.type===ms&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ga:e:{for(var b=p.key,T=v;T!==null;){if(T.key===b){if(b=p.type,b===ms){if(T.tag===7){n(u,T.sibling),v=r(T,p.props.children),v.return=u,u=v;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Bi&&Yf(b)===T.type){n(u,T.sibling),v=r(T,p.props),v.ref=co(u,T,p),v.return=u,u=v;break e}n(u,T);break}else e(u,T);T=T.sibling}p.type===ms?(v=Dr(p.props.children,u.mode,x,p.key),v.return=u,u=v):(x=Ml(p.type,p.key,p.props,null,u.mode,x),x.ref=co(u,v,p),x.return=u,u=x)}return o(u);case ps:e:{for(T=p.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===p.containerInfo&&v.stateNode.implementation===p.implementation){n(u,v.sibling),v=r(v,p.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Jc(p,u.mode,x),v.return=u,u=v}return o(u);case Bi:return T=p._init,g(u,v,T(p._payload),x)}if(So(p))return _(u,v,p,x);if(ro(p))return y(u,v,p,x);ba(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,p),v.return=u,u=v):(n(u,v),v=Qc(p,u.mode,x),v.return=u,u=v),o(u)):n(u,v)}return g}var Hs=w0(!0),T0=w0(!1),zl=fr(null),Bl=null,Es=null,vd=null;function _d(){vd=Es=Bl=null}function yd(t){var e=zl.current;lt(zl),t._currentValue=e}function yh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){Bl=t,vd=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(vd!==t)if(t={context:t,memoizedValue:e,next:null},Es===null){if(Bl===null)throw Error(ie(308));Es=t,Bl.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return e}var Rr=null;function xd(t){Rr===null?Rr=[t]:Rr.push(t)}function A0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xd(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function Sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,od(t,n)}}function qf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hl(t,e,n,i){var r=t.updateQueue;Hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(m,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(m,f,d):_,d==null)break e;f=vt({},f,d);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=m,l=f):h=h.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=f}}function $f(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var ua={},ui=fr(ua),Zo=fr(ua),Ko=fr(ua);function Pr(t){if(t===ua)throw Error(ie(174));return t}function Md(t,e){switch(rt(Ko,e),rt(Zo,t),rt(ui,ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ju(e,t)}lt(ui),rt(ui,e)}function Gs(){lt(ui),lt(Zo),lt(Ko)}function C0(t){Pr(Ko.current);var e=Pr(ui.current),n=Ju(e,t.type);e!==n&&(rt(Zo,t),rt(ui,n))}function Ed(t){Zo.current===t&&(lt(ui),lt(Zo))}var ft=fr(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function wd(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var vl=Pi.ReactCurrentDispatcher,Yc=Pi.ReactCurrentBatchConfig,kr=0,mt=null,Rt=null,Ut=null,Vl=!1,Lo=!1,Qo=0,ux=0;function Yt(){throw Error(ie(321))}function Td(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function Ad(t,e,n,i,r,s){if(kr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?px:mx,t=n(i,r),Lo){s=0;do{if(Lo=!1,Qo=0,25<=s)throw Error(ie(301));s+=1,Ut=Rt=null,e.updateQueue=null,vl.current=gx,t=n(i,r)}while(Lo)}if(vl.current=Wl,e=Rt!==null&&Rt.next!==null,kr=0,Ut=Rt=mt=null,Vl=!1,e)throw Error(ie(300));return t}function bd(){var t=Qo!==0;return Qo=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Hn(){if(Rt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Ut===null?mt.memoizedState:Ut.next;if(e!==null)Ut=e,Rt=t;else{if(t===null)throw Error(ie(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Jo(t,e){return typeof e=="function"?e(t):e}function qc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((kr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,mt.lanes|=h,zr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ti(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=Hn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ti(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function R0(){}function P0(t,e){var n=mt,i=Hn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,Cd(I0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ea(9,D0.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ie(349));kr&30||L0(n,e,r)}return r}function L0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function D0(t,e,n,i){e.value=n,e.getSnapshot=i,N0(e)&&U0(t)}function I0(t,e,n){return n(function(){N0(e)&&U0(t)})}function N0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function U0(t){var e=bi(t,1);e!==null&&ei(e,t,1,-1)}function Zf(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},e.queue=t,t=t.dispatch=fx.bind(null,mt,t),[e.memoizedState,t]}function ea(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function O0(){return Hn().memoizedState}function _l(t,e,n,i){var r=si();mt.flags|=t,r.memoizedState=ea(1|e,n,void 0,i===void 0?null:i)}function uc(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&Td(i,o.deps)){r.memoizedState=ea(e,n,s,i);return}}mt.flags|=t,r.memoizedState=ea(1|e,n,s,i)}function Kf(t,e){return _l(8390656,8,t,e)}function Cd(t,e){return uc(2048,8,t,e)}function F0(t,e){return uc(4,2,t,e)}function k0(t,e){return uc(4,4,t,e)}function z0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function B0(t,e,n){return n=n!=null?n.concat([t]):null,uc(4,4,z0.bind(null,e,t),n)}function Rd(){}function H0(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Td(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function G0(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Td(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function V0(t,e,n){return kr&21?(ti(n,e)||(n=qg(),mt.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function hx(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Yc.transition;Yc.transition={};try{t(!1),e()}finally{tt=n,Yc.transition=i}}function W0(){return Hn().memoizedState}function dx(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},X0(t))j0(e,n);else if(n=A0(t,e,n,i),n!==null){var r=on();ei(n,t,i,r),Y0(n,e,i)}}function fx(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(X0(t))j0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ti(a,o)){var l=e.interleaved;l===null?(r.next=r,xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=A0(t,e,r,i),n!==null&&(r=on(),ei(n,t,i,r),Y0(n,e,i))}}function X0(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function j0(t,e){Lo=Vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Y0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,od(t,n)}}var Wl={readContext:Bn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},px={readContext:Bn,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:Kf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_l(4194308,4,z0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=dx.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:Zf,useDebugValue:Rd,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=Zf(!1),e=t[0];return t=hx.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=si();if(ht){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),zt===null)throw Error(ie(349));kr&30||L0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kf(I0.bind(null,i,s,t),[t]),i.flags|=2048,ea(9,D0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=zt.identifierPrefix;if(ht){var n=Mi,i=Si;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ux++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mx={readContext:Bn,useCallback:H0,useContext:Bn,useEffect:Cd,useImperativeHandle:B0,useInsertionEffect:F0,useLayoutEffect:k0,useMemo:G0,useReducer:qc,useRef:O0,useState:function(){return qc(Jo)},useDebugValue:Rd,useDeferredValue:function(t){var e=Hn();return V0(e,Rt.memoizedState,t)},useTransition:function(){var t=qc(Jo)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:R0,useSyncExternalStore:P0,useId:W0,unstable_isNewReconciler:!1},gx={readContext:Bn,useCallback:H0,useContext:Bn,useEffect:Cd,useImperativeHandle:B0,useInsertionEffect:F0,useLayoutEffect:k0,useMemo:G0,useReducer:$c,useRef:O0,useState:function(){return $c(Jo)},useDebugValue:Rd,useDeferredValue:function(t){var e=Hn();return Rt===null?e.memoizedState=t:V0(e,Rt.memoizedState,t)},useTransition:function(){var t=$c(Jo)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:R0,useSyncExternalStore:P0,useId:W0,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hc={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=rr(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(ei(e,t,r,i),gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=rr(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(ei(e,t,r,i),gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=rr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(ei(e,t,i,n),gl(e,t,i))}};function Qf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!jo(n,i)||!jo(r,s):!0}function q0(t,e,n){var i=!1,r=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=fn(e)?Or:Jt.current,i=e.contextTypes,s=(i=i!=null)?zs(t,r):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&hc.enqueueReplaceState(e,e.state,null)}function Sh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Sd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=fn(e)?Or:Jt.current,r.context=zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hc.enqueueReplaceState(r,r.state,null),Hl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e){try{var n="",i=e;do n+=W_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vx=typeof WeakMap=="function"?WeakMap:Map;function $0(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){jl||(jl=!0,Dh=i),Mh(t,e)},n}function Z0(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Mh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mh(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new vx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Lx.bind(null,t,e,n),e.then(t,t))}function tp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function np(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var _x=Pi.ReactCurrentOwner,hn=!1;function rn(t,e,n,i){e.child=t===null?T0(e,null,n,i):Hs(e,t.child,n,i)}function ip(t,e,n,i,r){n=n.render;var s=e.ref;return Is(e,r),i=Ad(t,e,n,i,s,r),n=bd(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(ht&&n&&pd(e),e.flags|=1,rn(t,e,i,r),e.child)}function rp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Fd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,K0(t,e,s,i,r)):(t=Ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(o,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function K0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(jo(s,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return Eh(t,e,n,i,r)}function Q0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Ts,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(Ts,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(Ts,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(Ts,Sn),Sn|=i;return rn(t,e,r,n),e.child}function J0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Eh(t,e,n,i,r){var s=fn(n)?Or:Jt.current;return s=zs(e,s),Is(e,r),n=Ad(t,e,n,i,s,r),i=bd(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(ht&&i&&pd(e),e.flags|=1,rn(t,e,n,r),e.child)}function sp(t,e,n,i,r){if(fn(n)){var s=!0;Ol(e)}else s=!1;if(Is(e,r),e.stateNode===null)yl(t,e),q0(e,n,i),Sh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=fn(n)?Or:Jt.current,c=zs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Jf(e,o,i,c),Hi=!1;var d=e.memoizedState;o.state=d,Hl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||dn.current||Hi?(typeof h=="function"&&(xh(e,n,h,i),l=e.memoizedState),(a=Hi||Qf(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,b0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=fn(n)?Or:Jt.current,l=zs(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Jf(e,o,i,l),Hi=!1,d=e.memoizedState,o.state=d,Hl(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||dn.current||Hi?(typeof m=="function"&&(xh(e,n,m,i),_=e.memoizedState),(c=Hi||Qf(e,n,c,i,d,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return wh(t,e,n,i,s,r)}function wh(t,e,n,i,r,s){J0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Wf(e,n,!1),Ci(t,e,s);i=e.stateNode,_x.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):rn(t,e,a,s),e.memoizedState=i.state,r&&Wf(e,n,!0),e.child}function ev(t){var e=t.stateNode;e.pendingContext?Vf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vf(t,e.context,!1),Md(t,e.containerInfo)}function op(t,e,n,i,r){return Bs(),gd(r),e.flags|=256,rn(t,e,n,i),e.child}var Th={dehydrated:null,treeContext:null,retryLane:0};function Ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function tv(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ft,r&1),t===null)return _h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pc(o,i,0,null),t=Dr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ah(n),e.memoizedState=Th,t):Pd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return yx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Dr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Th,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Pd(t,e){return e=pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ca(t,e,n,i){return i!==null&&gd(i),Hs(e,t.child,null,n),t=Pd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Zc(Error(ie(422))),Ca(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=pc({mode:"visible",children:i.children},r,0,null),s=Dr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=Ah(o),e.memoizedState=Th,s);if(!(e.mode&1))return Ca(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Zc(s,i,void 0),Ca(t,e,o,i)}if(a=(o&t.childLanes)!==0,hn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),ei(i,t,r,-1))}return Od(),i=Zc(Error(ie(421))),Ca(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Dx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=tr(r.nextSibling),wn=e,ht=!0,Zn=null,t!==null&&(Ln[Dn++]=Si,Ln[Dn++]=Mi,Ln[Dn++]=Fr,Si=t.id,Mi=t.overflow,Fr=e),e=Pd(e,i.children),e.flags|=4096,e)}function ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),yh(t.return,e,n)}function Kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function nv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,n,e);else if(t.tag===19)ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xx(t,e,n){switch(e.tag){case 3:ev(e),Bs();break;case 5:C0(e);break;case 1:fn(e.type)&&Ol(e);break;case 4:Md(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?tv(t,e,n):(rt(ft,ft.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);rt(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return nv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,Q0(t,e,n)}return Ci(t,e,n)}var iv,bh,rv,sv;iv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bh=function(){};rv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Pr(ui.current);var s=null;switch(n){case"input":r=$u(t,r),i=$u(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Qu(t,r),i=Qu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Nl)}eh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};sv=function(t,e,n,i){n!==i&&(e.flags|=4)};function uo(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Sx(t,e,n){var i=e.pendingProps;switch(md(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return fn(e.type)&&Ul(),qt(e),null;case 3:return i=e.stateNode,Gs(),lt(dn),lt(Jt),wd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(Uh(Zn),Zn=null))),bh(t,e),qt(e),null;case 5:Ed(e);var r=Pr(Ko.current);if(n=e.type,t!==null&&e.stateNode!=null)rv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return qt(e),null}if(t=Pr(ui.current),Aa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[$o]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<Eo.length;r++)ot(Eo[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":gf(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":_f(i,s),ot("invalid",i)}eh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",""+a]):zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":va(i),vf(i,s,!0);break;case"textarea":va(i),yf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ig(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[li]=e,t[$o]=i,iv(t,e,!1,!1),e.stateNode=t;e:{switch(o=th(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<Eo.length;r++)ot(Eo[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":gf(t,i),r=$u(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":_f(t,i),r=Qu(t,i),ot("invalid",t);break;default:r=i}eh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Og(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ng(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bo(t,l):typeof l=="number"&&Bo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&ed(t,s,l,o))}switch(n){case"input":va(t),vf(t,i,!1);break;case"textarea":va(t),yf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+cr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)sv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Pr(Ko.current),Pr(ui.current),Aa(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:Ta(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return qt(e),null;case 13:if(lt(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&En!==null&&e.mode&1&&!(e.flags&128))E0(),Bs(),e.flags|=98560,s=!1;else if(s=Aa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[li]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Zn!==null&&(Uh(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Pt===0&&(Pt=3):Od())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Gs(),bh(t,e),t===null&&Yo(e.stateNode.containerInfo),qt(e),null;case 10:return yd(e.type._context),qt(e),null;case 17:return fn(e.type)&&Ul(),qt(e),null;case 19:if(lt(ft),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)uo(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gl(t),o!==null){for(e.flags|=128,uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Ws&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Gl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return qt(e),null}else 2*Et()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=ft.current,rt(ft,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Ud(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Mx(t,e){switch(md(e),e.tag){case 1:return fn(e.type)&&Ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),lt(dn),lt(Jt),wd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ed(e),null;case 13:if(lt(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ft),null;case 4:return Gs(),null;case 10:return yd(e.type._context),null;case 22:case 23:return Ud(),null;case 24:return null;default:return null}}var Ra=!1,Qt=!1,Ex=typeof WeakSet=="function"?WeakSet:Set,me=null;function ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function Ch(t,e,n){try{n()}catch(i){xt(t,e,i)}}var lp=!1;function wx(t,e){if(hh=Ll,t=u0(),fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dh={focusedElem:t,selectionRange:n},Ll=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Yn(e.type,y),g);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(x){xt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=lp,lp=!1,_}function Do(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ch(e,n,s)}r=r.next}while(r!==i)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ov(t){var e=t.alternate;e!==null&&(t.alternate=null,ov(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[$o],delete e[mh],delete e[ox],delete e[ax])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function av(t){return t.tag===5||t.tag===3||t.tag===4}function cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ph(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nl));else if(i!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}function Lh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Lh(t,e,n),t=t.sibling;t!==null;)Lh(t,e,n),t=t.sibling}var Gt=null,qn=!1;function Di(t,e,n){for(n=n.child;n!==null;)lv(t,e,n),n=n.sibling}function lv(t,e,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(rc,n)}catch{}switch(n.tag){case 5:Qt||ws(n,e);case 6:var i=Gt,r=qn;Gt=null,Di(t,e,n),Gt=i,qn=r,Gt!==null&&(qn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(qn?(t=Gt,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),Wo(t)):Wc(Gt,n.stateNode));break;case 4:i=Gt,r=qn,Gt=n.stateNode.containerInfo,qn=!0,Di(t,e,n),Gt=i,qn=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ch(n,e,o),r=r.next}while(r!==i)}Di(t,e,n);break;case 1:if(!Qt&&(ws(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Di(t,e,n),Qt=i):Di(t,e,n);break;default:Di(t,e,n)}}function up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ex),e.forEach(function(i){var r=Ix.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,qn=!1;break e;case 3:Gt=a.stateNode.containerInfo,qn=!0;break e;case 4:Gt=a.stateNode.containerInfo,qn=!0;break e}a=a.return}if(Gt===null)throw Error(ie(160));lv(s,o,r),Gt=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cv(e,t),e=e.sibling}function cv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ii(t),i&4){try{Do(3,t,t.return),dc(3,t)}catch(y){xt(t,t.return,y)}try{Do(5,t,t.return)}catch(y){xt(t,t.return,y)}}break;case 1:Gn(e,t),ii(t),i&512&&n!==null&&ws(n,n.return);break;case 5:if(Gn(e,t),ii(t),i&512&&n!==null&&ws(n,n.return),t.flags&32){var r=t.stateNode;try{Bo(r,"")}catch(y){xt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Lg(r,s),th(a,o);var c=th(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?Og(r,f):h==="dangerouslySetInnerHTML"?Ng(r,f):h==="children"?Bo(r,f):ed(r,h,f,c)}switch(a){case"input":Zu(r,s);break;case"textarea":Dg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Rs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[$o]=s}catch(y){xt(t,t.return,y)}}break;case 6:if(Gn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){xt(t,t.return,y)}}break;case 3:if(Gn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(e.containerInfo)}catch(y){xt(t,t.return,y)}break;case 4:Gn(e,t),ii(t);break;case 13:Gn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Id=Et())),i&4&&up(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||h,Gn(e,t),Qt=c):Gn(e,t),ii(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(me=t,h=t.child;h!==null;){for(f=me=h;me!==null;){switch(d=me,m=d.child,d.tag){case 0:case 11:case 14:case 15:Do(4,d,d.return);break;case 1:ws(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){xt(i,n,y)}}break;case 5:ws(d,d.return);break;case 22:if(d.memoizedState!==null){dp(f);continue}}m!==null?(m.return=d,me=m):dp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ug("display",o))}catch(y){xt(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){xt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gn(e,t),ii(t),i&4&&up(t);break;case 21:break;default:Gn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(av(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Bo(r,""),i.flags&=-33);var s=cp(t);Lh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=cp(t);Ph(t,a,o);break;default:throw Error(ie(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Tx(t,e,n){me=t,uv(t)}function uv(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ra;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Qt;a=Ra;var c=Qt;if(Ra=o,(Qt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?fp(r):l!==null?(l.return=o,me=l):fp(r);for(;s!==null;)me=s,uv(s),s=s.sibling;me=r,Ra=a,Qt=c}hp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):hp(t)}}function hp(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$f(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$f(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Wo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Qt||e.flags&512&&Rh(e)}catch(d){xt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function dp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function fp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Rh(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{Rh(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var Ax=Math.ceil,Xl=Pi.ReactCurrentDispatcher,Ld=Pi.ReactCurrentOwner,zn=Pi.ReactCurrentBatchConfig,Ke=0,zt=null,Ct=null,Wt=0,Sn=0,Ts=fr(0),Pt=0,ta=null,zr=0,fc=0,Dd=0,Io=null,un=null,Id=0,Ws=1/0,yi=null,jl=!1,Dh=null,ir=null,Pa=!1,qi=null,Yl=0,No=0,Ih=null,xl=-1,Sl=0;function on(){return Ke&6?Et():xl!==-1?xl:xl=Et()}function rr(t){return t.mode&1?Ke&2&&Wt!==0?Wt&-Wt:cx.transition!==null?(Sl===0&&(Sl=qg()),Sl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:t0(t.type)),t):1}function ei(t,e,n,i){if(50<No)throw No=0,Ih=null,Error(ie(185));aa(t,n,i),(!(Ke&2)||t!==zt)&&(t===zt&&(!(Ke&2)&&(fc|=n),Pt===4&&Xi(t,Wt)),pn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Ws=Et()+500,cc&&pr()))}function pn(t,e){var n=t.callbackNode;cy(t,e);var i=Pl(t,t===zt?Wt:0);if(i===0)n!==null&&Mf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Mf(n),e===1)t.tag===0?lx(pp.bind(null,t)):x0(pp.bind(null,t)),rx(function(){!(Ke&6)&&pr()}),n=null;else{switch($g(i)){case 1:n=sd;break;case 4:n=jg;break;case 16:n=Rl;break;case 536870912:n=Yg;break;default:n=Rl}n=_v(n,hv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hv(t,e){if(xl=-1,Sl=0,Ke&6)throw Error(ie(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var i=Pl(t,t===zt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ql(t,i);else{e=i;var r=Ke;Ke|=2;var s=fv();(zt!==t||Wt!==e)&&(yi=null,Ws=Et()+500,Lr(t,e));do try{Rx();break}catch(a){dv(t,a)}while(!0);_d(),Xl.current=s,Ke=r,Ct!==null?e=0:(zt=null,Wt=0,e=Pt)}if(e!==0){if(e===2&&(r=oh(t),r!==0&&(i=r,e=Nh(t,r))),e===1)throw n=ta,Lr(t,0),Xi(t,i),pn(t,Et()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!bx(r)&&(e=ql(t,i),e===2&&(s=oh(t),s!==0&&(i=s,e=Nh(t,s))),e===1))throw n=ta,Lr(t,0),Xi(t,i),pn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Er(t,un,yi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=Id+500-Et(),10<e)){if(Pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ph(Er.bind(null,t,un,yi),e);break}Er(t,un,yi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ax(i/1960))-i,10<i){t.timeoutHandle=ph(Er.bind(null,t,un,yi),i);break}Er(t,un,yi);break;case 5:Er(t,un,yi);break;default:throw Error(ie(329))}}}return pn(t,Et()),t.callbackNode===n?hv.bind(null,t):null}function Nh(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=ql(t,e),t!==2&&(e=un,un=n,e!==null&&Uh(e)),t}function Uh(t){un===null?un=t:un.push.apply(un,t)}function bx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~Dd,e&=~fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function pp(t){if(Ke&6)throw Error(ie(327));Ns();var e=Pl(t,0);if(!(e&1))return pn(t,Et()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var i=oh(t);i!==0&&(e=i,n=Nh(t,i))}if(n===1)throw n=ta,Lr(t,0),Xi(t,e),pn(t,Et()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,un,yi),pn(t,Et()),null}function Nd(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Ws=Et()+500,cc&&pr())}}function Br(t){qi!==null&&qi.tag===0&&!(Ke&6)&&Ns();var e=Ke;Ke|=1;var n=zn.transition,i=tt;try{if(zn.transition=null,tt=1,t)return t()}finally{tt=i,zn.transition=n,Ke=e,!(Ke&6)&&pr()}}function Ud(){Sn=Ts.current,lt(Ts)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ix(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(md(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ul();break;case 3:Gs(),lt(dn),lt(Jt),wd();break;case 5:Ed(i);break;case 4:Gs();break;case 13:lt(ft);break;case 19:lt(ft);break;case 10:yd(i.type._context);break;case 22:case 23:Ud()}n=n.return}if(zt=t,Ct=t=sr(t.current,null),Wt=Sn=e,Pt=0,ta=null,Dd=fc=zr=0,un=Io=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Rr=null}return t}function dv(t,e){do{var n=Ct;try{if(_d(),vl.current=Wl,Vl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vl=!1}if(kr=0,Ut=Rt=mt=null,Lo=!1,Qo=0,Ld.current=null,n===null||n.return===null){Pt=1,ta=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=tp(o);if(m!==null){m.flags&=-257,np(m,o,a,s,e),m.mode&1&&ep(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){ep(s,c,e),Od();break e}l=Error(ie(426))}}else if(ht&&a.mode&1){var g=tp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),np(g,o,a,s,e),gd(Vs(l,a));break e}}s=l=Vs(l,a),Pt!==4&&(Pt=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=$0(s,l,e);qf(s,u);break e;case 1:a=l;var v=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ir===null||!ir.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Z0(s,a,e);qf(s,x);break e}}s=s.return}while(s!==null)}mv(n)}catch(b){e=b,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function fv(){var t=Xl.current;return Xl.current=Wl,t===null?Wl:t}function Od(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),zt===null||!(zr&268435455)&&!(fc&268435455)||Xi(zt,Wt)}function ql(t,e){var n=Ke;Ke|=2;var i=fv();(zt!==t||Wt!==e)&&(yi=null,Lr(t,e));do try{Cx();break}catch(r){dv(t,r)}while(!0);if(_d(),Ke=n,Xl.current=i,Ct!==null)throw Error(ie(261));return zt=null,Wt=0,Pt}function Cx(){for(;Ct!==null;)pv(Ct)}function Rx(){for(;Ct!==null&&!ey();)pv(Ct)}function pv(t){var e=vv(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?mv(t):Ct=e,Ld.current=null}function mv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Mx(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Ct=null;return}}else if(n=Sx(n,e,Sn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Pt===0&&(Pt=5)}function Er(t,e,n){var i=tt,r=zn.transition;try{zn.transition=null,tt=1,Px(t,e,n,i)}finally{zn.transition=r,tt=i}return null}function Px(t,e,n,i){do Ns();while(qi!==null);if(Ke&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(uy(t,s),t===zt&&(Ct=zt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,_v(Rl,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=tt;tt=1;var a=Ke;Ke|=4,Ld.current=null,wx(t,n),cv(n,t),Zy(dh),Ll=!!hh,dh=hh=null,t.current=n,Tx(n),ty(),Ke=a,tt=o,zn.transition=s}else t.current=n;if(Pa&&(Pa=!1,qi=t,Yl=r),s=t.pendingLanes,s===0&&(ir=null),ry(n.stateNode),pn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(jl)throw jl=!1,t=Dh,Dh=null,t;return Yl&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===Ih?No++:(No=0,Ih=t):No=0,pr(),null}function Ns(){if(qi!==null){var t=$g(Yl),e=zn.transition,n=tt;try{if(zn.transition=null,tt=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,Yl=0,Ke&6)throw Error(ie(331));var r=Ke;for(Ke|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var h=me;switch(h.tag){case 0:case 11:case 15:Do(8,h,s)}var f=h.child;if(f!==null)f.return=h,me=f;else for(;me!==null;){h=me;var d=h.sibling,m=h.return;if(ov(h),h===c){me=null;break}if(d!==null){d.return=m,me=d;break}me=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Do(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){o=me;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,me=p;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dc(9,a)}}catch(b){xt(a,a.return,b)}if(a===o){me=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,me=x;break e}me=a.return}}if(Ke=r,pr(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(rc,t)}catch{}i=!0}return i}finally{tt=n,zn.transition=e}}return!1}function mp(t,e,n){e=Vs(n,e),e=$0(t,e,1),t=nr(t,e,1),e=on(),t!==null&&(aa(t,1,e),pn(t,e))}function xt(t,e,n){if(t.tag===3)mp(t,t,n);else for(;e!==null;){if(e.tag===3){mp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Vs(n,t),t=Z0(e,t,1),e=nr(e,t,1),t=on(),e!==null&&(aa(e,1,t),pn(e,t));break}}e=e.return}}function Lx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Wt&n)===n&&(Pt===4||Pt===3&&(Wt&130023424)===Wt&&500>Et()-Id?Lr(t,0):Dd|=n),pn(t,e)}function gv(t,e){e===0&&(t.mode&1?(e=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):e=1);var n=on();t=bi(t,e),t!==null&&(aa(t,e,n),pn(t,n))}function Dx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gv(t,n)}function Ix(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),gv(t,n)}var vv;vv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,xx(t,e,n);hn=!!(t.flags&131072)}else hn=!1,ht&&e.flags&1048576&&S0(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yl(t,e),t=e.pendingProps;var r=zs(e,Jt.current);Is(e,n),r=Ad(null,e,i,t,r,n);var s=bd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Ol(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sd(e),r.updater=hc,e.stateNode=r,r._reactInternals=e,Sh(e,i,t,n),e=wh(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&pd(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ux(i),t=Yn(i,t),r){case 0:e=Eh(null,e,i,t,n);break e;case 1:e=sp(null,e,i,t,n);break e;case 11:e=ip(null,e,i,t,n);break e;case 14:e=rp(null,e,i,Yn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Eh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),sp(t,e,i,r,n);case 3:e:{if(ev(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,b0(t,e),Hl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vs(Error(ie(423)),e),e=op(t,e,i,n,r);break e}else if(i!==r){r=Vs(Error(ie(424)),e),e=op(t,e,i,n,r);break e}else for(En=tr(e.stateNode.containerInfo.firstChild),wn=e,ht=!0,Zn=null,n=T0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Ci(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return C0(e),t===null&&_h(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,fh(i,r)?o=null:s!==null&&fh(i,s)&&(e.flags|=32),J0(t,e),rn(t,e,o,n),e.child;case 6:return t===null&&_h(e),null;case 13:return tv(t,e,n);case 4:return Md(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Hs(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),ip(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(zl,i._currentValue),i._currentValue=o,s!==null)if(ti(s.value,o)){if(s.children===r.children&&!dn.current){e=Ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,n),r=Bn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),rp(t,e,i,r,n);case 15:return K0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),yl(t,e),e.tag=1,fn(i)?(t=!0,Ol(e)):t=!1,Is(e,n),q0(e,i,r),Sh(e,i,r,n),wh(null,e,i,!0,t,n);case 19:return nv(t,e,n);case 22:return Q0(t,e,n)}throw Error(ie(156,e.tag))};function _v(t,e){return Xg(t,e)}function Nx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new Nx(t,e,n,i)}function Fd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ux(t){if(typeof t=="function")return Fd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nd)return 11;if(t===id)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Fd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ms:return Dr(n.children,r,s,e);case td:o=8,r|=8;break;case Xu:return t=kn(12,n,e,r|2),t.elementType=Xu,t.lanes=s,t;case ju:return t=kn(13,n,e,r),t.elementType=ju,t.lanes=s,t;case Yu:return t=kn(19,n,e,r),t.elementType=Yu,t.lanes=s,t;case Cg:return pc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ag:o=10;break e;case bg:o=9;break e;case nd:o=11;break e;case id:o=14;break e;case Bi:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=kn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Dr(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function pc(t,e,n,i){return t=kn(22,t,i,e),t.elementType=Cg,t.lanes=n,t.stateNode={isHidden:!1},t}function Qc(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ox(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ic(0),this.expirationTimes=Ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ic(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kd(t,e,n,i,r,s,o,a,l){return t=new Ox(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sd(s),t}function Fx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function yv(t){if(!t)return ur;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(fn(n))return y0(t,n,e)}return e}function xv(t,e,n,i,r,s,o,a,l){return t=kd(n,i,!0,t,r,s,o,a,l),t.context=yv(null),n=t.current,i=on(),r=rr(n),s=wi(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,aa(t,r,i),pn(t,i),t}function mc(t,e,n,i){var r=e.current,s=on(),o=rr(r);return n=yv(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,o),t!==null&&(ei(t,r,o,s),gl(t,r,o)),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zd(t,e){gp(t,e),(t=t.alternate)&&gp(t,e)}function kx(){return null}var Sv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bd(t){this._internalRoot=t}gc.prototype.render=Bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));mc(t,e,null,null)};gc.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){mc(null,t,null,null)}),e[Ai]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&e0(t)}};function Hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function zx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=$l(o);s.call(c)}}var o=xv(e,i,t,0,null,!1,!1,"",vp);return t._reactRootContainer=o,t[Ai]=o.current,Yo(t.nodeType===8?t.parentNode:t),Br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=$l(l);a.call(c)}}var l=kd(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=l,t[Ai]=l.current,Yo(t.nodeType===8?t.parentNode:t),Br(function(){mc(e,l,n,i)}),l}function _c(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=$l(o);a.call(l)}}mc(e,o,t,r)}else o=zx(n,e,t,r,i);return $l(o)}Zg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mo(e.pendingLanes);n!==0&&(od(e,n|1),pn(e,Et()),!(Ke&6)&&(Ws=Et()+500,pr()))}break;case 13:Br(function(){var i=bi(t,1);if(i!==null){var r=on();ei(i,t,1,r)}}),zd(t,1)}};ad=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=on();ei(e,t,134217728,n)}zd(t,134217728)}};Kg=function(t){if(t.tag===13){var e=rr(t),n=bi(t,e);if(n!==null){var i=on();ei(n,t,e,i)}zd(t,e)}};Qg=function(){return tt};Jg=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};ih=function(t,e,n){switch(e){case"input":if(Zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=lc(i);if(!r)throw Error(ie(90));Pg(i),Zu(i,r)}}}break;case"textarea":Dg(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};zg=Nd;Bg=Br;var Bx={usingClientEntryPoint:!1,Events:[ca,ys,lc,Fg,kg,Nd]},ho={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hx={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vg(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{rc=La.inject(Hx),ci=La}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(e))throw Error(ie(200));return Fx(t,e,null,n)};bn.createRoot=function(t,e){if(!Hd(t))throw Error(ie(299));var n=!1,i="",r=Sv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kd(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,Yo(t.nodeType===8?t.parentNode:t),new Bd(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Vg(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Br(t)};bn.hydrate=function(t,e,n){if(!vc(e))throw Error(ie(200));return _c(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!Hd(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Sv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xv(e,null,t,1,n??null,r,!1,s,o),t[Ai]=e.current,Yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new gc(e)};bn.render=function(t,e,n){if(!vc(e))throw Error(ie(200));return _c(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!vc(t))throw Error(ie(40));return t._reactRootContainer?(Br(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};bn.unstable_batchedUpdates=Nd;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!vc(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return _c(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function Mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mv)}catch(t){console.error(t)}}Mv(),Mg.exports=bn;var Gx=Mg.exports,Ev,_p=Gx;Ev=_p.createRoot,_p.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="160",Gi={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vx=0,yp=1,Wx=2,wv=1,Xx=2,_i=3,hr=0,mn=1,On=2,or=0,Us=1,xp=2,Sp=3,Mp=4,jx=5,Ar=100,Yx=101,qx=102,Ep=103,wp=104,$x=200,Zx=201,Kx=202,Qx=203,Oh=204,Fh=205,Jx=206,eS=207,tS=208,nS=209,iS=210,rS=211,sS=212,oS=213,aS=214,lS=0,cS=1,uS=2,Zl=3,hS=4,dS=5,fS=6,pS=7,Tv=0,mS=1,gS=2,ar=0,vS=1,_S=2,yS=3,Av=4,xS=5,SS=6,bv=300,Xs=301,js=302,kh=303,zh=304,yc=306,Bh=1e3,Kn=1001,Hh=1002,sn=1003,Tp=1004,eu=1005,In=1006,MS=1007,na=1008,lr=1009,ES=1010,wS=1011,Vd=1012,Cv=1013,$i=1014,Zi=1015,ia=1016,Rv=1017,Pv=1018,Ir=1020,TS=1021,Qn=1023,AS=1024,bS=1025,Nr=1026,Ys=1027,CS=1028,Lv=1029,RS=1030,Dv=1031,Iv=1033,tu=33776,nu=33777,iu=33778,ru=33779,Ap=35840,bp=35841,Cp=35842,Rp=35843,Nv=36196,Pp=37492,Lp=37496,Dp=37808,Ip=37809,Np=37810,Up=37811,Op=37812,Fp=37813,kp=37814,zp=37815,Bp=37816,Hp=37817,Gp=37818,Vp=37819,Wp=37820,Xp=37821,su=36492,jp=36494,Yp=36495,PS=36283,qp=36284,$p=36285,Zp=36286,Uv=3e3,Ur=3001,LS=3200,DS=3201,Ov=0,IS=1,Fn="",Ot="srgb",Ri="srgb-linear",Wd="display-p3",xc="display-p3-linear",Kl="linear",at="srgb",Ql="rec709",Jl="p3",Yr=7680,Kp=519,NS=512,US=513,OS=514,Fv=515,FS=516,kS=517,zS=518,BS=519,Qp=35044,Jp="300 es",Gh=1035,Ei=2e3,ec=2001;class Xr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let em=1234567;const Os=Math.PI/180,ra=180/Math.PI;function Js(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Ft(t,e,n){return Math.max(e,Math.min(n,t))}function Xd(t,e){return(t%e+e)%e}function HS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function GS(t,e,n){return t!==e?(n-t)/(e-t):0}function Uo(t,e,n){return(1-n)*t+n*e}function VS(t,e,n,i){return Uo(t,e,1-Math.exp(-n*i))}function WS(t,e=1){return e-Math.abs(Xd(t,e*2)-e)}function XS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function jS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function YS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function qS(t,e){return t+Math.random()*(e-t)}function $S(t){return t*(.5-Math.random())}function ZS(t){t!==void 0&&(em=t);let e=em+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KS(t){return t*Os}function QS(t){return t*ra}function Vh(t){return(t&t-1)===0&&t!==0}function JS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function tc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function eM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),h=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),m=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*h,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*h,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*h,a*c);break;case"XZX":t.set(a*h,l*_,l*m,a*c);break;case"YXY":t.set(l*m,a*h,l*_,a*c);break;case"ZYZ":t.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const jn={DEG2RAD:Os,RAD2DEG:ra,generateUUID:Js,clamp:Ft,euclideanModulo:Xd,mapLinear:HS,inverseLerp:GS,lerp:Uo,damp:VS,pingpong:WS,smoothstep:XS,smootherstep:jS,randInt:YS,randFloat:qS,randFloatSpread:$S,seededRandom:ZS,degToRad:KS,radToDeg:QS,isPowerOfTwo:Vh,ceilPowerOfTwo:JS,floorPowerOfTwo:tc,setQuaternionFromProperEuler:eM,normalize:en,denormalize:fs};class ge{constructor(e=0,n=0){ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],m=i[5],_=i[8],y=r[0],g=r[3],u=r[6],v=r[1],p=r[4],x=r[7],b=r[2],T=r[5],w=r[8];return s[0]=o*y+a*v+l*b,s[3]=o*g+a*p+l*T,s[6]=o*u+a*x+l*w,s[1]=c*y+h*v+f*b,s[4]=c*g+h*p+f*T,s[7]=c*u+h*x+f*w,s[2]=d*y+m*v+_*b,s[5]=d*g+m*p+_*T,s[8]=d*u+m*x+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,m=c*s-o*l,_=n*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ou.makeScale(e,n)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,n){return this.premultiply(ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ou=new je;function kv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tM(){const t=nc("canvas");return t.style.display="block",t}const tm={};function Oo(t){t in tm||(tm[t]=!0,console.warn(t))}const nm=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),im=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Da={[Ri]:{transfer:Kl,primaries:Ql,toReference:t=>t,fromReference:t=>t},[Ot]:{transfer:at,primaries:Ql,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[xc]:{transfer:Kl,primaries:Jl,toReference:t=>t.applyMatrix3(im),fromReference:t=>t.applyMatrix3(nm)},[Wd]:{transfer:at,primaries:Jl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(im),fromReference:t=>t.applyMatrix3(nm).convertLinearToSRGB()}},nM=new Set([Ri,xc]),nt={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!nM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Da[e].toReference,r=Da[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Da[t].primaries},getTransfer:function(t){return t===Fn?Kl:Da[t].transfer}};function Fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function au(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class zv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=nc("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fs(n[i]/255)*255):n[i]=Fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iM=0;class Bv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Js(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lu(r[o].image)):s.push(lu(r[o]))}else s=lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rM=0;class Tn extends Xr{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,i=Kn,r=Kn,s=In,o=na,a=Qn,l=lr,c=Tn.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Js(),this.name="",this.source=new Bv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ur?Ot:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Ur:Uv}set encoding(e){Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ur?Ot:Fn}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=bv;Tn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,n=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],_=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const p=(c+1)/2,x=(m+1)/2,b=(u+1)/2,T=(h+d)/4,w=(f+y)/4,D=(_+g)/4;return p>x&&p>b?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=T/i,s=w/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=D/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-_)*(g-_)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(f-y)/v,this.z=(d-h)/v,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends Xr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new kt(0,0,e,n),this.scissorTest=!1,this.viewport=new kt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Oo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ur?Ot:Fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Bv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends sM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Hv extends Tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oM extends Tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==d||c!==m||h!==_){let g=1-a;const u=l*d+c*m+h*_+f*y,v=u>=0?1:-1,p=1-u*u;if(p>Number.EPSILON){const b=Math.sqrt(p),T=Math.atan2(b,u*v);g=Math.sin(g*T)/b,a=Math.sin(a*T)/b}const x=a*v;if(l=l*g+d*x,c=c*g+m*x,h=h*g+_*x,f=f*g+y*x,g===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+h*f+l*m-c*d,e[n+1]=l*_+h*d+c*f-a*m,e[n+2]=c*_+h*m+a*d-l*f,e[n+3]=h*_-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f-d*m*_;break;case"YXZ":this._x=d*h*f+c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f+d*m*_;break;case"ZXY":this._x=d*h*f-c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f-d*m*_;break;case"ZYX":this._x=d*h*f-c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f+d*m*_;break;case"YZX":this._x=d*h*f+c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f-d*m*_;break;case"XZY":this._x=d*h*f-c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,n=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*h,this.y=i+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cu.copy(this).projectOnVector(e),this.sub(cu)}reflect(e){return this.sub(cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cu=new R,rm=new Vt;class eo{constructor(e=new R(1/0,1/0,1/0),n=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Na.subVectors(this.max,fo),$r.subVectors(e.a,fo),Zr.subVectors(e.b,fo),Kr.subVectors(e.c,fo),Ii.subVectors(Zr,$r),Ni.subVectors(Kr,Zr),vr.subVectors($r,Kr);let n=[0,-Ii.z,Ii.y,0,-Ni.z,Ni.y,0,-vr.z,vr.y,Ii.z,0,-Ii.x,Ni.z,0,-Ni.x,vr.z,0,-vr.x,-Ii.y,Ii.x,0,-Ni.y,Ni.x,0,-vr.y,vr.x,0];return!uu(n,$r,Zr,Kr,Na)||(n=[1,0,0,0,1,0,0,0,1],!uu(n,$r,Zr,Kr,Na))?!1:(Ua.crossVectors(Ii,Ni),n=[Ua.x,Ua.y,Ua.z],uu(n,$r,Zr,Kr,Na))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new R,new R,new R,new R,new R,new R,new R,new R],Vn=new R,Ia=new eo,$r=new R,Zr=new R,Kr=new R,Ii=new R,Ni=new R,vr=new R,fo=new R,Na=new R,Ua=new R,_r=new R;function uu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){_r.fromArray(t,s);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),c=n.dot(_r),h=i.dot(_r);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const aM=new eo,po=new R,hu=new R;class Sc{constructor(e=new R,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):aM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);const n=po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(hu)),this.expandByPoint(po.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new R,du=new R,Oa=new R,Ui=new R,fu=new R,Fa=new R,pu=new R;class Mc{constructor(e=new R,n=new R(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){du.copy(e).add(n).multiplyScalar(.5),Oa.copy(n).sub(e).normalize(),Ui.copy(this.origin).sub(du);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Oa),a=Ui.dot(this.direction),l=-Ui.dot(Oa),c=Ui.lengthSq(),h=Math.abs(1-o*o);let f,d,m,_;if(h>0)if(f=o*l-a,d=o*a-l,_=s*h,f>=0)if(d>=-_)if(d<=_){const y=1/h;f*=y,d*=y,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(du).addScaledVector(Oa,d),m}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,s){fu.subVectors(n,e),Fa.subVectors(i,e),pu.crossVectors(fu,Fa);let o=this.direction.dot(pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(Fa.crossVectors(Ui,Fa));if(l<0)return null;const c=a*this.direction.dot(fu.cross(Ui));if(c<0||l+c>o)return null;const h=-a*Ui.dot(pu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,c,h,f,d,m,_,y,g){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,f,d,m,_,y,g)}set(e,n,i,r,s,o,a,l,c,h,f,d,m,_,y,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=_,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*f,_=a*h,y=a*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*f,_=c*h,y=c*f;n[0]=d+y*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*h,n[9]=-a,n[2]=m*a-_,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*f,_=c*h,y=c*f;n[0]=d-y*a,n[4]=-o*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*h,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*f,_=a*h,y=a*f;n[0]=l*h,n[4]=_*c-m,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*h,n[4]=y-d*f,n[8]=_*f+m,n[1]=f,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=m*f+_,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+y,n[5]=o*h,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*h,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lM,e,cM)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Oi.crossVectors(i,vn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Oi.crossVectors(i,vn)),Oi.normalize(),ka.crossVectors(vn,Oi),r[0]=Oi.x,r[4]=ka.x,r[8]=vn.x,r[1]=Oi.y,r[5]=ka.y,r[9]=vn.y,r[2]=Oi.z,r[6]=ka.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],m=i[13],_=i[2],y=i[6],g=i[10],u=i[14],v=i[3],p=i[7],x=i[11],b=i[15],T=r[0],w=r[4],D=r[8],S=r[12],E=r[1],z=r[5],V=r[9],J=r[13],I=r[2],F=r[6],j=r[10],$=r[14],N=r[3],U=r[7],B=r[11],Z=r[15];return s[0]=o*T+a*E+l*I+c*N,s[4]=o*w+a*z+l*F+c*U,s[8]=o*D+a*V+l*j+c*B,s[12]=o*S+a*J+l*$+c*Z,s[1]=h*T+f*E+d*I+m*N,s[5]=h*w+f*z+d*F+m*U,s[9]=h*D+f*V+d*j+m*B,s[13]=h*S+f*J+d*$+m*Z,s[2]=_*T+y*E+g*I+u*N,s[6]=_*w+y*z+g*F+u*U,s[10]=_*D+y*V+g*j+u*B,s[14]=_*S+y*J+g*$+u*Z,s[3]=v*T+p*E+x*I+b*N,s[7]=v*w+p*z+x*F+b*U,s[11]=v*D+p*V+x*j+b*B,s[15]=v*S+p*J+x*$+b*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],_=e[3],y=e[7],g=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+y*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*h-s*l*h)+g*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*h-i*c*h)+u*(-r*a*h-n*l*f+n*a*d+r*o*f-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],_=e[12],y=e[13],g=e[14],u=e[15],v=f*g*c-y*d*c+y*l*m-a*g*m-f*l*u+a*d*u,p=_*d*c-h*g*c-_*l*m+o*g*m+h*l*u-o*d*u,x=h*y*c-_*f*c+_*a*m-o*y*m-h*a*u+o*f*u,b=_*f*l-h*y*l-_*a*d+o*y*d+h*a*g-o*f*g,T=n*v+i*p+r*x+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(y*d*s-f*g*s-y*r*m+i*g*m+f*r*u-i*d*u)*w,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*u+i*l*u)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*w,e[4]=p*w,e[5]=(h*g*s-_*d*s+_*r*m-n*g*m-h*r*u+n*d*u)*w,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*u-n*l*u)*w,e[7]=(o*d*s-h*l*s+h*r*c-n*d*c-o*r*m+n*l*m)*w,e[8]=x*w,e[9]=(_*f*s-h*y*s-_*i*m+n*y*m+h*i*u-n*f*u)*w,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*w,e[11]=(h*a*s-o*f*s-h*i*c+n*f*c+o*i*m-n*a*m)*w,e[12]=b*w,e[13]=(h*y*r-_*f*r+_*i*d-n*y*d-h*i*g+n*f*g)*w,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*g-n*a*g)*w,e[15]=(o*f*r-h*a*r+h*i*l-n*f*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,f=a+a,d=s*c,m=s*h,_=s*f,y=o*h,g=o*f,u=a*f,v=l*c,p=l*h,x=l*f,b=i.x,T=i.y,w=i.z;return r[0]=(1-(y+u))*b,r[1]=(m+x)*b,r[2]=(_-p)*b,r[3]=0,r[4]=(m-x)*T,r[5]=(1-(d+u))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(_+p)*w,r[9]=(g-v)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,h=1/o,f=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,n.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let m,_;if(a===Ei)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ec)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(o-s),d=(n+e)*c,m=(i+r)*h;let _,y;if(a===Ei)_=(o+s)*f,y=-2*f;else if(a===ec)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Qr=new R,Wn=new gt,lM=new R(0,0,0),cM=new R(1,1,1),Oi=new R,ka=new R,vn=new R,sm=new gt,om=new Vt;class ha{constructor(e=0,n=0,i=0,r=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class jd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uM=0;const am=new R,Jr=new Vt,mi=new gt,za=new R,mo=new R,hM=new R,dM=new Vt,lm=new R(1,0,0),cm=new R(0,1,0),um=new R(0,0,1),fM={type:"added"},pM={type:"removed"};class wt extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new R,n=new ha,i=new Vt,r=new R(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new je}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?za.copy(e):za.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(mo,za,this.up):mi.lookAt(za,mo,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(mi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,hM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,dM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DEFAULT_UP=new R(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new R,gi=new R,mu=new R,vi=new R,es=new R,ts=new R,hm=new R,gu=new R,vu=new R,_u=new R;let Ba=!1;class Nn{constructor(e=new R,n=new R,i=new R){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Xn.subVectors(r,n),gi.subVectors(i,n),mu.subVectors(e,n);const o=Xn.dot(Xn),a=Xn.dot(gi),l=Xn.dot(mu),c=gi.dot(gi),h=gi.dot(mu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),gi.subVectors(e,n),Xn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Xn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Nn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;es.subVectors(r,i),ts.subVectors(s,i),gu.subVectors(e,i);const l=es.dot(gu),c=ts.dot(gu);if(l<=0&&c<=0)return n.copy(i);vu.subVectors(e,r);const h=es.dot(vu),f=ts.dot(vu);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(es,o);_u.subVectors(e,s);const m=es.dot(_u),_=ts.dot(_u);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ts,a);const g=h*_-m*f;if(g<=0&&f-h>=0&&m-_>=0)return hm.subVectors(s,r),a=(f-h)/(f-h+(m-_)),n.copy(r).addScaledVector(hm,a);const u=1/(g+y+d);return o=y*u,a=d*u,n.copy(i).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function yu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=Xd(e,1),n=Ft(n,0,1),i=Ft(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=yu(o,s,e+1/3),this.g=yu(o,s,e),this.b=yu(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=Gv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=au(e.r),this.g=au(e.g),this.b=au(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return nt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Ft(Zt.r*255,0,255))*65536+Math.round(Ft(Zt.g*255,0,255))*256+Math.round(Ft(Zt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Ot){nt.fromWorkingColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(Ha);const i=Uo(Fi.h,Ha.h,n),r=Uo(Fi.s,Ha.s,n),s=Uo(Fi.l,Ha.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new ke;ke.NAMES=Gv;let mM=0;class to extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Us,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Fh,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oh&&(i.blendSrc=this.blendSrc),this.blendDst!==Fh&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class da extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new R,Ga=new ge;class hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ga.fromBufferAttribute(this,n),Ga.applyMatrix3(e),this.setXY(n,Ga.x,Ga.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qp&&(e.usage=this.usage),e}}class Vv extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Wv extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Je extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gM=0;const Pn=new gt,xu=new wt,ns=new R,_n=new eo,go=new eo,Nt=new R;class pt extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kv(e)?Wv:Vv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Je(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];go.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(_n.min,go.min),_n.expandByPoint(Nt),Nt.addVectors(_n.max,go.max),_n.expandByPoint(Nt)):(_n.expandByPoint(go.min),_n.expandByPoint(go.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Nt.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(e,c),Nt.add(ns)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new R,h[E]=new R;const f=new R,d=new R,m=new R,_=new ge,y=new ge,g=new ge,u=new R,v=new R;function p(E,z,V){f.fromArray(r,E*3),d.fromArray(r,z*3),m.fromArray(r,V*3),_.fromArray(o,E*2),y.fromArray(o,z*2),g.fromArray(o,V*2),d.sub(f),m.sub(f),y.sub(_),g.sub(_);const J=1/(y.x*g.y-g.x*y.y);isFinite(J)&&(u.copy(d).multiplyScalar(g.y).addScaledVector(m,-y.y).multiplyScalar(J),v.copy(m).multiplyScalar(y.x).addScaledVector(d,-g.x).multiplyScalar(J),c[E].add(u),c[z].add(u),c[V].add(u),h[E].add(v),h[z].add(v),h[V].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let E=0,z=x.length;E<z;++E){const V=x[E],J=V.start,I=V.count;for(let F=J,j=J+I;F<j;F+=3)p(i[F+0],i[F+1],i[F+2])}const b=new R,T=new R,w=new R,D=new R;function S(E){w.fromArray(s,E*3),D.copy(w);const z=c[E];b.copy(z),b.sub(w.multiplyScalar(w.dot(z))).normalize(),T.crossVectors(D,z);const J=T.dot(h[E])<0?-1:1;l[E*4]=b.x,l[E*4+1]=b.y,l[E*4+2]=b.z,l[E*4+3]=J}for(let E=0,z=x.length;E<z;++E){const V=x[E],J=V.start,I=V.count;for(let F=J,j=J+I;F<j;F+=3)S(i[F+0]),S(i[F+1]),S(i[F+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,h=new R,f=new R;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let u=0;u<h;u++)d[_++]=c[m++]}return new hi(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dm=new gt,yr=new Mc,Va=new Sc,fm=new R,is=new R,rs=new R,ss=new R,Su=new R,Wa=new R,Xa=new ge,ja=new ge,Ya=new ge,pm=new R,mm=new R,gm=new R,qa=new R,$a=new R;class de extends wt{constructor(e=new pt,n=new da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(Su.fromBufferAttribute(f,e),o?Wa.addScaledVector(Su,h):Wa.addScaledVector(Su.sub(n),h))}n.add(Wa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(Va.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Va,fm)===null||yr.origin.distanceToSquared(fm)>(e.far-e.near)**2))&&(dm.copy(s).invert(),yr.copy(e.ray).applyMatrix4(dm),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,yr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const g=d[_],u=o[g.materialIndex],v=Math.max(g.start,m.start),p=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let x=v,b=p;x<b;x+=3){const T=a.getX(x),w=a.getX(x+1),D=a.getX(x+2);r=Za(this,u,e,i,c,h,f,T,w,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=_,u=y;g<u;g+=3){const v=a.getX(g),p=a.getX(g+1),x=a.getX(g+2);r=Za(this,o,e,i,c,h,f,v,p,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const g=d[_],u=o[g.materialIndex],v=Math.max(g.start,m.start),p=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let x=v,b=p;x<b;x+=3){const T=x,w=x+1,D=x+2;r=Za(this,u,e,i,c,h,f,T,w,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=_,u=y;g<u;g+=3){const v=g,p=g+1,x=g+2;r=Za(this,o,e,i,c,h,f,v,p,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function vM(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===hr,a),l===null)return null;$a.copy(a),$a.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($a);return c<n.near||c>n.far?null:{distance:c,point:$a.clone(),object:t}}function Za(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,is),t.getVertexPosition(l,rs),t.getVertexPosition(c,ss);const h=vM(t,e,n,i,is,rs,ss,qa);if(h){r&&(Xa.fromBufferAttribute(r,a),ja.fromBufferAttribute(r,l),Ya.fromBufferAttribute(r,c),h.uv=Nn.getInterpolation(qa,is,rs,ss,Xa,ja,Ya,new ge)),s&&(Xa.fromBufferAttribute(s,a),ja.fromBufferAttribute(s,l),Ya.fromBufferAttribute(s,c),h.uv1=Nn.getInterpolation(qa,is,rs,ss,Xa,ja,Ya,new ge),h.uv2=h.uv1),o&&(pm.fromBufferAttribute(o,a),mm.fromBufferAttribute(o,l),gm.fromBufferAttribute(o,c),h.normal=Nn.getInterpolation(qa,is,rs,ss,pm,mm,gm,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new R,materialIndex:0};Nn.getNormal(is,rs,ss,f.normal),h.face=f}return h}class bt extends pt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(f,2));function _(y,g,u,v,p,x,b,T,w,D,S){const E=x/w,z=b/D,V=x/2,J=b/2,I=T/2,F=w+1,j=D+1;let $=0,N=0;const U=new R;for(let B=0;B<j;B++){const Z=B*z-J;for(let Q=0;Q<F;Q++){const q=Q*E-V;U[y]=q*v,U[g]=Z*p,U[u]=I,c.push(U.x,U.y,U.z),U[y]=0,U[g]=0,U[u]=T>0?1:-1,h.push(U.x,U.y,U.z),f.push(Q/w),f.push(1-B/D),$+=1}}for(let B=0;B<D;B++)for(let Z=0;Z<w;Z++){const Q=d+Z+F*B,q=d+Z+F*(B+1),K=d+(Z+1)+F*(B+1),ce=d+(Z+1)+F*B;l.push(Q,q,ce),l.push(q,K,ce),N+=6}a.addGroup(m,N,S),m+=N,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function _M(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Xv(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const yM={clone:qs,merge:tn};var xM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xM,this.fragmentShader=SM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=_M(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jv extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Un extends jv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Os*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const os=-90,as=1;class MM extends wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(os,as,e,n);r.layers=this.layers,this.add(r);const s=new Un(os,as,e,n);s.layers=this.layers,this.add(s);const o=new Un(os,as,e,n);o.layers=this.layers,this.add(o);const a=new Un(os,as,e,n);a.layers=this.layers,this.add(a);const l=new Un(os,as,e,n);l.layers=this.layers,this.add(l);const c=new Un(os,as,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Yv extends Tn{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EM extends Hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Oo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ur?Ot:Fn),this.texture=new Yv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:In}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bt(5,5,5),s=new Gr({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:or});s.uniforms.tEquirect.value=n;const o=new de(r,s),a=n.minFilter;return n.minFilter===na&&(n.minFilter=In),new MM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Mu=new R,wM=new R,TM=new je;class oi{constructor(e=new R(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Mu.subVectors(i,n).cross(wM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Mu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||TM.getNormalMatrix(e),r=this.coplanarPoint(Mu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Sc,Ka=new R;class Yd{constructor(e=new oi,n=new oi,i=new oi,r=new oi,s=new oi,o=new oi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],m=r[8],_=r[9],y=r[10],g=r[11],u=r[12],v=r[13],p=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,g-m,x-u).normalize(),i[1].setComponents(l+s,d+c,g+m,x+u).normalize(),i[2].setComponents(l+o,d+h,g+_,x+v).normalize(),i[3].setComponents(l-o,d-h,g-_,x-v).normalize(),i[4].setComponents(l-a,d-f,g-y,x-p).normalize(),n===Ei)i[5].setComponents(l+a,d+f,g+y,x+p).normalize();else if(n===ec)i[5].setComponents(a,f,y,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ka.x=r.normal.x>0?e.max.x:e.min.x,Ka.y=r.normal.y>0?e.max.y:e.min.y,Ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function AM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const f=c.array,d=c.usage,m=f.byteLength,_=t.createBuffer();t.bindBuffer(h,_),t.bufferData(h,f,d),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,f){const d=h.array,m=h._updateRange,_=h.updateRanges;if(t.bindBuffer(f,c),m.count===-1&&_.length===0&&t.bufferSubData(f,0,d),_.length!==0){for(let y=0,g=_.length;y<g;y++){const u=_[y];n?t.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):t.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}class $s extends pt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=n/l,m=[],_=[],y=[],g=[];for(let u=0;u<h;u++){const v=u*d-o;for(let p=0;p<c;p++){const x=p*f-s;_.push(x,-v,0),y.push(0,0,1),g.push(p/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const p=v+c*u,x=v+c*(u+1),b=v+1+c*(u+1),T=v+1+c*u;m.push(p,x,T),m.push(x,b,T)}this.setIndex(m),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(y,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}var bM=`#ifdef USE_ALPHAHASH
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
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
vec3 nonPerturbedNormal = normal;`,XE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jE=`#ifndef FLAT_SHADED
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
}`,X1=`#define MATCAP
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
}`,j1=`#define NORMAL
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
}`,Ge={alphahash_fragment:bM,alphahash_pars_fragment:CM,alphamap_fragment:RM,alphamap_pars_fragment:PM,alphatest_fragment:LM,alphatest_pars_fragment:DM,aomap_fragment:IM,aomap_pars_fragment:NM,batching_pars_vertex:UM,batching_vertex:OM,begin_vertex:FM,beginnormal_vertex:kM,bsdfs:zM,iridescence_fragment:BM,bumpmap_pars_fragment:HM,clipping_planes_fragment:GM,clipping_planes_pars_fragment:VM,clipping_planes_pars_vertex:WM,clipping_planes_vertex:XM,color_fragment:jM,color_pars_fragment:YM,color_pars_vertex:qM,color_vertex:$M,common:ZM,cube_uv_reflection_fragment:KM,defaultnormal_vertex:QM,displacementmap_pars_vertex:JM,displacementmap_vertex:eE,emissivemap_fragment:tE,emissivemap_pars_fragment:nE,colorspace_fragment:iE,colorspace_pars_fragment:rE,envmap_fragment:sE,envmap_common_pars_fragment:oE,envmap_pars_fragment:aE,envmap_pars_vertex:lE,envmap_physical_pars_fragment:xE,envmap_vertex:cE,fog_vertex:uE,fog_pars_vertex:hE,fog_fragment:dE,fog_pars_fragment:fE,gradientmap_pars_fragment:pE,lightmap_fragment:mE,lightmap_pars_fragment:gE,lights_lambert_fragment:vE,lights_lambert_pars_fragment:_E,lights_pars_begin:yE,lights_toon_fragment:SE,lights_toon_pars_fragment:ME,lights_phong_fragment:EE,lights_phong_pars_fragment:wE,lights_physical_fragment:TE,lights_physical_pars_fragment:AE,lights_fragment_begin:bE,lights_fragment_maps:CE,lights_fragment_end:RE,logdepthbuf_fragment:PE,logdepthbuf_pars_fragment:LE,logdepthbuf_pars_vertex:DE,logdepthbuf_vertex:IE,map_fragment:NE,map_pars_fragment:UE,map_particle_fragment:OE,map_particle_pars_fragment:FE,metalnessmap_fragment:kE,metalnessmap_pars_fragment:zE,morphcolor_vertex:BE,morphnormal_vertex:HE,morphtarget_pars_vertex:GE,morphtarget_vertex:VE,normal_fragment_begin:WE,normal_fragment_maps:XE,normal_pars_fragment:jE,normal_pars_vertex:YE,normal_vertex:qE,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:ZE,clearcoat_normal_fragment_maps:KE,clearcoat_pars_fragment:QE,iridescence_pars_fragment:JE,opaque_fragment:e1,packing:t1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:r1,dithering_pars_fragment:s1,roughnessmap_fragment:o1,roughnessmap_pars_fragment:a1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:c1,shadowmap_vertex:u1,shadowmask_pars_fragment:h1,skinbase_vertex:d1,skinning_pars_vertex:f1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:g1,specularmap_pars_fragment:v1,tonemapping_fragment:_1,tonemapping_pars_fragment:y1,transmission_fragment:x1,transmission_pars_fragment:S1,uv_pars_fragment:M1,uv_pars_vertex:E1,uv_vertex:w1,worldpos_vertex:T1,background_vert:A1,background_frag:b1,backgroundCube_vert:C1,backgroundCube_frag:R1,cube_vert:P1,cube_frag:L1,depth_vert:D1,depth_frag:I1,distanceRGBA_vert:N1,distanceRGBA_frag:U1,equirect_vert:O1,equirect_frag:F1,linedashed_vert:k1,linedashed_frag:z1,meshbasic_vert:B1,meshbasic_frag:H1,meshlambert_vert:G1,meshlambert_frag:V1,meshmatcap_vert:W1,meshmatcap_frag:X1,meshnormal_vert:j1,meshnormal_frag:Y1,meshphong_vert:q1,meshphong_frag:$1,meshphysical_vert:Z1,meshphysical_frag:K1,meshtoon_vert:Q1,meshtoon_frag:J1,points_vert:ew,points_frag:tw,shadow_vert:nw,shadow_frag:iw,sprite_vert:rw,sprite_frag:sw},le={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ai={basic:{uniforms:tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:tn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:tn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:tn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:tn([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:tn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:tn([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:tn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:tn([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:tn([le.common,le.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:tn([le.lights,le.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ai.physical={uniforms:tn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Qa={r:0,b:0,g:0};function ow(t,e,n,i,r,s,o){const a=new ke(0);let l=s===!0?0:1,c,h,f=null,d=0,m=null;function _(g,u){let v=!1,p=u.isScene===!0?u.background:null;p&&p.isTexture&&(p=(u.backgroundBlurriness>0?n:e).get(p)),p===null?y(a,l):p&&p.isColor&&(y(p,1),v=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.mapping===yc)?(h===void 0&&(h=new de(new bt(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:qs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=p,h.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=nt.getTransfer(p.colorSpace)!==at,(f!==p||d!==p.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,f=p,d=p.version,m=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new de(new $s(2,2),new Gr({name:"BackgroundMaterial",uniforms:qs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=nt.getTransfer(p.colorSpace)!==at,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(f!==p||d!==p.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=p,d=p.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,u){g.getRGB(Qa,Xv(t)),i.buffers.color.setClear(Qa.r,Qa.g,Qa.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(g,u=1){a.set(g),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:_}}function aw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,h=!1;function f(I,F,j,$,N){let U=!1;if(o){const B=y($,j,F);c!==B&&(c=B,m(c.object)),U=u(I,$,j,N),U&&v(I,$,j,N)}else{const B=F.wireframe===!0;(c.geometry!==$.id||c.program!==j.id||c.wireframe!==B)&&(c.geometry=$.id,c.program=j.id,c.wireframe=B,U=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(U||h)&&(h=!1,D(I,F,j,$),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function y(I,F,j){const $=j.wireframe===!0;let N=a[I.id];N===void 0&&(N={},a[I.id]=N);let U=N[F.id];U===void 0&&(U={},N[F.id]=U);let B=U[$];return B===void 0&&(B=g(d()),U[$]=B),B}function g(I){const F=[],j=[],$=[];for(let N=0;N<r;N++)F[N]=0,j[N]=0,$[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:$,object:I,attributes:{},index:null}}function u(I,F,j,$){const N=c.attributes,U=F.attributes;let B=0;const Z=j.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const K=N[Q];let ce=U[Q];if(ce===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;B++}return c.attributesNum!==B||c.index!==$}function v(I,F,j,$){const N={},U=F.attributes;let B=0;const Z=j.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let K=U[Q];K===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),N[Q]=ce,B++}c.attributes=N,c.attributesNum=B,c.index=$}function p(){const I=c.newAttributes;for(let F=0,j=I.length;F<j;F++)I[F]=0}function x(I){b(I,0)}function b(I,F){const j=c.newAttributes,$=c.enabledAttributes,N=c.attributeDivisors;j[I]=1,$[I]===0&&(t.enableVertexAttribArray(I),$[I]=1),N[I]!==F&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),N[I]=F)}function T(){const I=c.newAttributes,F=c.enabledAttributes;for(let j=0,$=F.length;j<$;j++)F[j]!==I[j]&&(t.disableVertexAttribArray(j),F[j]=0)}function w(I,F,j,$,N,U,B){B===!0?t.vertexAttribIPointer(I,F,j,N,U):t.vertexAttribPointer(I,F,j,$,N,U)}function D(I,F,j,$){if(i.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const N=$.attributes,U=j.getAttributes(),B=F.defaultAttributeValues;for(const Z in U){const Q=U[Z];if(Q.location>=0){let q=N[Z];if(q===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),q!==void 0){const K=q.normalized,ce=q.itemSize,ye=n.get(q);if(ye===void 0)continue;const xe=ye.buffer,Ue=ye.type,Oe=ye.bytesPerElement,Re=i.isWebGL2===!0&&(Ue===t.INT||Ue===t.UNSIGNED_INT||q.gpuType===Cv);if(q.isInterleavedBufferAttribute){const qe=q.data,G=qe.stride,Bt=q.offset;if(qe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<Q.locationSize;Ae++)b(Q.location+Ae,qe.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Ae=0;Ae<Q.locationSize;Ae++)x(Q.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let Ae=0;Ae<Q.locationSize;Ae++)w(Q.location+Ae,ce/Q.locationSize,Ue,K,G*Oe,(Bt+ce/Q.locationSize*Ae)*Oe,Re)}else{if(q.isInstancedBufferAttribute){for(let qe=0;qe<Q.locationSize;qe++)b(Q.location+qe,q.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let qe=0;qe<Q.locationSize;qe++)x(Q.location+qe);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let qe=0;qe<Q.locationSize;qe++)w(Q.location+qe,ce/Q.locationSize,Ue,K,ce*Oe,ce/Q.locationSize*qe*Oe,Re)}}else if(B!==void 0){const K=B[Z];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Q.location,K);break;case 3:t.vertexAttrib3fv(Q.location,K);break;case 4:t.vertexAttrib4fv(Q.location,K);break;default:t.vertexAttrib1fv(Q.location,K)}}}}T()}function S(){V();for(const I in a){const F=a[I];for(const j in F){const $=F[j];for(const N in $)_($[N].object),delete $[N];delete F[j]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;const F=a[I.id];for(const j in F){const $=F[j];for(const N in $)_($[N].object),delete $[N];delete F[j]}delete a[I.id]}function z(I){for(const F in a){const j=a[F];if(j[I.id]===void 0)continue;const $=j[I.id];for(const N in $)_($[N].object),delete $[N];delete j[I.id]}}function V(){J(),h=!0,c!==l&&(c=l,m(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:V,resetDefaultState:J,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:z,initAttributes:p,enableAttribute:x,disableUnusedAttributes:T}}function lw(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,f){t.drawArrays(s,h,f),n.update(f,s,1)}function l(h,f,d){if(d===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,h,f,d),n.update(f,s,d)}function c(h,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(h[_],f[_]);else{m.multiDrawArraysWEBGL(s,h,0,f,0,d);let _=0;for(let y=0;y<d;y++)_+=f[y];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function cw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),p=d>0,x=o||e.has("OES_texture_float"),b=p&&x,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:g,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:p,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:T}}function uw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new oi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?h(null):c();else{const v=s?0:i,p=v*4;let x=u.clippingState||null;l.value=x,x=h(_,d,p,m);for(let b=0;b!==p;++b)x[b]=n[b];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,m,_){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const u=m+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<u)&&(g=new Float32Array(u));for(let p=0,x=m;p!==y;++p,x+=4)o.copy(f[p]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function hw(t){let e=new WeakMap;function n(o,a){return a===kh?o.mapping=Xs:a===zh&&(o.mapping=js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kh||a===zh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new EM(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class qd extends jv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const As=4,vm=[.125,.215,.35,.446,.526,.582],br=20,Eu=new qd,_m=new ke;let wu=null,Tu=0,Au=0;const wr=(1+Math.sqrt(5))/2,ls=1/wr,ym=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,wr,ls),new R(0,wr,-ls),new R(ls,0,wr),new R(-ls,0,wr),new R(wr,ls,0),new R(-wr,ls,0)];class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wu,Tu,Au),e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:ia,format:Qn,colorSpace:Ri,depthBuffer:!1},r=Sm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dw(s)),this._blurMaterial=fw(s,e,n)}return r}_compileMaterial(e){const n=new de(this._lodPlanes[0],e);this._renderer.compile(n,Eu)}_sceneToCubeUV(e,n,i,r){const a=new Un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(_m),h.toneMapping=ar,h.autoClear=!1;const m=new da({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),_=new de(new bt,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy(_m),y=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const p=this._cubeSize;Ja(r,v*p,u>2?p:0,p,p),h.setRenderTarget(r),y&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xs||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ja(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Eu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ym[(r-1)%ym.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new de(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*br-1),y=s/_,g=isFinite(s)?1+Math.floor(h*y):br;g>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${br}`);const u=[];let v=0;for(let w=0;w<br;++w){const D=w/y,S=Math.exp(-D*D/2);u.push(S),w===0?v+=S:w<g&&(v+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:p}=this;d.dTheta.value=_,d.mipInt.value=p-i;const x=this._sizeLods[r],b=3*x*(r>p-As?r-p+As:0),T=4*(this._cubeSize-x);Ja(n,b,T,3*x,2*x),l.setRenderTarget(n),l.render(f,Eu)}}function dw(t){const e=[],n=[],i=[];let r=t;const s=t-As+1+vm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-As?l=vm[o-t+As-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,y=3,g=2,u=1,v=new Float32Array(y*_*m),p=new Float32Array(g*_*m),x=new Float32Array(u*_*m);for(let T=0;T<m;T++){const w=T%3*2/3-1,D=T>2?0:-1,S=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];v.set(S,y*_*T),p.set(d,g*_*T);const E=[T,T,T,T,T,T];x.set(E,u*_*T)}const b=new pt;b.setAttribute("position",new hi(v,y)),b.setAttribute("uv",new hi(p,g)),b.setAttribute("faceIndex",new hi(x,u)),e.push(b),r>As&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Sm(t,e,n){const i=new Hr(t,e,n);return i.texture.mapping=yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ja(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function fw(t,e,n){const i=new Float32Array(br),r=new R(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$d(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Mm(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Em(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function $d(){return`

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
	`}function pw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kh||l===zh,h=l===Xs||l===js;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new xm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||h&&f&&r(f)){n===null&&(n=new xm(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function mw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gw(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let g=0,u=y.length;g<u;g++)e.remove(y[g])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const y=m[_];for(let g=0,u=y.length;g<u;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let y=0;if(m!==null){const v=m.array;y=m.version;for(let p=0,x=v.length;p<x;p+=3){const b=v[p+0],T=v[p+1],w=v[p+2];d.push(b,T,T,w,w,b)}}else if(_!==void 0){const v=_.array;y=_.version;for(let p=0,x=v.length/3-1;p<x;p+=3){const b=p+0,T=p+1,w=p+2;d.push(b,T,T,w,w,b)}}else return;const g=new(kv(d)?Wv:Vv)(d,1);g.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,g)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function vw(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,_){t.drawElements(s,_,a,m*l),n.update(_,s,1)}function f(m,_,y){if(y===0)return;let g,u;if(r)g=t,u="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[u](s,_,a,m*l,y),n.update(_,s,y)}function d(m,_,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<y;u++)this.render(m[u]/l,_[u]);else{g.multiDrawElementsWEBGL(s,_,0,a,m,0,y);let u=0;for(let v=0;v<y;v++)u+=_[v];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function _w(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function yw(t,e){return t[0]-e[0]}function xw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Sw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new kt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==y){let F=function(){J.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var m=F;g!==void 0&&g.texture.dispose();const p=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let S=0;p===!0&&(S=1),x===!0&&(S=2),b===!0&&(S=3);let E=h.attributes.position.count*S,z=1;E>e.maxTextureSize&&(z=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const V=new Float32Array(E*z*4*y),J=new Hv(V,E,z,y);J.type=Zi,J.needsUpdate=!0;const I=S*4;for(let j=0;j<y;j++){const $=T[j],N=w[j],U=D[j],B=E*z*4*j;for(let Z=0;Z<$.count;Z++){const Q=Z*I;p===!0&&(o.fromBufferAttribute($,Z),V[B+Q+0]=o.x,V[B+Q+1]=o.y,V[B+Q+2]=o.z,V[B+Q+3]=0),x===!0&&(o.fromBufferAttribute(N,Z),V[B+Q+4]=o.x,V[B+Q+5]=o.y,V[B+Q+6]=o.z,V[B+Q+7]=0),b===!0&&(o.fromBufferAttribute(U,Z),V[B+Q+8]=o.x,V[B+Q+9]=o.y,V[B+Q+10]=o.z,V[B+Q+11]=U.itemSize===4?o.w:1)}}g={count:y,texture:J,size:new ge(E,z)},s.set(h,g),h.addEventListener("dispose",F)}let u=0;for(let p=0;p<d.length;p++)u+=d[p];const v=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const _=d===void 0?0:d.length;let y=i[h.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[h.id]=y}for(let x=0;x<_;x++){const b=y[x];b[0]=x,b[1]=d[x]}y.sort(xw);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(yw);const g=h.morphAttributes.position,u=h.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const b=a[x],T=b[0],w=b[1];T!==Number.MAX_SAFE_INTEGER&&w?(g&&h.getAttribute("morphTarget"+x)!==g[T]&&h.setAttribute("morphTarget"+x,g[T]),u&&h.getAttribute("morphNormal"+x)!==u[T]&&h.setAttribute("morphNormal"+x,u[T]),r[x]=w,v+=w):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),u&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const p=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",p),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Mw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class $v extends Tn{constructor(e,n,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:Nr,h!==Nr&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Nr&&(i=$i),i===void 0&&h===Ys&&(i=Ir),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Zv=new Tn,Kv=new $v(1,1);Kv.compareFunction=Fv;const Qv=new Hv,Jv=new oM,e_=new Yv,wm=[],Tm=[],Am=new Float32Array(16),bm=new Float32Array(9),Cm=new Float32Array(4);function no(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=wm[r];if(s===void 0&&(s=new Float32Array(r),wm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ec(t,e){let n=Tm[e];n===void 0&&(n=new Int32Array(e),Tm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function bw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Cm.set(i),t.uniformMatrix2fv(this.addr,!1,Cm),Dt(n,i)}}function Cw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;bm.set(i),t.uniformMatrix3fv(this.addr,!1,bm),Dt(n,i)}}function Rw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Am.set(i),t.uniformMatrix4fv(this.addr,!1,Am),Dt(n,i)}}function Pw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function Nw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function Ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function Fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function kw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Kv:Zv;n.setTexture2D(e||s,r)}function zw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Jv,r)}function Bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||e_,r)}function Hw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Qv,r)}function Gw(t){switch(t){case 5126:return Ew;case 35664:return ww;case 35665:return Tw;case 35666:return Aw;case 35674:return bw;case 35675:return Cw;case 35676:return Rw;case 5124:case 35670:return Pw;case 35667:case 35671:return Lw;case 35668:case 35672:return Dw;case 35669:case 35673:return Iw;case 5125:return Nw;case 36294:return Uw;case 36295:return Ow;case 36296:return Fw;case 35678:case 36198:case 36298:case 36306:case 35682:return kw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return Bw;case 36289:case 36303:case 36311:case 36292:return Hw}}function Vw(t,e){t.uniform1fv(this.addr,e)}function Ww(t,e){const n=no(e,this.size,2);t.uniform2fv(this.addr,n)}function Xw(t,e){const n=no(e,this.size,3);t.uniform3fv(this.addr,n)}function jw(t,e){const n=no(e,this.size,4);t.uniform4fv(this.addr,n)}function Yw(t,e){const n=no(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qw(t,e){const n=no(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $w(t,e){const n=no(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Zw(t,e){t.uniform1iv(this.addr,e)}function Kw(t,e){t.uniform2iv(this.addr,e)}function Qw(t,e){t.uniform3iv(this.addr,e)}function Jw(t,e){t.uniform4iv(this.addr,e)}function eT(t,e){t.uniform1uiv(this.addr,e)}function tT(t,e){t.uniform2uiv(this.addr,e)}function nT(t,e){t.uniform3uiv(this.addr,e)}function iT(t,e){t.uniform4uiv(this.addr,e)}function rT(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Zv,s[o])}function sT(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Jv,s[o])}function oT(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||e_,s[o])}function aT(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Qv,s[o])}function lT(t){switch(t){case 5126:return Vw;case 35664:return Ww;case 35665:return Xw;case 35666:return jw;case 35674:return Yw;case 35675:return qw;case 35676:return $w;case 5124:case 35670:return Zw;case 35667:case 35671:return Kw;case 35668:case 35672:return Qw;case 35669:case 35673:return Jw;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return aT}}class cT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Gw(n.type)}}class uT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lT(n.type)}}class hT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const bu=/(\w+)(\])?(\[|\.)?/g;function Rm(t,e){t.seq.push(e),t.map[e.id]=e}function dT(t,e,n){const i=t.name,r=i.length;for(bu.lastIndex=0;;){const s=bu.exec(i),o=bu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Rm(n,c===void 0?new cT(a,t,e):new uT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new hT(a),Rm(n,f)),n=f}}}class El{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);dT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Pm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const fT=37297;let pT=0;function mT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function gT(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Jl&&n===Ql?i="LinearDisplayP3ToLinearSRGB":e===Ql&&n===Jl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ri:case xc:return[i,"LinearTransferOETF"];case Ot:case Wd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Lm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+mT(t.getShaderSource(e),o)}else return r}function vT(t,e){const n=gT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function _T(t,e){let n;switch(e){case vS:n="Linear";break;case _S:n="Reinhard";break;case yS:n="OptimizedCineon";break;case Av:n="ACESFilmic";break;case SS:n="AgX";break;case xS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function yT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function xT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bs).join(`
`)}function ST(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function bs(t){return t!==""}function Dm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ET=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(t){return t.replace(ET,TT)}const wT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function TT(t,e){let n=Ge[e];if(n===void 0){const i=wT.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wh(n)}const AT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(t){return t.replace(AT,bT)}function bT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Um(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===wv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Xx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function RT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case js:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function LT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Tv:e="ENVMAP_BLENDING_MULTIPLY";break;case mS:e="ENVMAP_BLENDING_MIX";break;case gS:e="ENVMAP_BLENDING_ADD";break}return e}function DT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function IT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=CT(n),c=RT(n),h=PT(n),f=LT(n),d=DT(n),m=n.isWebGL2?"":yT(n),_=xT(n),y=ST(s),g=r.createProgram();let u,v,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(bs).join(`
`),u.length>0&&(u+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(bs).join(`
`),v.length>0&&(v+=`
`)):(u=[Um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),v=[m,Um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?Ge.tonemapping_pars_fragment:"",n.toneMapping!==ar?_T("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,vT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bs).join(`
`)),o=Wh(o),o=Dm(o,n),o=Im(o,n),a=Wh(a),a=Dm(a,n),a=Im(a,n),o=Nm(o),a=Nm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=p+u+o,b=p+v+a,T=Pm(r,r.VERTEX_SHADER,x),w=Pm(r,r.FRAGMENT_SHADER,b);r.attachShader(g,T),r.attachShader(g,w),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function D(V){if(t.debug.checkShaderErrors){const J=r.getProgramInfoLog(g).trim(),I=r.getShaderInfoLog(T).trim(),F=r.getShaderInfoLog(w).trim();let j=!0,$=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,T,w);else{const N=Lm(r,T,"vertex"),U=Lm(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+N+`
`+U)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(I===""||F==="")&&($=!1);$&&(V.diagnostics={runnable:j,programLog:J,vertexShader:{log:I,prefix:u},fragmentShader:{log:F,prefix:v}})}r.deleteShader(T),r.deleteShader(w),S=new El(r,g),E=MT(r,g)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(g,fT)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}let NT=0;class UT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OT(e),n.set(e,i)),i}}class OT{constructor(e){this.id=NT++,this.code=e,this.usedTimes=0}}function FT(t,e,n,i,r,s,o){const a=new jd,l=new UT,c=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function g(S,E,z,V,J){const I=V.fog,F=J.geometry,j=S.isMeshStandardMaterial?V.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||j),N=$&&$.mapping===yc?$.image.height:null,U=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const B=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Z=B!==void 0?B.length:0;let Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let q,K,ce,ye;if(U){const St=ai[U];q=St.vertexShader,K=St.fragmentShader}else q=S.vertexShader,K=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);const xe=t.getRenderTarget(),Ue=J.isInstancedMesh===!0,Oe=J.isBatchedMesh===!0,Re=!!S.map,qe=!!S.matcap,G=!!$,Bt=!!S.aoMap,Ae=!!S.lightMap,De=!!S.bumpMap,Se=!!S.normalMap,st=!!S.displacementMap,ze=!!S.emissiveMap,C=!!S.metalnessMap,M=!!S.roughnessMap,H=S.anisotropy>0,re=S.clearcoat>0,te=S.iridescence>0,se=S.sheen>0,Me=S.transmission>0,he=H&&!!S.anisotropyMap,_e=re&&!!S.clearcoatMap,Ce=re&&!!S.clearcoatNormalMap,Be=re&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,et=te&&!!S.iridescenceThicknessMap,Ve=se&&!!S.sheenColorMap,Ie=se&&!!S.sheenRoughnessMap,Te=!!S.specularMap,fe=!!S.specularColorMap,P=!!S.specularIntensityMap,oe=Me&&!!S.transmissionMap,Ee=Me&&!!S.thicknessMap,ve=!!S.gradientMap,ne=!!S.alphaMap,L=S.alphaTest>0,ae=!!S.alphaHash,ue=!!S.extensions,Pe=!!F.attributes.uv1,be=!!F.attributes.uv2,$e=!!F.attributes.uv3;let Ze=ar;return S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ze=t.toneMapping),{isWebGL2:h,shaderID:U,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:K,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Oe,instancing:Ue,instancingColor:Ue&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ri,map:Re,matcap:qe,envMap:G,envMapMode:G&&$.mapping,envMapCubeUVHeight:N,aoMap:Bt,lightMap:Ae,bumpMap:De,normalMap:Se,displacementMap:d&&st,emissiveMap:ze,normalMapObjectSpace:Se&&S.normalMapType===IS,normalMapTangentSpace:Se&&S.normalMapType===Ov,metalnessMap:C,roughnessMap:M,anisotropy:H,anisotropyMap:he,clearcoat:re,clearcoatMap:_e,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Be,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:et,sheen:se,sheenColorMap:Ve,sheenRoughnessMap:Ie,specularMap:Te,specularColorMap:fe,specularIntensityMap:P,transmission:Me,transmissionMap:oe,thicknessMap:Ee,gradientMap:ve,opaque:S.transparent===!1&&S.blending===Us,alphaMap:ne,alphaTest:L,alphaHash:ae,combine:S.combine,mapUv:Re&&y(S.map.channel),aoMapUv:Bt&&y(S.aoMap.channel),lightMapUv:Ae&&y(S.lightMap.channel),bumpMapUv:De&&y(S.bumpMap.channel),normalMapUv:Se&&y(S.normalMap.channel),displacementMapUv:st&&y(S.displacementMap.channel),emissiveMapUv:ze&&y(S.emissiveMap.channel),metalnessMapUv:C&&y(S.metalnessMap.channel),roughnessMapUv:M&&y(S.roughnessMap.channel),anisotropyMapUv:he&&y(S.anisotropyMap.channel),clearcoatMapUv:_e&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&y(S.sheenRoughnessMap.channel),specularMapUv:Te&&y(S.specularMap.channel),specularColorMapUv:fe&&y(S.specularColorMap.channel),specularIntensityMapUv:P&&y(S.specularIntensityMap.channel),transmissionMapUv:oe&&y(S.transmissionMap.channel),thicknessMapUv:Ee&&y(S.thicknessMap.channel),alphaMapUv:ne&&y(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Se||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:be,vertexUv3s:$e,pointsUvs:J.isPoints===!0&&!!F.attributes.uv&&(Re||ne),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ze,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Re&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===On,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)E.push(z),E.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(v(E,S),p(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function p(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function x(S){const E=_[S.type];let z;if(E){const V=ai[E];z=yM.clone(V.uniforms)}else z=S.uniforms;return z}function b(S,E){let z;for(let V=0,J=c.length;V<J;V++){const I=c[V];if(I.cacheKey===E){z=I,++z.usedTimes;break}}return z===void 0&&(z=new IT(t,E,S,s),c.push(z)),z}function T(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:x,acquireProgram:b,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:D}}function kT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function zT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Om(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,m,_,y,g){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:y,group:g},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=g),e++,u}function a(f,d,m,_,y,g){const u=o(f,d,m,_,y,g);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,d,m,_,y,g){const u=o(f,d,m,_,y,g);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,d){n.length>1&&n.sort(f||zT),i.length>1&&i.sort(d||Om),r.length>1&&r.sort(d||Om)}function h(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function BT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Fm,t.set(i,[o])):r>=s.length?(o=new Fm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function HT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new R,color:new ke};break;case"SpotLight":n={position:new R,direction:new R,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":n={color:new ke,position:new R,halfWidth:new R,halfHeight:new R};break}return t[e.id]=n,n}}}function GT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let VT=0;function WT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function XT(t,e){const n=new HT,i=GT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new R);const s=new R,o=new gt,a=new gt;function l(h,f){let d=0,m=0,_=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let y=0,g=0,u=0,v=0,p=0,x=0,b=0,T=0,w=0,D=0,S=0;h.sort(WT);const E=f===!0?Math.PI:1;for(let V=0,J=h.length;V<J;V++){const I=h[V],F=I.color,j=I.intensity,$=I.distance,N=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=F.r*j*E,m+=F.g*j*E,_+=F.b*j*E;else if(I.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(I.sh.coefficients[U],j);S++}else if(I.isDirectionalLight){const U=n.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const B=I.shadow,Z=i.get(I);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=N,r.directionalShadowMatrix[y]=I.shadow.matrix,x++}r.directional[y]=U,y++}else if(I.isSpotLight){const U=n.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(F).multiplyScalar(j*E),U.distance=$,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,r.spot[u]=U;const B=I.shadow;if(I.map&&(r.spotLightMap[w]=I.map,w++,B.updateMatrices(I),I.castShadow&&D++),r.spotLightMatrix[u]=B.matrix,I.castShadow){const Z=i.get(I);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,r.spotShadow[u]=Z,r.spotShadowMap[u]=N,T++}u++}else if(I.isRectAreaLight){const U=n.get(I);U.color.copy(F).multiplyScalar(j),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=U,v++}else if(I.isPointLight){const U=n.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*E),U.distance=I.distance,U.decay=I.decay,I.castShadow){const B=I.shadow,Z=i.get(I);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,r.pointShadow[g]=Z,r.pointShadowMap[g]=N,r.pointShadowMatrix[g]=I.shadow.matrix,b++}r.point[g]=U,g++}else if(I.isHemisphereLight){const U=n.get(I);U.skyColor.copy(I.color).multiplyScalar(j*E),U.groundColor.copy(I.groundColor).multiplyScalar(j*E),r.hemi[p]=U,p++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=_;const z=r.hash;(z.directionalLength!==y||z.pointLength!==g||z.spotLength!==u||z.rectAreaLength!==v||z.hemiLength!==p||z.numDirectionalShadows!==x||z.numPointShadows!==b||z.numSpotShadows!==T||z.numSpotMaps!==w||z.numLightProbes!==S)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=v,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=T+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=S,z.directionalLength=y,z.pointLength=g,z.spotLength=u,z.rectAreaLength=v,z.hemiLength=p,z.numDirectionalShadows=x,z.numPointShadows=b,z.numSpotShadows=T,z.numSpotMaps=w,z.numLightProbes=S,r.version=VT++)}function c(h,f){let d=0,m=0,_=0,y=0,g=0;const u=f.matrixWorldInverse;for(let v=0,p=h.length;v<p;v++){const x=h[v];if(x.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),d++}else if(x.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),_++}else if(x.isRectAreaLight){const b=r.rectArea[y];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(u),a.identity(),o.copy(x.matrixWorld),o.premultiply(u),a.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(u),m++}else if(x.isHemisphereLight){const b=r.hemi[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(u),g++}}}return{setup:l,setupView:c,state:r}}function km(t,e){const n=new XT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function jT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new km(t,e),n.set(s,[l])):o>=a.length?(l=new km(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class YT extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qT extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $T=`void main() {
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
}`;function KT(t,e,n){let i=new Yd;const r=new ge,s=new ge,o=new kt,a=new YT({depthPacking:DS}),l=new qT,c={},h=n.maxTextureSize,f={[hr]:mn,[mn]:hr,[On]:On},d=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:$T,fragmentShader:ZT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new pt;_.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new de(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wv;let u=this.type;this.render=function(T,w,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const S=t.getRenderTarget(),E=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),V=t.state;V.setBlending(or),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const J=u!==_i&&this.type===_i,I=u===_i&&this.type!==_i;for(let F=0,j=T.length;F<j;F++){const $=T[F],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const U=N.getFrameExtents();if(r.multiply(U),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,N.mapSize.y=s.y)),N.map===null||J===!0||I===!0){const Z=this.type!==_i?{minFilter:sn,magFilter:sn}:{};N.map!==null&&N.map.dispose(),N.map=new Hr(r.x,r.y,Z),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const B=N.getViewportCount();for(let Z=0;Z<B;Z++){const Q=N.getViewport(Z);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),V.viewport(o),N.updateMatrices($,Z),i=N.getFrustum(),x(w,D,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===_i&&v(N,D),N.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(S,E,z)};function v(T,w){const D=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,D,d,y,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,D,m,y,null)}function p(T,w,D,S){let E=null;const z=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0)E=z;else if(E=D.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=E.uuid,J=w.uuid;let I=c[V];I===void 0&&(I={},c[V]=I);let F=I[J];F===void 0&&(F=E.clone(),I[J]=F,w.addEventListener("dispose",b)),E=F}if(E.visible=w.visible,E.wireframe=w.wireframe,S===_i?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:f[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=t.properties.get(E);V.light=D}return E}function x(T,w,D,S,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===_i)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const J=e.update(T),I=T.material;if(Array.isArray(I)){const F=J.groups;for(let j=0,$=F.length;j<$;j++){const N=F[j],U=I[N.materialIndex];if(U&&U.visible){const B=p(T,U,S,E);T.onBeforeShadow(t,T,w,D,J,B,N),t.renderBufferDirect(D,null,J,B,T,N),T.onAfterShadow(t,T,w,D,J,B,N)}}}else if(I.visible){const F=p(T,I,S,E);T.onBeforeShadow(t,T,w,D,J,F,null),t.renderBufferDirect(D,null,J,F,T,null),T.onAfterShadow(t,T,w,D,J,F,null)}}const V=T.children;for(let J=0,I=V.length;J<I;J++)x(V[J],w,D,S,E)}function b(T){T.target.removeEventListener("dispose",b);for(const D in c){const S=c[D],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function QT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ae=new kt;let ue=null;const Pe=new kt(0,0,0,0);return{setMask:function(be){ue!==be&&!L&&(t.colorMask(be,be,be,be),ue=be)},setLocked:function(be){L=be},setClear:function(be,$e,Ze,_t,St){St===!0&&(be*=_t,$e*=_t,Ze*=_t),ae.set(be,$e,Ze,_t),Pe.equals(ae)===!1&&(t.clearColor(be,$e,Ze,_t),Pe.copy(ae))},reset:function(){L=!1,ue=null,Pe.set(-1,0,0,0)}}}function s(){let L=!1,ae=null,ue=null,Pe=null;return{setTest:function(be){be?Oe(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(be){ae!==be&&!L&&(t.depthMask(be),ae=be)},setFunc:function(be){if(ue!==be){switch(be){case lS:t.depthFunc(t.NEVER);break;case cS:t.depthFunc(t.ALWAYS);break;case uS:t.depthFunc(t.LESS);break;case Zl:t.depthFunc(t.LEQUAL);break;case hS:t.depthFunc(t.EQUAL);break;case dS:t.depthFunc(t.GEQUAL);break;case fS:t.depthFunc(t.GREATER);break;case pS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=be}},setLocked:function(be){L=be},setClear:function(be){Pe!==be&&(t.clearDepth(be),Pe=be)},reset:function(){L=!1,ae=null,ue=null,Pe=null}}}function o(){let L=!1,ae=null,ue=null,Pe=null,be=null,$e=null,Ze=null,_t=null,St=null;return{setTest:function(Qe){L||(Qe?Oe(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(Qe){ae!==Qe&&!L&&(t.stencilMask(Qe),ae=Qe)},setFunc:function(Qe,Tt,ni){(ue!==Qe||Pe!==Tt||be!==ni)&&(t.stencilFunc(Qe,Tt,ni),ue=Qe,Pe=Tt,be=ni)},setOp:function(Qe,Tt,ni){($e!==Qe||Ze!==Tt||_t!==ni)&&(t.stencilOp(Qe,Tt,ni),$e=Qe,Ze=Tt,_t=ni)},setLocked:function(Qe){L=Qe},setClear:function(Qe){St!==Qe&&(t.clearStencil(Qe),St=Qe)},reset:function(){L=!1,ae=null,ue=null,Pe=null,be=null,$e=null,Ze=null,_t=null,St=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,y=[],g=null,u=!1,v=null,p=null,x=null,b=null,T=null,w=null,D=null,S=new ke(0,0,0),E=0,z=!1,V=null,J=null,I=null,F=null,j=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,U=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=U>=1):B.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=U>=2);let Z=null,Q={};const q=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),ce=new kt().fromArray(q),ye=new kt().fromArray(K);function xe(L,ae,ue,Pe){const be=new Uint8Array(4),$e=t.createTexture();t.bindTexture(L,$e),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<ue;Ze++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(ae+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return $e}const Ue={};Ue[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),Ue[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ue[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(t.DEPTH_TEST),l.setFunc(Zl),ze(!1),C(yp),Oe(t.CULL_FACE),Se(or);function Oe(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Re(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function qe(L,ae){return m[L]!==ae?(t.bindFramebuffer(L,ae),m[L]=ae,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ae),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function G(L,ae){let ue=y,Pe=!1;if(L)if(ue=_.get(ae),ue===void 0&&(ue=[],_.set(ae,ue)),L.isWebGLMultipleRenderTargets){const be=L.texture;if(ue.length!==be.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let $e=0,Ze=be.length;$e<Ze;$e++)ue[$e]=t.COLOR_ATTACHMENT0+$e;ue.length=be.length,Pe=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,Pe=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,Pe=!0);Pe&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Bt(L){return g!==L?(t.useProgram(L),g=L,!0):!1}const Ae={[Ar]:t.FUNC_ADD,[Yx]:t.FUNC_SUBTRACT,[qx]:t.FUNC_REVERSE_SUBTRACT};if(i)Ae[Ep]=t.MIN,Ae[wp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ae[Ep]=L.MIN_EXT,Ae[wp]=L.MAX_EXT)}const De={[$x]:t.ZERO,[Zx]:t.ONE,[Kx]:t.SRC_COLOR,[Oh]:t.SRC_ALPHA,[iS]:t.SRC_ALPHA_SATURATE,[tS]:t.DST_COLOR,[Jx]:t.DST_ALPHA,[Qx]:t.ONE_MINUS_SRC_COLOR,[Fh]:t.ONE_MINUS_SRC_ALPHA,[nS]:t.ONE_MINUS_DST_COLOR,[eS]:t.ONE_MINUS_DST_ALPHA,[rS]:t.CONSTANT_COLOR,[sS]:t.ONE_MINUS_CONSTANT_COLOR,[oS]:t.CONSTANT_ALPHA,[aS]:t.ONE_MINUS_CONSTANT_ALPHA};function Se(L,ae,ue,Pe,be,$e,Ze,_t,St,Qe){if(L===or){u===!0&&(Re(t.BLEND),u=!1);return}if(u===!1&&(Oe(t.BLEND),u=!0),L!==jx){if(L!==v||Qe!==z){if((p!==Ar||T!==Ar)&&(t.blendEquation(t.FUNC_ADD),p=Ar,T=Ar),Qe)switch(L){case Us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFunc(t.ONE,t.ONE);break;case Sp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Sp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,b=null,w=null,D=null,S.set(0,0,0),E=0,v=L,z=Qe}return}be=be||ae,$e=$e||ue,Ze=Ze||Pe,(ae!==p||be!==T)&&(t.blendEquationSeparate(Ae[ae],Ae[be]),p=ae,T=be),(ue!==x||Pe!==b||$e!==w||Ze!==D)&&(t.blendFuncSeparate(De[ue],De[Pe],De[$e],De[Ze]),x=ue,b=Pe,w=$e,D=Ze),(_t.equals(S)===!1||St!==E)&&(t.blendColor(_t.r,_t.g,_t.b,St),S.copy(_t),E=St),v=L,z=!1}function st(L,ae){L.side===On?Re(t.CULL_FACE):Oe(t.CULL_FACE);let ue=L.side===mn;ae&&(ue=!ue),ze(ue),L.blending===Us&&L.transparent===!1?Se(or):Se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Pe=L.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),H(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Oe(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){V!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),V=L)}function C(L){L!==Vx?(Oe(t.CULL_FACE),L!==J&&(L===yp?t.cullFace(t.BACK):L===Wx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),J=L}function M(L){L!==I&&(N&&t.lineWidth(L),I=L)}function H(L,ae,ue){L?(Oe(t.POLYGON_OFFSET_FILL),(F!==ae||j!==ue)&&(t.polygonOffset(ae,ue),F=ae,j=ue)):Re(t.POLYGON_OFFSET_FILL)}function re(L){L?Oe(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function te(L){L===void 0&&(L=t.TEXTURE0+$-1),Z!==L&&(t.activeTexture(L),Z=L)}function se(L,ae,ue){ue===void 0&&(Z===null?ue=t.TEXTURE0+$-1:ue=Z);let Pe=Q[ue];Pe===void 0&&(Pe={type:void 0,texture:void 0},Q[ue]=Pe),(Pe.type!==L||Pe.texture!==ae)&&(Z!==ue&&(t.activeTexture(ue),Z=ue),t.bindTexture(L,ae||Ue[L]),Pe.type=L,Pe.texture=ae)}function Me(){const L=Q[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function he(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(L){ce.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function oe(L){ye.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ye.copy(L))}function Ee(L,ae){let ue=f.get(ae);ue===void 0&&(ue=new WeakMap,f.set(ae,ue));let Pe=ue.get(L);Pe===void 0&&(Pe=t.getUniformBlockIndex(ae,L.name),ue.set(L,Pe))}function ve(L,ae){const Pe=f.get(ae).get(L);h.get(ae)!==Pe&&(t.uniformBlockBinding(ae,Pe,L.__bindingPointIndex),h.set(ae,Pe))}function ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Z=null,Q={},m={},_=new WeakMap,y=[],g=null,u=!1,v=null,p=null,x=null,b=null,T=null,w=null,D=null,S=new ke(0,0,0),E=0,z=!1,V=null,J=null,I=null,F=null,j=null,ce.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:Re,bindFramebuffer:qe,drawBuffers:G,useProgram:Bt,setBlending:Se,setMaterial:st,setFlipSided:ze,setCullFace:C,setLineWidth:M,setPolygonOffset:H,setScissorTest:re,activeTexture:te,bindTexture:se,unbindTexture:Me,compressedTexImage2D:he,compressedTexImage3D:_e,texImage2D:Te,texImage3D:fe,updateUBOMapping:Ee,uniformBlockBinding:ve,texStorage2D:Ve,texStorage3D:Ie,texSubImage2D:Ce,texSubImage3D:Be,compressedTexSubImage2D:ee,compressedTexSubImage3D:et,scissor:P,viewport:oe,reset:ne}}function JT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return m?new OffscreenCanvas(C,M):nc("canvas")}function y(C,M,H,re){let te=1;if((C.width>re||C.height>re)&&(te=re/Math.max(C.width,C.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const se=M?tc:Math.floor,Me=se(te*C.width),he=se(te*C.height);f===void 0&&(f=_(Me,he));const _e=H?_(Me,he):f;return _e.width=Me,_e.height=he,_e.getContext("2d").drawImage(C,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+he+")."),_e}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Vh(C.width)&&Vh(C.height)}function u(C){return a?!1:C.wrapS!==Kn||C.wrapT!==Kn||C.minFilter!==sn&&C.minFilter!==In}function v(C,M){return C.generateMipmaps&&M&&C.minFilter!==sn&&C.minFilter!==In}function p(C){t.generateMipmap(C)}function x(C,M,H,re,te=!1){if(a===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=M;if(M===t.RED&&(H===t.FLOAT&&(se=t.R32F),H===t.HALF_FLOAT&&(se=t.R16F),H===t.UNSIGNED_BYTE&&(se=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(se=t.R8UI),H===t.UNSIGNED_SHORT&&(se=t.R16UI),H===t.UNSIGNED_INT&&(se=t.R32UI),H===t.BYTE&&(se=t.R8I),H===t.SHORT&&(se=t.R16I),H===t.INT&&(se=t.R32I)),M===t.RG&&(H===t.FLOAT&&(se=t.RG32F),H===t.HALF_FLOAT&&(se=t.RG16F),H===t.UNSIGNED_BYTE&&(se=t.RG8)),M===t.RGBA){const Me=te?Kl:nt.getTransfer(re);H===t.FLOAT&&(se=t.RGBA32F),H===t.HALF_FLOAT&&(se=t.RGBA16F),H===t.UNSIGNED_BYTE&&(se=Me===at?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function b(C,M,H){return v(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==sn&&C.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){return C===sn||C===Tp||C===eu?t.NEAREST:t.LINEAR}function w(C){const M=C.target;M.removeEventListener("dispose",w),S(M),M.isVideoTexture&&h.delete(M)}function D(C){const M=C.target;M.removeEventListener("dispose",D),z(M)}function S(C){const M=i.get(C);if(M.__webglInit===void 0)return;const H=C.source,re=d.get(H);if(re){const te=re[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(C),Object.keys(re).length===0&&d.delete(H)}i.remove(C)}function E(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const H=C.source,re=d.get(H);delete re[M.__cacheKey],o.memory.textures--}function z(C){const M=C.texture,H=i.get(C),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(H.__webglFramebuffer[te]))for(let se=0;se<H.__webglFramebuffer[te].length;se++)t.deleteFramebuffer(H.__webglFramebuffer[te][se]);else t.deleteFramebuffer(H.__webglFramebuffer[te]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[te])}else{if(Array.isArray(H.__webglFramebuffer))for(let te=0;te<H.__webglFramebuffer.length;te++)t.deleteFramebuffer(H.__webglFramebuffer[te]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,se=M.length;te<se;te++){const Me=i.get(M[te]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(M[te])}i.remove(M),i.remove(C)}let V=0;function J(){V=0}function I(){const C=V;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),V+=1,C}function F(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function j(C,M){const H=i.get(C);if(C.isVideoTexture&&st(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(H,C,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function $(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ce(H,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function N(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ce(H,C,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function U(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ye(H,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const B={[Bh]:t.REPEAT,[Kn]:t.CLAMP_TO_EDGE,[Hh]:t.MIRRORED_REPEAT},Z={[sn]:t.NEAREST,[Tp]:t.NEAREST_MIPMAP_NEAREST,[eu]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[MS]:t.LINEAR_MIPMAP_NEAREST,[na]:t.LINEAR_MIPMAP_LINEAR},Q={[NS]:t.NEVER,[BS]:t.ALWAYS,[US]:t.LESS,[Fv]:t.LEQUAL,[OS]:t.EQUAL,[zS]:t.GEQUAL,[FS]:t.GREATER,[kS]:t.NOTEQUAL};function q(C,M,H){if(H?(t.texParameteri(C,t.TEXTURE_WRAP_S,B[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,B[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,B[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Z[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Kn||M.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==sn&&M.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===sn||M.minFilter!==eu&&M.minFilter!==na||M.type===Zi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ia&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function K(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",w));const re=M.source;let te=d.get(re);te===void 0&&(te={},d.set(re,te));const se=F(M);if(se!==C.__cacheKey){te[se]===void 0&&(te[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[se].usedTimes++;const Me=te[C.__cacheKey];Me!==void 0&&(te[C.__cacheKey].usedTimes--,Me.usedTimes===0&&E(M)),C.__cacheKey=se,C.__webglTexture=te[se].texture}return H}function ce(C,M,H){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const te=K(C,M),se=M.source;n.bindTexture(re,C.__webglTexture,t.TEXTURE0+H);const Me=i.get(se);if(se.version!==Me.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const he=nt.getPrimaries(nt.workingColorSpace),_e=M.colorSpace===Fn?null:nt.getPrimaries(M.colorSpace),Ce=M.colorSpace===Fn||he===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Be=u(M)&&g(M.image)===!1;let ee=y(M.image,Be,!1,r.maxTextureSize);ee=ze(M,ee);const et=g(ee)||a,Ve=s.convert(M.format,M.colorSpace);let Ie=s.convert(M.type),Te=x(M.internalFormat,Ve,Ie,M.colorSpace,M.isVideoTexture);q(re,M,et);let fe;const P=M.mipmaps,oe=a&&M.isVideoTexture!==!0&&Te!==Nv,Ee=Me.__version===void 0||te===!0,ve=b(M,ee,et);if(M.isDepthTexture)Te=t.DEPTH_COMPONENT,a?M.type===Zi?Te=t.DEPTH_COMPONENT32F:M.type===$i?Te=t.DEPTH_COMPONENT24:M.type===Ir?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:M.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Nr&&Te===t.DEPTH_COMPONENT&&M.type!==Vd&&M.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=$i,Ie=s.convert(M.type)),M.format===Ys&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,M.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ir,Ie=s.convert(M.type))),Ee&&(oe?n.texStorage2D(t.TEXTURE_2D,1,Te,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Te,ee.width,ee.height,0,Ve,Ie,null));else if(M.isDataTexture)if(P.length>0&&et){oe&&Ee&&n.texStorage2D(t.TEXTURE_2D,ve,Te,P[0].width,P[0].height);for(let ne=0,L=P.length;ne<L;ne++)fe=P[ne],oe?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,Ie,fe.data):n.texImage2D(t.TEXTURE_2D,ne,Te,fe.width,fe.height,0,Ve,Ie,fe.data);M.generateMipmaps=!1}else oe?(Ee&&n.texStorage2D(t.TEXTURE_2D,ve,Te,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,Ve,Ie,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Te,ee.width,ee.height,0,Ve,Ie,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){oe&&Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Te,P[0].width,P[0].height,ee.depth);for(let ne=0,L=P.length;ne<L;ne++)fe=P[ne],M.format!==Qn?Ve!==null?oe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ee.depth,Ve,fe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Te,fe.width,fe.height,ee.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ee.depth,Ve,Ie,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Te,fe.width,fe.height,ee.depth,0,Ve,Ie,fe.data)}else{oe&&Ee&&n.texStorage2D(t.TEXTURE_2D,ve,Te,P[0].width,P[0].height);for(let ne=0,L=P.length;ne<L;ne++)fe=P[ne],M.format!==Qn?Ve!==null?oe?n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,Ie,fe.data):n.texImage2D(t.TEXTURE_2D,ne,Te,fe.width,fe.height,0,Ve,Ie,fe.data)}else if(M.isDataArrayTexture)oe?(Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Te,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ve,Ie,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ee.width,ee.height,ee.depth,0,Ve,Ie,ee.data);else if(M.isData3DTexture)oe?(Ee&&n.texStorage3D(t.TEXTURE_3D,ve,Te,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ve,Ie,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ee.width,ee.height,ee.depth,0,Ve,Ie,ee.data);else if(M.isFramebufferTexture){if(Ee)if(oe)n.texStorage2D(t.TEXTURE_2D,ve,Te,ee.width,ee.height);else{let ne=ee.width,L=ee.height;for(let ae=0;ae<ve;ae++)n.texImage2D(t.TEXTURE_2D,ae,Te,ne,L,0,Ve,Ie,null),ne>>=1,L>>=1}}else if(P.length>0&&et){oe&&Ee&&n.texStorage2D(t.TEXTURE_2D,ve,Te,P[0].width,P[0].height);for(let ne=0,L=P.length;ne<L;ne++)fe=P[ne],oe?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Ve,Ie,fe):n.texImage2D(t.TEXTURE_2D,ne,Te,Ve,Ie,fe);M.generateMipmaps=!1}else oe?(Ee&&n.texStorage2D(t.TEXTURE_2D,ve,Te,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,Ie,ee)):n.texImage2D(t.TEXTURE_2D,0,Te,Ve,Ie,ee);v(M,et)&&p(re),Me.__version=se.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ye(C,M,H){if(M.image.length!==6)return;const re=K(C,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const se=i.get(te);if(te.version!==se.__version||re===!0){n.activeTexture(t.TEXTURE0+H);const Me=nt.getPrimaries(nt.workingColorSpace),he=M.colorSpace===Fn?null:nt.getPrimaries(M.colorSpace),_e=M.colorSpace===Fn||Me===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let ne=0;ne<6;ne++)!Ce&&!Be?ee[ne]=y(M.image[ne],!1,!0,r.maxCubemapSize):ee[ne]=Be?M.image[ne].image:M.image[ne],ee[ne]=ze(M,ee[ne]);const et=ee[0],Ve=g(et)||a,Ie=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),fe=x(M.internalFormat,Ie,Te,M.colorSpace),P=a&&M.isVideoTexture!==!0,oe=se.__version===void 0||re===!0;let Ee=b(M,et,Ve);q(t.TEXTURE_CUBE_MAP,M,Ve);let ve;if(Ce){P&&oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,fe,et.width,et.height);for(let ne=0;ne<6;ne++){ve=ee[ne].mipmaps;for(let L=0;L<ve.length;L++){const ae=ve[L];M.format!==Qn?Ie!==null?P?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,ae.width,ae.height,Ie,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,ae.width,ae.height,Ie,Te,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,fe,ae.width,ae.height,0,Ie,Te,ae.data)}}}else{ve=M.mipmaps,P&&oe&&(ve.length>0&&Ee++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,fe,ee[0].width,ee[0].height));for(let ne=0;ne<6;ne++)if(Be){P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ee[ne].width,ee[ne].height,Ie,Te,ee[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,ee[ne].width,ee[ne].height,0,Ie,Te,ee[ne].data);for(let L=0;L<ve.length;L++){const ue=ve[L].image[ne].image;P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,ue.width,ue.height,Ie,Te,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,fe,ue.width,ue.height,0,Ie,Te,ue.data)}}else{P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,Te,ee[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,Ie,Te,ee[ne]);for(let L=0;L<ve.length;L++){const ae=ve[L];P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,Ie,Te,ae.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,fe,Ie,Te,ae.image[ne])}}}v(M,Ve)&&p(t.TEXTURE_CUBE_MAP),se.__version=te.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function xe(C,M,H,re,te,se){const Me=s.convert(H.format,H.colorSpace),he=s.convert(H.type),_e=x(H.internalFormat,Me,he,H.colorSpace);if(!i.get(M).__hasExternalTextures){const Be=Math.max(1,M.width>>se),ee=Math.max(1,M.height>>se);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,se,_e,Be,ee,M.depth,0,Me,he,null):n.texImage2D(te,se,_e,Be,ee,0,Me,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,te,i.get(H).__webglTexture,0,De(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,te,i.get(H).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(C,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let re=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||Se(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===Zi?re=t.DEPTH_COMPONENT32F:te.type===$i&&(re=t.DEPTH_COMPONENT24));const se=De(M);Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,re,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,re,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const re=De(M);H&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<re.length;te++){const se=re[te],Me=s.convert(se.format,se.colorSpace),he=s.convert(se.type),_e=x(se.internalFormat,Me,he,se.colorSpace),Ce=De(M);H&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,_e,M.width,M.height):Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,_e,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,_e,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,te=De(M);if(M.depthTexture.format===Nr)Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===Ys)Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Re(C){const M=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Oe(M.__webglFramebuffer,C)}else if(H){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),Ue(M.__webglDepthbuffer[re],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ue(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(C,M,H){const re=i.get(C);M!==void 0&&xe(re.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Re(C)}function G(C){const M=C.texture,H=i.get(C),re=i.get(M);C.addEventListener("dispose",D),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,o.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,Me=g(C)||a;if(te){H.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[he]=[];for(let _e=0;_e<M.mipmaps.length;_e++)H.__webglFramebuffer[he][_e]=t.createFramebuffer()}else H.__webglFramebuffer[he]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)H.__webglFramebuffer[he]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const he=C.texture;for(let _e=0,Ce=he.length;_e<Ce;_e++){const Be=i.get(he[_e]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Se(C)===!1){const he=se?M:[M];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _e=0;_e<he.length;_e++){const Ce=he[_e];H.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[_e]);const Be=s.convert(Ce.format,Ce.colorSpace),ee=s.convert(Ce.type),et=x(Ce.internalFormat,Be,ee,Ce.colorSpace,C.isXRRenderTarget===!0),Ve=De(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,et,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,H.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),q(t.TEXTURE_CUBE_MAP,M,Me);for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)xe(H.__webglFramebuffer[he][_e],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else xe(H.__webglFramebuffer[he],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);v(M,Me)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const he=C.texture;for(let _e=0,Ce=he.length;_e<Ce;_e++){const Be=he[_e],ee=i.get(Be);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),q(t.TEXTURE_2D,Be,Me),xe(H.__webglFramebuffer,C,Be,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),v(Be,Me)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?he=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,re.__webglTexture),q(he,M,Me),a&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)xe(H.__webglFramebuffer[_e],C,M,t.COLOR_ATTACHMENT0,he,_e);else xe(H.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,he,0);v(M,Me)&&p(he),n.unbindTexture()}C.depthBuffer&&Re(C)}function Bt(C){const M=g(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,te=H.length;re<te;re++){const se=H[re];if(v(se,M)){const Me=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(se).__webglTexture;n.bindTexture(Me,he),p(Me),n.unbindTexture()}}}function Ae(C){if(a&&C.samples>0&&Se(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,re=C.height;let te=t.COLOR_BUFFER_BIT;const se=[],Me=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(C),_e=C.isWebGLMultipleRenderTargets===!0;if(_e)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){se.push(t.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&se.push(Me);const Be=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Be===!1&&(C.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),_e&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),_e){const ee=i.get(M[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,H,re,0,0,H,re,te,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]);const Be=i.get(M[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function De(C){return Math.min(r.maxSamples,C.samples)}function Se(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function st(C){const M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function ze(C,M){const H=C.colorSpace,re=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Gh||H!==Ri&&H!==Fn&&(nt.getTransfer(H)===at?a===!1?e.has("EXT_sRGB")===!0&&re===Qn?(C.format=Gh,C.minFilter=In,C.generateMipmaps=!1):M=zv.sRGBToLinear(M):(re!==Qn||te!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=I,this.resetTextureUnits=J,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=N,this.setTextureCube=U,this.rebindTextures=qe,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Se}function eA(t,e,n){const i=n.isWebGL2;function r(s,o=Fn){let a;const l=nt.getTransfer(o);if(s===lr)return t.UNSIGNED_BYTE;if(s===Rv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Pv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===ES)return t.BYTE;if(s===wS)return t.SHORT;if(s===Vd)return t.UNSIGNED_SHORT;if(s===Cv)return t.INT;if(s===$i)return t.UNSIGNED_INT;if(s===Zi)return t.FLOAT;if(s===ia)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===TS)return t.ALPHA;if(s===Qn)return t.RGBA;if(s===AS)return t.LUMINANCE;if(s===bS)return t.LUMINANCE_ALPHA;if(s===Nr)return t.DEPTH_COMPONENT;if(s===Ys)return t.DEPTH_STENCIL;if(s===Gh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===CS)return t.RED;if(s===Lv)return t.RED_INTEGER;if(s===RS)return t.RG;if(s===Dv)return t.RG_INTEGER;if(s===Iv)return t.RGBA_INTEGER;if(s===tu||s===nu||s===iu||s===ru)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===tu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===tu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===iu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ru)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ap||s===bp||s===Cp||s===Rp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ap)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pp||s===Lp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Pp)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Lp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dp||s===Ip||s===Np||s===Up||s===Op||s===Fp||s===kp||s===zp||s===Bp||s===Hp||s===Gp||s===Vp||s===Wp||s===Xp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Dp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ip)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Np)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Up)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Op)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===kp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===su||s===jp||s===Yp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===su)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===PS||s===qp||s===$p||s===Zp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===su)return a.COMPRESSED_RED_RGTC1_EXT;if(s===qp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$p)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ir?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class tA extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $n extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nA={type:"move"};class Cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $n;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class iA extends Xr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,_=null;const y=n.getContextAttributes();let g=null,u=null;const v=[],p=[],x=new ge;let b=null;const T=new Un;T.layers.enable(1),T.viewport=new kt;const w=new Un;w.layers.enable(2),w.viewport=new kt;const D=[T,w],S=new tA;S.layers.enable(1),S.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=v[q];return K===void 0&&(K=new Cu,v[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=v[q];return K===void 0&&(K=new Cu,v[q]=K),K.getGripSpace()},this.getHand=function(q){let K=v[q];return K===void 0&&(K=new Cu,v[q]=K),K.getHandSpace()};function V(q){const K=p.indexOf(q.inputSource);if(K===-1)return;const ce=v[K];ce!==void 0&&(ce.update(q.inputSource,q.frame,c||o),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",I);for(let q=0;q<v.length;q++){const K=p[q];K!==null&&(p[q]=null,v[q].disconnect(K))}E=null,z=null,e.setRenderTarget(g),m=null,d=null,f=null,r=null,u=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",J),r.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Hr(m.framebufferWidth,m.framebufferHeight,{format:Qn,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let K=null,ce=null,ye=null;y.depth&&(ye=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=y.stencil?Ys:Nr,ce=y.stencil?Ir:$i);const xe={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(xe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new Hr(d.textureWidth,d.textureHeight,{format:Qn,type:lr,depthTexture:new $v(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ue=e.properties.get(u);Ue.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(q){for(let K=0;K<q.removed.length;K++){const ce=q.removed[K],ye=p.indexOf(ce);ye>=0&&(p[ye]=null,v[ye].disconnect(ce))}for(let K=0;K<q.added.length;K++){const ce=q.added[K];let ye=p.indexOf(ce);if(ye===-1){for(let Ue=0;Ue<v.length;Ue++)if(Ue>=p.length){p.push(ce),ye=Ue;break}else if(p[Ue]===null){p[Ue]=ce,ye=Ue;break}if(ye===-1)break}const xe=v[ye];xe&&xe.connect(ce)}}const F=new R,j=new R;function $(q,K,ce){F.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(ce.matrixWorld);const ye=F.distanceTo(j),xe=K.projectionMatrix.elements,Ue=ce.projectionMatrix.elements,Oe=xe[14]/(xe[10]-1),Re=xe[14]/(xe[10]+1),qe=(xe[9]+1)/xe[5],G=(xe[9]-1)/xe[5],Bt=(xe[8]-1)/xe[0],Ae=(Ue[8]+1)/Ue[0],De=Oe*Bt,Se=Oe*Ae,st=ye/(-Bt+Ae),ze=st*-Bt;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ze),q.translateZ(st),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const C=Oe+st,M=Re+st,H=De-ze,re=Se+(ye-ze),te=qe*Re/M*C,se=G*Re/M*C;q.projectionMatrix.makePerspective(H,re,te,se,C,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function N(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;S.near=w.near=T.near=q.near,S.far=w.far=T.far=q.far,(E!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,z=S.far);const K=q.parent,ce=S.cameras;N(S,K);for(let ye=0;ye<ce.length;ye++)N(ce[ye],K);ce.length===2?$(S,T,w):S.projectionMatrix.copy(T.projectionMatrix),U(q,S,K)};function U(q,K,ce){ce===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ra*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)};let B=null;function Z(q,K){if(h=K.getViewerPose(c||o),_=K,h!==null){const ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ye=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,ye=!0);for(let xe=0;xe<ce.length;xe++){const Ue=ce[xe];let Oe=null;if(m!==null)Oe=m.getViewport(Ue);else{const qe=f.getViewSubImage(d,Ue);Oe=qe.viewport,xe===0&&(e.setRenderTargetTextures(u,qe.colorTexture,d.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(u))}let Re=D[xe];Re===void 0&&(Re=new Un,Re.layers.enable(xe),Re.viewport=new kt,D[xe]=Re),Re.matrix.fromArray(Ue.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ue.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),xe===0&&(S.matrix.copy(Re.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ye===!0&&S.cameras.push(Re)}}for(let ce=0;ce<v.length;ce++){const ye=p[ce],xe=v[ce];ye!==null&&xe!==void 0&&xe.update(ye,K,c||o)}B&&B(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Q=new qv;Q.setAnimationLoop(Z),this.setAnimationLoop=function(q){B=q},this.dispose=function(){}}}function rA(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Xv(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,v,p,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),h(g,u)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&m(g,u,x)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),y(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,v,p):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===mn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===mn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap){g.lightMap.value=u.lightMap;const p=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=u.lightMapIntensity*p,n(u.lightMap,g.lightMapTransform)}u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,v,p){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*v,g.scale.value=p*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),e.get(u).envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,v){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&g.clearcoatNormalScale.value.negate())),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const v=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sA(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,p){const x=p.program;i.uniformBlockBinding(v,x)}function c(v,p){let x=r[v.id];x===void 0&&(_(v),x=h(v),r[v.id]=x,v.addEventListener("dispose",g));const b=p.program;i.updateUBOMapping(v,b);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function h(v){const p=f();v.__bindingPointIndex=p;const x=t.createBuffer(),b=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const p=r[v.id],x=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let T=0,w=x.length;T<w;T++){const D=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,E=D.length;S<E;S++){const z=D[S];if(m(z,T,S,b)===!0){const V=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let I=0;for(let F=0;F<J.length;F++){const j=J[F],$=y(j);typeof j=="number"||typeof j=="boolean"?(z.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,V+I,z.__data)):j.isMatrix3?(z.__data[0]=j.elements[0],z.__data[1]=j.elements[1],z.__data[2]=j.elements[2],z.__data[3]=0,z.__data[4]=j.elements[3],z.__data[5]=j.elements[4],z.__data[6]=j.elements[5],z.__data[7]=0,z.__data[8]=j.elements[6],z.__data[9]=j.elements[7],z.__data[10]=j.elements[8],z.__data[11]=0):(j.toArray(z.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,p,x,b){const T=v.value,w=p+"_"+x;if(b[w]===void 0)return typeof T=="number"||typeof T=="boolean"?b[w]=T:b[w]=T.clone(),!0;{const D=b[w];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return b[w]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function _(v){const p=v.uniforms;let x=0;const b=16;for(let w=0,D=p.length;w<D;w++){const S=Array.isArray(p[w])?p[w]:[p[w]];for(let E=0,z=S.length;E<z;E++){const V=S[E],J=Array.isArray(V.value)?V.value:[V.value];for(let I=0,F=J.length;I<F;I++){const j=J[I],$=y(j),N=x%b;N!==0&&b-N<$.boundary&&(x+=b-N),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=$.storage}}}const T=x%b;return T>0&&(x+=b-T),v.__size=x,v.__cache={},this}function y(v){const p={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(p.boundary=4,p.storage=4):v.isVector2?(p.boundary=8,p.storage=8):v.isVector3||v.isColor?(p.boundary=16,p.storage=12):v.isVector4?(p.boundary=16,p.storage=16):v.isMatrix3?(p.boundary=48,p.storage=48):v.isMatrix4?(p.boundary=64,p.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),p}function g(v){const p=v.target;p.removeEventListener("dispose",g);const x=o.indexOf(p.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class t_{constructor(e={}){const{canvas:n=tM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,g=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=ar,this.toneMappingExposure=1;const p=this;let x=!1,b=0,T=0,w=null,D=-1,S=null;const E=new kt,z=new kt;let V=null;const J=new ke(0);let I=0,F=n.width,j=n.height,$=1,N=null,U=null;const B=new kt(0,0,F,j),Z=new kt(0,0,F,j);let Q=!1;const q=new Yd;let K=!1,ce=!1,ye=null;const xe=new gt,Ue=new ge,Oe=new R,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return w===null?$:1}let G=i;function Bt(A,O){for(let X=0;X<A.length;X++){const Y=A[X],W=n.getContext(Y,O);if(W!==null)return W}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gd}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ae,!1),G===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),G=Bt(O,A),G===null)throw Bt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ae,De,Se,st,ze,C,M,H,re,te,se,Me,he,_e,Ce,Be,ee,et,Ve,Ie,Te,fe,P,oe;function Ee(){Ae=new mw(G),De=new cw(G,Ae,e),Ae.init(De),fe=new eA(G,Ae,De),Se=new QT(G,Ae,De),st=new _w(G),ze=new kT,C=new JT(G,Ae,Se,ze,De,fe,st),M=new hw(p),H=new pw(p),re=new AM(G,De),P=new aw(G,Ae,re,De),te=new gw(G,re,st,P),se=new Mw(G,te,re,st),Ve=new Sw(G,De,C),Be=new uw(ze),Me=new FT(p,M,H,Ae,De,P,Be),he=new rA(p,ze),_e=new BT,Ce=new jT(Ae,De),et=new ow(p,M,H,Se,se,d,l),ee=new KT(p,se,De),oe=new sA(G,st,De,Se),Ie=new lw(G,Ae,st,De),Te=new vw(G,Ae,st,De),st.programs=Me.programs,p.capabilities=De,p.extensions=Ae,p.properties=ze,p.renderLists=_e,p.shadowMap=ee,p.state=Se,p.info=st}Ee();const ve=new iA(p,G);this.xr=ve,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(F,j,!1))},this.getSize=function(A){return A.set(F,j)},this.setSize=function(A,O,X=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,j=O,n.width=Math.floor(A*$),n.height=Math.floor(O*$),X===!0&&(n.style.width=A+"px",n.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(F*$,j*$).floor()},this.setDrawingBufferSize=function(A,O,X){F=A,j=O,$=X,n.width=Math.floor(A*X),n.height=Math.floor(O*X),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,O,X,Y){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,O,X,Y),Se.viewport(E.copy(B).multiplyScalar($).floor())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,O,X,Y){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,O,X,Y),Se.scissor(z.copy(Z).multiplyScalar($).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(A){Se.setScissorTest(Q=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(A=!0,O=!0,X=!0){let Y=0;if(A){let W=!1;if(w!==null){const pe=w.texture.format;W=pe===Iv||pe===Dv||pe===Lv}if(W){const pe=w.texture.type,we=pe===lr||pe===$i||pe===Vd||pe===Ir||pe===Rv||pe===Pv,Le=et.getClearColor(),Ne=et.getClearAlpha(),We=Le.r,Fe=Le.g,He=Le.b;we?(m[0]=We,m[1]=Fe,m[2]=He,m[3]=Ne,G.clearBufferuiv(G.COLOR,0,m)):(_[0]=We,_[1]=Fe,_[2]=He,_[3]=Ne,G.clearBufferiv(G.COLOR,0,_))}else Y|=G.COLOR_BUFFER_BIT}O&&(Y|=G.DEPTH_BUFFER_BIT),X&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),_e.dispose(),Ce.dispose(),ze.dispose(),M.dispose(),H.dispose(),se.dispose(),P.dispose(),oe.dispose(),Me.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",St),ve.removeEventListener("sessionend",Qe),ye&&(ye.dispose(),ye=null),Tt.stop()};function ne(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=st.autoReset,O=ee.enabled,X=ee.autoUpdate,Y=ee.needsUpdate,W=ee.type;Ee(),st.autoReset=A,ee.enabled=O,ee.autoUpdate=X,ee.needsUpdate=Y,ee.type=W}function ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ue(A){const O=A.target;O.removeEventListener("dispose",ue),Pe(O)}function Pe(A){be(A),ze.remove(A)}function be(A){const O=ze.get(A).programs;O!==void 0&&(O.forEach(function(X){Me.releaseProgram(X)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,X,Y,W,pe){O===null&&(O=Re);const we=W.isMesh&&W.matrixWorld.determinant()<0,Le=h_(A,O,X,Y,W);Se.setMaterial(Y,we);let Ne=X.index,We=1;if(Y.wireframe===!0){if(Ne=te.getWireframeAttribute(X),Ne===void 0)return;We=2}const Fe=X.drawRange,He=X.attributes.position;let Mt=Fe.start*We,gn=(Fe.start+Fe.count)*We;pe!==null&&(Mt=Math.max(Mt,pe.start*We),gn=Math.min(gn,(pe.start+pe.count)*We)),Ne!==null?(Mt=Math.max(Mt,0),gn=Math.min(gn,Ne.count)):He!=null&&(Mt=Math.max(Mt,0),gn=Math.min(gn,He.count));const It=gn-Mt;if(It<0||It===1/0)return;P.setup(W,Y,Le,X,Ne);let di,dt=Ie;if(Ne!==null&&(di=re.get(Ne),dt=Te,dt.setIndex(di)),W.isMesh)Y.wireframe===!0?(Se.setLineWidth(Y.wireframeLinewidth*qe()),dt.setMode(G.LINES)):dt.setMode(G.TRIANGLES);else if(W.isLine){let Xe=Y.linewidth;Xe===void 0&&(Xe=1),Se.setLineWidth(Xe*qe()),W.isLineSegments?dt.setMode(G.LINES):W.isLineLoop?dt.setMode(G.LINE_LOOP):dt.setMode(G.LINE_STRIP)}else W.isPoints?dt.setMode(G.POINTS):W.isSprite&&dt.setMode(G.TRIANGLES);if(W.isBatchedMesh)dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)dt.renderInstances(Mt,It,W.count);else if(X.isInstancedBufferGeometry){const Xe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wc=Math.min(X.instanceCount,Xe);dt.renderInstances(Mt,It,wc)}else dt.render(Mt,It)};function $e(A,O,X){A.transparent===!0&&A.side===On&&A.forceSinglePass===!1?(A.side=mn,A.needsUpdate=!0,pa(A,O,X),A.side=hr,A.needsUpdate=!0,pa(A,O,X),A.side=On):pa(A,O,X)}this.compile=function(A,O,X=null){X===null&&(X=A),g=Ce.get(X),g.init(),v.push(g),X.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),A!==X&&A.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(p._useLegacyLights);const Y=new Set;return A.traverse(function(W){const pe=W.material;if(pe)if(Array.isArray(pe))for(let we=0;we<pe.length;we++){const Le=pe[we];$e(Le,X,W),Y.add(Le)}else $e(pe,X,W),Y.add(pe)}),v.pop(),g=null,Y},this.compileAsync=function(A,O,X=null){const Y=this.compile(A,O,X);return new Promise(W=>{function pe(){if(Y.forEach(function(we){ze.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){W(A);return}setTimeout(pe,10)}Ae.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Ze=null;function _t(A){Ze&&Ze(A)}function St(){Tt.stop()}function Qe(){Tt.start()}const Tt=new qv;Tt.setAnimationLoop(_t),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(A){Ze=A,ve.setAnimationLoop(A),A===null?Tt.stop():Tt.start()},ve.addEventListener("sessionstart",St),ve.addEventListener("sessionend",Qe),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(O),O=ve.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,O,w),g=Ce.get(A,v.length),g.init(),v.push(g),xe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(xe),ce=this.localClippingEnabled,K=Be.init(this.clippingPlanes,ce),y=_e.get(A,u.length),y.init(),u.push(y),ni(A,O,0,p.sortObjects),y.finish(),p.sortObjects===!0&&y.sort(N,U),this.info.render.frame++,K===!0&&Be.beginShadows();const X=g.state.shadowsArray;if(ee.render(X,A,O),K===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(y,A),g.setupLights(p._useLegacyLights),O.isArrayCamera){const Y=O.cameras;for(let W=0,pe=Y.length;W<pe;W++){const we=Y[W];rf(y,A,we,we.viewport)}}else rf(y,A,O);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(p,A,O),P.resetDefaultState(),D=-1,S=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function ni(A,O,X,Y){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){Y&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const we=se.update(A),Le=A.material;Le.visible&&y.push(A,we,Le,X,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const we=se.update(A),Le=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Oe.copy(we.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(Le)){const Ne=we.groups;for(let We=0,Fe=Ne.length;We<Fe;We++){const He=Ne[We],Mt=Le[He.materialIndex];Mt&&Mt.visible&&y.push(A,we,Mt,X,Oe.z,He)}}else Le.visible&&y.push(A,we,Le,X,Oe.z,null)}}const pe=A.children;for(let we=0,Le=pe.length;we<Le;we++)ni(pe[we],O,X,Y)}function rf(A,O,X,Y){const W=A.opaque,pe=A.transmissive,we=A.transparent;g.setupLightsView(X),K===!0&&Be.setGlobalState(p.clippingPlanes,X),pe.length>0&&u_(W,pe,O,X),Y&&Se.viewport(E.copy(Y)),W.length>0&&fa(W,O,X),pe.length>0&&fa(pe,O,X),we.length>0&&fa(we,O,X),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function u_(A,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const pe=De.isWebGL2;ye===null&&(ye=new Hr(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?ia:lr,minFilter:na,samples:pe?4:0})),p.getDrawingBufferSize(Ue),pe?ye.setSize(Ue.x,Ue.y):ye.setSize(tc(Ue.x),tc(Ue.y));const we=p.getRenderTarget();p.setRenderTarget(ye),p.getClearColor(J),I=p.getClearAlpha(),I<1&&p.setClearColor(16777215,.5),p.clear();const Le=p.toneMapping;p.toneMapping=ar,fa(A,X,Y),C.updateMultisampleRenderTarget(ye),C.updateRenderTargetMipmap(ye);let Ne=!1;for(let We=0,Fe=O.length;We<Fe;We++){const He=O[We],Mt=He.object,gn=He.geometry,It=He.material,di=He.group;if(It.side===On&&Mt.layers.test(Y.layers)){const dt=It.side;It.side=mn,It.needsUpdate=!0,sf(Mt,X,Y,gn,It,di),It.side=dt,It.needsUpdate=!0,Ne=!0}}Ne===!0&&(C.updateMultisampleRenderTarget(ye),C.updateRenderTargetMipmap(ye)),p.setRenderTarget(we),p.setClearColor(J,I),p.toneMapping=Le}function fa(A,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let W=0,pe=A.length;W<pe;W++){const we=A[W],Le=we.object,Ne=we.geometry,We=Y===null?we.material:Y,Fe=we.group;Le.layers.test(X.layers)&&sf(Le,O,X,Ne,We,Fe)}}function sf(A,O,X,Y,W,pe){A.onBeforeRender(p,O,X,Y,W,pe),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(p,O,X,Y,A,pe),W.transparent===!0&&W.side===On&&W.forceSinglePass===!1?(W.side=mn,W.needsUpdate=!0,p.renderBufferDirect(X,O,Y,W,A,pe),W.side=hr,W.needsUpdate=!0,p.renderBufferDirect(X,O,Y,W,A,pe),W.side=On):p.renderBufferDirect(X,O,Y,W,A,pe),A.onAfterRender(p,O,X,Y,W,pe)}function pa(A,O,X){O.isScene!==!0&&(O=Re);const Y=ze.get(A),W=g.state.lights,pe=g.state.shadowsArray,we=W.state.version,Le=Me.getParameters(A,W.state,pe,O,X),Ne=Me.getProgramCacheKey(Le);let We=Y.programs;Y.environment=A.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(A.isMeshStandardMaterial?H:M).get(A.envMap||Y.environment),We===void 0&&(A.addEventListener("dispose",ue),We=new Map,Y.programs=We);let Fe=We.get(Ne);if(Fe!==void 0){if(Y.currentProgram===Fe&&Y.lightsStateVersion===we)return af(A,Le),Fe}else Le.uniforms=Me.getUniforms(A),A.onBuild(X,Le,p),A.onBeforeCompile(Le,p),Fe=Me.acquireProgram(Le,Ne),We.set(Ne,Fe),Y.uniforms=Le.uniforms;const He=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Be.uniform),af(A,Le),Y.needsLights=f_(A),Y.lightsStateVersion=we,Y.needsLights&&(He.ambientLightColor.value=W.state.ambient,He.lightProbe.value=W.state.probe,He.directionalLights.value=W.state.directional,He.directionalLightShadows.value=W.state.directionalShadow,He.spotLights.value=W.state.spot,He.spotLightShadows.value=W.state.spotShadow,He.rectAreaLights.value=W.state.rectArea,He.ltc_1.value=W.state.rectAreaLTC1,He.ltc_2.value=W.state.rectAreaLTC2,He.pointLights.value=W.state.point,He.pointLightShadows.value=W.state.pointShadow,He.hemisphereLights.value=W.state.hemi,He.directionalShadowMap.value=W.state.directionalShadowMap,He.directionalShadowMatrix.value=W.state.directionalShadowMatrix,He.spotShadowMap.value=W.state.spotShadowMap,He.spotLightMatrix.value=W.state.spotLightMatrix,He.spotLightMap.value=W.state.spotLightMap,He.pointShadowMap.value=W.state.pointShadowMap,He.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Fe,Y.uniformsList=null,Fe}function of(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=El.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function af(A,O){const X=ze.get(A);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function h_(A,O,X,Y,W){O.isScene!==!0&&(O=Re),C.resetTextureUnits();const pe=O.fog,we=Y.isMeshStandardMaterial?O.environment:null,Le=w===null?p.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ri,Ne=(Y.isMeshStandardMaterial?H:M).get(Y.envMap||we),We=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),He=!!X.morphAttributes.position,Mt=!!X.morphAttributes.normal,gn=!!X.morphAttributes.color;let It=ar;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(It=p.toneMapping);const di=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=di!==void 0?di.length:0,Xe=ze.get(Y),wc=g.state.lights;if(K===!0&&(ce===!0||A!==S)){const Rn=A===S&&Y.id===D;Be.setState(Y,A,Rn)}let yt=!1;Y.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==wc.state.version||Xe.outputColorSpace!==Le||W.isBatchedMesh&&Xe.batching===!1||!W.isBatchedMesh&&Xe.batching===!0||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||Xe.envMap!==Ne||Y.fog===!0&&Xe.fog!==pe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Be.numPlanes||Xe.numIntersection!==Be.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Fe||Xe.morphTargets!==He||Xe.morphNormals!==Mt||Xe.morphColors!==gn||Xe.toneMapping!==It||De.isWebGL2===!0&&Xe.morphTargetsCount!==dt)&&(yt=!0):(yt=!0,Xe.__version=Y.version);let mr=Xe.currentProgram;yt===!0&&(mr=pa(Y,O,W));let lf=!1,io=!1,Tc=!1;const jt=mr.getUniforms(),gr=Xe.uniforms;if(Se.useProgram(mr.program)&&(lf=!0,io=!0,Tc=!0),Y.id!==D&&(D=Y.id,io=!0),lf||S!==A){jt.setValue(G,"projectionMatrix",A.projectionMatrix),jt.setValue(G,"viewMatrix",A.matrixWorldInverse);const Rn=jt.map.cameraPosition;Rn!==void 0&&Rn.setValue(G,Oe.setFromMatrixPosition(A.matrixWorld)),De.logarithmicDepthBuffer&&jt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&jt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,io=!0,Tc=!0)}if(W.isSkinnedMesh){jt.setOptional(G,W,"bindMatrix"),jt.setOptional(G,W,"bindMatrixInverse");const Rn=W.skeleton;Rn&&(De.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),jt.setValue(G,"boneTexture",Rn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(jt.setOptional(G,W,"batchingTexture"),jt.setValue(G,"batchingTexture",W._matricesTexture,C));const Ac=X.morphAttributes;if((Ac.position!==void 0||Ac.normal!==void 0||Ac.color!==void 0&&De.isWebGL2===!0)&&Ve.update(W,X,mr),(io||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,jt.setValue(G,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(gr.envMap.value=Ne,gr.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),io&&(jt.setValue(G,"toneMappingExposure",p.toneMappingExposure),Xe.needsLights&&d_(gr,Tc),pe&&Y.fog===!0&&he.refreshFogUniforms(gr,pe),he.refreshMaterialUniforms(gr,Y,$,j,ye),El.upload(G,of(Xe),gr,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(El.upload(G,of(Xe),gr,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&jt.setValue(G,"center",W.center),jt.setValue(G,"modelViewMatrix",W.modelViewMatrix),jt.setValue(G,"normalMatrix",W.normalMatrix),jt.setValue(G,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Rn=Y.uniformsGroups;for(let bc=0,p_=Rn.length;bc<p_;bc++)if(De.isWebGL2){const cf=Rn[bc];oe.update(cf,mr),oe.bind(cf,mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mr}function d_(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function f_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,O,X){ze.get(A.texture).__webglTexture=O,ze.get(A.depthTexture).__webglTexture=X;const Y=ze.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const X=ze.get(A);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,X=0){w=A,b=O,T=X;let Y=!0,W=null,pe=!1,we=!1;if(A){const Ne=ze.get(A);Ne.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(G.FRAMEBUFFER,null),Y=!1):Ne.__webglFramebuffer===void 0?C.setupRenderTarget(A):Ne.__hasExternalTextures&&C.rebindTextures(A,ze.get(A.texture).__webglTexture,ze.get(A.depthTexture).__webglTexture);const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Fe=ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?W=Fe[O][X]:W=Fe[O],pe=!0):De.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?W=ze.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[X]:W=Fe,E.copy(A.viewport),z.copy(A.scissor),V=A.scissorTest}else E.copy(B).multiplyScalar($).floor(),z.copy(Z).multiplyScalar($).floor(),V=Q;if(Se.bindFramebuffer(G.FRAMEBUFFER,W)&&De.drawBuffers&&Y&&Se.drawBuffers(A,W),Se.viewport(E),Se.scissor(z),Se.setScissorTest(V),pe){const Ne=ze.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,X)}else if(we){const Ne=ze.get(A.texture),We=O||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ne.__webglTexture,X||0,We)}D=-1},this.readRenderTargetPixels=function(A,O,X,Y,W,pe,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){Se.bindFramebuffer(G.FRAMEBUFFER,Le);try{const Ne=A.texture,We=Ne.format,Fe=Ne.type;if(We!==Qn&&fe.convert(We)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Fe===ia&&(Ae.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Fe!==lr&&fe.convert(Fe)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Zi&&(De.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-Y&&X>=0&&X<=A.height-W&&G.readPixels(O,X,Y,W,fe.convert(We),fe.convert(Fe),pe)}finally{const Ne=w!==null?ze.get(w).__webglFramebuffer:null;Se.bindFramebuffer(G.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(A,O,X=0){const Y=Math.pow(2,-X),W=Math.floor(O.image.width*Y),pe=Math.floor(O.image.height*Y);C.setTexture2D(O,0),G.copyTexSubImage2D(G.TEXTURE_2D,X,0,0,A.x,A.y,W,pe),Se.unbindTexture()},this.copyTextureToTexture=function(A,O,X,Y=0){const W=O.image.width,pe=O.image.height,we=fe.convert(X.format),Le=fe.convert(X.type);C.setTexture2D(X,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,A.x,A.y,W,pe,we,Le,O.image.data):O.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Y,A.x,A.y,we,Le,O.image),Y===0&&X.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(A,O,X,Y,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=A.max.x-A.min.x+1,we=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,Ne=fe.convert(Y.format),We=fe.convert(Y.type);let Fe;if(Y.isData3DTexture)C.setTexture3D(Y,0),Fe=G.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)C.setTexture2DArray(Y,0),Fe=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const He=G.getParameter(G.UNPACK_ROW_LENGTH),Mt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),gn=G.getParameter(G.UNPACK_SKIP_PIXELS),It=G.getParameter(G.UNPACK_SKIP_ROWS),di=G.getParameter(G.UNPACK_SKIP_IMAGES),dt=X.isCompressedTexture?X.mipmaps[W]:X.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,dt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,dt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,A.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,A.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(Fe,W,O.x,O.y,O.z,pe,we,Le,Ne,We,dt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Fe,W,O.x,O.y,O.z,pe,we,Le,Ne,dt.data)):G.texSubImage3D(Fe,W,O.x,O.y,O.z,pe,we,Le,Ne,We,dt),G.pixelStorei(G.UNPACK_ROW_LENGTH,He),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,gn),G.pixelStorei(G.UNPACK_SKIP_ROWS,It),G.pixelStorei(G.UNPACK_SKIP_IMAGES,di),W===0&&Y.generateMipmaps&&G.generateMipmap(Fe),Se.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){b=0,T=0,w=null,Se.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Wd?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===xc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Ur:Uv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ur?Ot:Ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class oA extends t_{}oA.prototype.isWebGL1Renderer=!0;class Zd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=n}clone(){return new Zd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class aA extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Ki extends to{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zm=new R,Bm=new R,Hm=new gt,Ru=new Mc,el=new Sc;class Mn extends wt{constructor(e=new pt,n=new Ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)zm.fromBufferAttribute(n,r-1),Bm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=zm.distanceTo(Bm);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(r),el.radius+=s,e.ray.intersectsSphere(el)===!1)return;Hm.copy(r).invert(),Ru.copy(e.ray).applyMatrix4(Hm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,h=new R,f=new R,d=new R,m=this.isLineSegments?2:1,_=i.index,g=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let p=u,x=v-1;p<x;p+=m){const b=_.getX(p),T=_.getX(p+1);if(c.fromBufferAttribute(g,b),h.fromBufferAttribute(g,T),Ru.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||n.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let p=u,x=v-1;p<x;p+=m){if(c.fromBufferAttribute(g,p),h.fromBufferAttribute(g,p+1),Ru.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||n.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Gm=new R,Vm=new R;class Kd extends Mn{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Gm.fromBufferAttribute(n,r),Vm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Gm.distanceTo(Vm);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Li{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,m=(o-h)/d;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ge:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new R,r=[],s=[],o=[],a=new R,l=new gt;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ft(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(Ft(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class n_ extends Li{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new ge,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*f+this.aX,c=d*f+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lA extends n_{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,m*=h,r(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const tl=new R,Pu=new Qd,Lu=new Qd,Du=new Qd;class i_ extends Li{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new R){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(tl.subVectors(r[0],r[1]).add(r[0]),c=tl);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(tl.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=tl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),m),y=Math.pow(f.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(h),m);y<1e-4&&(y=1),_<1e-4&&(_=y),g<1e-4&&(g=y),Pu.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,_,y,g),Lu.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,_,y,g),Du.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,_,y,g)}else this.curveType==="catmullrom"&&(Pu.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Lu.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Du.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(Pu.calc(l),Lu.calc(l),Du.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function cA(t,e){const n=1-t;return n*n*e}function uA(t,e){return 2*(1-t)*t*e}function hA(t,e){return t*t*e}function Fo(t,e,n,i){return cA(t,e)+uA(t,n)+hA(t,i)}function dA(t,e){const n=1-t;return n*n*n*e}function fA(t,e){const n=1-t;return 3*n*n*t*e}function pA(t,e){return 3*(1-t)*t*t*e}function mA(t,e){return t*t*t*e}function ko(t,e,n,i,r){return dA(t,e)+fA(t,n)+pA(t,i)+mA(t,r)}class gA extends Li{constructor(e=new ge,n=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ge){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ko(e,r.x,s.x,o.x,a.x),ko(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vA extends Li{constructor(e=new R,n=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new R){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ko(e,r.x,s.x,o.x,a.x),ko(e,r.y,s.y,o.y,a.y),ko(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _A extends Li{constructor(e=new ge,n=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ge){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ge){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yA extends Li{constructor(e=new R,n=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new R){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new R){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xA extends Li{constructor(e=new ge,n=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ge){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Fo(e,r.x,s.x,o.x),Fo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class r_ extends Li{constructor(e=new R,n=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new R){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Fo(e,r.x,s.x,o.x),Fo(e,r.y,s.y,o.y),Fo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SA extends Li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ge){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Wm(a,l.x,c.x,h.x,f.x),Wm(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ge().fromArray(r))}return this}}var MA=Object.freeze({__proto__:null,ArcCurve:lA,CatmullRomCurve3:i_,CubicBezierCurve:gA,CubicBezierCurve3:vA,EllipseCurve:n_,LineCurve:_A,LineCurve3:yA,QuadraticBezierCurve:xA,QuadraticBezierCurve3:r_,SplineCurve:SA});class Ht extends pt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],m=[];let _=0;const y=[],g=i/2;let u=0;v(),o===!1&&(e>0&&p(!0),n>0&&p(!1)),this.setIndex(h),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(m,2));function v(){const x=new R,b=new R;let T=0;const w=(n-e)/i;for(let D=0;D<=s;D++){const S=[],E=D/s,z=E*(n-e)+e;for(let V=0;V<=r;V++){const J=V/r,I=J*l+a,F=Math.sin(I),j=Math.cos(I);b.x=z*F,b.y=-E*i+g,b.z=z*j,f.push(b.x,b.y,b.z),x.set(F,w,j).normalize(),d.push(x.x,x.y,x.z),m.push(J,1-E),S.push(_++)}y.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){const E=y[S][D],z=y[S+1][D],V=y[S+1][D+1],J=y[S][D+1];h.push(E,z,J),h.push(z,V,J),T+=6}c.addGroup(u,T,0),u+=T}function p(x){const b=_,T=new ge,w=new R;let D=0;const S=x===!0?e:n,E=x===!0?1:-1;for(let V=1;V<=r;V++)f.push(0,g*E,0),d.push(0,E,0),m.push(.5,.5),_++;const z=_;for(let V=0;V<=r;V++){const I=V/r*l+a,F=Math.cos(I),j=Math.sin(I);w.x=S*j,w.y=g*E,w.z=S*F,f.push(w.x,w.y,w.z),d.push(0,E,0),T.x=F*.5+.5,T.y=j*.5*E+.5,m.push(T.x,T.y),_++}for(let V=0;V<r;V++){const J=b+V,I=z+V;x===!0?h.push(I,I+1,J):h.push(I+1,I,J),D+=3}c.addGroup(u,D,x===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jd extends pt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const p=new R,x=new R,b=new R;for(let T=0;T<n.length;T+=3)m(n[T+0],p),m(n[T+1],x),m(n[T+2],b),l(p,x,b,v)}function l(v,p,x,b){const T=b+1,w=[];for(let D=0;D<=T;D++){w[D]=[];const S=v.clone().lerp(x,D/T),E=p.clone().lerp(x,D/T),z=T-D;for(let V=0;V<=z;V++)V===0&&D===T?w[D][V]=S:w[D][V]=S.clone().lerp(E,V/z)}for(let D=0;D<T;D++)for(let S=0;S<2*(T-D)-1;S++){const E=Math.floor(S/2);S%2===0?(d(w[D][E+1]),d(w[D+1][E]),d(w[D][E])):(d(w[D][E+1]),d(w[D+1][E+1]),d(w[D+1][E]))}}function c(v){const p=new R;for(let x=0;x<s.length;x+=3)p.x=s[x+0],p.y=s[x+1],p.z=s[x+2],p.normalize().multiplyScalar(v),s[x+0]=p.x,s[x+1]=p.y,s[x+2]=p.z}function h(){const v=new R;for(let p=0;p<s.length;p+=3){v.x=s[p+0],v.y=s[p+1],v.z=s[p+2];const x=g(v)/2/Math.PI+.5,b=u(v)/Math.PI+.5;o.push(x,1-b)}_(),f()}function f(){for(let v=0;v<o.length;v+=6){const p=o[v+0],x=o[v+2],b=o[v+4],T=Math.max(p,x,b),w=Math.min(p,x,b);T>.9&&w<.1&&(p<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function m(v,p){const x=v*3;p.x=e[x+0],p.y=e[x+1],p.z=e[x+2]}function _(){const v=new R,p=new R,x=new R,b=new R,T=new ge,w=new ge,D=new ge;for(let S=0,E=0;S<s.length;S+=9,E+=6){v.set(s[S+0],s[S+1],s[S+2]),p.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),T.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),D.set(o[E+4],o[E+5]),b.copy(v).add(p).add(x).divideScalar(3);const z=g(b);y(T,E+0,v,z),y(w,E+2,p,z),y(D,E+4,x,z)}}function y(v,p,x,b){b<0&&v.x===1&&(o[p]=v.x-1),x.x===0&&x.z===0&&(o[p]=b/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.vertices,e.indices,e.radius,e.details)}}const nl=new R,il=new R,Iu=new R,rl=new Nn;class EA extends pt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Os*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},m=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:g,c:u}=rl;if(y.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),rl.getNormal(Iu),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let v=0;v<3;v++){const p=(v+1)%3,x=f[v],b=f[p],T=rl[h[v]],w=rl[h[p]],D=`${x}_${b}`,S=`${b}_${x}`;S in d&&d[S]?(Iu.dot(d[S].normal)<=s&&(m.push(T.x,T.y,T.z),m.push(w.x,w.y,w.z)),d[S]=null):D in d||(d[D]={index0:c[v],index1:c[p],normal:Iu.clone()})}}for(const _ in d)if(d[_]){const{index0:y,index1:g}=d[_];nl.fromBufferAttribute(a,y),il.fromBufferAttribute(a,g),m.push(nl.x,nl.y,nl.z),m.push(il.x,il.y,il.z)}this.setAttribute("position",new Je(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Cs extends Jd{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Cs(e.radius,e.detail)}}class sa extends pt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new R,d=new R,m=[],_=[],y=[],g=[];for(let u=0;u<=i;u++){const v=[],p=u/i;let x=0;u===0&&o===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let b=0;b<=n;b++){const T=b/n;f.x=-e*Math.cos(r+T*s)*Math.sin(o+p*a),f.y=e*Math.cos(o+p*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+p*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),g.push(T+x,1-p),v.push(c++)}h.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const p=h[u][v+1],x=h[u][v],b=h[u+1][v],T=h[u+1][v+1];(u!==0||o>0)&&m.push(p,x,T),(u!==i-1||l<Math.PI)&&m.push(x,b,T)}this.setIndex(m),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(y,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ji extends pt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new R,f=new R,d=new R;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const y=_/r*s,g=m/i*Math.PI*2;f.x=(e+n*Math.cos(g))*Math.cos(y),f.y=(e+n*Math.cos(g))*Math.sin(y),f.z=n*Math.sin(g),a.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const y=(r+1)*m+_-1,g=(r+1)*(m-1)+_-1,u=(r+1)*(m-1)+_,v=(r+1)*m+_;o.push(y,g,v),o.push(g,u,v)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ef extends pt{constructor(e=new r_(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new ge;let h=new R;const f=[],d=[],m=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(m,2));function y(){for(let p=0;p<n;p++)g(p);g(s===!1?n:0),v(),u()}function g(p){h=e.getPointAt(p/n,h);const x=o.normals[p],b=o.binormals[p];for(let T=0;T<=r;T++){const w=T/r*Math.PI*2,D=Math.sin(w),S=-Math.cos(w);l.x=S*x.x+D*b.x,l.y=S*x.y+D*b.y,l.z=S*x.z+D*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let p=1;p<=n;p++)for(let x=1;x<=r;x++){const b=(r+1)*(p-1)+(x-1),T=(r+1)*p+(x-1),w=(r+1)*p+x,D=(r+1)*(p-1)+x;_.push(b,T,D),_.push(T,w,D)}}function v(){for(let p=0;p<=n;p++)for(let x=0;x<=r;x++)c.x=p/n,c.y=x/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ef(new MA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Nu extends to{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ov,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class s_ extends wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class wA extends s_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Uu=new gt,Xm=new R,jm=new R;class TA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yd,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Xm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xm),jm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(jm),n.updateMatrixWorld(),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class AA extends TA{constructor(){super(new qd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ym extends s_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new AA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class o_{constructor(e,n,i=0,r=1/0){this.ray=new Mc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new jd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Xh(e,this,i,n),i.sort(qm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Xh(e[r],this,i,n);return i.sort(qm),i}}function qm(t,e){return t.distance-e.distance}function Xh(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Xh(r[s],e,n,!0)}}class $m{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ft(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bA extends Kd{constructor(e=10,n=10,i=4473924,r=8947848){i=new ke(i),r=new ke(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,m=0,_=-a;d<=n;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=d===s?i:r;y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3}const h=new pt;h.setAttribute("position",new Je(l,3)),h.setAttribute("color",new Je(c,3));const f=new Ki({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class CA extends Kd{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new pt;r.setAttribute("position",new Je(n,3)),r.setAttribute("color",new Je(i,3));const s=new Ki({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new ke,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);const Zm={type:"change"},Ou={type:"start"},Km={type:"end"},sl=new Mc,Qm=new oi,RA=Math.cos(70*jn.DEG2RAD);class PA extends Xr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ce),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Zm),i.update(),s=r.NONE},this.update=function(){const P=new R,oe=new Vt().setFromUnitVectors(e.up,new R(0,1,0)),Ee=oe.clone().invert(),ve=new R,ne=new Vt,L=new R,ae=2*Math.PI;return function(Pe=null){const be=i.object.position;P.copy(be).sub(i.target),P.applyQuaternion(oe),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&V(E(Pe)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let $e=i.minAzimuthAngle,Ze=i.maxAzimuthAngle;isFinite($e)&&isFinite(Ze)&&($e<-Math.PI?$e+=ae:$e>Math.PI&&($e-=ae),Ze<-Math.PI?Ze+=ae:Ze>Math.PI&&(Ze-=ae),$e<=Ze?a.theta=Math.max($e,Math.min(Ze,a.theta)):a.theta=a.theta>($e+Ze)/2?Math.max($e,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?a.radius=B(a.radius):a.radius=B(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(Ee),be.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let _t=!1;if(i.zoomToCursor&&T){let St=null;if(i.object.isPerspectiveCamera){const Qe=P.length();St=B(Qe*c);const Tt=Qe-St;i.object.position.addScaledVector(x,Tt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Qe=new R(b.x,b.y,0);Qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),_t=!0;const Tt=new R(b.x,b.y,0);Tt.unproject(i.object),i.object.position.sub(Tt).add(Qe),i.object.updateMatrixWorld(),St=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;St!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(St).add(i.object.position):(sl.origin.copy(i.object.position),sl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(sl.direction))<RA?e.lookAt(i.target):(Qm.setFromNormalAndCoplanarPoint(i.object.up,i.target),sl.intersectPlane(Qm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),_t=!0);return c=1,T=!1,_t||ve.distanceToSquared(i.object.position)>o||8*(1-ne.dot(i.object.quaternion))>o||L.distanceToSquared(i.target)>0?(i.dispatchEvent(Zm),ve.copy(i.object.position),ne.copy(i.object.quaternion),L.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",et),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",H),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",H),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ce),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new $m,l=new $m;let c=1;const h=new R,f=new ge,d=new ge,m=new ge,_=new ge,y=new ge,g=new ge,u=new ge,v=new ge,p=new ge,x=new R,b=new ge;let T=!1;const w=[],D={};let S=!1;function E(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function z(P){const oe=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*oe)}function V(P){l.theta-=P}function J(P){l.phi-=P}const I=function(){const P=new R;return function(Ee,ve){P.setFromMatrixColumn(ve,0),P.multiplyScalar(-Ee),h.add(P)}}(),F=function(){const P=new R;return function(Ee,ve){i.screenSpacePanning===!0?P.setFromMatrixColumn(ve,1):(P.setFromMatrixColumn(ve,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Ee),h.add(P)}}(),j=function(){const P=new R;return function(Ee,ve){const ne=i.domElement;if(i.object.isPerspectiveCamera){const L=i.object.position;P.copy(L).sub(i.target);let ae=P.length();ae*=Math.tan(i.object.fov/2*Math.PI/180),I(2*Ee*ae/ne.clientHeight,i.object.matrix),F(2*ve*ae/ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(Ee*(i.object.right-i.object.left)/i.object.zoom/ne.clientWidth,i.object.matrix),F(ve*(i.object.top-i.object.bottom)/i.object.zoom/ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(P,oe){if(!i.zoomToCursor)return;T=!0;const Ee=i.domElement.getBoundingClientRect(),ve=P-Ee.left,ne=oe-Ee.top,L=Ee.width,ae=Ee.height;b.x=ve/L*2-1,b.y=-(ne/ae)*2+1,x.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function B(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function Z(P){f.set(P.clientX,P.clientY)}function Q(P){U(P.clientX,P.clientX),u.set(P.clientX,P.clientY)}function q(P){_.set(P.clientX,P.clientY)}function K(P){d.set(P.clientX,P.clientY),m.subVectors(d,f).multiplyScalar(i.rotateSpeed);const oe=i.domElement;V(2*Math.PI*m.x/oe.clientHeight),J(2*Math.PI*m.y/oe.clientHeight),f.copy(d),i.update()}function ce(P){v.set(P.clientX,P.clientY),p.subVectors(v,u),p.y>0?$(z(p.y)):p.y<0&&N(z(p.y)),u.copy(v),i.update()}function ye(P){y.set(P.clientX,P.clientY),g.subVectors(y,_).multiplyScalar(i.panSpeed),j(g.x,g.y),_.copy(y),i.update()}function xe(P){U(P.clientX,P.clientY),P.deltaY<0?N(z(P.deltaY)):P.deltaY>0&&$(z(P.deltaY)),i.update()}function Ue(P){let oe=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?J(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(0,i.keyPanSpeed),oe=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?J(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(0,-i.keyPanSpeed),oe=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(i.keyPanSpeed,0),oe=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(-i.keyPanSpeed,0),oe=!0;break}oe&&(P.preventDefault(),i.update())}function Oe(P){if(w.length===1)f.set(P.pageX,P.pageY);else{const oe=fe(P),Ee=.5*(P.pageX+oe.x),ve=.5*(P.pageY+oe.y);f.set(Ee,ve)}}function Re(P){if(w.length===1)_.set(P.pageX,P.pageY);else{const oe=fe(P),Ee=.5*(P.pageX+oe.x),ve=.5*(P.pageY+oe.y);_.set(Ee,ve)}}function qe(P){const oe=fe(P),Ee=P.pageX-oe.x,ve=P.pageY-oe.y,ne=Math.sqrt(Ee*Ee+ve*ve);u.set(0,ne)}function G(P){i.enableZoom&&qe(P),i.enablePan&&Re(P)}function Bt(P){i.enableZoom&&qe(P),i.enableRotate&&Oe(P)}function Ae(P){if(w.length==1)d.set(P.pageX,P.pageY);else{const Ee=fe(P),ve=.5*(P.pageX+Ee.x),ne=.5*(P.pageY+Ee.y);d.set(ve,ne)}m.subVectors(d,f).multiplyScalar(i.rotateSpeed);const oe=i.domElement;V(2*Math.PI*m.x/oe.clientHeight),J(2*Math.PI*m.y/oe.clientHeight),f.copy(d)}function De(P){if(w.length===1)y.set(P.pageX,P.pageY);else{const oe=fe(P),Ee=.5*(P.pageX+oe.x),ve=.5*(P.pageY+oe.y);y.set(Ee,ve)}g.subVectors(y,_).multiplyScalar(i.panSpeed),j(g.x,g.y),_.copy(y)}function Se(P){const oe=fe(P),Ee=P.pageX-oe.x,ve=P.pageY-oe.y,ne=Math.sqrt(Ee*Ee+ve*ve);v.set(0,ne),p.set(0,Math.pow(v.y/u.y,i.zoomSpeed)),$(p.y),u.copy(v);const L=(P.pageX+oe.x)*.5,ae=(P.pageY+oe.y)*.5;U(L,ae)}function st(P){i.enableZoom&&Se(P),i.enablePan&&De(P)}function ze(P){i.enableZoom&&Se(P),i.enableRotate&&Ae(P)}function C(P){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",H)),Ve(P),P.pointerType==="touch"?Be(P):re(P))}function M(P){i.enabled!==!1&&(P.pointerType==="touch"?ee(P):te(P))}function H(P){Ie(P),w.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",H)),i.dispatchEvent(Km),s=r.NONE}function re(P){let oe;switch(P.button){case 0:oe=i.mouseButtons.LEFT;break;case 1:oe=i.mouseButtons.MIDDLE;break;case 2:oe=i.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case Gi.DOLLY:if(i.enableZoom===!1)return;Q(P),s=r.DOLLY;break;case Gi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;q(P),s=r.PAN}else{if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}break;case Gi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}else{if(i.enablePan===!1)return;q(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ou)}function te(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;K(P);break;case r.DOLLY:if(i.enableZoom===!1)return;ce(P);break;case r.PAN:if(i.enablePan===!1)return;ye(P);break}}function se(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(Ou),xe(Me(P)),i.dispatchEvent(Km))}function Me(P){const oe=P.deltaMode,Ee={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(oe){case 1:Ee.deltaY*=16;break;case 2:Ee.deltaY*=100;break}return P.ctrlKey&&!S&&(Ee.deltaY*=10),Ee}function he(P){P.key==="Control"&&(S=!0,document.addEventListener("keyup",_e,{passive:!0,capture:!0}))}function _e(P){P.key==="Control"&&(S=!1,document.removeEventListener("keyup",_e,{passive:!0,capture:!0}))}function Ce(P){i.enabled===!1||i.enablePan===!1||Ue(P)}function Be(P){switch(Te(P),w.length){case 1:switch(i.touches.ONE){case Vi.ROTATE:if(i.enableRotate===!1)return;Oe(P),s=r.TOUCH_ROTATE;break;case Vi.PAN:if(i.enablePan===!1)return;Re(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Vi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;G(P),s=r.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Bt(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ou)}function ee(P){switch(Te(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ae(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;De(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;st(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ze(P),i.update();break;default:s=r.NONE}}function et(P){i.enabled!==!1&&P.preventDefault()}function Ve(P){w.push(P.pointerId)}function Ie(P){delete D[P.pointerId];for(let oe=0;oe<w.length;oe++)if(w[oe]==P.pointerId){w.splice(oe,1);return}}function Te(P){let oe=D[P.pointerId];oe===void 0&&(oe=new ge,D[P.pointerId]=oe),oe.set(P.pageX,P.pageY)}function fe(P){const oe=P.pointerId===w[0]?w[1]:w[0];return D[oe]}i.domElement.addEventListener("contextmenu",et),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",H),i.domElement.addEventListener("wheel",se,{passive:!1}),document.addEventListener("keydown",he,{passive:!0,capture:!0}),this.update()}}const Sr=new o_,Kt=new R,ki=new R,ct=new Vt,Jm={X:new R(1,0,0),Y:new R(0,1,0),Z:new R(0,0,1)},Fu={type:"change"},eg={type:"mouseDown"},tg={type:"mouseUp",mode:null},ng={type:"objectChange"};class LA extends wt{constructor(e,n){super(),n===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),n=document),this.isTransformControls=!0,this.visible=!1,this.domElement=n,this.domElement.style.touchAction="none";const i=new FA;this._gizmo=i,this.add(i);const r=new kA;this._plane=r,this.add(r);const s=this;function o(v,p){let x=p;Object.defineProperty(s,v,{get:function(){return x!==void 0?x:p},set:function(b){x!==b&&(x=b,r[v]=b,i[v]=b,s.dispatchEvent({type:v+"-changed",value:b}),s.dispatchEvent(Fu))}}),s[v]=p,r[v]=p,i[v]=p}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new R,l=new R,c=new Vt,h=new Vt,f=new R,d=new Vt,m=new R,_=new R,y=new R,g=0,u=new R;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",h),o("cameraPosition",f),o("cameraQuaternion",d),o("pointStart",m),o("pointEnd",_),o("rotationAxis",y),o("rotationAngle",g),o("eye",u),this._offset=new R,this._startNorm=new R,this._endNorm=new R,this._cameraScale=new R,this._parentPosition=new R,this._parentQuaternion=new Vt,this._parentQuaternionInv=new Vt,this._parentScale=new R,this._worldScaleStart=new R,this._worldQuaternionInv=new Vt,this._worldScale=new R,this._positionStart=new R,this._quaternionStart=new Vt,this._scaleStart=new R,this._getPointer=DA.bind(this),this._onPointerDown=NA.bind(this),this._onPointerHover=IA.bind(this),this._onPointerMove=UA.bind(this),this._onPointerUp=OA.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;Sr.setFromCamera(e,this.camera);const n=ku(this._gizmo.picker[this.mode],Sr);n?this.axis=n.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){Sr.setFromCamera(e,this.camera);const n=ku(this._plane,Sr,!0);n&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(n.point).sub(this.worldPositionStart)),this.dragging=!0,eg.mode=this.mode,this.dispatchEvent(eg)}}pointerMove(e){const n=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(n==="E"||n==="XYZE"||n==="XYZ")&&(s="world"),r===void 0||n===null||this.dragging===!1||e.button!==-1)return;Sr.setFromCamera(e,this.camera);const o=ku(this._plane,Sr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&n!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),n.indexOf("X")===-1&&(this._offset.x=0),n.indexOf("Y")===-1&&(this._offset.y=0),n.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&n!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(ct.copy(this._quaternionStart).invert()),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Kt.setFromMatrixPosition(r.parent.matrixWorld)),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Kt.setFromMatrixPosition(r.parent.matrixWorld))));else if(i==="scale"){if(n.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ki.set(a,a,a)}else Kt.copy(this.pointStart),ki.copy(this.pointEnd),Kt.applyQuaternion(this._worldQuaternionInv),ki.applyQuaternion(this._worldQuaternionInv),ki.divide(Kt),n.search("X")===-1&&(ki.x=1),n.search("Y")===-1&&(ki.y=1),n.search("Z")===-1&&(ki.z=1);r.scale.copy(this._scaleStart).multiply(ki),this.scaleSnap&&(n.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Kt.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;n==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Kt.copy(this.rotationAxis).cross(this.eye))*a):(n==="X"||n==="Y"||n==="Z")&&(this.rotationAxis.copy(Jm[n]),Kt.copy(Jm[n]),s==="local"&&Kt.applyQuaternion(this.worldQuaternion),Kt.cross(this.eye),Kt.length()===0?l=!0:this.rotationAngle=this._offset.dot(Kt.normalize())*a),(n==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&n!=="E"&&n!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(ct.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(ct.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Fu),this.dispatchEvent(ng)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(tg.mode=this.mode,this.dispatchEvent(tg)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Fu),this.dispatchEvent(ng),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Sr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function DA(t){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:t.button};{const e=this.domElement.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width*2-1,y:-(t.clientY-e.top)/e.height*2+1,button:t.button}}}function IA(t){if(this.enabled)switch(t.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(t));break}}function NA(t){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(t)),this.pointerDown(this._getPointer(t)))}function UA(t){this.enabled&&this.pointerMove(this._getPointer(t))}function OA(t){this.enabled&&(this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(t)))}function ku(t,e,n){const i=e.intersectObject(t,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||n)return i[r];return!1}const ol=new ha,it=new R(0,1,0),ig=new R(0,0,0),rg=new gt,al=new Vt,wl=new Vt,ri=new R,sg=new gt,wo=new R(1,0,0),Tr=new R(0,1,0),To=new R(0,0,1),ll=new R,vo=new R,_o=new R;class FA extends wt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new da({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=new Ki({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=n.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const h=e.clone();h.color.setHex(255),h.opacity=.5;const f=e.clone();f.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const _=e.clone();_.color.setHex(7895160);const y=new Ht(0,.04,.1,12);y.translate(0,.05,0);const g=new bt(.08,.08,.08);g.translate(0,.04,0);const u=new pt;u.setAttribute("position",new Je([0,0,0,1,0,0],3));const v=new Ht(.0075,.0075,.5,3);v.translate(0,.25,0);function p(F,j){const $=new ji(F,.0075,3,64,j*Math.PI*2);return $.rotateY(Math.PI/2),$.rotateX(Math.PI/2),$}function x(){const F=new pt;return F.setAttribute("position",new Je([0,0,0,1,1,1],3)),F}const b={X:[[new de(y,s),[.5,0,0],[0,0,-Math.PI/2]],[new de(y,s),[-.5,0,0],[0,0,Math.PI/2]],[new de(v,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new de(y,o),[0,.5,0]],[new de(y,o),[0,-.5,0],[Math.PI,0,0]],[new de(v,o)]],Z:[[new de(y,a),[0,0,.5],[Math.PI/2,0,0]],[new de(y,a),[0,0,-.5],[-Math.PI/2,0,0]],[new de(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new de(new Cs(.1,0),f.clone()),[0,0,0]]],XY:[[new de(new bt(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new de(new bt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new bt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},T={X:[[new de(new Ht(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new Ht(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new Ht(.2,0,.6,4),i),[0,.3,0]],[new de(new Ht(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new Ht(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new Ht(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new de(new Cs(.2,0),i)]],XY:[[new de(new bt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new bt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new bt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},w={START:[[new de(new Cs(.01,2),r),null,null,null,"helper"]],END:[[new de(new Cs(.01,2),r),null,null,null,"helper"]],DELTA:[[new Mn(x(),r),null,null,null,"helper"]],X:[[new Mn(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Mn(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Mn(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},D={XYZE:[[new de(p(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new de(p(.5,.5),s)]],Y:[[new de(p(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new de(p(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new de(p(.75,1),d),null,[0,Math.PI/2,0]]]},S={AXIS:[[new Mn(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},E={XYZE:[[new de(new sa(.25,10,8),i)]],X:[[new de(new ji(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new de(new ji(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new de(new ji(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new de(new ji(.75,.1,2,24),i)]]},z={X:[[new de(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new de(v,s),[0,0,0],[0,0,-Math.PI/2]],[new de(g,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new de(g,o),[0,.5,0]],[new de(v,o)],[new de(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new de(g,a),[0,0,.5],[Math.PI/2,0,0]],[new de(v,a),[0,0,0],[Math.PI/2,0,0]],[new de(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new de(new bt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new de(new bt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new bt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new bt(.1,.1,.1),f.clone())]]},V={X:[[new de(new Ht(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new Ht(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new Ht(.2,0,.6,4),i),[0,.3,0]],[new de(new Ht(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new Ht(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new Ht(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new de(new bt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new bt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new bt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new bt(.2,.2,.2),i),[0,0,0]]]},J={X:[[new Mn(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Mn(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Mn(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function I(F){const j=new wt;for(const $ in F)for(let N=F[$].length;N--;){const U=F[$][N][0].clone(),B=F[$][N][1],Z=F[$][N][2],Q=F[$][N][3],q=F[$][N][4];U.name=$,U.tag=q,B&&U.position.set(B[0],B[1],B[2]),Z&&U.rotation.set(Z[0],Z[1],Z[2]),Q&&U.scale.set(Q[0],Q[1],Q[2]),U.updateMatrix();const K=U.geometry.clone();K.applyMatrix4(U.matrix),U.geometry=K,U.renderOrder=1/0,U.position.set(0,0,0),U.rotation.set(0,0,0),U.scale.set(1,1,1),j.add(U)}return j}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=I(b)),this.add(this.gizmo.rotate=I(D)),this.add(this.gizmo.scale=I(z)),this.add(this.picker.translate=I(T)),this.add(this.picker.rotate=I(E)),this.add(this.picker.scale=I(V)),this.add(this.helper.translate=I(w)),this.add(this.helper.rotate=I(S)),this.add(this.helper.scale=I(J)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:wl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(ct.setFromEuler(ol.set(0,0,0)),o.quaternion.copy(i).multiply(ct),Math.abs(it.copy(wo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(ct.setFromEuler(ol.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(ct),Math.abs(it.copy(Tr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(ct.setFromEuler(ol.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(ct),Math.abs(it.copy(To).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(ct.setFromEuler(ol.set(0,Math.PI/2,0)),it.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(rg.lookAt(ig,it,Tr)),o.quaternion.multiply(ct),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Kt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Kt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Kt),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(it.copy(wo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(it.copy(Tr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(it.copy(To).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(it.copy(To).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(it.copy(wo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(it.copy(Tr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(al.copy(i),it.copy(this.eye).applyQuaternion(ct.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(rg.lookAt(this.eye,ig,Tr)),o.name==="X"&&(ct.setFromAxisAngle(wo,Math.atan2(-it.y,it.z)),ct.multiplyQuaternions(al,ct),o.quaternion.copy(ct)),o.name==="Y"&&(ct.setFromAxisAngle(Tr,Math.atan2(it.x,it.z)),ct.multiplyQuaternions(al,ct),o.quaternion.copy(ct)),o.name==="Z"&&(ct.setFromAxisAngle(To,Math.atan2(it.y,it.x)),ct.multiplyQuaternions(al,ct),o.quaternion.copy(ct))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class kA extends de{constructor(){super(new $s(1e5,1e5,2,2),new da({visible:!1,wireframe:!0,side:On,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let n=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(n="local"),ll.copy(wo).applyQuaternion(n==="local"?this.worldQuaternion:wl),vo.copy(Tr).applyQuaternion(n==="local"?this.worldQuaternion:wl),_o.copy(To).applyQuaternion(n==="local"?this.worldQuaternion:wl),it.copy(vo),this.mode){case"translate":case"scale":switch(this.axis){case"X":it.copy(this.eye).cross(ll),ri.copy(ll).cross(it);break;case"Y":it.copy(this.eye).cross(vo),ri.copy(vo).cross(it);break;case"Z":it.copy(this.eye).cross(_o),ri.copy(_o).cross(it);break;case"XY":ri.copy(_o);break;case"YZ":ri.copy(ll);break;case"XZ":it.copy(_o),ri.copy(vo);break;case"XYZ":case"E":ri.set(0,0,0);break}break;case"rotate":default:ri.set(0,0,0)}ri.length()===0?this.quaternion.copy(this.cameraQuaternion):(sg.lookAt(Kt.set(0,0,0),ri,it),this.quaternion.setFromRotationMatrix(sg)),super.updateMatrixWorld(e)}}const zA={currentTool:"pencil",activeSurface:null,mirrorMode:!1,brushSettings:{color:"#22252e",size:12,opacity:1,hardness:.8,pressureSensitivity:.6,stabilization:.35},selectedObject:null,layers:[{id:"layer-0",name:"Capa 1",visible:!0,locked:!1,opacity:1}],activeLayerId:"layer-0",gizmoMode:"translate"};let nn=zA;const jh=new Set;let BA=1;const tf={setCurrentTool:t=>yn({currentTool:t}),setActiveSurface:t=>yn({activeSurface:t}),setMirrorMode:t=>yn({mirrorMode:t}),setBrushSettings:t=>yn({brushSettings:t}),setSelectedObject:t=>yn({selectedObject:t}),setGizmoMode:t=>yn({gizmoMode:t}),addLayer:()=>{const t=`layer-${BA++}`,e={id:t,name:`Capa ${nn.layers.length+1}`,visible:!0,locked:!1,opacity:1};yn({layers:[...nn.layers,e],activeLayerId:t})},removeLayer:t=>{if(nn.layers.length<=1)return;const e=nn.layers.filter(i=>i.id!==t),n=nn.activeLayerId===t?e[e.length-1].id:nn.activeLayerId;yn({layers:e,activeLayerId:n})},setActiveLayer:t=>yn({activeLayerId:t}),toggleLayerVisibility:t=>yn({layers:nn.layers.map(e=>e.id===t?{...e,visible:!e.visible}:e)}),toggleLayerLock:t=>yn({layers:nn.layers.map(e=>e.id===t?{...e,locked:!e.locked}:e)}),renameLayer:(t,e)=>yn({layers:nn.layers.map(n=>n.id===t?{...n,name:e}:n)}),setLayerOpacity:(t,e)=>yn({layers:nn.layers.map(n=>n.id===t?{...n,opacity:Math.max(0,Math.min(1,e))}:n)})};let a_={...nn,...tf};function yn(t){nn={...nn,...t},a_={...nn,...tf},jh.forEach(e=>e())}function l_(t){return jh.add(t),()=>{jh.delete(t)}}function og(){return a_}function nf(){return ut.useSyncExternalStore(l_,og,og)}const zi={getState:()=>nn,subscribe:l_,...tf},zu=.012,HA=6,GA=4,cs="http://www.w3.org/2000/svg",xn=class xn{constructor(){this.raycaster=new o_,this.pointer=new ge,this.surfaces=[],this.strokes=[],this.activeGuide=null,this.selected=new Set,this.fallbackPlane=new oi(new R(0,0,1),0),this.view="persp",this.orthoSize=GA,this.mode="idle",this.current=null,this.downScreen=new ge,this.lastMoveWorld=new R,this.moveStart=new Map,this.lassoPts=[],this.showAxes=!1,this.editingStroke=null,this.pointHandles=[],this.dragPointIndex=-1,this.dragPointStart=new R,this.gizmoTarget=null,this.gizmoDragStart=new R,this.clipboard=[],this.smoothed=null,this.undoStack=[],this.redoStack=[],this.raf=0,this.seq=0,this.disposed=!1,this.tool="pencil",this.brush={color:"#22252e",size:12,opacity:1,hardness:.8,pressureSensitivity:.6,stabilization:.35},this.mirror=!1,this.theme="light",this.lastSurfaceKey="",this.onPointerDown=e=>{var n;if(!(e.button!==0||e.pointerType==="touch"))if(this.setPointerFromEvent(e),this.updateCursor(e),this.downScreen.set(...this.screenOf(e)),this.tool==="pencil"||this.tool==="guide")this.beginDraw(e);else if(this.tool==="move"){if((n=this.gizmo)!=null&&n.axis)return;const i=this.pickStroke();i?(this.selected.has(i)||this.setSelection([i]),this.beginMove()):this.beginLasso(e)}else this.tool==="select"?this.onSelectPointerDown(e):this.tool==="eraser"&&this.beginLasso(e)},this.onPointerMove=e=>{this.updateCursor(e),this.setPointerFromEvent(e),this.mode==="draw"?this.moveDraw(e):this.mode==="move"?this.moveDrag(e):this.mode==="lasso"?this.moveLasso(e):this.mode==="point-drag"&&this.movePointDrag()},this.onPointerLeave=()=>{this.mode==="idle"&&(this.cursorEl.style.display="none")},this.onPointerUp=e=>{this.mode==="draw"?this.endDraw(e):this.mode==="move"?this.endMove():this.mode==="lasso"?this.endLasso(e):this.mode==="point-drag"&&this.endPointDrag(),this.mode="idle",this.controls.enabled=!0;try{this.canvas.releasePointerCapture(e.pointerId)}catch{}},this.onKeyDown=e=>{const n=e.ctrlKey||e.metaKey,i=document.activeElement,r=i&&["INPUT","TEXTAREA","SELECT"].includes(i.tagName);if(!n&&!e.altKey&&!r&&xn.TOOL_KEYS[e.key.toLowerCase()]){e.preventDefault(),zi.setCurrentTool(xn.TOOL_KEYS[e.key.toLowerCase()]);return}n&&e.key.toLowerCase()==="z"?(e.preventDefault(),e.shiftKey||e.altKey?this.redo():this.undo()):n&&e.key.toLowerCase()==="y"?(e.preventDefault(),this.redo()):e.key==="Delete"||e.key==="Backspace"?this.selected.size&&(e.preventDefault(),this.deleteSelection()):n&&e.key.toLowerCase()==="c"?this.selected.size&&(e.preventDefault(),this.copySelection()):n&&e.key.toLowerCase()==="v"?this.clipboard.length&&(e.preventDefault(),this.pasteClipboard()):e.key==="Escape"&&(this.setSelection([]),this.clearPointEdit())},this.animate=()=>{this.disposed||(this.raf=requestAnimationFrame(this.animate),this.resize(),this.controls.update(),this.renderer.render(this.scene,this.camera),this.showAxes&&this.updateVPOverlay())}}mount(e,n){this.canvas=e,this.container=n,this.renderer=new t_({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Ot,this.renderer.toneMapping=Av,this.renderer.toneMappingExposure=1.05,this.scene=new aA,this.perspCamera=new Un(45,1,.05,500),this.perspCamera.position.set(0,1.2,6),this.camera=this.perspCamera,this.makeControls(),this.controls.target.set(0,.6,0),this.buildEnvironment(),this.surfacesGroup=new $n,this.guidesGroup=new $n,this.strokesGroup=new $n,this.handlesGroup=new $n,this.scene.add(this.surfacesGroup,this.guidesGroup,this.strokesGroup,this.handlesGroup),this.axesHelper=new CA(3),this.axesHelper.visible=!1,this.scene.add(this.axesHelper),this.gizmo=new LA(this.camera,this.canvas),this.gizmo.setMode("translate"),this.gizmo.setSize(.85),this.gizmo.detach(),this.gizmo.addEventListener("dragging-changed",i=>{if(this.controls.enabled=!i.value,i.value)this.gizmoTarget=this.gizmo.object??null,this.gizmoTarget&&this.gizmoDragStart.copy(this.gizmoTarget.position);else if(this.gizmoTarget){const r=this.gizmoTarget,s=this.gizmoDragStart.clone(),o=r.position.clone();this.gizmoTarget=null,s.distanceToSquared(o)>1e-8&&this.pushCmd({undo:()=>r.position.copy(s),redo:()=>r.position.copy(o)})}}),this.scene.add(this.gizmo),this.vpEl=document.createElementNS(cs,"svg"),Object.assign(this.vpEl.style,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"20",display:"none"}),n.appendChild(this.vpEl),this.cursorEl=document.createElement("div"),Object.assign(this.cursorEl.style,{position:"absolute",left:"0",top:"0",borderRadius:"50%",border:"1.5px solid #333",transform:"translate(-50%, -50%)",pointerEvents:"none",display:"none",zIndex:"50",mixBlendMode:"difference"}),n.appendChild(this.cursorEl),this.lassoEl=document.createElementNS(cs,"svg"),Object.assign(this.lassoEl.style,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"40",display:"none"}),this.lassoPoly=document.createElementNS(cs,"polygon"),this.lassoPoly.setAttribute("fill","rgba(76,155,255,0.12)"),this.lassoPoly.setAttribute("stroke","#4c9bff"),this.lassoPoly.setAttribute("stroke-width","1.5"),this.lassoPoly.setAttribute("stroke-dasharray","5 4"),this.lassoEl.appendChild(this.lassoPoly),n.appendChild(this.lassoEl),this.syncFromStore(zi.getState()),this.unsub=zi.subscribe(()=>this.syncFromStore(zi.getState())),e.style.cursor="none",e.style.touchAction="none",e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerleave",this.onPointerLeave),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("keydown",this.onKeyDown),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(n),this.resize(),this.setTheme(this.theme),this.animate()}dispose(){var e,n,i,r,s,o,a,l,c,h,f,d;this.disposed=!0,cancelAnimationFrame(this.raf),(e=this.unsub)==null||e.call(this),(n=this.ro)==null||n.disconnect(),(i=this.canvas)==null||i.removeEventListener("pointerdown",this.onPointerDown),(r=this.canvas)==null||r.removeEventListener("pointermove",this.onPointerMove),(s=this.canvas)==null||s.removeEventListener("pointerleave",this.onPointerLeave),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),(o=this.cursorEl)==null||o.remove(),(a=this.lassoEl)==null||a.remove(),(l=this.vpEl)==null||l.remove(),(c=this.gizmo)==null||c.dispose(),(h=this.controls)==null||h.dispose(),(f=this.scene)==null||f.traverse(m=>this.disposeNode(m)),(d=this.renderer)==null||d.dispose()}makeControls(){var e;(e=this.controls)==null||e.dispose(),this.controls=new PA(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.mouseButtons={LEFT:-1,MIDDLE:Gi.PAN,RIGHT:Gi.ROTATE},this.controls.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.controls.enableRotate=this.view==="persp"}buildEnvironment(){this.scene.add(new wA(16777215,9476522,1.1));const e=new Ym(16777215,1.15);e.position.set(3,6,5),this.scene.add(e);const n=new Ym(12374271,.5);n.position.set(-5,2,-4),this.scene.add(n),this.grid=new bA(20,40,12765394,14146788);const i=this.grid.material;i.transparent=!0,i.opacity=.5,this.scene.add(this.grid)}setTheme(e){this.theme=e;const n=e==="dark";this.scene.fog=n?new Zd(921363,.025):null;const i=this.grid.material,r=this.grid.geometry.getAttribute("color"),s=new ke(n?3817291:12765394),o=new ke(n?2303534:14146788);for(let a=0;a<r.count;a++){const l=a<r.count/2?s:o;r.setXYZ(a,l.r,l.g,l.b)}r.needsUpdate=!0,i.opacity=n?.35:.5,this.cursorEl.style.borderColor=n?"#e6ebf5":"#2a2f3a"}toggleAxes(){return this.showAxes=!this.showAxes,this.axesHelper.visible=this.showAxes,this.updateVPOverlay(),this.showAxes}axesOn(){return this.showAxes}updateVPOverlay(){if(!this.vpEl)return;if(!this.showAxes||this.view!=="persp"){this.vpEl.style.display="none";return}for(this.vpEl.style.display="block";this.vpEl.lastChild;)this.vpEl.removeChild(this.vpEl.lastChild);const e=this.canvas.getBoundingClientRect(),n=e.width||1,i=e.height||1,r=this.camera,s=new R;r.getWorldDirection(s);const o=Math.max(n,i)*3;for(const[a,l]of xn.VP_AXES){const c=s.dot(a);if(Math.abs(c)>.985)continue;const h=c>=0?a:a.clone().negate(),d=r.position.clone().add(h.clone().multiplyScalar(500)).project(r);if(!isFinite(d.x)||!isFinite(d.y))continue;const m=(d.x+1)/2*n,_=(1-d.y)/2*i;if(Math.abs(m)>n*4||Math.abs(_)>i*4)continue;const y=document.createElementNS(cs,"g"),g=8;for(let v=0;v<g;v++){const p=v/g*Math.PI*2,x=document.createElementNS(cs,"line");x.setAttribute("x1",m.toFixed(1)),x.setAttribute("y1",_.toFixed(1)),x.setAttribute("x2",(m+Math.cos(p)*o).toFixed(1)),x.setAttribute("y2",(_+Math.sin(p)*o).toFixed(1)),x.setAttribute("stroke",l),x.setAttribute("stroke-width","1.4"),x.setAttribute("stroke-opacity","0.4"),y.appendChild(x)}const u=document.createElementNS(cs,"circle");u.setAttribute("cx",m.toFixed(1)),u.setAttribute("cy",_.toFixed(1)),u.setAttribute("r","5"),u.setAttribute("fill",l),y.appendChild(u),this.vpEl.appendChild(y)}}setView(e){const n=this.controls.target.clone(),i=this.camera.position.distanceTo(n)||8;if(e==="persp")this.camera=this.perspCamera;else{const s={front:[0,0,1],back:[0,0,-1],top:[0,1,0],bottom:[0,-1,0],left:[-1,0,0],right:[1,0,0]}[e],o=new qd(-1,1,1,-1,-500,500);o.position.set(n.x+s[0]*i,n.y+s[1]*i,n.z+s[2]*i),(e==="top"||e==="bottom")&&o.up.set(0,0,e==="top"?-1:1),this.camera=o}this.view=e,this.camera.lookAt(n),this.makeControls(),this.controls.target.copy(n),this.applyOrthoFrustum(),this.gizmo&&(this.gizmo.camera=this.camera)}applyOrthoFrustum(){if(this.view==="persp")return;const e=this.camera,n=this.renderer.domElement,i=(n.clientWidth||1)/(n.clientHeight||1);e.left=-this.orthoSize*i,e.right=this.orthoSize*i,e.top=this.orthoSize,e.bottom=-this.orthoSize,e.updateProjectionMatrix()}addSurface(e){const n=e==="plane"?new $s(4,4):this.surfaceGeometry(e,1.4),i=this.makeSurfaceMesh(n);i.position.copy(this.controls.target),e==="plane"&&i.lookAt(this.camera.position);const r={id:`surf-${this.seq++}`,type:e,mesh:i};i.userData.surfaceId=r.id,this.surfacesGroup.add(i),this.surfaces.push(r)}makeSurfaceMesh(e){const n=new de(e,new Nu({color:5012432,roughness:.9,metalness:0,transparent:!0,opacity:.08,side:On,depthWrite:!1}));return n.add(new Kd(new EA(e),new Ki({color:5020671,transparent:!0,opacity:.3}))),n}surfaceGeometry(e,n){switch(e){case"sphere":return new sa(n,48,32);case"cylinder":return new Ht(n,n,n*2,48,1,!0);case"torus":return new ji(n,n*.35,24,64);default:return new $s(n*2,n*2)}}syncFromStore(e){var r;this.tool==="select"&&e.currentTool!=="select"&&this.clearPointEdit();const n=this.tool!==e.currentTool;this.tool=e.currentTool,this.brush=e.brushSettings,this.mirror=e.mirrorMode;const i=e.activeSurface?e.activeSurface.type:"";i&&i!==this.lastSurfaceKey&&this.addSurface(e.activeSurface.type),this.lastSurfaceKey=i,n&&this.syncGizmo(),(r=this.gizmo)==null||r.setMode(e.gizmoMode||"translate"),this.applyLayerStyles()}setPointerFromEvent(e){const n=this.canvas.getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1}screenOf(e){const n=this.canvas.getBoundingClientRect();return[e.clientX-n.left,e.clientY-n.top]}updateCursor(e){const[n,i]=this.screenOf(e),r=Math.max(6,this.brush.size);this.cursorEl.style.display="block",this.cursorEl.style.width=`${r}px`,this.cursorEl.style.height=`${r}px`,this.cursorEl.style.left=`${n}px`,this.cursorEl.style.top=`${i}px`}resolveHit(){var r;this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.surfaces.map(s=>s.mesh);if(e.length){const s=this.raycaster.intersectObjects(e,!1);if(s.length){const o=s[0],a=o.face?o.face.normal.clone().transformDirection(o.object.matrixWorld).normalize():new R(0,0,1);return{point:o.point.clone(),normal:a}}}if(this.tool!=="guide"&&((r=this.activeGuide)!=null&&r.plane)){const s=new R;if(this.raycaster.ray.intersectPlane(this.activeGuide.plane,s))return{point:s.clone(),normal:this.activeGuide.plane.normal.clone()}}const n=new R;this.camera.getWorldDirection(n),this.fallbackPlane.setFromNormalAndCoplanarPoint(n.clone().negate(),this.controls.target);const i=new R;return this.raycaster.ray.intersectPlane(this.fallbackPlane,i)?{point:i.clone(),normal:this.fallbackPlane.normal.clone()}:null}pickStroke(){this.raycaster.setFromCamera(this.pointer,this.camera);const e=[],n=s=>s.traverse(o=>{o.isMesh&&e.push(o)});n(this.strokesGroup),n(this.guidesGroup);const i=this.raycaster.intersectObjects(e,!1);if(!i.length)return null;let r=i[0].object;for(;r&&!r.userData.strokeId;)r=r.parent;return r?this.strokes.find(s=>s.id===r.userData.strokeId)??null:null}copySelection(){const e=[...this.selected].filter(n=>n.kind==="stroke");e.length&&(this.clipboard=e.map(n=>({points:n.points.map(i=>i.clone().add(n.object.position)),pressures:[...n.pressures]})))}pasteClipboard(){if(!this.clipboard.length)return;const e=new R(.18,0,.18),n=[];for(const i of this.clipboard){const r=i.points.map(c=>c.clone()),s=[...i.pressures],o=new $n,a=this.buildTube(r,s);a&&o.add(a),o.position.copy(e);const l={id:`stroke-${this.seq++}`,object:o,points:r,pressures:s,kind:"stroke",layerId:this.activeLayerId(),baseOpacity:1};o.userData.strokeId=l.id,n.push(l)}for(const i of n)this.addStrokeRecord(i);this.setSelection(n),this.pushCmd({undo:()=>n.forEach(i=>this.removeStrokeRecord(i)),redo:()=>n.forEach(i=>this.addStrokeRecord(i))})}samplePressure(e){return e.pointerType!=="pen"?1:jn.clamp(e.pressure||.5,0,1)}findSnapVertex(e,n,i=1/0){const r=this.canvas.getBoundingClientRect(),s=e.clientX-r.left,o=e.clientY-r.top,a=this.camera;let l=null,c=xn.SNAP_PX;for(const h of this.strokes)for(const f of h.points){const d=f.clone().add(h.object.position);if(n&&d.distanceTo(n)>i)continue;const m=d.clone().project(a),_=(m.x+1)/2*r.width,y=(1-m.y)/2*r.height,g=Math.hypot(_-s,y-o);g<c&&(c=g,l=d)}return l}snapToNearestAxis(e,n){const i=n.clone().sub(e);if(i.lengthSq()<1e-10)return n;const r=i.clone().normalize();let s=xn.VP_AXES[0][0],o=-1;for(const[l]of xn.VP_AXES){const c=Math.abs(r.dot(l));c>o&&(o=c,s=l)}const a=i.dot(s);return e.clone().add(s.clone().multiplyScalar(a))}beginDraw(e){const n=this.resolveHit(),i=this.findSnapVertex(e,n==null?void 0:n.point,.8),r=i?{point:i,normal:(n==null?void 0:n.normal)??new R(0,0,1)}:n;if(!r)return;this.canvas.setPointerCapture(e.pointerId),this.mode="draw",this.controls.enabled=!1;const s=this.tool==="guide"?"guide":"stroke",o=this.makePreviewLine(s);this.strokesGroup.add(o);let a;this.mirror&&s==="stroke"&&(a=this.makePreviewLine(s),this.strokesGroup.add(a)),this.smoothed=r.point.clone(),this.current={points:[r.point],pressures:[this.samplePressure(e)],kind:s,line:o,mirrorLine:a},this.updatePreview()}stabilizedPoint(e){const n=jn.clamp(this.brush.stabilization??0,0,1);if(this.smoothed||(this.smoothed=e.clone()),n<=0)return this.smoothed.copy(e),e;const i=jn.lerp(1,.15,n);return this.smoothed.lerp(e,i),this.smoothed}moveDraw(e){if(!this.current)return;const n=this.resolveHit();if(!n)return;const i=this.current.points,r=this.current.pressures;if(e.altKey&&i.length>=1){const o=i[0],a=this.stabilizedPoint(n.point).clone(),l=this.snapToNearestAxis(o,a);i.length=1,r.length=1,l.distanceTo(o)>=zu&&(i.push(l),r.push(this.samplePressure(e))),this.updatePreview();return}if(e.shiftKey&&i.length>=1){const o=i[0],a=this.stabilizedPoint(n.point).clone();i.length=1,r.length=1,a.distanceTo(o)>=zu&&(i.push(a),r.push(this.samplePressure(e))),this.updatePreview();return}const s=this.stabilizedPoint(n.point).clone();s.distanceTo(i[i.length-1])<zu||(i.push(s),r.push(this.samplePressure(e)),this.updatePreview())}endDraw(e){if(this.current&&this.current.points.length>=2&&this.current.kind==="stroke"){const n=this.current.points,i=n[n.length-1],r=this.findSnapVertex(e,i,.6);r&&(n[n.length-1]=r.clone())}this.commitStroke()}makePreviewLine(e){const n=new pt,i=new Ki({color:e==="guide"?16753978:new ke(this.brush.color),transparent:!0,opacity:e==="guide"?.95:Math.max(this.brush.opacity,.6)});return new Mn(n,i)}updatePreview(){var e;this.current&&((e=this.current.line)==null||e.geometry.setFromPoints(this.current.points),this.current.mirrorLine&&this.current.mirrorLine.geometry.setFromPoints(this.mirrored(this.current.points)))}strokeRadius(){return .01+this.brush.size/100*.12}radiusAt(e){const n=this.strokeRadius(),i=jn.clamp(this.brush.pressureSensitivity??0,0,1),r=jn.lerp(1,.15,i);return n*jn.lerp(r,1,jn.clamp(e,0,1))}pressureAtT(e,n){const i=e.length;if(i<2)return e[0]??1;const r=jn.clamp(n,0,1)*(i-1),s=Math.floor(r),o=Math.min(s+1,i-1),a=r-s;return e[s]*(1-a)+e[o]*a}buildTube(e,n){if(e.length<2)return null;const i=new i_(e,!1,"centripetal"),r=10,s=Math.min(Math.max(e.length*6,8),1400),o=new ef(i,s,1,r,!1),a=o.getAttribute("position"),l=r+1,c=s+1;for(let f=0;f<c;f++){const d=f/s,m=i.getUtoTmapping(d,0),_=i.getPoint(m),y=this.radiusAt(this.pressureAtT(n,m));for(let g=0;g<l;g++){const u=f*l+g,v=a.getX(u)-_.x,p=a.getY(u)-_.y,x=a.getZ(u)-_.z;a.setXYZ(u,_.x+v*y,_.y+p*y,_.z+x*y)}}a.needsUpdate=!0,o.computeVertexNormals();const h=new ke(this.brush.color);return new de(o,new Nu({color:h,emissive:h.clone().multiplyScalar(.06),roughness:jn.lerp(.9,.25,this.brush.hardness??.8),metalness:0,transparent:this.brush.opacity<1,opacity:this.brush.opacity}))}buildGuideSurface(e){if(e.length<2)return null;const n=new R;this.camera.getWorldDirection(n).normalize();const i=new eo().setFromPoints(e),r=jn.clamp(i.getSize(new R).length()*.6,1,4),s=e.length,o=[],a=[],l=[],c=[];for(let g=0;g<s;g++){const u=e[g],v=u.clone().add(n.clone().multiplyScalar(r)),p=u.clone().add(n.clone().multiplyScalar(-r));l.push(v),c.push(p),o.push(v.x,v.y,v.z,p.x,p.y,p.z)}for(let g=0;g<s-1;g++){const u=2*g,v=2*g+1,p=2*(g+1),x=2*(g+1)+1;a.push(u,v,p,p,v,x)}const h=new pt;h.setAttribute("position",new Je(o,3)),h.setIndex(a),h.computeVertexNormals();const f=new de(h,new Nu({color:5020671,roughness:1,metalness:0,transparent:!0,opacity:.1,side:On,depthWrite:!1})),d=new Ki({color:5020671,transparent:!0,opacity:.25});f.add(new Mn(new pt().setFromPoints(l),d)),f.add(new Mn(new pt().setFromPoints(c),d.clone())),f.add(new Mn(new pt().setFromPoints(e),new Ki({color:16753978})));const m=new R;e.forEach(g=>m.add(g)),m.multiplyScalar(1/e.length);const _=e[e.length-1].clone().sub(e[0]);let y=_.lengthSq()>1e-6?_.clone().cross(n):n.clone();return y.lengthSq()<1e-6&&y.copy(n),y.normalize(),f.userData.guidePlane=new oi().setFromNormalAndCoplanarPoint(y,m),f}mirrored(e){return e.map(n=>new R(-n.x,n.y,n.z))}commitStroke(){if(!this.current)return;this.smoothed=null;for(const a of[this.current.line,this.current.mirrorLine])a&&(this.strokesGroup.remove(a),a.geometry.dispose(),a.material.dispose());const{points:e,pressures:n,kind:i}=this.current;if(this.current=null,e.length<2)return;if(i==="guide"){const a=this.buildGuideSurface(e);a&&this.setGuide(a);return}const r=new $n,s=this.buildTube(e,n);if(s&&r.add(s),this.mirror){const a=this.buildTube(this.mirrored(e),n);a&&r.add(a)}const o={id:`stroke-${this.seq++}`,object:r,points:e,pressures:n,kind:i,layerId:this.activeLayerId(),baseOpacity:this.brush.opacity};r.userData.strokeId=o.id,this.addStrokeRecord(o),this.pushCmd({undo:()=>this.removeStrokeRecord(o),redo:()=>this.addStrokeRecord(o)})}rebuildStrokeMesh(e){var i,r;for(;e.object.children.length;){const s=e.object.children[0];e.object.remove(s),(i=s.geometry)==null||i.dispose(),(r=s.material)==null||r.dispose()}const n=this.buildTube(e.points,e.pressures);if(n&&e.object.add(n),this.mirror){const s=this.buildTube(this.mirrored(e.points),e.pressures);s&&e.object.add(s)}}addStrokeRecord(e){this.strokesGroup.add(e.object),this.strokes.includes(e)||this.strokes.push(e),this.applyLayerStyles()}removeStrokeRecord(e){var n;this.strokesGroup.remove(e.object),this.strokes=this.strokes.filter(i=>i!==e),this.selected.delete(e),this.editingStroke===e&&this.clearPointEdit(),((n=this.gizmo)==null?void 0:n.object)===e.object&&this.gizmo.detach()}activeLayerId(){return zi.getState().activeLayerId??"layer-0"}applyLayerStyles(){const e=zi.getState().layers,n=new Map(e.map(i=>[i.id,i]));for(const i of this.strokes){const r=n.get(i.layerId),s=r?r.visible:!0,o=r?r.opacity:1;i.object.visible=s,i.object.traverse(a=>{const l=a.material;l&&"opacity"in l&&(l.opacity=i.baseOpacity*o,l.transparent=l.opacity<1,l.needsUpdate=!0)})}}strokesOfLayer(e){return this.strokes.filter(n=>n.layerId===e)}selectLayer(e){this.setSelection(this.strokesOfLayer(e)),this.syncGizmo()}getStrokeColor(e){let n="#22252e";return e.object.traverse(i=>{const r=i.material;r&&r.color&&(n="#"+r.color.getHexString())}),n}paintStroke(e,n){const i=new ke(n);e.object.traverse(r=>{const s=r.material;s&&s.color&&(s.color.copy(i),s.emissive&&s.emissive.copy(i.clone().multiplyScalar(.06)),s.needsUpdate=!0)})}setLayerColor(e,n){const i=this.strokesOfLayer(e);if(!i.length)return;const r=i.map(o=>this.getStrokeColor(o)),s=()=>i.forEach(o=>this.paintStroke(o,n));s(),this.pushCmd({undo:()=>i.forEach((o,a)=>this.paintStroke(o,r[a])),redo:s})}deleteLayer(e){const n=this.strokesOfLayer(e),i=()=>n.forEach(s=>this.removeStrokeRecord(s)),r=()=>n.forEach(s=>this.addStrokeRecord(s));i(),n.length&&this.pushCmd({undo:r,redo:i}),zi.removeLayer(e)}setGuide(e){const n=this.activeGuide,i=`guide-${this.seq++}`;e.userData.surfaceId=i,e.userData.strokeId=i;const r=e.userData.guidePlane,s=()=>{this.guidesGroup.add(e),this.surfaces.push({id:i,type:"loft",mesh:e}),this.activeGuide={id:i,mesh:e,plane:r}};n&&this.detachGuide(n),s(),this.pushCmd({undo:()=>{this.detachGuide({id:i,mesh:e}),n&&(this.guidesGroup.add(n.mesh),this.surfaces.push({id:n.id,type:"loft",mesh:n.mesh}),this.activeGuide=n)},redo:()=>{n&&this.detachGuide(n),s()}})}detachGuide(e){var n;this.guidesGroup.remove(e.mesh),this.surfaces=this.surfaces.filter(i=>i.id!==e.id),((n=this.activeGuide)==null?void 0:n.id)===e.id&&(this.activeGuide=null)}deleteGuide(){const e=this.activeGuide;return e?(this.detachGuide(e),this.pushCmd({undo:()=>{this.guidesGroup.add(e.mesh),this.surfaces.push({id:e.id,type:"loft",mesh:e.mesh}),this.activeGuide=e},redo:()=>this.detachGuide(e)}),!0):!1}hasGuide(){return this.activeGuide!==null}setSelection(e){for(const n of this.selected)this.highlight(n,!1);this.selected=new Set(e);for(const n of this.selected)this.highlight(n,!0);this.syncGizmo()}syncGizmo(){this.gizmo&&(this.tool==="move"&&this.selected.size===1?this.gizmo.attach([...this.selected][0].object):this.gizmo.detach())}highlight(e,n){e.object.traverse(i=>{const r=i.material;r&&r.emissive&&(r.emissive.set(n?2846719:0),r.emissiveIntensity=n?.9:1,r.needsUpdate=!0)})}selectedCount(){return this.selected.size}deleteSelection(){const e=[...this.selected];if(!e.length)return;const n=()=>{var r,s;for(const o of e)(r=o.object.parent)==null||r.remove(o.object),this.strokes=this.strokes.filter(a=>a!==o),o.kind==="guide"&&(this.surfaces=this.surfaces.filter(a=>a.id!==o.id),((s=this.activeGuide)==null?void 0:s.id)===o.id&&(this.activeGuide=null))},i=()=>{for(const r of e)(r.kind==="guide"?this.guidesGroup:this.strokesGroup).add(r.object),this.strokes.includes(r)||this.strokes.push(r),r.kind==="guide"&&(this.surfaces.push({id:r.id,type:"loft",mesh:r.object}),this.activeGuide={id:r.id,mesh:r.object})};n(),this.setSelection([]),this.pushCmd({undo:i,redo:n})}beginMove(){this.mode="move",this.controls.enabled=!1;const e=this.resolveHit();this.lastMoveWorld.copy(e?e.point:this.controls.target),this.moveStart.clear();for(const n of this.selected)this.moveStart.set(n.object,n.object.position.clone())}moveDrag(e){const n=this.resolveHit();if(!n)return;const i=n.point.clone().sub(this.lastMoveWorld);for(const r of this.selected)r.object.position.add(i);this.lastMoveWorld.copy(n.point)}endMove(){const e=[...this.selected],n=e.map(i=>i.object.position.clone().sub(this.moveStart.get(i.object)??i.object.position));n.every(i=>i.lengthSq()<1e-8)||this.pushCmd({undo:()=>e.forEach((i,r)=>i.object.position.sub(n[r])),redo:()=>e.forEach((i,r)=>i.object.position.add(n[r]))})}makeHandleMesh(){const e=new sa(xn.HANDLE_RADIUS,16,12),n=new da({color:2846719,depthTest:!1}),i=new de(e,n);return i.renderOrder=999,i}showPointHandles(e){this.clearPointEdit(),this.editingStroke=e,this.pointHandles=e.points.map((n,i)=>{const r=this.makeHandleMesh();return r.position.copy(n).add(e.object.position),r.userData.pointIndex=i,this.handlesGroup.add(r),r})}clearPointEdit(){for(const e of this.pointHandles)this.handlesGroup.remove(e),e.geometry.dispose(),e.material.dispose();this.pointHandles=[],this.editingStroke=null,this.dragPointIndex=-1}pickHandle(){this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.raycaster.intersectObjects(this.pointHandles,!1);return e.length?e[0].object.userData.pointIndex??-1:-1}onSelectPointerDown(e){const n=this.editingStroke?this.pickHandle():-1;if(n>=0&&this.editingStroke){this.canvas.setPointerCapture(e.pointerId),this.mode="point-drag",this.controls.enabled=!1,this.dragPointIndex=n,this.dragPointStart.copy(this.editingStroke.points[n]);return}const i=this.pickStroke();i&&i.kind==="stroke"?this.showPointHandles(i):this.clearPointEdit()}movePointDrag(){if(!this.editingStroke||this.dragPointIndex<0)return;const e=this.resolveHit();if(!e)return;const n=e.point.clone().sub(this.editingStroke.object.position);this.editingStroke.points[this.dragPointIndex].copy(n),this.rebuildStrokeMesh(this.editingStroke);const i=this.pointHandles[this.dragPointIndex];i&&i.position.copy(n).add(this.editingStroke.object.position)}endPointDrag(){if(!this.editingStroke||this.dragPointIndex<0)return;const e=this.editingStroke,n=this.dragPointIndex,i=this.dragPointStart.clone(),r=e.points[n].clone();this.dragPointIndex=-1,!(i.distanceToSquared(r)<1e-8)&&this.pushCmd({undo:()=>{var s;e.points[n].copy(i),this.rebuildStrokeMesh(e),this.editingStroke===e&&((s=this.pointHandles[n])==null||s.position.copy(i).add(e.object.position))},redo:()=>{var s;e.points[n].copy(r),this.rebuildStrokeMesh(e),this.editingStroke===e&&((s=this.pointHandles[n])==null||s.position.copy(r).add(e.object.position))}})}beginLasso(e){this.mode="lasso",this.controls.enabled=!1,this.canvas.setPointerCapture(e.pointerId),this.lassoPts=[this.screenOf(e)],this.lassoEl.style.display="block",this.lassoPoly.setAttribute("points","")}moveLasso(e){this.lassoPts.push(this.screenOf(e)),this.lassoPoly.setAttribute("points",this.lassoPts.map(n=>n.join(",")).join(" "))}endLasso(e){if(this.lassoEl.style.display="none",Math.hypot(...this.screenOf(e).map((r,s)=>r-[this.downScreen.x,this.downScreen.y][s]))<HA){const r=this.pickStroke();this.tool==="eraser"?r&&(this.setSelection([r]),this.deleteSelection()):this.setSelection(r?[r]:[]);return}const i=this.strokesInLasso();this.tool==="eraser"?(this.setSelection(i),this.deleteSelection()):this.setSelection(i)}strokesInLasso(){if(this.lassoPts.length<3)return[];const e=this.canvas.getBoundingClientRect(),n=this.camera,i=[];for(const r of this.strokes){const s=r.points;let o=0;for(const a of s){const l=a.clone().applyMatrix4(r.object.matrixWorld).project(n),c=(l.x+1)/2*e.width,h=(-l.y+1)/2*e.height;if(this.pointInPoly(c,h)&&(o++,o>=Math.max(1,s.length*.3)))break}o>=Math.max(1,s.length*.3)&&i.push(r)}return i}pointInPoly(e,n){const i=this.lassoPts;let r=!1;for(let s=0,o=i.length-1;s<i.length;o=s++){const[a,l]=i[s],[c,h]=i[o];l>n!=h>n&&e<(c-a)*(n-l)/(h-l)+a&&(r=!r)}return r}pushCmd(e){this.undoStack.push(e),this.redoStack=[]}undo(){const e=this.undoStack.pop();e&&(e.undo(),this.redoStack.push(e),this.setSelection([]))}redo(){const e=this.redoStack.pop();e&&(e.redo(),this.undoStack.push(e),this.setSelection([]))}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}disposeNode(e){e.traverse(n=>{const i=n;i.geometry&&i.geometry.dispose();const r=i.material;Array.isArray(r)?r.forEach(s=>s.dispose()):r==null||r.dispose()})}clear(){var e,n;for(const i of this.strokes)(e=i.object.parent)==null||e.remove(i.object);this.strokes=[],this.activeGuide&&this.detachGuide(this.activeGuide),this.selected.clear(),this.clearPointEdit(),(n=this.gizmo)==null||n.detach(),this.undoStack=[],this.redoStack=[]}resize(){const e=this.renderer.domElement,n=Math.min(window.devicePixelRatio,2),i=e.clientWidth,r=e.clientHeight;if(i===0||r===0)return;const s=Math.floor(i*n),o=Math.floor(r*n);e.width===s&&e.height===o||(this.renderer.setPixelRatio(n),this.renderer.setSize(i,r,!1),this.view==="persp"?(this.perspCamera.aspect=i/r,this.perspCamera.updateProjectionMatrix()):this.applyOrthoFrustum())}debugDemo(){const e=[];for(let o=0;o<=40;o++){const a=o/40*Math.PI*2;e.push(new R(Math.cos(a)*1.2,.6+Math.sin(a)*1.2,0))}const n=e.map(()=>1),i=new $n,r=this.buildTube(e,n);r&&i.add(r);const s={id:`stroke-${this.seq++}`,object:i,points:e,pressures:n,kind:"stroke",layerId:this.activeLayerId(),baseOpacity:1};i.userData.strokeId=s.id,this.addStrokeRecord(s)}};xn.VP_AXES=[[new R(1,0,0),"#e74c3c"],[new R(0,1,0),"#2ecc71"],[new R(0,0,1),"#3b82f6"]],xn.TOOL_KEYS={p:"pencil",g:"guide",v:"move",a:"select",e:"eraser",l:"liquify"},xn.SNAP_PX=14,xn.HANDLE_RADIUS=.028;let Yh=xn;function ag(t){const e=t.replace("#",""),n=e.length===3?e.split("").map(r=>r+r).join(""):e,i=parseInt(n||"000000",16);return[i>>16&255,i>>8&255,i&255]}function lg(t,e,n){return"#"+[t,e,n].map(i=>Math.max(0,Math.min(255,Math.round(i))).toString(16).padStart(2,"0")).join("")}function cg(t,e,n){t/=255,e/=255,n/=255;const i=Math.max(t,e,n),r=Math.min(t,e,n),s=i-r;let o=0;s!==0&&(i===t?o=(e-n)/s%6:i===e?o=(n-t)/s+2:o=(t-e)/s+4,o*=60,o<0&&(o+=360));const a=i===0?0:s/i;return[o,a,i]}function ug(t,e,n){const i=n*e,r=i*(1-Math.abs(t/60%2-1)),s=n-i;let o=0,a=0,l=0;return t<60?(o=i,a=r,l=0):t<120?(o=r,a=i,l=0):t<180?(o=0,a=i,l=r):t<240?(o=0,a=r,l=i):t<300?(o=r,a=0,l=i):(o=i,a=0,l=r),[(o+s)*255,(a+s)*255,(l+s)*255]}const Tl=112,yo=Tl/2,VA=({value:t,onChange:e})=>{const n=ut.useRef(null),[i,r]=ut.useState(()=>cg(...ag(t)));ut.useEffect(()=>r(cg(...ag(t))),[t]);const s=ut.useCallback((m,_,y)=>{const g=n.current;if(!g)return;const u=g.getBoundingClientRect(),v=m-(u.left+u.width/2),p=_-(u.top+u.height/2),x=Math.min(1,Math.hypot(v,p)/yo);let b=Math.atan2(p,v)*180/Math.PI;b<0&&(b+=360),r([b,x,y]),e(lg(...ug(b,x,y)))},[e]),o=m=>{try{m.currentTarget.setPointerCapture(m.pointerId)}catch{}s(m.clientX,m.clientY,i[2]);const _=g=>s(g.clientX,g.clientY,i[2]),y=()=>{window.removeEventListener("pointermove",_),window.removeEventListener("pointerup",y)};window.addEventListener("pointermove",_),window.addEventListener("pointerup",y)},a=m=>{const _=m/100;r([i[0],i[1],_]),e(lg(...ug(i[0],i[1],_)))},[l,c,h]=i,f=yo+Math.cos(l*Math.PI/180)*c*yo,d=yo+Math.sin(l*Math.PI/180)*c*yo;return k.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[k.jsx("div",{ref:n,onPointerDown:o,style:{width:Tl,height:Tl,borderRadius:"50%",position:"relative",cursor:"crosshair",filter:`brightness(${h})`,background:"radial-gradient(circle at center, #fff 0%, rgba(255,255,255,0) 100%), conic-gradient(from 90deg, red, yellow, lime, cyan, blue, magenta, red)",boxShadow:"inset 0 0 0 1px rgba(255,255,255,.15)"},children:k.jsx("div",{style:{position:"absolute",left:f-6,top:d-6,width:12,height:12,borderRadius:"50%",border:"2px solid #fff",boxShadow:"0 0 0 1px rgba(0,0,0,.6)",pointerEvents:"none",background:t}})}),k.jsx("input",{type:"range",min:0,max:100,value:Math.round(h*100),onChange:m=>a(Number(m.target.value)),title:"Brillo",style:{width:Tl,accentColor:"#0078d4"}})]})},WA=[{id:"fine",label:"Fino",values:{size:3,opacity:1,hardness:.9,pressureSensitivity:.3,stabilization:.2}},{id:"pencil",label:"Lápiz",values:{size:6,opacity:1,hardness:.3,pressureSensitivity:.25,stabilization:.2}},{id:"ink",label:"Tinta",values:{size:10,opacity:1,hardness:.95,pressureSensitivity:.75,stabilization:.45}},{id:"marker",label:"Marcador",values:{size:34,opacity:.85,hardness:.6,pressureSensitivity:.1,stabilization:.3}},{id:"brush",label:"Pincel",values:{size:22,opacity:.92,hardness:.15,pressureSensitivity:.55,stabilization:.35}},{id:"charcoal",label:"Carboncillo",values:{size:28,opacity:.8,hardness:.05,pressureSensitivity:.8,stabilization:.35}}],cn={Pencil:()=>k.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:k.jsx("path",{d:"M18 2l4 4-10 10H7v-5L18 2z"})}),Guide:()=>k.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeDasharray:"3 3",strokeLinecap:"round",children:k.jsx("line",{x1:"3",y1:"20",x2:"21",y2:"4"})}),Move:()=>k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("polyline",{points:"5 9 2 12 5 15"}),k.jsx("polyline",{points:"9 5 12 2 15 5"}),k.jsx("polyline",{points:"15 19 12 22 9 19"}),k.jsx("polyline",{points:"19 9 22 12 19 15"}),k.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),k.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"22"})]}),Select:()=>k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("path",{d:"M4 3l7 17 2-7 7-2z",strokeLinejoin:"round"}),k.jsx("circle",{cx:"4",cy:"3",r:"1.6",fill:"currentColor",stroke:"none"}),k.jsx("circle",{cx:"11",cy:"20",r:"1.6",fill:"currentColor",stroke:"none"}),k.jsx("circle",{cx:"18",cy:"11",r:"1.6",fill:"currentColor",stroke:"none"})]}),Eraser:()=>k.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:k.jsx("path",{d:"M20 20H7L3 16c-.8-.8-.8-2 0-2.8L14 2.2c.8-.8 2-.8 2.8 0L22 7.4c.8.8.8 2 0 2.8L12 20"})}),Liquify:()=>k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("path",{d:"M8 3c-1.3 0-2.5.5-3.5 1.5C3.5 5.5 3 6.7 3 8s.5 2.5 1.5 3.5S7 13 8 13s2.5-.5 3.5-1.5S13 9 13 8s-.5-2.5-1.5-3.5S9 3 8 3z"}),k.jsx("path",{d:"M16 11c-1.3 0-2.5.5-3.5 1.5S11 15 11 16s.5 2.5 1.5 3.5 2.5 1.5 3.5 1.5 2.5-.5 3.5-1.5 1.5-2.5 1.5-3.5-.5-2.5-1.5-3.5-2.5-1.5-3.5-1.5z"})]}),Plane:()=>k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),k.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),k.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"3"})]}),Cylinder:()=>k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),k.jsx("path",{d:"M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"})]}),Sphere:()=>k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("circle",{cx:"12",cy:"12",r:"9"}),k.jsx("ellipse",{cx:"12",cy:"12",rx:"9",ry:"3"}),k.jsx("path",{d:"M12 3v18"})]}),Torus:()=>k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("circle",{cx:"12",cy:"12",r:"9"}),k.jsx("ellipse",{cx:"12",cy:"12",rx:"9",ry:"4"})]}),Loft:()=>k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("path",{d:"M3 7c3-2 6-2 9 0s6 2 9 0M3 17c3-2 6-2 9 0s6 2 9 0"}),k.jsx("path",{d:"M3 7v10M21 7v10"})]}),Mirror:()=>k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("path",{d:"M12 3v18M3 12h18"}),k.jsx("path",{d:"M8 7l-4 5 4 5M16 7l4 5-4 5"})]}),GizmoMove:()=>k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("path",{d:"M12 2v20M2 12h20"}),k.jsx("path",{d:"M9 5l3-3 3 3M9 19l3 3 3-3M5 9l-3 3 3 3M19 9l3 3-3 3"})]}),GizmoScale:()=>k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("rect",{x:"4",y:"4",width:"9",height:"9"}),k.jsx("path",{d:"M13 20h7v-7M20 20L11 11"})]})},cl=({title:t,open:e,onToggle:n,children:i})=>k.jsxs("div",{children:[k.jsxs("button",{onClick:n,style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",border:"none",background:"transparent",color:"#9aa3b2",cursor:"pointer",fontSize:"10px",textTransform:"uppercase",letterSpacing:"0.5px",padding:"4px 2px",fontFamily:"system-ui, sans-serif"},children:[k.jsx("span",{children:t}),k.jsx("span",{style:{transform:e?"rotate(90deg)":"none",transition:"transform .15s"},children:"▸"})]}),e&&k.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",padding:"2px 0 6px"},children:i})]}),ul=t=>({width:"40px",height:"40px",border:"none",borderRadius:"6px",backgroundColor:t?"#0078d4":"transparent",color:t?"#fff":"#ccc",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"}),Bu=(t,e)=>{e||(t.currentTarget.style.backgroundColor="#3d3d3d",t.currentTarget.style.color="#fff")},Hu=(t,e)=>{e||(t.currentTarget.style.backgroundColor="transparent",t.currentTarget.style.color="#ccc")},XA=()=>{const{currentTool:t,setCurrentTool:e,activeSurface:n,setActiveSurface:i,mirrorMode:r,setMirrorMode:s,brushSettings:o,setBrushSettings:a,gizmoMode:l,setGizmoMode:c}=nf(),[h,f]=ut.useState(!1),[d,m]=ut.useState({dibujo:!0,seleccion:!1,superficies:!1,pincel:!0}),_=p=>m(x=>({...x,[p]:!x[p]})),y=[{id:"pencil",icon:cn.Pencil,label:"Lápiz (P)"},{id:"guide",icon:cn.Guide,label:"Línea guía — define un plano de dibujo (G)"},{id:"eraser",icon:cn.Eraser,label:"Borrar (E)"},{id:"liquify",icon:cn.Liquify,label:"Liquify (L)"}],g=[{id:"move",icon:cn.Move,label:"Seleccionar / Mover (click o lazo) (V)"},{id:"select",icon:cn.Select,label:"Editar puntos del vector (A)"}],u=[{id:"plane",icon:cn.Plane,label:"Plano"},{id:"cylinder",icon:cn.Cylinder,label:"Cilindro"},{id:"sphere",icon:cn.Sphere,label:"Esfera"},{id:"torus",icon:cn.Torus,label:"Toro"},{id:"loft",icon:cn.Loft,label:"Loft"}],v=p=>k.jsx("button",{onClick:()=>e(p.id),title:p.label,style:ul(t===p.id),onMouseEnter:x=>Bu(x,t===p.id),onMouseLeave:x=>Hu(x,t===p.id),children:k.jsx("div",{style:{width:"20px",height:"20px"},children:k.jsx(p.icon,{})})},p.id);return k.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",padding:"10px",backgroundColor:"#2d2d2d",width:156,maxHeight:"calc(100vh - 90px)",overflowY:"auto"},children:[k.jsx(cl,{title:"Dibujo",open:d.dibujo,onToggle:()=>_("dibujo"),children:y.map(v)}),k.jsxs(cl,{title:"Selección",open:d.seleccion,onToggle:()=>_("seleccion"),children:[g.map(v),t==="move"&&[{id:"translate",icon:cn.GizmoMove,label:"Gizmo: mover"},{id:"scale",icon:cn.GizmoScale,label:"Gizmo: redimensionar"}].map(p=>k.jsx("button",{onClick:()=>c(p.id),title:p.label,style:{...ul(l===p.id),width:32,height:32},children:k.jsx("div",{style:{width:"16px",height:"16px"},children:k.jsx(p.icon,{})})},p.id))]}),k.jsxs(cl,{title:"Superficies",open:d.superficies,onToggle:()=>_("superficies"),children:[u.map(p=>k.jsx("button",{onClick:()=>i(p.id===(n==null?void 0:n.type)?null:{type:p.id,params:{}}),title:p.label,style:ul((n==null?void 0:n.type)===p.id),onMouseEnter:x=>Bu(x,(n==null?void 0:n.type)===p.id),onMouseLeave:x=>Hu(x,(n==null?void 0:n.type)===p.id),children:k.jsx("div",{style:{width:"20px",height:"20px"},children:k.jsx(p.icon,{})})},p.id)),k.jsx("button",{onClick:()=>s(!r),title:"Modo Espejo X",style:ul(r),onMouseEnter:p=>Bu(p,r),onMouseLeave:p=>Hu(p,r),children:k.jsx("div",{style:{width:"20px",height:"20px"},children:k.jsx(cn.Mirror,{})})})]}),k.jsxs(cl,{title:"Pincel",open:d.pincel,onToggle:()=>_("pincel"),children:[WA.map(p=>k.jsx("button",{onClick:()=>a({...o,...p.values}),title:`Preset "${p.label}"`,style:{height:26,minWidth:42,padding:"0 6px",border:"none",borderRadius:6,backgroundColor:"transparent",color:"#ccc",cursor:"pointer",fontSize:10,fontFamily:"system-ui, sans-serif"},onMouseEnter:x=>{x.currentTarget.style.backgroundColor="#3d3d3d",x.currentTarget.style.color="#fff"},onMouseLeave:x=>{x.currentTarget.style.backgroundColor="transparent",x.currentTarget.style.color="#ccc"},children:p.label},p.id)),k.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",gap:8,width:"100%",marginTop:4},children:[k.jsx("button",{onClick:()=>f(!h),title:"Color del pincel (círculo cromático)",style:{width:40,height:40,border:h?"2px solid #0078d4":"2px solid transparent",borderRadius:6,cursor:"pointer",backgroundColor:o.color}}),h&&k.jsx("div",{style:{position:"absolute",left:"48px",top:0,zIndex:200,padding:12,backgroundColor:"#2d2d2d",borderRadius:8,boxShadow:"0 4px 16px rgba(0,0,0,0.4)"},children:k.jsx(VA,{value:o.color,onChange:p=>a({...o,color:p})})}),k.jsx("input",{type:"range",min:"1",max:"100",value:o.size,onChange:p=>a({...o,size:Number(p.target.value)}),title:"Tamaño del pincel",style:{flex:1,accentColor:"#0078d4"}})]})]})]})},jA={display:"flex",flexDirection:"column",gap:"12px",padding:"14px",width:"220px",backgroundColor:"#2d2d2d",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",color:"#ccc",fontSize:"12px",fontFamily:"system-ui, sans-serif"},us={display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"},hs={width:"100%",accentColor:"#0078d4"},Gu={fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.5px",color:"#888",marginBottom:"2px"},YA=()=>{const{brushSettings:t,setBrushSettings:e,activeSurface:n,setActiveSurface:i,selectedObject:r}=nf(),s=Number((n==null?void 0:n.params.radius)??1),o=Number((n==null?void 0:n.params.segments)??32),a=(l,c)=>{n&&i({...n,params:{...n.params,[l]:c}})};return k.jsxs("div",{style:jA,children:[k.jsx("div",{style:Gu,children:"Pincel"}),k.jsxs("label",{style:us,children:[k.jsx("span",{children:"Opacidad"}),k.jsxs("span",{children:[Math.round(t.opacity*100),"%"]})]}),k.jsx("input",{type:"range",min:0,max:100,value:Math.round(t.opacity*100),onChange:l=>e({...t,opacity:Number(l.target.value)/100}),style:hs}),k.jsxs("label",{style:us,children:[k.jsx("span",{children:"Dureza"}),k.jsxs("span",{children:[Math.round(t.hardness*100),"%"]})]}),k.jsx("input",{type:"range",min:0,max:100,value:Math.round(t.hardness*100),onChange:l=>e({...t,hardness:Number(l.target.value)/100}),style:hs}),k.jsxs("label",{style:us,children:[k.jsx("span",{children:"Sensibilidad a la presión"}),k.jsxs("span",{children:[Math.round(t.pressureSensitivity*100),"%"]})]}),k.jsx("input",{type:"range",min:0,max:100,value:Math.round(t.pressureSensitivity*100),onChange:l=>e({...t,pressureSensitivity:Number(l.target.value)/100}),title:"Cuánto adelgaza el trazo con poca presión del lápiz (0% = ancho constante). El mouse siempre dibuja a ancho completo.",style:hs}),k.jsxs("label",{style:us,children:[k.jsx("span",{children:"Estabilizador (pulso)"}),k.jsxs("span",{children:[Math.round(t.stabilization*100),"%"]})]}),k.jsx("input",{type:"range",min:0,max:100,value:Math.round(t.stabilization*100),onChange:l=>e({...t,stabilization:Number(l.target.value)/100}),title:"Suaviza el temblor de la mano retrasando un poco el trazo respecto al puntero real (0% = crudo, como antes).",style:hs}),k.jsx("div",{style:{height:"1px",backgroundColor:"#444",margin:"2px 0"}}),k.jsxs("div",{style:Gu,children:["Superficie",n?`: ${n.type}`:""]}),n?k.jsxs(k.Fragment,{children:[k.jsxs("label",{style:us,children:[k.jsx("span",{children:"Radio"}),k.jsx("span",{children:s.toFixed(1)})]}),k.jsx("input",{type:"range",min:1,max:100,value:s*10,onChange:l=>a("radius",Number(l.target.value)/10),style:hs}),k.jsxs("label",{style:us,children:[k.jsx("span",{children:"Segmentos"}),k.jsx("span",{children:o})]}),k.jsx("input",{type:"range",min:3,max:128,value:o,onChange:l=>a("segments",Number(l.target.value)),style:hs})]}):k.jsx("div",{style:{opacity:.6,fontStyle:"italic"},children:"Elegí una superficie en la barra para editar sus parámetros."}),r&&k.jsxs(k.Fragment,{children:[k.jsx("div",{style:{height:"1px",backgroundColor:"#444",margin:"2px 0"}}),k.jsx("div",{style:Gu,children:"Selección"}),k.jsxs("div",{children:[r.name??r.id," ",k.jsxs("span",{style:{opacity:.6},children:["(",r.type,")"]})]})]})]})},ds={border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:13,lineHeight:1,padding:"2px 5px",borderRadius:4},qA=({engine:t})=>{const{layers:e,activeLayerId:n,brushSettings:i,setActiveLayer:r,addLayer:s,toggleLayerVisibility:o,toggleLayerLock:a,renameLayer:l,setLayerOpacity:c}=nf(),[h,f]=ut.useState(null),[d,m]=ut.useState(""),_=()=>t.current;return k.jsxs("div",{style:{backgroundColor:"#2d2d2d",color:"#ccc",fontSize:12,fontFamily:"system-ui, sans-serif",maxHeight:320,display:"flex",flexDirection:"column"},children:[k.jsx("div",{style:{display:"flex",justifyContent:"flex-end",padding:"6px 10px",borderBottom:"1px solid #444"},children:k.jsx("button",{style:ds,title:"Nueva capa",onClick:()=>s(),children:"＋ capa"})}),k.jsx("div",{style:{overflowY:"auto"},children:[...e].reverse().map(y=>{const g=y.id===n;return k.jsxs("div",{onClick:()=>r(y.id),style:{display:"flex",flexDirection:"column",gap:4,padding:"8px 10px",cursor:"pointer",borderBottom:"1px solid #383838",backgroundColor:g?"#0e5fa8":"transparent",color:g?"#fff":"#ccc"},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[k.jsx("button",{style:{...ds,opacity:y.visible?1:.4},title:y.visible?"Ocultar capa":"Mostrar capa",onClick:u=>{u.stopPropagation(),o(y.id)},children:y.visible?"👁":"⊘"}),k.jsx("button",{style:{...ds,opacity:y.locked?1:.4},title:y.locked?"Desbloquear":"Bloquear",onClick:u=>{u.stopPropagation(),a(y.id)},children:y.locked?"🔒":"🔓"}),h===y.id?k.jsx("input",{autoFocus:!0,value:d,onClick:u=>u.stopPropagation(),onChange:u=>m(u.target.value),onBlur:()=>{l(y.id,d.trim()||y.name),f(null)},onKeyDown:u=>{u.key==="Enter"&&u.target.blur(),u.key==="Escape"&&f(null)},style:{flex:1,minWidth:0,background:"#1e1e1e",color:"#fff",border:"1px solid #555",borderRadius:3,padding:"1px 4px",font:"inherit"}}):k.jsx("span",{onDoubleClick:u=>{u.stopPropagation(),f(y.id),m(y.name)},title:"Doble click para renombrar",style:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:y.name})]}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},onClick:u=>u.stopPropagation(),children:[k.jsx("input",{type:"range",min:0,max:100,value:Math.round(y.opacity*100),title:"Opacidad de la capa",onChange:u=>c(y.id,Number(u.target.value)/100),style:{flex:1,accentColor:"#4c9bff",height:3}}),k.jsx("button",{style:ds,title:"Seleccionar todas las curvas de la capa",onClick:()=>{var u;return(u=_())==null?void 0:u.selectLayer(y.id)},children:"⛶"}),k.jsx("button",{style:ds,title:"Pintar toda la capa con el color actual del pincel",onClick:()=>{var u;return(u=_())==null?void 0:u.setLayerColor(y.id,i.color)},children:"🎨"}),k.jsx("button",{style:{...ds,opacity:e.length>1?.8:.25},title:"Eliminar capa y su contenido",disabled:e.length<=1,onClick:()=>{var u;return(u=_())==null?void 0:u.deleteLayer(y.id)},children:"🗑"})]})]},y.id)})})]})},Vu=({title:t,initial:e,width:n,children:i})=>{const r=ut.useRef(null),s=ut.useRef(null),[o,a]=ut.useState(null),[l,c]=ut.useState(!1),h=_=>{const y=r.current,g=y==null?void 0:y.offsetParent;if(!y||!g||!s.current)return;const u=g.getBoundingClientRect();a({left:_.clientX-u.left-s.current.ox,top:_.clientY-u.top-s.current.oy})},f=()=>{s.current=null,window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",f)},d=_=>{const y=r.current,g=y==null?void 0:y.offsetParent;if(!y||!g)return;const u=y.getBoundingClientRect(),v=g.getBoundingClientRect();s.current={ox:_.clientX-u.left,oy:_.clientY-u.top},a({left:u.left-v.left,top:u.top-v.top}),window.addEventListener("pointermove",h),window.addEventListener("pointerup",f)},m={position:"absolute",...n?{width:n}:{},zIndex:100,borderRadius:8,boxShadow:"0 6px 18px rgba(0,0,0,0.35)",...o?{left:o.left,top:o.top}:e};return k.jsxs("div",{ref:r,style:m,children:[k.jsxs("div",{onPointerDown:d,style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"#3a3f4b",color:"#dfe4ee",fontSize:11,fontFamily:"system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.5px",cursor:"grab",userSelect:"none",touchAction:"none",borderTopLeftRadius:8,borderTopRightRadius:8},children:[k.jsx("span",{children:t}),k.jsx("button",{onPointerDown:_=>_.stopPropagation(),onClick:()=>c(_=>!_),title:l?"Expandir":"Minimizar",style:{border:"none",background:"transparent",color:"#dfe4ee",cursor:"pointer",fontSize:14,lineHeight:1,padding:"0 4px"},children:l?"▢":"–"})]}),!l&&k.jsx("div",{children:i})]})},$A={light:"radial-gradient(120% 120% at 50% 10%, #ffffff 0%, #eef1f6 70%, #e6eaf1 100%)",dark:"radial-gradient(120% 120% at 50% 15%, #1b2030 0%, #0e0f13 60%, #08090c 100%)"},ZA=({projectId:t="default"})=>{const e=ut.useRef(null),n=ut.useRef(null),i=ut.useRef(null),[r,s]=ut.useState("light");ut.useEffect(()=>{if(!e.current||!n.current)return;const u=new Yh;return u.mount(e.current,n.current),u.setTheme(r),i.current=u,window.__low3d=u,window.__lowStore=zi,()=>{u.dispose(),i.current=null}},[t]),ut.useEffect(()=>{var u;(u=i.current)==null||u.setTheme(r)},[r]);const[o,a]=ut.useState("persp"),[l,c]=ut.useState(!1),h=r==="dark",f=h?"rgba(20,22,28,0.6)":"rgba(255,255,255,0.7)",d=h?"#8a93a6":"#5b6472",m="#0078d4",_=()=>i.current,y=u=>{var v;(v=_())==null||v.setView(u),a(u)},g=(u,v,p=!1,x)=>k.jsx("button",{onClick:v,title:x??u,style:{height:30,padding:"0 10px",borderRadius:6,border:"none",cursor:"pointer",background:p?m:"transparent",color:p?"#fff":d,fontSize:12},children:u});return k.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",background:$A[r],overflow:"hidden"},ref:n,children:[k.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block"},onContextMenu:u=>u.preventDefault()}),k.jsx(Vu,{title:"Herramientas",initial:{left:14,top:60},children:k.jsx(XA,{})}),k.jsx(Vu,{title:"Pincel / Superficie",initial:{right:14,top:60},width:220,children:k.jsx(YA,{})}),k.jsx(Vu,{title:"Capas",initial:{left:14,bottom:14},width:240,children:k.jsx(qA,{engine:i})}),k.jsx("button",{onClick:()=>s(h?"light":"dark"),title:"Fondo claro / oscuro",style:{position:"absolute",top:14,right:250,zIndex:100,width:36,height:36,borderRadius:8,border:"none",cursor:"pointer",background:f,color:d,fontSize:16},children:h?"☀":"☾"}),k.jsxs("div",{style:{position:"absolute",top:14,left:"50%",transform:"translateX(-50%)",zIndex:100,display:"flex",alignItems:"center",gap:2,padding:4,borderRadius:8,background:f},children:[g("⟲",()=>{var u;return(u=_())==null?void 0:u.undo()},!1,"Deshacer (Ctrl+Z)"),g("⟳",()=>{var u;return(u=_())==null?void 0:u.redo()},!1,"Rehacer (Ctrl+Alt+Z / Ctrl+Shift+Z)"),k.jsx("span",{style:{width:1,height:18,background:h?"#3a3f4b":"#cfd4dd",margin:"0 4px"}}),g("Persp",()=>y("persp"),o==="persp"),g("Frente",()=>y("front"),o==="front","Vista ortogonal de frente (para el primer dibujo)"),g("Detrás",()=>y("back"),o==="back","Vista ortogonal de atrás"),g("Izquierda",()=>y("left"),o==="left","Vista ortogonal desde la izquierda"),g("Derecha",()=>y("right"),o==="right","Vista ortogonal desde la derecha"),g("Arriba",()=>y("top"),o==="top","Vista ortogonal desde arriba"),g("Abajo",()=>y("bottom"),o==="bottom","Vista ortogonal desde abajo"),k.jsx("span",{style:{width:1,height:18,background:h?"#3a3f4b":"#cfd4dd",margin:"0 4px"}}),g("XYZ",()=>{var u;return c(!!((u=_())!=null&&u.toggleAxes()))},l,"Ejes globales XYZ + puntos de fuga de cada eje (solo en perspectiva) — guía visual, no se dibuja ni exporta")]}),k.jsx("button",{onClick:()=>{var u;return(u=i.current)==null?void 0:u.deleteGuide()},title:"Borrar la guía actual (los trazos se conservan)",style:{position:"absolute",top:14,right:294,zIndex:100,height:36,padding:"0 12px",borderRadius:8,border:"none",cursor:"pointer",background:f,color:d,fontSize:12,display:"flex",alignItems:"center",gap:6},children:"🗑 Borrar guía"}),k.jsx("div",{style:{position:"absolute",bottom:14,right:14,zIndex:100,color:d,fontSize:11,fontFamily:"system-ui, sans-serif",background:f,padding:"6px 10px",borderRadius:6,lineHeight:1.5,pointerEvents:"none"},children:"Teclas: P lápiz · G guía · V mover · A puntos · E goma · Shift recta · Alt hilo tenso (eje X/Y/Z) · Ctrl+C/V copia · Supr borra · Ctrl+Z/Ctrl+Alt+Z"})]})},c_=document.getElementById("root");if(!c_)throw new Error("No se encontró #root");Ev(c_).render(k.jsx(L_.StrictMode,{children:k.jsx(ZA,{projectId:"demo"})}));
