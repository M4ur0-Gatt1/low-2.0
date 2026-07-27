(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function i_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jm={exports:{}},Ql={},eg={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia=Symbol.for("react.element"),r_=Symbol.for("react.portal"),s_=Symbol.for("react.fragment"),o_=Symbol.for("react.strict_mode"),a_=Symbol.for("react.profiler"),l_=Symbol.for("react.provider"),c_=Symbol.for("react.context"),u_=Symbol.for("react.forward_ref"),h_=Symbol.for("react.suspense"),d_=Symbol.for("react.memo"),f_=Symbol.for("react.lazy"),tf=Symbol.iterator;function p_(t){return t===null||typeof t!="object"?null:(t=tf&&t[tf]||t["@@iterator"],typeof t=="function"?t:null)}var tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ng=Object.assign,ig={};function qs(t,e,n){this.props=t,this.context=e,this.refs=ig,this.updater=n||tg}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rg(){}rg.prototype=qs.prototype;function Bh(t,e,n){this.props=t,this.context=e,this.refs=ig,this.updater=n||tg}var Hh=Bh.prototype=new rg;Hh.constructor=Bh;ng(Hh,qs.prototype);Hh.isPureReactComponent=!0;var nf=Array.isArray,sg=Object.prototype.hasOwnProperty,Gh={current:null},og={key:!0,ref:!0,__self:!0,__source:!0};function ag(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sg.call(e,i)&&!og.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ia,type:t,key:s,ref:o,props:r,_owner:Gh.current}}function m_(t,e){return{$$typeof:ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ia}function g_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rf=/\/+/g;function Ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?g_(""+t.key):e.toString(36)}function al(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ia:case r_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ec(o,0):i,nf(r)?(n="",t!=null&&(n=t.replace(rf,"$&/")+"/"),al(r,e,n,"",function(c){return c})):r!=null&&(Vh(r)&&(r=m_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(rf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",nf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ec(s,a);o+=al(s,e,n,l,r)}else if(l=p_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ec(s,a++),o+=al(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function da(t,e,n){if(t==null)return t;var i=[],r=0;return al(t,i,"","",function(s){return e.call(n,s,r++)}),i}function v_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},ll={transition:null},__={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:ll,ReactCurrentOwner:Gh};function lg(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:da,forEach:function(t,e,n){da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return da(t,function(){e++}),e},toArray:function(t){return da(t,function(e){return e})||[]},only:function(t){if(!Vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=qs;Ye.Fragment=s_;Ye.Profiler=a_;Ye.PureComponent=Bh;Ye.StrictMode=o_;Ye.Suspense=h_;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__;Ye.act=lg;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ng({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sg.call(e,l)&&!og.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ia,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:c_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:l_,_context:t},t.Consumer=t};Ye.createElement=ag;Ye.createFactory=function(t){var e=ag.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:u_,render:t}};Ye.isValidElement=Vh;Ye.lazy=function(t){return{$$typeof:f_,_payload:{_status:-1,_result:t},_init:v_}};Ye.memo=function(t,e){return{$$typeof:d_,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=ll.transition;ll.transition={};try{t()}finally{ll.transition=e}};Ye.unstable_act=lg;Ye.useCallback=function(t,e){return sn.current.useCallback(t,e)};Ye.useContext=function(t){return sn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return sn.current.useEffect(t,e)};Ye.useId=function(){return sn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return sn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Ye.useRef=function(t){return sn.current.useRef(t)};Ye.useState=function(t){return sn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return sn.current.useTransition()};Ye.version="18.3.1";eg.exports=Ye;var bn=eg.exports;const y_=i_(bn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_=bn,S_=Symbol.for("react.element"),M_=Symbol.for("react.fragment"),E_=Object.prototype.hasOwnProperty,w_=x_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T_={key:!0,ref:!0,__self:!0,__source:!0};function cg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)E_.call(e,i)&&!T_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:S_,type:t,key:s,ref:o,props:r,_owner:w_.current}}Ql.Fragment=M_;Ql.jsx=cg;Ql.jsxs=cg;Jm.exports=Ql;var q=Jm.exports,ug={exports:{}},En={},hg={exports:{}},dg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,U){var z=N.length;N.push(U);e:for(;0<z;){var Z=z-1>>>1,Q=N[Z];if(0<r(Q,U))N[Z]=U,N[z]=Q,z=Z;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var U=N[0],z=N.pop();if(z!==U){N[0]=z;e:for(var Z=0,Q=N.length,Y=Q>>>1;Z<Y;){var K=2*(Z+1)-1,ce=N[K],ye=K+1,xe=N[ye];if(0>r(ce,z))ye<Q&&0>r(xe,ce)?(N[Z]=xe,N[ye]=z,Z=ye):(N[Z]=ce,N[K]=z,Z=K);else if(ye<Q&&0>r(xe,z))N[Z]=xe,N[ye]=z,Z=ye;else break e}}return U}function r(N,U){var z=N.sortIndex-U.sortIndex;return z!==0?z:N.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,d=null,f=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var U=n(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=N)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function x(N){if(y=!1,g(N),!_)if(n(l)!==null)_=!0,X(C);else{var U=n(c);U!==null&&$(x,U.startTime-N)}}function C(N,U){_=!1,y&&(y=!1,u(D),D=-1),p=!0;var z=f;try{for(g(U),d=n(l);d!==null&&(!(d.expirationTime>U)||N&&!k());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,f=d.priorityLevel;var Q=Z(d.expirationTime<=U);U=t.unstable_now(),typeof Q=="function"?d.callback=Q:d===n(l)&&i(l),g(U)}else i(l);d=n(l)}if(d!==null)var Y=!0;else{var K=n(c);K!==null&&$(x,K.startTime-U),Y=!1}return Y}finally{d=null,f=z,p=!1}}var T=!1,w=null,D=-1,S=5,E=-1;function k(){return!(t.unstable_now()-E<S)}function G(){if(w!==null){var N=t.unstable_now();E=N;var U=!0;try{U=w(!0,N)}finally{U?J():(T=!1,w=null)}}else T=!1}var J;if(typeof v=="function")J=function(){v(G)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,F=I.port2;I.port1.onmessage=G,J=function(){F.postMessage(null)}}else J=function(){m(G,0)};function X(N){w=N,T||(T=!0,J())}function $(N,U){D=m(function(){N(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,X(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var z=f;f=U;try{return N()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,U){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=f;f=N;try{return U()}finally{f=z}},t.unstable_scheduleCallback=function(N,U,z){var Z=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Z+z:Z):z=Z,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=z+Q,N={id:h++,callback:U,priorityLevel:N,startTime:z,expirationTime:Q,sortIndex:-1},z>Z?(N.sortIndex=z,e(c,N),n(l)===null&&N===n(c)&&(y?(u(D),D=-1):y=!0,$(x,z-Z))):(N.sortIndex=Q,e(l,N),_||p||(_=!0,X(C))),N},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(N){var U=f;return function(){var z=f;f=U;try{return N.apply(this,arguments)}finally{f=z}}}})(dg);hg.exports=dg;var A_=hg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_=bn,Mn=A_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fg=new Set,Oo={};function Hr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Oo[t]=e,t=0;t<e.length;t++)fg.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=Object.prototype.hasOwnProperty,b_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sf={},of={};function R_(t){return Ou.call(of,t)?!0:Ou.call(sf,t)?!1:b_.test(t)?of[t]=!0:(sf[t]=!0,!1)}function P_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L_(t,e,n,i){if(e===null||typeof e>"u"||P_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wh=/[\-:]([a-z])/g;function Xh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wh,Xh);Wt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wh,Xh);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wh,Xh);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function jh(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L_(e,n,r,i)&&(n=null),i||r===null?R_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ri=C_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ds=Symbol.for("react.fragment"),Yh=Symbol.for("react.strict_mode"),Fu=Symbol.for("react.profiler"),pg=Symbol.for("react.provider"),mg=Symbol.for("react.context"),qh=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),$h=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),gg=Symbol.for("react.offscreen"),af=Symbol.iterator;function no(t){return t===null||typeof t!="object"?null:(t=af&&t[af]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,wc;function vo(t){if(wc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wc=e&&e[1]||""}return`
`+wc+t}var Tc=!1;function Ac(t,e){if(!t||Tc)return"";Tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vo(t):""}function D_(t){switch(t.tag){case 5:return vo(t.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return t=Ac(t.type,!1),t;case 11:return t=Ac(t.type.render,!1),t;case 1:return t=Ac(t.type,!0),t;default:return""}}function Bu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ds:return"Fragment";case hs:return"Portal";case Fu:return"Profiler";case Yh:return"StrictMode";case ku:return"Suspense";case zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mg:return(t.displayName||"Context")+".Consumer";case pg:return(t._context.displayName||"Context")+".Provider";case qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $h:return e=t.displayName||null,e!==null?e:Bu(t.type)||"Memo";case ki:e=t._payload,t=t._init;try{return Bu(t(e))}catch{}}return null}function I_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bu(e);case 8:return e===Yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function N_(t){var e=vg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pa(t){t._valueTracker||(t._valueTracker=N_(t))}function _g(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=vg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yg(t,e){e=e.checked,e!=null&&jh(t,"checked",e,!1)}function Gu(t,e){yg(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||Sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function Cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(_o(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function xg(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function hf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ma,Mg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U_=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(t){U_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Eo[e]=Eo[t]})});function Eg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Eo.hasOwnProperty(t)&&Eo[t]?(""+e).trim():e+"px"}function wg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Eg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var O_=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(t,e){if(e){if(O_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Yu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qu=null;function Zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $u=null,bs=null,Rs=null;function df(t){if(t=oa(t)){if(typeof $u!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=ic(e),$u(t.stateNode,t.type,e))}}function Tg(t){bs?Rs?Rs.push(t):Rs=[t]:bs=t}function Ag(){if(bs){var t=bs,e=Rs;if(Rs=bs=null,df(t),e)for(t=0;t<e.length;t++)df(e[t])}}function Cg(t,e){return t(e)}function bg(){}var Cc=!1;function Rg(t,e,n){if(Cc)return t(e,n);Cc=!0;try{return Cg(t,e,n)}finally{Cc=!1,(bs!==null||Rs!==null)&&(bg(),Ag())}}function ko(t,e){var n=t.stateNode;if(n===null)return null;var i=ic(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Zu=!1;if(wi)try{var io={};Object.defineProperty(io,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Zu=!1}function F_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var wo=!1,Ml=null,El=!1,Ku=null,k_={onError:function(t){wo=!0,Ml=t}};function z_(t,e,n,i,r,s,o,a,l){wo=!1,Ml=null,F_.apply(k_,arguments)}function B_(t,e,n,i,r,s,o,a,l){if(z_.apply(this,arguments),wo){if(wo){var c=Ml;wo=!1,Ml=null}else throw Error(ie(198));El||(El=!0,Ku=c)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ff(t){if(Gr(t)!==t)throw Error(ie(188))}function H_(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ff(r),t;if(s===i)return ff(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Lg(t){return t=H_(t),t!==null?Dg(t):null}function Dg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dg(t);if(e!==null)return e;t=t.sibling}return null}var Ig=Mn.unstable_scheduleCallback,pf=Mn.unstable_cancelCallback,G_=Mn.unstable_shouldYield,V_=Mn.unstable_requestPaint,Mt=Mn.unstable_now,W_=Mn.unstable_getCurrentPriorityLevel,Kh=Mn.unstable_ImmediatePriority,Ng=Mn.unstable_UserBlockingPriority,wl=Mn.unstable_NormalPriority,X_=Mn.unstable_LowPriority,Ug=Mn.unstable_IdlePriority,Jl=null,ai=null;function j_(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:$_,Y_=Math.log,q_=Math.LN2;function $_(t){return t>>>=0,t===0?32:31-(Y_(t)/q_|0)|0}var ga=64,va=4194304;function yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=yo(a):(s&=o,s!==0&&(i=yo(s)))}else o=n&~r,o!==0?i=yo(o):s!==0&&(i=yo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function Z_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Z_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Og(){var t=ga;return ga<<=1,!(ga&4194240)&&(ga=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function Q_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kg,Jh,zg,Bg,Hg,Ju=!1,_a=[],Zi=null,Ki=null,Qi=null,zo=new Map,Bo=new Map,Gi=[],J_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mf(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function ro(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=oa(e),e!==null&&Jh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ey(t,e,n,i,r){switch(e){case"focusin":return Zi=ro(Zi,t,e,n,i,r),!0;case"dragenter":return Ki=ro(Ki,t,e,n,i,r),!0;case"mouseover":return Qi=ro(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return zo.set(s,ro(zo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bo.set(s,ro(Bo.get(s)||null,t,e,n,i,r)),!0}return!1}function Gg(t){var e=Ar(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Pg(n),e!==null){t.blockedOn=e,Hg(t.priority,function(){zg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qu=i,n.target.dispatchEvent(i),qu=null}else return e=oa(n),e!==null&&Jh(e),t.blockedOn=n,!1;e.shift()}return!0}function gf(t,e,n){cl(t)&&n.delete(e)}function ty(){Ju=!1,Zi!==null&&cl(Zi)&&(Zi=null),Ki!==null&&cl(Ki)&&(Ki=null),Qi!==null&&cl(Qi)&&(Qi=null),zo.forEach(gf),Bo.forEach(gf)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,ty)))}function Ho(t){function e(r){return so(r,t)}if(0<_a.length){so(_a[0],t);for(var n=1;n<_a.length;n++){var i=_a[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&so(Zi,t),Ki!==null&&so(Ki,t),Qi!==null&&so(Qi,t),zo.forEach(e),Bo.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)Gg(n),n.blockedOn===null&&Gi.shift()}var Ps=Ri.ReactCurrentBatchConfig,Al=!0;function ny(t,e,n,i){var r=tt,s=Ps.transition;Ps.transition=null;try{tt=1,ed(t,e,n,i)}finally{tt=r,Ps.transition=s}}function iy(t,e,n,i){var r=tt,s=Ps.transition;Ps.transition=null;try{tt=4,ed(t,e,n,i)}finally{tt=r,Ps.transition=s}}function ed(t,e,n,i){if(Al){var r=eh(t,e,n,i);if(r===null)kc(t,e,i,Cl,n),mf(t,i);else if(ey(r,t,e,n,i))i.stopPropagation();else if(mf(t,i),e&4&&-1<J_.indexOf(t)){for(;r!==null;){var s=oa(r);if(s!==null&&kg(s),s=eh(t,e,n,i),s===null&&kc(t,e,i,Cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else kc(t,e,i,null,n)}}var Cl=null;function eh(t,e,n,i){if(Cl=null,t=Zh(i),t=Ar(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cl=t,null}function Vg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W_()){case Kh:return 1;case Ng:return 4;case wl:case X_:return 16;case Ug:return 536870912;default:return 16}default:return 16}}var Xi=null,td=null,ul=null;function Wg(){if(ul)return ul;var t,e=td,n=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ul=r.slice(t,1<i?1-i:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ya(){return!0}function vf(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ya:vf,this.isPropagationStopped=vf,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nd=wn($s),sa=gt({},$s,{view:0,detail:0}),ry=wn(sa),Rc,Pc,oo,ec=gt({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(Rc=t.screenX-oo.screenX,Pc=t.screenY-oo.screenY):Pc=Rc=0,oo=t),Rc)},movementY:function(t){return"movementY"in t?t.movementY:Pc}}),_f=wn(ec),sy=gt({},ec,{dataTransfer:0}),oy=wn(sy),ay=gt({},sa,{relatedTarget:0}),Lc=wn(ay),ly=gt({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),cy=wn(ly),uy=gt({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hy=wn(uy),dy=gt({},$s,{data:0}),yf=wn(dy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},my={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=my[t])?!!e[t]:!1}function id(){return gy}var vy=gt({},sa,{key:function(t){if(t.key){var e=fy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?py[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_y=wn(vy),yy=gt({},ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=wn(yy),xy=gt({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),Sy=wn(xy),My=gt({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ey=wn(My),wy=gt({},ec,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ty=wn(wy),Ay=[9,13,27,32],rd=wi&&"CompositionEvent"in window,To=null;wi&&"documentMode"in document&&(To=document.documentMode);var Cy=wi&&"TextEvent"in window&&!To,Xg=wi&&(!rd||To&&8<To&&11>=To),Sf=" ",Mf=!1;function jg(t,e){switch(t){case"keyup":return Ay.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function by(t,e){switch(t){case"compositionend":return Yg(e);case"keypress":return e.which!==32?null:(Mf=!0,Sf);case"textInput":return t=e.data,t===Sf&&Mf?null:t;default:return null}}function Ry(t,e){if(fs)return t==="compositionend"||!rd&&jg(t,e)?(t=Wg(),ul=td=Xi=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xg&&e.locale!=="ko"?null:e.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Py[t.type]:e==="textarea"}function qg(t,e,n,i){Tg(i),e=bl(e,"onChange"),0<e.length&&(n=new nd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ao=null,Go=null;function Ly(t){s0(t,0)}function tc(t){var e=gs(t);if(_g(e))return t}function Dy(t,e){if(t==="change")return e}var $g=!1;if(wi){var Dc;if(wi){var Ic="oninput"in document;if(!Ic){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),Ic=typeof wf.oninput=="function"}Dc=Ic}else Dc=!1;$g=Dc&&(!document.documentMode||9<document.documentMode)}function Tf(){Ao&&(Ao.detachEvent("onpropertychange",Zg),Go=Ao=null)}function Zg(t){if(t.propertyName==="value"&&tc(Go)){var e=[];qg(e,Go,t,Zh(t)),Rg(Ly,e)}}function Iy(t,e,n){t==="focusin"?(Tf(),Ao=e,Go=n,Ao.attachEvent("onpropertychange",Zg)):t==="focusout"&&Tf()}function Ny(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tc(Go)}function Uy(t,e){if(t==="click")return tc(e)}function Oy(t,e){if(t==="input"||t==="change")return tc(e)}function Fy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:Fy;function Vo(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ou.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function Af(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cf(t,e){var n=Af(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Af(n)}}function Kg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qg(){for(var t=window,e=Sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sl(t.document)}return e}function sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ky(t){var e=Qg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kg(n.ownerDocument.documentElement,n)){if(i!==null&&sd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Cf(n,s);var o=Cf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zy=wi&&"documentMode"in document&&11>=document.documentMode,ps=null,th=null,Co=null,nh=!1;function bf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nh||ps==null||ps!==Sl(i)||(i=ps,"selectionStart"in i&&sd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Co&&Vo(Co,i)||(Co=i,i=bl(th,"onSelect"),0<i.length&&(e=new nd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Nc={},Jg={};wi&&(Jg=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function nc(t){if(Nc[t])return Nc[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jg)return Nc[t]=e[n];return t}var e0=nc("animationend"),t0=nc("animationiteration"),n0=nc("animationstart"),i0=nc("transitionend"),r0=new Map,Rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){r0.set(t,e),Hr(e,[t])}for(var Uc=0;Uc<Rf.length;Uc++){var Oc=Rf[Uc],By=Oc.toLowerCase(),Hy=Oc[0].toUpperCase()+Oc.slice(1);ur(By,"on"+Hy)}ur(e0,"onAnimationEnd");ur(t0,"onAnimationIteration");ur(n0,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(i0,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function Pf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,B_(i,e,void 0,t),t.currentTarget=null}function s0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Pf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Pf(r,a,c),s=l}}}if(El)throw t=Ku,El=!1,Ku=null,t}function ot(t,e){var n=e[ah];n===void 0&&(n=e[ah]=new Set);var i=t+"__bubble";n.has(i)||(o0(e,t,2,!1),n.add(i))}function Fc(t,e,n){var i=0;e&&(i|=4),o0(n,t,i,e)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Wo(t){if(!t[Sa]){t[Sa]=!0,fg.forEach(function(n){n!=="selectionchange"&&(Gy.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sa]||(e[Sa]=!0,Fc("selectionchange",!1,e))}}function o0(t,e,n,i){switch(Vg(e)){case 1:var r=ny;break;case 4:r=iy;break;default:r=ed}n=r.bind(null,e,n,t),r=void 0,!Zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function kc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ar(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Rg(function(){var c=s,h=Zh(n),d=[];e:{var f=r0.get(t);if(f!==void 0){var p=nd,_=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":p=_y;break;case"focusin":_="focus",p=Lc;break;case"focusout":_="blur",p=Lc;break;case"beforeblur":case"afterblur":p=Lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Sy;break;case e0:case t0:case n0:p=cy;break;case i0:p=Ey;break;case"scroll":p=ry;break;case"wheel":p=Ty;break;case"copy":case"cut":case"paste":p=hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=xf}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var v=c,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,u!==null&&(x=ko(v,u),x!=null&&y.push(Xo(v,x,g)))),m)break;v=v.return}0<y.length&&(f=new p(f,_,null,n,h),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==qu&&(_=n.relatedTarget||n.fromElement)&&(Ar(_)||_[Ti]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Ar(_):null,_!==null&&(m=Gr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=_f,x="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=xf,x="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?f:gs(p),g=_==null?f:gs(_),f=new y(x,v+"leave",p,n,h),f.target=m,f.relatedTarget=g,x=null,Ar(h)===c&&(y=new y(u,v+"enter",_,n,h),y.target=g,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,u=_,v=0,g=y;g;g=Wr(g))v++;for(g=0,x=u;x;x=Wr(x))g++;for(;0<v-g;)y=Wr(y),v--;for(;0<g-v;)u=Wr(u),g--;for(;v--;){if(y===u||u!==null&&y===u.alternate)break t;y=Wr(y),u=Wr(u)}y=null}else y=null;p!==null&&Lf(d,f,p,y,!1),_!==null&&m!==null&&Lf(d,m,_,y,!0)}}e:{if(f=c?gs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=Dy;else if(Ef(f))if($g)C=Oy;else{C=Ny;var T=Iy}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Uy);if(C&&(C=C(t,c))){qg(d,C,n,h);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Vu(f,"number",f.value)}switch(T=c?gs(c):window,t){case"focusin":(Ef(T)||T.contentEditable==="true")&&(ps=T,th=c,Co=null);break;case"focusout":Co=th=ps=null;break;case"mousedown":nh=!0;break;case"contextmenu":case"mouseup":case"dragend":nh=!1,bf(d,n,h);break;case"selectionchange":if(zy)break;case"keydown":case"keyup":bf(d,n,h)}var w;if(rd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else fs?jg(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Xg&&n.locale!=="ko"&&(fs||D!=="onCompositionStart"?D==="onCompositionEnd"&&fs&&(w=Wg()):(Xi=h,td="value"in Xi?Xi.value:Xi.textContent,fs=!0)),T=bl(c,D),0<T.length&&(D=new yf(D,t,null,n,h),d.push({event:D,listeners:T}),w?D.data=w:(w=Yg(n),w!==null&&(D.data=w)))),(w=Cy?by(t,n):Ry(t,n))&&(c=bl(c,"onBeforeInput"),0<c.length&&(h=new yf("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=w))}s0(d,e)})}function Xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ko(t,n),s!=null&&i.unshift(Xo(t,s,r)),s=ko(t,e),s!=null&&i.push(Xo(t,s,r))),t=t.return}return i}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ko(n,s),l!=null&&o.unshift(Xo(n,l,a))):r||(l=ko(n,s),l!=null&&o.push(Xo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Vy=/\r\n?/g,Wy=/\u0000|\uFFFD/g;function Df(t){return(typeof t=="string"?t:""+t).replace(Vy,`
`).replace(Wy,"")}function Ma(t,e,n){if(e=Df(e),Df(t)!==e&&n)throw Error(ie(425))}function Rl(){}var ih=null,rh=null;function sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,If=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof If<"u"?function(t){return If.resolve(null).then(t).catch(Yy)}:oh;function Yy(t){setTimeout(function(){throw t})}function zc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ho(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ho(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),oi="__reactFiber$"+Zs,jo="__reactProps$"+Zs,Ti="__reactContainer$"+Zs,ah="__reactEvents$"+Zs,qy="__reactListeners$"+Zs,$y="__reactHandles$"+Zs;function Ar(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nf(t);t!==null;){if(n=t[oi])return n;t=Nf(t)}return e}t=n,n=t.parentNode}return null}function oa(t){return t=t[oi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function ic(t){return t[jo]||null}var lh=[],vs=-1;function hr(t){return{current:t}}function lt(t){0>vs||(t.current=lh[vs],lh[vs]=null,vs--)}function rt(t,e){vs++,lh[vs]=t.current,t.current=e}var lr={},Qt=hr(lr),cn=hr(!1),Nr=lr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function Pl(){lt(cn),lt(Qt)}function Uf(t,e,n){if(Qt.current!==lr)throw Error(ie(168));rt(Qt,e),rt(cn,n)}function a0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,I_(t)||"Unknown",r));return gt({},n,i)}function Ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Nr=Qt.current,rt(Qt,t),rt(cn,cn.current),!0}function Of(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=a0(t,e,Nr),i.__reactInternalMemoizedMergedChildContext=t,lt(cn),lt(Qt),rt(Qt,t)):lt(cn),rt(cn,n)}var _i=null,rc=!1,Bc=!1;function l0(t){_i===null?_i=[t]:_i.push(t)}function Zy(t){rc=!0,l0(t)}function dr(){if(!Bc&&_i!==null){Bc=!0;var t=0,e=tt;try{var n=_i;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,rc=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),Ig(Kh,dr),r}finally{tt=e,Bc=!1}}return null}var _s=[],ys=0,Dl=null,Il=0,Rn=[],Pn=0,Ur=null,xi=1,Si="";function xr(t,e){_s[ys++]=Il,_s[ys++]=Dl,Dl=t,Il=e}function c0(t,e,n){Rn[Pn++]=xi,Rn[Pn++]=Si,Rn[Pn++]=Ur,Ur=t;var i=xi;t=Si;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var s=32-Kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-Kn(e)+r|n<<r|i,Si=s+t}else xi=1<<s|n<<r|i,Si=t}function od(t){t.return!==null&&(xr(t,1),c0(t,1,0))}function ad(t){for(;t===Dl;)Dl=_s[--ys],_s[ys]=null,Il=_s[--ys],_s[ys]=null;for(;t===Ur;)Ur=Rn[--Pn],Rn[Pn]=null,Si=Rn[--Pn],Rn[Pn]=null,xi=Rn[--Pn],Rn[Pn]=null}var xn=null,yn=null,ut=!1,qn=null;function u0(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ff(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,yn=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:xi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,yn=null,!0):!1;default:return!1}}function ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uh(t){if(ut){var e=yn;if(e){var n=e;if(!Ff(t,e)){if(ch(t))throw Error(ie(418));e=Ji(n.nextSibling);var i=xn;e&&Ff(t,e)?u0(i,n):(t.flags=t.flags&-4097|2,ut=!1,xn=t)}}else{if(ch(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ut=!1,xn=t}}}function kf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function Ea(t){if(t!==xn)return!1;if(!ut)return kf(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sh(t.type,t.memoizedProps)),e&&(e=yn)){if(ch(t))throw h0(),Error(ie(418));for(;e;)u0(t,e),e=Ji(e.nextSibling)}if(kf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=xn?Ji(t.stateNode.nextSibling):null;return!0}function h0(){for(var t=yn;t;)t=Ji(t.nextSibling)}function ks(){yn=xn=null,ut=!1}function ld(t){qn===null?qn=[t]:qn.push(t)}var Ky=Ri.ReactCurrentBatchConfig;function ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function wa(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zf(t){var e=t._init;return e(t._payload)}function d0(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=ir(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,g,x){return v===null||v.tag!==6?(v=Yc(g,u.mode,x),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,x){var C=g.type;return C===ds?h(u,v,g.props.children,x,g.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ki&&zf(C)===v.type)?(x=r(v,g.props),x.ref=ao(u,v,g),x.return=u,x):(x=_l(g.type,g.key,g.props,null,u.mode,x),x.ref=ao(u,v,g),x.return=u,x)}function c(u,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=qc(g,u.mode,x),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function h(u,v,g,x,C){return v===null||v.tag!==7?(v=Pr(g,u.mode,x,C),v.return=u,v):(v=r(v,g),v.return=u,v)}function d(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Yc(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fa:return g=_l(v.type,v.key,v.props,null,u.mode,g),g.ref=ao(u,null,v),g.return=u,g;case hs:return v=qc(v,u.mode,g),v.return=u,v;case ki:var x=v._init;return d(u,x(v._payload),g)}if(_o(v)||no(v))return v=Pr(v,u.mode,g,null),v.return=u,v;wa(u,v)}return null}function f(u,v,g,x){var C=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(u,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fa:return g.key===C?l(u,v,g,x):null;case hs:return g.key===C?c(u,v,g,x):null;case ki:return C=g._init,f(u,v,C(g._payload),x)}if(_o(g)||no(g))return C!==null?null:h(u,v,g,x,null);wa(u,g)}return null}function p(u,v,g,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(g)||null,a(v,u,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fa:return u=u.get(x.key===null?g:x.key)||null,l(v,u,x,C);case hs:return u=u.get(x.key===null?g:x.key)||null,c(v,u,x,C);case ki:var T=x._init;return p(u,v,g,T(x._payload),C)}if(_o(x)||no(x))return u=u.get(g)||null,h(v,u,x,C,null);wa(v,x)}return null}function _(u,v,g,x){for(var C=null,T=null,w=v,D=v=0,S=null;w!==null&&D<g.length;D++){w.index>D?(S=w,w=null):S=w.sibling;var E=f(u,w,g[D],x);if(E===null){w===null&&(w=S);break}t&&w&&E.alternate===null&&e(u,w),v=s(E,v,D),T===null?C=E:T.sibling=E,T=E,w=S}if(D===g.length)return n(u,w),ut&&xr(u,D),C;if(w===null){for(;D<g.length;D++)w=d(u,g[D],x),w!==null&&(v=s(w,v,D),T===null?C=w:T.sibling=w,T=w);return ut&&xr(u,D),C}for(w=i(u,w);D<g.length;D++)S=p(w,u,D,g[D],x),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?D:S.key),v=s(S,v,D),T===null?C=S:T.sibling=S,T=S);return t&&w.forEach(function(k){return e(u,k)}),ut&&xr(u,D),C}function y(u,v,g,x){var C=no(g);if(typeof C!="function")throw Error(ie(150));if(g=C.call(g),g==null)throw Error(ie(151));for(var T=C=null,w=v,D=v=0,S=null,E=g.next();w!==null&&!E.done;D++,E=g.next()){w.index>D?(S=w,w=null):S=w.sibling;var k=f(u,w,E.value,x);if(k===null){w===null&&(w=S);break}t&&w&&k.alternate===null&&e(u,w),v=s(k,v,D),T===null?C=k:T.sibling=k,T=k,w=S}if(E.done)return n(u,w),ut&&xr(u,D),C;if(w===null){for(;!E.done;D++,E=g.next())E=d(u,E.value,x),E!==null&&(v=s(E,v,D),T===null?C=E:T.sibling=E,T=E);return ut&&xr(u,D),C}for(w=i(u,w);!E.done;D++,E=g.next())E=p(w,u,D,E.value,x),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?D:E.key),v=s(E,v,D),T===null?C=E:T.sibling=E,T=E);return t&&w.forEach(function(G){return e(u,G)}),ut&&xr(u,D),C}function m(u,v,g,x){if(typeof g=="object"&&g!==null&&g.type===ds&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case fa:e:{for(var C=g.key,T=v;T!==null;){if(T.key===C){if(C=g.type,C===ds){if(T.tag===7){n(u,T.sibling),v=r(T,g.props.children),v.return=u,u=v;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ki&&zf(C)===T.type){n(u,T.sibling),v=r(T,g.props),v.ref=ao(u,T,g),v.return=u,u=v;break e}n(u,T);break}else e(u,T);T=T.sibling}g.type===ds?(v=Pr(g.props.children,u.mode,x,g.key),v.return=u,u=v):(x=_l(g.type,g.key,g.props,null,u.mode,x),x.ref=ao(u,v,g),x.return=u,u=x)}return o(u);case hs:e:{for(T=g.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=qc(g,u.mode,x),v.return=u,u=v}return o(u);case ki:return T=g._init,m(u,v,T(g._payload),x)}if(_o(g))return _(u,v,g,x);if(no(g))return y(u,v,g,x);wa(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=Yc(g,u.mode,x),v.return=u,u=v),o(u)):n(u,v)}return m}var zs=d0(!0),f0=d0(!1),Nl=hr(null),Ul=null,xs=null,cd=null;function ud(){cd=xs=Ul=null}function hd(t){var e=Nl.current;lt(Nl),t._currentValue=e}function hh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){Ul=t,cd=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(cd!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(Ul===null)throw Error(ie(308));xs=t,Ul.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var Cr=null;function dd(t){Cr===null?Cr=[t]:Cr.push(t)}function p0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,dd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,dd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qh(t,n)}}function Bf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ol(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,h=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=gt({},d,f);break e;case 2:zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=d}}function Hf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var aa={},li=hr(aa),Yo=hr(aa),qo=hr(aa);function br(t){if(t===aa)throw Error(ie(174));return t}function pd(t,e){switch(rt(qo,e),rt(Yo,t),rt(li,aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xu(e,t)}lt(li),rt(li,e)}function Bs(){lt(li),lt(Yo),lt(qo)}function g0(t){br(qo.current);var e=br(li.current),n=Xu(e,t.type);e!==n&&(rt(Yo,t),rt(li,n))}function md(t){Yo.current===t&&(lt(li),lt(Yo))}var dt=hr(0);function Fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hc=[];function gd(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var fl=Ri.ReactCurrentDispatcher,Gc=Ri.ReactCurrentBatchConfig,Or=0,pt=null,bt=null,Nt=null,kl=!1,bo=!1,$o=0,Qy=0;function jt(){throw Error(ie(321))}function vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function _d(t,e,n,i,r,s){if(Or=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fl.current=t===null||t.memoizedState===null?nx:ix,t=n(i,r),bo){s=0;do{if(bo=!1,$o=0,25<=s)throw Error(ie(301));s+=1,Nt=bt=null,e.updateQueue=null,fl.current=rx,t=n(i,r)}while(bo)}if(fl.current=zl,e=bt!==null&&bt.next!==null,Or=0,Nt=bt=pt=null,kl=!1,e)throw Error(ie(300));return t}function yd(){var t=$o!==0;return $o=0,t}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?pt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function zn(){if(bt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Nt===null?pt.memoizedState:Nt.next;if(e!==null)Nt=e,bt=t;else{if(t===null)throw Error(ie(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Nt===null?pt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Zo(t,e){return typeof e=="function"?e(t):e}function Vc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Or&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,pt.lanes|=h,Fr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Jn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Jn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function v0(){}function _0(t,e){var n=pt,i=zn(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,xd(S0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Ko(9,x0.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ie(349));Or&30||y0(n,e,r)}return r}function y0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x0(t,e,n,i){e.value=n,e.getSnapshot=i,M0(e)&&E0(t)}function S0(t,e,n){return n(function(){M0(e)&&E0(t)})}function M0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function E0(t){var e=Ai(t,1);e!==null&&Qn(e,t,1,-1)}function Gf(t){var e=ri();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},e.queue=t,t=t.dispatch=tx.bind(null,pt,t),[e.memoizedState,t]}function Ko(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function w0(){return zn().memoizedState}function pl(t,e,n,i){var r=ri();pt.flags|=t,r.memoizedState=Ko(1|e,n,void 0,i===void 0?null:i)}function sc(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&vd(i,o.deps)){r.memoizedState=Ko(e,n,s,i);return}}pt.flags|=t,r.memoizedState=Ko(1|e,n,s,i)}function Vf(t,e){return pl(8390656,8,t,e)}function xd(t,e){return sc(2048,8,t,e)}function T0(t,e){return sc(4,2,t,e)}function A0(t,e){return sc(4,4,t,e)}function C0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function b0(t,e,n){return n=n!=null?n.concat([t]):null,sc(4,4,C0.bind(null,e,t),n)}function Sd(){}function R0(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function P0(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function L0(t,e,n){return Or&21?(Jn(n,e)||(n=Og(),pt.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function Jy(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Gc.transition;Gc.transition={};try{t(!1),e()}finally{tt=n,Gc.transition=i}}function D0(){return zn().memoizedState}function ex(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},I0(t))N0(e,n);else if(n=p0(t,e,n,i),n!==null){var r=rn();Qn(n,t,i,r),U0(n,e,i)}}function tx(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(I0(t))N0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Jn(a,o)){var l=e.interleaved;l===null?(r.next=r,dd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=p0(t,e,r,i),n!==null&&(r=rn(),Qn(n,t,i,r),U0(n,e,i))}}function I0(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function N0(t,e){bo=kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function U0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qh(t,n)}}var zl={readContext:kn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},nx={readContext:kn,useCallback:function(t,e){return ri().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:Vf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pl(4194308,4,C0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return pl(4,2,t,e)},useMemo:function(t,e){var n=ri();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ri();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ex.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=ri();return t={current:t},e.memoizedState=t},useState:Gf,useDebugValue:Sd,useDeferredValue:function(t){return ri().memoizedState=t},useTransition:function(){var t=Gf(!1),e=t[0];return t=Jy.bind(null,t[1]),ri().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=ri();if(ut){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),kt===null)throw Error(ie(349));Or&30||y0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Vf(S0.bind(null,i,s,t),[t]),i.flags|=2048,Ko(9,x0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ri(),e=kt.identifierPrefix;if(ut){var n=Si,i=xi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Qy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ix={readContext:kn,useCallback:R0,useContext:kn,useEffect:xd,useImperativeHandle:b0,useInsertionEffect:T0,useLayoutEffect:A0,useMemo:P0,useReducer:Vc,useRef:w0,useState:function(){return Vc(Zo)},useDebugValue:Sd,useDeferredValue:function(t){var e=zn();return L0(e,bt.memoizedState,t)},useTransition:function(){var t=Vc(Zo)[0],e=zn().memoizedState;return[t,e]},useMutableSource:v0,useSyncExternalStore:_0,useId:D0,unstable_isNewReconciler:!1},rx={readContext:kn,useCallback:R0,useContext:kn,useEffect:xd,useImperativeHandle:b0,useInsertionEffect:T0,useLayoutEffect:A0,useMemo:P0,useReducer:Wc,useRef:w0,useState:function(){return Wc(Zo)},useDebugValue:Sd,useDeferredValue:function(t){var e=zn();return bt===null?e.memoizedState=t:L0(e,bt.memoizedState,t)},useTransition:function(){var t=Wc(Zo)[0],e=zn().memoizedState;return[t,e]},useMutableSource:v0,useSyncExternalStore:_0,useId:D0,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oc={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=nr(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Qn(e,t,r,i),dl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=nr(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Qn(e,t,r,i),dl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=nr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(Qn(e,t,i,n),dl(e,t,i))}};function Wf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,i)||!Vo(r,s):!0}function O0(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=un(e)?Nr:Qt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&oc.enqueueReplaceState(e,e.state,null)}function fh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},fd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=un(e)?Nr:Qt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&oc.enqueueReplaceState(r,r.state,null),Ol(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=D_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sx=typeof WeakMap=="function"?WeakMap:Map;function F0(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Hl||(Hl=!0,wh=i),ph(t,e)},n}function k0(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ph(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new sx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=yx.bind(null,t,e,n),e.then(t,t))}function Yf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var ox=Ri.ReactCurrentOwner,ln=!1;function tn(t,e,n,i){e.child=t===null?f0(e,null,n,i):zs(e,t.child,n,i)}function $f(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=_d(t,e,n,i,s,r),n=yd(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(ut&&n&&od(e),e.flags|=1,tn(t,e,i,r),e.child)}function Zf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Rd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,z0(t,e,s,i,r)):(t=_l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function z0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Vo(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return mh(t,e,n,i,r)}function B0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Ms,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(Ms,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(Ms,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(Ms,gn),gn|=i;return tn(t,e,r,n),e.child}function H0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mh(t,e,n,i,r){var s=un(n)?Nr:Qt.current;return s=Fs(e,s),Ls(e,r),n=_d(t,e,n,i,s,r),i=yd(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(ut&&i&&od(e),e.flags|=1,tn(t,e,n,r),e.child)}function Kf(t,e,n,i,r){if(un(n)){var s=!0;Ll(e)}else s=!1;if(Ls(e,r),e.stateNode===null)ml(t,e),O0(e,n,i),fh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=un(n)?Nr:Qt.current,c=Fs(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Xf(e,o,i,c),zi=!1;var f=e.memoizedState;o.state=f,Ol(e,i,o,r),l=e.memoizedState,a!==i||f!==l||cn.current||zi?(typeof h=="function"&&(dh(e,n,h,i),l=e.memoizedState),(a=zi||Wf(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,m0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=un(n)?Nr:Qt.current,l=Fs(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Xf(e,o,i,l),zi=!1,f=e.memoizedState,o.state=f,Ol(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||cn.current||zi?(typeof p=="function"&&(dh(e,n,p,i),_=e.memoizedState),(c=zi||Wf(e,n,c,i,f,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return gh(t,e,n,i,s,r)}function gh(t,e,n,i,r,s){H0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Of(e,n,!1),Ci(t,e,s);i=e.stateNode,ox.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):tn(t,e,a,s),e.memoizedState=i.state,r&&Of(e,n,!0),e.child}function G0(t){var e=t.stateNode;e.pendingContext?Uf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uf(t,e.context,!1),pd(t,e.containerInfo)}function Qf(t,e,n,i,r){return ks(),ld(r),e.flags|=256,tn(t,e,n,i),e.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function _h(t){return{baseLanes:t,cachePool:null,transitions:null}}function V0(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(dt,r&1),t===null)return uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=cc(o,i,0,null),t=Pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_h(n),e.memoizedState=vh,t):Md(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ax(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Pr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?_h(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vh,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Md(t,e){return e=cc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ta(t,e,n,i){return i!==null&&ld(i),zs(e,t.child,null,n),t=Md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ax(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Xc(Error(ie(422))),Ta(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=cc({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=_h(o),e.memoizedState=vh,s);if(!(e.mode&1))return Ta(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Xc(s,i,void 0),Ta(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(t,r),Qn(i,t,r,-1))}return bd(),i=Xc(Error(ie(421))),Ta(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=xx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=Ji(r.nextSibling),xn=e,ut=!0,qn=null,t!==null&&(Rn[Pn++]=xi,Rn[Pn++]=Si,Rn[Pn++]=Ur,xi=t.id,Si=t.overflow,Ur=e),e=Md(e,i.children),e.flags|=4096,e)}function Jf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hh(t.return,e,n)}function jc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function W0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jf(t,n,e);else if(t.tag===19)Jf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),jc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}jc(e,!0,n,null,s);break;case"together":jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lx(t,e,n){switch(e.tag){case 3:G0(e),ks();break;case 5:g0(e);break;case 1:un(e.type)&&Ll(e);break;case 4:pd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?V0(t,e,n):(rt(dt,dt.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);rt(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return W0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,B0(t,e,n)}return Ci(t,e,n)}var X0,yh,j0,Y0;X0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yh=function(){};j0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,br(li.current);var s=null;switch(n){case"input":r=Hu(t,r),i=Hu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=Wu(t,r),i=Wu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Rl)}ju(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Y0=function(t,e,n,i){n!==i&&(e.flags|=4)};function lo(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function cx(t,e,n){var i=e.pendingProps;switch(ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return un(e.type)&&Pl(),Yt(e),null;case 3:return i=e.stateNode,Bs(),lt(cn),lt(Qt),gd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(Ch(qn),qn=null))),yh(t,e),Yt(e),null;case 5:md(e);var r=br(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)j0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Yt(e),null}if(t=br(li.current),Ea(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[jo]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<xo.length;r++)ot(xo[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":lf(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":uf(i,s),ot("invalid",i)}ju(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ma(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ma(i.textContent,a,t),r=["children",""+a]):Oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":pa(i),cf(i,s,!0);break;case"textarea":pa(i),hf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[oi]=e,t[jo]=i,X0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yu(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<xo.length;r++)ot(xo[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":lf(t,i),r=Hu(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":uf(t,i),r=Wu(t,i),ot("invalid",t);break;default:r=i}ju(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fo(t,l):typeof l=="number"&&Fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&jh(t,s,l,o))}switch(n){case"input":pa(t),cf(t,i,!1);break;case"textarea":pa(t),hf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)Y0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=br(qo.current),br(li.current),Ea(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:Ma(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ma(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Yt(e),null;case 13:if(lt(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&yn!==null&&e.mode&1&&!(e.flags&128))h0(),ks(),e.flags|=98560,s=!1;else if(s=Ea(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[oi]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else qn!==null&&(Ch(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Rt===0&&(Rt=3):bd())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Bs(),yh(t,e),t===null&&Wo(e.stateNode.containerInfo),Yt(e),null;case 10:return hd(e.type._context),Yt(e),null;case 17:return un(e.type)&&Pl(),Yt(e),null;case 19:if(lt(dt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)lo(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fl(t),o!==null){for(e.flags|=128,lo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Gs&&(e.flags|=128,i=!0,lo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Fl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Yt(e),null}else 2*Mt()-s.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,i=!0,lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=dt.current,rt(dt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return Cd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function ux(t,e){switch(ad(e),e.tag){case 1:return un(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),lt(cn),lt(Qt),gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return md(e),null;case 13:if(lt(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(dt),null;case 4:return Bs(),null;case 10:return hd(e.type._context),null;case 22:case 23:return Cd(),null;case 24:return null;default:return null}}var Aa=!1,Kt=!1,hx=typeof WeakSet=="function"?WeakSet:Set,me=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function xh(t,e,n){try{n()}catch(i){yt(t,e,i)}}var ep=!1;function dx(t,e){if(ih=Al,t=Qg(),sd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++h===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rh={focusedElem:t,selectionRange:n},Al=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Xn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(x){yt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=ep,ep=!1,_}function Ro(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&xh(e,n,s)}r=r.next}while(r!==i)}}function ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function q0(t){var e=t.alternate;e!==null&&(t.alternate=null,q0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[jo],delete e[ah],delete e[qy],delete e[$y])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $0(t){return t.tag===5||t.tag===3||t.tag===4}function tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(i!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}function Eh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Eh(t,e,n),t=t.sibling;t!==null;)Eh(t,e,n),t=t.sibling}var Ht=null,jn=!1;function Li(t,e,n){for(n=n.child;n!==null;)Z0(t,e,n),n=n.sibling}function Z0(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(Jl,n)}catch{}switch(n.tag){case 5:Kt||Ss(n,e);case 6:var i=Ht,r=jn;Ht=null,Li(t,e,n),Ht=i,jn=r,Ht!==null&&(jn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(jn?(t=Ht,n=n.stateNode,t.nodeType===8?zc(t.parentNode,n):t.nodeType===1&&zc(t,n),Ho(t)):zc(Ht,n.stateNode));break;case 4:i=Ht,r=jn,Ht=n.stateNode.containerInfo,jn=!0,Li(t,e,n),Ht=i,jn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xh(n,e,o),r=r.next}while(r!==i)}Li(t,e,n);break;case 1:if(!Kt&&(Ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Li(t,e,n);break;case 21:Li(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Li(t,e,n),Kt=i):Li(t,e,n);break;default:Li(t,e,n)}}function np(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hx),e.forEach(function(i){var r=Sx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,jn=!1;break e;case 3:Ht=a.stateNode.containerInfo,jn=!0;break e;case 4:Ht=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(Ht===null)throw Error(ie(160));Z0(s,o,r),Ht=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K0(e,t),e=e.sibling}function K0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ti(t),i&4){try{Ro(3,t,t.return),ac(3,t)}catch(y){yt(t,t.return,y)}try{Ro(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:Bn(e,t),ti(t),i&512&&n!==null&&Ss(n,n.return);break;case 5:if(Bn(e,t),ti(t),i&512&&n!==null&&Ss(n,n.return),t.flags&32){var r=t.stateNode;try{Fo(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yg(r,s),Yu(a,o);var c=Yu(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?wg(r,d):h==="dangerouslySetInnerHTML"?Mg(r,d):h==="children"?Fo(r,d):jh(r,h,d,c)}switch(a){case"input":Gu(r,s);break;case"textarea":xg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Cs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[jo]=s}catch(y){yt(t,t.return,y)}}break;case 6:if(Bn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){yt(t,t.return,y)}}break;case 3:if(Bn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:Bn(e,t),ti(t);break;case 13:Bn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Td=Mt())),i&4&&np(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||h,Bn(e,t),Kt=c):Bn(e,t),ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(me=t,h=t.child;h!==null;){for(d=me=h;me!==null;){switch(f=me,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ro(4,f,f.return);break;case 1:Ss(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:Ss(f,f.return);break;case 22:if(f.memoizedState!==null){rp(d);continue}}p!==null?(p.return=f,me=p):rp(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Eg("display",o))}catch(y){yt(t,t.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){yt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bn(e,t),ti(t),i&4&&np(t);break;case 21:break;default:Bn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($0(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fo(r,""),i.flags&=-33);var s=tp(t);Eh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=tp(t);Mh(t,a,o);break;default:throw Error(ie(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fx(t,e,n){me=t,Q0(t)}function Q0(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Aa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=Aa;var c=Kt;if(Aa=o,(Kt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?sp(r):l!==null?(l.return=o,me=l):sp(r);for(;s!==null;)me=s,Q0(s),s=s.sibling;me=r,Aa=a,Kt=c}ip(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):ip(t)}}function ip(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||ac(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ho(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Kt||e.flags&512&&Sh(e)}catch(f){yt(e,e.return,f)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function rp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function sp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ac(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Sh(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Sh(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var px=Math.ceil,Bl=Ri.ReactCurrentDispatcher,Ed=Ri.ReactCurrentOwner,Fn=Ri.ReactCurrentBatchConfig,Ke=0,kt=null,Ct=null,Vt=0,gn=0,Ms=hr(0),Rt=0,Qo=null,Fr=0,lc=0,wd=0,Po=null,an=null,Td=0,Gs=1/0,vi=null,Hl=!1,wh=null,tr=null,Ca=!1,ji=null,Gl=0,Lo=0,Th=null,gl=-1,vl=0;function rn(){return Ke&6?Mt():gl!==-1?gl:gl=Mt()}function nr(t){return t.mode&1?Ke&2&&Vt!==0?Vt&-Vt:Ky.transition!==null?(vl===0&&(vl=Og()),vl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:Vg(t.type)),t):1}function Qn(t,e,n,i){if(50<Lo)throw Lo=0,Th=null,Error(ie(185));ra(t,n,i),(!(Ke&2)||t!==kt)&&(t===kt&&(!(Ke&2)&&(lc|=n),Rt===4&&Vi(t,Vt)),hn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Gs=Mt()+500,rc&&dr()))}function hn(t,e){var n=t.callbackNode;K_(t,e);var i=Tl(t,t===kt?Vt:0);if(i===0)n!==null&&pf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&pf(n),e===1)t.tag===0?Zy(op.bind(null,t)):l0(op.bind(null,t)),jy(function(){!(Ke&6)&&dr()}),n=null;else{switch(Fg(i)){case 1:n=Kh;break;case 4:n=Ng;break;case 16:n=wl;break;case 536870912:n=Ug;break;default:n=wl}n=ov(n,J0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function J0(t,e){if(gl=-1,vl=0,Ke&6)throw Error(ie(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Tl(t,t===kt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vl(t,i);else{e=i;var r=Ke;Ke|=2;var s=tv();(kt!==t||Vt!==e)&&(vi=null,Gs=Mt()+500,Rr(t,e));do try{vx();break}catch(a){ev(t,a)}while(!0);ud(),Bl.current=s,Ke=r,Ct!==null?e=0:(kt=null,Vt=0,e=Rt)}if(e!==0){if(e===2&&(r=Qu(t),r!==0&&(i=r,e=Ah(t,r))),e===1)throw n=Qo,Rr(t,0),Vi(t,i),hn(t,Mt()),n;if(e===6)Vi(t,i);else{if(r=t.current.alternate,!(i&30)&&!mx(r)&&(e=Vl(t,i),e===2&&(s=Qu(t),s!==0&&(i=s,e=Ah(t,s))),e===1))throw n=Qo,Rr(t,0),Vi(t,i),hn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Sr(t,an,vi);break;case 3:if(Vi(t,i),(i&130023424)===i&&(e=Td+500-Mt(),10<e)){if(Tl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=oh(Sr.bind(null,t,an,vi),e);break}Sr(t,an,vi);break;case 4:if(Vi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*px(i/1960))-i,10<i){t.timeoutHandle=oh(Sr.bind(null,t,an,vi),i);break}Sr(t,an,vi);break;case 5:Sr(t,an,vi);break;default:throw Error(ie(329))}}}return hn(t,Mt()),t.callbackNode===n?J0.bind(null,t):null}function Ah(t,e){var n=Po;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=an,an=n,e!==null&&Ch(e)),t}function Ch(t){an===null?an=t:an.push.apply(an,t)}function mx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vi(t,e){for(e&=~wd,e&=~lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function op(t){if(Ke&6)throw Error(ie(327));Ds();var e=Tl(t,0);if(!(e&1))return hn(t,Mt()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var i=Qu(t);i!==0&&(e=i,n=Ah(t,i))}if(n===1)throw n=Qo,Rr(t,0),Vi(t,e),hn(t,Mt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,an,vi),hn(t,Mt()),null}function Ad(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Gs=Mt()+500,rc&&dr())}}function kr(t){ji!==null&&ji.tag===0&&!(Ke&6)&&Ds();var e=Ke;Ke|=1;var n=Fn.transition,i=tt;try{if(Fn.transition=null,tt=1,t)return t()}finally{tt=i,Fn.transition=n,Ke=e,!(Ke&6)&&dr()}}function Cd(){gn=Ms.current,lt(Ms)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Xy(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(ad(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pl();break;case 3:Bs(),lt(cn),lt(Qt),gd();break;case 5:md(i);break;case 4:Bs();break;case 13:lt(dt);break;case 19:lt(dt);break;case 10:hd(i.type._context);break;case 22:case 23:Cd()}n=n.return}if(kt=t,Ct=t=ir(t.current,null),Vt=gn=e,Rt=0,Qo=null,wd=lc=Fr=0,an=Po=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Cr=null}return t}function ev(t,e){do{var n=Ct;try{if(ud(),fl.current=zl,kl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kl=!1}if(Or=0,Nt=bt=pt=null,bo=!1,$o=0,Ed.current=null,n===null||n.return===null){Rt=1,Qo=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Yf(o);if(p!==null){p.flags&=-257,qf(p,o,a,s,e),p.mode&1&&jf(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){jf(s,c,e),bd();break e}l=Error(ie(426))}}else if(ut&&a.mode&1){var m=Yf(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),qf(m,o,a,s,e),ld(Hs(l,a));break e}}s=l=Hs(l,a),Rt!==4&&(Rt=2),Po===null?Po=[s]:Po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=F0(s,l,e);Bf(s,u);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(tr===null||!tr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=k0(s,a,e);Bf(s,x);break e}}s=s.return}while(s!==null)}iv(n)}catch(C){e=C,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function tv(){var t=Bl.current;return Bl.current=zl,t===null?zl:t}function bd(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),kt===null||!(Fr&268435455)&&!(lc&268435455)||Vi(kt,Vt)}function Vl(t,e){var n=Ke;Ke|=2;var i=tv();(kt!==t||Vt!==e)&&(vi=null,Rr(t,e));do try{gx();break}catch(r){ev(t,r)}while(!0);if(ud(),Ke=n,Bl.current=i,Ct!==null)throw Error(ie(261));return kt=null,Vt=0,Rt}function gx(){for(;Ct!==null;)nv(Ct)}function vx(){for(;Ct!==null&&!G_();)nv(Ct)}function nv(t){var e=sv(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?iv(t):Ct=e,Ed.current=null}function iv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ux(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Ct=null;return}}else if(n=cx(n,e,gn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Rt===0&&(Rt=5)}function Sr(t,e,n){var i=tt,r=Fn.transition;try{Fn.transition=null,tt=1,_x(t,e,n,i)}finally{Fn.transition=r,tt=i}return null}function _x(t,e,n,i){do Ds();while(ji!==null);if(Ke&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Q_(t,s),t===kt&&(Ct=kt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,ov(wl,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var o=tt;tt=1;var a=Ke;Ke|=4,Ed.current=null,dx(t,n),K0(n,t),ky(rh),Al=!!ih,rh=ih=null,t.current=n,fx(n),V_(),Ke=a,tt=o,Fn.transition=s}else t.current=n;if(Ca&&(Ca=!1,ji=t,Gl=r),s=t.pendingLanes,s===0&&(tr=null),j_(n.stateNode),hn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hl)throw Hl=!1,t=wh,wh=null,t;return Gl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===Th?Lo++:(Lo=0,Th=t):Lo=0,dr(),null}function Ds(){if(ji!==null){var t=Fg(Gl),e=Fn.transition,n=tt;try{if(Fn.transition=null,tt=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Gl=0,Ke&6)throw Error(ie(331));var r=Ke;for(Ke|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var h=me;switch(h.tag){case 0:case 11:case 15:Ro(8,h,s)}var d=h.child;if(d!==null)d.return=h,me=d;else for(;me!==null;){h=me;var f=h.sibling,p=h.return;if(q0(h),h===c){me=null;break}if(f!==null){f.return=p,me=f;break}me=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){o=me;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,me=g;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ac(9,a)}}catch(C){yt(a,a.return,C)}if(a===o){me=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,me=x;break e}me=a.return}}if(Ke=r,dr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(Jl,t)}catch{}i=!0}return i}finally{tt=n,Fn.transition=e}}return!1}function ap(t,e,n){e=Hs(n,e),e=F0(t,e,1),t=er(t,e,1),e=rn(),t!==null&&(ra(t,1,e),hn(t,e))}function yt(t,e,n){if(t.tag===3)ap(t,t,n);else for(;e!==null;){if(e.tag===3){ap(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Hs(n,t),t=k0(e,t,1),e=er(e,t,1),t=rn(),e!==null&&(ra(e,1,t),hn(e,t));break}}e=e.return}}function yx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Vt&n)===n&&(Rt===4||Rt===3&&(Vt&130023424)===Vt&&500>Mt()-Td?Rr(t,0):wd|=n),hn(t,e)}function rv(t,e){e===0&&(t.mode&1?(e=va,va<<=1,!(va&130023424)&&(va=4194304)):e=1);var n=rn();t=Ai(t,e),t!==null&&(ra(t,e,n),hn(t,n))}function xx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rv(t,n)}function Sx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),rv(t,n)}var sv;sv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,lx(t,e,n);ln=!!(t.flags&131072)}else ln=!1,ut&&e.flags&1048576&&c0(e,Il,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ml(t,e),t=e.pendingProps;var r=Fs(e,Qt.current);Ls(e,n),r=_d(null,e,i,t,r,n);var s=yd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Ll(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fd(e),r.updater=oc,e.stateNode=r,r._reactInternals=e,fh(e,i,t,n),e=gh(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&od(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ex(i),t=Xn(i,t),r){case 0:e=mh(null,e,i,t,n);break e;case 1:e=Kf(null,e,i,t,n);break e;case 11:e=$f(null,e,i,t,n);break e;case 14:e=Zf(null,e,i,Xn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),mh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Kf(t,e,i,r,n);case 3:e:{if(G0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,m0(t,e),Ol(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(ie(423)),e),e=Qf(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(ie(424)),e),e=Qf(t,e,i,n,r);break e}else for(yn=Ji(e.stateNode.containerInfo.firstChild),xn=e,ut=!0,qn=null,n=f0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=Ci(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return g0(e),t===null&&uh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,sh(i,r)?o=null:s!==null&&sh(i,s)&&(e.flags|=32),H0(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&uh(e),null;case 13:return V0(t,e,n);case 4:return pd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),$f(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(Nl,i._currentValue),i._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===r.children&&!cn.current){e=Ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=kn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),Zf(t,e,i,r,n);case 15:return z0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),ml(t,e),e.tag=1,un(i)?(t=!0,Ll(e)):t=!1,Ls(e,n),O0(e,i,r),fh(e,i,r,n),gh(null,e,i,!0,t,n);case 19:return W0(t,e,n);case 22:return B0(t,e,n)}throw Error(ie(156,e.tag))};function ov(t,e){return Ig(t,e)}function Mx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new Mx(t,e,n,i)}function Rd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ex(t){if(typeof t=="function")return Rd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qh)return 11;if(t===$h)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _l(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Rd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ds:return Pr(n.children,r,s,e);case Yh:o=8,r|=8;break;case Fu:return t=On(12,n,e,r|2),t.elementType=Fu,t.lanes=s,t;case ku:return t=On(13,n,e,r),t.elementType=ku,t.lanes=s,t;case zu:return t=On(19,n,e,r),t.elementType=zu,t.lanes=s,t;case gg:return cc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pg:o=10;break e;case mg:o=9;break e;case qh:o=11;break e;case $h:o=14;break e;case ki:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=On(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Pr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function cc(t,e,n,i){return t=On(22,t,i,e),t.elementType=gg,t.lanes=n,t.stateNode={isHidden:!1},t}function Yc(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function qc(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Pd(t,e,n,i,r,s,o,a,l){return t=new wx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(s),t}function Tx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function av(t){if(!t)return lr;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(un(n))return a0(t,n,e)}return e}function lv(t,e,n,i,r,s,o,a,l){return t=Pd(n,i,!0,t,r,s,o,a,l),t.context=av(null),n=t.current,i=rn(),r=nr(n),s=Ei(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,ra(t,r,i),hn(t,i),t}function uc(t,e,n,i){var r=e.current,s=rn(),o=nr(r);return n=av(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,o),t!==null&&(Qn(t,r,o,s),dl(t,r,o)),o}function Wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ld(t,e){lp(t,e),(t=t.alternate)&&lp(t,e)}function Ax(){return null}var cv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dd(t){this._internalRoot=t}hc.prototype.render=Dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));uc(t,e,null,null)};hc.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){uc(null,t,null,null)}),e[Ti]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&Gg(t)}};function Id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cp(){}function Cx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Wl(o);s.call(c)}}var o=lv(e,i,t,0,null,!1,!1,"",cp);return t._reactRootContainer=o,t[Ti]=o.current,Wo(t.nodeType===8?t.parentNode:t),kr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Wl(l);a.call(c)}}var l=Pd(t,0,!1,null,null,!1,!1,"",cp);return t._reactRootContainer=l,t[Ti]=l.current,Wo(t.nodeType===8?t.parentNode:t),kr(function(){uc(e,l,n,i)}),l}function fc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Wl(o);a.call(l)}}uc(e,o,t,r)}else o=Cx(n,e,t,r,i);return Wl(o)}kg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yo(e.pendingLanes);n!==0&&(Qh(e,n|1),hn(e,Mt()),!(Ke&6)&&(Gs=Mt()+500,dr()))}break;case 13:kr(function(){var i=Ai(t,1);if(i!==null){var r=rn();Qn(i,t,1,r)}}),Ld(t,1)}};Jh=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=rn();Qn(e,t,134217728,n)}Ld(t,134217728)}};zg=function(t){if(t.tag===13){var e=nr(t),n=Ai(t,e);if(n!==null){var i=rn();Qn(n,t,e,i)}Ld(t,e)}};Bg=function(){return tt};Hg=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};$u=function(t,e,n){switch(e){case"input":if(Gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ic(i);if(!r)throw Error(ie(90));_g(i),Gu(i,r)}}}break;case"textarea":xg(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};Cg=Ad;bg=kr;var bx={usingClientEntryPoint:!1,Events:[oa,gs,ic,Tg,Ag,Ad]},co={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rx={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lg(t),t===null?null:t.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||Ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ba.isDisabled&&ba.supportsFiber)try{Jl=ba.inject(Rx),ai=ba}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bx;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(e))throw Error(ie(200));return Tx(t,e,null,n)};En.createRoot=function(t,e){if(!Id(t))throw Error(ie(299));var n=!1,i="",r=cv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Pd(t,1,!1,null,null,n,!1,i,r),t[Ti]=e.current,Wo(t.nodeType===8?t.parentNode:t),new Dd(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Lg(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return kr(t)};En.hydrate=function(t,e,n){if(!dc(e))throw Error(ie(200));return fc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Id(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=cv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lv(e,null,t,1,n??null,r,!1,s,o),t[Ti]=e.current,Wo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new hc(e)};En.render=function(t,e,n){if(!dc(e))throw Error(ie(200));return fc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!dc(t))throw Error(ie(40));return t._reactRootContainer?(kr(function(){fc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};En.unstable_batchedUpdates=Ad;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!dc(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return fc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uv)}catch(t){console.error(t)}}uv(),ug.exports=En;var Px=ug.exports,hv,up=Px;hv=up.createRoot,up.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="160",Bi={ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lx=0,hp=1,Dx=2,dv=1,Ix=2,gi=3,cr=0,dn=1,Nn=2,rr=0,Is=1,dp=2,fp=3,pp=4,Nx=5,wr=100,Ux=101,Ox=102,mp=103,gp=104,Fx=200,kx=201,zx=202,Bx=203,bh=204,Rh=205,Hx=206,Gx=207,Vx=208,Wx=209,Xx=210,jx=211,Yx=212,qx=213,$x=214,Zx=0,Kx=1,Qx=2,Xl=3,Jx=4,eS=5,tS=6,nS=7,fv=0,iS=1,rS=2,sr=0,sS=1,oS=2,aS=3,pv=4,lS=5,cS=6,mv=300,Vs=301,Ws=302,Ph=303,Lh=304,pc=306,Dh=1e3,$n=1001,Ih=1002,nn=1003,vp=1004,$c=1005,Ln=1006,uS=1007,Jo=1008,or=1009,hS=1010,dS=1011,Ud=1012,gv=1013,Yi=1014,qi=1015,ea=1016,vv=1017,_v=1018,Lr=1020,fS=1021,Zn=1023,pS=1024,mS=1025,Dr=1026,Xs=1027,gS=1028,yv=1029,vS=1030,xv=1031,Sv=1033,Zc=33776,Kc=33777,Qc=33778,Jc=33779,_p=35840,yp=35841,xp=35842,Sp=35843,Mv=36196,Mp=37492,Ep=37496,wp=37808,Tp=37809,Ap=37810,Cp=37811,bp=37812,Rp=37813,Pp=37814,Lp=37815,Dp=37816,Ip=37817,Np=37818,Up=37819,Op=37820,Fp=37821,eu=36492,kp=36494,zp=36495,_S=36283,Bp=36284,Hp=36285,Gp=36286,Ev=3e3,Ir=3001,yS=3200,xS=3201,wv=0,SS=1,Un="",Ut="srgb",bi="srgb-linear",Od="display-p3",mc="display-p3-linear",jl="linear",at="srgb",Yl="rec709",ql="p3",Xr=7680,Vp=519,MS=512,ES=513,wS=514,Tv=515,TS=516,AS=517,CS=518,bS=519,Wp=35044,Xp="300 es",Nh=1035,Mi=2e3,$l=2001;class Vr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jp=1234567;const Ns=Math.PI/180,ta=180/Math.PI;function Ks(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Ot(t,e,n){return Math.max(e,Math.min(n,t))}function Fd(t,e){return(t%e+e)%e}function RS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function PS(t,e,n){return t!==e?(n-t)/(e-t):0}function Do(t,e,n){return(1-n)*t+n*e}function LS(t,e,n,i){return Do(t,e,1-Math.exp(-n*i))}function DS(t,e=1){return e-Math.abs(Fd(t,e*2)-e)}function IS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function NS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function US(t,e){return t+Math.floor(Math.random()*(e-t+1))}function OS(t,e){return t+Math.random()*(e-t)}function FS(t){return t*(.5-Math.random())}function kS(t){t!==void 0&&(jp=t);let e=jp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zS(t){return t*Ns}function BS(t){return t*ta}function Uh(t){return(t&t-1)===0&&t!==0}function HS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Zl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function GS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),h=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*h,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*h,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*h,a*c);break;case"XZX":t.set(a*h,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*h,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function us(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Wn={DEG2RAD:Ns,RAD2DEG:ta,generateUUID:Ks,clamp:Ot,euclideanModulo:Fd,mapLinear:RS,inverseLerp:PS,lerp:Do,damp:LS,pingpong:DS,smoothstep:IS,smootherstep:NS,randInt:US,randFloat:OS,randFloatSpread:FS,seededRandom:kS,degToRad:zS,radToDeg:BS,isPowerOfTwo:Uh,ceilPowerOfTwo:HS,floorPowerOfTwo:Zl,setQuaternionFromProperEuler:GS,normalize:Jt,denormalize:us};class ge{constructor(e=0,n=0){ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],_=i[8],y=r[0],m=r[3],u=r[6],v=r[1],g=r[4],x=r[7],C=r[2],T=r[5],w=r[8];return s[0]=o*y+a*v+l*C,s[3]=o*m+a*g+l*T,s[6]=o*u+a*x+l*w,s[1]=c*y+h*v+d*C,s[4]=c*m+h*g+d*T,s[7]=c*u+h*x+d*w,s[2]=f*y+p*v+_*C,s[5]=f*m+p*g+_*T,s[8]=f*u+p*x+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,p=c*s-o*l,_=n*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(tu.makeScale(e,n)),this}rotate(e){return this.premultiply(tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tu=new je;function Av(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function VS(){const t=Kl("canvas");return t.style.display="block",t}const Yp={};function Io(t){t in Yp||(Yp[t]=!0,console.warn(t))}const qp=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$p=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ra={[bi]:{transfer:jl,primaries:Yl,toReference:t=>t,fromReference:t=>t},[Ut]:{transfer:at,primaries:Yl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[mc]:{transfer:jl,primaries:ql,toReference:t=>t.applyMatrix3($p),fromReference:t=>t.applyMatrix3(qp)},[Od]:{transfer:at,primaries:ql,toReference:t=>t.convertSRGBToLinear().applyMatrix3($p),fromReference:t=>t.applyMatrix3(qp).convertLinearToSRGB()}},WS=new Set([bi,mc]),nt={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!WS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ra[e].toReference,r=Ra[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ra[t].primaries},getTransfer:function(t){return t===Un?jl:Ra[t].transfer}};function Us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function nu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let jr;class Cv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jr===void 0&&(jr=Kl("canvas")),jr.width=e.width,jr.height=e.height;const i=jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=jr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Us(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XS=0;class bv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=Ks(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(iu(r[o].image)):s.push(iu(r[o]))}else s=iu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Cv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jS=0;class Sn extends Vr{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,i=$n,r=$n,s=Ln,o=Jo,a=Zn,l=or,c=Sn.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Ks(),this.name="",this.source=new bv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ir?Ut:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dh:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dh:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?Ir:Ev}set encoding(e){Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ir?Ut:Un}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=mv;Sn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,x=(p+1)/2,C=(u+1)/2,T=(h+f)/4,w=(d+y)/4,D=(_+m)/4;return g>x&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=T/i,s=w/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-y)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YS extends Vr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Io("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ir?Ut:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new bv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends YS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Rv extends Sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qS extends Sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gt{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==f||c!==p||h!==_){let m=1-a;const u=l*f+c*p+h*_+d*y,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const C=Math.sqrt(g),T=Math.atan2(C,u*v);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const x=a*v;if(l=l*m+f*x,c=c*m+p*x,h=h*m+_*x,d=d*m+y*x,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+h*d+l*p-c*f,e[n+1]=l*_+h*f+c*d-a*p,e[n+2]=c*_+h*p+a*f-l*d,e[n+3]=h*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"YZX":this._x=f*h*d+c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d-f*p*_;break;case"XZY":this._x=f*h*d-c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,n=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ru=new R,Zp=new Gt;class Qs{constructor(e=new R(1/0,1/0,1/0),n=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),La.subVectors(this.max,uo),Yr.subVectors(e.a,uo),qr.subVectors(e.b,uo),$r.subVectors(e.c,uo),Di.subVectors(qr,Yr),Ii.subVectors($r,qr),mr.subVectors(Yr,$r);let n=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-mr.z,mr.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,mr.z,0,-mr.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-mr.y,mr.x,0];return!su(n,Yr,qr,$r,La)||(n=[1,0,0,0,1,0,0,0,1],!su(n,Yr,qr,$r,La))?!1:(Da.crossVectors(Di,Ii),n=[Da.x,Da.y,Da.z],su(n,Yr,qr,$r,La))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new R,new R,new R,new R,new R,new R,new R,new R],Hn=new R,Pa=new Qs,Yr=new R,qr=new R,$r=new R,Di=new R,Ii=new R,mr=new R,uo=new R,La=new R,Da=new R,gr=new R;function su(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){gr.fromArray(t,s);const a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=n.dot(gr),h=i.dot(gr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const $S=new Qs,ho=new R,ou=new R;class gc{constructor(e=new R,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):$S.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const n=ho.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(ou)),this.expandByPoint(ho.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new R,au=new R,Ia=new R,Ni=new R,lu=new R,Na=new R,cu=new R;class vc{constructor(e=new R,n=new R(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){au.copy(e).add(n).multiplyScalar(.5),Ia.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(au);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ia),a=Ni.dot(this.direction),l=-Ni.dot(Ia),c=Ni.lengthSq(),h=Math.abs(1-o*o);let d,f,p,_;if(h>0)if(d=o*l-a,f=o*a-l,_=s*h,d>=0)if(f>=-_)if(f<=_){const y=1/h;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(au).addScaledVector(Ia,f),p}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){lu.subVectors(n,e),Na.subVectors(i,e),cu.crossVectors(lu,Na);let o=this.direction.dot(cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(Na.crossVectors(Ni,Na));if(l<0)return null;const c=a*this.direction.dot(lu.cross(Ni));if(c<0||l+c>o)return null;const h=-a*Ni.dot(cu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,c,h,d,f,p,_,y,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,d,f,p,_,y,m)}set(e,n,i,r,s,o,a,l,c,h,d,f,p,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),o=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*d,_=a*h,y=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,_=c*h,y=c*d;n[0]=f+y*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=p*a-_,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,_=c*h,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*h,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,_=a*h,y=a*d;n[0]=l*h,n[4]=_*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*h,n[4]=y-f*d,n[8]=_*d+p,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*d+_,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+y,n[5]=o*h,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*h,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZS,e,KS)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ui.crossVectors(i,pn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ui.crossVectors(i,pn)),Ui.normalize(),Ua.crossVectors(pn,Ui),r[0]=Ui.x,r[4]=Ua.x,r[8]=pn.x,r[1]=Ui.y,r[5]=Ua.y,r[9]=pn.y,r[2]=Ui.z,r[6]=Ua.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],_=i[2],y=i[6],m=i[10],u=i[14],v=i[3],g=i[7],x=i[11],C=i[15],T=r[0],w=r[4],D=r[8],S=r[12],E=r[1],k=r[5],G=r[9],J=r[13],I=r[2],F=r[6],X=r[10],$=r[14],N=r[3],U=r[7],z=r[11],Z=r[15];return s[0]=o*T+a*E+l*I+c*N,s[4]=o*w+a*k+l*F+c*U,s[8]=o*D+a*G+l*X+c*z,s[12]=o*S+a*J+l*$+c*Z,s[1]=h*T+d*E+f*I+p*N,s[5]=h*w+d*k+f*F+p*U,s[9]=h*D+d*G+f*X+p*z,s[13]=h*S+d*J+f*$+p*Z,s[2]=_*T+y*E+m*I+u*N,s[6]=_*w+y*k+m*F+u*U,s[10]=_*D+y*G+m*X+u*z,s[14]=_*S+y*J+m*$+u*Z,s[3]=v*T+g*E+x*I+C*N,s[7]=v*w+g*k+x*F+C*U,s[11]=v*D+g*G+x*X+C*z,s[15]=v*S+g*J+x*$+C*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],_=e[3],y=e[7],m=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*h-s*l*h)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*h-i*c*h)+u*(-r*a*h-n*l*d+n*a*f+r*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],_=e[12],y=e[13],m=e[14],u=e[15],v=d*m*c-y*f*c+y*l*p-a*m*p-d*l*u+a*f*u,g=_*f*c-h*m*c-_*l*p+o*m*p+h*l*u-o*f*u,x=h*y*c-_*d*c+_*a*p-o*y*p-h*a*u+o*d*u,C=_*d*l-h*y*l-_*a*f+o*y*f+h*a*m-o*d*m,T=n*v+i*g+r*x+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(y*f*s-d*m*s-y*r*p+i*m*p+d*r*u-i*f*u)*w,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*u+i*l*u)*w,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*w,e[4]=g*w,e[5]=(h*m*s-_*f*s+_*r*p-n*m*p-h*r*u+n*f*u)*w,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*u-n*l*u)*w,e[7]=(o*f*s-h*l*s+h*r*c-n*f*c-o*r*p+n*l*p)*w,e[8]=x*w,e[9]=(_*d*s-h*y*s-_*i*p+n*y*p+h*i*u-n*d*u)*w,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*w,e[11]=(h*a*s-o*d*s-h*i*c+n*d*c+o*i*p-n*a*p)*w,e[12]=C*w,e[13]=(h*y*r-_*d*r+_*i*f-n*y*f-h*i*m+n*d*m)*w,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*w,e[15]=(o*d*r-h*a*r+h*i*l-n*d*l-o*i*f+n*a*f)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,d=a+a,f=s*c,p=s*h,_=s*d,y=o*h,m=o*d,u=a*d,v=l*c,g=l*h,x=l*d,C=i.x,T=i.y,w=i.z;return r[0]=(1-(y+u))*C,r[1]=(p+x)*C,r[2]=(_-g)*C,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(f+u))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(_+g)*w,r[9]=(m-v)*w,r[10]=(1-(f+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),a=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,h=1/o,d=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,n.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Mi){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(a===Mi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===$l)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Mi){const l=this.elements,c=1/(n-e),h=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*h;let _,y;if(a===Mi)_=(o+s)*d,y=-2*d;else if(a===$l)_=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zr=new R,Gn=new mt,ZS=new R(0,0,0),KS=new R(1,1,1),Ui=new R,Ua=new R,pn=new R,Kp=new mt,Qp=new Gt;class la{constructor(e=0,n=0,i=0,r=la.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class kd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QS=0;const Jp=new R,Kr=new Gt,fi=new mt,Oa=new R,fo=new R,JS=new R,eM=new Gt,em=new R(1,0,0),tm=new R(0,1,0),nm=new R(0,0,1),tM={type:"added"},nM={type:"removed"};class Et extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new R,n=new la,i=new Gt,r=new R(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new je}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(em,e)}rotateY(e){return this.rotateOnAxis(tm,e)}rotateZ(e){return this.rotateOnAxis(nm,e)}translateOnAxis(e,n){return Jp.copy(e).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(em,e)}translateY(e){return this.translateOnAxis(tm,e)}translateZ(e){return this.translateOnAxis(nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Oa.copy(e):Oa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(fo,Oa,this.up):fi.lookAt(Oa,fo,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(fi),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(nM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,JS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,eM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DEFAULT_UP=new R(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new R,pi=new R,uu=new R,mi=new R,Qr=new R,Jr=new R,im=new R,hu=new R,du=new R,fu=new R;let Fa=!1;class Dn{constructor(e=new R,n=new R,i=new R){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),pi.subVectors(i,n),uu.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(pi),l=Vn.dot(uu),c=pi.dot(pi),h=pi.dot(uu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,_=(o*h-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fa=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),pi.subVectors(e,n),Vn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Vn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fa=!0),Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Qr.subVectors(r,i),Jr.subVectors(s,i),hu.subVectors(e,i);const l=Qr.dot(hu),c=Jr.dot(hu);if(l<=0&&c<=0)return n.copy(i);du.subVectors(e,r);const h=Qr.dot(du),d=Jr.dot(du);if(h>=0&&d<=h)return n.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Qr,o);fu.subVectors(e,s);const p=Qr.dot(fu),_=Jr.dot(fu);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Jr,a);const m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return im.subVectors(s,r),a=(d-h)/(d-h+(p-_)),n.copy(r).addScaledVector(im,a);const u=1/(m+y+f);return o=y*u,a=f*u,n.copy(i).addScaledVector(Qr,o).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},ka={h:0,s:0,l:0};function pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=Fd(e,1),n=Ot(n,0,1),i=Ot(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=pu(o,s,e+1/3),this.g=pu(o,s,e),this.b=pu(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ut){const i=Pv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=nu(e.r),this.g=nu(e.g),this.b=nu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return nt.fromWorkingColorSpace($t.copy(this),e),Math.round(Ot($t.r*255,0,255))*65536+Math.round(Ot($t.g*255,0,255))*256+Math.round(Ot($t.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Ut){nt.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Ut?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+n,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Oi),e.getHSL(ka);const i=Do(Oi.h,ka.h,n),r=Do(Oi.s,ka.s,n),s=Do(Oi.l,ka.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new He;He.NAMES=Pv;let iM=0;class Js extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Is,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Rh,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bh&&(i.blendSrc=this.blendSrc),this.blendDst!==Rh&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ca extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new R,za=new ge;class ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)za.fromBufferAttribute(this,n),za.applyMatrix3(e),this.setXY(n,za.x,za.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=us(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=us(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=us(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=us(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=us(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),e}}class Lv extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Dv extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Je extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let rM=0;const An=new mt,mu=new Et,es=new R,mn=new Qs,po=new Qs,It=new R;class ft extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?Dv:Lv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Je(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];po.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(mn.min,po.min),mn.expandByPoint(It),It.addVectors(mn.max,po.max),mn.expandByPoint(It)):(mn.expandByPoint(po.min),mn.expandByPoint(po.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)It.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),It.add(es)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new R,h[E]=new R;const d=new R,f=new R,p=new R,_=new ge,y=new ge,m=new ge,u=new R,v=new R;function g(E,k,G){d.fromArray(r,E*3),f.fromArray(r,k*3),p.fromArray(r,G*3),_.fromArray(o,E*2),y.fromArray(o,k*2),m.fromArray(o,G*2),f.sub(d),p.sub(d),y.sub(_),m.sub(_);const J=1/(y.x*m.y-m.x*y.y);isFinite(J)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(J),v.copy(p).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(J),c[E].add(u),c[k].add(u),c[G].add(u),h[E].add(v),h[k].add(v),h[G].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let E=0,k=x.length;E<k;++E){const G=x[E],J=G.start,I=G.count;for(let F=J,X=J+I;F<X;F+=3)g(i[F+0],i[F+1],i[F+2])}const C=new R,T=new R,w=new R,D=new R;function S(E){w.fromArray(s,E*3),D.copy(w);const k=c[E];C.copy(k),C.sub(w.multiplyScalar(w.dot(k))).normalize(),T.crossVectors(D,k);const J=T.dot(h[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=J}for(let E=0,k=x.length;E<k;++E){const G=x[E],J=G.start,I=G.count;for(let F=J,X=J+I;F<X;F+=3)S(i[F+0]),S(i[F+1]),S(i[F+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let u=0;u<h;u++)f[_++]=c[p++]}return new ci(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ft,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rm=new mt,vr=new vc,Ba=new gc,sm=new R,ts=new R,ns=new R,is=new R,gu=new R,Ha=new R,Ga=new ge,Va=new ge,Wa=new ge,om=new R,am=new R,lm=new R,Xa=new R,ja=new R;class de extends Et{constructor(e=new ft,n=new ca){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ha.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(gu.fromBufferAttribute(d,e),o?Ha.addScaledVector(gu,h):Ha.addScaledVector(gu.sub(n),h))}n.add(Ha)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(s),vr.copy(e.ray).recast(e.near),!(Ba.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Ba,sm)===null||vr.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(rm.copy(s).invert(),vr.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],u=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,C=g;x<C;x+=3){const T=a.getX(x),w=a.getX(x+1),D=a.getX(x+2);r=Ya(this,u,e,i,c,h,d,T,w,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const v=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);r=Ya(this,o,e,i,c,h,d,v,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],u=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,C=g;x<C;x+=3){const T=x,w=x+1,D=x+2;r=Ya(this,u,e,i,c,h,d,T,w,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const v=m,g=m+1,x=m+2;r=Ya(this,o,e,i,c,h,d,v,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function sM(t,e,n,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;ja.copy(a),ja.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ja);return c<n.near||c>n.far?null:{distance:c,point:ja.clone(),object:t}}function Ya(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ts),t.getVertexPosition(l,ns),t.getVertexPosition(c,is);const h=sM(t,e,n,i,ts,ns,is,Xa);if(h){r&&(Ga.fromBufferAttribute(r,a),Va.fromBufferAttribute(r,l),Wa.fromBufferAttribute(r,c),h.uv=Dn.getInterpolation(Xa,ts,ns,is,Ga,Va,Wa,new ge)),s&&(Ga.fromBufferAttribute(s,a),Va.fromBufferAttribute(s,l),Wa.fromBufferAttribute(s,c),h.uv1=Dn.getInterpolation(Xa,ts,ns,is,Ga,Va,Wa,new ge),h.uv2=h.uv1),o&&(om.fromBufferAttribute(o,a),am.fromBufferAttribute(o,l),lm.fromBufferAttribute(o,c),h.normal=Dn.getInterpolation(Xa,ts,ns,is,om,am,lm,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new R,materialIndex:0};Dn.getNormal(ts,ns,is,d.normal),h.face=d}return h}class At extends ft{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(d,2));function _(y,m,u,v,g,x,C,T,w,D,S){const E=x/w,k=C/D,G=x/2,J=C/2,I=T/2,F=w+1,X=D+1;let $=0,N=0;const U=new R;for(let z=0;z<X;z++){const Z=z*k-J;for(let Q=0;Q<F;Q++){const Y=Q*E-G;U[y]=Y*v,U[m]=Z*g,U[u]=I,c.push(U.x,U.y,U.z),U[y]=0,U[m]=0,U[u]=T>0?1:-1,h.push(U.x,U.y,U.z),d.push(Q/w),d.push(1-z/D),$+=1}}for(let z=0;z<D;z++)for(let Z=0;Z<w;Z++){const Q=f+Z+F*z,Y=f+Z+F*(z+1),K=f+(Z+1)+F*(z+1),ce=f+(Z+1)+F*z;l.push(Q,Y,ce),l.push(Y,K,ce),N+=6}a.addGroup(p,N,S),p+=N,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const r in i)e[r]=i[r]}return e}function oM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Iv(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const aM={clone:js,merge:en};var lM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=oM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Nv extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends Nv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const rs=-90,ss=1;class uM extends Et{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(rs,ss,e,n);r.layers=this.layers,this.add(r);const s=new In(rs,ss,e,n);s.layers=this.layers,this.add(s);const o=new In(rs,ss,e,n);o.layers=this.layers,this.add(o);const a=new In(rs,ss,e,n);a.layers=this.layers,this.add(a);const l=new In(rs,ss,e,n);l.layers=this.layers,this.add(l);const c=new In(rs,ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$l)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Uv extends Sn{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hM extends zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Io("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ir?Ut:Un),this.texture=new Uv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new At(5,5,5),s=new Br({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:rr});s.uniforms.tEquirect.value=n;const o=new de(r,s),a=n.minFilter;return n.minFilter===Jo&&(n.minFilter=Ln),new uM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const vu=new R,dM=new R,fM=new je;class yi{constructor(e=new R(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vu.subVectors(i,n).cross(dM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||fM.getNormalMatrix(e),r=this.coplanarPoint(vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new gc,qa=new R;class zd{constructor(e=new yi,n=new yi,i=new yi,r=new yi,s=new yi,o=new yi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],p=r[8],_=r[9],y=r[10],m=r[11],u=r[12],v=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,m-p,x-u).normalize(),i[1].setComponents(l+s,f+c,m+p,x+u).normalize(),i[2].setComponents(l+o,f+h,m+_,x+v).normalize(),i[3].setComponents(l-o,f-h,m-_,x-v).normalize(),i[4].setComponents(l-a,f-d,m-y,x-g).normalize(),n===Mi)i[5].setComponents(l+a,f+d,m+y,x+g).normalize();else if(n===$l)i[5].setComponents(a,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(qa.x=r.normal.x>0?e.max.x:e.min.x,qa.y=r.normal.y>0?e.max.y:e.min.y,qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ov(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function pM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,p=d.byteLength,_=t.createBuffer();t.bindBuffer(h,_),t.bufferData(h,d,f),c.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,h,d){const f=h.array,p=h._updateRange,_=h.updateRanges;if(t.bindBuffer(d,c),p.count===-1&&_.length===0&&t.bufferSubData(d,0,f),_.length!==0){for(let y=0,m=_.length;y<m;y++){const u=_[y];n?t.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}class Ys extends ft{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=n/l,p=[],_=[],y=[],m=[];for(let u=0;u<h;u++){const v=u*f-o;for(let g=0;g<c;g++){const x=g*d-s;_.push(x,-v,0),y.push(0,0,1),m.push(g/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const g=v+c*u,x=v+c*(u+1),C=v+1+c*(u+1),T=v+1+c*u;p.push(g,x,T),p.push(x,C,T)}this.setIndex(p),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(y,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}var mM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gM=`#ifdef USE_ALPHAHASH
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
#endif`,vM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SM=`#ifdef USE_AOMAP
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
#endif`,MM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EM=`#ifdef USE_BATCHING
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
#endif`,wM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,TM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bM=`#ifdef USE_IRIDESCENCE
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
#endif`,RM=`#ifdef USE_BUMPMAP
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
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kM=`#define PI 3.141592653589793
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
} // validated`,zM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BM=`vec3 transformedNormal = objectNormal;
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
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`
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
}`,YM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
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
}`,iE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aE=`uniform bool receiveShadow;
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
#endif`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fE=`PhysicalMaterial material;
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
#endif`,pE=`struct PhysicalMaterial {
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
}`,mE=`
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
#endif`,gE=`#if defined( RE_IndirectDiffuse )
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
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_E=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ME=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TE=`#if defined( USE_POINTS_UV )
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
#endif`,AE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
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
#endif`,PE=`#ifdef USE_MORPHTARGETS
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
#endif`,LE=`#ifdef USE_MORPHTARGETS
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
#endif`,DE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FE=`#ifdef USE_NORMALMAP
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
#endif`,kE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JE=`float getShadowMask() {
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
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,n1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i1=`#ifdef USE_SKINNING
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
#endif`,r1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l1=`#ifdef USE_TRANSMISSION
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
#endif`,c1=`#ifdef USE_TRANSMISSION
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m1=`uniform sampler2D t2D;
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`#include <common>
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
}`,S1=`#if DEPTH_PACKING == 3200
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
}`,M1=`#define DISTANCE
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
}`,E1=`#define DISTANCE
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`uniform float scale;
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
}`,C1=`uniform vec3 diffuse;
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
}`,b1=`#include <common>
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
}`,R1=`uniform vec3 diffuse;
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
}`,P1=`#define LAMBERT
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
}`,L1=`#define LAMBERT
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
}`,D1=`#define MATCAP
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
}`,I1=`#define MATCAP
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
}`,N1=`#define NORMAL
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
}`,U1=`#define NORMAL
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
}`,O1=`#define PHONG
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
}`,F1=`#define PHONG
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
}`,k1=`#define STANDARD
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
}`,z1=`#define STANDARD
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
}`,B1=`#define TOON
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
}`,H1=`#define TOON
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
}`,G1=`uniform float size;
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
}`,V1=`uniform vec3 diffuse;
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
}`,W1=`#include <common>
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
}`,X1=`uniform vec3 color;
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
}`,j1=`uniform float rotation;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:mM,alphahash_pars_fragment:gM,alphamap_fragment:vM,alphamap_pars_fragment:_M,alphatest_fragment:yM,alphatest_pars_fragment:xM,aomap_fragment:SM,aomap_pars_fragment:MM,batching_pars_vertex:EM,batching_vertex:wM,begin_vertex:TM,beginnormal_vertex:AM,bsdfs:CM,iridescence_fragment:bM,bumpmap_pars_fragment:RM,clipping_planes_fragment:PM,clipping_planes_pars_fragment:LM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:IM,color_fragment:NM,color_pars_fragment:UM,color_pars_vertex:OM,color_vertex:FM,common:kM,cube_uv_reflection_fragment:zM,defaultnormal_vertex:BM,displacementmap_pars_vertex:HM,displacementmap_vertex:GM,emissivemap_fragment:VM,emissivemap_pars_fragment:WM,colorspace_fragment:XM,colorspace_pars_fragment:jM,envmap_fragment:YM,envmap_common_pars_fragment:qM,envmap_pars_fragment:$M,envmap_pars_vertex:ZM,envmap_physical_pars_fragment:lE,envmap_vertex:KM,fog_vertex:QM,fog_pars_vertex:JM,fog_fragment:eE,fog_pars_fragment:tE,gradientmap_pars_fragment:nE,lightmap_fragment:iE,lightmap_pars_fragment:rE,lights_lambert_fragment:sE,lights_lambert_pars_fragment:oE,lights_pars_begin:aE,lights_toon_fragment:cE,lights_toon_pars_fragment:uE,lights_phong_fragment:hE,lights_phong_pars_fragment:dE,lights_physical_fragment:fE,lights_physical_pars_fragment:pE,lights_fragment_begin:mE,lights_fragment_maps:gE,lights_fragment_end:vE,logdepthbuf_fragment:_E,logdepthbuf_pars_fragment:yE,logdepthbuf_pars_vertex:xE,logdepthbuf_vertex:SE,map_fragment:ME,map_pars_fragment:EE,map_particle_fragment:wE,map_particle_pars_fragment:TE,metalnessmap_fragment:AE,metalnessmap_pars_fragment:CE,morphcolor_vertex:bE,morphnormal_vertex:RE,morphtarget_pars_vertex:PE,morphtarget_vertex:LE,normal_fragment_begin:DE,normal_fragment_maps:IE,normal_pars_fragment:NE,normal_pars_vertex:UE,normal_vertex:OE,normalmap_pars_fragment:FE,clearcoat_normal_fragment_begin:kE,clearcoat_normal_fragment_maps:zE,clearcoat_pars_fragment:BE,iridescence_pars_fragment:HE,opaque_fragment:GE,packing:VE,premultiplied_alpha_fragment:WE,project_vertex:XE,dithering_fragment:jE,dithering_pars_fragment:YE,roughnessmap_fragment:qE,roughnessmap_pars_fragment:$E,shadowmap_pars_fragment:ZE,shadowmap_pars_vertex:KE,shadowmap_vertex:QE,shadowmask_pars_fragment:JE,skinbase_vertex:e1,skinning_pars_vertex:t1,skinning_vertex:n1,skinnormal_vertex:i1,specularmap_fragment:r1,specularmap_pars_fragment:s1,tonemapping_fragment:o1,tonemapping_pars_fragment:a1,transmission_fragment:l1,transmission_pars_fragment:c1,uv_pars_fragment:u1,uv_pars_vertex:h1,uv_vertex:d1,worldpos_vertex:f1,background_vert:p1,background_frag:m1,backgroundCube_vert:g1,backgroundCube_frag:v1,cube_vert:_1,cube_frag:y1,depth_vert:x1,depth_frag:S1,distanceRGBA_vert:M1,distanceRGBA_frag:E1,equirect_vert:w1,equirect_frag:T1,linedashed_vert:A1,linedashed_frag:C1,meshbasic_vert:b1,meshbasic_frag:R1,meshlambert_vert:P1,meshlambert_frag:L1,meshmatcap_vert:D1,meshmatcap_frag:I1,meshnormal_vert:N1,meshnormal_frag:U1,meshphong_vert:O1,meshphong_frag:F1,meshphysical_vert:k1,meshphysical_frag:z1,meshtoon_vert:B1,meshtoon_frag:H1,points_vert:G1,points_frag:V1,shadow_vert:W1,shadow_frag:X1,sprite_vert:j1,sprite_frag:Y1},le={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},si={basic:{uniforms:en([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:en([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new He(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:en([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:en([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:en([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new He(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:en([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:en([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:en([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:en([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:en([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:en([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:en([le.common,le.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:en([le.lights,le.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};si.physical={uniforms:en([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const $a={r:0,b:0,g:0};function q1(t,e,n,i,r,s,o){const a=new He(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function _(m,u){let v=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),v=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===pc)?(h===void 0&&(h=new de(new At(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:js(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=nt.getTransfer(g.colorSpace)!==at,(d!==g||f!==g.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,d=g,f=g.version,p=t.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new de(new Ys(2,2),new Br({name:"BackgroundMaterial",uniforms:js(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=nt.getTransfer(g.colorSpace)!==at,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,f=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,u){m.getRGB($a,Iv(t)),i.buffers.color.setClear($a.r,$a.g,$a.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:_}}function $1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function d(I,F,X,$,N){let U=!1;if(o){const z=y($,X,F);c!==z&&(c=z,p(c.object)),U=u(I,$,X,N),U&&v(I,$,X,N)}else{const z=F.wireframe===!0;(c.geometry!==$.id||c.program!==X.id||c.wireframe!==z)&&(c.geometry=$.id,c.program=X.id,c.wireframe=z,U=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(U||h)&&(h=!1,D(I,F,X,$),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function y(I,F,X){const $=X.wireframe===!0;let N=a[I.id];N===void 0&&(N={},a[I.id]=N);let U=N[F.id];U===void 0&&(U={},N[F.id]=U);let z=U[$];return z===void 0&&(z=m(f()),U[$]=z),z}function m(I){const F=[],X=[],$=[];for(let N=0;N<r;N++)F[N]=0,X[N]=0,$[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:$,object:I,attributes:{},index:null}}function u(I,F,X,$){const N=c.attributes,U=F.attributes;let z=0;const Z=X.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const K=N[Q];let ce=U[Q];if(ce===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;z++}return c.attributesNum!==z||c.index!==$}function v(I,F,X,$){const N={},U=F.attributes;let z=0;const Z=X.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let K=U[Q];K===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),N[Q]=ce,z++}c.attributes=N,c.attributesNum=z,c.index=$}function g(){const I=c.newAttributes;for(let F=0,X=I.length;F<X;F++)I[F]=0}function x(I){C(I,0)}function C(I,F){const X=c.newAttributes,$=c.enabledAttributes,N=c.attributeDivisors;X[I]=1,$[I]===0&&(t.enableVertexAttribArray(I),$[I]=1),N[I]!==F&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),N[I]=F)}function T(){const I=c.newAttributes,F=c.enabledAttributes;for(let X=0,$=F.length;X<$;X++)F[X]!==I[X]&&(t.disableVertexAttribArray(X),F[X]=0)}function w(I,F,X,$,N,U,z){z===!0?t.vertexAttribIPointer(I,F,X,N,U):t.vertexAttribPointer(I,F,X,$,N,U)}function D(I,F,X,$){if(i.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const N=$.attributes,U=X.getAttributes(),z=F.defaultAttributeValues;for(const Z in U){const Q=U[Z];if(Q.location>=0){let Y=N[Z];if(Y===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){const K=Y.normalized,ce=Y.itemSize,ye=n.get(Y);if(ye===void 0)continue;const xe=ye.buffer,Ue=ye.type,Oe=ye.bytesPerElement,Re=i.isWebGL2===!0&&(Ue===t.INT||Ue===t.UNSIGNED_INT||Y.gpuType===gv);if(Y.isInterleavedBufferAttribute){const qe=Y.data,H=qe.stride,zt=Y.offset;if(qe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<Q.locationSize;Ae++)C(Q.location+Ae,qe.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Ae=0;Ae<Q.locationSize;Ae++)x(Q.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let Ae=0;Ae<Q.locationSize;Ae++)w(Q.location+Ae,ce/Q.locationSize,Ue,K,H*Oe,(zt+ce/Q.locationSize*Ae)*Oe,Re)}else{if(Y.isInstancedBufferAttribute){for(let qe=0;qe<Q.locationSize;qe++)C(Q.location+qe,Y.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let qe=0;qe<Q.locationSize;qe++)x(Q.location+qe);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let qe=0;qe<Q.locationSize;qe++)w(Q.location+qe,ce/Q.locationSize,Ue,K,ce*Oe,ce/Q.locationSize*qe*Oe,Re)}}else if(z!==void 0){const K=z[Z];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Q.location,K);break;case 3:t.vertexAttrib3fv(Q.location,K);break;case 4:t.vertexAttrib4fv(Q.location,K);break;default:t.vertexAttrib1fv(Q.location,K)}}}}T()}function S(){G();for(const I in a){const F=a[I];for(const X in F){const $=F[X];for(const N in $)_($[N].object),delete $[N];delete F[X]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;const F=a[I.id];for(const X in F){const $=F[X];for(const N in $)_($[N].object),delete $[N];delete F[X]}delete a[I.id]}function k(I){for(const F in a){const X=a[F];if(X[I.id]===void 0)continue;const $=X[I.id];for(const N in $)_($[N].object),delete $[N];delete X[I.id]}}function G(){J(),h=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:J,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:k,initAttributes:g,enableAttribute:x,disableUnusedAttributes:T}}function Z1(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,d){t.drawArrays(s,h,d),n.update(d,s,1)}function l(h,d,f){if(f===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,h,d,f),n.update(d,s,f)}function c(h,d,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f;_++)this.render(h[_],d[_]);else{p.multiDrawArraysWEBGL(s,h,0,d,0,f);let _=0;for(let y=0;y<f;y++)_+=d[y];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function K1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,x=o||e.has("OES_texture_float"),C=g&&x,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:C,maxSamples:T}}function Q1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new yi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?h(null):c();else{const v=s?0:i,g=v*4;let x=u.clippingState||null;l.value=x,x=h(_,f,g,p);for(let C=0;C!==g;++C)x[C]=n[C];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,_){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=p+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,x=p;g!==y;++g,x+=4)o.copy(d[g]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function J1(t){let e=new WeakMap;function n(o,a){return a===Ph?o.mapping=Vs:a===Lh&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ph||a===Lh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hM(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Bd extends Nv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Es=4,cm=[.125,.215,.35,.446,.526,.582],Tr=20,_u=new Bd,um=new He;let yu=null,xu=0,Su=0;const Mr=(1+Math.sqrt(5))/2,os=1/Mr,hm=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Mr,os),new R(0,Mr,-os),new R(os,0,Mr),new R(-os,0,Mr),new R(Mr,os,0),new R(-Mr,os,0)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){yu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,xu,Su),e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:ea,format:Zn,colorSpace:bi,depthBuffer:!1},r=fm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ew(s)),this._blurMaterial=tw(s,e,n)}return r}_compileMaterial(e){const n=new de(this._lodPlanes[0],e);this._renderer.compile(n,_u)}_sceneToCubeUV(e,n,i,r){const a=new In(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(um),h.toneMapping=sr,h.autoClear=!1;const p=new ca({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),_=new de(new At,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(um),y=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;Za(r,v*g,u>2?g:0,g,g),h.setRenderTarget(r),y&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Za(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,_u)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hm[(r-1)%hm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new de(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Tr-1),y=s/_,m=isFinite(s)?1+Math.floor(h*y):Tr;m>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Tr}`);const u=[];let v=0;for(let w=0;w<Tr;++w){const D=w/y,S=Math.exp(-D*D/2);u.push(S),w===0?v+=S:w<m&&(v+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const x=this._sizeLods[r],C=3*x*(r>g-Es?r-g+Es:0),T=4*(this._cubeSize-x);Za(n,C,T,3*x,2*x),l.setRenderTarget(n),l.render(d,_u)}}function ew(t){const e=[],n=[],i=[];let r=t;const s=t-Es+1+cm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Es?l=cm[o-t+Es-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,y=3,m=2,u=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),x=new Float32Array(u*_*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,D=T>2?0:-1,S=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];v.set(S,y*_*T),g.set(f,m*_*T);const E=[T,T,T,T,T,T];x.set(E,u*_*T)}const C=new ft;C.setAttribute("position",new ci(v,y)),C.setAttribute("uv",new ci(g,m)),C.setAttribute("faceIndex",new ci(x,u)),e.push(C),r>Es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function fm(t,e,n){const i=new zr(t,e,n);return i.texture.mapping=pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Za(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function tw(t,e,n){const i=new Float32Array(Tr),r=new R(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hd(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function pm(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hd(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function mm(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Hd(){return`

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
	`}function nw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ph||l===Lh,h=l===Vs||l===Ws;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new dm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&r(d)){n===null&&(n=new dm(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function iw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rw(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,_=d.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,x=v.length;g<x;g+=3){const C=v[g+0],T=v[g+1],w=v[g+2];f.push(C,T,T,w,w,C)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,x=v.length/3-1;g<x;g+=3){const C=g+0,T=g+1,w=g+2;f.push(C,T,T,w,w,C)}}else return;const m=new(Av(f)?Dv:Lv)(f,1);m.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function sw(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,_){t.drawElements(s,_,a,p*l),n.update(_,s,1)}function d(p,_,y){if(y===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,_,a,p*l,y),n.update(_,s,y)}function f(p,_,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<y;u++)this.render(p[u]/l,_[u]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,y);let u=0;for(let v=0;v<y;v++)u+=_[v];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function ow(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function aw(t,e){return t[0]-e[0]}function lw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function cw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ft,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(h);if(m===void 0||m.count!==y){let F=function(){J.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const g=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),C===!0&&(S=3);let E=h.attributes.position.count*S,k=1;E>e.maxTextureSize&&(k=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const G=new Float32Array(E*k*4*y),J=new Rv(G,E,k,y);J.type=qi,J.needsUpdate=!0;const I=S*4;for(let X=0;X<y;X++){const $=T[X],N=w[X],U=D[X],z=E*k*4*X;for(let Z=0;Z<$.count;Z++){const Q=Z*I;g===!0&&(o.fromBufferAttribute($,Z),G[z+Q+0]=o.x,G[z+Q+1]=o.y,G[z+Q+2]=o.z,G[z+Q+3]=0),x===!0&&(o.fromBufferAttribute(N,Z),G[z+Q+4]=o.x,G[z+Q+5]=o.y,G[z+Q+6]=o.z,G[z+Q+7]=0),C===!0&&(o.fromBufferAttribute(U,Z),G[z+Q+8]=o.x,G[z+Q+9]=o.y,G[z+Q+10]=o.z,G[z+Q+11]=U.itemSize===4?o.w:1)}}m={count:y,texture:J,size:new ge(E,k)},s.set(h,m),h.addEventListener("dispose",F)}let u=0;for(let g=0;g<f.length;g++)u+=f[g];const v=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",f),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let y=i[h.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[h.id]=y}for(let x=0;x<_;x++){const C=y[x];C[0]=x,C[1]=f[x]}y.sort(lw);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(aw);const m=h.morphAttributes.position,u=h.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const C=a[x],T=C[0],w=C[1];T!==Number.MAX_SAFE_INTEGER&&w?(m&&h.getAttribute("morphTarget"+x)!==m[T]&&h.setAttribute("morphTarget"+x,m[T]),u&&h.getAttribute("morphNormal"+x)!==u[T]&&h.setAttribute("morphNormal"+x,u[T]),r[x]=w,v+=w):(m&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),u&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const g=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function uw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Fv extends Sn{constructor(e,n,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:Dr,h!==Dr&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Dr&&(i=Yi),i===void 0&&h===Xs&&(i=Lr),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const kv=new Sn,zv=new Fv(1,1);zv.compareFunction=Tv;const Bv=new Rv,Hv=new qS,Gv=new Uv,gm=[],vm=[],_m=new Float32Array(16),ym=new Float32Array(9),xm=new Float32Array(4);function eo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=gm[r];if(s===void 0&&(s=new Float32Array(r),gm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function _c(t,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;xm.set(i),t.uniformMatrix2fv(this.addr,!1,xm),Lt(n,i)}}function gw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;ym.set(i),t.uniformMatrix3fv(this.addr,!1,ym),Lt(n,i)}}function vw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;_m.set(i),t.uniformMatrix4fv(this.addr,!1,_m),Lt(n,i)}}function _w(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function Mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function Aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?zv:kv;n.setTexture2D(e||s,r)}function Cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Hv,r)}function bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Gv,r)}function Rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Bv,r)}function Pw(t){switch(t){case 5126:return hw;case 35664:return dw;case 35665:return fw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return vw;case 5124:case 35670:return _w;case 35667:case 35671:return yw;case 35668:case 35672:return xw;case 35669:case 35673:return Sw;case 5125:return Mw;case 36294:return Ew;case 36295:return ww;case 36296:return Tw;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Rw}}function Lw(t,e){t.uniform1fv(this.addr,e)}function Dw(t,e){const n=eo(e,this.size,2);t.uniform2fv(this.addr,n)}function Iw(t,e){const n=eo(e,this.size,3);t.uniform3fv(this.addr,n)}function Nw(t,e){const n=eo(e,this.size,4);t.uniform4fv(this.addr,n)}function Uw(t,e){const n=eo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ow(t,e){const n=eo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Fw(t,e){const n=eo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function kw(t,e){t.uniform1iv(this.addr,e)}function zw(t,e){t.uniform2iv(this.addr,e)}function Bw(t,e){t.uniform3iv(this.addr,e)}function Hw(t,e){t.uniform4iv(this.addr,e)}function Gw(t,e){t.uniform1uiv(this.addr,e)}function Vw(t,e){t.uniform2uiv(this.addr,e)}function Ww(t,e){t.uniform3uiv(this.addr,e)}function Xw(t,e){t.uniform4uiv(this.addr,e)}function jw(t,e,n){const i=this.cache,r=e.length,s=_c(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||kv,s[o])}function Yw(t,e,n){const i=this.cache,r=e.length,s=_c(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Hv,s[o])}function qw(t,e,n){const i=this.cache,r=e.length,s=_c(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Gv,s[o])}function $w(t,e,n){const i=this.cache,r=e.length,s=_c(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Bv,s[o])}function Zw(t){switch(t){case 5126:return Lw;case 35664:return Dw;case 35665:return Iw;case 35666:return Nw;case 35674:return Uw;case 35675:return Ow;case 35676:return Fw;case 5124:case 35670:return kw;case 35667:case 35671:return zw;case 35668:case 35672:return Bw;case 35669:case 35673:return Hw;case 5125:return Gw;case 36294:return Vw;case 36295:return Ww;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return $w}}class Kw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Pw(n.type)}}class Qw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Zw(n.type)}}class Jw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Mu=/(\w+)(\])?(\[|\.)?/g;function Sm(t,e){t.seq.push(e),t.map[e.id]=e}function eT(t,e,n){const i=t.name,r=i.length;for(Mu.lastIndex=0;;){const s=Mu.exec(i),o=Mu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Sm(n,c===void 0?new Kw(a,t,e):new Qw(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Jw(a),Sm(n,d)),n=d}}}class yl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);eT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Mm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const tT=37297;let nT=0;function iT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function rT(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===ql&&n===Yl?i="LinearDisplayP3ToLinearSRGB":e===Yl&&n===ql&&(i="LinearSRGBToLinearDisplayP3"),t){case bi:case mc:return[i,"LinearTransferOETF"];case Ut:case Od:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+iT(t.getShaderSource(e),o)}else return r}function sT(t,e){const n=rT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function oT(t,e){let n;switch(e){case sS:n="Linear";break;case oS:n="Reinhard";break;case aS:n="OptimizedCineon";break;case pv:n="ACESFilmic";break;case cS:n="AgX";break;case lS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function aT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ws).join(`
`)}function lT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ws).join(`
`)}function cT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function uT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ws(t){return t!==""}function wm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(t){return t.replace(hT,fT)}const dT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fT(t,e){let n=Ge[e];if(n===void 0){const i=dT.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oh(n)}const pT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(t){return t.replace(pT,mT)}function mT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===dv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ix?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function vT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vs:case Ws:e="ENVMAP_TYPE_CUBE";break;case pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _T(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function yT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case fv:e="ENVMAP_BLENDING_MULTIPLY";break;case iS:e="ENVMAP_BLENDING_MIX";break;case rS:e="ENVMAP_BLENDING_ADD";break}return e}function xT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ST(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=gT(n),c=vT(n),h=_T(n),d=yT(n),f=xT(n),p=n.isWebGL2?"":aT(n),_=lT(n),y=cT(s),m=r.createProgram();let u,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ws).join(`
`),u.length>0&&(u+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ws).join(`
`),v.length>0&&(v+=`
`)):(u=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),v=[p,Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?Ge.tonemapping_pars_fragment:"",n.toneMapping!==sr?oT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,sT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ws).join(`
`)),o=Oh(o),o=wm(o,n),o=Tm(o,n),a=Oh(a),a=wm(a,n),a=Tm(a,n),o=Am(o),a=Am(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=g+u+o,C=g+v+a,T=Mm(r,r.VERTEX_SHADER,x),w=Mm(r,r.FRAGMENT_SHADER,C);r.attachShader(m,T),r.attachShader(m,w),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(G){if(t.debug.checkShaderErrors){const J=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(T).trim(),F=r.getShaderInfoLog(w).trim();let X=!0,$=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,T,w);else{const N=Em(r,T,"vertex"),U=Em(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+N+`
`+U)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(I===""||F==="")&&($=!1);$&&(G.diagnostics={runnable:X,programLog:J,vertexShader:{log:I,prefix:u},fragmentShader:{log:F,prefix:v}})}r.deleteShader(T),r.deleteShader(w),S=new yl(r,m),E=uT(r,m)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(m,tT)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=w,this}let MT=0;class ET{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new wT(e),n.set(e,i)),i}}class wT{constructor(e){this.id=MT++,this.code=e,this.usedTimes=0}}function TT(t,e,n,i,r,s,o){const a=new kd,l=new ET,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function m(S,E,k,G,J){const I=G.fog,F=J.geometry,X=S.isMeshStandardMaterial?G.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||X),N=$&&$.mapping===pc?$.image.height:null,U=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Z=z!==void 0?z.length:0;let Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let Y,K,ce,ye;if(U){const xt=si[U];Y=xt.vertexShader,K=xt.fragmentShader}else Y=S.vertexShader,K=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);const xe=t.getRenderTarget(),Ue=J.isInstancedMesh===!0,Oe=J.isBatchedMesh===!0,Re=!!S.map,qe=!!S.matcap,H=!!$,zt=!!S.aoMap,Ae=!!S.lightMap,De=!!S.bumpMap,Se=!!S.normalMap,st=!!S.displacementMap,ke=!!S.emissiveMap,b=!!S.metalnessMap,M=!!S.roughnessMap,B=S.anisotropy>0,re=S.clearcoat>0,te=S.iridescence>0,se=S.sheen>0,Me=S.transmission>0,he=B&&!!S.anisotropyMap,_e=re&&!!S.clearcoatMap,be=re&&!!S.clearcoatNormalMap,ze=re&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,et=te&&!!S.iridescenceThicknessMap,Ve=se&&!!S.sheenColorMap,Ie=se&&!!S.sheenRoughnessMap,Te=!!S.specularMap,fe=!!S.specularColorMap,P=!!S.specularIntensityMap,oe=Me&&!!S.transmissionMap,Ee=Me&&!!S.thicknessMap,ve=!!S.gradientMap,ne=!!S.alphaMap,L=S.alphaTest>0,ae=!!S.alphaHash,ue=!!S.extensions,Pe=!!F.attributes.uv1,Ce=!!F.attributes.uv2,$e=!!F.attributes.uv3;let Ze=sr;return S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ze=t.toneMapping),{isWebGL2:h,shaderID:U,shaderType:S.type,shaderName:S.name,vertexShader:Y,fragmentShader:K,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Oe,instancing:Ue,instancingColor:Ue&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:bi,map:Re,matcap:qe,envMap:H,envMapMode:H&&$.mapping,envMapCubeUVHeight:N,aoMap:zt,lightMap:Ae,bumpMap:De,normalMap:Se,displacementMap:f&&st,emissiveMap:ke,normalMapObjectSpace:Se&&S.normalMapType===SS,normalMapTangentSpace:Se&&S.normalMapType===wv,metalnessMap:b,roughnessMap:M,anisotropy:B,anisotropyMap:he,clearcoat:re,clearcoatMap:_e,clearcoatNormalMap:be,clearcoatRoughnessMap:ze,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:et,sheen:se,sheenColorMap:Ve,sheenRoughnessMap:Ie,specularMap:Te,specularColorMap:fe,specularIntensityMap:P,transmission:Me,transmissionMap:oe,thicknessMap:Ee,gradientMap:ve,opaque:S.transparent===!1&&S.blending===Is,alphaMap:ne,alphaTest:L,alphaHash:ae,combine:S.combine,mapUv:Re&&y(S.map.channel),aoMapUv:zt&&y(S.aoMap.channel),lightMapUv:Ae&&y(S.lightMap.channel),bumpMapUv:De&&y(S.bumpMap.channel),normalMapUv:Se&&y(S.normalMap.channel),displacementMapUv:st&&y(S.displacementMap.channel),emissiveMapUv:ke&&y(S.emissiveMap.channel),metalnessMapUv:b&&y(S.metalnessMap.channel),roughnessMapUv:M&&y(S.roughnessMap.channel),anisotropyMapUv:he&&y(S.anisotropyMap.channel),clearcoatMapUv:_e&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&y(S.sheenRoughnessMap.channel),specularMapUv:Te&&y(S.specularMap.channel),specularColorMapUv:fe&&y(S.specularColorMap.channel),specularIntensityMapUv:P&&y(S.specularIntensityMap.channel),transmissionMapUv:oe&&y(S.transmissionMap.channel),thicknessMapUv:Ee&&y(S.thicknessMap.channel),alphaMapUv:ne&&y(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Se||B),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Ce,vertexUv3s:$e,pointsUvs:J.isPoints===!0&&!!F.attributes.uv&&(Re||ne),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ze,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Re&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nn,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)E.push(k),E.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(v(E,S),g(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function g(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function x(S){const E=_[S.type];let k;if(E){const G=si[E];k=aM.clone(G.uniforms)}else k=S.uniforms;return k}function C(S,E){let k;for(let G=0,J=c.length;G<J;G++){const I=c[G];if(I.cacheKey===E){k=I,++k.usedTimes;break}}return k===void 0&&(k=new ST(t,E,S,s),c.push(k)),k}function T(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:C,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:D}}function AT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function CT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,_,y,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:y,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=y,u.group=m),e++,u}function a(d,f,p,_,y,m){const u=o(d,f,p,_,y,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,f,p,_,y,m){const u=o(d,f,p,_,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||CT),i.length>1&&i.sort(f||bm),r.length>1&&r.sort(f||bm)}function h(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function bT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Rm,t.set(i,[o])):r>=s.length?(o=new Rm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function RT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new R,color:new He};break;case"SpotLight":n={position:new R,direction:new R,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new R,halfWidth:new R,halfHeight:new R};break}return t[e.id]=n,n}}}function PT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LT=0;function DT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function IT(t,e){const n=new RT,i=PT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new R);const s=new R,o=new mt,a=new mt;function l(h,d){let f=0,p=0,_=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let y=0,m=0,u=0,v=0,g=0,x=0,C=0,T=0,w=0,D=0,S=0;h.sort(DT);const E=d===!0?Math.PI:1;for(let G=0,J=h.length;G<J;G++){const I=h[G],F=I.color,X=I.intensity,$=I.distance,N=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=F.r*X*E,p+=F.g*X*E,_+=F.b*X*E;else if(I.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(I.sh.coefficients[U],X);S++}else if(I.isDirectionalLight){const U=n.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const z=I.shadow,Z=i.get(I);Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=N,r.directionalShadowMatrix[y]=I.shadow.matrix,x++}r.directional[y]=U,y++}else if(I.isSpotLight){const U=n.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(F).multiplyScalar(X*E),U.distance=$,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,r.spot[u]=U;const z=I.shadow;if(I.map&&(r.spotLightMap[w]=I.map,w++,z.updateMatrices(I),I.castShadow&&D++),r.spotLightMatrix[u]=z.matrix,I.castShadow){const Z=i.get(I);Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,r.spotShadow[u]=Z,r.spotShadowMap[u]=N,T++}u++}else if(I.isRectAreaLight){const U=n.get(I);U.color.copy(F).multiplyScalar(X),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=U,v++}else if(I.isPointLight){const U=n.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*E),U.distance=I.distance,U.decay=I.decay,I.castShadow){const z=I.shadow,Z=i.get(I);Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,Z.shadowCameraNear=z.camera.near,Z.shadowCameraFar=z.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=I.shadow.matrix,C++}r.point[m]=U,m++}else if(I.isHemisphereLight){const U=n.get(I);U.skyColor.copy(I.color).multiplyScalar(X*E),U.groundColor.copy(I.groundColor).multiplyScalar(X*E),r.hemi[g]=U,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=_;const k=r.hash;(k.directionalLength!==y||k.pointLength!==m||k.spotLength!==u||k.rectAreaLength!==v||k.hemiLength!==g||k.numDirectionalShadows!==x||k.numPointShadows!==C||k.numSpotShadows!==T||k.numSpotMaps!==w||k.numLightProbes!==S)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=T+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=S,k.directionalLength=y,k.pointLength=m,k.spotLength=u,k.rectAreaLength=v,k.hemiLength=g,k.numDirectionalShadows=x,k.numPointShadows=C,k.numSpotShadows=T,k.numSpotMaps=w,k.numLightProbes=S,r.version=LT++)}function c(h,d){let f=0,p=0,_=0,y=0,m=0;const u=d.matrixWorldInverse;for(let v=0,g=h.length;v<g;v++){const x=h[v];if(x.isDirectionalLight){const C=r.directional[f];C.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),f++}else if(x.isSpotLight){const C=r.spot[_];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),_++}else if(x.isRectAreaLight){const C=r.rectArea[y];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(x.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(u),p++}else if(x.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function Pm(t,e){const n=new IT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function NT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Pm(t,e),n.set(s,[l])):o>=a.length?(l=new Pm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class UT extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OT extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kT=`uniform sampler2D shadow_pass;
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
}`;function zT(t,e,n){let i=new zd;const r=new ge,s=new ge,o=new Ft,a=new UT({depthPacking:xS}),l=new OT,c={},h=n.maxTextureSize,d={[cr]:dn,[dn]:cr,[Nn]:Nn},f=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:FT,fragmentShader:kT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new ft;_.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new de(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dv;let u=this.type;this.render=function(T,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=t.getRenderTarget(),E=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),G=t.state;G.setBlending(rr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const J=u!==gi&&this.type===gi,I=u===gi&&this.type!==gi;for(let F=0,X=T.length;F<X;F++){const $=T[F],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const U=N.getFrameExtents();if(r.multiply(U),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,N.mapSize.y=s.y)),N.map===null||J===!0||I===!0){const Z=this.type!==gi?{minFilter:nn,magFilter:nn}:{};N.map!==null&&N.map.dispose(),N.map=new zr(r.x,r.y,Z),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const z=N.getViewportCount();for(let Z=0;Z<z;Z++){const Q=N.getViewport(Z);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),G.viewport(o),N.updateMatrices($,Z),i=N.getFrustum(),x(w,D,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===gi&&v(N,D),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(S,E,k)};function v(T,w){const D=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zr(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,D,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,D,p,y,null)}function g(T,w,D,S){let E=null;const k=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)E=k;else if(E=D.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=E.uuid,J=w.uuid;let I=c[G];I===void 0&&(I={},c[G]=I);let F=I[J];F===void 0&&(F=E.clone(),I[J]=F,w.addEventListener("dispose",C)),E=F}if(E.visible=w.visible,E.wireframe=w.wireframe,S===gi?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:d[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=t.properties.get(E);G.light=D}return E}function x(T,w,D,S,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===gi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const J=e.update(T),I=T.material;if(Array.isArray(I)){const F=J.groups;for(let X=0,$=F.length;X<$;X++){const N=F[X],U=I[N.materialIndex];if(U&&U.visible){const z=g(T,U,S,E);T.onBeforeShadow(t,T,w,D,J,z,N),t.renderBufferDirect(D,null,J,z,T,N),T.onAfterShadow(t,T,w,D,J,z,N)}}}else if(I.visible){const F=g(T,I,S,E);T.onBeforeShadow(t,T,w,D,J,F,null),t.renderBufferDirect(D,null,J,F,T,null),T.onAfterShadow(t,T,w,D,J,F,null)}}const G=T.children;for(let J=0,I=G.length;J<I;J++)x(G[J],w,D,S,E)}function C(T){T.target.removeEventListener("dispose",C);for(const D in c){const S=c[D],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function BT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ae=new Ft;let ue=null;const Pe=new Ft(0,0,0,0);return{setMask:function(Ce){ue!==Ce&&!L&&(t.colorMask(Ce,Ce,Ce,Ce),ue=Ce)},setLocked:function(Ce){L=Ce},setClear:function(Ce,$e,Ze,vt,xt){xt===!0&&(Ce*=vt,$e*=vt,Ze*=vt),ae.set(Ce,$e,Ze,vt),Pe.equals(ae)===!1&&(t.clearColor(Ce,$e,Ze,vt),Pe.copy(ae))},reset:function(){L=!1,ue=null,Pe.set(-1,0,0,0)}}}function s(){let L=!1,ae=null,ue=null,Pe=null;return{setTest:function(Ce){Ce?Oe(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(Ce){ae!==Ce&&!L&&(t.depthMask(Ce),ae=Ce)},setFunc:function(Ce){if(ue!==Ce){switch(Ce){case Zx:t.depthFunc(t.NEVER);break;case Kx:t.depthFunc(t.ALWAYS);break;case Qx:t.depthFunc(t.LESS);break;case Xl:t.depthFunc(t.LEQUAL);break;case Jx:t.depthFunc(t.EQUAL);break;case eS:t.depthFunc(t.GEQUAL);break;case tS:t.depthFunc(t.GREATER);break;case nS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=Ce}},setLocked:function(Ce){L=Ce},setClear:function(Ce){Pe!==Ce&&(t.clearDepth(Ce),Pe=Ce)},reset:function(){L=!1,ae=null,ue=null,Pe=null}}}function o(){let L=!1,ae=null,ue=null,Pe=null,Ce=null,$e=null,Ze=null,vt=null,xt=null;return{setTest:function(Qe){L||(Qe?Oe(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(Qe){ae!==Qe&&!L&&(t.stencilMask(Qe),ae=Qe)},setFunc:function(Qe,wt,ei){(ue!==Qe||Pe!==wt||Ce!==ei)&&(t.stencilFunc(Qe,wt,ei),ue=Qe,Pe=wt,Ce=ei)},setOp:function(Qe,wt,ei){($e!==Qe||Ze!==wt||vt!==ei)&&(t.stencilOp(Qe,wt,ei),$e=Qe,Ze=wt,vt=ei)},setLocked:function(Qe){L=Qe},setClear:function(Qe){xt!==Qe&&(t.clearStencil(Qe),xt=Qe)},reset:function(){L=!1,ae=null,ue=null,Pe=null,Ce=null,$e=null,Ze=null,vt=null,xt=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let f={},p={},_=new WeakMap,y=[],m=null,u=!1,v=null,g=null,x=null,C=null,T=null,w=null,D=null,S=new He(0,0,0),E=0,k=!1,G=null,J=null,I=null,F=null,X=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,U=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=U>=1):z.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=U>=2);let Z=null,Q={};const Y=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),ce=new Ft().fromArray(Y),ye=new Ft().fromArray(K);function xe(L,ae,ue,Pe){const Ce=new Uint8Array(4),$e=t.createTexture();t.bindTexture(L,$e),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<ue;Ze++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,Ce):t.texImage2D(ae+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ce);return $e}const Ue={};Ue[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),Ue[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ue[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(t.DEPTH_TEST),l.setFunc(Xl),ke(!1),b(hp),Oe(t.CULL_FACE),Se(rr);function Oe(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function Re(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function qe(L,ae){return p[L]!==ae?(t.bindFramebuffer(L,ae),p[L]=ae,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ae),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function H(L,ae){let ue=y,Pe=!1;if(L)if(ue=_.get(ae),ue===void 0&&(ue=[],_.set(ae,ue)),L.isWebGLMultipleRenderTargets){const Ce=L.texture;if(ue.length!==Ce.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let $e=0,Ze=Ce.length;$e<Ze;$e++)ue[$e]=t.COLOR_ATTACHMENT0+$e;ue.length=Ce.length,Pe=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,Pe=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,Pe=!0);Pe&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function zt(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const Ae={[wr]:t.FUNC_ADD,[Ux]:t.FUNC_SUBTRACT,[Ox]:t.FUNC_REVERSE_SUBTRACT};if(i)Ae[mp]=t.MIN,Ae[gp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ae[mp]=L.MIN_EXT,Ae[gp]=L.MAX_EXT)}const De={[Fx]:t.ZERO,[kx]:t.ONE,[zx]:t.SRC_COLOR,[bh]:t.SRC_ALPHA,[Xx]:t.SRC_ALPHA_SATURATE,[Vx]:t.DST_COLOR,[Hx]:t.DST_ALPHA,[Bx]:t.ONE_MINUS_SRC_COLOR,[Rh]:t.ONE_MINUS_SRC_ALPHA,[Wx]:t.ONE_MINUS_DST_COLOR,[Gx]:t.ONE_MINUS_DST_ALPHA,[jx]:t.CONSTANT_COLOR,[Yx]:t.ONE_MINUS_CONSTANT_COLOR,[qx]:t.CONSTANT_ALPHA,[$x]:t.ONE_MINUS_CONSTANT_ALPHA};function Se(L,ae,ue,Pe,Ce,$e,Ze,vt,xt,Qe){if(L===rr){u===!0&&(Re(t.BLEND),u=!1);return}if(u===!1&&(Oe(t.BLEND),u=!0),L!==Nx){if(L!==v||Qe!==k){if((g!==wr||T!==wr)&&(t.blendEquation(t.FUNC_ADD),g=wr,T=wr),Qe)switch(L){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dp:t.blendFunc(t.ONE,t.ONE);break;case fp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case fp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,C=null,w=null,D=null,S.set(0,0,0),E=0,v=L,k=Qe}return}Ce=Ce||ae,$e=$e||ue,Ze=Ze||Pe,(ae!==g||Ce!==T)&&(t.blendEquationSeparate(Ae[ae],Ae[Ce]),g=ae,T=Ce),(ue!==x||Pe!==C||$e!==w||Ze!==D)&&(t.blendFuncSeparate(De[ue],De[Pe],De[$e],De[Ze]),x=ue,C=Pe,w=$e,D=Ze),(vt.equals(S)===!1||xt!==E)&&(t.blendColor(vt.r,vt.g,vt.b,xt),S.copy(vt),E=xt),v=L,k=!1}function st(L,ae){L.side===Nn?Re(t.CULL_FACE):Oe(t.CULL_FACE);let ue=L.side===dn;ae&&(ue=!ue),ke(ue),L.blending===Is&&L.transparent===!1?Se(rr):Se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Pe=L.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Oe(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){G!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),G=L)}function b(L){L!==Lx?(Oe(t.CULL_FACE),L!==J&&(L===hp?t.cullFace(t.BACK):L===Dx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),J=L}function M(L){L!==I&&(N&&t.lineWidth(L),I=L)}function B(L,ae,ue){L?(Oe(t.POLYGON_OFFSET_FILL),(F!==ae||X!==ue)&&(t.polygonOffset(ae,ue),F=ae,X=ue)):Re(t.POLYGON_OFFSET_FILL)}function re(L){L?Oe(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function te(L){L===void 0&&(L=t.TEXTURE0+$-1),Z!==L&&(t.activeTexture(L),Z=L)}function se(L,ae,ue){ue===void 0&&(Z===null?ue=t.TEXTURE0+$-1:ue=Z);let Pe=Q[ue];Pe===void 0&&(Pe={type:void 0,texture:void 0},Q[ue]=Pe),(Pe.type!==L||Pe.texture!==ae)&&(Z!==ue&&(t.activeTexture(ue),Z=ue),t.bindTexture(L,ae||Ue[L]),Pe.type=L,Pe.texture=ae)}function Me(){const L=Q[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function he(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(L){ce.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function oe(L){ye.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ye.copy(L))}function Ee(L,ae){let ue=d.get(ae);ue===void 0&&(ue=new WeakMap,d.set(ae,ue));let Pe=ue.get(L);Pe===void 0&&(Pe=t.getUniformBlockIndex(ae,L.name),ue.set(L,Pe))}function ve(L,ae){const Pe=d.get(ae).get(L);h.get(ae)!==Pe&&(t.uniformBlockBinding(ae,Pe,L.__bindingPointIndex),h.set(ae,Pe))}function ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},Z=null,Q={},p={},_=new WeakMap,y=[],m=null,u=!1,v=null,g=null,x=null,C=null,T=null,w=null,D=null,S=new He(0,0,0),E=0,k=!1,G=null,J=null,I=null,F=null,X=null,ce.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:Re,bindFramebuffer:qe,drawBuffers:H,useProgram:zt,setBlending:Se,setMaterial:st,setFlipSided:ke,setCullFace:b,setLineWidth:M,setPolygonOffset:B,setScissorTest:re,activeTexture:te,bindTexture:se,unbindTexture:Me,compressedTexImage2D:he,compressedTexImage3D:_e,texImage2D:Te,texImage3D:fe,updateUBOMapping:Ee,uniformBlockBinding:ve,texStorage2D:Ve,texStorage3D:Ie,texSubImage2D:be,texSubImage3D:ze,compressedTexSubImage2D:ee,compressedTexSubImage3D:et,scissor:P,viewport:oe,reset:ne}}function HT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,M){return p?new OffscreenCanvas(b,M):Kl("canvas")}function y(b,M,B,re){let te=1;if((b.width>re||b.height>re)&&(te=re/Math.max(b.width,b.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const se=M?Zl:Math.floor,Me=se(te*b.width),he=se(te*b.height);d===void 0&&(d=_(Me,he));const _e=B?_(Me,he):d;return _e.width=Me,_e.height=he,_e.getContext("2d").drawImage(b,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Me+"x"+he+")."),_e}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Uh(b.width)&&Uh(b.height)}function u(b){return a?!1:b.wrapS!==$n||b.wrapT!==$n||b.minFilter!==nn&&b.minFilter!==Ln}function v(b,M){return b.generateMipmaps&&M&&b.minFilter!==nn&&b.minFilter!==Ln}function g(b){t.generateMipmap(b)}function x(b,M,B,re,te=!1){if(a===!1)return M;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=M;if(M===t.RED&&(B===t.FLOAT&&(se=t.R32F),B===t.HALF_FLOAT&&(se=t.R16F),B===t.UNSIGNED_BYTE&&(se=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(se=t.R8UI),B===t.UNSIGNED_SHORT&&(se=t.R16UI),B===t.UNSIGNED_INT&&(se=t.R32UI),B===t.BYTE&&(se=t.R8I),B===t.SHORT&&(se=t.R16I),B===t.INT&&(se=t.R32I)),M===t.RG&&(B===t.FLOAT&&(se=t.RG32F),B===t.HALF_FLOAT&&(se=t.RG16F),B===t.UNSIGNED_BYTE&&(se=t.RG8)),M===t.RGBA){const Me=te?jl:nt.getTransfer(re);B===t.FLOAT&&(se=t.RGBA32F),B===t.HALF_FLOAT&&(se=t.RGBA16F),B===t.UNSIGNED_BYTE&&(se=Me===at?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function C(b,M,B){return v(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==nn&&b.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function T(b){return b===nn||b===vp||b===$c?t.NEAREST:t.LINEAR}function w(b){const M=b.target;M.removeEventListener("dispose",w),S(M),M.isVideoTexture&&h.delete(M)}function D(b){const M=b.target;M.removeEventListener("dispose",D),k(M)}function S(b){const M=i.get(b);if(M.__webglInit===void 0)return;const B=b.source,re=f.get(B);if(re){const te=re[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(b),Object.keys(re).length===0&&f.delete(B)}i.remove(b)}function E(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const B=b.source,re=f.get(B);delete re[M.__cacheKey],o.memory.textures--}function k(b){const M=b.texture,B=i.get(b),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(B.__webglFramebuffer[te]))for(let se=0;se<B.__webglFramebuffer[te].length;se++)t.deleteFramebuffer(B.__webglFramebuffer[te][se]);else t.deleteFramebuffer(B.__webglFramebuffer[te]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[te])}else{if(Array.isArray(B.__webglFramebuffer))for(let te=0;te<B.__webglFramebuffer.length;te++)t.deleteFramebuffer(B.__webglFramebuffer[te]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let te=0;te<B.__webglColorRenderbuffer.length;te++)B.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[te]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,se=M.length;te<se;te++){const Me=i.get(M[te]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(M[te])}i.remove(M),i.remove(b)}let G=0;function J(){G=0}function I(){const b=G;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),G+=1,b}function F(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function X(b,M){const B=i.get(b);if(b.isVideoTexture&&st(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const re=b.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(B,b,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function $(b,M){const B=i.get(b);if(b.version>0&&B.__version!==b.version){ce(B,b,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function N(b,M){const B=i.get(b);if(b.version>0&&B.__version!==b.version){ce(B,b,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function U(b,M){const B=i.get(b);if(b.version>0&&B.__version!==b.version){ye(B,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const z={[Dh]:t.REPEAT,[$n]:t.CLAMP_TO_EDGE,[Ih]:t.MIRRORED_REPEAT},Z={[nn]:t.NEAREST,[vp]:t.NEAREST_MIPMAP_NEAREST,[$c]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[uS]:t.LINEAR_MIPMAP_NEAREST,[Jo]:t.LINEAR_MIPMAP_LINEAR},Q={[MS]:t.NEVER,[bS]:t.ALWAYS,[ES]:t.LESS,[Tv]:t.LEQUAL,[wS]:t.EQUAL,[CS]:t.GEQUAL,[TS]:t.GREATER,[AS]:t.NOTEQUAL};function Y(b,M,B){if(B?(t.texParameteri(b,t.TEXTURE_WRAP_S,z[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,z[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,z[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Z[M.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==$n||M.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==nn&&M.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===nn||M.minFilter!==$c&&M.minFilter!==Jo||M.type===qi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ea&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(b,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function K(b,M){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",w));const re=M.source;let te=f.get(re);te===void 0&&(te={},f.set(re,te));const se=F(M);if(se!==b.__cacheKey){te[se]===void 0&&(te[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[se].usedTimes++;const Me=te[b.__cacheKey];Me!==void 0&&(te[b.__cacheKey].usedTimes--,Me.usedTimes===0&&E(M)),b.__cacheKey=se,b.__webglTexture=te[se].texture}return B}function ce(b,M,B){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const te=K(b,M),se=M.source;n.bindTexture(re,b.__webglTexture,t.TEXTURE0+B);const Me=i.get(se);if(se.version!==Me.__version||te===!0){n.activeTexture(t.TEXTURE0+B);const he=nt.getPrimaries(nt.workingColorSpace),_e=M.colorSpace===Un?null:nt.getPrimaries(M.colorSpace),be=M.colorSpace===Un||he===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ze=u(M)&&m(M.image)===!1;let ee=y(M.image,ze,!1,r.maxTextureSize);ee=ke(M,ee);const et=m(ee)||a,Ve=s.convert(M.format,M.colorSpace);let Ie=s.convert(M.type),Te=x(M.internalFormat,Ve,Ie,M.colorSpace,M.isVideoTexture);Y(re,M,et);let fe;const P=M.mipmaps,oe=a&&M.isVideoTexture!==!0&&Te!==Mv,Ee=Me.__version===void 0||te===!0,ve=C(M,ee,et);if(M.isDepthTexture)Te=t.DEPTH_COMPONENT,a?M.type===qi?Te=t.DEPTH_COMPONENT32F:M.type===Yi?Te=t.DEPTH_COMPONENT24:M.type===Lr?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:M.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Dr&&Te===t.DEPTH_COMPONENT&&M.type!==Ud&&M.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Yi,Ie=s.convert(M.type)),M.format===Xs&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,M.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Lr,Ie=s.convert(M.type))),Ee&&(oe?n.texStorage2D(t.TEXTURE_2D,1,Te,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Te,ee.width,ee.height,0,Ve,Ie,null));else if(M.isDataTexture)if(P.length>0&&et){oe&&Ee&&n.texStorage2D(t.TEXTURE_2D,ve,Te,P[0].width,P[0].height);for(let ne=0,L=P.length;ne<L;ne++)fe=P[ne],oe?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,Ie,fe.data):n.texImage2D(t.TEXTURE_2D,ne,Te,fe.width,fe.height,0,Ve,Ie,fe.data);M.generateMipmaps=!1}else oe?(Ee&&n.texStorage2D(t.TEXTURE_2D,ve,Te,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,Ve,Ie,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Te,ee.width,ee.height,0,Ve,Ie,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){oe&&Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Te,P[0].width,P[0].height,ee.depth);for(let ne=0,L=P.length;ne<L;ne++)fe=P[ne],M.format!==Zn?Ve!==null?oe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ee.depth,Ve,fe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Te,fe.width,fe.height,ee.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ee.depth,Ve,Ie,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Te,fe.width,fe.height,ee.depth,0,Ve,Ie,fe.data)}else{oe&&Ee&&n.texStorage2D(t.TEXTURE_2D,ve,Te,P[0].width,P[0].height);for(let ne=0,L=P.length;ne<L;ne++)fe=P[ne],M.format!==Zn?Ve!==null?oe?n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,Ie,fe.data):n.texImage2D(t.TEXTURE_2D,ne,Te,fe.width,fe.height,0,Ve,Ie,fe.data)}else if(M.isDataArrayTexture)oe?(Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Te,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ve,Ie,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ee.width,ee.height,ee.depth,0,Ve,Ie,ee.data);else if(M.isData3DTexture)oe?(Ee&&n.texStorage3D(t.TEXTURE_3D,ve,Te,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ve,Ie,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ee.width,ee.height,ee.depth,0,Ve,Ie,ee.data);else if(M.isFramebufferTexture){if(Ee)if(oe)n.texStorage2D(t.TEXTURE_2D,ve,Te,ee.width,ee.height);else{let ne=ee.width,L=ee.height;for(let ae=0;ae<ve;ae++)n.texImage2D(t.TEXTURE_2D,ae,Te,ne,L,0,Ve,Ie,null),ne>>=1,L>>=1}}else if(P.length>0&&et){oe&&Ee&&n.texStorage2D(t.TEXTURE_2D,ve,Te,P[0].width,P[0].height);for(let ne=0,L=P.length;ne<L;ne++)fe=P[ne],oe?n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Ve,Ie,fe):n.texImage2D(t.TEXTURE_2D,ne,Te,Ve,Ie,fe);M.generateMipmaps=!1}else oe?(Ee&&n.texStorage2D(t.TEXTURE_2D,ve,Te,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,Ie,ee)):n.texImage2D(t.TEXTURE_2D,0,Te,Ve,Ie,ee);v(M,et)&&g(re),Me.__version=se.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ye(b,M,B){if(M.image.length!==6)return;const re=K(b,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+B);const se=i.get(te);if(te.version!==se.__version||re===!0){n.activeTexture(t.TEXTURE0+B);const Me=nt.getPrimaries(nt.workingColorSpace),he=M.colorSpace===Un?null:nt.getPrimaries(M.colorSpace),_e=M.colorSpace===Un||Me===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let ne=0;ne<6;ne++)!be&&!ze?ee[ne]=y(M.image[ne],!1,!0,r.maxCubemapSize):ee[ne]=ze?M.image[ne].image:M.image[ne],ee[ne]=ke(M,ee[ne]);const et=ee[0],Ve=m(et)||a,Ie=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),fe=x(M.internalFormat,Ie,Te,M.colorSpace),P=a&&M.isVideoTexture!==!0,oe=se.__version===void 0||re===!0;let Ee=C(M,et,Ve);Y(t.TEXTURE_CUBE_MAP,M,Ve);let ve;if(be){P&&oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,fe,et.width,et.height);for(let ne=0;ne<6;ne++){ve=ee[ne].mipmaps;for(let L=0;L<ve.length;L++){const ae=ve[L];M.format!==Zn?Ie!==null?P?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,ae.width,ae.height,Ie,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,ae.width,ae.height,Ie,Te,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,fe,ae.width,ae.height,0,Ie,Te,ae.data)}}}else{ve=M.mipmaps,P&&oe&&(ve.length>0&&Ee++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,fe,ee[0].width,ee[0].height));for(let ne=0;ne<6;ne++)if(ze){P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ee[ne].width,ee[ne].height,Ie,Te,ee[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,ee[ne].width,ee[ne].height,0,Ie,Te,ee[ne].data);for(let L=0;L<ve.length;L++){const ue=ve[L].image[ne].image;P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,ue.width,ue.height,Ie,Te,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,fe,ue.width,ue.height,0,Ie,Te,ue.data)}}else{P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,Te,ee[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,Ie,Te,ee[ne]);for(let L=0;L<ve.length;L++){const ae=ve[L];P?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,Ie,Te,ae.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,fe,Ie,Te,ae.image[ne])}}}v(M,Ve)&&g(t.TEXTURE_CUBE_MAP),se.__version=te.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function xe(b,M,B,re,te,se){const Me=s.convert(B.format,B.colorSpace),he=s.convert(B.type),_e=x(B.internalFormat,Me,he,B.colorSpace);if(!i.get(M).__hasExternalTextures){const ze=Math.max(1,M.width>>se),ee=Math.max(1,M.height>>se);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,se,_e,ze,ee,M.depth,0,Me,he,null):n.texImage2D(te,se,_e,ze,ee,0,Me,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,te,i.get(B).__webglTexture,0,De(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,te,i.get(B).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(b,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let re=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(B||Se(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===qi?re=t.DEPTH_COMPONENT32F:te.type===Yi&&(re=t.DEPTH_COMPONENT24));const se=De(M);Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,re,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,re,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const re=De(M);B&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<re.length;te++){const se=re[te],Me=s.convert(se.format,se.colorSpace),he=s.convert(se.type),_e=x(se.internalFormat,Me,he,se.colorSpace),be=De(M);B&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,_e,M.width,M.height):Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,_e,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,_e,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,te=De(M);if(M.depthTexture.format===Dr)Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===Xs)Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Re(b){const M=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Oe(M.__webglFramebuffer,b)}else if(B){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),Ue(M.__webglDepthbuffer[re],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ue(M.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(b,M,B){const re=i.get(b);M!==void 0&&xe(re.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Re(b)}function H(b){const M=b.texture,B=i.get(b),re=i.get(M);b.addEventListener("dispose",D),b.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,se=b.isWebGLMultipleRenderTargets===!0,Me=m(b)||a;if(te){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let _e=0;_e<M.mipmaps.length;_e++)B.__webglFramebuffer[he][_e]=t.createFramebuffer()}else B.__webglFramebuffer[he]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)B.__webglFramebuffer[he]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const he=b.texture;for(let _e=0,be=he.length;_e<be;_e++){const ze=i.get(he[_e]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Se(b)===!1){const he=se?M:[M];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _e=0;_e<he.length;_e++){const be=he[_e];B.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[_e]);const ze=s.convert(be.format,be.colorSpace),ee=s.convert(be.type),et=x(be.internalFormat,ze,ee,be.colorSpace,b.isXRRenderTarget===!0),Ve=De(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,et,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,B.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(B.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),Y(t.TEXTURE_CUBE_MAP,M,Me);for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)xe(B.__webglFramebuffer[he][_e],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else xe(B.__webglFramebuffer[he],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);v(M,Me)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const he=b.texture;for(let _e=0,be=he.length;_e<be;_e++){const ze=he[_e],ee=i.get(ze);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),Y(t.TEXTURE_2D,ze,Me),xe(B.__webglFramebuffer,b,ze,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),v(ze,Me)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?he=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,re.__webglTexture),Y(he,M,Me),a&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)xe(B.__webglFramebuffer[_e],b,M,t.COLOR_ATTACHMENT0,he,_e);else xe(B.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,he,0);v(M,Me)&&g(he),n.unbindTexture()}b.depthBuffer&&Re(b)}function zt(b){const M=m(b)||a,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0,te=B.length;re<te;re++){const se=B[re];if(v(se,M)){const Me=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(se).__webglTexture;n.bindTexture(Me,he),g(Me),n.unbindTexture()}}}function Ae(b){if(a&&b.samples>0&&Se(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,re=b.height;let te=t.COLOR_BUFFER_BIT;const se=[],Me=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(b),_e=b.isWebGLMultipleRenderTargets===!0;if(_e)for(let be=0;be<M.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let be=0;be<M.length;be++){se.push(t.COLOR_ATTACHMENT0+be),b.depthBuffer&&se.push(Me);const ze=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ze===!1&&(b.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),_e&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[be]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),_e){const ee=i.get(M[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,B,re,0,0,B,re,te,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let be=0;be<M.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,he.__webglColorRenderbuffer[be]);const ze=i.get(M[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function De(b){return Math.min(r.maxSamples,b.samples)}function Se(b){const M=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function st(b){const M=o.render.frame;h.get(b)!==M&&(h.set(b,M),b.update())}function ke(b,M){const B=b.colorSpace,re=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Nh||B!==bi&&B!==Un&&(nt.getTransfer(B)===at?a===!1?e.has("EXT_sRGB")===!0&&re===Zn?(b.format=Nh,b.minFilter=Ln,b.generateMipmaps=!1):M=Cv.sRGBToLinear(M):(re!==Zn||te!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=I,this.resetTextureUnits=J,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=N,this.setTextureCube=U,this.rebindTextures=qe,this.setupRenderTarget=H,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Se}function GT(t,e,n){const i=n.isWebGL2;function r(s,o=Un){let a;const l=nt.getTransfer(o);if(s===or)return t.UNSIGNED_BYTE;if(s===vv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===_v)return t.UNSIGNED_SHORT_5_5_5_1;if(s===hS)return t.BYTE;if(s===dS)return t.SHORT;if(s===Ud)return t.UNSIGNED_SHORT;if(s===gv)return t.INT;if(s===Yi)return t.UNSIGNED_INT;if(s===qi)return t.FLOAT;if(s===ea)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fS)return t.ALPHA;if(s===Zn)return t.RGBA;if(s===pS)return t.LUMINANCE;if(s===mS)return t.LUMINANCE_ALPHA;if(s===Dr)return t.DEPTH_COMPONENT;if(s===Xs)return t.DEPTH_STENCIL;if(s===Nh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===gS)return t.RED;if(s===yv)return t.RED_INTEGER;if(s===vS)return t.RG;if(s===xv)return t.RG_INTEGER;if(s===Sv)return t.RGBA_INTEGER;if(s===Zc||s===Kc||s===Qc||s===Jc)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_p||s===yp||s===xp||s===Sp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===_p)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Mp||s===Ep)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Mp)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ep)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wp||s===Tp||s===Ap||s===Cp||s===bp||s===Rp||s===Pp||s===Lp||s===Dp||s===Ip||s===Np||s===Up||s===Op||s===Fp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===wp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ap)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ip)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Np)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Up)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Op)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===eu||s===kp||s===zp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===eu)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_S||s===Bp||s===Hp||s===Gp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===eu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Bp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Lr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class VT extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yn extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WT={type:"move"};class Eu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Yn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class XT extends Vr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,_=null;const y=n.getContextAttributes();let m=null,u=null;const v=[],g=[],x=new ge;let C=null;const T=new In;T.layers.enable(1),T.viewport=new Ft;const w=new In;w.layers.enable(2),w.viewport=new Ft;const D=[T,w],S=new VT;S.layers.enable(1),S.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=v[Y];return K===void 0&&(K=new Eu,v[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=v[Y];return K===void 0&&(K=new Eu,v[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=v[Y];return K===void 0&&(K=new Eu,v[Y]=K),K.getHandSpace()};function G(Y){const K=g.indexOf(Y.inputSource);if(K===-1)return;const ce=v[K];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,c||o),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",I);for(let Y=0;Y<v.length;Y++){const K=g[Y];K!==null&&(g[Y]=null,v[Y].disconnect(K))}E=null,k=null,e.setRenderTarget(m),p=null,f=null,d=null,r=null,u=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",J),r.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new zr(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:or,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let K=null,ce=null,ye=null;y.depth&&(ye=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=y.stencil?Xs:Dr,ce=y.stencil?Lr:Yi);const xe={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new zr(f.textureWidth,f.textureHeight,{format:Zn,type:or,depthTexture:new Fv(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ue=e.properties.get(u);Ue.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(Y){for(let K=0;K<Y.removed.length;K++){const ce=Y.removed[K],ye=g.indexOf(ce);ye>=0&&(g[ye]=null,v[ye].disconnect(ce))}for(let K=0;K<Y.added.length;K++){const ce=Y.added[K];let ye=g.indexOf(ce);if(ye===-1){for(let Ue=0;Ue<v.length;Ue++)if(Ue>=g.length){g.push(ce),ye=Ue;break}else if(g[Ue]===null){g[Ue]=ce,ye=Ue;break}if(ye===-1)break}const xe=v[ye];xe&&xe.connect(ce)}}const F=new R,X=new R;function $(Y,K,ce){F.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const ye=F.distanceTo(X),xe=K.projectionMatrix.elements,Ue=ce.projectionMatrix.elements,Oe=xe[14]/(xe[10]-1),Re=xe[14]/(xe[10]+1),qe=(xe[9]+1)/xe[5],H=(xe[9]-1)/xe[5],zt=(xe[8]-1)/xe[0],Ae=(Ue[8]+1)/Ue[0],De=Oe*zt,Se=Oe*Ae,st=ye/(-zt+Ae),ke=st*-zt;K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ke),Y.translateZ(st),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const b=Oe+st,M=Re+st,B=De-ke,re=Se+(ye-ke),te=qe*Re/M*b,se=H*Re/M*b;Y.projectionMatrix.makePerspective(B,re,te,se,b,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function N(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;S.near=w.near=T.near=Y.near,S.far=w.far=T.far=Y.far,(E!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,k=S.far);const K=Y.parent,ce=S.cameras;N(S,K);for(let ye=0;ye<ce.length;ye++)N(ce[ye],K);ce.length===2?$(S,T,w):S.projectionMatrix.copy(T.projectionMatrix),U(Y,S,K)};function U(Y,K,ce){ce===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ta*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let z=null;function Z(Y,K){if(h=K.getViewerPose(c||o),_=K,h!==null){const ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let ye=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,ye=!0);for(let xe=0;xe<ce.length;xe++){const Ue=ce[xe];let Oe=null;if(p!==null)Oe=p.getViewport(Ue);else{const qe=d.getViewSubImage(f,Ue);Oe=qe.viewport,xe===0&&(e.setRenderTargetTextures(u,qe.colorTexture,f.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(u))}let Re=D[xe];Re===void 0&&(Re=new In,Re.layers.enable(xe),Re.viewport=new Ft,D[xe]=Re),Re.matrix.fromArray(Ue.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ue.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),xe===0&&(S.matrix.copy(Re.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ye===!0&&S.cameras.push(Re)}}for(let ce=0;ce<v.length;ce++){const ye=g[ce],xe=v[ce];ye!==null&&xe!==void 0&&xe.update(ye,K,c||o)}z&&z(Y,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Q=new Ov;Q.setAnimationLoop(Z),this.setAnimationLoop=function(Y){z=Y},this.dispose=function(){}}}function jT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Iv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,g,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===dn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===dn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===dn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const x=g.program;i.uniformBlockBinding(v,x)}function c(v,g){let x=r[v.id];x===void 0&&(_(v),x=h(v),r[v.id]=x,v.addEventListener("dispose",m));const C=g.program;i.updateUBOMapping(v,C);const T=e.render.frame;s[v.id]!==T&&(f(v),s[v.id]=T)}function h(v){const g=d();v.__bindingPointIndex=g;const x=t.createBuffer(),C=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=r[v.id],x=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,w=x.length;T<w;T++){const D=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,E=D.length;S<E;S++){const k=D[S];if(p(k,T,S,C)===!0){const G=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let I=0;for(let F=0;F<J.length;F++){const X=J[F],$=y(X);typeof X=="number"||typeof X=="boolean"?(k.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,G+I,k.__data)):X.isMatrix3?(k.__data[0]=X.elements[0],k.__data[1]=X.elements[1],k.__data[2]=X.elements[2],k.__data[3]=0,k.__data[4]=X.elements[3],k.__data[5]=X.elements[4],k.__data[6]=X.elements[5],k.__data[7]=0,k.__data[8]=X.elements[6],k.__data[9]=X.elements[7],k.__data[10]=X.elements[8],k.__data[11]=0):(X.toArray(k.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,x,C){const T=v.value,w=g+"_"+x;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{const D=C[w];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return C[w]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function _(v){const g=v.uniforms;let x=0;const C=16;for(let w=0,D=g.length;w<D;w++){const S=Array.isArray(g[w])?g[w]:[g[w]];for(let E=0,k=S.length;E<k;E++){const G=S[E],J=Array.isArray(G.value)?G.value:[G.value];for(let I=0,F=J.length;I<F;I++){const X=J[I],$=y(X),N=x%C;N!==0&&C-N<$.boundary&&(x+=C-N),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=$.storage}}}const T=x%C;return T>0&&(x+=C-T),v.__size=x,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Vv{constructor(e={}){const{canvas:n=VS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=sr,this.toneMappingExposure=1;const g=this;let x=!1,C=0,T=0,w=null,D=-1,S=null;const E=new Ft,k=new Ft;let G=null;const J=new He(0);let I=0,F=n.width,X=n.height,$=1,N=null,U=null;const z=new Ft(0,0,F,X),Z=new Ft(0,0,F,X);let Q=!1;const Y=new zd;let K=!1,ce=!1,ye=null;const xe=new mt,Ue=new ge,Oe=new R,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return w===null?$:1}let H=i;function zt(A,O){for(let W=0;W<A.length;W++){const j=A[W],V=n.getContext(j,O);if(V!==null)return V}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nd}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ae,!1),H===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),H=zt(O,A),H===null)throw zt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ae,De,Se,st,ke,b,M,B,re,te,se,Me,he,_e,be,ze,ee,et,Ve,Ie,Te,fe,P,oe;function Ee(){Ae=new iw(H),De=new K1(H,Ae,e),Ae.init(De),fe=new GT(H,Ae,De),Se=new BT(H,Ae,De),st=new ow(H),ke=new AT,b=new HT(H,Ae,Se,ke,De,fe,st),M=new J1(g),B=new nw(g),re=new pM(H,De),P=new $1(H,Ae,re,De),te=new rw(H,re,st,P),se=new uw(H,te,re,st),Ve=new cw(H,De,b),ze=new Q1(ke),Me=new TT(g,M,B,Ae,De,P,ze),he=new jT(g,ke),_e=new bT,be=new NT(Ae,De),et=new q1(g,M,B,Se,se,f,l),ee=new zT(g,se,De),oe=new YT(H,st,De,Se),Ie=new Z1(H,Ae,st,De),Te=new sw(H,Ae,st,De),st.programs=Me.programs,g.capabilities=De,g.extensions=Ae,g.properties=ke,g.renderLists=_e,g.shadowMap=ee,g.state=Se,g.info=st}Ee();const ve=new XT(g,H);this.xr=ve,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(F,X,!1))},this.getSize=function(A){return A.set(F,X)},this.setSize=function(A,O,W=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,X=O,n.width=Math.floor(A*$),n.height=Math.floor(O*$),W===!0&&(n.style.width=A+"px",n.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(F*$,X*$).floor()},this.setDrawingBufferSize=function(A,O,W){F=A,X=O,$=W,n.width=Math.floor(A*W),n.height=Math.floor(O*W),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(z)},this.setViewport=function(A,O,W,j){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,O,W,j),Se.viewport(E.copy(z).multiplyScalar($).floor())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,O,W,j){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,O,W,j),Se.scissor(k.copy(Z).multiplyScalar($).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(A){Se.setScissorTest(Q=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(A=!0,O=!0,W=!0){let j=0;if(A){let V=!1;if(w!==null){const pe=w.texture.format;V=pe===Sv||pe===xv||pe===yv}if(V){const pe=w.texture.type,we=pe===or||pe===Yi||pe===Ud||pe===Lr||pe===vv||pe===_v,Le=et.getClearColor(),Ne=et.getClearAlpha(),We=Le.r,Fe=Le.g,Be=Le.b;we?(p[0]=We,p[1]=Fe,p[2]=Be,p[3]=Ne,H.clearBufferuiv(H.COLOR,0,p)):(_[0]=We,_[1]=Fe,_[2]=Be,_[3]=Ne,H.clearBufferiv(H.COLOR,0,_))}else j|=H.COLOR_BUFFER_BIT}O&&(j|=H.DEPTH_BUFFER_BIT),W&&(j|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),_e.dispose(),be.dispose(),ke.dispose(),M.dispose(),B.dispose(),se.dispose(),P.dispose(),oe.dispose(),Me.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",xt),ve.removeEventListener("sessionend",Qe),ye&&(ye.dispose(),ye=null),wt.stop()};function ne(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=st.autoReset,O=ee.enabled,W=ee.autoUpdate,j=ee.needsUpdate,V=ee.type;Ee(),st.autoReset=A,ee.enabled=O,ee.autoUpdate=W,ee.needsUpdate=j,ee.type=V}function ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ue(A){const O=A.target;O.removeEventListener("dispose",ue),Pe(O)}function Pe(A){Ce(A),ke.remove(A)}function Ce(A){const O=ke.get(A).programs;O!==void 0&&(O.forEach(function(W){Me.releaseProgram(W)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,W,j,V,pe){O===null&&(O=Re);const we=V.isMesh&&V.matrixWorld.determinant()<0,Le=Jv(A,O,W,j,V);Se.setMaterial(j,we);let Ne=W.index,We=1;if(j.wireframe===!0){if(Ne=te.getWireframeAttribute(W),Ne===void 0)return;We=2}const Fe=W.drawRange,Be=W.attributes.position;let St=Fe.start*We,fn=(Fe.start+Fe.count)*We;pe!==null&&(St=Math.max(St,pe.start*We),fn=Math.min(fn,(pe.start+pe.count)*We)),Ne!==null?(St=Math.max(St,0),fn=Math.min(fn,Ne.count)):Be!=null&&(St=Math.max(St,0),fn=Math.min(fn,Be.count));const Dt=fn-St;if(Dt<0||Dt===1/0)return;P.setup(V,j,Le,W,Ne);let ui,ht=Ie;if(Ne!==null&&(ui=re.get(Ne),ht=Te,ht.setIndex(ui)),V.isMesh)j.wireframe===!0?(Se.setLineWidth(j.wireframeLinewidth*qe()),ht.setMode(H.LINES)):ht.setMode(H.TRIANGLES);else if(V.isLine){let Xe=j.linewidth;Xe===void 0&&(Xe=1),Se.setLineWidth(Xe*qe()),V.isLineSegments?ht.setMode(H.LINES):V.isLineLoop?ht.setMode(H.LINE_LOOP):ht.setMode(H.LINE_STRIP)}else V.isPoints?ht.setMode(H.POINTS):V.isSprite&&ht.setMode(H.TRIANGLES);if(V.isBatchedMesh)ht.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)ht.renderInstances(St,Dt,V.count);else if(W.isInstancedBufferGeometry){const Xe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,yc=Math.min(W.instanceCount,Xe);ht.renderInstances(St,Dt,yc)}else ht.render(St,Dt)};function $e(A,O,W){A.transparent===!0&&A.side===Nn&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,ha(A,O,W),A.side=cr,A.needsUpdate=!0,ha(A,O,W),A.side=Nn):ha(A,O,W)}this.compile=function(A,O,W=null){W===null&&(W=A),m=be.get(W),m.init(),v.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==W&&A.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(g._useLegacyLights);const j=new Set;return A.traverse(function(V){const pe=V.material;if(pe)if(Array.isArray(pe))for(let we=0;we<pe.length;we++){const Le=pe[we];$e(Le,W,V),j.add(Le)}else $e(pe,W,V),j.add(pe)}),v.pop(),m=null,j},this.compileAsync=function(A,O,W=null){const j=this.compile(A,O,W);return new Promise(V=>{function pe(){if(j.forEach(function(we){ke.get(we).currentProgram.isReady()&&j.delete(we)}),j.size===0){V(A);return}setTimeout(pe,10)}Ae.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Ze=null;function vt(A){Ze&&Ze(A)}function xt(){wt.stop()}function Qe(){wt.start()}const wt=new Ov;wt.setAnimationLoop(vt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(A){Ze=A,ve.setAnimationLoop(A),A===null?wt.stop():wt.start()},ve.addEventListener("sessionstart",xt),ve.addEventListener("sessionend",Qe),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(O),O=ve.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,O,w),m=be.get(A,v.length),m.init(),v.push(m),xe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(xe),ce=this.localClippingEnabled,K=ze.init(this.clippingPlanes,ce),y=_e.get(A,u.length),y.init(),u.push(y),ei(A,O,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(N,U),this.info.render.frame++,K===!0&&ze.beginShadows();const W=m.state.shadowsArray;if(ee.render(W,A,O),K===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(y,A),m.setupLights(g._useLegacyLights),O.isArrayCamera){const j=O.cameras;for(let V=0,pe=j.length;V<pe;V++){const we=j[V];$d(y,A,we,we.viewport)}}else $d(y,A,O);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(g,A,O),P.resetDefaultState(),D=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function ei(A,O,W,j){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){j&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const we=se.update(A),Le=A.material;Le.visible&&y.push(A,we,Le,W,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const we=se.update(A),Le=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Oe.copy(we.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(Le)){const Ne=we.groups;for(let We=0,Fe=Ne.length;We<Fe;We++){const Be=Ne[We],St=Le[Be.materialIndex];St&&St.visible&&y.push(A,we,St,W,Oe.z,Be)}}else Le.visible&&y.push(A,we,Le,W,Oe.z,null)}}const pe=A.children;for(let we=0,Le=pe.length;we<Le;we++)ei(pe[we],O,W,j)}function $d(A,O,W,j){const V=A.opaque,pe=A.transmissive,we=A.transparent;m.setupLightsView(W),K===!0&&ze.setGlobalState(g.clippingPlanes,W),pe.length>0&&Qv(V,pe,O,W),j&&Se.viewport(E.copy(j)),V.length>0&&ua(V,O,W),pe.length>0&&ua(pe,O,W),we.length>0&&ua(we,O,W),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Qv(A,O,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const pe=De.isWebGL2;ye===null&&(ye=new zr(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?ea:or,minFilter:Jo,samples:pe?4:0})),g.getDrawingBufferSize(Ue),pe?ye.setSize(Ue.x,Ue.y):ye.setSize(Zl(Ue.x),Zl(Ue.y));const we=g.getRenderTarget();g.setRenderTarget(ye),g.getClearColor(J),I=g.getClearAlpha(),I<1&&g.setClearColor(16777215,.5),g.clear();const Le=g.toneMapping;g.toneMapping=sr,ua(A,W,j),b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye);let Ne=!1;for(let We=0,Fe=O.length;We<Fe;We++){const Be=O[We],St=Be.object,fn=Be.geometry,Dt=Be.material,ui=Be.group;if(Dt.side===Nn&&St.layers.test(j.layers)){const ht=Dt.side;Dt.side=dn,Dt.needsUpdate=!0,Zd(St,W,j,fn,Dt,ui),Dt.side=ht,Dt.needsUpdate=!0,Ne=!0}}Ne===!0&&(b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye)),g.setRenderTarget(we),g.setClearColor(J,I),g.toneMapping=Le}function ua(A,O,W){const j=O.isScene===!0?O.overrideMaterial:null;for(let V=0,pe=A.length;V<pe;V++){const we=A[V],Le=we.object,Ne=we.geometry,We=j===null?we.material:j,Fe=we.group;Le.layers.test(W.layers)&&Zd(Le,O,W,Ne,We,Fe)}}function Zd(A,O,W,j,V,pe){A.onBeforeRender(g,O,W,j,V,pe),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(g,O,W,j,A,pe),V.transparent===!0&&V.side===Nn&&V.forceSinglePass===!1?(V.side=dn,V.needsUpdate=!0,g.renderBufferDirect(W,O,j,V,A,pe),V.side=cr,V.needsUpdate=!0,g.renderBufferDirect(W,O,j,V,A,pe),V.side=Nn):g.renderBufferDirect(W,O,j,V,A,pe),A.onAfterRender(g,O,W,j,V,pe)}function ha(A,O,W){O.isScene!==!0&&(O=Re);const j=ke.get(A),V=m.state.lights,pe=m.state.shadowsArray,we=V.state.version,Le=Me.getParameters(A,V.state,pe,O,W),Ne=Me.getProgramCacheKey(Le);let We=j.programs;j.environment=A.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(A.isMeshStandardMaterial?B:M).get(A.envMap||j.environment),We===void 0&&(A.addEventListener("dispose",ue),We=new Map,j.programs=We);let Fe=We.get(Ne);if(Fe!==void 0){if(j.currentProgram===Fe&&j.lightsStateVersion===we)return Qd(A,Le),Fe}else Le.uniforms=Me.getUniforms(A),A.onBuild(W,Le,g),A.onBeforeCompile(Le,g),Fe=Me.acquireProgram(Le,Ne),We.set(Ne,Fe),j.uniforms=Le.uniforms;const Be=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=ze.uniform),Qd(A,Le),j.needsLights=t_(A),j.lightsStateVersion=we,j.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Fe,j.uniformsList=null,Fe}function Kd(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=yl.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Qd(A,O){const W=ke.get(A);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Jv(A,O,W,j,V){O.isScene!==!0&&(O=Re),b.resetTextureUnits();const pe=O.fog,we=j.isMeshStandardMaterial?O.environment:null,Le=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:bi,Ne=(j.isMeshStandardMaterial?B:M).get(j.envMap||we),We=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Be=!!W.morphAttributes.position,St=!!W.morphAttributes.normal,fn=!!W.morphAttributes.color;let Dt=sr;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Dt=g.toneMapping);const ui=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=ui!==void 0?ui.length:0,Xe=ke.get(j),yc=m.state.lights;if(K===!0&&(ce===!0||A!==S)){const Tn=A===S&&j.id===D;ze.setState(j,A,Tn)}let _t=!1;j.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==yc.state.version||Xe.outputColorSpace!==Le||V.isBatchedMesh&&Xe.batching===!1||!V.isBatchedMesh&&Xe.batching===!0||V.isInstancedMesh&&Xe.instancing===!1||!V.isInstancedMesh&&Xe.instancing===!0||V.isSkinnedMesh&&Xe.skinning===!1||!V.isSkinnedMesh&&Xe.skinning===!0||V.isInstancedMesh&&Xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xe.instancingColor===!1&&V.instanceColor!==null||Xe.envMap!==Ne||j.fog===!0&&Xe.fog!==pe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ze.numPlanes||Xe.numIntersection!==ze.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Fe||Xe.morphTargets!==Be||Xe.morphNormals!==St||Xe.morphColors!==fn||Xe.toneMapping!==Dt||De.isWebGL2===!0&&Xe.morphTargetsCount!==ht)&&(_t=!0):(_t=!0,Xe.__version=j.version);let fr=Xe.currentProgram;_t===!0&&(fr=ha(j,O,V));let Jd=!1,to=!1,xc=!1;const Xt=fr.getUniforms(),pr=Xe.uniforms;if(Se.useProgram(fr.program)&&(Jd=!0,to=!0,xc=!0),j.id!==D&&(D=j.id,to=!0),Jd||S!==A){Xt.setValue(H,"projectionMatrix",A.projectionMatrix),Xt.setValue(H,"viewMatrix",A.matrixWorldInverse);const Tn=Xt.map.cameraPosition;Tn!==void 0&&Tn.setValue(H,Oe.setFromMatrixPosition(A.matrixWorld)),De.logarithmicDepthBuffer&&Xt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Xt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,to=!0,xc=!0)}if(V.isSkinnedMesh){Xt.setOptional(H,V,"bindMatrix"),Xt.setOptional(H,V,"bindMatrixInverse");const Tn=V.skeleton;Tn&&(De.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Xt.setValue(H,"boneTexture",Tn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Xt.setOptional(H,V,"batchingTexture"),Xt.setValue(H,"batchingTexture",V._matricesTexture,b));const Sc=W.morphAttributes;if((Sc.position!==void 0||Sc.normal!==void 0||Sc.color!==void 0&&De.isWebGL2===!0)&&Ve.update(V,W,fr),(to||Xe.receiveShadow!==V.receiveShadow)&&(Xe.receiveShadow=V.receiveShadow,Xt.setValue(H,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(pr.envMap.value=Ne,pr.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),to&&(Xt.setValue(H,"toneMappingExposure",g.toneMappingExposure),Xe.needsLights&&e_(pr,xc),pe&&j.fog===!0&&he.refreshFogUniforms(pr,pe),he.refreshMaterialUniforms(pr,j,$,X,ye),yl.upload(H,Kd(Xe),pr,b)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(yl.upload(H,Kd(Xe),pr,b),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Xt.setValue(H,"center",V.center),Xt.setValue(H,"modelViewMatrix",V.modelViewMatrix),Xt.setValue(H,"normalMatrix",V.normalMatrix),Xt.setValue(H,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Tn=j.uniformsGroups;for(let Mc=0,n_=Tn.length;Mc<n_;Mc++)if(De.isWebGL2){const ef=Tn[Mc];oe.update(ef,fr),oe.bind(ef,fr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fr}function e_(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function t_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,O,W){ke.get(A.texture).__webglTexture=O,ke.get(A.depthTexture).__webglTexture=W;const j=ke.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const W=ke.get(A);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,W=0){w=A,C=O,T=W;let j=!0,V=null,pe=!1,we=!1;if(A){const Ne=ke.get(A);Ne.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(H.FRAMEBUFFER,null),j=!1):Ne.__webglFramebuffer===void 0?b.setupRenderTarget(A):Ne.__hasExternalTextures&&b.rebindTextures(A,ke.get(A.texture).__webglTexture,ke.get(A.depthTexture).__webglTexture);const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Fe=ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?V=Fe[O][W]:V=Fe[O],pe=!0):De.isWebGL2&&A.samples>0&&b.useMultisampledRTT(A)===!1?V=ke.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?V=Fe[W]:V=Fe,E.copy(A.viewport),k.copy(A.scissor),G=A.scissorTest}else E.copy(z).multiplyScalar($).floor(),k.copy(Z).multiplyScalar($).floor(),G=Q;if(Se.bindFramebuffer(H.FRAMEBUFFER,V)&&De.drawBuffers&&j&&Se.drawBuffers(A,V),Se.viewport(E),Se.scissor(k),Se.setScissorTest(G),pe){const Ne=ke.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,W)}else if(we){const Ne=ke.get(A.texture),We=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.__webglTexture,W||0,We)}D=-1},this.readRenderTargetPixels=function(A,O,W,j,V,pe,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){Se.bindFramebuffer(H.FRAMEBUFFER,Le);try{const Ne=A.texture,We=Ne.format,Fe=Ne.type;if(We!==Zn&&fe.convert(We)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Fe===ea&&(Ae.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Fe!==or&&fe.convert(Fe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===qi&&(De.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-j&&W>=0&&W<=A.height-V&&H.readPixels(O,W,j,V,fe.convert(We),fe.convert(Fe),pe)}finally{const Ne=w!==null?ke.get(w).__webglFramebuffer:null;Se.bindFramebuffer(H.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(A,O,W=0){const j=Math.pow(2,-W),V=Math.floor(O.image.width*j),pe=Math.floor(O.image.height*j);b.setTexture2D(O,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,A.x,A.y,V,pe),Se.unbindTexture()},this.copyTextureToTexture=function(A,O,W,j=0){const V=O.image.width,pe=O.image.height,we=fe.convert(W.format),Le=fe.convert(W.type);b.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,j,A.x,A.y,V,pe,we,Le,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,j,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,j,A.x,A.y,we,Le,O.image),j===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(A,O,W,j,V=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=A.max.x-A.min.x+1,we=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,Ne=fe.convert(j.format),We=fe.convert(j.type);let Fe;if(j.isData3DTexture)b.setTexture3D(j,0),Fe=H.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)b.setTexture2DArray(j,0),Fe=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const Be=H.getParameter(H.UNPACK_ROW_LENGTH),St=H.getParameter(H.UNPACK_IMAGE_HEIGHT),fn=H.getParameter(H.UNPACK_SKIP_PIXELS),Dt=H.getParameter(H.UNPACK_SKIP_ROWS),ui=H.getParameter(H.UNPACK_SKIP_IMAGES),ht=W.isCompressedTexture?W.mipmaps[V]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ht.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ht.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,A.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,A.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Fe,V,O.x,O.y,O.z,pe,we,Le,Ne,We,ht.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Fe,V,O.x,O.y,O.z,pe,we,Le,Ne,ht.data)):H.texSubImage3D(Fe,V,O.x,O.y,O.z,pe,we,Le,Ne,We,ht),H.pixelStorei(H.UNPACK_ROW_LENGTH,Be),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,St),H.pixelStorei(H.UNPACK_SKIP_PIXELS,fn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Dt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ui),V===0&&j.generateMipmaps&&H.generateMipmap(Fe),Se.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){C=0,T=0,w=null,Se.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Od?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===mc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?Ir:Ev}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ir?Ut:bi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class qT extends Vv{}qT.prototype.isWebGL1Renderer=!0;class Gd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=n}clone(){return new Gd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $T extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class $i extends Js{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lm=new R,Dm=new R,Im=new mt,wu=new vc,Ka=new gc;class vn extends Et{constructor(e=new ft,n=new $i){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Lm.fromBufferAttribute(n,r-1),Dm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Lm.distanceTo(Dm);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(r),Ka.radius+=s,e.ray.intersectsSphere(Ka)===!1)return;Im.copy(r).invert(),wu.copy(e.ray).applyMatrix4(Im);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,h=new R,d=new R,f=new R,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let g=u,x=v-1;g<x;g+=p){const C=_.getX(g),T=_.getX(g+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,T),wu.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||n.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let g=u,x=v-1;g<x;g+=p){if(c.fromBufferAttribute(m,g),h.fromBufferAttribute(m,g+1),wu.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||n.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Nm=new R,Um=new R;class Vd extends vn{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Nm.fromBufferAttribute(n,r),Um.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Nm.distanceTo(Um);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],f=i[r+1]-h,p=(o-h)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ge:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new R,r=[],s=[],o=[],a=new R,l=new mt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ot(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ot(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wv extends Pi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new ge,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ZT extends Wv{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Qa=new R,Tu=new Wd,Au=new Wd,Cu=new Wd;class Xv extends Pi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new R){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Qa.subVectors(r[0],r[1]).add(r[0]),c=Qa);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Qa.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Qa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),Tu.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,_,y,m),Au.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,_,y,m),Cu.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,_,y,m)}else this.curveType==="catmullrom"&&(Tu.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Au.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Cu.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(Tu.calc(l),Au.calc(l),Cu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Om(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function KT(t,e){const n=1-t;return n*n*e}function QT(t,e){return 2*(1-t)*t*e}function JT(t,e){return t*t*e}function No(t,e,n,i){return KT(t,e)+QT(t,n)+JT(t,i)}function eA(t,e){const n=1-t;return n*n*n*e}function tA(t,e){const n=1-t;return 3*n*n*t*e}function nA(t,e){return 3*(1-t)*t*t*e}function iA(t,e){return t*t*t*e}function Uo(t,e,n,i,r){return eA(t,e)+tA(t,n)+nA(t,i)+iA(t,r)}class rA extends Pi{constructor(e=new ge,n=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ge){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Uo(e,r.x,s.x,o.x,a.x),Uo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sA extends Pi{constructor(e=new R,n=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new R){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Uo(e,r.x,s.x,o.x,a.x),Uo(e,r.y,s.y,o.y,a.y),Uo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class oA extends Pi{constructor(e=new ge,n=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ge){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ge){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class aA extends Pi{constructor(e=new R,n=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new R){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new R){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lA extends Pi{constructor(e=new ge,n=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ge){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(No(e,r.x,s.x,o.x),No(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jv extends Pi{constructor(e=new R,n=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new R){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(No(e,r.x,s.x,o.x),No(e,r.y,s.y,o.y),No(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cA extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ge){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Om(a,l.x,c.x,h.x,d.x),Om(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ge().fromArray(r))}return this}}var uA=Object.freeze({__proto__:null,ArcCurve:ZT,CatmullRomCurve3:Xv,CubicBezierCurve:rA,CubicBezierCurve3:sA,EllipseCurve:Wv,LineCurve:oA,LineCurve3:aA,QuadraticBezierCurve:lA,QuadraticBezierCurve3:jv,SplineCurve:cA});class Bt extends ft{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],p=[];let _=0;const y=[],m=i/2;let u=0;v(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function v(){const x=new R,C=new R;let T=0;const w=(n-e)/i;for(let D=0;D<=s;D++){const S=[],E=D/s,k=E*(n-e)+e;for(let G=0;G<=r;G++){const J=G/r,I=J*l+a,F=Math.sin(I),X=Math.cos(I);C.x=k*F,C.y=-E*i+m,C.z=k*X,d.push(C.x,C.y,C.z),x.set(F,w,X).normalize(),f.push(x.x,x.y,x.z),p.push(J,1-E),S.push(_++)}y.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){const E=y[S][D],k=y[S+1][D],G=y[S+1][D+1],J=y[S][D+1];h.push(E,k,J),h.push(k,G,J),T+=6}c.addGroup(u,T,0),u+=T}function g(x){const C=_,T=new ge,w=new R;let D=0;const S=x===!0?e:n,E=x===!0?1:-1;for(let G=1;G<=r;G++)d.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),_++;const k=_;for(let G=0;G<=r;G++){const I=G/r*l+a,F=Math.cos(I),X=Math.sin(I);w.x=S*X,w.y=m*E,w.z=S*F,d.push(w.x,w.y,w.z),f.push(0,E,0),T.x=F*.5+.5,T.y=X*.5*E+.5,p.push(T.x,T.y),_++}for(let G=0;G<r;G++){const J=C+G,I=k+G;x===!0?h.push(I,I+1,J):h.push(I+1,I,J),D+=3}c.addGroup(u,D,x===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xd extends ft{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const g=new R,x=new R,C=new R;for(let T=0;T<n.length;T+=3)p(n[T+0],g),p(n[T+1],x),p(n[T+2],C),l(g,x,C,v)}function l(v,g,x,C){const T=C+1,w=[];for(let D=0;D<=T;D++){w[D]=[];const S=v.clone().lerp(x,D/T),E=g.clone().lerp(x,D/T),k=T-D;for(let G=0;G<=k;G++)G===0&&D===T?w[D][G]=S:w[D][G]=S.clone().lerp(E,G/k)}for(let D=0;D<T;D++)for(let S=0;S<2*(T-D)-1;S++){const E=Math.floor(S/2);S%2===0?(f(w[D][E+1]),f(w[D+1][E]),f(w[D][E])):(f(w[D][E+1]),f(w[D+1][E+1]),f(w[D+1][E]))}}function c(v){const g=new R;for(let x=0;x<s.length;x+=3)g.x=s[x+0],g.y=s[x+1],g.z=s[x+2],g.normalize().multiplyScalar(v),s[x+0]=g.x,s[x+1]=g.y,s[x+2]=g.z}function h(){const v=new R;for(let g=0;g<s.length;g+=3){v.x=s[g+0],v.y=s[g+1],v.z=s[g+2];const x=m(v)/2/Math.PI+.5,C=u(v)/Math.PI+.5;o.push(x,1-C)}_(),d()}function d(){for(let v=0;v<o.length;v+=6){const g=o[v+0],x=o[v+2],C=o[v+4],T=Math.max(g,x,C),w=Math.min(g,x,C);T>.9&&w<.1&&(g<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function p(v,g){const x=v*3;g.x=e[x+0],g.y=e[x+1],g.z=e[x+2]}function _(){const v=new R,g=new R,x=new R,C=new R,T=new ge,w=new ge,D=new ge;for(let S=0,E=0;S<s.length;S+=9,E+=6){v.set(s[S+0],s[S+1],s[S+2]),g.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),T.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),D.set(o[E+4],o[E+5]),C.copy(v).add(g).add(x).divideScalar(3);const k=m(C);y(T,E+0,v,k),y(w,E+2,g,k),y(D,E+4,x,k)}}function y(v,g,x,C){C<0&&v.x===1&&(o[g]=v.x-1),x.x===0&&x.z===0&&(o[g]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xd(e.vertices,e.indices,e.radius,e.details)}}const Ja=new R,el=new R,bu=new R,tl=new Dn;class hA extends ft{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Ns*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:m,c:u}=tl;if(y.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),tl.getNormal(bu),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const g=(v+1)%3,x=d[v],C=d[g],T=tl[h[v]],w=tl[h[g]],D=`${x}_${C}`,S=`${C}_${x}`;S in f&&f[S]?(bu.dot(f[S].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(w.x,w.y,w.z)),f[S]=null):D in f||(f[D]={index0:c[v],index1:c[g],normal:bu.clone()})}}for(const _ in f)if(f[_]){const{index0:y,index1:m}=f[_];Ja.fromBufferAttribute(a,y),el.fromBufferAttribute(a,m),p.push(Ja.x,Ja.y,Ja.z),p.push(el.x,el.y,el.z)}this.setAttribute("position",new Je(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ts extends Xd{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ts(e.radius,e.detail)}}class na extends ft{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new R,f=new R,p=[],_=[],y=[],m=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let x=0;u===0&&o===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let C=0;C<=n;C++){const T=C/n;d.x=-e*Math.cos(r+T*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+g*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(T+x,1-g),v.push(c++)}h.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=h[u][v+1],x=h[u][v],C=h[u+1][v],T=h[u+1][v+1];(u!==0||o>0)&&p.push(g,x,T),(u!==i-1||l<Math.PI)&&p.push(x,C,T)}this.setIndex(p),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(y,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wi extends ft{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new R,d=new R,f=new R;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const y=_/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(y),d.y=(e+n*Math.cos(m))*Math.sin(y),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const y=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,v=(r+1)*p+_;o.push(y,m,v),o.push(m,u,v)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class jd extends ft{constructor(e=new jv(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new ge;let h=new R;const d=[],f=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function y(){for(let g=0;g<n;g++)m(g);m(s===!1?n:0),v(),u()}function m(g){h=e.getPointAt(g/n,h);const x=o.normals[g],C=o.binormals[g];for(let T=0;T<=r;T++){const w=T/r*Math.PI*2,D=Math.sin(w),S=-Math.cos(w);l.x=S*x.x+D*C.x,l.y=S*x.y+D*C.y,l.z=S*x.z+D*C.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function u(){for(let g=1;g<=n;g++)for(let x=1;x<=r;x++){const C=(r+1)*(g-1)+(x-1),T=(r+1)*g+(x-1),w=(r+1)*g+x,D=(r+1)*(g-1)+x;_.push(C,T,D),_.push(T,w,D)}}function v(){for(let g=0;g<=n;g++)for(let x=0;x<=r;x++)c.x=g/n,c.y=x/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new jd(new uA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ru extends Js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wv,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yv extends Et{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class dA extends Yv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Pu=new mt,Fm=new R,km=new R;class fA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zd,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Fm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fm),km.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(km),n.updateMatrixWorld(),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pA extends fA{constructor(){super(new Bd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zm extends Yv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new pA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qv{constructor(e,n,i=0,r=1/0){this.ray=new vc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new kd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Fh(e,this,i,n),i.sort(Bm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Fh(e[r],this,i,n);return i.sort(Bm),i}}function Bm(t,e){return t.distance-e.distance}function Fh(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Fh(r[s],e,n,!0)}}class Hm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ot(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mA extends Vd{constructor(e=10,n=10,i=4473924,r=8947848){i=new He(i),r=new He(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let f=0,p=0,_=-a;f<=n;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=f===s?i:r;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const h=new ft;h.setAttribute("position",new Je(l,3)),h.setAttribute("color",new Je(c,3));const d=new $i({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class gA extends Vd{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new ft;r.setAttribute("position",new Je(n,3)),r.setAttribute("color",new Je(i,3));const s=new $i({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new He,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);const Gm={type:"change"},Lu={type:"start"},Vm={type:"end"},nl=new vc,Wm=new yi,vA=Math.cos(70*Wn.DEG2RAD);class _A extends Vr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",be),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gm),i.update(),s=r.NONE},this.update=function(){const P=new R,oe=new Gt().setFromUnitVectors(e.up,new R(0,1,0)),Ee=oe.clone().invert(),ve=new R,ne=new Gt,L=new R,ae=2*Math.PI;return function(Pe=null){const Ce=i.object.position;P.copy(Ce).sub(i.target),P.applyQuaternion(oe),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&G(E(Pe)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let $e=i.minAzimuthAngle,Ze=i.maxAzimuthAngle;isFinite($e)&&isFinite(Ze)&&($e<-Math.PI?$e+=ae:$e>Math.PI&&($e-=ae),Ze<-Math.PI?Ze+=ae:Ze>Math.PI&&(Ze-=ae),$e<=Ze?a.theta=Math.max($e,Math.min(Ze,a.theta)):a.theta=a.theta>($e+Ze)/2?Math.max($e,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?a.radius=z(a.radius):a.radius=z(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(Ee),Ce.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let vt=!1;if(i.zoomToCursor&&T){let xt=null;if(i.object.isPerspectiveCamera){const Qe=P.length();xt=z(Qe*c);const wt=Qe-xt;i.object.position.addScaledVector(x,wt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Qe=new R(C.x,C.y,0);Qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),vt=!0;const wt=new R(C.x,C.y,0);wt.unproject(i.object),i.object.position.sub(wt).add(Qe),i.object.updateMatrixWorld(),xt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;xt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(xt).add(i.object.position):(nl.origin.copy(i.object.position),nl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(nl.direction))<vA?e.lookAt(i.target):(Wm.setFromNormalAndCoplanarPoint(i.object.up,i.target),nl.intersectPlane(Wm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),vt=!0);return c=1,T=!1,vt||ve.distanceToSquared(i.object.position)>o||8*(1-ne.dot(i.object.quaternion))>o||L.distanceToSquared(i.target)>0?(i.dispatchEvent(Gm),ve.copy(i.object.position),ne.copy(i.object.quaternion),L.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",et),i.domElement.removeEventListener("pointerdown",b),i.domElement.removeEventListener("pointercancel",B),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",B),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",be),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Hm,l=new Hm;let c=1;const h=new R,d=new ge,f=new ge,p=new ge,_=new ge,y=new ge,m=new ge,u=new ge,v=new ge,g=new ge,x=new R,C=new ge;let T=!1;const w=[],D={};let S=!1;function E(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function k(P){const oe=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*oe)}function G(P){l.theta-=P}function J(P){l.phi-=P}const I=function(){const P=new R;return function(Ee,ve){P.setFromMatrixColumn(ve,0),P.multiplyScalar(-Ee),h.add(P)}}(),F=function(){const P=new R;return function(Ee,ve){i.screenSpacePanning===!0?P.setFromMatrixColumn(ve,1):(P.setFromMatrixColumn(ve,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Ee),h.add(P)}}(),X=function(){const P=new R;return function(Ee,ve){const ne=i.domElement;if(i.object.isPerspectiveCamera){const L=i.object.position;P.copy(L).sub(i.target);let ae=P.length();ae*=Math.tan(i.object.fov/2*Math.PI/180),I(2*Ee*ae/ne.clientHeight,i.object.matrix),F(2*ve*ae/ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(Ee*(i.object.right-i.object.left)/i.object.zoom/ne.clientWidth,i.object.matrix),F(ve*(i.object.top-i.object.bottom)/i.object.zoom/ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(P,oe){if(!i.zoomToCursor)return;T=!0;const Ee=i.domElement.getBoundingClientRect(),ve=P-Ee.left,ne=oe-Ee.top,L=Ee.width,ae=Ee.height;C.x=ve/L*2-1,C.y=-(ne/ae)*2+1,x.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function z(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function Z(P){d.set(P.clientX,P.clientY)}function Q(P){U(P.clientX,P.clientX),u.set(P.clientX,P.clientY)}function Y(P){_.set(P.clientX,P.clientY)}function K(P){f.set(P.clientX,P.clientY),p.subVectors(f,d).multiplyScalar(i.rotateSpeed);const oe=i.domElement;G(2*Math.PI*p.x/oe.clientHeight),J(2*Math.PI*p.y/oe.clientHeight),d.copy(f),i.update()}function ce(P){v.set(P.clientX,P.clientY),g.subVectors(v,u),g.y>0?$(k(g.y)):g.y<0&&N(k(g.y)),u.copy(v),i.update()}function ye(P){y.set(P.clientX,P.clientY),m.subVectors(y,_).multiplyScalar(i.panSpeed),X(m.x,m.y),_.copy(y),i.update()}function xe(P){U(P.clientX,P.clientY),P.deltaY<0?N(k(P.deltaY)):P.deltaY>0&&$(k(P.deltaY)),i.update()}function Ue(P){let oe=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?J(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),oe=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?J(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),oe=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),oe=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),oe=!0;break}oe&&(P.preventDefault(),i.update())}function Oe(P){if(w.length===1)d.set(P.pageX,P.pageY);else{const oe=fe(P),Ee=.5*(P.pageX+oe.x),ve=.5*(P.pageY+oe.y);d.set(Ee,ve)}}function Re(P){if(w.length===1)_.set(P.pageX,P.pageY);else{const oe=fe(P),Ee=.5*(P.pageX+oe.x),ve=.5*(P.pageY+oe.y);_.set(Ee,ve)}}function qe(P){const oe=fe(P),Ee=P.pageX-oe.x,ve=P.pageY-oe.y,ne=Math.sqrt(Ee*Ee+ve*ve);u.set(0,ne)}function H(P){i.enableZoom&&qe(P),i.enablePan&&Re(P)}function zt(P){i.enableZoom&&qe(P),i.enableRotate&&Oe(P)}function Ae(P){if(w.length==1)f.set(P.pageX,P.pageY);else{const Ee=fe(P),ve=.5*(P.pageX+Ee.x),ne=.5*(P.pageY+Ee.y);f.set(ve,ne)}p.subVectors(f,d).multiplyScalar(i.rotateSpeed);const oe=i.domElement;G(2*Math.PI*p.x/oe.clientHeight),J(2*Math.PI*p.y/oe.clientHeight),d.copy(f)}function De(P){if(w.length===1)y.set(P.pageX,P.pageY);else{const oe=fe(P),Ee=.5*(P.pageX+oe.x),ve=.5*(P.pageY+oe.y);y.set(Ee,ve)}m.subVectors(y,_).multiplyScalar(i.panSpeed),X(m.x,m.y),_.copy(y)}function Se(P){const oe=fe(P),Ee=P.pageX-oe.x,ve=P.pageY-oe.y,ne=Math.sqrt(Ee*Ee+ve*ve);v.set(0,ne),g.set(0,Math.pow(v.y/u.y,i.zoomSpeed)),$(g.y),u.copy(v);const L=(P.pageX+oe.x)*.5,ae=(P.pageY+oe.y)*.5;U(L,ae)}function st(P){i.enableZoom&&Se(P),i.enablePan&&De(P)}function ke(P){i.enableZoom&&Se(P),i.enableRotate&&Ae(P)}function b(P){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",B)),Ve(P),P.pointerType==="touch"?ze(P):re(P))}function M(P){i.enabled!==!1&&(P.pointerType==="touch"?ee(P):te(P))}function B(P){Ie(P),w.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",B)),i.dispatchEvent(Vm),s=r.NONE}function re(P){let oe;switch(P.button){case 0:oe=i.mouseButtons.LEFT;break;case 1:oe=i.mouseButtons.MIDDLE;break;case 2:oe=i.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case Bi.DOLLY:if(i.enableZoom===!1)return;Q(P),s=r.DOLLY;break;case Bi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;Y(P),s=r.PAN}else{if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}break;case Bi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}else{if(i.enablePan===!1)return;Y(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Lu)}function te(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;K(P);break;case r.DOLLY:if(i.enableZoom===!1)return;ce(P);break;case r.PAN:if(i.enablePan===!1)return;ye(P);break}}function se(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(Lu),xe(Me(P)),i.dispatchEvent(Vm))}function Me(P){const oe=P.deltaMode,Ee={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(oe){case 1:Ee.deltaY*=16;break;case 2:Ee.deltaY*=100;break}return P.ctrlKey&&!S&&(Ee.deltaY*=10),Ee}function he(P){P.key==="Control"&&(S=!0,document.addEventListener("keyup",_e,{passive:!0,capture:!0}))}function _e(P){P.key==="Control"&&(S=!1,document.removeEventListener("keyup",_e,{passive:!0,capture:!0}))}function be(P){i.enabled===!1||i.enablePan===!1||Ue(P)}function ze(P){switch(Te(P),w.length){case 1:switch(i.touches.ONE){case Hi.ROTATE:if(i.enableRotate===!1)return;Oe(P),s=r.TOUCH_ROTATE;break;case Hi.PAN:if(i.enablePan===!1)return;Re(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Hi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(P),s=r.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;zt(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Lu)}function ee(P){switch(Te(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ae(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;De(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;st(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ke(P),i.update();break;default:s=r.NONE}}function et(P){i.enabled!==!1&&P.preventDefault()}function Ve(P){w.push(P.pointerId)}function Ie(P){delete D[P.pointerId];for(let oe=0;oe<w.length;oe++)if(w[oe]==P.pointerId){w.splice(oe,1);return}}function Te(P){let oe=D[P.pointerId];oe===void 0&&(oe=new ge,D[P.pointerId]=oe),oe.set(P.pageX,P.pageY)}function fe(P){const oe=P.pointerId===w[0]?w[1]:w[0];return D[oe]}i.domElement.addEventListener("contextmenu",et),i.domElement.addEventListener("pointerdown",b),i.domElement.addEventListener("pointercancel",B),i.domElement.addEventListener("wheel",se,{passive:!1}),document.addEventListener("keydown",he,{passive:!0,capture:!0}),this.update()}}const yr=new qv,Zt=new R,Fi=new R,ct=new Gt,Xm={X:new R(1,0,0),Y:new R(0,1,0),Z:new R(0,0,1)},Du={type:"change"},jm={type:"mouseDown"},Ym={type:"mouseUp",mode:null},qm={type:"objectChange"};class yA extends Et{constructor(e,n){super(),n===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),n=document),this.isTransformControls=!0,this.visible=!1,this.domElement=n,this.domElement.style.touchAction="none";const i=new TA;this._gizmo=i,this.add(i);const r=new AA;this._plane=r,this.add(r);const s=this;function o(v,g){let x=g;Object.defineProperty(s,v,{get:function(){return x!==void 0?x:g},set:function(C){x!==C&&(x=C,r[v]=C,i[v]=C,s.dispatchEvent({type:v+"-changed",value:C}),s.dispatchEvent(Du))}}),s[v]=g,r[v]=g,i[v]=g}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new R,l=new R,c=new Gt,h=new Gt,d=new R,f=new Gt,p=new R,_=new R,y=new R,m=0,u=new R;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",h),o("cameraPosition",d),o("cameraQuaternion",f),o("pointStart",p),o("pointEnd",_),o("rotationAxis",y),o("rotationAngle",m),o("eye",u),this._offset=new R,this._startNorm=new R,this._endNorm=new R,this._cameraScale=new R,this._parentPosition=new R,this._parentQuaternion=new Gt,this._parentQuaternionInv=new Gt,this._parentScale=new R,this._worldScaleStart=new R,this._worldQuaternionInv=new Gt,this._worldScale=new R,this._positionStart=new R,this._quaternionStart=new Gt,this._scaleStart=new R,this._getPointer=xA.bind(this),this._onPointerDown=MA.bind(this),this._onPointerHover=SA.bind(this),this._onPointerMove=EA.bind(this),this._onPointerUp=wA.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;yr.setFromCamera(e,this.camera);const n=Iu(this._gizmo.picker[this.mode],yr);n?this.axis=n.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){yr.setFromCamera(e,this.camera);const n=Iu(this._plane,yr,!0);n&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(n.point).sub(this.worldPositionStart)),this.dragging=!0,jm.mode=this.mode,this.dispatchEvent(jm)}}pointerMove(e){const n=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(n==="E"||n==="XYZE"||n==="XYZ")&&(s="world"),r===void 0||n===null||this.dragging===!1||e.button!==-1)return;yr.setFromCamera(e,this.camera);const o=Iu(this._plane,yr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&n!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),n.indexOf("X")===-1&&(this._offset.x=0),n.indexOf("Y")===-1&&(this._offset.y=0),n.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&n!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(ct.copy(this._quaternionStart).invert()),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Zt.setFromMatrixPosition(r.parent.matrixWorld)),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Zt.setFromMatrixPosition(r.parent.matrixWorld))));else if(i==="scale"){if(n.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Fi.set(a,a,a)}else Zt.copy(this.pointStart),Fi.copy(this.pointEnd),Zt.applyQuaternion(this._worldQuaternionInv),Fi.applyQuaternion(this._worldQuaternionInv),Fi.divide(Zt),n.search("X")===-1&&(Fi.x=1),n.search("Y")===-1&&(Fi.y=1),n.search("Z")===-1&&(Fi.z=1);r.scale.copy(this._scaleStart).multiply(Fi),this.scaleSnap&&(n.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Zt.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;n==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Zt.copy(this.rotationAxis).cross(this.eye))*a):(n==="X"||n==="Y"||n==="Z")&&(this.rotationAxis.copy(Xm[n]),Zt.copy(Xm[n]),s==="local"&&Zt.applyQuaternion(this.worldQuaternion),Zt.cross(this.eye),Zt.length()===0?l=!0:this.rotationAngle=this._offset.dot(Zt.normalize())*a),(n==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&n!=="E"&&n!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(ct.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(ct.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Du),this.dispatchEvent(qm)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Ym.mode=this.mode,this.dispatchEvent(Ym)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Du),this.dispatchEvent(qm),this.pointStart.copy(this.pointEnd))}getRaycaster(){return yr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function xA(t){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:t.button};{const e=this.domElement.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width*2-1,y:-(t.clientY-e.top)/e.height*2+1,button:t.button}}}function SA(t){if(this.enabled)switch(t.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(t));break}}function MA(t){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(t)),this.pointerDown(this._getPointer(t)))}function EA(t){this.enabled&&this.pointerMove(this._getPointer(t))}function wA(t){this.enabled&&(this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(t)))}function Iu(t,e,n){const i=e.intersectObject(t,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||n)return i[r];return!1}const il=new la,it=new R(0,1,0),$m=new R(0,0,0),Zm=new mt,rl=new Gt,xl=new Gt,ni=new R,Km=new mt,So=new R(1,0,0),Er=new R(0,1,0),Mo=new R(0,0,1),sl=new R,mo=new R,go=new R;class TA extends Et{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ca({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=new $i({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=n.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const h=e.clone();h.color.setHex(255),h.opacity=.5;const d=e.clone();d.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25,e.clone().color.setHex(16776960);const _=e.clone();_.color.setHex(7895160);const y=new Bt(0,.04,.1,12);y.translate(0,.05,0);const m=new At(.08,.08,.08);m.translate(0,.04,0);const u=new ft;u.setAttribute("position",new Je([0,0,0,1,0,0],3));const v=new Bt(.0075,.0075,.5,3);v.translate(0,.25,0);function g(F,X){const $=new Wi(F,.0075,3,64,X*Math.PI*2);return $.rotateY(Math.PI/2),$.rotateX(Math.PI/2),$}function x(){const F=new ft;return F.setAttribute("position",new Je([0,0,0,1,1,1],3)),F}const C={X:[[new de(y,s),[.5,0,0],[0,0,-Math.PI/2]],[new de(y,s),[-.5,0,0],[0,0,Math.PI/2]],[new de(v,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new de(y,o),[0,.5,0]],[new de(y,o),[0,-.5,0],[Math.PI,0,0]],[new de(v,o)]],Z:[[new de(y,a),[0,0,.5],[Math.PI/2,0,0]],[new de(y,a),[0,0,-.5],[-Math.PI/2,0,0]],[new de(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new de(new Ts(.1,0),d.clone()),[0,0,0]]],XY:[[new de(new At(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new de(new At(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new At(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},T={X:[[new de(new Bt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new Bt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new Bt(.2,0,.6,4),i),[0,.3,0]],[new de(new Bt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new Bt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new Bt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new de(new Ts(.2,0),i)]],XY:[[new de(new At(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new At(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new At(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},w={START:[[new de(new Ts(.01,2),r),null,null,null,"helper"]],END:[[new de(new Ts(.01,2),r),null,null,null,"helper"]],DELTA:[[new vn(x(),r),null,null,null,"helper"]],X:[[new vn(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new vn(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new vn(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},D={XYZE:[[new de(g(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new de(g(.5,.5),s)]],Y:[[new de(g(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new de(g(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new de(g(.75,1),f),null,[0,Math.PI/2,0]]]},S={AXIS:[[new vn(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},E={XYZE:[[new de(new na(.25,10,8),i)]],X:[[new de(new Wi(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new de(new Wi(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new de(new Wi(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new de(new Wi(.75,.1,2,24),i)]]},k={X:[[new de(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new de(v,s),[0,0,0],[0,0,-Math.PI/2]],[new de(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new de(m,o),[0,.5,0]],[new de(v,o)],[new de(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new de(m,a),[0,0,.5],[Math.PI/2,0,0]],[new de(v,a),[0,0,0],[Math.PI/2,0,0]],[new de(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new de(new At(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new de(new At(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new At(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new At(.1,.1,.1),d.clone())]]},G={X:[[new de(new Bt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new Bt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new Bt(.2,0,.6,4),i),[0,.3,0]],[new de(new Bt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new Bt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new Bt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new de(new At(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new At(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new At(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new At(.2,.2,.2),i),[0,0,0]]]},J={X:[[new vn(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new vn(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new vn(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function I(F){const X=new Et;for(const $ in F)for(let N=F[$].length;N--;){const U=F[$][N][0].clone(),z=F[$][N][1],Z=F[$][N][2],Q=F[$][N][3],Y=F[$][N][4];U.name=$,U.tag=Y,z&&U.position.set(z[0],z[1],z[2]),Z&&U.rotation.set(Z[0],Z[1],Z[2]),Q&&U.scale.set(Q[0],Q[1],Q[2]),U.updateMatrix();const K=U.geometry.clone();K.applyMatrix4(U.matrix),U.geometry=K,U.renderOrder=1/0,U.position.set(0,0,0),U.rotation.set(0,0,0),U.scale.set(1,1,1),X.add(U)}return X}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=I(C)),this.add(this.gizmo.rotate=I(D)),this.add(this.gizmo.scale=I(k)),this.add(this.picker.translate=I(T)),this.add(this.picker.rotate=I(E)),this.add(this.picker.scale=I(G)),this.add(this.helper.translate=I(w)),this.add(this.helper.rotate=I(S)),this.add(this.helper.scale=I(J)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:xl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(ct.setFromEuler(il.set(0,0,0)),o.quaternion.copy(i).multiply(ct),Math.abs(it.copy(So).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(ct.setFromEuler(il.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(ct),Math.abs(it.copy(Er).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(ct.setFromEuler(il.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(ct),Math.abs(it.copy(Mo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(ct.setFromEuler(il.set(0,Math.PI/2,0)),it.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Zm.lookAt($m,it,Er)),o.quaternion.multiply(ct),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Zt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Zt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Zt),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(it.copy(So).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(it.copy(Er).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(it.copy(Mo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(it.copy(Mo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(it.copy(So).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(it.copy(Er).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(rl.copy(i),it.copy(this.eye).applyQuaternion(ct.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Zm.lookAt(this.eye,$m,Er)),o.name==="X"&&(ct.setFromAxisAngle(So,Math.atan2(-it.y,it.z)),ct.multiplyQuaternions(rl,ct),o.quaternion.copy(ct)),o.name==="Y"&&(ct.setFromAxisAngle(Er,Math.atan2(it.x,it.z)),ct.multiplyQuaternions(rl,ct),o.quaternion.copy(ct)),o.name==="Z"&&(ct.setFromAxisAngle(Mo,Math.atan2(it.y,it.x)),ct.multiplyQuaternions(rl,ct),o.quaternion.copy(ct))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class AA extends de{constructor(){super(new Ys(1e5,1e5,2,2),new ca({visible:!1,wireframe:!0,side:Nn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let n=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(n="local"),sl.copy(So).applyQuaternion(n==="local"?this.worldQuaternion:xl),mo.copy(Er).applyQuaternion(n==="local"?this.worldQuaternion:xl),go.copy(Mo).applyQuaternion(n==="local"?this.worldQuaternion:xl),it.copy(mo),this.mode){case"translate":case"scale":switch(this.axis){case"X":it.copy(this.eye).cross(sl),ni.copy(sl).cross(it);break;case"Y":it.copy(this.eye).cross(mo),ni.copy(mo).cross(it);break;case"Z":it.copy(this.eye).cross(go),ni.copy(go).cross(it);break;case"XY":ni.copy(go);break;case"YZ":ni.copy(sl);break;case"XZ":it.copy(go),ni.copy(mo);break;case"XYZ":case"E":ni.set(0,0,0);break}break;case"rotate":default:ni.set(0,0,0)}ni.length()===0?this.quaternion.copy(this.cameraQuaternion):(Km.lookAt(Zt.set(0,0,0),ni,it),this.quaternion.setFromRotationMatrix(Km)),super.updateMatrixWorld(e)}}const CA={currentTool:"pencil",activeSurface:null,mirrorMode:!1,brushSettings:{color:"#22252e",size:12,opacity:1,hardness:.8,pressureSensitivity:.6,stabilization:.35},selectedObject:null,layers:[{id:"layer-0",name:"Capa 1",visible:!0,locked:!1,opacity:1}],activeLayerId:"layer-0"};let _n=CA;const kh=new Set;let bA=1;const Yd={setCurrentTool:t=>ii({currentTool:t}),setActiveSurface:t=>ii({activeSurface:t}),setMirrorMode:t=>ii({mirrorMode:t}),setBrushSettings:t=>ii({brushSettings:t}),setSelectedObject:t=>ii({selectedObject:t}),addLayer:()=>{const t=`layer-${bA++}`,e={id:t,name:`Capa ${_n.layers.length+1}`,visible:!0,locked:!1,opacity:1};ii({layers:[..._n.layers,e],activeLayerId:t})},removeLayer:t=>{if(_n.layers.length<=1)return;const e=_n.layers.filter(i=>i.id!==t),n=_n.activeLayerId===t?e[e.length-1].id:_n.activeLayerId;ii({layers:e,activeLayerId:n})},setActiveLayer:t=>ii({activeLayerId:t}),toggleLayerVisibility:t=>ii({layers:_n.layers.map(e=>e.id===t?{...e,visible:!e.visible}:e)}),toggleLayerLock:t=>ii({layers:_n.layers.map(e=>e.id===t?{...e,locked:!e.locked}:e)})};let $v={..._n,...Yd};function ii(t){_n={..._n,...t},$v={..._n,...Yd},kh.forEach(e=>e())}function Zv(t){return kh.add(t),()=>{kh.delete(t)}}function Qm(){return $v}function qd(){return bn.useSyncExternalStore(Zv,Qm,Qm)}const Nu={getState:()=>_n,subscribe:Zv,...Yd},RA=.012,PA=6,LA=4,as="http://www.w3.org/2000/svg",As=class As{constructor(){this.raycaster=new qv,this.pointer=new ge,this.surfaces=[],this.strokes=[],this.activeGuide=null,this.selected=new Set,this.fallbackPlane=new yi(new R(0,0,1),0),this.view="persp",this.orthoSize=LA,this.mode="idle",this.current=null,this.downScreen=new ge,this.lastMoveWorld=new R,this.moveStart=new Map,this.lassoPts=[],this.showAxes=!1,this.editingStroke=null,this.pointHandles=[],this.dragPointIndex=-1,this.dragPointStart=new R,this.gizmoTarget=null,this.gizmoDragStart=new R,this.clipboard=[],this.smoothed=null,this.undoStack=[],this.redoStack=[],this.raf=0,this.seq=0,this.disposed=!1,this.tool="pencil",this.brush={color:"#22252e",size:12,opacity:1,hardness:.8,pressureSensitivity:.6,stabilization:.35},this.mirror=!1,this.theme="light",this.lastSurfaceKey="",this.onPointerDown=e=>{var n;if(!(e.button!==0||e.pointerType==="touch"))if(this.setPointerFromEvent(e),this.updateCursor(e),this.downScreen.set(...this.screenOf(e)),this.tool==="pencil"||this.tool==="guide")this.beginDraw(e);else if(this.tool==="move"){if((n=this.gizmo)!=null&&n.axis)return;const i=this.pickStroke();i?(this.selected.has(i)||this.setSelection([i]),this.beginMove()):this.beginLasso(e)}else this.tool==="select"?this.onSelectPointerDown(e):this.tool==="eraser"&&this.beginLasso(e)},this.onPointerMove=e=>{this.updateCursor(e),this.setPointerFromEvent(e),this.mode==="draw"?this.moveDraw(e):this.mode==="move"?this.moveDrag(e):this.mode==="lasso"?this.moveLasso(e):this.mode==="point-drag"&&this.movePointDrag()},this.onPointerLeave=()=>{this.mode==="idle"&&(this.cursorEl.style.display="none")},this.onPointerUp=e=>{this.mode==="draw"?this.endDraw(e):this.mode==="move"?this.endMove():this.mode==="lasso"?this.endLasso(e):this.mode==="point-drag"&&this.endPointDrag(),this.mode="idle",this.controls.enabled=!0;try{this.canvas.releasePointerCapture(e.pointerId)}catch{}},this.onKeyDown=e=>{const n=e.ctrlKey||e.metaKey;n&&e.key.toLowerCase()==="z"?(e.preventDefault(),e.shiftKey||e.altKey?this.redo():this.undo()):n&&e.key.toLowerCase()==="y"?(e.preventDefault(),this.redo()):e.key==="Delete"||e.key==="Backspace"?this.selected.size&&(e.preventDefault(),this.deleteSelection()):n&&e.key.toLowerCase()==="c"?this.selected.size&&(e.preventDefault(),this.copySelection()):n&&e.key.toLowerCase()==="v"?this.clipboard.length&&(e.preventDefault(),this.pasteClipboard()):e.key==="Escape"&&(this.setSelection([]),this.clearPointEdit())},this.animate=()=>{this.disposed||(this.raf=requestAnimationFrame(this.animate),this.resize(),this.controls.update(),this.renderer.render(this.scene,this.camera),this.showAxes&&this.updateVPOverlay())}}mount(e,n){this.canvas=e,this.container=n,this.renderer=new Vv({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Ut,this.renderer.toneMapping=pv,this.renderer.toneMappingExposure=1.05,this.scene=new $T,this.perspCamera=new In(45,1,.05,500),this.perspCamera.position.set(0,1.2,6),this.camera=this.perspCamera,this.makeControls(),this.controls.target.set(0,.6,0),this.buildEnvironment(),this.surfacesGroup=new Yn,this.guidesGroup=new Yn,this.strokesGroup=new Yn,this.handlesGroup=new Yn,this.scene.add(this.surfacesGroup,this.guidesGroup,this.strokesGroup,this.handlesGroup),this.axesHelper=new gA(3),this.axesHelper.visible=!1,this.scene.add(this.axesHelper),this.gizmo=new yA(this.camera,this.canvas),this.gizmo.setMode("translate"),this.gizmo.setSize(.85),this.gizmo.detach(),this.gizmo.addEventListener("dragging-changed",i=>{if(this.controls.enabled=!i.value,i.value)this.gizmoTarget=this.gizmo.object??null,this.gizmoTarget&&this.gizmoDragStart.copy(this.gizmoTarget.position);else if(this.gizmoTarget){const r=this.gizmoTarget,s=this.gizmoDragStart.clone(),o=r.position.clone();this.gizmoTarget=null,s.distanceToSquared(o)>1e-8&&this.pushCmd({undo:()=>r.position.copy(s),redo:()=>r.position.copy(o)})}}),this.scene.add(this.gizmo),this.vpEl=document.createElementNS(as,"svg"),Object.assign(this.vpEl.style,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"20",display:"none"}),n.appendChild(this.vpEl),this.cursorEl=document.createElement("div"),Object.assign(this.cursorEl.style,{position:"absolute",left:"0",top:"0",borderRadius:"50%",border:"1.5px solid #333",transform:"translate(-50%, -50%)",pointerEvents:"none",display:"none",zIndex:"50",mixBlendMode:"difference"}),n.appendChild(this.cursorEl),this.lassoEl=document.createElementNS(as,"svg"),Object.assign(this.lassoEl.style,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"40",display:"none"}),this.lassoPoly=document.createElementNS(as,"polygon"),this.lassoPoly.setAttribute("fill","rgba(76,155,255,0.12)"),this.lassoPoly.setAttribute("stroke","#4c9bff"),this.lassoPoly.setAttribute("stroke-width","1.5"),this.lassoPoly.setAttribute("stroke-dasharray","5 4"),this.lassoEl.appendChild(this.lassoPoly),n.appendChild(this.lassoEl),this.syncFromStore(Nu.getState()),this.unsub=Nu.subscribe(()=>this.syncFromStore(Nu.getState())),e.style.cursor="none",e.style.touchAction="none",e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerleave",this.onPointerLeave),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("keydown",this.onKeyDown),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(n),this.resize(),this.setTheme(this.theme),this.animate()}dispose(){var e,n,i,r,s,o,a,l,c,h,d,f;this.disposed=!0,cancelAnimationFrame(this.raf),(e=this.unsub)==null||e.call(this),(n=this.ro)==null||n.disconnect(),(i=this.canvas)==null||i.removeEventListener("pointerdown",this.onPointerDown),(r=this.canvas)==null||r.removeEventListener("pointermove",this.onPointerMove),(s=this.canvas)==null||s.removeEventListener("pointerleave",this.onPointerLeave),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),(o=this.cursorEl)==null||o.remove(),(a=this.lassoEl)==null||a.remove(),(l=this.vpEl)==null||l.remove(),(c=this.gizmo)==null||c.dispose(),(h=this.controls)==null||h.dispose(),(d=this.scene)==null||d.traverse(p=>this.disposeNode(p)),(f=this.renderer)==null||f.dispose()}makeControls(){var e;(e=this.controls)==null||e.dispose(),this.controls=new _A(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.mouseButtons={LEFT:-1,MIDDLE:Bi.PAN,RIGHT:Bi.ROTATE},this.controls.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.controls.enableRotate=this.view==="persp"}buildEnvironment(){this.scene.add(new dA(16777215,9476522,1.1));const e=new zm(16777215,1.15);e.position.set(3,6,5),this.scene.add(e);const n=new zm(12374271,.5);n.position.set(-5,2,-4),this.scene.add(n),this.grid=new mA(20,40,12765394,14146788);const i=this.grid.material;i.transparent=!0,i.opacity=.5,this.scene.add(this.grid)}setTheme(e){this.theme=e;const n=e==="dark";this.scene.fog=n?new Gd(921363,.025):null;const i=this.grid.material,r=this.grid.geometry.getAttribute("color"),s=new He(n?3817291:12765394),o=new He(n?2303534:14146788);for(let a=0;a<r.count;a++){const l=a<r.count/2?s:o;r.setXYZ(a,l.r,l.g,l.b)}r.needsUpdate=!0,i.opacity=n?.35:.5,this.cursorEl.style.borderColor=n?"#e6ebf5":"#2a2f3a"}toggleAxes(){return this.showAxes=!this.showAxes,this.axesHelper.visible=this.showAxes,this.updateVPOverlay(),this.showAxes}axesOn(){return this.showAxes}updateVPOverlay(){if(!this.vpEl)return;if(!this.showAxes||this.view!=="persp"){this.vpEl.style.display="none";return}for(this.vpEl.style.display="block";this.vpEl.lastChild;)this.vpEl.removeChild(this.vpEl.lastChild);const e=this.canvas.getBoundingClientRect(),n=e.width||1,i=e.height||1,r=this.camera,s=new R;r.getWorldDirection(s);const o=Math.max(n,i)*3;for(const[a,l]of As.VP_AXES){const c=s.dot(a);if(Math.abs(c)>.985)continue;const h=c>=0?a:a.clone().negate(),f=r.position.clone().add(h.clone().multiplyScalar(500)).project(r);if(!isFinite(f.x)||!isFinite(f.y))continue;const p=(f.x+1)/2*n,_=(1-f.y)/2*i;if(Math.abs(p)>n*4||Math.abs(_)>i*4)continue;const y=document.createElementNS(as,"g"),m=8;for(let v=0;v<m;v++){const g=v/m*Math.PI*2,x=document.createElementNS(as,"line");x.setAttribute("x1",p.toFixed(1)),x.setAttribute("y1",_.toFixed(1)),x.setAttribute("x2",(p+Math.cos(g)*o).toFixed(1)),x.setAttribute("y2",(_+Math.sin(g)*o).toFixed(1)),x.setAttribute("stroke",l),x.setAttribute("stroke-width","1.4"),x.setAttribute("stroke-opacity","0.4"),y.appendChild(x)}const u=document.createElementNS(as,"circle");u.setAttribute("cx",p.toFixed(1)),u.setAttribute("cy",_.toFixed(1)),u.setAttribute("r","5"),u.setAttribute("fill",l),y.appendChild(u),this.vpEl.appendChild(y)}}setView(e){const n=this.controls.target.clone(),i=this.camera.position.distanceTo(n)||8;if(e==="persp")this.camera=this.perspCamera;else{const s={front:[0,0,1],back:[0,0,-1],top:[0,1,0],bottom:[0,-1,0],left:[-1,0,0],right:[1,0,0]}[e],o=new Bd(-1,1,1,-1,-500,500);o.position.set(n.x+s[0]*i,n.y+s[1]*i,n.z+s[2]*i),(e==="top"||e==="bottom")&&o.up.set(0,0,e==="top"?-1:1),this.camera=o}this.view=e,this.camera.lookAt(n),this.makeControls(),this.controls.target.copy(n),this.applyOrthoFrustum(),this.gizmo&&(this.gizmo.camera=this.camera)}applyOrthoFrustum(){if(this.view==="persp")return;const e=this.camera,n=this.renderer.domElement,i=(n.clientWidth||1)/(n.clientHeight||1);e.left=-this.orthoSize*i,e.right=this.orthoSize*i,e.top=this.orthoSize,e.bottom=-this.orthoSize,e.updateProjectionMatrix()}addSurface(e){const n=e==="plane"?new Ys(4,4):this.surfaceGeometry(e,1.4),i=this.makeSurfaceMesh(n);i.position.copy(this.controls.target),e==="plane"&&i.lookAt(this.camera.position);const r={id:`surf-${this.seq++}`,type:e,mesh:i};i.userData.surfaceId=r.id,this.surfacesGroup.add(i),this.surfaces.push(r)}makeSurfaceMesh(e){const n=new de(e,new Ru({color:5012432,roughness:.9,metalness:0,transparent:!0,opacity:.08,side:Nn,depthWrite:!1}));return n.add(new Vd(new hA(e),new $i({color:5020671,transparent:!0,opacity:.3}))),n}surfaceGeometry(e,n){switch(e){case"sphere":return new na(n,48,32);case"cylinder":return new Bt(n,n,n*2,48,1,!0);case"torus":return new Wi(n,n*.35,24,64);default:return new Ys(n*2,n*2)}}syncFromStore(e){this.tool==="select"&&e.currentTool!=="select"&&this.clearPointEdit();const n=this.tool!==e.currentTool;this.tool=e.currentTool,this.brush=e.brushSettings,this.mirror=e.mirrorMode;const i=e.activeSurface?e.activeSurface.type:"";i&&i!==this.lastSurfaceKey&&this.addSurface(e.activeSurface.type),this.lastSurfaceKey=i,n&&this.syncGizmo()}setPointerFromEvent(e){const n=this.canvas.getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1}screenOf(e){const n=this.canvas.getBoundingClientRect();return[e.clientX-n.left,e.clientY-n.top]}updateCursor(e){const[n,i]=this.screenOf(e),r=Math.max(6,this.brush.size);this.cursorEl.style.display="block",this.cursorEl.style.width=`${r}px`,this.cursorEl.style.height=`${r}px`,this.cursorEl.style.left=`${n}px`,this.cursorEl.style.top=`${i}px`}resolveHit(){this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.surfaces.map(r=>r.mesh);if(e.length){const r=this.raycaster.intersectObjects(e,!1);if(r.length){const s=r[0],o=s.face?s.face.normal.clone().transformDirection(s.object.matrixWorld).normalize():new R(0,0,1);return{point:s.point.clone(),normal:o}}}const n=new R;this.camera.getWorldDirection(n),this.fallbackPlane.setFromNormalAndCoplanarPoint(n.clone().negate(),this.controls.target);const i=new R;return this.raycaster.ray.intersectPlane(this.fallbackPlane,i)?{point:i.clone(),normal:this.fallbackPlane.normal.clone()}:null}pickStroke(){this.raycaster.setFromCamera(this.pointer,this.camera);const e=[],n=s=>s.traverse(o=>{o.isMesh&&e.push(o)});n(this.strokesGroup),n(this.guidesGroup);const i=this.raycaster.intersectObjects(e,!1);if(!i.length)return null;let r=i[0].object;for(;r&&!r.userData.strokeId;)r=r.parent;return r?this.strokes.find(s=>s.id===r.userData.strokeId)??null:null}copySelection(){const e=[...this.selected].filter(n=>n.kind==="stroke");e.length&&(this.clipboard=e.map(n=>({points:n.points.map(i=>i.clone().add(n.object.position)),pressures:[...n.pressures]})))}pasteClipboard(){if(!this.clipboard.length)return;const e=new R(.18,0,.18),n=[];for(const i of this.clipboard){const r=i.points.map(c=>c.clone()),s=[...i.pressures],o=new Yn,a=this.buildTube(r,s);a&&o.add(a),o.position.copy(e);const l={id:`stroke-${this.seq++}`,object:o,points:r,pressures:s,kind:"stroke"};o.userData.strokeId=l.id,n.push(l)}for(const i of n)this.addStrokeRecord(i);this.setSelection(n),this.pushCmd({undo:()=>n.forEach(i=>this.removeStrokeRecord(i)),redo:()=>n.forEach(i=>this.addStrokeRecord(i))})}samplePressure(e){return e.pointerType!=="pen"?1:Wn.clamp(e.pressure||.5,0,1)}beginDraw(e){const n=this.resolveHit();if(!n)return;this.canvas.setPointerCapture(e.pointerId),this.mode="draw",this.controls.enabled=!1;const i=this.tool==="guide"?"guide":"stroke",r=this.makePreviewLine(i);this.strokesGroup.add(r);let s;this.mirror&&i==="stroke"&&(s=this.makePreviewLine(i),this.strokesGroup.add(s)),this.smoothed=n.point.clone(),this.current={points:[n.point],pressures:[this.samplePressure(e)],kind:i,line:r,mirrorLine:s},this.updatePreview()}stabilizedPoint(e){const n=Wn.clamp(this.brush.stabilization??0,0,1);if(this.smoothed||(this.smoothed=e.clone()),n<=0)return this.smoothed.copy(e),e;const i=Wn.lerp(1,.15,n);return this.smoothed.lerp(e,i),this.smoothed}moveDraw(e){if(!this.current)return;const n=this.resolveHit();if(!n)return;const i=this.stabilizedPoint(n.point).clone(),r=this.current.points;i.distanceTo(r[r.length-1])<RA||(r.push(i),this.current.pressures.push(this.samplePressure(e)),this.updatePreview())}endDraw(e){this.commitStroke()}makePreviewLine(e){const n=new ft,i=new $i({color:e==="guide"?16753978:new He(this.brush.color),transparent:!0,opacity:e==="guide"?.95:Math.max(this.brush.opacity,.6)});return new vn(n,i)}updatePreview(){var e;this.current&&((e=this.current.line)==null||e.geometry.setFromPoints(this.current.points),this.current.mirrorLine&&this.current.mirrorLine.geometry.setFromPoints(this.mirrored(this.current.points)))}strokeRadius(){return .01+this.brush.size/100*.12}radiusAt(e){const n=this.strokeRadius(),i=Wn.clamp(this.brush.pressureSensitivity??0,0,1),r=Wn.lerp(1,.15,i);return n*Wn.lerp(r,1,Wn.clamp(e,0,1))}pressureAtT(e,n){const i=e.length;if(i<2)return e[0]??1;const r=Wn.clamp(n,0,1)*(i-1),s=Math.floor(r),o=Math.min(s+1,i-1),a=r-s;return e[s]*(1-a)+e[o]*a}buildTube(e,n){if(e.length<2)return null;const i=new Xv(e,!1,"centripetal"),r=10,s=Math.min(Math.max(e.length*6,8),1400),o=new jd(i,s,1,r,!1),a=o.getAttribute("position"),l=r+1,c=s+1;for(let d=0;d<c;d++){const f=d/s,p=i.getUtoTmapping(f,0),_=i.getPoint(p),y=this.radiusAt(this.pressureAtT(n,p));for(let m=0;m<l;m++){const u=d*l+m,v=a.getX(u)-_.x,g=a.getY(u)-_.y,x=a.getZ(u)-_.z;a.setXYZ(u,_.x+v*y,_.y+g*y,_.z+x*y)}}a.needsUpdate=!0,o.computeVertexNormals();const h=new He(this.brush.color);return new de(o,new Ru({color:h,emissive:h.clone().multiplyScalar(.06),roughness:Wn.lerp(.9,.25,this.brush.hardness??.8),metalness:0,transparent:this.brush.opacity<1,opacity:this.brush.opacity}))}buildGuideSurface(e){if(e.length<2)return null;const n=new R;this.camera.getWorldDirection(n).normalize();const i=new Qs().setFromPoints(e),r=Wn.clamp(i.getSize(new R).length()*.6,1,4),s=e.length,o=[],a=[],l=[],c=[];for(let p=0;p<s;p++){const _=e[p],y=_.clone().add(n.clone().multiplyScalar(r)),m=_.clone().add(n.clone().multiplyScalar(-r));l.push(y),c.push(m),o.push(y.x,y.y,y.z,m.x,m.y,m.z)}for(let p=0;p<s-1;p++){const _=2*p,y=2*p+1,m=2*(p+1),u=2*(p+1)+1;a.push(_,y,m,m,y,u)}const h=new ft;h.setAttribute("position",new Je(o,3)),h.setIndex(a),h.computeVertexNormals();const d=new de(h,new Ru({color:5020671,roughness:1,metalness:0,transparent:!0,opacity:.1,side:Nn,depthWrite:!1})),f=new $i({color:5020671,transparent:!0,opacity:.25});return d.add(new vn(new ft().setFromPoints(l),f)),d.add(new vn(new ft().setFromPoints(c),f.clone())),d.add(new vn(new ft().setFromPoints(e),new $i({color:16753978}))),d}mirrored(e){return e.map(n=>new R(-n.x,n.y,n.z))}commitStroke(){if(!this.current)return;this.smoothed=null;for(const a of[this.current.line,this.current.mirrorLine])a&&(this.strokesGroup.remove(a),a.geometry.dispose(),a.material.dispose());const{points:e,pressures:n,kind:i}=this.current;if(this.current=null,e.length<2)return;if(i==="guide"){const a=this.buildGuideSurface(e);a&&this.setGuide(a);return}const r=new Yn,s=this.buildTube(e,n);if(s&&r.add(s),this.mirror){const a=this.buildTube(this.mirrored(e),n);a&&r.add(a)}const o={id:`stroke-${this.seq++}`,object:r,points:e,pressures:n,kind:i};r.userData.strokeId=o.id,this.addStrokeRecord(o),this.pushCmd({undo:()=>this.removeStrokeRecord(o),redo:()=>this.addStrokeRecord(o)})}rebuildStrokeMesh(e){var i,r;for(;e.object.children.length;){const s=e.object.children[0];e.object.remove(s),(i=s.geometry)==null||i.dispose(),(r=s.material)==null||r.dispose()}const n=this.buildTube(e.points,e.pressures);if(n&&e.object.add(n),this.mirror){const s=this.buildTube(this.mirrored(e.points),e.pressures);s&&e.object.add(s)}}addStrokeRecord(e){this.strokesGroup.add(e.object),this.strokes.includes(e)||this.strokes.push(e)}removeStrokeRecord(e){var n;this.strokesGroup.remove(e.object),this.strokes=this.strokes.filter(i=>i!==e),this.selected.delete(e),this.editingStroke===e&&this.clearPointEdit(),((n=this.gizmo)==null?void 0:n.object)===e.object&&this.gizmo.detach()}setGuide(e){const n=this.activeGuide,i=`guide-${this.seq++}`;e.userData.surfaceId=i,e.userData.strokeId=i;const r=()=>{this.guidesGroup.add(e),this.surfaces.push({id:i,type:"loft",mesh:e}),this.activeGuide={id:i,mesh:e}};n&&this.detachGuide(n),r(),this.pushCmd({undo:()=>{this.detachGuide({id:i,mesh:e}),n&&(this.guidesGroup.add(n.mesh),this.surfaces.push({id:n.id,type:"loft",mesh:n.mesh}),this.activeGuide=n)},redo:()=>{n&&this.detachGuide(n),r()}})}detachGuide(e){var n;this.guidesGroup.remove(e.mesh),this.surfaces=this.surfaces.filter(i=>i.id!==e.id),((n=this.activeGuide)==null?void 0:n.id)===e.id&&(this.activeGuide=null)}deleteGuide(){const e=this.activeGuide;return e?(this.detachGuide(e),this.pushCmd({undo:()=>{this.guidesGroup.add(e.mesh),this.surfaces.push({id:e.id,type:"loft",mesh:e.mesh}),this.activeGuide=e},redo:()=>this.detachGuide(e)}),!0):!1}hasGuide(){return this.activeGuide!==null}setSelection(e){for(const n of this.selected)this.highlight(n,!1);this.selected=new Set(e);for(const n of this.selected)this.highlight(n,!0);this.syncGizmo()}syncGizmo(){this.gizmo&&(this.tool==="move"&&this.selected.size===1?this.gizmo.attach([...this.selected][0].object):this.gizmo.detach())}highlight(e,n){e.object.traverse(i=>{const r=i.material;r&&r.emissive&&(r.emissive.set(n?2846719:0),r.emissiveIntensity=n?.9:1,r.needsUpdate=!0)})}selectedCount(){return this.selected.size}deleteSelection(){const e=[...this.selected];if(!e.length)return;const n=()=>{var r,s;for(const o of e)(r=o.object.parent)==null||r.remove(o.object),this.strokes=this.strokes.filter(a=>a!==o),o.kind==="guide"&&(this.surfaces=this.surfaces.filter(a=>a.id!==o.id),((s=this.activeGuide)==null?void 0:s.id)===o.id&&(this.activeGuide=null))},i=()=>{for(const r of e)(r.kind==="guide"?this.guidesGroup:this.strokesGroup).add(r.object),this.strokes.includes(r)||this.strokes.push(r),r.kind==="guide"&&(this.surfaces.push({id:r.id,type:"loft",mesh:r.object}),this.activeGuide={id:r.id,mesh:r.object})};n(),this.setSelection([]),this.pushCmd({undo:i,redo:n})}beginMove(){this.mode="move",this.controls.enabled=!1;const e=this.resolveHit();this.lastMoveWorld.copy(e?e.point:this.controls.target),this.moveStart.clear();for(const n of this.selected)this.moveStart.set(n.object,n.object.position.clone())}moveDrag(e){const n=this.resolveHit();if(!n)return;const i=n.point.clone().sub(this.lastMoveWorld);for(const r of this.selected)r.object.position.add(i);this.lastMoveWorld.copy(n.point)}endMove(){const e=[...this.selected],n=e.map(i=>i.object.position.clone().sub(this.moveStart.get(i.object)??i.object.position));n.every(i=>i.lengthSq()<1e-8)||this.pushCmd({undo:()=>e.forEach((i,r)=>i.object.position.sub(n[r])),redo:()=>e.forEach((i,r)=>i.object.position.add(n[r]))})}makeHandleMesh(){const e=new na(As.HANDLE_RADIUS,16,12),n=new ca({color:2846719,depthTest:!1}),i=new de(e,n);return i.renderOrder=999,i}showPointHandles(e){this.clearPointEdit(),this.editingStroke=e,this.pointHandles=e.points.map((n,i)=>{const r=this.makeHandleMesh();return r.position.copy(n).add(e.object.position),r.userData.pointIndex=i,this.handlesGroup.add(r),r})}clearPointEdit(){for(const e of this.pointHandles)this.handlesGroup.remove(e),e.geometry.dispose(),e.material.dispose();this.pointHandles=[],this.editingStroke=null,this.dragPointIndex=-1}pickHandle(){this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.raycaster.intersectObjects(this.pointHandles,!1);return e.length?e[0].object.userData.pointIndex??-1:-1}onSelectPointerDown(e){const n=this.editingStroke?this.pickHandle():-1;if(n>=0&&this.editingStroke){this.canvas.setPointerCapture(e.pointerId),this.mode="point-drag",this.controls.enabled=!1,this.dragPointIndex=n,this.dragPointStart.copy(this.editingStroke.points[n]);return}const i=this.pickStroke();i&&i.kind==="stroke"?this.showPointHandles(i):this.clearPointEdit()}movePointDrag(){if(!this.editingStroke||this.dragPointIndex<0)return;const e=this.resolveHit();if(!e)return;const n=e.point.clone().sub(this.editingStroke.object.position);this.editingStroke.points[this.dragPointIndex].copy(n),this.rebuildStrokeMesh(this.editingStroke);const i=this.pointHandles[this.dragPointIndex];i&&i.position.copy(n).add(this.editingStroke.object.position)}endPointDrag(){if(!this.editingStroke||this.dragPointIndex<0)return;const e=this.editingStroke,n=this.dragPointIndex,i=this.dragPointStart.clone(),r=e.points[n].clone();this.dragPointIndex=-1,!(i.distanceToSquared(r)<1e-8)&&this.pushCmd({undo:()=>{var s;e.points[n].copy(i),this.rebuildStrokeMesh(e),this.editingStroke===e&&((s=this.pointHandles[n])==null||s.position.copy(i).add(e.object.position))},redo:()=>{var s;e.points[n].copy(r),this.rebuildStrokeMesh(e),this.editingStroke===e&&((s=this.pointHandles[n])==null||s.position.copy(r).add(e.object.position))}})}beginLasso(e){this.mode="lasso",this.controls.enabled=!1,this.canvas.setPointerCapture(e.pointerId),this.lassoPts=[this.screenOf(e)],this.lassoEl.style.display="block",this.lassoPoly.setAttribute("points","")}moveLasso(e){this.lassoPts.push(this.screenOf(e)),this.lassoPoly.setAttribute("points",this.lassoPts.map(n=>n.join(",")).join(" "))}endLasso(e){if(this.lassoEl.style.display="none",Math.hypot(...this.screenOf(e).map((r,s)=>r-[this.downScreen.x,this.downScreen.y][s]))<PA){const r=this.pickStroke();this.tool==="eraser"?r&&(this.setSelection([r]),this.deleteSelection()):this.setSelection(r?[r]:[]);return}const i=this.strokesInLasso();this.tool==="eraser"?(this.setSelection(i),this.deleteSelection()):this.setSelection(i)}strokesInLasso(){if(this.lassoPts.length<3)return[];const e=this.canvas.getBoundingClientRect(),n=this.camera,i=[];for(const r of this.strokes){const s=r.points;let o=0;for(const a of s){const l=a.clone().applyMatrix4(r.object.matrixWorld).project(n),c=(l.x+1)/2*e.width,h=(-l.y+1)/2*e.height;if(this.pointInPoly(c,h)&&(o++,o>=Math.max(1,s.length*.3)))break}o>=Math.max(1,s.length*.3)&&i.push(r)}return i}pointInPoly(e,n){const i=this.lassoPts;let r=!1;for(let s=0,o=i.length-1;s<i.length;o=s++){const[a,l]=i[s],[c,h]=i[o];l>n!=h>n&&e<(c-a)*(n-l)/(h-l)+a&&(r=!r)}return r}pushCmd(e){this.undoStack.push(e),this.redoStack=[]}undo(){const e=this.undoStack.pop();e&&(e.undo(),this.redoStack.push(e),this.setSelection([]))}redo(){const e=this.redoStack.pop();e&&(e.redo(),this.undoStack.push(e),this.setSelection([]))}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}disposeNode(e){e.traverse(n=>{const i=n;i.geometry&&i.geometry.dispose();const r=i.material;Array.isArray(r)?r.forEach(s=>s.dispose()):r==null||r.dispose()})}clear(){var e,n;for(const i of this.strokes)(e=i.object.parent)==null||e.remove(i.object);this.strokes=[],this.activeGuide&&this.detachGuide(this.activeGuide),this.selected.clear(),this.clearPointEdit(),(n=this.gizmo)==null||n.detach(),this.undoStack=[],this.redoStack=[]}resize(){const e=this.renderer.domElement,n=Math.min(window.devicePixelRatio,2),i=e.clientWidth,r=e.clientHeight;if(i===0||r===0)return;const s=Math.floor(i*n),o=Math.floor(r*n);e.width===s&&e.height===o||(this.renderer.setPixelRatio(n),this.renderer.setSize(i,r,!1),this.view==="persp"?(this.perspCamera.aspect=i/r,this.perspCamera.updateProjectionMatrix()):this.applyOrthoFrustum())}debugDemo(){const e=[];for(let o=0;o<=40;o++){const a=o/40*Math.PI*2;e.push(new R(Math.cos(a)*1.2,.6+Math.sin(a)*1.2,0))}const n=e.map(()=>1),i=new Yn,r=this.buildTube(e,n);r&&i.add(r);const s={id:`stroke-${this.seq++}`,object:i,points:e,pressures:n,kind:"stroke"};i.userData.strokeId=s.id,this.addStrokeRecord(s)}};As.VP_AXES=[[new R(1,0,0),"#e74c3c"],[new R(0,1,0),"#2ecc71"],[new R(0,0,1),"#3b82f6"]],As.HANDLE_RADIUS=.028;let zh=As;const Cn={Pencil:()=>q.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:q.jsx("path",{d:"M18 2l4 4-10 10H7v-5L18 2z"})}),Guide:()=>q.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeDasharray:"3 3",strokeLinecap:"round",children:q.jsx("line",{x1:"3",y1:"20",x2:"21",y2:"4"})}),Move:()=>q.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[q.jsx("polyline",{points:"5 9 2 12 5 15"}),q.jsx("polyline",{points:"9 5 12 2 15 5"}),q.jsx("polyline",{points:"15 19 12 22 9 19"}),q.jsx("polyline",{points:"19 9 22 12 19 15"}),q.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),q.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"22"})]}),Select:()=>q.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[q.jsx("path",{d:"M4 3l7 17 2-7 7-2z",strokeLinejoin:"round"}),q.jsx("circle",{cx:"4",cy:"3",r:"1.6",fill:"currentColor",stroke:"none"}),q.jsx("circle",{cx:"11",cy:"20",r:"1.6",fill:"currentColor",stroke:"none"}),q.jsx("circle",{cx:"18",cy:"11",r:"1.6",fill:"currentColor",stroke:"none"})]}),Eraser:()=>q.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:q.jsx("path",{d:"M20 20H7L3 16c-.8-.8-.8-2 0-2.8L14 2.2c.8-.8 2-.8 2.8 0L22 7.4c.8.8.8 2 0 2.8L12 20"})}),Liquify:()=>q.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[q.jsx("path",{d:"M8 3c-1.3 0-2.5.5-3.5 1.5C3.5 5.5 3 6.7 3 8s.5 2.5 1.5 3.5S7 13 8 13s2.5-.5 3.5-1.5S13 9 13 8s-.5-2.5-1.5-3.5S9 3 8 3z"}),q.jsx("path",{d:"M16 11c-1.3 0-2.5.5-3.5 1.5S11 15 11 16s.5 2.5 1.5 3.5 2.5 1.5 3.5 1.5 2.5-.5 3.5-1.5 1.5-2.5 1.5-3.5-.5-2.5-1.5-3.5-2.5-1.5-3.5-1.5z"})]}),Plane:()=>q.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[q.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),q.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),q.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"3"})]}),Cylinder:()=>q.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[q.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),q.jsx("path",{d:"M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"})]}),Sphere:()=>q.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[q.jsx("circle",{cx:"12",cy:"12",r:"9"}),q.jsx("ellipse",{cx:"12",cy:"12",rx:"9",ry:"3"}),q.jsx("path",{d:"M12 3v18"})]}),Torus:()=>q.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[q.jsx("circle",{cx:"12",cy:"12",r:"9"}),q.jsx("ellipse",{cx:"12",cy:"12",rx:"9",ry:"4"})]}),Loft:()=>q.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[q.jsx("path",{d:"M3 7c3-2 6-2 9 0s6 2 9 0M3 17c3-2 6-2 9 0s6 2 9 0"}),q.jsx("path",{d:"M3 7v10M21 7v10"})]}),Mirror:()=>q.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[q.jsx("path",{d:"M12 3v18M3 12h18"}),q.jsx("path",{d:"M8 7l-4 5 4 5M16 7l4 5-4 5"})]})},DA=()=>{const{currentTool:t,setCurrentTool:e,activeSurface:n,setActiveSurface:i,mirrorMode:r,setMirrorMode:s,brushSettings:o,setBrushSettings:a}=qd(),l=[{id:"pencil",icon:Cn.Pencil,label:"Lápiz"},{id:"guide",icon:Cn.Guide,label:"Línea guía (referencia punteada)"},{id:"move",icon:Cn.Move,label:"Seleccionar / Mover (click o lazo)"},{id:"select",icon:Cn.Select,label:"Editar puntos (nodos del vector, como la flecha blanca)"},{id:"eraser",icon:Cn.Eraser,label:"Borrar"},{id:"liquify",icon:Cn.Liquify,label:"Liquify"}],c=[{id:"plane",icon:Cn.Plane,label:"Plano"},{id:"cylinder",icon:Cn.Cylinder,label:"Cilindro"},{id:"sphere",icon:Cn.Sphere,label:"Esfera"},{id:"torus",icon:Cn.Torus,label:"Toro"},{id:"loft",icon:Cn.Loft,label:"Loft"}];return q.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",padding:"12px",backgroundColor:"#2d2d2d",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",minWidth:"60px"},children:[q.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:l.map(h=>q.jsx("button",{onClick:()=>e(h.id),title:h.label,style:{width:"40px",height:"40px",border:"none",borderRadius:"6px",backgroundColor:t===h.id?"#0078d4":"transparent",color:t===h.id?"#fff":"#ccc",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:d=>{t!==h.id&&(d.currentTarget.style.backgroundColor="#3d3d3d",d.currentTarget.style.color="#fff")},onMouseLeave:d=>{t!==h.id&&(d.currentTarget.style.backgroundColor="transparent",d.currentTarget.style.color="#ccc")},children:q.jsx("div",{style:{width:"20px",height:"20px"},children:q.jsx(h.icon,{})})},h.id))}),q.jsx("div",{style:{height:"1px",backgroundColor:"#444",margin:"4px 0"}}),q.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:c.map(h=>q.jsx("button",{onClick:()=>i(h.id===(n==null?void 0:n.type)?null:{type:h.id,params:{}}),title:h.label,style:{width:"40px",height:"40px",border:"none",borderRadius:"6px",backgroundColor:(n==null?void 0:n.type)===h.id?"#0078d4":"transparent",color:(n==null?void 0:n.type)===h.id?"#fff":"#ccc",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:d=>{(n==null?void 0:n.type)!==h.id&&(d.currentTarget.style.backgroundColor="#3d3d3d",d.currentTarget.style.color="#fff")},onMouseLeave:d=>{(n==null?void 0:n.type)!==h.id&&(d.currentTarget.style.backgroundColor="transparent",d.currentTarget.style.color="#ccc")},children:q.jsx("div",{style:{width:"20px",height:"20px"},children:q.jsx(h.icon,{})})},h.id))}),q.jsx("div",{style:{height:"1px",backgroundColor:"#444",margin:"4px 0"}}),q.jsx("button",{onClick:()=>s(!r),title:"Modo Espejo X",style:{width:"40px",height:"40px",border:"none",borderRadius:"6px",backgroundColor:r?"#0078d4":"transparent",color:r?"#fff":"#ccc",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},children:q.jsx("div",{style:{width:"20px",height:"20px"},children:q.jsx(Cn.Mirror,{})})}),q.jsxs("div",{style:{marginTop:"8px",display:"flex",flexDirection:"column",gap:"8px"},children:[q.jsx("input",{type:"color",value:o.color,onChange:h=>a({...o,color:h.target.value}),title:"Color del pincel",style:{width:"40px",height:"40px",border:"none",borderRadius:"6px",cursor:"pointer",backgroundColor:"transparent"}}),q.jsx("input",{type:"range",min:"1",max:"100",value:o.size,onChange:h=>a({...o,size:Number(h.target.value)}),title:"Tamaño del pincel",style:{width:"40px",height:"4px",writingMode:"vertical-lr",direction:"rtl",accentColor:"#0078d4"}})]})]})},IA={display:"flex",flexDirection:"column",gap:"12px",padding:"14px",width:"220px",backgroundColor:"#2d2d2d",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",color:"#ccc",fontSize:"12px",fontFamily:"system-ui, sans-serif"},ls={display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"},cs={width:"100%",accentColor:"#0078d4"},Uu={fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.5px",color:"#888",marginBottom:"2px"},NA=()=>{const{brushSettings:t,setBrushSettings:e,activeSurface:n,setActiveSurface:i,selectedObject:r}=qd(),s=Number((n==null?void 0:n.params.radius)??1),o=Number((n==null?void 0:n.params.segments)??32),a=(l,c)=>{n&&i({...n,params:{...n.params,[l]:c}})};return q.jsxs("div",{style:IA,children:[q.jsx("div",{style:Uu,children:"Pincel"}),q.jsxs("label",{style:ls,children:[q.jsx("span",{children:"Opacidad"}),q.jsxs("span",{children:[Math.round(t.opacity*100),"%"]})]}),q.jsx("input",{type:"range",min:0,max:100,value:Math.round(t.opacity*100),onChange:l=>e({...t,opacity:Number(l.target.value)/100}),style:cs}),q.jsxs("label",{style:ls,children:[q.jsx("span",{children:"Dureza"}),q.jsxs("span",{children:[Math.round(t.hardness*100),"%"]})]}),q.jsx("input",{type:"range",min:0,max:100,value:Math.round(t.hardness*100),onChange:l=>e({...t,hardness:Number(l.target.value)/100}),style:cs}),q.jsxs("label",{style:ls,children:[q.jsx("span",{children:"Sensibilidad a la presión"}),q.jsxs("span",{children:[Math.round(t.pressureSensitivity*100),"%"]})]}),q.jsx("input",{type:"range",min:0,max:100,value:Math.round(t.pressureSensitivity*100),onChange:l=>e({...t,pressureSensitivity:Number(l.target.value)/100}),title:"Cuánto adelgaza el trazo con poca presión del lápiz (0% = ancho constante). El mouse siempre dibuja a ancho completo.",style:cs}),q.jsxs("label",{style:ls,children:[q.jsx("span",{children:"Estabilizador (pulso)"}),q.jsxs("span",{children:[Math.round(t.stabilization*100),"%"]})]}),q.jsx("input",{type:"range",min:0,max:100,value:Math.round(t.stabilization*100),onChange:l=>e({...t,stabilization:Number(l.target.value)/100}),title:"Suaviza el temblor de la mano retrasando un poco el trazo respecto al puntero real (0% = crudo, como antes).",style:cs}),q.jsx("div",{style:{height:"1px",backgroundColor:"#444",margin:"2px 0"}}),q.jsxs("div",{style:Uu,children:["Superficie",n?`: ${n.type}`:""]}),n?q.jsxs(q.Fragment,{children:[q.jsxs("label",{style:ls,children:[q.jsx("span",{children:"Radio"}),q.jsx("span",{children:s.toFixed(1)})]}),q.jsx("input",{type:"range",min:1,max:100,value:s*10,onChange:l=>a("radius",Number(l.target.value)/10),style:cs}),q.jsxs("label",{style:ls,children:[q.jsx("span",{children:"Segmentos"}),q.jsx("span",{children:o})]}),q.jsx("input",{type:"range",min:3,max:128,value:o,onChange:l=>a("segments",Number(l.target.value)),style:cs})]}):q.jsx("div",{style:{opacity:.6,fontStyle:"italic"},children:"Elegí una superficie en la barra para editar sus parámetros."}),r&&q.jsxs(q.Fragment,{children:[q.jsx("div",{style:{height:"1px",backgroundColor:"#444",margin:"2px 0"}}),q.jsx("div",{style:Uu,children:"Selección"}),q.jsxs("div",{children:[r.name??r.id," ",q.jsxs("span",{style:{opacity:.6},children:["(",r.type,")"]})]})]})]})},UA={display:"flex",flexDirection:"column",width:"220px",maxHeight:"260px",backgroundColor:"#2d2d2d",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",color:"#ccc",fontSize:"12px",fontFamily:"system-ui, sans-serif",overflow:"hidden"},OA={display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderBottom:"1px solid #444"},ol={border:"none",background:"transparent",color:"#ccc",cursor:"pointer",fontSize:"14px",lineHeight:1,padding:"2px 6px",borderRadius:"4px"},FA=()=>{const{layers:t,activeLayerId:e,setActiveLayer:n,addLayer:i,removeLayer:r,toggleLayerVisibility:s,toggleLayerLock:o}=qd();return q.jsxs("div",{style:UA,children:[q.jsxs("div",{style:OA,children:[q.jsx("span",{style:{textTransform:"uppercase",letterSpacing:"0.5px",color:"#888"},children:"Capas"}),q.jsx("button",{style:ol,title:"Nueva capa",onClick:()=>i(),children:"＋"})]}),q.jsx("div",{style:{overflowY:"auto"},children:[...t].reverse().map(a=>{const l=a.id===e;return q.jsxs("div",{onClick:()=>n(a.id),style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",cursor:"pointer",backgroundColor:l?"#0078d4":"transparent",color:l?"#fff":"#ccc"},children:[q.jsx("button",{style:{...ol,color:"inherit",opacity:a.visible?1:.4},title:a.visible?"Ocultar":"Mostrar",onClick:c=>{c.stopPropagation(),s(a.id)},children:a.visible?"👁":"⊘"}),q.jsx("button",{style:{...ol,color:"inherit",opacity:a.locked?1:.4},title:a.locked?"Desbloquear":"Bloquear",onClick:c=>{c.stopPropagation(),o(a.id)},children:a.locked?"🔒":"🔓"}),q.jsx("span",{style:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:a.name}),q.jsx("button",{style:{...ol,color:"inherit",opacity:t.length>1?.7:.2},title:"Eliminar capa",disabled:t.length<=1,onClick:c=>{c.stopPropagation(),r(a.id)},children:"🗑"})]},a.id)})})]})},kA={light:"radial-gradient(120% 120% at 50% 10%, #ffffff 0%, #eef1f6 70%, #e6eaf1 100%)",dark:"radial-gradient(120% 120% at 50% 15%, #1b2030 0%, #0e0f13 60%, #08090c 100%)"},zA=({projectId:t="default"})=>{const e=bn.useRef(null),n=bn.useRef(null),i=bn.useRef(null),[r,s]=bn.useState("light");bn.useEffect(()=>{if(!e.current||!n.current)return;const u=new zh;return u.mount(e.current,n.current),u.setTheme(r),i.current=u,window.__low3d=u,()=>{u.dispose(),i.current=null}},[t]),bn.useEffect(()=>{var u;(u=i.current)==null||u.setTheme(r)},[r]);const[o,a]=bn.useState("persp"),[l,c]=bn.useState(!1),h=r==="dark",d=h?"rgba(20,22,28,0.6)":"rgba(255,255,255,0.7)",f=h?"#8a93a6":"#5b6472",p="#0078d4",_=()=>i.current,y=u=>{var v;(v=_())==null||v.setView(u),a(u)},m=(u,v,g=!1,x)=>q.jsx("button",{onClick:v,title:x??u,style:{height:30,padding:"0 10px",borderRadius:6,border:"none",cursor:"pointer",background:g?p:"transparent",color:g?"#fff":f,fontSize:12},children:u});return q.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",background:kA[r],overflow:"hidden"},ref:n,children:[q.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block"},onContextMenu:u=>u.preventDefault()}),q.jsx("div",{style:{position:"absolute",top:14,left:14,zIndex:100},children:q.jsx(DA,{})}),q.jsx("div",{style:{position:"absolute",top:14,right:14,zIndex:100},children:q.jsx(NA,{})}),q.jsx("div",{style:{position:"absolute",bottom:14,left:14,zIndex:100},children:q.jsx(FA,{})}),q.jsx("button",{onClick:()=>s(h?"light":"dark"),title:"Fondo claro / oscuro",style:{position:"absolute",top:14,right:250,zIndex:100,width:36,height:36,borderRadius:8,border:"none",cursor:"pointer",background:d,color:f,fontSize:16},children:h?"☀":"☾"}),q.jsxs("div",{style:{position:"absolute",top:14,left:"50%",transform:"translateX(-50%)",zIndex:100,display:"flex",alignItems:"center",gap:2,padding:4,borderRadius:8,background:d},children:[m("⟲",()=>{var u;return(u=_())==null?void 0:u.undo()},!1,"Deshacer (Ctrl+Z)"),m("⟳",()=>{var u;return(u=_())==null?void 0:u.redo()},!1,"Rehacer (Ctrl+Alt+Z / Ctrl+Shift+Z)"),q.jsx("span",{style:{width:1,height:18,background:h?"#3a3f4b":"#cfd4dd",margin:"0 4px"}}),m("Persp",()=>y("persp"),o==="persp"),m("Frente",()=>y("front"),o==="front","Vista ortogonal de frente (para el primer dibujo)"),m("Detrás",()=>y("back"),o==="back","Vista ortogonal de atrás"),m("Lado",()=>y("right"),o==="right","Vista ortogonal de lado (derecha)"),m("Otro lado",()=>y("left"),o==="left","Vista ortogonal de lado (izquierda)"),m("Arriba",()=>y("top"),o==="top","Vista ortogonal desde arriba"),m("Abajo",()=>y("bottom"),o==="bottom","Vista ortogonal desde abajo"),q.jsx("span",{style:{width:1,height:18,background:h?"#3a3f4b":"#cfd4dd",margin:"0 4px"}}),m("XYZ",()=>{var u;return c(!!((u=_())!=null&&u.toggleAxes()))},l,"Ejes globales XYZ + puntos de fuga de cada eje (solo en perspectiva) — guía visual, no se dibuja ni exporta")]}),q.jsx("button",{onClick:()=>{var u;return(u=i.current)==null?void 0:u.deleteGuide()},title:"Borrar la guía actual (los trazos se conservan)",style:{position:"absolute",top:14,right:294,zIndex:100,height:36,padding:"0 12px",borderRadius:8,border:"none",cursor:"pointer",background:d,color:f,fontSize:12,display:"flex",alignItems:"center",gap:6},children:"🗑 Borrar guía"}),q.jsx("div",{style:{position:"absolute",bottom:14,right:14,zIndex:100,color:f,fontSize:11,fontFamily:"system-ui, sans-serif",background:d,padding:"6px 10px",borderRadius:6,lineHeight:1.5,pointerEvents:"none"},children:"Guía: perfil → orbitá (der.) → Lápiz sobre ella · Mover: click o lazo, arrastrá para mover libre o usá el gizmo con 1 seleccionado · Ctrl+C/V copia · Supr borra · Ctrl+Z / Ctrl+Alt+Z"})]})},Kv=document.getElementById("root");if(!Kv)throw new Error("No se encontró #root");hv(Kv).render(q.jsx(y_.StrictMode,{children:q.jsx(zA,{projectId:"demo"})}));
