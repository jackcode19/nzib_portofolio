function Q_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ym(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Y_={exports:{}},oh={},X_={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=Symbol.for("react.element"),aA=Symbol.for("react.portal"),lA=Symbol.for("react.fragment"),uA=Symbol.for("react.strict_mode"),cA=Symbol.for("react.profiler"),hA=Symbol.for("react.provider"),dA=Symbol.for("react.context"),fA=Symbol.for("react.forward_ref"),pA=Symbol.for("react.suspense"),mA=Symbol.for("react.memo"),gA=Symbol.for("react.lazy"),dv=Symbol.iterator;function yA(t){return t===null||typeof t!="object"?null:(t=dv&&t[dv]||t["@@iterator"],typeof t=="function"?t:null)}var J_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z_=Object.assign,ew={};function mo(t,e,n){this.props=t,this.context=e,this.refs=ew,this.updater=n||J_}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tw(){}tw.prototype=mo.prototype;function vm(t,e,n){this.props=t,this.context=e,this.refs=ew,this.updater=n||J_}var _m=vm.prototype=new tw;_m.constructor=vm;Z_(_m,mo.prototype);_m.isPureReactComponent=!0;var fv=Array.isArray,nw=Object.prototype.hasOwnProperty,wm={current:null},rw={key:!0,ref:!0,__self:!0,__source:!0};function iw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nw.call(e,r)&&!rw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yl,type:t,key:s,ref:o,props:i,_owner:wm.current}}function vA(t,e){return{$$typeof:yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Em(t){return typeof t=="object"&&t!==null&&t.$$typeof===yl}function _A(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pv=/\/+/g;function vd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_A(""+t.key):e.toString(36)}function Mu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yl:case aA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+vd(o,0):r,fv(i)?(n="",t!=null&&(n=t.replace(pv,"$&/")+"/"),Mu(i,e,n,"",function(u){return u})):i!=null&&(Em(i)&&(i=vA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",fv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+vd(s,a);o+=Mu(s,e,n,l,i)}else if(l=yA(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+vd(s,a++),o+=Mu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xl(t,e,n){if(t==null)return t;var r=[],i=0;return Mu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},Vu={transition:null},EA={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:Vu,ReactCurrentOwner:wm};ue.Children={map:Xl,forEach:function(t,e,n){Xl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xl(t,function(){e++}),e},toArray:function(t){return Xl(t,function(e){return e})||[]},only:function(t){if(!Em(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=mo;ue.Fragment=lA;ue.Profiler=cA;ue.PureComponent=vm;ue.StrictMode=uA;ue.Suspense=pA;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EA;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Z_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)nw.call(e,l)&&!rw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:yl,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:dA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hA,_context:t},t.Consumer=t};ue.createElement=iw;ue.createFactory=function(t){var e=iw.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:fA,render:t}};ue.isValidElement=Em;ue.lazy=function(t){return{$$typeof:gA,_payload:{_status:-1,_result:t},_init:wA}};ue.memo=function(t,e){return{$$typeof:mA,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Vu.transition;Vu.transition={};try{t()}finally{Vu.transition=e}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(t,e){return Ut.current.useCallback(t,e)};ue.useContext=function(t){return Ut.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Ut.current.useEffect(t,e)};ue.useId=function(){return Ut.current.useId()};ue.useImperativeHandle=function(t,e,n){return Ut.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Ut.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Ut.current.useReducer(t,e,n)};ue.useRef=function(t){return Ut.current.useRef(t)};ue.useState=function(t){return Ut.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Ut.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Ut.current.useTransition()};ue.version="18.2.0";X_.exports=ue;var b=X_.exports;const ie=ym(b),TA=Q_({__proto__:null,default:ie},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IA=b,SA=Symbol.for("react.element"),kA=Symbol.for("react.fragment"),AA=Object.prototype.hasOwnProperty,xA=IA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RA={key:!0,ref:!0,__self:!0,__source:!0};function sw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)AA.call(e,r)&&!RA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:SA,type:t,key:s,ref:o,props:i,_owner:xA.current}}oh.Fragment=kA;oh.jsx=sw;oh.jsxs=sw;Y_.exports=oh;var _=Y_.exports,Sf={},ow={exports:{}},ln={},aw={exports:{}},lw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,H){var K=D.length;D.push(H);e:for(;0<K;){var re=K-1>>>1,ae=D[re];if(0<i(ae,H))D[re]=H,D[K]=ae,K=re;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var H=D[0],K=D.pop();if(K!==H){D[0]=K;e:for(var re=0,ae=D.length,Me=ae>>>1;re<Me;){var ve=2*(re+1)-1,Be=D[ve],Ve=ve+1,zt=D[Ve];if(0>i(Be,K))Ve<ae&&0>i(zt,Be)?(D[re]=zt,D[Ve]=K,re=Ve):(D[re]=Be,D[ve]=K,re=ve);else if(Ve<ae&&0>i(zt,K))D[re]=zt,D[Ve]=K,re=Ve;else break e}}return H}function i(D,H){var K=D.sortIndex-H.sortIndex;return K!==0?K:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,y=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=D)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function T(D){if(v=!1,g(D),!y)if(n(l)!==null)y=!0,Xt(x);else{var H=n(u);H!==null&&de(T,H.startTime-D)}}function x(D,H){y=!1,v&&(v=!1,p(A),A=-1),m=!0;var K=d;try{for(g(H),h=n(l);h!==null&&(!(h.expirationTime>H)||D&&!ee());){var re=h.callback;if(typeof re=="function"){h.callback=null,d=h.priorityLevel;var ae=re(h.expirationTime<=H);H=t.unstable_now(),typeof ae=="function"?h.callback=ae:h===n(l)&&r(l),g(H)}else r(l);h=n(l)}if(h!==null)var Me=!0;else{var ve=n(u);ve!==null&&de(T,ve.startTime-H),Me=!1}return Me}finally{h=null,d=K,m=!1}}var E=!1,k=null,A=-1,N=5,F=-1;function ee(){return!(t.unstable_now()-F<N)}function Ee(){if(k!==null){var D=t.unstable_now();F=D;var H=!0;try{H=k(!0,D)}finally{H?Te():(E=!1,k=null)}}else E=!1}var Te;if(typeof f=="function")Te=function(){f(Ee)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Yt=Qe.port2;Qe.port1.onmessage=Ee,Te=function(){Yt.postMessage(null)}}else Te=function(){w(Ee,0)};function Xt(D){k=D,E||(E=!0,Te())}function de(D,H){A=w(function(){D(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,Xt(x))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var K=d;d=H;try{return D()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=d;d=D;try{return H()}finally{d=K}},t.unstable_scheduleCallback=function(D,H,K){var re=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?re+K:re):K=re,D){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=K+ae,D={id:c++,callback:H,priorityLevel:D,startTime:K,expirationTime:ae,sortIndex:-1},K>re?(D.sortIndex=K,e(u,D),n(l)===null&&D===n(u)&&(v?(p(A),A=-1):v=!0,de(T,K-re))):(D.sortIndex=ae,e(l,D),y||m||(y=!0,Xt(x))),D},t.unstable_shouldYield=ee,t.unstable_wrapCallback=function(D){var H=d;return function(){var K=d;d=H;try{return D.apply(this,arguments)}finally{d=K}}}})(lw);aw.exports=lw;var bA=aw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uw=b,on=bA;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cw=new Set,xa={};function ns(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(xa[t]=e,t=0;t<e.length;t++)cw.add(e[t])}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kf=Object.prototype.hasOwnProperty,PA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mv={},gv={};function CA(t){return kf.call(gv,t)?!0:kf.call(mv,t)?!1:PA.test(t)?gv[t]=!0:(mv[t]=!0,!1)}function NA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OA(t,e,n,r){if(e===null||typeof e>"u"||NA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tm=/[\-:]([a-z])/g;function Im(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tm,Im);It[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tm,Im);It[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tm,Im);It[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sm(t,e,n,r){var i=It.hasOwnProperty(e)?It[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OA(e,n,i,r)&&(n=null),r||i===null?CA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _r=uw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jl=Symbol.for("react.element"),_s=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),km=Symbol.for("react.strict_mode"),Af=Symbol.for("react.profiler"),hw=Symbol.for("react.provider"),dw=Symbol.for("react.context"),Am=Symbol.for("react.forward_ref"),xf=Symbol.for("react.suspense"),Rf=Symbol.for("react.suspense_list"),xm=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),fw=Symbol.for("react.offscreen"),yv=Symbol.iterator;function Oo(t){return t===null||typeof t!="object"?null:(t=yv&&t[yv]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,_d;function Yo(t){if(_d===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_d=e&&e[1]||""}return`
`+_d+t}var wd=!1;function Ed(t,e){if(!t||wd)return"";wd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Yo(t):""}function DA(t){switch(t.tag){case 5:return Yo(t.type);case 16:return Yo("Lazy");case 13:return Yo("Suspense");case 19:return Yo("SuspenseList");case 0:case 2:case 15:return t=Ed(t.type,!1),t;case 11:return t=Ed(t.type.render,!1),t;case 1:return t=Ed(t.type,!0),t;default:return""}}function bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case _s:return"Portal";case Af:return"Profiler";case km:return"StrictMode";case xf:return"Suspense";case Rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dw:return(t.displayName||"Context")+".Consumer";case hw:return(t._context.displayName||"Context")+".Provider";case Am:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xm:return e=t.displayName||null,e!==null?e:bf(t.type)||"Memo";case br:e=t._payload,t=t._init;try{return bf(t(e))}catch{}}return null}function LA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bf(e);case 8:return e===km?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ni(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MA(t){var e=pw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zl(t){t._valueTracker||(t._valueTracker=MA(t))}function mw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pf(t,e){var n=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ni(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gw(t,e){e=e.checked,e!=null&&Sm(t,"checked",e,!1)}function Cf(t,e){gw(t,e);var n=ni(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nf(t,e.type,ni(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _v(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nf(t,e,n){(e!=="number"||sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xo=Array.isArray;function Fs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ni(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Xo(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ni(n)}}function yw(t,e){var n=ni(e.value),r=ni(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ev(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eu,_w=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(eu=eu||document.createElement("div"),eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VA=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){VA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function ww(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function Ew(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ww(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FA=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lf(t,e){if(e){if(FA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function Mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vf=null;function Rm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ff=null,js=null,Us=null;function Tv(t){if(t=wl(t)){if(typeof Ff!="function")throw Error(O(280));var e=t.stateNode;e&&(e=hh(e),Ff(t.stateNode,t.type,e))}}function Tw(t){js?Us?Us.push(t):Us=[t]:js=t}function Iw(){if(js){var t=js,e=Us;if(Us=js=null,Tv(t),e)for(t=0;t<e.length;t++)Tv(e[t])}}function Sw(t,e){return t(e)}function kw(){}var Td=!1;function Aw(t,e,n){if(Td)return t(e,n);Td=!0;try{return Sw(t,e,n)}finally{Td=!1,(js!==null||Us!==null)&&(kw(),Iw())}}function ba(t,e){var n=t.stateNode;if(n===null)return null;var r=hh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var jf=!1;if(lr)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){jf=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{jf=!1}function jA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var aa=!1,oc=null,ac=!1,Uf=null,UA={onError:function(t){aa=!0,oc=t}};function $A(t,e,n,r,i,s,o,a,l){aa=!1,oc=null,jA.apply(UA,arguments)}function zA(t,e,n,r,i,s,o,a,l){if($A.apply(this,arguments),aa){if(aa){var u=oc;aa=!1,oc=null}else throw Error(O(198));ac||(ac=!0,Uf=u)}}function rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Iv(t){if(rs(t)!==t)throw Error(O(188))}function BA(t){var e=t.alternate;if(!e){if(e=rs(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Iv(i),t;if(s===r)return Iv(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function Rw(t){return t=BA(t),t!==null?bw(t):null}function bw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bw(t);if(e!==null)return e;t=t.sibling}return null}var Pw=on.unstable_scheduleCallback,Sv=on.unstable_cancelCallback,HA=on.unstable_shouldYield,WA=on.unstable_requestPaint,Xe=on.unstable_now,qA=on.unstable_getCurrentPriorityLevel,bm=on.unstable_ImmediatePriority,Cw=on.unstable_UserBlockingPriority,lc=on.unstable_NormalPriority,KA=on.unstable_LowPriority,Nw=on.unstable_IdlePriority,ah=null,zn=null;function GA(t){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(ah,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:XA,QA=Math.log,YA=Math.LN2;function XA(t){return t>>>=0,t===0?32:31-(QA(t)/YA|0)|0}var tu=64,nu=4194304;function Jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Jo(a):(s&=o,s!==0&&(r=Jo(s)))}else o=n&~i,o!==0?r=Jo(o):s!==0&&(r=Jo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Rn(e),i=1<<n,r|=t[n],e&=~i;return r}function JA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Rn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=JA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ow(){var t=tu;return tu<<=1,!(tu&4194240)&&(tu=64),t}function Id(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rn(e),t[e]=n}function ex(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function Dw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lw,Cm,Mw,Vw,Fw,zf=!1,ru=[],Hr=null,Wr=null,qr=null,Pa=new Map,Ca=new Map,Cr=[],tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kv(t,e){switch(t){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":Wr=null;break;case"mouseover":case"mouseout":qr=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Lo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=wl(e),e!==null&&Cm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nx(t,e,n,r,i){switch(e){case"focusin":return Hr=Lo(Hr,t,e,n,r,i),!0;case"dragenter":return Wr=Lo(Wr,t,e,n,r,i),!0;case"mouseover":return qr=Lo(qr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Pa.set(s,Lo(Pa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ca.set(s,Lo(Ca.get(s)||null,t,e,n,r,i)),!0}return!1}function jw(t){var e=Ii(t.target);if(e!==null){var n=rs(e);if(n!==null){if(e=n.tag,e===13){if(e=xw(n),e!==null){t.blockedOn=e,Fw(t.priority,function(){Mw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vf=r,n.target.dispatchEvent(r),Vf=null}else return e=wl(n),e!==null&&Cm(e),t.blockedOn=n,!1;e.shift()}return!0}function Av(t,e,n){Fu(t)&&n.delete(e)}function rx(){zf=!1,Hr!==null&&Fu(Hr)&&(Hr=null),Wr!==null&&Fu(Wr)&&(Wr=null),qr!==null&&Fu(qr)&&(qr=null),Pa.forEach(Av),Ca.forEach(Av)}function Mo(t,e){t.blockedOn===e&&(t.blockedOn=null,zf||(zf=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,rx)))}function Na(t){function e(i){return Mo(i,t)}if(0<ru.length){Mo(ru[0],t);for(var n=1;n<ru.length;n++){var r=ru[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Hr!==null&&Mo(Hr,t),Wr!==null&&Mo(Wr,t),qr!==null&&Mo(qr,t),Pa.forEach(e),Ca.forEach(e),n=0;n<Cr.length;n++)r=Cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)jw(n),n.blockedOn===null&&Cr.shift()}var $s=_r.ReactCurrentBatchConfig,cc=!0;function ix(t,e,n,r){var i=_e,s=$s.transition;$s.transition=null;try{_e=1,Nm(t,e,n,r)}finally{_e=i,$s.transition=s}}function sx(t,e,n,r){var i=_e,s=$s.transition;$s.transition=null;try{_e=4,Nm(t,e,n,r)}finally{_e=i,$s.transition=s}}function Nm(t,e,n,r){if(cc){var i=Bf(t,e,n,r);if(i===null)Od(t,e,r,hc,n),kv(t,r);else if(nx(i,t,e,n,r))r.stopPropagation();else if(kv(t,r),e&4&&-1<tx.indexOf(t)){for(;i!==null;){var s=wl(i);if(s!==null&&Lw(s),s=Bf(t,e,n,r),s===null&&Od(t,e,r,hc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Od(t,e,r,null,n)}}var hc=null;function Bf(t,e,n,r){if(hc=null,t=Rm(r),t=Ii(t),t!==null)if(e=rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hc=t,null}function Uw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qA()){case bm:return 1;case Cw:return 4;case lc:case KA:return 16;case Nw:return 536870912;default:return 16}default:return 16}}var jr=null,Om=null,ju=null;function $w(){if(ju)return ju;var t,e=Om,n=e.length,r,i="value"in jr?jr.value:jr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ju=i.slice(t,1<r?1-r:void 0)}function Uu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function iu(){return!0}function xv(){return!1}function un(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?iu:xv,this.isPropagationStopped=xv,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=iu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=iu)},persist:function(){},isPersistent:iu}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dm=un(go),_l=Ue({},go,{view:0,detail:0}),ox=un(_l),Sd,kd,Vo,lh=Ue({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vo&&(Vo&&t.type==="mousemove"?(Sd=t.screenX-Vo.screenX,kd=t.screenY-Vo.screenY):kd=Sd=0,Vo=t),Sd)},movementY:function(t){return"movementY"in t?t.movementY:kd}}),Rv=un(lh),ax=Ue({},lh,{dataTransfer:0}),lx=un(ax),ux=Ue({},_l,{relatedTarget:0}),Ad=un(ux),cx=Ue({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),hx=un(cx),dx=Ue({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fx=un(dx),px=Ue({},go,{data:0}),bv=un(px),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yx[t])?!!e[t]:!1}function Lm(){return vx}var _x=Ue({},_l,{key:function(t){if(t.key){var e=mx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Uu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lm,charCode:function(t){return t.type==="keypress"?Uu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Uu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wx=un(_x),Ex=Ue({},lh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pv=un(Ex),Tx=Ue({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lm}),Ix=un(Tx),Sx=Ue({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=un(Sx),Ax=Ue({},lh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=un(Ax),Rx=[9,13,27,32],Mm=lr&&"CompositionEvent"in window,la=null;lr&&"documentMode"in document&&(la=document.documentMode);var bx=lr&&"TextEvent"in window&&!la,zw=lr&&(!Mm||la&&8<la&&11>=la),Cv=" ",Nv=!1;function Bw(t,e){switch(t){case"keyup":return Rx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function Px(t,e){switch(t){case"compositionend":return Hw(e);case"keypress":return e.which!==32?null:(Nv=!0,Cv);case"textInput":return t=e.data,t===Cv&&Nv?null:t;default:return null}}function Cx(t,e){if(Es)return t==="compositionend"||!Mm&&Bw(t,e)?(t=$w(),ju=Om=jr=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zw&&e.locale!=="ko"?null:e.data;default:return null}}var Nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ov(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nx[t.type]:e==="textarea"}function Ww(t,e,n,r){Tw(r),e=dc(e,"onChange"),0<e.length&&(n=new Dm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ua=null,Oa=null;function Ox(t){nE(t,0)}function uh(t){var e=Ss(t);if(mw(e))return t}function Dx(t,e){if(t==="change")return e}var qw=!1;if(lr){var xd;if(lr){var Rd="oninput"in document;if(!Rd){var Dv=document.createElement("div");Dv.setAttribute("oninput","return;"),Rd=typeof Dv.oninput=="function"}xd=Rd}else xd=!1;qw=xd&&(!document.documentMode||9<document.documentMode)}function Lv(){ua&&(ua.detachEvent("onpropertychange",Kw),Oa=ua=null)}function Kw(t){if(t.propertyName==="value"&&uh(Oa)){var e=[];Ww(e,Oa,t,Rm(t)),Aw(Ox,e)}}function Lx(t,e,n){t==="focusin"?(Lv(),ua=e,Oa=n,ua.attachEvent("onpropertychange",Kw)):t==="focusout"&&Lv()}function Mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uh(Oa)}function Vx(t,e){if(t==="click")return uh(e)}function Fx(t,e){if(t==="input"||t==="change")return uh(e)}function jx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:jx;function Da(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kf.call(e,i)||!Pn(t[i],e[i]))return!1}return!0}function Mv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vv(t,e){var n=Mv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mv(n)}}function Gw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qw(){for(var t=window,e=sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sc(t.document)}return e}function Vm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ux(t){var e=Qw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gw(n.ownerDocument.documentElement,n)){if(r!==null&&Vm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Vv(n,s);var o=Vv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $x=lr&&"documentMode"in document&&11>=document.documentMode,Ts=null,Hf=null,ca=null,Wf=!1;function Fv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wf||Ts==null||Ts!==sc(r)||(r=Ts,"selectionStart"in r&&Vm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ca&&Da(ca,r)||(ca=r,r=dc(Hf,"onSelect"),0<r.length&&(e=new Dm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ts)))}function su(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Is={animationend:su("Animation","AnimationEnd"),animationiteration:su("Animation","AnimationIteration"),animationstart:su("Animation","AnimationStart"),transitionend:su("Transition","TransitionEnd")},bd={},Yw={};lr&&(Yw=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function ch(t){if(bd[t])return bd[t];if(!Is[t])return t;var e=Is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yw)return bd[t]=e[n];return t}var Xw=ch("animationend"),Jw=ch("animationiteration"),Zw=ch("animationstart"),eE=ch("transitionend"),tE=new Map,jv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hi(t,e){tE.set(t,e),ns(e,[t])}for(var Pd=0;Pd<jv.length;Pd++){var Cd=jv[Pd],zx=Cd.toLowerCase(),Bx=Cd[0].toUpperCase()+Cd.slice(1);hi(zx,"on"+Bx)}hi(Xw,"onAnimationEnd");hi(Jw,"onAnimationIteration");hi(Zw,"onAnimationStart");hi("dblclick","onDoubleClick");hi("focusin","onFocus");hi("focusout","onBlur");hi(eE,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function Uv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zA(r,e,void 0,t),t.currentTarget=null}function nE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Uv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Uv(i,a,u),s=l}}}if(ac)throw t=Uf,ac=!1,Uf=null,t}function xe(t,e){var n=e[Yf];n===void 0&&(n=e[Yf]=new Set);var r=t+"__bubble";n.has(r)||(rE(e,t,2,!1),n.add(r))}function Nd(t,e,n){var r=0;e&&(r|=4),rE(n,t,r,e)}var ou="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[ou]){t[ou]=!0,cw.forEach(function(n){n!=="selectionchange"&&(Hx.has(n)||Nd(n,!1,t),Nd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ou]||(e[ou]=!0,Nd("selectionchange",!1,e))}}function rE(t,e,n,r){switch(Uw(e)){case 1:var i=ix;break;case 4:i=sx;break;default:i=Nm}n=i.bind(null,e,n,t),i=void 0,!jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Od(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ii(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Aw(function(){var u=s,c=Rm(n),h=[];e:{var d=tE.get(t);if(d!==void 0){var m=Dm,y=t;switch(t){case"keypress":if(Uu(n)===0)break e;case"keydown":case"keyup":m=wx;break;case"focusin":y="focus",m=Ad;break;case"focusout":y="blur",m=Ad;break;case"beforeblur":case"afterblur":m=Ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Rv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ix;break;case Xw:case Jw:case Zw:m=hx;break;case eE:m=kx;break;case"scroll":m=ox;break;case"wheel":m=xx;break;case"copy":case"cut":case"paste":m=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Pv}var v=(e&4)!==0,w=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var T=g.stateNode;if(g.tag===5&&T!==null&&(g=T,p!==null&&(T=ba(f,p),T!=null&&v.push(Ma(f,T,g)))),w)break;f=f.return}0<v.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Vf&&(y=n.relatedTarget||n.fromElement)&&(Ii(y)||y[ur]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Ii(y):null,y!==null&&(w=rs(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(v=Rv,T="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Pv,T="onPointerLeave",p="onPointerEnter",f="pointer"),w=m==null?d:Ss(m),g=y==null?d:Ss(y),d=new v(T,f+"leave",m,n,c),d.target=w,d.relatedTarget=g,T=null,Ii(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=g,v.relatedTarget=w,T=v),w=T,m&&y)t:{for(v=m,p=y,f=0,g=v;g;g=fs(g))f++;for(g=0,T=p;T;T=fs(T))g++;for(;0<f-g;)v=fs(v),f--;for(;0<g-f;)p=fs(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=fs(v),p=fs(p)}v=null}else v=null;m!==null&&$v(h,d,m,v,!1),y!==null&&w!==null&&$v(h,w,y,v,!0)}}e:{if(d=u?Ss(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var x=Dx;else if(Ov(d))if(qw)x=Fx;else{x=Mx;var E=Lx}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=Vx);if(x&&(x=x(t,u))){Ww(h,x,n,c);break e}E&&E(t,d,u),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&Nf(d,"number",d.value)}switch(E=u?Ss(u):window,t){case"focusin":(Ov(E)||E.contentEditable==="true")&&(Ts=E,Hf=u,ca=null);break;case"focusout":ca=Hf=Ts=null;break;case"mousedown":Wf=!0;break;case"contextmenu":case"mouseup":case"dragend":Wf=!1,Fv(h,n,c);break;case"selectionchange":if($x)break;case"keydown":case"keyup":Fv(h,n,c)}var k;if(Mm)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Es?Bw(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(zw&&n.locale!=="ko"&&(Es||A!=="onCompositionStart"?A==="onCompositionEnd"&&Es&&(k=$w()):(jr=c,Om="value"in jr?jr.value:jr.textContent,Es=!0)),E=dc(u,A),0<E.length&&(A=new bv(A,t,null,n,c),h.push({event:A,listeners:E}),k?A.data=k:(k=Hw(n),k!==null&&(A.data=k)))),(k=bx?Px(t,n):Cx(t,n))&&(u=dc(u,"onBeforeInput"),0<u.length&&(c=new bv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=k))}nE(h,e)})}function Ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ba(t,n),s!=null&&r.unshift(Ma(t,s,i)),s=ba(t,e),s!=null&&r.push(Ma(t,s,i))),t=t.return}return r}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $v(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ba(n,s),l!=null&&o.unshift(Ma(n,l,a))):i||(l=ba(n,s),l!=null&&o.push(Ma(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Wx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function zv(t){return(typeof t=="string"?t:""+t).replace(Wx,`
`).replace(qx,"")}function au(t,e,n){if(e=zv(e),zv(t)!==e&&n)throw Error(O(425))}function fc(){}var qf=null,Kf=null;function Gf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qf=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,Bv=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof Bv<"u"?function(t){return Bv.resolve(null).then(t).catch(Qx)}:Qf;function Qx(t){setTimeout(function(){throw t})}function Dd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Na(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Na(e)}function Kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var yo=Math.random().toString(36).slice(2),Mn="__reactFiber$"+yo,Va="__reactProps$"+yo,ur="__reactContainer$"+yo,Yf="__reactEvents$"+yo,Yx="__reactListeners$"+yo,Xx="__reactHandles$"+yo;function Ii(t){var e=t[Mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[Mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hv(t);t!==null;){if(n=t[Mn])return n;t=Hv(t)}return e}t=n,n=t.parentNode}return null}function wl(t){return t=t[Mn]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function hh(t){return t[Va]||null}var Xf=[],ks=-1;function di(t){return{current:t}}function Ce(t){0>ks||(t.current=Xf[ks],Xf[ks]=null,ks--)}function ke(t,e){ks++,Xf[ks]=t.current,t.current=e}var ri={},Nt=di(ri),Kt=di(!1),$i=ri;function Js(t,e){var n=t.type.contextTypes;if(!n)return ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Gt(t){return t=t.childContextTypes,t!=null}function pc(){Ce(Kt),Ce(Nt)}function Wv(t,e,n){if(Nt.current!==ri)throw Error(O(168));ke(Nt,e),ke(Kt,n)}function iE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,LA(t)||"Unknown",i));return Ue({},n,r)}function mc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ri,$i=Nt.current,ke(Nt,t),ke(Kt,Kt.current),!0}function qv(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=iE(t,e,$i),r.__reactInternalMemoizedMergedChildContext=t,Ce(Kt),Ce(Nt),ke(Nt,t)):Ce(Kt),ke(Kt,n)}var tr=null,dh=!1,Ld=!1;function sE(t){tr===null?tr=[t]:tr.push(t)}function Jx(t){dh=!0,sE(t)}function fi(){if(!Ld&&tr!==null){Ld=!0;var t=0,e=_e;try{var n=tr;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tr=null,dh=!1}catch(i){throw tr!==null&&(tr=tr.slice(t+1)),Pw(bm,fi),i}finally{_e=e,Ld=!1}}return null}var As=[],xs=0,gc=null,yc=0,fn=[],pn=0,zi=null,nr=1,rr="";function _i(t,e){As[xs++]=yc,As[xs++]=gc,gc=t,yc=e}function oE(t,e,n){fn[pn++]=nr,fn[pn++]=rr,fn[pn++]=zi,zi=t;var r=nr;t=rr;var i=32-Rn(r)-1;r&=~(1<<i),n+=1;var s=32-Rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nr=1<<32-Rn(e)+i|n<<i|r,rr=s+t}else nr=1<<s|n<<i|r,rr=t}function Fm(t){t.return!==null&&(_i(t,1),oE(t,1,0))}function jm(t){for(;t===gc;)gc=As[--xs],As[xs]=null,yc=As[--xs],As[xs]=null;for(;t===zi;)zi=fn[--pn],fn[pn]=null,rr=fn[--pn],fn[pn]=null,nr=fn[--pn],fn[pn]=null}var nn=null,en=null,Le=!1,kn=null;function aE(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nn=t,en=Kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nn=t,en=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zi!==null?{id:nr,overflow:rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nn=t,en=null,!0):!1;default:return!1}}function Jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zf(t){if(Le){var e=en;if(e){var n=e;if(!Kv(t,e)){if(Jf(t))throw Error(O(418));e=Kr(n.nextSibling);var r=nn;e&&Kv(t,e)?aE(r,n):(t.flags=t.flags&-4097|2,Le=!1,nn=t)}}else{if(Jf(t))throw Error(O(418));t.flags=t.flags&-4097|2,Le=!1,nn=t}}}function Gv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nn=t}function lu(t){if(t!==nn)return!1;if(!Le)return Gv(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gf(t.type,t.memoizedProps)),e&&(e=en)){if(Jf(t))throw lE(),Error(O(418));for(;e;)aE(t,e),e=Kr(e.nextSibling)}if(Gv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){en=Kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}en=null}}else en=nn?Kr(t.stateNode.nextSibling):null;return!0}function lE(){for(var t=en;t;)t=Kr(t.nextSibling)}function Zs(){en=nn=null,Le=!1}function Um(t){kn===null?kn=[t]:kn.push(t)}var Zx=_r.ReactCurrentBatchConfig;function Tn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var vc=di(null),_c=null,Rs=null,$m=null;function zm(){$m=Rs=_c=null}function Bm(t){var e=vc.current;Ce(vc),t._currentValue=e}function ep(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zs(t,e){_c=t,$m=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function _n(t){var e=t._currentValue;if($m!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(_c===null)throw Error(O(308));Rs=t,_c.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Si=null;function Hm(t){Si===null?Si=[t]:Si.push(t)}function uE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Hm(e)):(n.next=i.next,i.next=n),e.interleaved=n,cr(t,r)}function cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pr=!1;function Wm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,cr(t,n)}return i=r.interleaved,i===null?(e.next=e,Hm(r)):(e.next=i.next,i.next=e),r.interleaved=e,cr(t,n)}function $u(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pm(t,n)}}function Qv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wc(t,e,n,r){var i=t.updateQueue;Pr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=Ue({},h,d);break e;case 2:Pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hi|=o,t.lanes=o,t.memoizedState=h}}function Yv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var hE=new uw.Component().refs;function tp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fh={isMounted:function(t){return(t=t._reactInternals)?rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=Yr(t),s=ar(r,i);s.payload=e,n!=null&&(s.callback=n),e=Gr(t,s,i),e!==null&&(bn(e,t,i,r),$u(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=Yr(t),s=ar(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gr(t,s,i),e!==null&&(bn(e,t,i,r),$u(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=Yr(t),i=ar(n,r);i.tag=2,e!=null&&(i.callback=e),e=Gr(t,i,r),e!==null&&(bn(e,t,r,n),$u(e,t,r))}};function Xv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Da(n,r)||!Da(i,s):!0}function dE(t,e,n){var r=!1,i=ri,s=e.contextType;return typeof s=="object"&&s!==null?s=_n(s):(i=Gt(e)?$i:Nt.current,r=e.contextTypes,s=(r=r!=null)?Js(t,i):ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fh.enqueueReplaceState(e,e.state,null)}function np(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=hE,Wm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_n(s):(s=Gt(e)?$i:Nt.current,i.context=Js(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fh.enqueueReplaceState(i,i.state,null),wc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===hE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function uu(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zv(t){var e=t._init;return e(t._payload)}function fE(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Xr(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,T){return f===null||f.tag!==6?(f=zd(g,p.mode,T),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,T){var x=g.type;return x===ws?c(p,f,g.props.children,T,g.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===br&&Zv(x)===f.type)?(T=i(f,g.props),T.ref=Fo(p,f,g),T.return=p,T):(T=Ku(g.type,g.key,g.props,null,p.mode,T),T.ref=Fo(p,f,g),T.return=p,T)}function u(p,f,g,T){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Bd(g,p.mode,T),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,T,x){return f===null||f.tag!==7?(f=Li(g,p.mode,T,x),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=zd(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Jl:return g=Ku(f.type,f.key,f.props,null,p.mode,g),g.ref=Fo(p,null,f),g.return=p,g;case _s:return f=Bd(f,p.mode,g),f.return=p,f;case br:var T=f._init;return h(p,T(f._payload),g)}if(Xo(f)||Oo(f))return f=Li(f,p.mode,g,null),f.return=p,f;uu(p,f)}return null}function d(p,f,g,T){var x=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:a(p,f,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Jl:return g.key===x?l(p,f,g,T):null;case _s:return g.key===x?u(p,f,g,T):null;case br:return x=g._init,d(p,f,x(g._payload),T)}if(Xo(g)||Oo(g))return x!==null?null:c(p,f,g,T,null);uu(p,g)}return null}function m(p,f,g,T,x){if(typeof T=="string"&&T!==""||typeof T=="number")return p=p.get(g)||null,a(f,p,""+T,x);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Jl:return p=p.get(T.key===null?g:T.key)||null,l(f,p,T,x);case _s:return p=p.get(T.key===null?g:T.key)||null,u(f,p,T,x);case br:var E=T._init;return m(p,f,g,E(T._payload),x)}if(Xo(T)||Oo(T))return p=p.get(g)||null,c(f,p,T,x,null);uu(f,T)}return null}function y(p,f,g,T){for(var x=null,E=null,k=f,A=f=0,N=null;k!==null&&A<g.length;A++){k.index>A?(N=k,k=null):N=k.sibling;var F=d(p,k,g[A],T);if(F===null){k===null&&(k=N);break}t&&k&&F.alternate===null&&e(p,k),f=s(F,f,A),E===null?x=F:E.sibling=F,E=F,k=N}if(A===g.length)return n(p,k),Le&&_i(p,A),x;if(k===null){for(;A<g.length;A++)k=h(p,g[A],T),k!==null&&(f=s(k,f,A),E===null?x=k:E.sibling=k,E=k);return Le&&_i(p,A),x}for(k=r(p,k);A<g.length;A++)N=m(k,p,A,g[A],T),N!==null&&(t&&N.alternate!==null&&k.delete(N.key===null?A:N.key),f=s(N,f,A),E===null?x=N:E.sibling=N,E=N);return t&&k.forEach(function(ee){return e(p,ee)}),Le&&_i(p,A),x}function v(p,f,g,T){var x=Oo(g);if(typeof x!="function")throw Error(O(150));if(g=x.call(g),g==null)throw Error(O(151));for(var E=x=null,k=f,A=f=0,N=null,F=g.next();k!==null&&!F.done;A++,F=g.next()){k.index>A?(N=k,k=null):N=k.sibling;var ee=d(p,k,F.value,T);if(ee===null){k===null&&(k=N);break}t&&k&&ee.alternate===null&&e(p,k),f=s(ee,f,A),E===null?x=ee:E.sibling=ee,E=ee,k=N}if(F.done)return n(p,k),Le&&_i(p,A),x;if(k===null){for(;!F.done;A++,F=g.next())F=h(p,F.value,T),F!==null&&(f=s(F,f,A),E===null?x=F:E.sibling=F,E=F);return Le&&_i(p,A),x}for(k=r(p,k);!F.done;A++,F=g.next())F=m(k,p,A,F.value,T),F!==null&&(t&&F.alternate!==null&&k.delete(F.key===null?A:F.key),f=s(F,f,A),E===null?x=F:E.sibling=F,E=F);return t&&k.forEach(function(Ee){return e(p,Ee)}),Le&&_i(p,A),x}function w(p,f,g,T){if(typeof g=="object"&&g!==null&&g.type===ws&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Jl:e:{for(var x=g.key,E=f;E!==null;){if(E.key===x){if(x=g.type,x===ws){if(E.tag===7){n(p,E.sibling),f=i(E,g.props.children),f.return=p,p=f;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===br&&Zv(x)===E.type){n(p,E.sibling),f=i(E,g.props),f.ref=Fo(p,E,g),f.return=p,p=f;break e}n(p,E);break}else e(p,E);E=E.sibling}g.type===ws?(f=Li(g.props.children,p.mode,T,g.key),f.return=p,p=f):(T=Ku(g.type,g.key,g.props,null,p.mode,T),T.ref=Fo(p,f,g),T.return=p,p=T)}return o(p);case _s:e:{for(E=g.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Bd(g,p.mode,T),f.return=p,p=f}return o(p);case br:return E=g._init,w(p,f,E(g._payload),T)}if(Xo(g))return y(p,f,g,T);if(Oo(g))return v(p,f,g,T);uu(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=zd(g,p.mode,T),f.return=p,p=f),o(p)):n(p,f)}return w}var eo=fE(!0),pE=fE(!1),El={},Bn=di(El),Fa=di(El),ja=di(El);function ki(t){if(t===El)throw Error(O(174));return t}function qm(t,e){switch(ke(ja,e),ke(Fa,t),ke(Bn,El),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Df(e,t)}Ce(Bn),ke(Bn,e)}function to(){Ce(Bn),Ce(Fa),Ce(ja)}function mE(t){ki(ja.current);var e=ki(Bn.current),n=Df(e,t.type);e!==n&&(ke(Fa,t),ke(Bn,n))}function Km(t){Fa.current===t&&(Ce(Bn),Ce(Fa))}var Fe=di(0);function Ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Md=[];function Gm(){for(var t=0;t<Md.length;t++)Md[t]._workInProgressVersionPrimary=null;Md.length=0}var zu=_r.ReactCurrentDispatcher,Vd=_r.ReactCurrentBatchConfig,Bi=0,je=null,it=null,ht=null,Tc=!1,ha=!1,Ua=0,eR=0;function St(){throw Error(O(321))}function Qm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function Ym(t,e,n,r,i,s){if(Bi=s,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zu.current=t===null||t.memoizedState===null?iR:sR,t=n(r,i),ha){s=0;do{if(ha=!1,Ua=0,25<=s)throw Error(O(301));s+=1,ht=it=null,e.updateQueue=null,zu.current=oR,t=n(r,i)}while(ha)}if(zu.current=Ic,e=it!==null&&it.next!==null,Bi=0,ht=it=je=null,Tc=!1,e)throw Error(O(300));return t}function Xm(){var t=Ua!==0;return Ua=0,t}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?je.memoizedState=ht=t:ht=ht.next=t,ht}function wn(){if(it===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=ht===null?je.memoizedState:ht.next;if(e!==null)ht=e,it=t;else{if(t===null)throw Error(O(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ht===null?je.memoizedState=ht=t:ht=ht.next=t}return ht}function $a(t,e){return typeof e=="function"?e(t):e}function Fd(t){var e=wn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=it,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Bi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,je.lanes|=c,Hi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Pn(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,je.lanes|=s,Hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jd(t){var e=wn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Pn(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function gE(){}function yE(t,e){var n=je,r=wn(),i=e(),s=!Pn(r.memoizedState,i);if(s&&(r.memoizedState=i,qt=!0),r=r.queue,Jm(wE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,za(9,_E.bind(null,n,r,i,e),void 0,null),dt===null)throw Error(O(349));Bi&30||vE(n,e,i)}return i}function vE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _E(t,e,n,r){e.value=n,e.getSnapshot=r,EE(e)&&TE(t)}function wE(t,e,n){return n(function(){EE(e)&&TE(t)})}function EE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function TE(t){var e=cr(t,1);e!==null&&bn(e,t,1,-1)}function e0(t){var e=Ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},e.queue=t,t=t.dispatch=rR.bind(null,je,t),[e.memoizedState,t]}function za(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function IE(){return wn().memoizedState}function Bu(t,e,n,r){var i=Ln();je.flags|=t,i.memoizedState=za(1|e,n,void 0,r===void 0?null:r)}function ph(t,e,n,r){var i=wn();r=r===void 0?null:r;var s=void 0;if(it!==null){var o=it.memoizedState;if(s=o.destroy,r!==null&&Qm(r,o.deps)){i.memoizedState=za(e,n,s,r);return}}je.flags|=t,i.memoizedState=za(1|e,n,s,r)}function t0(t,e){return Bu(8390656,8,t,e)}function Jm(t,e){return ph(2048,8,t,e)}function SE(t,e){return ph(4,2,t,e)}function kE(t,e){return ph(4,4,t,e)}function AE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xE(t,e,n){return n=n!=null?n.concat([t]):null,ph(4,4,AE.bind(null,e,t),n)}function Zm(){}function RE(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function bE(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function PE(t,e,n){return Bi&21?(Pn(n,e)||(n=Ow(),je.lanes|=n,Hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function tR(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=Vd.transition;Vd.transition={};try{t(!1),e()}finally{_e=n,Vd.transition=r}}function CE(){return wn().memoizedState}function nR(t,e,n){var r=Yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},NE(t))OE(e,n);else if(n=uE(t,e,n,r),n!==null){var i=jt();bn(n,t,r,i),DE(n,e,r)}}function rR(t,e,n){var r=Yr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(NE(t))OE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Pn(a,o)){var l=e.interleaved;l===null?(i.next=i,Hm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=uE(t,e,i,r),n!==null&&(i=jt(),bn(n,t,r,i),DE(n,e,r))}}function NE(t){var e=t.alternate;return t===je||e!==null&&e===je}function OE(t,e){ha=Tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function DE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pm(t,n)}}var Ic={readContext:_n,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},iR={readContext:_n,useCallback:function(t,e){return Ln().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:t0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bu(4194308,4,AE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bu(4,2,t,e)},useMemo:function(t,e){var n=Ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nR.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=Ln();return t={current:t},e.memoizedState=t},useState:e0,useDebugValue:Zm,useDeferredValue:function(t){return Ln().memoizedState=t},useTransition:function(){var t=e0(!1),e=t[0];return t=tR.bind(null,t[1]),Ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=Ln();if(Le){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),dt===null)throw Error(O(349));Bi&30||vE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,t0(wE.bind(null,r,s,t),[t]),r.flags|=2048,za(9,_E.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ln(),e=dt.identifierPrefix;if(Le){var n=rr,r=nr;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sR={readContext:_n,useCallback:RE,useContext:_n,useEffect:Jm,useImperativeHandle:xE,useInsertionEffect:SE,useLayoutEffect:kE,useMemo:bE,useReducer:Fd,useRef:IE,useState:function(){return Fd($a)},useDebugValue:Zm,useDeferredValue:function(t){var e=wn();return PE(e,it.memoizedState,t)},useTransition:function(){var t=Fd($a)[0],e=wn().memoizedState;return[t,e]},useMutableSource:gE,useSyncExternalStore:yE,useId:CE,unstable_isNewReconciler:!1},oR={readContext:_n,useCallback:RE,useContext:_n,useEffect:Jm,useImperativeHandle:xE,useInsertionEffect:SE,useLayoutEffect:kE,useMemo:bE,useReducer:jd,useRef:IE,useState:function(){return jd($a)},useDebugValue:Zm,useDeferredValue:function(t){var e=wn();return it===null?e.memoizedState=t:PE(e,it.memoizedState,t)},useTransition:function(){var t=jd($a)[0],e=wn().memoizedState;return[t,e]},useMutableSource:gE,useSyncExternalStore:yE,useId:CE,unstable_isNewReconciler:!1};function no(t,e){try{var n="",r=e;do n+=DA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ud(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aR=typeof WeakMap=="function"?WeakMap:Map;function LE(t,e,n){n=ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kc||(kc=!0,fp=r),rp(t,e)},n}function ME(t,e,n){n=ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rp(t,e),typeof r!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function n0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ER.bind(null,t,e,n),e.then(t,t))}function r0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function i0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ar(-1,1),e.tag=2,Gr(n,e,1))),n.lanes|=1),t)}var lR=_r.ReactCurrentOwner,qt=!1;function Lt(t,e,n,r){e.child=t===null?pE(e,null,n,r):eo(e,t.child,n,r)}function s0(t,e,n,r,i){n=n.render;var s=e.ref;return zs(e,i),r=Ym(t,e,n,r,s,i),n=Xm(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,hr(t,e,i)):(Le&&n&&Fm(e),e.flags|=1,Lt(t,e,r,i),e.child)}function o0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ag(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,VE(t,e,s,r,i)):(t=Ku(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Da,n(o,r)&&t.ref===e.ref)return hr(t,e,i)}return e.flags|=1,t=Xr(s,r),t.ref=e.ref,t.return=e,e.child=t}function VE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Da(s,r)&&t.ref===e.ref)if(qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,hr(t,e,i)}return ip(t,e,n,r,i)}function FE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Ps,Zt),Zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(Ps,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(Ps,Zt),Zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(Ps,Zt),Zt|=r;return Lt(t,e,i,n),e.child}function jE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ip(t,e,n,r,i){var s=Gt(n)?$i:Nt.current;return s=Js(e,s),zs(e,i),n=Ym(t,e,n,r,s,i),r=Xm(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,hr(t,e,i)):(Le&&r&&Fm(e),e.flags|=1,Lt(t,e,n,i),e.child)}function a0(t,e,n,r,i){if(Gt(n)){var s=!0;mc(e)}else s=!1;if(zs(e,i),e.stateNode===null)Hu(t,e),dE(e,n,r),np(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_n(u):(u=Gt(n)?$i:Nt.current,u=Js(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Jv(e,o,r,u),Pr=!1;var d=e.memoizedState;o.state=d,wc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Kt.current||Pr?(typeof c=="function"&&(tp(e,n,c,r),l=e.memoizedState),(a=Pr||Xv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Tn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_n(l):(l=Gt(n)?$i:Nt.current,l=Js(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Jv(e,o,r,l),Pr=!1,d=e.memoizedState,o.state=d,wc(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Kt.current||Pr?(typeof m=="function"&&(tp(e,n,m,r),y=e.memoizedState),(u=Pr||Xv(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return sp(t,e,n,r,s,i)}function sp(t,e,n,r,i,s){jE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&qv(e,n,!1),hr(t,e,s);r=e.stateNode,lR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=eo(e,t.child,null,s),e.child=eo(e,null,a,s)):Lt(t,e,a,s),e.memoizedState=r.state,i&&qv(e,n,!0),e.child}function UE(t){var e=t.stateNode;e.pendingContext?Wv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wv(t,e.context,!1),qm(t,e.containerInfo)}function l0(t,e,n,r,i){return Zs(),Um(i),e.flags|=256,Lt(t,e,n,r),e.child}var op={dehydrated:null,treeContext:null,retryLane:0};function ap(t){return{baseLanes:t,cachePool:null,transitions:null}}function $E(t,e,n){var r=e.pendingProps,i=Fe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Fe,i&1),t===null)return Zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yh(o,r,0,null),t=Li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ap(n),e.memoizedState=op,t):eg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Xr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Xr(a,s):(s=Li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ap(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=op,r}return s=t.child,t=s.sibling,r=Xr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function eg(t,e){return e=yh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cu(t,e,n,r){return r!==null&&Um(r),eo(e,t.child,null,n),t=eg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ud(Error(O(422))),cu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yh({mode:"visible",children:r.children},i,0,null),s=Li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&eo(e,t.child,null,o),e.child.memoizedState=ap(o),e.memoizedState=op,s);if(!(e.mode&1))return cu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=Ud(s,r,void 0),cu(t,e,o,r)}if(a=(o&t.childLanes)!==0,qt||a){if(r=dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,cr(t,i),bn(r,t,i,-1))}return og(),r=Ud(Error(O(421))),cu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=TR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,en=Kr(i.nextSibling),nn=e,Le=!0,kn=null,t!==null&&(fn[pn++]=nr,fn[pn++]=rr,fn[pn++]=zi,nr=t.id,rr=t.overflow,zi=e),e=eg(e,r.children),e.flags|=4096,e)}function u0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ep(t.return,e,n)}function $d(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Lt(t,e,r.children,n),r=Fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u0(t,n,e);else if(t.tag===19)u0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$d(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$d(e,!0,n,null,s);break;case"together":$d(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=Xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cR(t,e,n){switch(e.tag){case 3:UE(e),Zs();break;case 5:mE(e);break;case 1:Gt(e.type)&&mc(e);break;case 4:qm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(vc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Fe,Fe.current&1),e.flags|=128,null):n&e.child.childLanes?$E(t,e,n):(ke(Fe,Fe.current&1),t=hr(t,e,n),t!==null?t.sibling:null);ke(Fe,Fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return zE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Fe,Fe.current),r)break;return null;case 22:case 23:return e.lanes=0,FE(t,e,n)}return hr(t,e,n)}var BE,lp,HE,WE;BE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lp=function(){};HE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ki(Bn.current);var s=null;switch(n){case"input":i=Pf(t,i),r=Pf(t,r),s=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),s=[];break;case"textarea":i=Of(t,i),r=Of(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fc)}Lf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&xe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};WE=function(t,e,n,r){n!==r&&(e.flags|=4)};function jo(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hR(t,e,n){var r=e.pendingProps;switch(jm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return Gt(e.type)&&pc(),kt(e),null;case 3:return r=e.stateNode,to(),Ce(Kt),Ce(Nt),Gm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(gp(kn),kn=null))),lp(t,e),kt(e),null;case 5:Km(e);var i=ki(ja.current);if(n=e.type,t!==null&&e.stateNode!=null)HE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return kt(e),null}if(t=ki(Bn.current),lu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mn]=e,r[Va]=s,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<Zo.length;i++)xe(Zo[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":vv(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":wv(r,s),xe("invalid",r)}Lf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&au(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&au(r.textContent,a,t),i=["children",""+a]):xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":Zl(r),_v(r,s,!0);break;case"textarea":Zl(r),Ev(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mn]=e,t[Va]=r,BE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mf(n,r),n){case"dialog":xe("cancel",t),xe("close",t),i=r;break;case"iframe":case"object":case"embed":xe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Zo.length;i++)xe(Zo[i],t);i=r;break;case"source":xe("error",t),i=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),i=r;break;case"details":xe("toggle",t),i=r;break;case"input":vv(t,r),i=Pf(t,r),xe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),xe("invalid",t);break;case"textarea":wv(t,r),i=Of(t,r),xe("invalid",t);break;default:i=r}Lf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ew(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_w(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ra(t,l):typeof l=="number"&&Ra(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xe("scroll",t):l!=null&&Sm(t,s,l,o))}switch(n){case"input":Zl(t),_v(t,r,!1);break;case"textarea":Zl(t),Ev(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ni(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)WE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=ki(ja.current),ki(Bn.current),lu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mn]=e,(s=r.nodeValue!==n)&&(t=nn,t!==null))switch(t.tag){case 3:au(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&au(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mn]=e,e.stateNode=r}return kt(e),null;case 13:if(Ce(Fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&en!==null&&e.mode&1&&!(e.flags&128))lE(),Zs(),e.flags|=98560,s=!1;else if(s=lu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[Mn]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else kn!==null&&(gp(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Fe.current&1?st===0&&(st=3):og())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return to(),lp(t,e),t===null&&La(e.stateNode.containerInfo),kt(e),null;case 10:return Bm(e.type._context),kt(e),null;case 17:return Gt(e.type)&&pc(),kt(e),null;case 19:if(Ce(Fe),s=e.memoizedState,s===null)return kt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)jo(s,!1);else{if(st!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ec(t),o!==null){for(e.flags|=128,jo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Fe,Fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Xe()>ro&&(e.flags|=128,r=!0,jo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return kt(e),null}else 2*Xe()-s.renderingStartTime>ro&&n!==1073741824&&(e.flags|=128,r=!0,jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xe(),e.sibling=null,n=Fe.current,ke(Fe,r?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return sg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function dR(t,e){switch(jm(e),e.tag){case 1:return Gt(e.type)&&pc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return to(),Ce(Kt),Ce(Nt),Gm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Km(e),null;case 13:if(Ce(Fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(Fe),null;case 4:return to(),null;case 10:return Bm(e.type._context),null;case 22:case 23:return sg(),null;case 24:return null;default:return null}}var hu=!1,Rt=!1,fR=typeof WeakSet=="function"?WeakSet:Set,$=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(t,e,r)}else n.current=null}function up(t,e,n){try{n()}catch(r){We(t,e,r)}}var c0=!1;function pR(t,e){if(qf=cc,t=Qw(),Vm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kf={focusedElem:t,selectionRange:n},cc=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,w=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Tn(e.type,v),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(T){We(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return y=c0,c0=!1,y}function da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&up(e,n,s)}i=i.next}while(i!==r)}}function mh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function cp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qE(t){var e=t.alternate;e!==null&&(t.alternate=null,qE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mn],delete e[Va],delete e[Yf],delete e[Yx],delete e[Xx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function KE(t){return t.tag===5||t.tag===3||t.tag===4}function h0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||KE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fc));else if(r!==4&&(t=t.child,t!==null))for(hp(t,e,n),t=t.sibling;t!==null;)hp(t,e,n),t=t.sibling}function dp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dp(t,e,n),t=t.sibling;t!==null;)dp(t,e,n),t=t.sibling}var gt=null,In=!1;function kr(t,e,n){for(n=n.child;n!==null;)GE(t,e,n),n=n.sibling}function GE(t,e,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(ah,n)}catch{}switch(n.tag){case 5:Rt||bs(n,e);case 6:var r=gt,i=In;gt=null,kr(t,e,n),gt=r,In=i,gt!==null&&(In?(t=gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(In?(t=gt,n=n.stateNode,t.nodeType===8?Dd(t.parentNode,n):t.nodeType===1&&Dd(t,n),Na(t)):Dd(gt,n.stateNode));break;case 4:r=gt,i=In,gt=n.stateNode.containerInfo,In=!0,kr(t,e,n),gt=r,In=i;break;case 0:case 11:case 14:case 15:if(!Rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&up(n,e,o),i=i.next}while(i!==r)}kr(t,e,n);break;case 1:if(!Rt&&(bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){We(n,e,a)}kr(t,e,n);break;case 21:kr(t,e,n);break;case 22:n.mode&1?(Rt=(r=Rt)||n.memoizedState!==null,kr(t,e,n),Rt=r):kr(t,e,n);break;default:kr(t,e,n)}}function d0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fR),e.forEach(function(r){var i=IR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function En(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:gt=a.stateNode,In=!1;break e;case 3:gt=a.stateNode.containerInfo,In=!0;break e;case 4:gt=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(gt===null)throw Error(O(160));GE(s,o,i),gt=null,In=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){We(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)QE(e,t),e=e.sibling}function QE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(En(e,t),Dn(t),r&4){try{da(3,t,t.return),mh(3,t)}catch(v){We(t,t.return,v)}try{da(5,t,t.return)}catch(v){We(t,t.return,v)}}break;case 1:En(e,t),Dn(t),r&512&&n!==null&&bs(n,n.return);break;case 5:if(En(e,t),Dn(t),r&512&&n!==null&&bs(n,n.return),t.flags&32){var i=t.stateNode;try{Ra(i,"")}catch(v){We(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gw(i,s),Mf(a,o);var u=Mf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Ew(i,h):c==="dangerouslySetInnerHTML"?_w(i,h):c==="children"?Ra(i,h):Sm(i,c,h,u)}switch(a){case"input":Cf(i,s);break;case"textarea":yw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Fs(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Fs(i,!!s.multiple,s.defaultValue,!0):Fs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Va]=s}catch(v){We(t,t.return,v)}}break;case 6:if(En(e,t),Dn(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){We(t,t.return,v)}}break;case 3:if(En(e,t),Dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(v){We(t,t.return,v)}break;case 4:En(e,t),Dn(t);break;case 13:En(e,t),Dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(rg=Xe())),r&4&&d0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Rt=(u=Rt)||c,En(e,t),Rt=u):En(e,t),Dn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for($=t,c=t.child;c!==null;){for(h=$=c;$!==null;){switch(d=$,m=d.child,d.tag){case 0:case 11:case 14:case 15:da(4,d,d.return);break;case 1:bs(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){We(r,n,v)}}break;case 5:bs(d,d.return);break;case 22:if(d.memoizedState!==null){p0(h);continue}}m!==null?(m.return=d,$=m):p0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ww("display",o))}catch(v){We(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){We(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:En(e,t),Dn(t),r&4&&d0(t);break;case 21:break;default:En(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(KE(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ra(i,""),r.flags&=-33);var s=h0(t);dp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=h0(t);hp(t,a,o);break;default:throw Error(O(161))}}catch(l){We(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mR(t,e,n){$=t,YE(t)}function YE(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Rt;a=hu;var u=Rt;if(hu=o,(Rt=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?m0(i):l!==null?(l.return=o,$=l):m0(i);for(;s!==null;)$=s,YE(s),s=s.sibling;$=i,hu=a,Rt=u}f0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):f0(t)}}function f0(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rt||mh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Na(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Rt||e.flags&512&&cp(e)}catch(d){We(e,e.return,d)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function p0(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function m0(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mh(4,e)}catch(l){We(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){We(e,i,l)}}var s=e.return;try{cp(e)}catch(l){We(e,s,l)}break;case 5:var o=e.return;try{cp(e)}catch(l){We(e,o,l)}}}catch(l){We(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var gR=Math.ceil,Sc=_r.ReactCurrentDispatcher,tg=_r.ReactCurrentOwner,vn=_r.ReactCurrentBatchConfig,me=0,dt=null,tt=null,wt=0,Zt=0,Ps=di(0),st=0,Ba=null,Hi=0,gh=0,ng=0,fa=null,Ht=null,rg=0,ro=1/0,er=null,kc=!1,fp=null,Qr=null,du=!1,Ur=null,Ac=0,pa=0,pp=null,Wu=-1,qu=0;function jt(){return me&6?Xe():Wu!==-1?Wu:Wu=Xe()}function Yr(t){return t.mode&1?me&2&&wt!==0?wt&-wt:Zx.transition!==null?(qu===0&&(qu=Ow()),qu):(t=_e,t!==0||(t=window.event,t=t===void 0?16:Uw(t.type)),t):1}function bn(t,e,n,r){if(50<pa)throw pa=0,pp=null,Error(O(185));vl(t,n,r),(!(me&2)||t!==dt)&&(t===dt&&(!(me&2)&&(gh|=n),st===4&&Nr(t,wt)),Qt(t,r),n===1&&me===0&&!(e.mode&1)&&(ro=Xe()+500,dh&&fi()))}function Qt(t,e){var n=t.callbackNode;ZA(t,e);var r=uc(t,t===dt?wt:0);if(r===0)n!==null&&Sv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sv(n),e===1)t.tag===0?Jx(g0.bind(null,t)):sE(g0.bind(null,t)),Gx(function(){!(me&6)&&fi()}),n=null;else{switch(Dw(r)){case 1:n=bm;break;case 4:n=Cw;break;case 16:n=lc;break;case 536870912:n=Nw;break;default:n=lc}n=i2(n,XE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function XE(t,e){if(Wu=-1,qu=0,me&6)throw Error(O(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var r=uc(t,t===dt?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xc(t,r);else{e=r;var i=me;me|=2;var s=ZE();(dt!==t||wt!==e)&&(er=null,ro=Xe()+500,Di(t,e));do try{_R();break}catch(a){JE(t,a)}while(!0);zm(),Sc.current=s,me=i,tt!==null?e=0:(dt=null,wt=0,e=st)}if(e!==0){if(e===2&&(i=$f(t),i!==0&&(r=i,e=mp(t,i))),e===1)throw n=Ba,Di(t,0),Nr(t,r),Qt(t,Xe()),n;if(e===6)Nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!yR(i)&&(e=xc(t,r),e===2&&(s=$f(t),s!==0&&(r=s,e=mp(t,s))),e===1))throw n=Ba,Di(t,0),Nr(t,r),Qt(t,Xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:wi(t,Ht,er);break;case 3:if(Nr(t,r),(r&130023424)===r&&(e=rg+500-Xe(),10<e)){if(uc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Qf(wi.bind(null,t,Ht,er),e);break}wi(t,Ht,er);break;case 4:if(Nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gR(r/1960))-r,10<r){t.timeoutHandle=Qf(wi.bind(null,t,Ht,er),r);break}wi(t,Ht,er);break;case 5:wi(t,Ht,er);break;default:throw Error(O(329))}}}return Qt(t,Xe()),t.callbackNode===n?XE.bind(null,t):null}function mp(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(Di(t,e).flags|=256),t=xc(t,e),t!==2&&(e=Ht,Ht=n,e!==null&&gp(e)),t}function gp(t){Ht===null?Ht=t:Ht.push.apply(Ht,t)}function yR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nr(t,e){for(e&=~ng,e&=~gh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rn(e),r=1<<n;t[n]=-1,e&=~r}}function g0(t){if(me&6)throw Error(O(327));Bs();var e=uc(t,0);if(!(e&1))return Qt(t,Xe()),null;var n=xc(t,e);if(t.tag!==0&&n===2){var r=$f(t);r!==0&&(e=r,n=mp(t,r))}if(n===1)throw n=Ba,Di(t,0),Nr(t,e),Qt(t,Xe()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wi(t,Ht,er),Qt(t,Xe()),null}function ig(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(ro=Xe()+500,dh&&fi())}}function Wi(t){Ur!==null&&Ur.tag===0&&!(me&6)&&Bs();var e=me;me|=1;var n=vn.transition,r=_e;try{if(vn.transition=null,_e=1,t)return t()}finally{_e=r,vn.transition=n,me=e,!(me&6)&&fi()}}function sg(){Zt=Ps.current,Ce(Ps)}function Di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kx(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(jm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pc();break;case 3:to(),Ce(Kt),Ce(Nt),Gm();break;case 5:Km(r);break;case 4:to();break;case 13:Ce(Fe);break;case 19:Ce(Fe);break;case 10:Bm(r.type._context);break;case 22:case 23:sg()}n=n.return}if(dt=t,tt=t=Xr(t.current,null),wt=Zt=e,st=0,Ba=null,ng=gh=Hi=0,Ht=fa=null,Si!==null){for(e=0;e<Si.length;e++)if(n=Si[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Si=null}return t}function JE(t,e){do{var n=tt;try{if(zm(),zu.current=Ic,Tc){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tc=!1}if(Bi=0,ht=it=je=null,ha=!1,Ua=0,tg.current=null,n===null||n.return===null){st=1,Ba=e,tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=r0(o);if(m!==null){m.flags&=-257,i0(m,o,a,s,e),m.mode&1&&n0(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){n0(s,u,e),og();break e}l=Error(O(426))}}else if(Le&&a.mode&1){var w=r0(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),i0(w,o,a,s,e),Um(no(l,a));break e}}s=l=no(l,a),st!==4&&(st=2),fa===null?fa=[s]:fa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=LE(s,l,e);Qv(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Qr===null||!Qr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var T=ME(s,a,e);Qv(s,T);break e}}s=s.return}while(s!==null)}t2(n)}catch(x){e=x,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(!0)}function ZE(){var t=Sc.current;return Sc.current=Ic,t===null?Ic:t}function og(){(st===0||st===3||st===2)&&(st=4),dt===null||!(Hi&268435455)&&!(gh&268435455)||Nr(dt,wt)}function xc(t,e){var n=me;me|=2;var r=ZE();(dt!==t||wt!==e)&&(er=null,Di(t,e));do try{vR();break}catch(i){JE(t,i)}while(!0);if(zm(),me=n,Sc.current=r,tt!==null)throw Error(O(261));return dt=null,wt=0,st}function vR(){for(;tt!==null;)e2(tt)}function _R(){for(;tt!==null&&!HA();)e2(tt)}function e2(t){var e=r2(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?t2(t):tt=e,tg.current=null}function t2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dR(n,e),n!==null){n.flags&=32767,tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{st=6,tt=null;return}}else if(n=hR(n,e,Zt),n!==null){tt=n;return}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);st===0&&(st=5)}function wi(t,e,n){var r=_e,i=vn.transition;try{vn.transition=null,_e=1,wR(t,e,n,r)}finally{vn.transition=i,_e=r}return null}function wR(t,e,n,r){do Bs();while(Ur!==null);if(me&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ex(t,s),t===dt&&(tt=dt=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||du||(du=!0,i2(lc,function(){return Bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=_e;_e=1;var a=me;me|=4,tg.current=null,pR(t,n),QE(n,t),Ux(Kf),cc=!!qf,Kf=qf=null,t.current=n,mR(n),WA(),me=a,_e=o,vn.transition=s}else t.current=n;if(du&&(du=!1,Ur=t,Ac=i),s=t.pendingLanes,s===0&&(Qr=null),GA(n.stateNode),Qt(t,Xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kc)throw kc=!1,t=fp,fp=null,t;return Ac&1&&t.tag!==0&&Bs(),s=t.pendingLanes,s&1?t===pp?pa++:(pa=0,pp=t):pa=0,fi(),null}function Bs(){if(Ur!==null){var t=Dw(Ac),e=vn.transition,n=_e;try{if(vn.transition=null,_e=16>t?16:t,Ur===null)var r=!1;else{if(t=Ur,Ur=null,Ac=0,me&6)throw Error(O(331));var i=me;for(me|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:da(8,c,s)}var h=c.child;if(h!==null)h.return=c,$=h;else for(;$!==null;){c=$;var d=c.sibling,m=c.return;if(qE(c),c===u){$=null;break}if(d!==null){d.return=m,$=d;break}$=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,$=p;break e}$=s.return}}var f=t.current;for($=f;$!==null;){o=$;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,$=g;else e:for(o=f;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mh(9,a)}}catch(x){We(a,a.return,x)}if(a===o){$=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,$=T;break e}$=a.return}}if(me=i,fi(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(ah,t)}catch{}r=!0}return r}finally{_e=n,vn.transition=e}}return!1}function y0(t,e,n){e=no(n,e),e=LE(t,e,1),t=Gr(t,e,1),e=jt(),t!==null&&(vl(t,1,e),Qt(t,e))}function We(t,e,n){if(t.tag===3)y0(t,t,n);else for(;e!==null;){if(e.tag===3){y0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qr===null||!Qr.has(r))){t=no(n,t),t=ME(e,t,1),e=Gr(e,t,1),t=jt(),e!==null&&(vl(e,1,t),Qt(e,t));break}}e=e.return}}function ER(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,dt===t&&(wt&n)===n&&(st===4||st===3&&(wt&130023424)===wt&&500>Xe()-rg?Di(t,0):ng|=n),Qt(t,e)}function n2(t,e){e===0&&(t.mode&1?(e=nu,nu<<=1,!(nu&130023424)&&(nu=4194304)):e=1);var n=jt();t=cr(t,e),t!==null&&(vl(t,e,n),Qt(t,n))}function TR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),n2(t,n)}function IR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),n2(t,n)}var r2;r2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,cR(t,e,n);qt=!!(t.flags&131072)}else qt=!1,Le&&e.flags&1048576&&oE(e,yc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Hu(t,e),t=e.pendingProps;var i=Js(e,Nt.current);zs(e,n),i=Ym(null,e,r,t,i,n);var s=Xm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gt(r)?(s=!0,mc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wm(e),i.updater=fh,e.stateNode=i,i._reactInternals=e,np(e,r,t,n),e=sp(null,e,r,!0,s,n)):(e.tag=0,Le&&s&&Fm(e),Lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Hu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kR(r),t=Tn(r,t),i){case 0:e=ip(null,e,r,t,n);break e;case 1:e=a0(null,e,r,t,n);break e;case 11:e=s0(null,e,r,t,n);break e;case 14:e=o0(null,e,r,Tn(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),ip(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),a0(t,e,r,i,n);case 3:e:{if(UE(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cE(t,e),wc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=no(Error(O(423)),e),e=l0(t,e,r,n,i);break e}else if(r!==i){i=no(Error(O(424)),e),e=l0(t,e,r,n,i);break e}else for(en=Kr(e.stateNode.containerInfo.firstChild),nn=e,Le=!0,kn=null,n=pE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zs(),r===i){e=hr(t,e,n);break e}Lt(t,e,r,n)}e=e.child}return e;case 5:return mE(e),t===null&&Zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Gf(r,i)?o=null:s!==null&&Gf(r,s)&&(e.flags|=32),jE(t,e),Lt(t,e,o,n),e.child;case 6:return t===null&&Zf(e),null;case 13:return $E(t,e,n);case 4:return qm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=eo(e,null,r,n):Lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),s0(t,e,r,i,n);case 7:return Lt(t,e,e.pendingProps,n),e.child;case 8:return Lt(t,e,e.pendingProps.children,n),e.child;case 12:return Lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(vc,r._currentValue),r._currentValue=o,s!==null)if(Pn(s.value,o)){if(s.children===i.children&&!Kt.current){e=hr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ar(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ep(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ep(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zs(e,n),i=_n(i),r=r(i),e.flags|=1,Lt(t,e,r,n),e.child;case 14:return r=e.type,i=Tn(r,e.pendingProps),i=Tn(r.type,i),o0(t,e,r,i,n);case 15:return VE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),Hu(t,e),e.tag=1,Gt(r)?(t=!0,mc(e)):t=!1,zs(e,n),dE(e,r,i),np(e,r,i,n),sp(null,e,r,!0,t,n);case 19:return zE(t,e,n);case 22:return FE(t,e,n)}throw Error(O(156,e.tag))};function i2(t,e){return Pw(t,e)}function SR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,r){return new SR(t,e,n,r)}function ag(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kR(t){if(typeof t=="function")return ag(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Am)return 11;if(t===xm)return 14}return 2}function Xr(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ku(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ag(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ws:return Li(n.children,i,s,e);case km:o=8,i|=8;break;case Af:return t=yn(12,n,e,i|2),t.elementType=Af,t.lanes=s,t;case xf:return t=yn(13,n,e,i),t.elementType=xf,t.lanes=s,t;case Rf:return t=yn(19,n,e,i),t.elementType=Rf,t.lanes=s,t;case fw:return yh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hw:o=10;break e;case dw:o=9;break e;case Am:o=11;break e;case xm:o=14;break e;case br:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=yn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Li(t,e,n,r){return t=yn(7,t,r,e),t.lanes=n,t}function yh(t,e,n,r){return t=yn(22,t,r,e),t.elementType=fw,t.lanes=n,t.stateNode={isHidden:!1},t}function zd(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function Bd(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Id(0),this.expirationTimes=Id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Id(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lg(t,e,n,r,i,s,o,a,l){return t=new AR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wm(s),t}function xR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function s2(t){if(!t)return ri;t=t._reactInternals;e:{if(rs(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(Gt(n))return iE(t,n,e)}return e}function o2(t,e,n,r,i,s,o,a,l){return t=lg(n,r,!0,t,i,s,o,a,l),t.context=s2(null),n=t.current,r=jt(),i=Yr(n),s=ar(r,i),s.callback=e??null,Gr(n,s,i),t.current.lanes=i,vl(t,i,r),Qt(t,r),t}function vh(t,e,n,r){var i=e.current,s=jt(),o=Yr(i);return n=s2(n),e.context===null?e.context=n:e.pendingContext=n,e=ar(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Gr(i,e,o),t!==null&&(bn(t,i,o,s),$u(t,i,o)),o}function Rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function v0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ug(t,e){v0(t,e),(t=t.alternate)&&v0(t,e)}function RR(){return null}var a2=typeof reportError=="function"?reportError:function(t){console.error(t)};function cg(t){this._internalRoot=t}_h.prototype.render=cg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));vh(t,e,null,null)};_h.prototype.unmount=cg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wi(function(){vh(null,t,null,null)}),e[ur]=null}};function _h(t){this._internalRoot=t}_h.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cr.length&&e!==0&&e<Cr[n].priority;n++);Cr.splice(n,0,t),n===0&&jw(t)}};function hg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _0(){}function bR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Rc(o);s.call(u)}}var o=o2(e,r,t,0,null,!1,!1,"",_0);return t._reactRootContainer=o,t[ur]=o.current,La(t.nodeType===8?t.parentNode:t),Wi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Rc(l);a.call(u)}}var l=lg(t,0,!1,null,null,!1,!1,"",_0);return t._reactRootContainer=l,t[ur]=l.current,La(t.nodeType===8?t.parentNode:t),Wi(function(){vh(e,l,n,r)}),l}function Eh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Rc(o);a.call(l)}}vh(e,o,t,i)}else o=bR(n,e,t,i,r);return Rc(o)}Lw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jo(e.pendingLanes);n!==0&&(Pm(e,n|1),Qt(e,Xe()),!(me&6)&&(ro=Xe()+500,fi()))}break;case 13:Wi(function(){var r=cr(t,1);if(r!==null){var i=jt();bn(r,t,1,i)}}),ug(t,1)}};Cm=function(t){if(t.tag===13){var e=cr(t,134217728);if(e!==null){var n=jt();bn(e,t,134217728,n)}ug(t,134217728)}};Mw=function(t){if(t.tag===13){var e=Yr(t),n=cr(t,e);if(n!==null){var r=jt();bn(n,t,e,r)}ug(t,e)}};Vw=function(){return _e};Fw=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};Ff=function(t,e,n){switch(e){case"input":if(Cf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hh(r);if(!i)throw Error(O(90));mw(r),Cf(r,i)}}}break;case"textarea":yw(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};Sw=ig;kw=Wi;var PR={usingClientEntryPoint:!1,Events:[wl,Ss,hh,Tw,Iw,ig]},Uo={findFiberByHostInstance:Ii,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},CR={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rw(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||RR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{ah=fu.inject(CR),zn=fu}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PR;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hg(e))throw Error(O(200));return xR(t,e,null,n)};ln.createRoot=function(t,e){if(!hg(t))throw Error(O(299));var n=!1,r="",i=a2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=lg(t,1,!1,null,null,n,!1,r,i),t[ur]=e.current,La(t.nodeType===8?t.parentNode:t),new cg(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=Rw(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return Wi(t)};ln.hydrate=function(t,e,n){if(!wh(e))throw Error(O(200));return Eh(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!hg(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=a2;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=o2(e,null,t,1,n??null,i,!1,s,o),t[ur]=e.current,La(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _h(e)};ln.render=function(t,e,n){if(!wh(e))throw Error(O(200));return Eh(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!wh(t))throw Error(O(40));return t._reactRootContainer?(Wi(function(){Eh(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};ln.unstable_batchedUpdates=ig;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wh(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return Eh(t,e,n,!1,r)};ln.version="18.2.0-next-9e3b772b8-20220608";function l2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l2)}catch(t){console.error(t)}}l2(),ow.exports=ln;var dg=ow.exports;const NR=ym(dg),OR=Q_({__proto__:null,default:NR},[dg]);var w0=dg;Sf.createRoot=w0.createRoot,Sf.hydrateRoot=w0.hydrateRoot;const DR=()=>_.jsx("div",{id:"welcome",className:" w-full px-4 mx-auto max-w-screen-xl py-24 lg:py-60 ",children:_.jsx("div",{className:"flex flex-col justify-center items-center lg:-translate-y-10",children:_.jsx("h1",{className:"font-bold text-7xl sm:text-9xl lg:text-10xl text-slate-100 text-center font-pixelF font-outline-2 xl:font-outline-4 drop-shadow-2xl",children:"Welcome"})})});var u2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E0=ie.createContext&&ie.createContext(u2),LR=["attr","size","title"];function MR(t,e){if(t==null)return{};var n=VR(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function VR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bc(){return bc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bc.apply(this,arguments)}function T0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Pc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?T0(Object(n),!0).forEach(function(r){FR(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function FR(t,e,n){return e=jR(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jR(t){var e=UR(t,"string");return typeof e=="symbol"?e:String(e)}function UR(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function c2(t){return t&&t.map((e,n)=>ie.createElement(e.tag,Pc({key:n},e.attr),c2(e.child)))}function h2(t){return e=>ie.createElement($R,bc({attr:Pc({},t.attr)},e),c2(t.child))}function $R(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=MR(t,LR),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ie.createElement("svg",bc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Pc(Pc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ie.createElement("title",null,s),t.children)};return E0!==void 0?ie.createElement(E0.Consumer,null,n=>e(n)):e(u2)}function zR(t){return h2({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"},child:[]}]})(t)}function BR(t){return h2({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(t)}const HR=()=>{const t=[{name:"Welcome",link:"#welcome"},{name:"Gallery",link:"#gallery"},{name:"About",link:"#about"},{name:"Contact",link:"#contact"}],[e,n]=ie.useState(!1);return _.jsxs("nav",{className:"w-full bg-transparent px-4 flex justify-around items-center fixed backdrop-blur-md md:backdrop-blur-sm p-5 shadow-md z-50",children:[_.jsx("div",{className:"hidden md:flex",children:_.jsx("ul",{className:"flex justify-center items-center font-normal ",children:t==null?void 0:t.map((r,i)=>_.jsx("li",{className:"text-slate-100 px-12 text-lg hover:text-primaryYellow drop-shadow-xl",children:_.jsx("a",{href:r==null?void 0:r.link,children:r==null?void 0:r.name})},i))})}),_.jsxs("div",{className:"md:hidden w-full flex justify-center relative",children:[e?"":_.jsx(zR,{fontSize:28,onClick:()=>n(!0),className:"text-white cursor-pointer"}),e&&_.jsxs("ul",{className:"w-full flex h-screen flex-col justify-center items-center font-medium animate-fade-in",children:[t==null?void 0:t.map((r,i)=>_.jsx("li",{className:"w-full text-slate-100 text-center px-6 text-2xl hover:text-primaryYellow my-2 p-2",children:_.jsx("a",{href:r==null?void 0:r.link,children:r==null?void 0:r.name})},i)),_.jsx(BR,{fontSize:28,className:"text-white cursor-pointer absolute top-0 right-1",onClick:()=>n(!1)}),_.jsxs("div",{className:"flex flex-wrap justify-center items-center mt-20",children:[_.jsx("a",{href:"https://www.instagram.com/nzib.art/",target:"_blank",class:"flex items-center justify-center text-slate-100 hover:text-primaryYellow mr-5",children:_.jsxs("svg",{role:"img",width:"20",className:"fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("title",{children:"Instagram"}),_.jsx("path",{d:"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"})]})}),_.jsx("a",{href:"https://twitter.com/nzib_h",target:"_blank",class:"flex items-center justify-center text-slate-100 hover:text-primaryYellow mr-5",children:_.jsxs("svg",{role:"img",width:"20",className:"fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("title",{children:"X"}),_.jsx("path",{d:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"})]})}),_.jsx("a",{href:"",target:"_blank",class:"flex items-center justify-center text-slate-100 hover:text-primaryYellow",children:_.jsxs("svg",{role:"img",width:"20",className:"fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("title",{children:"Discord"}),_.jsx("path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"})]})})]})]})]}),_.jsxs("div",{className:"hidden md:flex flex-wrap justify-center items-center",children:[_.jsx("a",{href:"https://www.instagram.com/nzib.art/",target:"_blank",class:"flex items-center justify-center text-slate-100 hover:text-primaryYellow mr-5",children:_.jsxs("svg",{role:"img",width:"20",className:"fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("title",{children:"Instagram"}),_.jsx("path",{d:"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"})]})}),_.jsx("a",{href:"https://twitter.com/nzib_h",target:"_blank",class:"flex items-center justify-center text-slate-100 hover:text-primaryYellow mr-5",children:_.jsxs("svg",{role:"img",width:"20",className:"fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("title",{children:"X"}),_.jsx("path",{d:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"})]})}),_.jsx("a",{href:"",target:"_blank",class:"flex items-center justify-center text-slate-100 hover:text-primaryYellow",children:_.jsxs("svg",{role:"img",width:"20",className:"fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("title",{children:"Discord"}),_.jsx("path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"})]})})]})]})};var I0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},WR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},f2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new qR;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KR=function(t){const e=d2(t);return f2.encodeByteArray(e,!0)},Cc=function(t){return KR(t).replace(/\./g,"")},p2=function(t){try{return f2.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=()=>GR().__FIREBASE_DEFAULTS__,YR=()=>{if(typeof process>"u"||typeof I0>"u")return;const t=I0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&p2(t[1]);return e&&JSON.parse(e)},Th=()=>{try{return QR()||YR()||XR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},m2=t=>{var e,n;return(n=(e=Th())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},g2=t=>{const e=m2(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y2=()=>{var t;return(t=Th())===null||t===void 0?void 0:t.config},v2=t=>{var e;return(e=Th())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let JR=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Cc(JSON.stringify(n)),Cc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function eb(){var t;const e=(t=Th())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rb(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ib(){return!eb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w2(){try{return typeof indexedDB=="object"}catch{return!1}}function sb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="FirebaseError";class Zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ob,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tl.prototype.create)}}class Tl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ab(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zn(i,a,r)}}function ab(t,e){return t.replace(lb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lb=/\{\$([^}]+)}/g;function ub(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(S0(s)&&S0(o)){if(!Nc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function S0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cb(t,e){const n=new hb(t,e);return n.subscribe.bind(n)}class hb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");db(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hd),i.error===void 0&&(i.error=Hd),i.complete===void 0&&(i.complete=Hd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function db(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return t&&t._delegate?t._delegate:t}class ii{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mb(e))try{this.getOrInitializeService({instanceIdentifier:Ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ei){return this.instances.has(e)}getOptions(e=Ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ei){return this.component?this.component.multipleInstances?e:Ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pb(t){return t===Ei?void 0:t}function mb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const yb={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},vb=he.INFO,_b={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},wb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_b[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fg{constructor(e){this.name=e,this._logLevel=vb,this._logHandler=wb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const Eb=(t,e)=>e.some(n=>t instanceof n);let k0,A0;function Tb(){return k0||(k0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ib(){return A0||(A0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const E2=new WeakMap,yp=new WeakMap,T2=new WeakMap,Wd=new WeakMap,pg=new WeakMap;function Sb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&E2.set(n,t)}).catch(()=>{}),pg.set(e,t),e}function kb(t){if(yp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yp.set(t,e)}let vp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||T2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ab(t){vp=t(vp)}function xb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qd(this),e,...n);return T2.set(r,e.sort?e.sort():[e]),Jr(r)}:Ib().includes(t)?function(...e){return t.apply(qd(this),e),Jr(E2.get(this))}:function(...e){return Jr(t.apply(qd(this),e))}}function Rb(t){return typeof t=="function"?xb(t):(t instanceof IDBTransaction&&kb(t),Eb(t,Tb())?new Proxy(t,vp):t)}function Jr(t){if(t instanceof IDBRequest)return Sb(t);if(Wd.has(t))return Wd.get(t);const e=Rb(t);return e!==t&&(Wd.set(t,e),pg.set(e,t)),e}const qd=t=>pg.get(t);function bb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Jr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jr(o.result),l.oldVersion,l.newVersion,Jr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Pb=["get","getKey","getAll","getAllKeys","count"],Cb=["put","add","delete","clear"],Kd=new Map;function x0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kd.get(e))return Kd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Cb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Pb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Kd.set(e,s),s}Ab(t=>({...t,get:(e,n,r)=>x0(e,n)||t.get(e,n,r),has:(e,n)=>!!x0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ob(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ob(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _p="@firebase/app",R0="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new fg("@firebase/app"),Db="@firebase/app-compat",Lb="@firebase/analytics-compat",Mb="@firebase/analytics",Vb="@firebase/app-check-compat",Fb="@firebase/app-check",jb="@firebase/auth",Ub="@firebase/auth-compat",$b="@firebase/database",zb="@firebase/database-compat",Bb="@firebase/functions",Hb="@firebase/functions-compat",Wb="@firebase/installations",qb="@firebase/installations-compat",Kb="@firebase/messaging",Gb="@firebase/messaging-compat",Qb="@firebase/performance",Yb="@firebase/performance-compat",Xb="@firebase/remote-config",Jb="@firebase/remote-config-compat",Zb="@firebase/storage",eP="@firebase/storage-compat",tP="@firebase/firestore",nP="@firebase/firestore-compat",rP="firebase",iP="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="[DEFAULT]",sP={[_p]:"fire-core",[Db]:"fire-core-compat",[Mb]:"fire-analytics",[Lb]:"fire-analytics-compat",[Fb]:"fire-app-check",[Vb]:"fire-app-check-compat",[jb]:"fire-auth",[Ub]:"fire-auth-compat",[$b]:"fire-rtdb",[zb]:"fire-rtdb-compat",[Bb]:"fire-fn",[Hb]:"fire-fn-compat",[Wb]:"fire-iid",[qb]:"fire-iid-compat",[Kb]:"fire-fcm",[Gb]:"fire-fcm-compat",[Qb]:"fire-perf",[Yb]:"fire-perf-compat",[Xb]:"fire-rc",[Jb]:"fire-rc-compat",[Zb]:"fire-gcs",[eP]:"fire-gcs-compat",[tP]:"fire-fst",[nP]:"fire-fst-compat","fire-js":"fire-js",[rP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new Map,Ep=new Map;function oP(t,e){try{t.container.addComponent(e)}catch(n){qi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ki(t){const e=t.name;if(Ep.has(e))return qi.debug(`There were multiple attempts to register component ${e}.`),!1;Ep.set(e,t);for(const n of Oc.values())oP(n,t);return!0}function Ih(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zr=new Tl("app","Firebase",aP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=iP;function I2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zr.create("bad-app-name",{appName:String(i)});if(n||(n=y2()),!n)throw Zr.create("no-options");const s=Oc.get(i);if(s){if(Nc(n,s.options)&&Nc(r,s.config))return s;throw Zr.create("duplicate-app",{appName:i})}const o=new gb(i);for(const l of Ep.values())o.addComponent(l);const a=new lP(n,r,o);return Oc.set(i,a),a}function mg(t=wp){const e=Oc.get(t);if(!e&&t===wp&&y2())return I2();if(!e)throw Zr.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let i=(r=sP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qi.warn(a.join(" "));return}Ki(new ii(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP="firebase-heartbeat-database",cP=1,Ha="firebase-heartbeat-store";let Gd=null;function S2(){return Gd||(Gd=bb(uP,cP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ha)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zr.create("idb-open",{originalErrorMessage:t.message})})),Gd}async function hP(t){try{const n=(await S2()).transaction(Ha),r=await n.objectStore(Ha).get(k2(t));return await n.done,r}catch(e){if(e instanceof Zn)qi.warn(e.message);else{const n=Zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qi.warn(n.message)}}}async function b0(t,e){try{const r=(await S2()).transaction(Ha,"readwrite");await r.objectStore(Ha).put(e,k2(t)),await r.done}catch(n){if(n instanceof Zn)qi.warn(n.message);else{const r=Zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qi.warn(r.message)}}}function k2(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=1024,fP=30*24*60*60*1e3;class pP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=P0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=fP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=P0(),{heartbeatsToSend:r,unsentEntries:i}=mP(this._heartbeatsCache.heartbeats),s=Cc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function P0(){return new Date().toISOString().substring(0,10)}function mP(t,e=dP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),C0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),C0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w2()?sb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return b0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return b0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function C0(t){return Cc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t){Ki(new ii("platform-logger",e=>new Nb(e),"PRIVATE")),Ki(new ii("heartbeat",e=>new pP(e),"PRIVATE")),Hn(_p,R0,t),Hn(_p,R0,"esm2017"),Hn("fire-js","")}yP("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2="firebasestorage.googleapis.com",x2="storageBucket",vP=2*60*1e3,_P=10*60*1e3,wP=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Zn{constructor(e,n,r=0){super(Qd(e),`Firebase Storage: ${n} (${Qd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function Qd(t){return"storage/"+t}function gg(){const t="An unknown error occurred, please check the error payload for server response.";return new ze(Oe.UNKNOWN,t)}function EP(t){return new ze(Oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function TP(t){return new ze(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function IP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ze(Oe.UNAUTHENTICATED,t)}function SP(){return new ze(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kP(t){return new ze(Oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function R2(){return new ze(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function b2(){return new ze(Oe.CANCELED,"User canceled the upload/download.")}function AP(t){return new ze(Oe.INVALID_URL,"Invalid URL '"+t+"'.")}function xP(t){return new ze(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function RP(){return new ze(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+x2+"' property when initializing the app?")}function P2(){return new ze(Oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function bP(){return new ze(Oe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function PP(){return new ze(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function CP(t){return new ze(Oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Tp(t){return new ze(Oe.INVALID_ARGUMENT,t)}function C2(){return new ze(Oe.APP_DELETED,"The Firebase app was deleted.")}function NP(t){return new ze(Oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ma(t,e){return new ze(Oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function $o(t){throw new ze(Oe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Vt.makeFromUrl(e,n)}catch{return new Vt(e,"")}if(r.path==="")return r;throw xP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(T){T.path_=decodeURIComponent(T.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===A2?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",p=new RegExp(`^https?://${v}/${i}/${w}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:m,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let T=0;T<g.length;T++){const x=g[T],E=x.regex.exec(e);if(E){const k=E[x.indices.bucket];let A=E[x.indices.path];A||(A=""),r=new Vt(k,A),x.postModify(r);break}}if(r==null)throw AP(e);return r}}class OP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(m,l())},w)}function d(){s&&clearTimeout(s)}function m(w,...p){if(u){d();return}if(w){d(),c.call(null,w,...p);return}if(l()||o){d(),c.call(null,w,...p);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function v(w){y||(y=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function LP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t){return t!==void 0}function VP(t){return typeof t=="function"}function FP(t){return typeof t=="object"&&!Array.isArray(t)}function Sh(t){return typeof t=="string"||t instanceof String}function N0(t){return yg()&&t instanceof Blob}function yg(){return typeof Blob<"u"}function Ip(t,e,n,r){if(r<e)throw Tp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Tp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function N2(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mi||(Mi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new pu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Mi.NO_ERROR,l=s.getStatus();if(!a||O2(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Mi.ABORT;r(!1,new pu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new pu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());MP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=gg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?C2():b2();o(l)}else{const l=R2();o(l)}};this.canceled_?n(!1,new pu(!1,null,!0)):this.backoffId_=DP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&LP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function UP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function $P(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function BP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function HP(t,e,n,r,i,s,o=!0){const a=N2(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return zP(u,e),UP(u,n),$P(u,s),BP(u,r),new jP(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qP(...t){const e=WP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(yg())return new Blob(t);throw new ze(Oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function KP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(t){if(typeof atob>"u")throw CP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yd{constructor(e,n){this.data=e,this.contentType=n||null}}function QP(t,e){switch(t){case Fn.RAW:return new Yd(D2(e));case Fn.BASE64:case Fn.BASE64URL:return new Yd(L2(t,e));case Fn.DATA_URL:return new Yd(XP(e),JP(e))}throw gg()}function D2(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function YP(t){let e;try{e=decodeURIComponent(t)}catch{throw ma(Fn.DATA_URL,"Malformed data URL.")}return D2(e)}function L2(t,e){switch(t){case Fn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ma(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Fn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ma(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=GP(e)}catch(i){throw i.message.includes("polyfill")?i:ma(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class M2{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ma(Fn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ZP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function XP(t){const e=new M2(t);return e.base64?L2(Fn.BASE64,e.rest):YP(e.rest)}function JP(t){return new M2(t).contentType}function ZP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){let r=0,i="";N0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(N0(this.data_)){const r=this.data_,i=KP(r,e,n);return i===null?null:new Or(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Or(r,!0)}}static getBlob(...e){if(yg()){const n=e.map(r=>r instanceof Or?r.data_:r);return new Or(qP.apply(null,n))}else{const n=e.map(o=>Sh(o)?QP(Fn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Or(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t){let e;try{e=JSON.parse(t)}catch{return null}return FP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function V2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t,e){return e}class Dt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||nC}}let mu=null;function rC(t){return!Sh(t)||t.length<2?t:V2(t)}function F2(){if(mu)return mu;const t=[];t.push(new Dt("bucket")),t.push(new Dt("generation")),t.push(new Dt("metageneration")),t.push(new Dt("name","fullPath",!0));function e(s,o){return rC(o)}const n=new Dt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Dt("size");return i.xform=r,t.push(i),t.push(new Dt("timeCreated")),t.push(new Dt("updated")),t.push(new Dt("md5Hash",null,!0)),t.push(new Dt("cacheControl",null,!0)),t.push(new Dt("contentDisposition",null,!0)),t.push(new Dt("contentEncoding",null,!0)),t.push(new Dt("contentLanguage",null,!0)),t.push(new Dt("contentType",null,!0)),t.push(new Dt("metadata","customMetadata",!0)),mu=t,mu}function iC(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Vt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function sC(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return iC(r,t),r}function j2(t,e,n){const r=vg(e);return r===null?null:sC(t,r,n)}function oC(t,e,n,r){const i=vg(e);if(i===null||!Sh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=ss(d,n,r),y=N2({alt:"media",token:u});return m+y})[0]}function U2(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="prefixes",D0="items";function aC(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[O0])for(const i of n[O0]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new Vt(e,s));r.prefixes.push(o)}if(n[D0])for(const i of n[D0]){const s=t._makeStorageReference(new Vt(e,i.name));r.items.push(s)}return r}function lC(t,e,n){const r=vg(n);return r===null?null:aC(t,e,r)}class pi{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){if(!t)throw gg()}function _g(t,e){function n(r,i){const s=j2(t,i,e);return Wn(s!==null),s}return n}function uC(t,e){function n(r,i){const s=lC(t,e,i);return Wn(s!==null),s}return n}function cC(t,e){function n(r,i){const s=j2(t,i,e);return Wn(s!==null),oC(s,i,t.host,t._protocol)}return n}function vo(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=SP():i=IP():n.getStatus()===402?i=TP(t.bucket):n.getStatus()===403?i=kP(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function wg(t){const e=vo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=EP(t.path)),s.serverResponse=i.serverResponse,s}return n}function hC(t,e,n){const r=e.fullServerUrl(),i=ss(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new pi(i,s,_g(t,n),o);return a.errorHandler=wg(e),a}function dC(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=ss(o,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,c=new pi(a,l,uC(t,e.bucket),u);return c.urlParams=s,c.errorHandler=vo(e),c}function fC(t,e,n){const r=e.fullServerUrl(),i=ss(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new pi(i,s,cC(t,n),o);return a.errorHandler=wg(e),a}function pC(t,e){const n=e.fullServerUrl(),r=ss(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new pi(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=wg(e),a}function mC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function $2(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=mC(null,e)),r}function gC(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let T=0;T<2;T++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=$2(e,r,i),c=U2(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=Or.getBlob(h,r,d);if(m===null)throw P2();const y={name:u.fullPath},v=ss(s,t.host,t._protocol),w="POST",p=t.maxUploadRetryTime,f=new pi(v,w,_g(t,n),p);return f.urlParams=y,f.headers=o,f.body=m.uploadData(),f.errorHandler=vo(e),f}class Dc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Eg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Wn(!1)}return Wn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function yC(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=$2(e,r,i),a={name:o.fullPath},l=ss(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=U2(o,n),d=t.maxUploadRetryTime;function m(v){Eg(v);let w;try{w=v.getResponseHeader("X-Goog-Upload-URL")}catch{Wn(!1)}return Wn(Sh(w)),w}const y=new pi(l,u,m,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=vo(e),y}function vC(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=Eg(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Wn(!1)}h||Wn(!1);const d=Number(h);return Wn(!isNaN(d)),new Dc(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new pi(n,o,s,a);return l.headers=i,l.errorHandler=vo(e),l}const L0=256*1024;function _C(t,e,n,r,i,s,o,a){const l=new Dc(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw bP();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c;let m="";c===0?m="finalize":u===c?m="upload, finalize":m="upload";const y={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(h,d);if(v===null)throw P2();function w(T,x){const E=Eg(T,["active","final"]),k=l.current+c,A=r.size();let N;return E==="final"?N=_g(e,s)(T,x):N=null,new Dc(k,A,E==="final",N)}const p="POST",f=e.maxUploadRetryTime,g=new pi(n,p,w,f);return g.headers=y,g.body=v.uploadData(),g.progressCallback=a||null,g.errorHandler=vo(t),g}const Bt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Xd(t){switch(t){case"running":case"pausing":case"canceling":return Bt.RUNNING;case"paused":return Bt.PAUSED;case"success":return Bt.SUCCESS;case"canceled":return Bt.CANCELED;case"error":return Bt.ERROR;default:return Bt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r){if(VP(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class EC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw $o("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $o("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $o("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $o("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $o("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class TC extends EC{initXhr(){this.xhr_.responseType="text"}}function Dr(){return new TC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=F2(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Oe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(O2(i.status,[]))if(s)i=R2();else{this.sleepTime=Math.max(this.sleepTime*2,wP),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Oe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=yC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Dr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=vC(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Dr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=L0*this._chunkMultiplier,n=new Dc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=_C(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Dr,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){L0*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=hC(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Dr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=gC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Dr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=b2(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Xd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new wC(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Xd(this._state)){case Bt.SUCCESS:ps(this._resolve.bind(null,this.snapshot))();break;case Bt.CANCELED:case Bt.ERROR:const n=this._reject;ps(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Xd(this._state)){case Bt.RUNNING:case Bt.PAUSED:e.next&&ps(e.next.bind(e,this.snapshot))();break;case Bt.SUCCESS:e.complete&&ps(e.complete.bind(e))();break;case Bt.CANCELED:case Bt.ERROR:e.error&&ps(e.error.bind(e,this._error))();break;default:e.error&&ps(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this._service=e,n instanceof Vt?this._location=n:this._location=Vt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Gi(e,n)}get root(){const e=new Vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return V2(this._location.path)}get storage(){return this._service}get parent(){const e=eC(this._location.path);if(e===null)return null;const n=new Vt(this._location.bucket,e);return new Gi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw NP(e)}}function SC(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new IC(t,new Or(e),n)}function kC(t){const e={prefixes:[],items:[]};return z2(t,e).then(()=>e)}async function z2(t,e,n){const i=await AC(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await z2(t,e,i.nextPageToken)}function AC(t,e){e!=null&&typeof e.maxResults=="number"&&Ip("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=dC(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Dr)}function xC(t){t._throwIfRoot("getDownloadURL");const e=fC(t.storage,t._location,F2());return t.storage.makeRequestWithTokens(e,Dr).then(n=>{if(n===null)throw PP();return n})}function RC(t){t._throwIfRoot("deleteObject");const e=pC(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Dr)}function bC(t,e){const n=tC(t._location.path,e),r=new Vt(t._location.bucket,n);return new Gi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t){return/^[A-Za-z]+:\/\//.test(t)}function CC(t,e){return new Gi(t,e)}function B2(t,e){if(t instanceof Tg){const n=t;if(n._bucket==null)throw RP();const r=new Gi(n,n._bucket);return e!=null?B2(r,e):r}else return e!==void 0?bC(t,e):t}function NC(t,e){if(e&&PC(e)){if(t instanceof Tg)return CC(t,e);throw Tp("To use ref(service, url), the first argument must be a Storage instance.")}else return B2(t,e)}function M0(t,e){const n=e==null?void 0:e[x2];return n==null?null:Vt.makeFromBucketSpec(n,t)}function OC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:_2(i,t.app.options.projectId))}class Tg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=A2,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vP,this._maxUploadRetryTime=_P,this._requests=new Set,i!=null?this._bucket=Vt.makeFromBucketSpec(i,this._host):this._bucket=M0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vt.makeFromBucketSpec(this._url,e):this._bucket=M0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ip("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ip("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Gi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new OP(C2());{const o=HP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const V0="@firebase/storage",F0="0.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2="storage";function DC(t,e,n){return t=ot(t),SC(t,e,n)}function kh(t){return t=ot(t),kC(t)}function Sl(t){return t=ot(t),xC(t)}function LC(t){return t=ot(t),RC(t)}function _o(t,e){return t=ot(t),NC(t,e)}function MC(t=mg(),e){t=ot(t);const r=Ih(t,H2).getImmediate({identifier:e}),i=g2("storage");return i&&VC(r,...i),r}function VC(t,e,n,r={}){OC(t,e,n,r)}function FC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Tg(n,r,i,e,is)}function jC(){Ki(new ii(H2,FC,"PUBLIC").setMultipleInstances(!0)),Hn(V0,F0,""),Hn(V0,F0,"esm2017")}jC();var UC="firebase",$C="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(UC,$C,"app");var zC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Ig=Ig||{},X=zC||self;function Ah(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function kl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function BC(t){return Object.prototype.hasOwnProperty.call(t,Jd)&&t[Jd]||(t[Jd]=++HC)}var Jd="closure_uid_"+(1e9*Math.random()>>>0),HC=0;function WC(t,e,n){return t.call.apply(t.bind,arguments)}function qC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pt=WC:Pt=qC,Pt.apply(null,arguments)}function gu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function pt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function mi(){this.s=this.s,this.o=this.o}var KC=0;mi.prototype.s=!1;mi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),KC!=0)&&BC(this)};mi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const W2=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Sg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function j0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ah(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ct.prototype.h=function(){this.defaultPrevented=!0};var GC=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};X.addEventListener("test",n,e),X.removeEventListener("test",n,e)}catch{}return t}();function Wa(t){return/^[\s\xa0]*$/.test(t)}function xh(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function Vn(t){return xh().indexOf(t)!=-1}function kg(t){return kg[" "](t),t}kg[" "]=function(){};function QC(t,e){var n=$4;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var YC=Vn("Opera"),io=Vn("Trident")||Vn("MSIE"),q2=Vn("Edge"),Sp=q2||io,K2=Vn("Gecko")&&!(xh().toLowerCase().indexOf("webkit")!=-1&&!Vn("Edge"))&&!(Vn("Trident")||Vn("MSIE"))&&!Vn("Edge"),XC=xh().toLowerCase().indexOf("webkit")!=-1&&!Vn("Edge");function G2(){var t=X.document;return t?t.documentMode:void 0}var kp;e:{var Zd="",ef=function(){var t=xh();if(K2)return/rv:([^\);]+)(\)|;)/.exec(t);if(q2)return/Edge\/([\d\.]+)/.exec(t);if(io)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(XC)return/WebKit\/(\S+)/.exec(t);if(YC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ef&&(Zd=ef?ef[1]:""),io){var tf=G2();if(tf!=null&&tf>parseFloat(Zd)){kp=String(tf);break e}}kp=Zd}var Ap;if(X.document&&io){var U0=G2();Ap=U0||parseInt(kp,10)||void 0}else Ap=void 0;var JC=Ap;function qa(t,e){if(Ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(K2){e:{try{kg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ZC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qa.$.h.call(this)}}pt(qa,Ct);var ZC={2:"touch",3:"pen",4:"mouse"};qa.prototype.h=function(){qa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Al="closure_listenable_"+(1e6*Math.random()|0),e4=0;function t4(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++e4,this.fa=this.ia=!1}function Rh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ag(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function n4(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Q2(t){const e={};for(const n in t)e[n]=t[n];return e}const $0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y2(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<$0.length;s++)n=$0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function bh(t){this.src=t,this.g={},this.h=0}bh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Rp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new t4(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function xp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=W2(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Rh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var xg="closure_lm_"+(1e6*Math.random()|0),nf={};function X2(t,e,n,r,i){if(r&&r.once)return Z2(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)X2(t,e[s],n,r,i);return null}return n=Pg(n),t&&t[Al]?t.O(e,n,kl(r)?!!r.capture:!!r,i):J2(t,e,n,!1,r,i)}function J2(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=kl(i)?!!i.capture:!!i,a=bg(t);if(a||(t[xg]=a=new bh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=r4(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)GC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(tT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function r4(){function t(n){return e.call(t.src,t.listener,n)}const e=i4;return t}function Z2(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Z2(t,e[s],n,r,i);return null}return n=Pg(n),t&&t[Al]?t.P(e,n,kl(r)?!!r.capture:!!r,i):J2(t,e,n,!0,r,i)}function eT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)eT(t,e[s],n,r,i);else r=kl(r)?!!r.capture:!!r,n=Pg(n),t&&t[Al]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Rp(s,n,r,i),-1<n&&(Rh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=bg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rp(e,n,r,i)),(n=-1<t?e[t]:null)&&Rg(n))}function Rg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Al])xp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(tT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bg(e))?(xp(n,t),n.h==0&&(n.src=null,e[xg]=null)):Rh(t)}}}function tT(t){return t in nf?nf[t]:nf[t]="on"+t}function i4(t,e){if(t.fa)t=!0;else{e=new qa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Rg(t),t=n.call(r,e)}return t}function bg(t){return t=t[xg],t instanceof bh?t:null}var rf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pg(t){return typeof t=="function"?t:(t[rf]||(t[rf]=function(e){return t.handleEvent(e)}),t[rf])}function ft(){mi.call(this),this.i=new bh(this),this.S=this,this.J=null}pt(ft,mi);ft.prototype[Al]=!0;ft.prototype.removeEventListener=function(t,e,n,r){eT(this,t,e,n,r)};function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ct(e,t);else if(e instanceof Ct)e.target=e.target||t;else{var i=e;e=new Ct(r,t),Y2(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=yu(o,r,!0,e)&&i}if(o=e.g=t,i=yu(o,r,!0,e)&&i,i=yu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=yu(o,r,!1,e)&&i}ft.prototype.N=function(){if(ft.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Rh(n[r]);delete t.g[e],t.h--}}this.J=null};ft.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ft.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&xp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Cg=X.JSON.stringify;class s4{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function o4(){var t=Ng;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class a4{constructor(){this.h=this.g=null}add(e,n){const r=nT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var nT=new s4(()=>new l4,t=>t.reset());class l4{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function u4(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function c4(t){X.setTimeout(()=>{throw t},0)}let Ka,Ga=!1,Ng=new a4,rT=()=>{const t=X.Promise.resolve(void 0);Ka=()=>{t.then(h4)}};var h4=()=>{for(var t;t=o4();){try{t.h.call(t.g)}catch(n){c4(n)}var e=nT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ga=!1};function Ph(t,e){ft.call(this),this.h=t||1,this.g=e||X,this.j=Pt(this.qb,this),this.l=Date.now()}pt(Ph,ft);V=Ph.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(Og(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Og(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Ph.$.N.call(this),Og(this),delete this.g};function Dg(t,e,n){if(typeof t=="function")n&&(t=Pt(t,n));else if(t&&typeof t.handleEvent=="function")t=Pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function iT(t){t.g=Dg(()=>{t.g=null,t.i&&(t.i=!1,iT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class d4 extends mi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:iT(this)}N(){super.N(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qa(t){mi.call(this),this.h=t,this.g={}}pt(Qa,mi);var z0=[];function sT(t,e,n,r){Array.isArray(n)||(n&&(z0[0]=n.toString()),n=z0);for(var i=0;i<n.length;i++){var s=X2(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function oT(t){Ag(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rg(e)},t),t.g={}}Qa.prototype.N=function(){Qa.$.N.call(this),oT(this)};Qa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ch(){this.g=!0}Ch.prototype.Ea=function(){this.g=!1};function f4(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function p4(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Cs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+g4(t,n)+(r?" "+r:"")})}function m4(t,e){t.info(function(){return"TIMEOUT: "+e})}Ch.prototype.info=function(){};function g4(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Cg(n)}catch{return e}}var os={},B0=null;function Nh(){return B0=B0||new ft}os.Ta="serverreachability";function aT(t){Ct.call(this,os.Ta,t)}pt(aT,Ct);function Ya(t){const e=Nh();Et(e,new aT(e))}os.STAT_EVENT="statevent";function lT(t,e){Ct.call(this,os.STAT_EVENT,t),this.stat=e}pt(lT,Ct);function Ft(t){const e=Nh();Et(e,new lT(e,t))}os.Ua="timingevent";function uT(t,e){Ct.call(this,os.Ua,t),this.size=e}pt(uT,Ct);function xl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var Oh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Lg(){}Lg.prototype.h=null;function H0(t){return t.h||(t.h=t.i())}function hT(){}var Rl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Mg(){Ct.call(this,"d")}pt(Mg,Ct);function Vg(){Ct.call(this,"c")}pt(Vg,Ct);var bp;function Dh(){}pt(Dh,Lg);Dh.prototype.g=function(){return new XMLHttpRequest};Dh.prototype.i=function(){return{}};bp=new Dh;function bl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Qa(this),this.P=y4,t=Sp?125:void 0,this.V=new Ph(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dT}function dT(){this.i=null,this.g="",this.h=!1}var y4=45e3,fT={},Pp={};V=bl.prototype;V.setTimeout=function(t){this.P=t};function Cp(t,e,n){t.L=1,t.A=Mh(dr(e)),t.u=n,t.S=!0,pT(t,null)}function pT(t,e){t.G=Date.now(),Pl(t),t.B=dr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),TT(n.i,"t",r),t.o=0,n=t.l.J,t.h=new dT,t.g=BT(t.l,n?e:null,!t.u),0<t.O&&(t.M=new d4(Pt(t.Pa,t,t.g),t.O)),sT(t.U,t.g,"readystatechange",t.nb),e=t.I?Q2(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ya(),f4(t.j,t.v,t.B,t.m,t.W,t.u)}V.nb=function(t){t=t.target;const e=this.M;e&&jn(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const c=jn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Sp||this.g&&(this.h.h||this.g.ja()||G0(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ya(3):Ya(2)),Lh(this);var n=this.g.da();this.ca=n;t:if(mT(this)){var r=G0(this.g);t="";var i=r.length,s=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ai(this),ga(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,p4(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wa(a)){var u=a;break t}}u=null}if(n=u)Cs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Np(this,n);else{this.i=!1,this.s=3,Ft(12),Ai(this),ga(this);break e}}this.S?(gT(this,c,o),Sp&&this.i&&c==3&&(sT(this.U,this.V,"tick",this.mb),this.V.start())):(Cs(this.j,this.m,o,null),Np(this,o)),c==4&&Ai(this),this.i&&!this.J&&(c==4?jT(this.l,this):(this.i=!1,Pl(this)))}else F4(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),Ai(this),ga(this)}}}catch{}finally{}};function mT(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function gT(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=v4(t,n),i==Pp){e==4&&(t.s=4,Ft(14),r=!1),Cs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==fT){t.s=4,Ft(15),Cs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Cs(t.j,t.m,i,null),Np(t,i);mT(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ft(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bg(e),e.M=!0,Ft(11))):(Cs(t.j,t.m,n,"[Invalid Chunked Response]"),Ai(t),ga(t))}V.mb=function(){if(this.g){var t=jn(this.g),e=this.g.ja();this.o<e.length&&(Lh(this),gT(this,t,e),this.i&&t!=4&&Pl(this))}};function v4(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Pp:(n=Number(e.substring(n,r)),isNaN(n)?fT:(r+=1,r+n>e.length?Pp:(e=e.slice(r,r+n),t.o=r+n,e)))}V.cancel=function(){this.J=!0,Ai(this)};function Pl(t){t.Y=Date.now()+t.P,yT(t,t.P)}function yT(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=xl(Pt(t.lb,t),e)}function Lh(t){t.C&&(X.clearTimeout(t.C),t.C=null)}V.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(m4(this.j,this.B),this.L!=2&&(Ya(),Ft(17)),Ai(this),this.s=2,ga(this)):yT(this,this.Y-t)};function ga(t){t.l.H==0||t.J||jT(t.l,t)}function Ai(t){Lh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Og(t.V),oT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Np(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Op(n.i,t))){if(!t.K&&Op(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Vc(n),Uh(n);else break e;zg(n),Ft(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=xl(Pt(n.ib,n),6e3));if(1>=kT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else xi(n,11)}else if((t.K||n.g==t)&&Vc(n),!Wa(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Fg(s,s.h),s.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,be(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=zT(r,r.J?r.pa:null,r.Y),o.K){AT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Lh(a),Pl(a)),r.g=o}else VT(r);0<n.j.length&&$h(n)}else u[0]!="stop"&&u[0]!="close"||xi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?xi(n,7):$g(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ya(4)}catch{}}function _4(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ah(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function w4(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ah(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function vT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ah(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=w4(t),r=_4(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var _T=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function E4(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vi){this.h=t.h,Lc(this,t.j),this.s=t.s,this.g=t.g,Mc(this,t.m),this.l=t.l;var e=t.i,n=new Xa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),W0(this,n),this.o=t.o}else t&&(e=String(t).match(_T))?(this.h=!1,Lc(this,e[1]||"",!0),this.s=ea(e[2]||""),this.g=ea(e[3]||"",!0),Mc(this,e[4]),this.l=ea(e[5]||"",!0),W0(this,e[6]||"",!0),this.o=ea(e[7]||"")):(this.h=!1,this.i=new Xa(null,this.h))}Vi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ta(e,q0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ta(e,q0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ta(n,n.charAt(0)=="/"?S4:I4,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ta(n,A4)),t.join("")};function dr(t){return new Vi(t)}function Lc(t,e,n){t.j=n?ea(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function W0(t,e,n){e instanceof Xa?(t.i=e,x4(t.i,t.h)):(n||(e=ta(e,k4)),t.i=new Xa(e,t.h))}function be(t,e,n){t.i.set(e,n)}function Mh(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ea(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ta(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,T4),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function T4(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var q0=/[#\/\?@]/g,I4=/[#\?:]/g,S4=/[#\?]/g,k4=/[#\?@]/g,A4=/#/g;function Xa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gi(t){t.g||(t.g=new Map,t.h=0,t.i&&E4(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Xa.prototype;V.add=function(t,e){gi(this),this.i=null,t=wo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wT(t,e){gi(t),e=wo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ET(t,e){return gi(t),e=wo(t,e),t.g.has(e)}V.forEach=function(t,e){gi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};V.ta=function(){gi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};V.Z=function(t){gi(this);let e=[];if(typeof t=="string")ET(this,t)&&(e=e.concat(this.g.get(wo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return gi(this),this.i=null,t=wo(this,t),ET(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function TT(t,e,n){wT(t,e),0<n.length&&(t.i=null,t.g.set(wo(t,e),Sg(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function wo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function x4(t,e){e&&!t.j&&(gi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(wT(this,r),TT(this,i,n))},t)),t.j=e}var R4=class{constructor(t,e){this.g=t,this.map=e}};function IT(t){this.l=t||b4,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ka&&X.g.Ka()&&X.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var b4=10;function ST(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function kT(t){return t.h?1:t.g?t.g.size:0}function Op(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fg(t,e){t.g?t.g.add(e):t.h=e}function AT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}IT.prototype.cancel=function(){if(this.i=xT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Sg(t.i)}var P4=class{stringify(t){return X.JSON.stringify(t,void 0)}parse(t){return X.JSON.parse(t,void 0)}};function C4(){this.g=new P4}function N4(t,e,n){const r=n||"";try{vT(t,function(i,s){let o=i;kl(i)&&(o=Cg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function O4(t,e){const n=new Ch;if(X.Image){const r=new Image;r.onload=gu(vu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=gu(vu,n,r,"TestLoadImage: error",!1,e),r.onabort=gu(vu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=gu(vu,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function vu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Vh(t){this.l=t.ec||null,this.j=t.ob||!1}pt(Vh,Lg);Vh.prototype.g=function(){return new Fh(this.l,this.j)};Vh.prototype.i=function(t){return function(){return t}}({});function Fh(t,e){ft.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=jg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pt(Fh,ft);var jg=0;V=Fh.prototype;V.open=function(t,e){if(this.readyState!=jg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ja(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||X).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cl(this)),this.readyState=jg};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ja(this)),this.g&&(this.readyState=3,Ja(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;RT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function RT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Cl(this):Ja(this),this.readyState==3&&RT(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,Cl(this))};V.Ya=function(t){this.g&&(this.response=t,Cl(this))};V.ka=function(){this.g&&Cl(this)};function Cl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ja(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ja(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var D4=X.JSON.parse;function Ge(t){ft.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=bT,this.L=this.M=!1}pt(Ge,ft);var bT="",L4=/^https?$/i,M4=["POST","PUT"];V=Ge.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bp.g(),this.C=this.u?H0(this.u):H0(bp),this.g.onreadystatechange=Pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){K0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=X.FormData&&t instanceof X.FormData,!(0<=W2(M4,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{NT(this),0<this.B&&((this.L=V4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pt(this.ua,this)):this.A=Dg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){K0(this,s)}};function V4(t){return io&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof Ig<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))};function K0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,PT(t),jh(t)}function PT(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),jh(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jh(this,!0)),Ge.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?CT(this):this.kb())};V.kb=function(){CT(this)};function CT(t){if(t.h&&typeof Ig<"u"&&(!t.C[1]||jn(t)!=4||t.da()!=2)){if(t.v&&jn(t)==4)Dg(t.La,0,t);else if(Et(t,"readystatechange"),jn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(_T)[1]||null;!i&&X.self&&X.self.location&&(i=X.self.location.protocol.slice(0,-1)),r=!L4.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var s=2<jn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",PT(t)}}finally{jh(t)}}}}function jh(t,e){if(t.g){NT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{n.onreadystatechange=r}catch{}}}function NT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function jn(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),D4(e)}};function G0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case bT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function F4(t){const e={};t=(t.g&&2<=jn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Wa(t[r]))continue;var n=u4(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}n4(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function OT(t){let e="";return Ag(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ug(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=OT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function zo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function DT(t){this.Ga=0,this.j=[],this.l=new Ch,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zo("baseRetryDelayMs",5e3,t),this.hb=zo("retryDelaySeedMs",1e4,t),this.eb=zo("forwardChannelMaxRetries",2,t),this.xa=zo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new IT(t&&t.concurrentRequestLimit),this.Ja=new C4,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=DT.prototype;V.ra=8;V.H=1;function $g(t){if(LT(t),t.H==3){var e=t.W++,n=dr(t.I);if(be(n,"SID",t.K),be(n,"RID",e),be(n,"TYPE","terminate"),Nl(t,n),e=new bl(t,t.l,e),e.L=2,e.A=Mh(dr(n)),n=!1,X.navigator&&X.navigator.sendBeacon)try{n=X.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&X.Image&&(new Image().src=e.A,n=!0),n||(e.g=BT(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Pl(e)}$T(t)}function Uh(t){t.g&&(Bg(t),t.g.cancel(),t.g=null)}function LT(t){Uh(t),t.u&&(X.clearTimeout(t.u),t.u=null),Vc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function $h(t){if(!ST(t.i)&&!t.m){t.m=!0;var e=t.Na;Ka||rT(),Ga||(Ka(),Ga=!0),Ng.add(e,t),t.C=0}}function j4(t,e){return kT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=xl(Pt(t.Na,t,e),UT(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new bl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Q2(s),Y2(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=MT(this,i,e),n=dr(this.I),be(n,"RID",t),be(n,"CVER",22),this.F&&be(n,"X-HTTP-Session-Id",this.F),Nl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(OT(s)))+"&"+e:this.o&&Ug(n,this.o,s)),Fg(this.i,i),this.bb&&be(n,"TYPE","init"),this.P?(be(n,"$req",e),be(n,"SID","null"),i.aa=!0,Cp(i,n,null)):Cp(i,n,e),this.H=2}}else this.H==3&&(t?Q0(this,t):this.j.length==0||ST(this.i)||Q0(this))};function Q0(t,e){var n;e?n=e.m:n=t.W++;const r=dr(t.I);be(r,"SID",t.K),be(r,"RID",n),be(r,"AID",t.V),Nl(t,r),t.o&&t.s&&Ug(r,t.o,t.s),n=new bl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=MT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Fg(t.i,n),Cp(n,r,e)}function Nl(t,e){t.na&&Ag(t.na,function(n,r){be(e,r,n)}),t.h&&vT({},function(n,r){be(e,r,n)})}function MT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Pt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{N4(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function VT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ka||rT(),Ga||(Ka(),Ga=!0),Ng.add(e,t),t.A=0}}function zg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=xl(Pt(t.Ma,t),UT(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,FT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=xl(Pt(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ft(10),Uh(this),FT(this))};function Bg(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function FT(t){t.g=new bl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dr(t.wa);be(e,"RID","rpc"),be(e,"SID",t.K),be(e,"AID",t.V),be(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&be(e,"TO",t.qa),be(e,"TYPE","xmlhttp"),Nl(t,e),t.o&&t.s&&Ug(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Mh(dr(e)),n.u=null,n.S=!0,pT(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Uh(this),zg(this),Ft(19))};function Vc(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function jT(t,e){var n=null;if(t.g==e){Vc(t),Bg(t),t.g=null;var r=2}else if(Op(t.i,e))n=e.F,AT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Nh(),Et(r,new uT(r,n)),$h(t)}else VT(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&j4(t,e)||r==2&&zg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:xi(t,5);break;case 4:xi(t,10);break;case 3:xi(t,6);break;default:xi(t,2)}}}function UT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function xi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Pt(t.pb,t);n||(n=new Vi("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Lc(n,"https"),Mh(n)),O4(n.toString(),r)}else Ft(2);t.H=0,t.h&&t.h.za(e),$T(t),LT(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ft(2)):(this.l.info("Failed to ping google.com"),Ft(1))};function $T(t){if(t.H=0,t.ma=[],t.h){const e=xT(t.i);(e.length!=0||t.j.length!=0)&&(j0(t.ma,e),j0(t.ma,t.j),t.i.i.length=0,Sg(t.j),t.j.length=0),t.h.ya()}}function zT(t,e,n){var r=n instanceof Vi?dr(n):new Vi(n);if(r.g!="")e&&(r.g=e+"."+r.g),Mc(r,r.m);else{var i=X.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Vi(null);r&&Lc(s,r),e&&(s.g=e),i&&Mc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&be(r,n,e),be(r,"VER",t.ra),Nl(t,r),r}function BT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ge(new Vh({ob:n})):new Ge(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function HT(){}V=HT.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Fc(){if(io&&!(10<=Number(JC)))throw Error("Environmental error: no available transport.")}Fc.prototype.g=function(t,e){return new an(t,e)};function an(t,e){ft.call(this),this.g=new DT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Wa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Wa(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Eo(this)}pt(an,ft);an.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ft(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=zT(t,null,t.Y),$h(t)};an.prototype.close=function(){$g(this.g)};an.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Cg(t),t=n);e.j.push(new R4(e.fb++,t)),e.H==3&&$h(e)};an.prototype.N=function(){this.g.h=null,delete this.j,$g(this.g),delete this.g,an.$.N.call(this)};function WT(t){Mg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}pt(WT,Mg);function qT(){Vg.call(this),this.status=1}pt(qT,Vg);function Eo(t){this.g=t}pt(Eo,HT);Eo.prototype.Ba=function(){Et(this.g,"a")};Eo.prototype.Aa=function(t){Et(this.g,new WT(t))};Eo.prototype.za=function(t){Et(this.g,new qT)};Eo.prototype.ya=function(){Et(this.g,"b")};function U4(){this.blockSize=-1}function Cn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}pt(Cn,U4);Cn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function sf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Cn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)sf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){sf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){sf(this,r),i=0;break}}this.h=i,this.i+=e};Cn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function we(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var $4={};function Hg(t){return-128<=t&&128>t?QC(t,function(e){return new we([e|0],0>e?-1:0)}):new we([t|0],0>t?-1:0)}function Un(t){if(isNaN(t)||!isFinite(t))return Hs;if(0>t)return vt(Un(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Dp;return new we(e,0)}function KT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return vt(KT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Un(Math.pow(e,8)),r=Hs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Un(Math.pow(e,s)),r=r.R(s).add(Un(o))):(r=r.R(n),r=r.add(Un(o)))}return r}var Dp=4294967296,Hs=Hg(0),Lp=Hg(1),Y0=Hg(16777216);V=we.prototype;V.ea=function(){if(mn(this))return-vt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Dp+r)*e,e*=Dp}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ir(this))return"0";if(mn(this))return"-"+vt(this).toString(t);for(var e=Un(Math.pow(t,6)),n=this,r="";;){var i=Uc(n,e).g;n=jc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,ir(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ir(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function mn(t){return t.h==-1}V.X=function(t){return t=jc(this,t),mn(t)?-1:ir(t)?0:1};function vt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new we(n,~t.h).add(Lp)}V.abs=function(){return mn(this)?vt(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new we(n,n[n.length-1]&-2147483648?-1:0)};function jc(t,e){return t.add(vt(e))}V.R=function(t){if(ir(this)||ir(t))return Hs;if(mn(this))return mn(t)?vt(this).R(vt(t)):vt(vt(this).R(t));if(mn(t))return vt(this.R(vt(t)));if(0>this.X(Y0)&&0>t.X(Y0))return Un(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,_u(n,2*r+2*i),n[2*r+2*i+1]+=s*l,_u(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,_u(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,_u(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new we(n,0)};function _u(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Bo(t,e){this.g=t,this.h=e}function Uc(t,e){if(ir(e))throw Error("division by zero");if(ir(t))return new Bo(Hs,Hs);if(mn(t))return e=Uc(vt(t),e),new Bo(vt(e.g),vt(e.h));if(mn(e))return e=Uc(t,vt(e)),new Bo(vt(e.g),e.h);if(30<t.g.length){if(mn(t)||mn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Lp,r=e;0>=r.X(t);)n=X0(n),r=X0(r);var i=ms(n,1),s=ms(r,1);for(r=ms(r,2),n=ms(n,2);!ir(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ms(r,1),n=ms(n,1)}return e=jc(t,i.R(e)),new Bo(i,e)}for(i=Hs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Un(n),o=s.R(e);mn(o)||0<o.X(t);)n-=r,s=Un(n),o=s.R(e);ir(s)&&(s=Lp),i=i.add(s),t=jc(t,o)}return new Bo(i,t)}V.gb=function(t){return Uc(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new we(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new we(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new we(n,this.h^t.h)};function X0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new we(n,t.h)}function ms(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new we(i,t.h)}Fc.prototype.createWebChannel=Fc.prototype.g;an.prototype.send=an.prototype.u;an.prototype.open=an.prototype.m;an.prototype.close=an.prototype.close;Oh.NO_ERROR=0;Oh.TIMEOUT=8;Oh.HTTP_ERROR=6;cT.COMPLETE="complete";hT.EventType=Rl;Rl.OPEN="a";Rl.CLOSE="b";Rl.ERROR="c";Rl.MESSAGE="d";ft.prototype.listen=ft.prototype.O;Ge.prototype.listenOnce=Ge.prototype.P;Ge.prototype.getLastError=Ge.prototype.Sa;Ge.prototype.getLastErrorCode=Ge.prototype.Ia;Ge.prototype.getStatus=Ge.prototype.da;Ge.prototype.getResponseJson=Ge.prototype.Wa;Ge.prototype.getResponseText=Ge.prototype.ja;Ge.prototype.send=Ge.prototype.ha;Ge.prototype.setWithCredentials=Ge.prototype.Oa;Cn.prototype.digest=Cn.prototype.l;Cn.prototype.reset=Cn.prototype.reset;Cn.prototype.update=Cn.prototype.j;we.prototype.add=we.prototype.add;we.prototype.multiply=we.prototype.R;we.prototype.modulo=we.prototype.gb;we.prototype.compare=we.prototype.X;we.prototype.toNumber=we.prototype.ea;we.prototype.toString=we.prototype.toString;we.prototype.getBits=we.prototype.D;we.fromNumber=Un;we.fromString=KT;var z4=function(){return new Fc},B4=function(){return Nh()},of=Oh,H4=cT,W4=os,J0={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wu=hT,q4=Ge,K4=Cn,Ws=we;const Z0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To="10.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new fg("@firebase/firestore");function Ho(){return Qi.logLevel}function M(t,...e){if(Qi.logLevel<=he.DEBUG){const n=e.map(Wg);Qi.debug(`Firestore (${To}): ${t}`,...n)}}function Xn(t,...e){if(Qi.logLevel<=he.ERROR){const n=e.map(Wg);Qi.error(`Firestore (${To}): ${t}`,...n)}}function so(t,...e){if(Qi.logLevel<=he.WARN){const n=e.map(Wg);Qi.warn(`Firestore (${To}): ${t}`,...n)}}function Wg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: `+t;throw Xn(e),new Error(e)}function Ae(t,e){t||Y()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class G4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}}class Q4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Y4{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ei;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ei,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ei)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new GT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new xt(e)}}class X4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class J4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new X4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Z4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new Z4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=tN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function oo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Je(0,0))}static max(){return new J(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Za.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Za?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends Za{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const nN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Za{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return nN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new U(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Pe.fromString(e))}static fromName(e){return new W(Pe.fromString(e).popFirst(5))}static empty(){return new W(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Pe(e.slice()))}}function rN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new si(i,W.empty(),e)}function iN(t){return new si(t.readTime,t.key,-1)}class si{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new si(J.min(),W.empty(),-1)}static max(){return new si(J.max(),W.empty(),-1)}}function sN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==oN)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new ei,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ya(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Kg(r.target.error);this.V.reject(new ya(e,i))}}static open(e,n,r,i){try{return new qg(n,e.transaction(i,r))}catch(s){throw new ya(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(M("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new uN(n)}}class Ri{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Ri.S(rt())===12.2&&Xn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return M("SimpleDb","Removing database:",e),Ti(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!w2())return!1;if(Ri.C())return!0;const e=rt(),n=Ri.S(e),r=0<n&&n<10,i=Ri.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(M("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ya(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new U(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new U(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ya(e,o))},i.onupgradeneeded=s=>{M("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{M("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=qg.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),C.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(M("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class lN{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Ti(this.k.delete())}}class ya extends U{constructor(e,n){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Dl(t){return t.name==="IndexedDbTransactionError"}class uN{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(M("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(M("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ti(r)}add(e){return M("SimpleDb","ADD",this.store.name,e,e),Ti(this.store.add(e))}get(e){return Ti(this.store.get(e)).next(n=>(n===void 0&&(n=null),M("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return M("SimpleDb","DELETE",this.store.name,e),Ti(this.store.delete(e))}count(){return M("SimpleDb","COUNT",this.store.name),Ti(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new C((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new C((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){M("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new C((r,i)=>{n.onerror=s=>{const o=Kg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new C((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new lN(a),u=n(a.primaryKey,a.value,l);if(u instanceof C){const c=u.catch(h=>(l.done(),C.reject(h)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>C.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ti(t){return new C((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Kg(r.target.error);n(i)}})}let e1=!1;function Kg(t){const e=Ri.S(rt());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return e1||(e1=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Gg._e=-1;function zh(t){return t==null}function $c(t){return t===0&&1/t==-1/0}function cN(t){return typeof t=="number"&&Number.isInteger(t)&&!$c(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Io(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eu(this.root,e,this.comparator,!0)}}class Eu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??yt.RED,this.left=i??yt.EMPTY,this.right=s??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new yt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return yt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new n1(this.data.getIterator())}getIteratorFrom(e){return new n1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class n1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new An([])}unionWith(e){let n=new Tt(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new An(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return oo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new XT("Invalid base64 string: "+s):s}}(e);return new Ot(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const hN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oi(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=hN.exec(t);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:et(t.seconds),nanos:et(t.nanos)}}function et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yi(t){return typeof t=="string"?Ot.fromBase64String(t):Ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yg(t){const e=t.mapValue.fields.__previous_value__;return Qg(e)?Yg(e):e}function el(t){const e=oi(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class tl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new tl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof tl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qg(t)?4:fN(t)?9007199254740991:10:Y()}function Jn(t,e){if(t===e)return!0;const n=Xi(t);if(n!==Xi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return el(t).isEqual(el(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=oi(i.timestampValue),a=oi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Yi(i.bytesValue).isEqual(Yi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return et(i.geoPointValue.latitude)===et(s.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return et(i.integerValue)===et(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=et(i.doubleValue),a=et(s.doubleValue);return o===a?$c(o)===$c(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return oo(t.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(t1(o)!==t1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Jn(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function nl(t,e){return(t.values||[]).find(n=>Jn(n,e))!==void 0}function ao(t,e){if(t===e)return 0;const n=Xi(t),r=Xi(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=et(s.integerValue||s.doubleValue),l=et(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return r1(t.timestampValue,e.timestampValue);case 4:return r1(el(t),el(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Yi(s),l=Yi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ge(a[u],l[u]);if(c!==0)return c}return ge(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ge(et(s.latitude),et(o.latitude));return a!==0?a:ge(et(s.longitude),et(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=ao(a[u],l[u]);if(c)return c}return ge(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Tu.mapValue&&o===Tu.mapValue)return 0;if(s===Tu.mapValue)return 1;if(o===Tu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ge(l[h],c[h]);if(d!==0)return d;const m=ao(a[l[h]],u[c[h]]);if(m!==0)return m}return ge(l.length,c.length)}(t.mapValue,e.mapValue);default:throw Y()}}function r1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=oi(t),r=oi(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function lo(t){return Mp(t)}function Mp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=oi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mp(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function i1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vp(t){return!!t&&"integerValue"in t}function Xg(t){return!!t&&"arrayValue"in t}function s1(t){return!!t&&"nullValue"in t}function o1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gu(t){return!!t&&"mapValue"in t}function va(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Io(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=va(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=va(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=va(n)}setAll(e){let n=_t.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=va(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Gu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Gu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Io(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gn(va(this.value))}}function JT(t){const e=[];return Io(t.fields,(n,r)=>{const i=new _t([n]);if(Gu(r)){const s=JT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new An(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new bt(e,0,J.min(),J.min(),J.min(),gn.empty(),0)}static newFoundDocument(e,n,r,i){return new bt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new bt(e,2,n,J.min(),J.min(),gn.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,J.min(),J.min(),gn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n){this.position=e,this.inclusive=n}}function a1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ao(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function l1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n="asc"){this.field=e,this.dir=n}}function pN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{}class nt extends ZT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new gN(e,n,r):n==="array-contains"?new _N(e,r):n==="in"?new wN(e,r):n==="not-in"?new EN(e,r):n==="array-contains-any"?new TN(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yN(e,r):new vN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ao(n,this.value)):n!==null&&Xi(this.value)===Xi(n)&&this.matchesComparison(ao(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends ZT{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Nn(e,n)}matches(e){return eI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function eI(t){return t.op==="and"}function tI(t){return mN(t)&&eI(t)}function mN(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function Fp(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+lo(t.value);if(tI(t))return t.filters.map(e=>Fp(e)).join(",");{const e=t.filters.map(n=>Fp(n)).join(",");return`${t.op}(${e})`}}function nI(t,e){return t instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.field.isEqual(i.field)&&Jn(r.value,i.value)}(t,e):t instanceof Nn?function(r,i){return i instanceof Nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&nI(o,i.filters[a]),!0):!1}(t,e):void Y()}function rI(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${lo(n.value)}`}(t):t instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(rI).join(" ,")+"}"}(t):"Filter"}class gN extends nt{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class yN extends nt{constructor(e,n){super(e,"in",n),this.keys=iI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vN extends nt{constructor(e,n){super(e,"not-in",n),this.keys=iI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class _N extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xg(n)&&nl(n.arrayValue,this.value)}}class wN extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&nl(this.value.arrayValue,n)}}class EN extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(nl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!nl(this.value.arrayValue,n)}}class TN extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>nl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function u1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new IN(t,e,n,r,i,s,o)}function Jg(t){const e=te(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>lo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>lo(r)).join(",")),e.ce=n}return e.ce}function Zg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!l1(t.startAt,e.startAt)&&l1(t.endAt,e.endAt)}function jp(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function SN(t,e,n,r,i,s,o,a){return new So(t,e,n,r,i,s,o,a)}function ey(t){return new So(t)}function c1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sI(t){return t.collectionGroup!==null}function _a(t){const e=te(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Tt(_t.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new rl(s,r))}),n.has(_t.keyField().canonicalString())||e.le.push(new rl(_t.keyField(),r))}return e.le}function qn(t){const e=te(t);return e.he||(e.he=kN(e,_a(t))),e.he}function kN(t,e){if(t.limitType==="F")return u1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new rl(i.field,s)});const n=t.endAt?new zc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zc(t.startAt.position,t.startAt.inclusive):null;return u1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Up(t,e){const n=t.filters.concat([e]);return new So(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $p(t,e,n){return new So(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bh(t,e){return Zg(qn(t),qn(e))&&t.limitType===e.limitType}function oI(t){return`${Jg(qn(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>rI(i)).join(", ")}]`),zh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>lo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>lo(i)).join(",")),`Target(${r})`}(qn(t))}; limitType=${t.limitType})`}function Hh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of _a(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=a1(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,_a(r),i)||r.endAt&&!function(o,a,l){const u=a1(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,_a(r),i))}(t,e)}function AN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function aI(t){return(e,n)=>{let r=!1;for(const i of _a(t)){const s=xN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function xN(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?ao(l,u):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Io(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return YT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=new $e(W.comparator);function fr(){return RN}const lI=new $e(W.comparator);function na(...t){let e=lI;for(const n of t)e=e.insert(n.key,n);return e}function uI(t){let e=lI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function bi(){return wa()}function cI(){return wa()}function wa(){return new ko(t=>t.toString(),(t,e)=>t.isEqual(e))}const bN=new $e(W.comparator),PN=new Tt(W.comparator);function le(...t){let e=PN;for(const n of t)e=e.add(n);return e}const CN=new Tt(ge);function NN(){return CN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$c(e)?"-0":e}}function dI(t){return{integerValue:""+t}}function ON(t,e){return cN(e)?dI(e):hI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this._=void 0}}function DN(t,e,n){return t instanceof Bc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qg(s)&&(s=Yg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof il?pI(t,e):t instanceof sl?mI(t,e):function(i,s){const o=fI(i,s),a=h1(o)+h1(i.Ie);return Vp(o)&&Vp(i.Ie)?dI(a):hI(i.serializer,a)}(t,e)}function LN(t,e,n){return t instanceof il?pI(t,e):t instanceof sl?mI(t,e):n}function fI(t,e){return t instanceof Hc?function(r){return Vp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Bc extends Wh{}class il extends Wh{constructor(e){super(),this.elements=e}}function pI(t,e){const n=gI(e);for(const r of t.elements)n.some(i=>Jn(i,r))||n.push(r);return{arrayValue:{values:n}}}class sl extends Wh{constructor(e){super(),this.elements=e}}function mI(t,e){let n=gI(e);for(const r of t.elements)n=n.filter(i=>!Jn(i,r));return{arrayValue:{values:n}}}class Hc extends Wh{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function h1(t){return et(t.integerValue||t.doubleValue)}function gI(t){return Xg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function MN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof il&&i instanceof il||r instanceof sl&&i instanceof sl?oo(r.elements,i.elements,Jn):r instanceof Hc&&i instanceof Hc?Jn(r.Ie,i.Ie):r instanceof Bc&&i instanceof Bc}(t.transform,e.transform)}class VN{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qh{}function yI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ty(t.key,Kn.none()):new Ll(t.key,t.data,Kn.none());{const n=t.data,r=gn.empty();let i=new Tt(_t.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new as(t.key,r,new An(i.toArray()),Kn.none())}}function FN(t,e,n){t instanceof Ll?function(i,s,o){const a=i.value.clone(),l=f1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof as?function(i,s,o){if(!Qu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=f1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(vI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ea(t,e,n,r){return t instanceof Ll?function(s,o,a,l){if(!Qu(s.precondition,o))return a;const u=s.value.clone(),c=p1(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof as?function(s,o,a,l){if(!Qu(s.precondition,o))return a;const u=p1(s.fieldTransforms,l,o),c=o.data;return c.setAll(vI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Qu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function jN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=fI(r.transform,i||null);s!=null&&(n===null&&(n=gn.empty()),n.set(r.field,s))}return n||null}function d1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&oo(r,i,(s,o)=>MN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ll extends qh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class as extends qh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function f1(t,e,n){const r=new Map;Ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,LN(o,a,n[i]))}return r}function p1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,DN(s,o,e))}return r}class ty extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UN extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&FN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ea(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ea(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=yI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&oo(this.mutations,e.mutations,(n,r)=>d1(n,r))&&oo(this.baseMutations,e.baseMutations,(n,r)=>d1(n,r))}}class ny{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ae(e.mutations.length===r.length);let i=function(){return bN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ny(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,fe;function HN(t){switch(t){default:return Y();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function _I(t){if(t===void 0)return Xn("GRPC error has no .code"),P.UNKNOWN;switch(t){case Ze.OK:return P.OK;case Ze.CANCELLED:return P.CANCELLED;case Ze.UNKNOWN:return P.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return P.INTERNAL;case Ze.UNAVAILABLE:return P.UNAVAILABLE;case Ze.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Ze.NOT_FOUND:return P.NOT_FOUND;case Ze.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Ze.ABORTED:return P.ABORTED;case Ze.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Ze.DATA_LOSS:return P.DATA_LOSS;default:return Y()}}(fe=Ze||(Ze={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=new Ws([4294967295,4294967295],0);function m1(t){const e=WN().encode(t),n=new K4;return n.update(e),new Uint8Array(n.digest())}function g1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ws([n,r],0),new Ws([i,s],0)]}class ry{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ra(`Invalid padding: ${n}`);if(r<0)throw new ra(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ra(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ra(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ws.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Ws.fromNumber(r)));return i.compare(qN)===1&&(i=new Ws([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=m1(e),[r,i]=g1(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ry(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=m1(e),[r,i]=g1(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ml.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kh(J.min(),i,new $e(ge),fr(),le())}}class Ml{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ml(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class wI{constructor(e,n){this.targetId=e,this.fe=n}}class EI{constructor(e,n,r=Ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class y1{constructor(){this.ge=0,this.pe=_1(),this.ye=Ot.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=le(),n=le(),r=le();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Ml(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=_1()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ae(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class KN{constructor(e){this.Le=e,this.ke=new Map,this.qe=fr(),this.Qe=v1(),this.Ke=new $e(ge)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(jp(s))if(r===0){const o=new W(s.path);this.We(n,o,bt.newNoDocument(o,J.min()))}else Ae(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Yi(r).toUint8Array()}catch(l){if(l instanceof XT)return so("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ry(o,i,s)}catch(l){return so(l instanceof ra?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&jp(a.target)){const l=new W(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,bt.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=le();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Kh(e,n,this.Ke,this.qe,r);return this.qe=fr(),this.Qe=v1(),this.Ke=new $e(ge),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new y1,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Tt(ge),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new y1),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function v1(){return new $e(W.comparator)}function _1(){return new $e(W.comparator)}const GN={asc:"ASCENDING",desc:"DESCENDING"},QN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YN={and:"AND",or:"OR"};class XN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zp(t,e){return t.useProto3Json||zh(e)?e:{value:e}}function Wc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JN(t,e){return Wc(t,e.toTimestamp())}function Gn(t){return Ae(!!t),J.fromTimestamp(function(n){const r=oi(n);return new Je(r.seconds,r.nanos)}(t))}function iy(t,e){return Bp(t,e).canonicalString()}function Bp(t,e){const n=function(i){return new Pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function II(t){const e=Pe.fromString(t);return Ae(RI(e)),e}function Hp(t,e){return iy(t.databaseId,e.path)}function af(t,e){const n=II(e);if(n.get(1)!==t.databaseId.projectId)throw new U(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(kI(n))}function SI(t,e){return iy(t.databaseId,e)}function ZN(t){const e=II(t);return e.length===4?Pe.emptyPath():kI(e)}function Wp(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kI(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function w1(t,e,n){return{name:Hp(t,e),fields:n.value.mapValue.fields}}function e6(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Ae(c===void 0||typeof c=="string"),Ot.fromBase64String(c||"")):(Ae(c===void 0||c instanceof Uint8Array),Ot.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?P.UNKNOWN:_I(u.code);return new U(c,u.message||"")}(o);n=new EI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=af(t,r.document.name),s=Gn(r.document.updateTime),o=r.document.createTime?Gn(r.document.createTime):J.min(),a=new gn({mapValue:{fields:r.document.fields}}),l=bt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Yu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=af(t,r.document),s=r.readTime?Gn(r.readTime):J.min(),o=bt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Yu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=af(t,r.document),s=r.removedTargetIds||[];n=new Yu([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new BN(i,s),a=r.targetId;n=new wI(a,o)}}return n}function t6(t,e){let n;if(e instanceof Ll)n={update:w1(t,e.key,e.value)};else if(e instanceof ty)n={delete:Hp(t,e.key)};else if(e instanceof as)n={update:w1(t,e.key,e.data),updateMask:c6(e.fieldMask)};else{if(!(e instanceof UN))return Y();n={verify:Hp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Bc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof il)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof sl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Hc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:JN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function n6(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Gn(i.updateTime):Gn(s);return o.isEqual(J.min())&&(o=Gn(s)),new VN(o,i.transformResults||[])}(n,e))):[]}function r6(t,e){return{documents:[SI(t,e.path)]}}function i6(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=SI(t,i);const s=function(u){if(u.length!==0)return xI(Nn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:ys(d.field),direction:a6(d.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=zp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function s6(t){let e=ZN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ae(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=AI(h);return d instanceof Nn&&tI(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new rl(vs(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,zh(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,m=h.values||[];return new zc(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new zc(m,d)}(n.endAt)),SN(e,i,o,s,a,"F",l,u)}function o6(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function AI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vs(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=vs(n.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vs(n.unaryFilter.field);return nt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(vs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(r=>AI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function a6(t){return GN[t]}function l6(t){return QN[t]}function u6(t){return YN[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return _t.fromServerFormat(t.fieldPath)}function xI(t){return t instanceof nt?function(n){if(n.op==="=="){if(o1(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if(s1(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(o1(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if(s1(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:l6(n.op),value:n.value}}}(t):t instanceof Nn?function(n){const r=n.getFilters().map(i=>xI(i));return r.length===1?r[0]:{compositeFilter:{op:u6(n.op),filters:r}}}(t):Y()}function c6(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r,i,s=J.min(),o=J.min(),a=Ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h6{constructor(e){this.ct=e}}function d6(t){const e=s6({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$p(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{constructor(){this._n=new p6}addToCollectionParentIndex(e,n){return this._n.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(si.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(si.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class p6{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Tt(Pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Tt(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new uo(0)}static Bn(){return new uo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m6{constructor(){this.changes=new ko(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g6{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ea(r.mutation,i,An.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=bi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=na();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=bi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=fr();const o=wa(),a=function(){return wa()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof as)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ea(c.mutation,u,c.mutation.getFieldMask(),Je.now())):o.set(u.key,An.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new g6(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=wa();let i=new $e((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||An.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||le()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=cI();c.forEach(d=>{if(!s.has(d)){const m=yI(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(bi());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,le())).next(c=>({batchId:a,changes:uI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=na();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=na();return this.indexManager.getCollectionParents(e,s).next(a=>C.forEach(a,l=>{const u=function(h,d){return new So(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,bt.newInvalidDocument(c)))});let a=na();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Ea(c.mutation,u,An.empty(),Je.now()),Hh(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v6{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return C.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Gn(i.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:d6(i.bundledQuery),readTime:Gn(i.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _6{constructor(){this.overlays=new $e(W.comparator),this.hr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=bi();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=bi(),s=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=bi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=bi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zN(n,r));let s=this.hr.get(n);s===void 0&&(s=le(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(){this.Pr=new Tt(ct.Ir),this.Tr=new Tt(ct.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ct(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new W(new Pe([])),r=new ct(n,e),i=new ct(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new W(new Pe([])),r=new ct(n,e),i=new ct(n,e+1);let s=le();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ct(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return W.comparator(e.key,n.key)||ge(e.pr,n.pr)}static Er(e,n){return ge(e.pr,n.pr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w6{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Tt(ct.Ir)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $N(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new ct(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),i=new ct(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Tt(ge);return n.forEach(i=>{const s=new ct(i,0),o=new ct(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),C.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new ct(new W(s),0);let a=new Tt(ge);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),C.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ae(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return C.forEach(n.mutations,i=>{const s=new ct(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ct(n,0),i=this.wr.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E6{constructor(e){this.vr=e,this.docs=function(){return new $e(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=fr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():bt.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=fr();const o=n.path,a=new W(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||sN(iN(c),r)<=0||(i.has(c.key)||Hh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Fr(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new T6(this)}getSize(e){return C.resolve(this.size)}}class T6 extends m6{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I6{constructor(e){this.persistence=e,this.Mr=new ko(n=>Jg(n),Zg),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Or=0,this.Nr=new sy,this.targetCount=0,this.Br=uo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),C.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new uo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.qn(n),C.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S6{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Gg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new I6(this),this.indexManager=new f6,this.remoteDocumentCache=function(i){return new E6(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new h6(n),this.$r=new v6(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _6,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new w6(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const i=new k6(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return C.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class k6 extends aN{constructor(e){super(),this.currentSequenceNumber=e}}class oy{constructor(e){this.persistence=e,this.zr=new sy,this.jr=null}static Hr(e){return new oy(e)}get Jr(){if(this.jr)return this.jr;throw Y()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),C.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Jr,r=>{const i=W.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return C.or([()=>C.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ay(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A6{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x6{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return ib()?8:Ri.v(rt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new A6;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Ho()<=he.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),C.resolve()):(Ho()<=he.DEBUG&&M("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ho()<=he.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qn(n))):C.resolve())}ji(e,n){if(c1(n))return C.resolve(null);let r=qn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$p(n,null,"F"),r=qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,$p(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return c1(n)||i.isEqual(J.min())?C.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?C.resolve(null):(Ho()<=he.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gs(n)),this.es(e,o,n,rN(i,-1)).next(a=>a))})}Zi(e,n){let r=new Tt(aI(e));return n.forEach((i,s)=>{Hh(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Ho()<=he.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",gs(n)),this.zi.getDocumentsMatchingQuery(e,n,si.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new $e(ge),this.rs=new ko(s=>Jg(s),Zg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new y6(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function b6(t,e,n,r){return new R6(t,e,n,r)}async function bI(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=le();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function P6(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let m=C.resolve();return d.forEach(y=>{m=m.next(()=>c.getEntry(l,y)).next(v=>{const w=u.docVersions.get(y);Ae(w!==null),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=le();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function PI(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function C6(t,e){const n=te(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Ot.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(v,w,p){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,m,c)&&a.push(n.Qr.updateTargetData(s,m))});let l=fr(),u=le();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(N6(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(J.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function N6(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=fr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function O6(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function D6(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new $r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function qp(t,e,n){const r=te(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Dl(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function E1(t,e,n){const r=te(t);let i=J.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=te(l),d=h.rs.get(c);return d!==void 0?C.resolve(h.ns.get(d)):h.Qr.getTargetData(u,c)}(r,o,qn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:le())).next(a=>(L6(r,AN(e),a),{documents:a,hs:s})))}function L6(t,e,n){let r=t.ss.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class T1{constructor(){this.activeTargetIds=NN()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class M6{constructor(){this.no=new T1,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new T1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V6{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu=null;function lf(){return Iu===null?Iu=function(){return 268435456+Math.round(2147483648*Math.random())}():Iu++,"0x"+Iu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j6{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="WebChannelConnection";class U6 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=lf(),l=this.bo(n,r.toUriEncodedString());M("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(M("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw so("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+To}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=F6[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=lf();return new Promise((o,a)=>{const l=new q4;l.setWithCredentials(!0),l.listenOnce(H4.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case of.NO_ERROR:const c=l.getResponseJson();M(At,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case of.TIMEOUT:M(At,`RPC '${e}' ${s} timed out`),a(new U(P.DEADLINE_EXCEEDED,"Request time out"));break;case of.HTTP_ERROR:const h=l.getStatus();if(M(At,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const y=function(w){const p=w.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(p)>=0?p:P.UNKNOWN}(m.status);a(new U(y,m.message))}else a(new U(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new U(P.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{M(At,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);M(At,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=lf(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=z4(),a=B4(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");M(At,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const y=new j6({lo:w=>{m?M(At,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(M(At,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),M(At,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},ho:()=>h.close()}),v=(w,p,f)=>{w.listen(p,g=>{try{f(g)}catch(T){setTimeout(()=>{throw T},0)}})};return v(h,wu.EventType.OPEN,()=>{m||M(At,`RPC '${e}' stream ${i} transport opened.`)}),v(h,wu.EventType.CLOSE,()=>{m||(m=!0,M(At,`RPC '${e}' stream ${i} transport closed`),y.Vo())}),v(h,wu.EventType.ERROR,w=>{m||(m=!0,so(At,`RPC '${e}' stream ${i} transport errored:`,w),y.Vo(new U(P.UNAVAILABLE,"The operation could not be completed")))}),v(h,wu.EventType.MESSAGE,w=>{var p;if(!m){const f=w.data[0];Ae(!!f);const g=f,T=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(T){M(At,`RPC '${e}' stream ${i} received error:`,T);const x=T.status;let E=function(N){const F=Ze[N];if(F!==void 0)return _I(F)}(x),k=T.message;E===void 0&&(E=P.INTERNAL,k="Unknown error status: "+x+" with message "+T.message),m=!0,y.Vo(new U(E,k)),h.close()}else M(At,`RPC '${e}' stream ${i} received:`,f),y.mo(f)}}),v(a,W4.STAT_EVENT,w=>{w.stat===J0.PROXY?M(At,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===J0.NOPROXY&&M(At,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}function uf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t){return new XN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new CI(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new U(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $6 extends NI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=e6(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Gn(o.readTime):J.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Wp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=jp(l)?{documents:r6(s,l)}:{query:i6(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=TI(s,o.resumeToken);const u=zp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Wc(s,o.snapshotVersion.toTimestamp());const u=zp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=o6(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Wp(this.serializer),n.removeTarget=e,this.t_(n)}}class z6 extends NI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=n6(e.writeResults,e.commitTime),r=Gn(e.commitTime);return this.listener.T_(r,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Wp(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>t6(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B6 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new U(P.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Bp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(P.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Bp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(P.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class H6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Xn(n),this.g_=!1):M("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W6{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{ls(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=te(l);u.v_.add(4),await Vl(u),u.x_.set("Unknown"),u.v_.delete(4),await Qh(u)}(this))})}),this.x_=new H6(r,i)}}async function Qh(t){if(ls(t))for(const e of t.F_)await e(!0)}async function Vl(t){for(const e of t.F_)await e(!1)}function OI(t,e){const n=te(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),cy(n)?uy(n):Ao(n).Jo()&&ly(n,e))}function DI(t,e){const n=te(t),r=Ao(n);n.C_.delete(e),r.Jo()&&LI(n,e),n.C_.size===0&&(r.Jo()?r.Xo():ls(n)&&n.x_.set("Unknown"))}function ly(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ao(t).c_(e)}function LI(t,e){t.O_.Oe(e),Ao(t).l_(e)}function uy(t){t.O_=new KN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ao(t).start(),t.x_.p_()}function cy(t){return ls(t)&&!Ao(t).Ho()&&t.C_.size>0}function ls(t){return te(t).v_.size===0}function MI(t){t.O_=void 0}async function q6(t){t.C_.forEach((e,n)=>{ly(t,e)})}async function K6(t,e){MI(t),cy(t)?(t.x_.S_(e),uy(t)):t.x_.set("Unknown")}async function G6(t,e,n){if(t.x_.set("Online"),e instanceof EI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qc(t,r)}else if(e instanceof Yu?t.O_.$e(e):e instanceof wI?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(J.min()))try{const r=await PI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Ot.EMPTY_BYTE_STRING,c.snapshotVersion)),LI(s,l);const h=new $r(c.target,l,u,c.sequenceNumber);ly(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await qc(t,r)}}async function qc(t,e,n){if(!Dl(e))throw e;t.v_.add(1),await Vl(t),t.x_.set("Offline"),n||(n=()=>PI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Qh(t)})}function VI(t,e){return e().catch(n=>qc(t,n,e))}async function Yh(t){const e=te(t),n=ai(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;Q6(e);)try{const i=await O6(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,Y6(e,i)}catch(i){await qc(e,i)}FI(e)&&jI(e)}function Q6(t){return ls(t)&&t.D_.length<10}function Y6(t,e){t.D_.push(e);const n=ai(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function FI(t){return ls(t)&&!ai(t).Ho()&&t.D_.length>0}function jI(t){ai(t).start()}async function X6(t){ai(t).d_()}async function J6(t){const e=ai(t);for(const n of t.D_)e.I_(n.mutations)}async function Z6(t,e,n){const r=t.D_.shift(),i=ny.from(r,e,n);await VI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Yh(t)}async function e3(t,e){e&&ai(t).P_&&await async function(r,i){if(function(o){return HN(o)&&o!==P.ABORTED}(i.code)){const s=r.D_.shift();ai(r).Zo(),await VI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Yh(r)}}(t,e),FI(t)&&jI(t)}async function S1(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=ls(n);n.v_.add(3),await Vl(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Qh(n)}async function t3(t,e){const n=te(t);e?(n.v_.delete(2),await Qh(n)):e||(n.v_.add(2),await Vl(n),n.x_.set("Unknown"))}function Ao(t){return t.N_||(t.N_=function(n,r,i){const s=te(n);return s.R_(),new $6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:q6.bind(null,t),To:K6.bind(null,t),u_:G6.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),cy(t)?uy(t):t.x_.set("Unknown")):(await t.N_.stop(),MI(t))})),t.N_}function ai(t){return t.B_||(t.B_=function(n,r,i){const s=te(n);return s.R_(),new z6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:X6.bind(null,t),To:e3.bind(null,t),E_:J6.bind(null,t),T_:Z6.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await Yh(t)):(await t.B_.stop(),t.D_.length>0&&(M("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new hy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dy(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),Dl(t))return new U(P.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=na(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(){this.L_=new $e(W.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):Y():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class co{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new co(e,n,qs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(){this.q_=void 0,this.Q_=[]}}class r3{constructor(){this.queries=new ko(e=>oI(e),Bh),this.onlineState="Unknown",this.K_=new Set}}async function i3(t,e){const n=te(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new n3),i)try{s.q_=await n.onListen(r)}catch(o){const a=dy(o,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&fy(n)}async function s3(t,e){const n=te(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function o3(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&fy(n)}function a3(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function fy(t){t.K_.forEach(e=>{e.next()})}class l3{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new co(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.key=e}}class $I{constructor(e){this.key=e}}class u3{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=le(),this.mutatedKeys=le(),this.ua=aI(e),this.ca=new qs(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new k1,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Hh(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let w=!1;d&&m?d.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),w=!0):this.Ia(d,m)||(r.track({type:2,doc:m}),w=!0,(l&&this.ua(m,l)>0||u&&this.ua(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),w=!0):d&&!m&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((c,h)=>function(m,y){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return v(m)-v(y)}(c.type,h.type)||this.ua(c.doc,h.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,o.length!==0||u?{snapshot:new co(this.query,e.ca,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new k1,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=le(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new $I(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new UI(r))}),n}Ra(e){this.oa=e.hs,this.aa=le();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return co.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class c3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class h3{constructor(e){this.key=e,this.ma=!1}}class d3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ko(a=>oI(a),Bh),this.pa=new Map,this.ya=new Set,this.wa=new $e(W.comparator),this.Sa=new Map,this.ba=new sy,this.Da={},this.Ca=new Map,this.va=uo.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function f3(t,e){const n=I3(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await D6(n.localStore,qn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await p3(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&OI(n.remoteStore,o)}return i}async function p3(t,e,n,r,i){t.Ma=(h,d,m)=>async function(v,w,p,f){let g=w.view.ha(p);g.Xi&&(g=await E1(v.localStore,w.query,!1).then(({documents:k})=>w.view.ha(k,g)));const T=f&&f.targetChanges.get(w.targetId),x=f&&f.targetMismatches.get(w.targetId)!=null,E=w.view.applyChanges(g,v.isPrimaryClient,T,x);return x1(v,w.targetId,E.da),E.snapshot}(t,h,d,m);const s=await E1(t.localStore,e,!0),o=new u3(e,s.hs),a=o.ha(s.documents),l=Ml.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);x1(t,n,u.da);const c=new c3(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function m3(t,e){const n=te(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Bh(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await qp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),DI(n.remoteStore,r.targetId),Kp(n,r.targetId)}).catch(Ol)):(Kp(n,r.targetId),await qp(n.localStore,r.targetId,!0))}async function g3(t,e,n){const r=S3(t);try{const i=await function(o,a){const l=te(o),u=Je.now(),c=a.reduce((m,y)=>m.add(y.key),le());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=fr(),v=le();return l.os.getEntries(m,c).next(w=>{y=w,y.forEach((p,f)=>{f.isValidDocument()||(v=v.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,y)).next(w=>{h=w;const p=[];for(const f of a){const g=jN(f,h.get(f.key).overlayedDocument);g!=null&&p.push(new as(f.key,g,JT(g.value.mapValue),Kn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,p,a)}).next(w=>{d=w;const p=w.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(m,w.batchId,p)})}).then(()=>({batchId:d.batchId,changes:uI(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new $e(ge)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await Fl(r,i.changes),await Yh(r.remoteStore)}catch(i){const s=dy(i,"Failed to persist write");n.reject(s)}}async function zI(t,e){const n=te(t);try{const r=await C6(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(Ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?Ae(o.ma):i.removedDocuments.size>0&&(Ae(o.ma),o.ma=!1))}),await Fl(n,r,e)}catch(r){await Ol(r)}}function A1(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.Q_)d.U_(a)&&(u=!0)}),u&&fy(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y3(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new $e(W.comparator);o=o.insert(s,bt.newNoDocument(s,J.min()));const a=le().add(s),l=new Kh(J.min(),new Map,new $e(ge),o,a);await zI(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),py(r)}else await qp(r.localStore,e,!1).then(()=>Kp(r,e,n)).catch(Ol)}async function v3(t,e){const n=te(t),r=e.batch.batchId;try{const i=await P6(n.localStore,e);HI(n,r,null),BI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fl(n,i)}catch(i){await Ol(i)}}async function _3(t,e,n){const r=te(t);try{const i=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Ae(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);HI(r,e,n),BI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fl(r,i)}catch(i){await Ol(i)}}function BI(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function HI(t,e,n){const r=te(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Kp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||WI(t,r)})}function WI(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(DI(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),py(t))}function x1(t,e,n){for(const r of n)r instanceof UI?(t.ba.addReference(r.key,e),w3(t,r)):r instanceof $I?(M("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||WI(t,r.key)):Y()}function w3(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(M("SyncEngine","New document in limbo: "+n),t.ya.add(r),py(t))}function py(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new W(Pe.fromString(e)),r=t.va.next();t.Sa.set(r,new h3(n)),t.wa=t.wa.insert(n,r),OI(t.remoteStore,new $r(qn(ey(n.path)),r,"TargetPurposeLimboResolution",Gg._e))}}async function Fl(t,e,n){const r=te(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=ay.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,u){const c=te(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(u,d=>C.forEach(d.qi,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>C.forEach(d.Qi,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Dl(h))throw h;M("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=c.ns.get(d),y=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(y);c.ns=c.ns.insert(d,v)}}}(r.localStore,s))}async function E3(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await bI(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new U(P.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fl(n,r.us)}}function T3(t,e){const n=te(t),r=n.Sa.get(e);if(r&&r.ma)return le().add(r.key);{let i=le();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function I3(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=T3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y3.bind(null,e),e.fa.u_=o3.bind(null,e.eventManager),e.fa.xa=a3.bind(null,e.eventManager),e}function S3(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_3.bind(null,e),e}class R1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Gh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return b6(this.persistence,new x6,e.initialUser,this.serializer)}createPersistence(e){return new S6(oy.Hr,this.serializer)}createSharedClientState(e){return new M6}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class k3{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>A1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=E3.bind(null,this.syncEngine),await t3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new r3}()}createDatastore(e){const n=Gh(e.databaseInfo.databaseId),r=function(s){return new U6(s)}(e.databaseInfo);return function(s,o,a,l){return new B6(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new W6(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>A1(this.syncEngine,n,0),function(){return I1.D()?new I1:new V6}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new d3(i,s,o,a,l,u);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=te(r);M("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Vl(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A3{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x3{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=xt.UNAUTHENTICATED,this.clientId=QT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cf(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function b1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await b3(t);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>S1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>S1(e.remoteStore,i)),t._onlineComponents=e}function R3(t){return t.name==="FirebaseError"?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function b3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await cf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!R3(n))throw n;so("Error using user provided cache. Falling back to memory cache: "+n),await cf(t,new R1)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await cf(t,new R1);return t._offlineComponents}async function qI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await b1(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await b1(t,new k3))),t._onlineComponents}function P3(t){return qI(t).then(e=>e.syncEngine)}async function P1(t){const e=await qI(t),n=e.eventManager;return n.onListen=f3.bind(null,e.syncEngine),n.onUnlisten=m3.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t,e,n){if(!n)throw new U(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function C3(t,e,n,r){if(e===!0&&r===!0)throw new U(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function N1(t){if(!W.isDocumentKey(t))throw new U(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function O1(t){if(W.isDocumentKey(t))throw new U(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Ks(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xh(t);throw new U(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}C3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=KI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new D1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new D1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new G4;switch(r.type){case"firstParty":return new J4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=C1.get(n);r&&(M("ComponentProvider","Removing Datastore"),C1.delete(n),r.terminate())}(this),Promise.resolve()}}function N3(t,e,n,r={}){var i;const s=(t=Ks(t,Jh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&so("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=xt.MOCK_USER;else{a=_2(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new U(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new xt(u)}t._authCredentials=new Q4(new GT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new us(this.firestore,e,this._query)}}class rn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rn(this.firestore,e,this._key)}}class ti extends us{constructor(e,n,r){super(e,n,ey(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rn(this.firestore,null,new W(e))}withConverter(e){return new ti(this.firestore,e,this._path)}}function QI(t,e,...n){if(t=ot(t),GI("collection","path",e),t instanceof Jh){const r=Pe.fromString(e,...n);return O1(r),new ti(t,null,r)}{if(!(t instanceof rn||t instanceof ti))throw new U(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return O1(r),new ti(t.firestore,null,r)}}function YI(t,e,...n){if(t=ot(t),arguments.length===1&&(e=QT.newId()),GI("doc","path",e),t instanceof Jh){const r=Pe.fromString(e,...n);return N1(r),new rn(t,null,new W(r))}{if(!(t instanceof rn||t instanceof ti))throw new U(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return N1(r),new rn(t.firestore,t instanceof ti?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new CI(this,"async_queue_retry"),this._u=()=>{const n=uf();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=uf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=uf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new ei;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!Dl(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Xn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=hy.createAndSchedule(this,e,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&Y()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}function L1(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ol extends Jh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new O3}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||JI(this),this._firestoreClient.terminate()}}function D3(t,e){const n=typeof t=="object"?t:mg(),r=typeof t=="string"?t:e||"(default)",i=Ih(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=g2("firestore");s&&N3(i,...s)}return i}function XI(t){return t._firestoreClient||JI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function JI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new dN(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,KI(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new x3(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ho(Ot.fromBase64String(e))}catch(n){throw new U(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ho(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L3=/^__.*__$/;class M3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ll(e,this.data,n,this.fieldTransforms)}}function eS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class yy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new yy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return Kc(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(eS(this.du)&&L3.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class V3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Gh(e)}Su(e,n,r,i=!1){return new yy({du:e,methodName:n,wu:r,path:_t.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tS(t){const e=t._freezeSettings(),n=Gh(t._databaseId);return new V3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function F3(t,e,n,r,i,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,i);iS("Data must be an object, but it was:",o,r);const a=nS(r,o);let l,u;if(s.merge)l=new An(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=U3(e,h,n);if(!o.contains(d))throw new U(P.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);z3(c,d)||c.push(d)}l=new An(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new M3(new gn(a),l,u)}function j3(t,e,n,r=!1){return vy(n,t.Su(r?4:3,e))}function vy(t,e){if(rS(t=ot(t)))return iS("Unsupported field value:",e,t),nS(t,e);if(t instanceof ZI)return function(r,i){if(!eS(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=vy(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ON(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Je.fromDate(r);return{timestampValue:Wc(i.serializer,s)}}if(r instanceof Je){const s=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wc(i.serializer,s)}}if(r instanceof gy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ho)return{bytesValue:TI(i.serializer,r._byteString)};if(r instanceof rn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:iy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Xh(r)}`)}(t,e)}function nS(t,e){const n={};return YT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Io(t,(r,i)=>{const s=vy(i,e.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof gy||t instanceof ho||t instanceof rn||t instanceof ZI)}function iS(t,e,n){if(!rS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Xh(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function U3(t,e,n){if((e=ot(e))instanceof my)return e._internalPath;if(typeof e=="string")return sS(t,e);throw Kc("Field path arguments must be of type string or ",t,!1,void 0,n)}const $3=new RegExp("[~\\*/\\[\\]]");function sS(t,e,n){if(e.search($3)>=0)throw Kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new my(...e.split("."))._internalPath}catch{throw Kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Kc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new U(P.INVALID_ARGUMENT,a+t+l)}function z3(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new B3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_y("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class B3 extends oS{data(){return super.data()}}function _y(t,e){return typeof e=="string"?sS(t,e):e instanceof my?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H3(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wy{}class aS extends wy{}function W3(t,e,...n){let r=[];e instanceof wy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Ty).length,a=s.filter(l=>l instanceof Ey).length;if(o>1||o>0&&a>0)throw new U(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ey extends aS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ey(e,n,r)}_apply(e){const n=this._parse(e);return lS(e._query,n),new us(e.firestore,e.converter,Up(e._query,n))}_parse(e){const n=tS(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new U(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){V1(h,c);const m=[];for(const y of h)m.push(M1(l,s,y));d={arrayValue:{values:m}}}else d=M1(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||V1(h,c),d=j3(a,o,h,c==="in"||c==="not-in");return nt.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ty extends wy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ty(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)lS(o,l),o=Up(o,l)}(e._query,n),new us(e.firestore,e.converter,Up(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Iy extends aS{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Iy(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new U(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new U(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rl(s,o)}(e._query,this._field,this._direction);return new us(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new So(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function q3(t,e="asc"){const n=e,r=_y("orderBy",t);return Iy._create(r,n)}function M1(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new U(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sI(e)&&n.indexOf("/")!==-1)throw new U(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Pe.fromString(n));if(!W.isDocumentKey(r))throw new U(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return i1(t,new W(r))}if(n instanceof rn)return i1(t,n._key);throw new U(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xh(n)}.`)}function V1(t,e){if(!Array.isArray(t)||t.length===0)throw new U(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class K3{convertValue(e,n="none"){switch(Xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Io(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new gy(et(e.latitude),et(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(el(e));default:return null}}convertTimestamp(e){const n=oi(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);Ae(RI(r));const i=new tl(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G3(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uS extends oS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_y("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Xu extends uS{data(e={}){return super.data(e)}}class Q3{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ia(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Xu(this._firestore,this._userDataWriter,r.key,r,new ia(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Xu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ia(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Xu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ia(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:Y3(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Y3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class cS extends K3{constructor(e){super(),this.firestore=e}convertBytes(e){return new ho(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rn(this.firestore,null,n)}}function X3(t){return hS(Ks(t.firestore,ol),[new ty(t._key,Kn.none())])}function J3(t,e){const n=Ks(t.firestore,ol),r=YI(t),i=G3(t.converter,e);return hS(n,[F3(tS(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Kn.exists(!1))]).then(()=>r)}function Z3(t,...e){var n,r,i;t=ot(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||L1(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(L1(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof rn)u=Ks(t.firestore,ol),c=ey(t._key.path),l={next:h=>{e[o]&&e[o](e5(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ks(t,us);u=Ks(h.firestore,ol),c=h._query;const d=new cS(u);l={next:m=>{e[o]&&e[o](new Q3(u,d,h,m))},error:e[o+1],complete:e[o+2]},H3(t._query)}return function(d,m,y,v){const w=new A3(v),p=new l3(m,w,y);return d.asyncQueue.enqueueAndForget(async()=>i3(await P1(d),p)),()=>{w.La(),d.asyncQueue.enqueueAndForget(async()=>s3(await P1(d),p))}}(XI(u),c,a,l)}function hS(t,e){return function(r,i){const s=new ei;return r.asyncQueue.enqueueAndForget(async()=>g3(await P3(r),i,s)),s.promise}(XI(t),e)}function e5(t,e,n){const r=n.docs.get(e._key),i=new cS(t);return new uS(t,i,e._key,r,new ia(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){To=i})(is),Ki(new ii("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ol(new Y4(r.getProvider("auth-internal")),new eN(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new U(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tl(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Hn(Z0,"4.4.2",e),Hn(Z0,"4.4.2","esm2017")})();function Sy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function dS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const t5=dS,fS=new Tl("auth","Firebase",dS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new fg("@firebase/auth");function n5(t,...e){Gc.logLevel<=he.WARN&&Gc.warn(`Auth (${is}): ${t}`,...e)}function Ju(t,...e){Gc.logLevel<=he.ERROR&&Gc.error(`Auth (${is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,...e){throw ky(t,...e)}function Qn(t,...e){return ky(t,...e)}function r5(t,e,n){const r=Object.assign(Object.assign({},t5()),{[e]:n});return new Tl("auth","Firebase",r).create(e,{appName:t.name})}function ky(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fS.create(t,...e)}function Z(t,e,...n){if(!t)throw ky(e,...n)}function sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ju(e),new Error(e)}function mr(t,e){t||sr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function i5(){return F1()==="http:"||F1()==="https:"}function F1(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s5(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(i5()||tb()||"connection"in navigator)?navigator.onLine:!0}function o5(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){this.shortDelay=e,this.longDelay=n,mr(n>e,"Short delay should be less than long delay!"),this.isMobile=ZR()||nb()}get(){return s5()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t,e){mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a5={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l5=new jl(3e4,6e4);function xy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xo(t,e,n,r,i={}){return mS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Il(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),pS.fetch()(gS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function mS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},a5),e);try{const i=new c5(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Su(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Su(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Su(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Su(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw r5(t,c,u);pr(t,c)}}catch(i){if(i instanceof Zn)throw i;pr(t,"network-request-failed",{message:String(i)})}}async function u5(t,e,n,r,i={}){const s=await xo(t,e,n,r,i);return"mfaPendingCredential"in s&&pr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ay(t.config,i):`${t.config.apiScheme}://${i}`}class c5{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qn(this.auth,"network-request-failed")),l5.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Su(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h5(t,e){return xo(t,"POST","/v1/accounts:delete",e)}async function d5(t,e){return xo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function f5(t,e=!1){const n=ot(t),r=await n.getIdToken(e),i=Ry(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ta(hf(i.auth_time)),issuedAtTime:Ta(hf(i.iat)),expirationTime:Ta(hf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hf(t){return Number(t)*1e3}function Ry(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ju("JWT malformed, contained fewer than 3 sections"),null;try{const i=p2(n);return i?JSON.parse(i):(Ju("Failed to decode base64 JWT payload"),null)}catch(i){return Ju("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function p5(t){const e=Ry(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zn&&m5(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function m5({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g5{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ta(this.lastLoginAt),this.creationTime=Ta(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await al(t,d5(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_5(s.providerUserInfo):[],a=v5(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new yS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function y5(t){const e=ot(t);await Qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function v5(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _5(t){return t.map(e=>{var{providerId:n}=e,r=Sy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w5(t,e){const n=await mS(t,{},async()=>{const r=Il({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=gS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function E5(t,e){return xo(t,"POST","/v2/accounts:revokeToken",xy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):p5(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await w5(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ll;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ll,this.toJSON())}_performRefresh(){return sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Sy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new g5(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await al(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return f5(this,e)}reload(){return y5(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await al(this,h5(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:T,isAnonymous:x,providerData:E,stsTokenManager:k}=n;Z(g&&k,e,"internal-error");const A=ll.fromJSON(this.name,k);Z(typeof g=="string",e,"internal-error"),Ar(h,e.name),Ar(d,e.name),Z(typeof T=="boolean",e,"internal-error"),Z(typeof x=="boolean",e,"internal-error"),Ar(m,e.name),Ar(y,e.name),Ar(v,e.name),Ar(w,e.name),Ar(p,e.name),Ar(f,e.name);const N=new Fi({uid:g,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:x,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:A,createdAt:p,lastLoginAt:f});return E&&Array.isArray(E)&&(N.providerData=E.map(F=>Object.assign({},F))),w&&(N._redirectEventId=w),N}static async _fromIdTokenResponse(e,n,r=!1){const i=new ll;i.updateFromServerResponse(n);const s=new Fi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=new Map;function or(t){mr(t instanceof Function,"Expected a class definition");let e=j1.get(t);return e?(mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,j1.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vS.type="NONE";const U1=vS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t,e,n){return`firebase:${t}:${e}:${n}`}class Gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gs(or(U1),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||or(U1);const o=Zu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Fi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Gs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Gs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ES(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_S(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(IS(e))return"Blackberry";if(SS(e))return"Webos";if(by(e))return"Safari";if((e.includes("chrome/")||wS(e))&&!e.includes("edge/"))return"Chrome";if(TS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _S(t=rt()){return/firefox\//i.test(t)}function by(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wS(t=rt()){return/crios\//i.test(t)}function ES(t=rt()){return/iemobile/i.test(t)}function TS(t=rt()){return/android/i.test(t)}function IS(t=rt()){return/blackberry/i.test(t)}function SS(t=rt()){return/webos/i.test(t)}function Zh(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function T5(t=rt()){var e;return Zh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function I5(){return rb()&&document.documentMode===10}function kS(t=rt()){return Zh(t)||TS(t)||SS(t)||IS(t)||/windows phone/i.test(t)||ES(t)}function S5(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t,e=[]){let n;switch(t){case"Browser":n=$1(rt());break;case"Worker":n=`${$1(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A5(t,e={}){return xo(t,"GET","/v2/passwordPolicy",xy(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x5=6;class R5{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:x5,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b5{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new z1(this),this.idTokenSubscription=new z1(this),this.beforeStateQueue=new k5(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=o5()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ot(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await A5(this),n=new R5(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await E5(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&or(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=AS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&n5(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Py(t){return ot(t)}class z1{constructor(e){this.auth=e,this.observer=null,this.addObserver=cb(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cy={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function P5(t){Cy=t}function C5(t){return Cy.loadJS(t)}function N5(){return Cy.gapiScript}function O5(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D5(t,e){const n=Ih(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Nc(s,e??{}))return i;pr(i,"already-initialized")}return n.initialize({options:e})}function L5(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function M5(t,e,n){const r=Py(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=xS(e),{host:o,port:a}=V5(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||F5()}function xS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function V5(t){const e=xS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:B1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:B1(o)}}}function B1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function F5(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sr("not implemented")}_getIdTokenResponse(e){return sr("not implemented")}_linkToIdToken(e,n){return sr("not implemented")}_getReauthenticationResolver(e){return sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(t,e){return u5(t,"POST","/v1/accounts:signInWithIdp",xy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j5="http://localhost";class Ji extends RS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ji(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Sy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ji(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qs(e,n)}buildRequest(){const e={requestUri:j5,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Il(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends bS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Ul{constructor(){super("facebook.com")}static credential(e){return Ji._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Ul{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ji._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mr.credential(n,r)}catch{return null}}}Mr.GOOGLE_SIGN_IN_METHOD="google.com";Mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Ul{constructor(){super("github.com")}static credential(e){return Ji._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Ul{constructor(){super("twitter.com")}static credential(e,n){return Ji._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fr.credential(n,r)}catch{return null}}}Fr.TWITTER_SIGN_IN_METHOD="twitter.com";Fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Fi._fromIdTokenResponse(e,r,i),o=H1(r);return new fo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=H1(r);return new fo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function H1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc extends Zn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yc(e,n,r,i)}}function PS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yc._fromErrorAndOperation(t,s,e,r):s})}async function U5(t,e,n=!1){const r=await al(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fo._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $5(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await al(t,PS(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=Ry(s.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),fo._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pr(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z5(t,e,n=!1){const r="signIn",i=await PS(t,r,e),s=await fo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function B5(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function H5(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}const Xc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xc,"1"),this.storage.removeItem(Xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W5(){const t=rt();return by(t)||Zh(t)}const q5=1e3,K5=10;class NS extends CS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=W5()&&S5(),this.fallbackToPolling=kS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);I5()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,K5):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NS.type="LOCAL";const G5=NS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS extends CS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OS.type="SESSION";const DS=OS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q5(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ed(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Q5(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ed.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y5{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ny("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(){return window}function X5(t){Yn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function J5(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z5(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eO(){return LS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="firebaseLocalStorageDb",tO=1,Jc="firebaseLocalStorage",VS="fbase_key";class $l{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function td(t,e){return t.transaction([Jc],e?"readwrite":"readonly").objectStore(Jc)}function nO(){const t=indexedDB.deleteDatabase(MS);return new $l(t).toPromise()}function Qp(){const t=indexedDB.open(MS,tO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jc,{keyPath:VS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jc)?e(r):(r.close(),await nO(),e(await Qp()))})})}async function W1(t,e,n){const r=td(t,!0).put({[VS]:e,value:n});return new $l(r).toPromise()}async function rO(t,e){const n=td(t,!1).get(e),r=await new $l(n).toPromise();return r===void 0?null:r.value}function q1(t,e){const n=td(t,!0).delete(e);return new $l(n).toPromise()}const iO=800,sO=3;class FS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return LS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ed._getInstance(eO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await J5(),!this.activeServiceWorker)return;this.sender=new Y5(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qp();return await W1(e,Xc,"1"),await q1(e,Xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>W1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>q1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=td(i,!1).getAll();return new $l(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FS.type="LOCAL";const oO=FS;new jl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(t,e){return e?or(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy extends RS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lO(t){return z5(t.auth,new Oy(t),t.bypassAuthState)}function uO(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),$5(n,new Oy(t),t.bypassAuthState)}async function cO(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),U5(n,new Oy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lO;case"linkViaPopup":case"linkViaRedirect":return cO;case"reauthViaPopup":case"reauthViaRedirect":return uO;default:pr(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO=new jl(2e3,1e4);class Ns extends jS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=Ny();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hO.get())};e()}}Ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO="pendingRedirect",ec=new Map;class fO extends jS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ec.get(this.auth._key());if(!e){try{const r=await pO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ec.set(this.auth._key(),e)}return this.bypassAuthState||ec.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pO(t,e){const n=yO(e),r=gO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mO(t,e){ec.set(t._key(),e)}function gO(t){return or(t._redirectPersistence)}function yO(t){return Zu(dO,t.config.apiKey,t.name)}async function vO(t,e,n=!1){const r=Py(t),i=aO(r,e),o=await new fO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=10*60*1e3;class wO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!US(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_O&&this.cachedEventUids.clear(),this.cachedEventUids.has(K1(e))}saveEventToCache(e){this.cachedEventUids.add(K1(e)),this.lastProcessedEventTime=Date.now()}}function K1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function US({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return US(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TO(t,e={}){return xo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SO=/^https?/;async function kO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TO(t);for(const n of e)try{if(AO(n))return}catch{}pr(t,"unauthorized-domain")}function AO(t){const e=Gp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!SO.test(n))return!1;if(IO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=new jl(3e4,6e4);function G1(){const t=Yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RO(t){return new Promise((e,n)=>{var r,i,s;function o(){G1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{G1(),n(Qn(t,"network-request-failed"))},timeout:xO.get()})}if(!((i=(r=Yn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yn().gapi)===null||s===void 0)&&s.load)o();else{const a=O5("iframefcb");return Yn()[a]=()=>{gapi.load?o():n(Qn(t,"network-request-failed"))},C5(`${N5()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw tc=null,e})}let tc=null;function bO(t){return tc=tc||RO(t),tc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=new jl(5e3,15e3),CO="__/auth/iframe",NO="emulator/auth/iframe",OO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LO(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ay(e,NO):`https://${t.config.authDomain}/${CO}`,r={apiKey:e.apiKey,appName:t.name,v:is},i=DO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Il(r).slice(1)}`}async function MO(t){const e=await bO(t),n=Yn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:LO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qn(t,"network-request-failed"),a=Yn().setTimeout(()=>{s(o)},PO.get());function l(){Yn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FO=500,jO=600,UO="_blank",$O="http://localhost";class Q1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zO(t,e,n,r=FO,i=jO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},VO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=rt().toLowerCase();n&&(a=wS(u)?UO:n),_S(u)&&(e=e||$O,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(T5(u)&&a!=="_self")return BO(e||"",a),new Q1(null);const h=window.open(e||"",a,c);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new Q1(h)}function BO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO="__/auth/handler",WO="emulator/auth/handler",qO=encodeURIComponent("fac");async function Y1(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:is,eventId:i};if(e instanceof bS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ub(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ul){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${qO}=${encodeURIComponent(l)}`:"";return`${KO(t)}?${Il(a).slice(1)}${u}`}function KO({config:t}){return t.emulator?Ay(t,WO):`https://${t.authDomain}/${HO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="webStorageSupport";class GO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=DS,this._completeRedirectFn=vO,this._overrideRedirectResult=mO}async _openPopup(e,n,r,i){var s;mr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Y1(e,n,r,Gp(),i);return zO(e,o,Ny())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Y1(e,n,r,Gp(),i);return X5(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(mr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MO(e),r=new wO(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(df,{type:df},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[df];o!==void 0&&n(!!o),pr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kS()||by()||Zh()}}const QO=GO;var X1="@firebase/auth",J1="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JO(t){Ki(new ii("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AS(t)},u=new b5(r,i,s,l);return L5(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ki(new ii("auth-internal",e=>{const n=Py(e.getProvider("auth").getImmediate());return(r=>new YO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(X1,J1,XO(t)),Hn(X1,J1,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=5*60,eD=v2("authIdTokenMaxAge")||ZO;let Z1=null;const tD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eD)return;const i=n==null?void 0:n.token;Z1!==i&&(Z1=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nD(t=mg()){const e=Ih(t,"auth");if(e.isInitialized())return e.getImmediate();const n=D5(t,{popupRedirectResolver:QO,persistence:[oO,G5,DS]}),r=v2("authTokenSyncURL");if(r){const s=tD(r);H5(n,s,()=>s(n.currentUser)),B5(n,o=>s(o))}const i=m2("auth");return i&&M5(n,`http://${i}`),n}function rD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}P5({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JO("Browser");const iD={apiKey:"AIzaSyAgaNoEZvbGL0JtMQ58-q3pupf2A-ACspo",authDomain:"nzib-porto.firebaseapp.com",projectId:"nzib-porto",storageBucket:"nzib-porto.appspot.com",messagingSenderId:"354053006565",appId:"1:354053006565:web:a9c52c165293b50680a00c"},Dy=I2(iD),Ro=MC(Dy),Ly=D3(Dy);nD(Dy);function e_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?e_(Object(n),!0).forEach(function(r){at(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zc(t){"@babel/helpers - typeof";return Zc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zc(t)}function sD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function t_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function oD(t,e,n){return e&&t_(t.prototype,e),n&&t_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function at(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function My(t,e){return lD(t)||cD(t,e)||$S(t,e)||dD()}function zl(t){return aD(t)||uD(t)||$S(t)||hD()}function aD(t){if(Array.isArray(t))return Yp(t)}function lD(t){if(Array.isArray(t))return t}function uD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function cD(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function $S(t,e){if(t){if(typeof t=="string")return Yp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yp(t,e)}}function Yp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function hD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n_=function(){},Vy={},zS={},BS=null,HS={mark:n_,measure:n_};try{typeof window<"u"&&(Vy=window),typeof document<"u"&&(zS=document),typeof MutationObserver<"u"&&(BS=MutationObserver),typeof performance<"u"&&(HS=performance)}catch{}var fD=Vy.navigator||{},r_=fD.userAgent,i_=r_===void 0?"":r_,li=Vy,Ne=zS,s_=BS,ku=HS;li.document;var wr=!!Ne.documentElement&&!!Ne.head&&typeof Ne.addEventListener=="function"&&typeof Ne.createElement=="function",WS=~i_.indexOf("MSIE")||~i_.indexOf("Trident/"),Au,xu,Ru,bu,Pu,gr="___FONT_AWESOME___",Xp=16,qS="fa",KS="svg-inline--fa",Zi="data-fa-i2svg",Jp="data-fa-pseudo-element",pD="data-fa-pseudo-element-pending",Fy="data-prefix",jy="data-icon",o_="fontawesome-i2svg",mD="async",gD=["HTML","HEAD","STYLE","SCRIPT"],GS=function(){try{return!0}catch{return!1}}(),Re="classic",Ke="sharp",Uy=[Re,Ke];function Bl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Re]}})}var ul=Bl((Au={},at(Au,Re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),at(Au,Ke,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Au)),cl=Bl((xu={},at(xu,Re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),at(xu,Ke,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),xu)),hl=Bl((Ru={},at(Ru,Re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),at(Ru,Ke,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ru)),yD=Bl((bu={},at(bu,Re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),at(bu,Ke,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),bu)),vD=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,QS="fa-layers-text",_D=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,wD=Bl((Pu={},at(Pu,Re,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),at(Pu,Ke,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Pu)),YS=[1,2,3,4,5,6,7,8,9,10],ED=YS.concat([11,12,13,14,15,16,17,18,19,20]),TD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dl=new Set;Object.keys(cl[Re]).map(dl.add.bind(dl));Object.keys(cl[Ke]).map(dl.add.bind(dl));var ID=[].concat(Uy,zl(dl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pi.GROUP,Pi.SWAP_OPACITY,Pi.PRIMARY,Pi.SECONDARY]).concat(YS.map(function(t){return"".concat(t,"x")})).concat(ED.map(function(t){return"w-".concat(t)})),Ia=li.FontAwesomeConfig||{};function SD(t){var e=Ne.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function kD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ne&&typeof Ne.querySelector=="function"){var AD=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];AD.forEach(function(t){var e=My(t,2),n=e[0],r=e[1],i=kD(SD(n));i!=null&&(Ia[r]=i)})}var XS={styleDefault:"solid",familyDefault:"classic",cssPrefix:qS,replacementClass:KS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ia.familyPrefix&&(Ia.cssPrefix=Ia.familyPrefix);var po=j(j({},XS),Ia);po.autoReplaceSvg||(po.observeMutations=!1);var z={};Object.keys(XS).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){po[t]=n,Sa.forEach(function(r){return r(z)})},get:function(){return po[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){po.cssPrefix=e,Sa.forEach(function(n){return n(z)})},get:function(){return po.cssPrefix}});li.FontAwesomeConfig=z;var Sa=[];function xD(t){return Sa.push(t),function(){Sa.splice(Sa.indexOf(t),1)}}var xr=Xp,$n={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function RD(t){if(!(!t||!wr)){var e=Ne.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ne.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ne.head.insertBefore(e,r),t}}var bD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fl(){for(var t=12,e="";t-- >0;)e+=bD[Math.random()*62|0];return e}function bo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $y(t){return t.classList?bo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function JS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function PD(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(JS(t[n]),'" ')},"").trim()}function nd(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function zy(t){return t.size!==$n.size||t.x!==$n.x||t.y!==$n.y||t.rotate!==$n.rotate||t.flipX||t.flipY}function CD(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function ND(t){var e=t.transform,n=t.width,r=n===void 0?Xp:n,i=t.height,s=i===void 0?Xp:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&WS?l+="translate(".concat(e.x/xr-r/2,"em, ").concat(e.y/xr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/xr,"em), calc(-50% + ").concat(e.y/xr,"em)) "):l+="translate(".concat(e.x/xr,"em, ").concat(e.y/xr,"em) "),l+="scale(".concat(e.size/xr*(e.flipX?-1:1),", ").concat(e.size/xr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var OD=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ZS(){var t=qS,e=KS,n=z.cssPrefix,r=z.replacementClass,i=OD;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var a_=!1;function ff(){z.autoAddCss&&!a_&&(RD(ZS()),a_=!0)}var DD={mixout:function(){return{dom:{css:ZS,insertCss:ff}}},hooks:function(){return{beforeDOMElementCreation:function(){ff()},beforeI2svg:function(){ff()}}}},yr=li||{};yr[gr]||(yr[gr]={});yr[gr].styles||(yr[gr].styles={});yr[gr].hooks||(yr[gr].hooks={});yr[gr].shims||(yr[gr].shims=[]);var xn=yr[gr],ek=[],LD=function t(){Ne.removeEventListener("DOMContentLoaded",t),eh=1,ek.map(function(e){return e()})},eh=!1;wr&&(eh=(Ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ne.readyState),eh||Ne.addEventListener("DOMContentLoaded",LD));function MD(t){wr&&(eh?setTimeout(t,0):ek.push(t))}function Hl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?JS(t):"<".concat(e," ").concat(PD(r),">").concat(s.map(Hl).join(""),"</").concat(e,">")}function l_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var VD=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},pf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?VD(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function FD(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Zp(t){var e=FD(t);return e.length===1?e[0].toString(16):null}function jD(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function u_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function em(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=u_(e);typeof xn.hooks.addPack=="function"&&!i?xn.hooks.addPack(t,u_(e)):xn.styles[t]=j(j({},xn.styles[t]||{}),s),t==="fas"&&em("fa",e)}var Cu,Nu,Ou,Os=xn.styles,UD=xn.shims,$D=(Cu={},at(Cu,Re,Object.values(hl[Re])),at(Cu,Ke,Object.values(hl[Ke])),Cu),By=null,tk={},nk={},rk={},ik={},sk={},zD=(Nu={},at(Nu,Re,Object.keys(ul[Re])),at(Nu,Ke,Object.keys(ul[Ke])),Nu);function BD(t){return~ID.indexOf(t)}function HD(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!BD(i)?i:null}var ok=function(){var e=function(s){return pf(Os,function(o,a,l){return o[l]=pf(a,s,{}),o},{})};tk=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),nk=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),sk=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Os||z.autoFetchSvg,r=pf(UD,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});rk=r.names,ik=r.unicodes,By=rd(z.styleDefault,{family:z.familyDefault})};xD(function(t){By=rd(t.styleDefault,{family:z.familyDefault})});ok();function Hy(t,e){return(tk[t]||{})[e]}function WD(t,e){return(nk[t]||{})[e]}function Ci(t,e){return(sk[t]||{})[e]}function ak(t){return rk[t]||{prefix:null,iconName:null}}function qD(t){var e=ik[t],n=Hy("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ui(){return By}var Wy=function(){return{prefix:null,iconName:null,rest:[]}};function rd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Re:n,i=ul[r][t],s=cl[r][t]||cl[r][i],o=t in xn.styles?t:null;return s||o||null}var c_=(Ou={},at(Ou,Re,Object.keys(hl[Re])),at(Ou,Ke,Object.keys(hl[Ke])),Ou);function id(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},at(e,Re,"".concat(z.cssPrefix,"-").concat(Re)),at(e,Ke,"".concat(z.cssPrefix,"-").concat(Ke)),e),o=null,a=Re;(t.includes(s[Re])||t.some(function(u){return c_[Re].includes(u)}))&&(a=Re),(t.includes(s[Ke])||t.some(function(u){return c_[Ke].includes(u)}))&&(a=Ke);var l=t.reduce(function(u,c){var h=HD(z.cssPrefix,c);if(Os[c]?(c=$D[a].includes(c)?yD[a][c]:c,o=c,u.prefix=c):zD[a].indexOf(c)>-1?(o=c,u.prefix=rd(c,{family:a})):h?u.iconName=h:c!==z.replacementClass&&c!==s[Re]&&c!==s[Ke]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?ak(u.iconName):{},m=Ci(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||m||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Os.far&&Os.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},Wy());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ke&&(Os.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ci(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ui()||"fas"),l}var KD=function(){function t(){sD(this,t),this.definitions={}}return oD(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=j(j({},n.definitions[a]||{}),o[a]),em(a,o[a]);var l=hl[Re][a];l&&em(l,o[a]),ok()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][l]=u}),n}}]),t}(),h_=[],Ds={},Ys={},GD=Object.keys(Ys);function QD(t,e){var n=e.mixoutsTo;return h_=t,Ds={},Object.keys(Ys).forEach(function(r){GD.indexOf(r)===-1&&delete Ys[r]}),h_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Zc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Ds[o]||(Ds[o]=[]),Ds[o].push(s[o])})}r.provides&&r.provides(Ys)}),n}function tm(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Ds[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function es(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Ds[t]||[];i.forEach(function(s){s.apply(null,n)})}function vr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ys[t]?Ys[t].apply(null,e):void 0}function nm(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ui();if(e)return e=Ci(n,e)||e,l_(lk.definitions,n,e)||l_(xn.styles,n,e)}var lk=new KD,YD=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,es("noAuto")},XD={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wr?(es("beforeI2svg",e),vr("pseudoElements2svg",e),vr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,MD(function(){ZD({autoReplaceSvgRoot:n}),es("watch",e)})}},JD={icon:function(e){if(e===null)return null;if(Zc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ci(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=rd(e[0]);return{prefix:r,iconName:Ci(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(vD))){var i=id(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ui(),iconName:Ci(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=ui();return{prefix:s,iconName:Ci(s,e)||e}}}},cn={noAuto:YD,config:z,dom:XD,parse:JD,library:lk,findIconDefinition:nm,toHtml:Hl},ZD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ne:n;(Object.keys(xn.styles).length>0||z.autoFetchSvg)&&wr&&z.autoReplaceSvg&&cn.dom.i2svg({node:r})};function sd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Hl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(wr){var r=Ne.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function e9(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(zy(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=nd(j(j({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function t9(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},i),{},{id:o}),children:r}]}]}function qy(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,d=t.watchable,m=d===void 0?!1:d,y=r.found?r:n,v=y.width,w=y.height,p=i==="fak",f=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(N){return h.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(h.classes).join(" "),g={children:[],attributes:j(j({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:f,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(w)})},T=p&&!~h.classes.indexOf("fa-fw")?{width:"".concat(v/w*16*.0625,"em")}:{};m&&(g.attributes[Zi]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||fl())},children:[l]}),delete g.attributes.title);var x=j(j({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:j(j({},T),h.styles)}),E=r.found&&n.found?vr("generateAbstractMask",x)||{children:[],attributes:{}}:vr("generateAbstractIcon",x)||{children:[],attributes:{}},k=E.children,A=E.attributes;return x.children=k,x.attributes=A,a?t9(x):e9(x)}function d_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=j(j(j({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Zi]="");var c=j({},o.styles);zy(i)&&(c.transform=ND({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=nd(c);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function n9(t){var e=t.content,n=t.title,r=t.extra,i=j(j(j({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=nd(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var mf=xn.styles;function rm(t){var e=t[0],n=t[1],r=t.slice(4),i=My(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(Pi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Pi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Pi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var r9={found:!1,width:512,height:512};function i9(t,e){!GS&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function im(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=ui()),new Promise(function(r,i){if(vr("missingIconAbstract"),n==="fa"){var s=ak(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&mf[e]&&mf[e][t]){var o=mf[e][t];return r(rm(o))}i9(t,e),r(j(j({},r9),{},{icon:z.showMissingIcons&&t?vr("missingIconAbstract")||{}:{}}))})}var f_=function(){},sm=z.measurePerformance&&ku&&ku.mark&&ku.measure?ku:{mark:f_,measure:f_},sa='FA "6.5.1"',s9=function(e){return sm.mark("".concat(sa," ").concat(e," begins")),function(){return uk(e)}},uk=function(e){sm.mark("".concat(sa," ").concat(e," ends")),sm.measure("".concat(sa," ").concat(e),"".concat(sa," ").concat(e," begins"),"".concat(sa," ").concat(e," ends"))},Ky={begin:s9,end:uk},nc=function(){};function p_(t){var e=t.getAttribute?t.getAttribute(Zi):null;return typeof e=="string"}function o9(t){var e=t.getAttribute?t.getAttribute(Fy):null,n=t.getAttribute?t.getAttribute(jy):null;return e&&n}function a9(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function l9(){if(z.autoReplaceSvg===!0)return rc.replace;var t=rc[z.autoReplaceSvg];return t||rc.replace}function u9(t){return Ne.createElementNS("http://www.w3.org/2000/svg",t)}function c9(t){return Ne.createElement(t)}function ck(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?u9:c9:n;if(typeof t=="string")return Ne.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(ck(o,{ceFn:r}))}),i}function h9(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var rc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(ck(i),n)}),n.getAttribute(Zi)===null&&z.keepOriginalSource){var r=Ne.createComment(h9(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~$y(n).indexOf(z.replacementClass))return rc.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Hl(a)}).join(`
`);n.setAttribute(Zi,""),n.innerHTML=o}};function m_(t){t()}function hk(t,e){var n=typeof e=="function"?e:nc;if(t.length===0)n();else{var r=m_;z.mutateApproach===mD&&(r=li.requestAnimationFrame||m_),r(function(){var i=l9(),s=Ky.begin("mutate");t.map(i),s(),n()})}}var Gy=!1;function dk(){Gy=!0}function om(){Gy=!1}var th=null;function g_(t){if(s_&&z.observeMutations){var e=t.treeCallback,n=e===void 0?nc:e,r=t.nodeCallback,i=r===void 0?nc:r,s=t.pseudoElementsCallback,o=s===void 0?nc:s,a=t.observeMutationsRoot,l=a===void 0?Ne:a;th=new s_(function(u){if(!Gy){var c=ui();bo(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!p_(h.addedNodes[0])&&(z.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&z.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&p_(h.target)&&~TD.indexOf(h.attributeName))if(h.attributeName==="class"&&o9(h.target)){var d=id($y(h.target)),m=d.prefix,y=d.iconName;h.target.setAttribute(Fy,m||c),y&&h.target.setAttribute(jy,y)}else a9(h.target)&&i(h.target)})}}),wr&&th.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function d9(){th&&th.disconnect()}function f9(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function p9(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=id($y(t));return i.prefix||(i.prefix=ui()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=WD(i.prefix,t.innerText)||Hy(i.prefix,Zp(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function m9(t){var e=bo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||fl()):(e["aria-hidden"]="true",e.focusable="false")),e}function g9(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$n,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function y_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=p9(t),r=n.iconName,i=n.prefix,s=n.rest,o=m9(t),a=tm("parseNodeAttributes",{},t),l=e.styleParser?f9(t):[];return j({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:$n,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var y9=xn.styles;function fk(t){var e=z.autoReplaceSvg==="nest"?y_(t,{styleParser:!1}):y_(t);return~e.extra.classes.indexOf(QS)?vr("generateLayersText",t,e):vr("generateSvgReplacementMutation",t,e)}var ci=new Set;Uy.map(function(t){ci.add("fa-".concat(t))});Object.keys(ul[Re]).map(ci.add.bind(ci));Object.keys(ul[Ke]).map(ci.add.bind(ci));ci=zl(ci);function v_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wr)return Promise.resolve();var n=Ne.documentElement.classList,r=function(h){return n.add("".concat(o_,"-").concat(h))},i=function(h){return n.remove("".concat(o_,"-").concat(h))},s=z.autoFetchSvg?ci:Uy.map(function(c){return"fa-".concat(c)}).concat(Object.keys(y9));s.includes("fa")||s.push("fa");var o=[".".concat(QS,":not([").concat(Zi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Zi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=bo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ky.begin("onTree"),u=a.reduce(function(c,h){try{var d=fk(h);d&&c.push(d)}catch(m){GS||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,h){Promise.all(u).then(function(d){hk(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),h(d)})})}function v9(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fk(t).then(function(n){n&&hk([n],e)})}function _9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:nm(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:nm(i||{})),t(r,j(j({},n),{},{mask:i}))}}var w9=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?$n:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,h=n.title,d=h===void 0?null:h,m=n.titleId,y=m===void 0?null:m,v=n.classes,w=v===void 0?[]:v,p=n.attributes,f=p===void 0?{}:p,g=n.styles,T=g===void 0?{}:g;if(e){var x=e.prefix,E=e.iconName,k=e.icon;return sd(j({type:"icon"},e),function(){return es("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(d?f["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(y||fl()):(f["aria-hidden"]="true",f.focusable="false")),qy({icons:{main:rm(k),mask:l?rm(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:E,transform:j(j({},$n),i),symbol:o,title:d,maskId:c,titleId:y,extra:{attributes:f,styles:T,classes:w}})})}},E9={mixout:function(){return{icon:_9(w9)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=v_,n.nodeCallback=v9,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ne:r,s=n.callback,o=s===void 0?function(){}:s;return v_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,h=r.maskId,d=r.extra;return new Promise(function(m,y){Promise.all([im(i,a),c.iconName?im(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var w=My(v,2),p=w[0],f=w[1];m([n,qy({icons:{main:p,mask:f},prefix:a,iconName:i,transform:l,symbol:u,maskId:h,title:s,titleId:o,extra:d,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=nd(a);l.length>0&&(i.style=l);var u;return zy(o)&&(u=vr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},T9={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return sd({type:"layer"},function(){es("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(zl(s)).join(" ")},children:o}]})}}}},I9={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,h=c===void 0?{}:c;return sd({type:"counter",content:n},function(){return es("beforeDOMElementCreation",{content:n,params:r}),n9({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(zl(a))}})})}}}},S9={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?$n:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,h=c===void 0?{}:c,d=r.styles,m=d===void 0?{}:d;return sd({type:"text",content:n},function(){return es("beforeDOMElementCreation",{content:n,params:r}),d_({content:n,transform:j(j({},$n),s),title:a,extra:{attributes:h,styles:m,classes:["".concat(z.cssPrefix,"-layers-text")].concat(zl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(WS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,d_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},k9=new RegExp('"',"ug"),__=[1105920,1112319];function A9(t){var e=t.replace(k9,""),n=jD(e,0),r=n>=__[0]&&n<=__[1],i=e.length===2?e[0]===e[1]:!1;return{value:Zp(i?e[0]:e),isSecondary:r||i}}function w_(t,e){var n="".concat(pD).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=bo(t.children),o=s.filter(function(k){return k.getAttribute(Jp)===e})[0],a=li.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(_D),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Ke:Re,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?cl[d][l[2].toLowerCase()]:wD[d][u],y=A9(h),v=y.value,w=y.isSecondary,p=l[0].startsWith("FontAwesome"),f=Hy(m,v),g=f;if(p){var T=qD(v);T.iconName&&T.prefix&&(f=T.iconName,m=T.prefix)}if(f&&!w&&(!o||o.getAttribute(Fy)!==m||o.getAttribute(jy)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var x=g9(),E=x.extra;E.attributes[Jp]=e,im(f,m).then(function(k){var A=qy(j(j({},x),{},{icons:{main:k,mask:Wy()},prefix:m,iconName:g,extra:E,watchable:!0})),N=Ne.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(N,t.firstChild):t.appendChild(N),N.outerHTML=A.map(function(F){return Hl(F)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function x9(t){return Promise.all([w_(t,"::before"),w_(t,"::after")])}function R9(t){return t.parentNode!==document.head&&!~gD.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Jp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function E_(t){if(wr)return new Promise(function(e,n){var r=bo(t.querySelectorAll("*")).filter(R9).map(x9),i=Ky.begin("searchPseudoElements");dk(),Promise.all(r).then(function(){i(),om(),e()}).catch(function(){i(),om(),n()})})}var b9={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=E_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ne:r;z.searchPseudoElements&&E_(i)}}},T_=!1,P9={mixout:function(){return{dom:{unwatch:function(){dk(),T_=!0}}}},hooks:function(){return{bootstrap:function(){g_(tm("mutationObserverCallbacks",{}))},noAuto:function(){d9()},watch:function(n){var r=n.observeMutationsRoot;T_?om():g_(tm("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},I_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},C9={mixout:function(){return{parse:{transform:function(n){return I_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=I_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:h,path:d};return{tag:"g",attributes:j({},m.outer),children:[{tag:"g",attributes:j({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:j(j({},r.icon.attributes),m.path)}]}]}}}},gf={x:0,y:0,width:"100%",height:"100%"};function S_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function N9(t){return t.tag==="g"?t.children:[t]}var O9={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?id(i.split(" ").map(function(o){return o.trim()})):Wy();return s.prefix||(s.prefix=ui()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,h=o.width,d=o.icon,m=CD({transform:l,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:j(j({},gf),{},{fill:"white"})},v=c.children?{children:c.children.map(S_)}:{},w={tag:"g",attributes:j({},m.inner),children:[S_(j({tag:c.tag,attributes:j(j({},c.attributes),m.path)},v))]},p={tag:"g",attributes:j({},m.outer),children:[w]},f="mask-".concat(a||fl()),g="clip-".concat(a||fl()),T={tag:"mask",attributes:j(j({},gf),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,p]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:N9(d)},T]};return r.push(x,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(f,")")},gf)}),{children:r,attributes:i}}}},D9={provides:function(e){var n=!1;li.matchMedia&&(n=li.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:j(j({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=j(j({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:j(j({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:j(j({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:j(j({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:j(j({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:j(j({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},L9={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},M9=[DD,E9,T9,I9,S9,b9,P9,C9,O9,D9,L9];QD(M9,{mixoutsTo:cn});cn.noAuto;cn.config;cn.library;cn.dom;var am=cn.parse;cn.findIconDefinition;cn.toHtml;var V9=cn.icon;cn.layer;cn.text;cn.counter;var pk={exports:{}},F9="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",j9=F9,U9=j9;function mk(){}function gk(){}gk.resetWarningCache=mk;var $9=function(){function t(r,i,s,o,a,l){if(l!==U9){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:gk,resetWarningCache:mk};return n.PropTypes=n,n};pk.exports=$9();var z9=pk.exports;const oe=ym(z9);function k_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function zr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?k_(Object(n),!0).forEach(function(r){Ls(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function nh(t){"@babel/helpers - typeof";return nh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nh(t)}function Ls(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function H9(t,e){if(t==null)return{};var n=B9(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function lm(t){return W9(t)||q9(t)||K9(t)||G9()}function W9(t){if(Array.isArray(t))return um(t)}function q9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function K9(t,e){if(t){if(typeof t=="string")return um(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return um(t,e)}}function um(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function G9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q9(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,d=t.fixedWidth,m=t.inverse,y=t.border,v=t.listItem,w=t.flip,p=t.size,f=t.rotation,g=t.pull,T=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":d,"fa-inverse":m,"fa-border":y,"fa-li":v,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Ls(e,"fa-".concat(p),typeof p<"u"&&p!==null),Ls(e,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Ls(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Ls(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(x){return T[x]?x:null}).filter(function(x){return x})}function Y9(t){return t=t-0,t===t}function yk(t){return Y9(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var X9=["style"];function J9(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Z9(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=yk(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[J9(i)]=s:e[i]=s,e},{})}function vk(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return vk(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=Z9(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[yk(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=H9(n,X9);return i.attrs.style=zr(zr({},i.attrs.style),o),t.apply(void 0,[e.tag,zr(zr({},i.attrs),a)].concat(lm(r)))}var _k=!1;try{_k=!0}catch{}function eL(){if(!_k&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function A_(t){if(t&&nh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(am.icon)return am.icon(t);if(t===null)return null;if(t&&nh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function yf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ls({},t,e):{}}var sn=ie.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=A_(n),c=yf("classes",[].concat(lm(Q9(t)),lm(s.split(" ")))),h=yf("transform",typeof t.transform=="string"?am.transform(t.transform):t.transform),d=yf("mask",A_(r)),m=V9(u,zr(zr(zr(zr({},c),h),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return eL("Could not find icon",u),null;var y=m.abstract,v={ref:e};return Object.keys(t).forEach(function(w){sn.defaultProps.hasOwnProperty(w)||(v[w]=t[w])}),tL(y[0],v)});sn.displayName="FontAwesomeIcon";sn.propTypes={beat:oe.bool,border:oe.bool,beatFade:oe.bool,bounce:oe.bool,className:oe.string,fade:oe.bool,flash:oe.bool,mask:oe.oneOfType([oe.object,oe.array,oe.string]),maskId:oe.string,fixedWidth:oe.bool,inverse:oe.bool,flip:oe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:oe.oneOfType([oe.object,oe.array,oe.string]),listItem:oe.bool,pull:oe.oneOf(["right","left"]),pulse:oe.bool,rotation:oe.oneOf([0,90,180,270]),shake:oe.bool,size:oe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:oe.bool,spinPulse:oe.bool,spinReverse:oe.bool,symbol:oe.oneOfType([oe.bool,oe.string]),title:oe.string,titleId:oe.string,transform:oe.oneOfType([oe.string,oe.object]),swapOpacity:oe.bool};sn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var tL=vk.bind(null,ie.createElement),Qy={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]},Yy={prefix:"fas",iconName:"circle-chevron-left",icon:[512,512,["chevron-circle-left"],"f137","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"]},Xy={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};const nL=()=>{const[t,e]=b.useState([]);b.useEffect(()=>{const c=async()=>{const d=_o(Ro,"scanes/"),y=(await kh(d)).items.map(v=>Sl(v));return Promise.all(y)};(async()=>{const d=await c();e(d)})()},[]);const[n,r]=b.useState(0),[i,s]=b.useState(!1),o=c=>{r(c),s(!0)},a=()=>{s(!1)},l=()=>{r(n===0?t.length-1:n-1)},u=()=>{n+1===t.length?r(0):r(n+1)};return _.jsxs("div",{className:"max-w-full mx-auto",children:[_.jsx("h1",{className:"text-white text-xl md:text-2xl mb-4",children:"Scenes"}),_.jsxs("div",{className:"flex flex-wrap justify-center item-center",children:[i&&_.jsxs("div",{className:"sliderWrap",children:[_.jsx(sn,{icon:Xy,fontSize:28,className:"btnClose",onClick:a}),_.jsx(sn,{icon:Yy,fontSize:28,className:"btnPrev",onClick:l}),_.jsx(sn,{fontSize:28,icon:Qy,className:"btnNext",onClick:u}),_.jsx("div",{className:"fullScreenImage",children:_.jsx("img",{src:t[n],alt:""})})]}),t.map((c,h)=>_.jsx("div",{className:"md:w-1/2 lg:w-1/3 p-2",children:_.jsx("div",{className:"flex relative",children:_.jsx("img",{src:c,onClick:()=>o(h),alt:"",className:"inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"})})}))]})]})},vf=[{imageUrl:"./public/img/Scanes/gallery1.gif",category:"scanes"},{imageUrl:"./public/img/Scanes/gallery2.gif",category:"scanes"},{imageUrl:"./public/img/Scanes/gallery3.gif",category:"scanes"},{imageUrl:"./public/img/Scanes/gallery4.gif",category:"scanes"},{imageUrl:"./public/img/Scanes/gallery5.gif",category:"scanes"},{imageUrl:"./public/img/Scanes/gallery6.gif",category:"scanes"},{imageUrl:"./public/img/Sprites/sprites1.gif",category:"sprites"},{imageUrl:"./public/img/Sprites/sprites2.gif",category:"sprites"},{imageUrl:"./public/img/Sprites/sprites3.gif",category:"sprites"},{imageUrl:"./public/img/Sprites/sprites4.gif",category:"sprites"},{imageUrl:"./public/img/Nft/Nft1.gif",category:"nft"},{imageUrl:"./public/img/Nft/Nft2.png",category:"nft"},{imageUrl:"./public/img/Nft/Nft3.png",category:"nft"},{imageUrl:"./public/img/Nft/Nft4.png",category:"nft"},{imageUrl:"./public/img/Nft/Nft5.png",category:"nft"},{imageUrl:"./public/img/Nft/Nft6.png",category:"nft"}],rL=()=>{const[t,e]=b.useState([]);b.useEffect(()=>{const c=async()=>{const d=_o(Ro,"sprites/"),y=(await kh(d)).items.map(v=>Sl(v));return Promise.all(y)};(async()=>{const d=await c();e(d)})()},[]);const[n,r]=b.useState(0),[i,s]=b.useState(!1),o=c=>{r(c),s(!0)},a=()=>{s(!1)},l=()=>{r(n===0?t.length-1:n-1)},u=()=>{n+1===t.length?r(0):r(n+1)};return _.jsxs("div",{className:"max-w-full mx-auto",children:[_.jsx("h1",{className:"text-white text-xl md:text-2xl mb-4",children:"Sprites"}),_.jsxs("div",{className:"flex flex-wrap justify-center",children:[i&&_.jsxs("div",{className:"sliderWrap",children:[_.jsx(sn,{icon:Xy,fontSize:28,className:"btnClose",onClick:a}),_.jsx(sn,{icon:Yy,fontSize:28,className:"btnPrev",onClick:l}),_.jsx(sn,{fontSize:28,icon:Qy,className:"btnNext",onClick:u}),_.jsx("div",{className:"fullScreenImage",children:_.jsx("img",{src:t[n],alt:""})})]}),t.map((c,h)=>_.jsx("div",{className:"md:w-1/2 lg:w-1/3 p-2",children:_.jsx("div",{className:"flex relative",children:_.jsx("img",{src:c,alt:"",onClick:()=>o(h),className:"inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"},h)})}))]})]})},iL=()=>{const[t,e]=b.useState([]);b.useEffect(()=>{const c=async()=>{const d=_o(Ro,"nft/"),y=(await kh(d)).items.map(v=>Sl(v));return Promise.all(y)};(async()=>{const d=await c();e(d)})()},[]);const[n,r]=b.useState(0),[i,s]=b.useState(!1),o=c=>{r(c),s(!0)},a=()=>{s(!1)},l=()=>{r(n===0?t.length-1:n-1)},u=()=>{n+1===t.length?r(0):r(n+1)};return _.jsxs("div",{className:"max-w-full mx-auto",children:[_.jsx("h1",{className:"text-white text-xl md:text-2xl mb-4",children:"NFT PFP"}),_.jsxs("div",{className:"flex flex-wrap justify-center",children:[i&&_.jsxs("div",{className:"sliderWrap",children:[_.jsx(sn,{icon:Xy,fontSize:28,className:"btnClose",onClick:a}),_.jsx(sn,{icon:Yy,fontSize:28,className:"btnPrev",onClick:l}),_.jsx(sn,{fontSize:28,icon:Qy,className:"btnNext",onClick:u}),_.jsx("div",{className:"fullScreenImage",children:_.jsx("img",{src:t[n],alt:""})})]}),t.map((c,h)=>_.jsx("div",{className:"lg:w-1/3 xl:w-1/4 p-2",children:_.jsx("div",{className:"flex relative",children:_.jsx("img",{src:c,onClick:()=>o(h),alt:"",className:"inset-0 w-full h-70 opacity-75 hover:opacity-100 cursor-pointer rounded-sm object-cover object-center"},h)})}))]})]})},sL=()=>{const[t,e]=b.useState(1);function n(r){e(r)}return _.jsxs("div",{id:"gallery",className:"w-full px-4 pb-28 pt-32",children:[_.jsx("div",{className:"max-w-full text-center mx-auto mb-10",children:_.jsx("h2",{className:"text-4xl sm:text-6xl text-slate-100 font-pixelF",children:"Gallery"})}),_.jsx("div",{className:"md:py-4 mb-4",children:_.jsxs("ul",{className:"list-none text-slate-100 flex justify-center items-center ",children:[_.jsx("li",{className:`bg-main font-semibold py-2 rounded-sm shadow-lg px-4 cursor-pointer text-sm mr-1 ${t===1?"active-tabs":""}`,onClick:()=>n(1),children:"Scenes"}),_.jsx("li",{className:`bg-main font-semibold py-2 rounded-sm shadow-lg px-4 cursor-pointer text-sm mr-1 ${t===2?"active-tabs":""}`,onClick:()=>n(2),children:"Sprites"}),_.jsx("li",{className:`bg-main font-semibold py-2 rounded-sm shadow-lg px-4  cursor-pointer text-sm ${t===3?"active-tabs":""}`,onClick:()=>n(3),children:"NFT PFP"})]})}),_.jsxs("div",{className:"w-full px-4",children:[_.jsx("div",{className:t===1?"show-tabs":"hide-tabs",children:_.jsx(nL,{})}),_.jsx("div",{className:t===2?"show-tabs":"hide-tabs",children:_.jsx(rL,{})}),_.jsx("div",{className:t===3?"show-tabs":"hide-tabs",children:_.jsx(iL,{})})]})]})},oL="/nzib_portofolio/assets/profile-SwuVgmWM.gif",aL=()=>_.jsxs("div",{id:"about",className:"w-full px-4 pt-32 pb-28",children:[_.jsx("div",{className:"max-w-full text-center mb-16",children:_.jsx("h2",{className:"text-4xl sm:text-6xl text-slate-100 font-pixelF",children:"About"})}),_.jsx("div",{className:"px-4 max-w-full mt-8",children:_.jsxs("div",{className:"md:grid grid-rows-1 grid-flow-col gap-8",children:[_.jsx("div",{className:"row-span-3 mb-5",children:_.jsx("img",{src:oL,alt:"profile",className:"w-full rounded-sm cursor-pointer"})}),_.jsxs("div",{className:"col-span-2",children:[_.jsx("h2",{className:"text-center text-slate-100 md:text-start  text-4xl font-pixelF sm:text-5xl mb-5 drop-shadow-md",children:"Hello, I'm Nzib"}),_.jsx("h3",{className:"text-center text-slate-100 md:text-start  font-semibold text-2xl sm:text-3xl mb-5",children:"A Pixel Artist | Illustrator"}),_.jsx("p",{className:"font-light text-slate-100 text-md lg:text-lg leading-relaxed md:w-10/12 ",children:"I'm a talented pixel artist hailing from Indonesia. Since 2019, I've been on this colorful journey in the digital art realm. Pixel by pixel, I bring imagination to life in beautiful and captivating ways. Pixel art isn't just a job for me, it's a soulful calling that lets me express true uniqueness and creativity. I believe every detail holds its own beauty, and that's what I pour into each piece I craft."})]}),_.jsxs("div",{className:"row-span-2 col-span-2",children:[_.jsx("p",{className:"font-light text-slate-100 text-md mb-5 lg:text-lg leading-relaxed md:w-10/12 mt-5",children:"Come join me on this adventure into a mesmerizing visual universe!"}),_.jsx("a",{href:"#contact",className:"bg-tranparent px-6 py-2 border border-primaryYellow rounded-md text-primaryYellow mt-5 hover:bg-primaryYellow hover:text-white",children:"Let`s Collaborate"})]})]})})]}),Wt={origin:"https://api.emailjs.com",blockHeadless:!1},Jy=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},lL=(t,e="https://api.emailjs.com")=>{if(!t)return;const n=Jy(t);Wt.publicKey=n.publicKey,Wt.blockHeadless=n.blockHeadless,Wt.blockList=n.blockList,Wt.limitRate=n.limitRate,Wt.origin=n.origin||e};class od{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const wk=async(t,e,n={})=>{const r=await fetch(Wt.origin+t,{method:"POST",headers:n,body:e}),i=await r.text(),s=new od(r.status,i);if(r.ok)return s;throw s},Ek=(t,e,n)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},uL=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Tk=t=>t.webdriver||!t.languages||t.languages.length===0,Ik=()=>new od(451,"Unavailable For Headless Browser"),cL=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},hL=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},dL=(t,e)=>t instanceof FormData?t.get(e):t[e],Sk=(t,e)=>{if(hL(t))return!1;cL(t.list,t.watchVariable);const n=dL(e,t.watchVariable);return typeof n!="string"?!1:t.list.includes(n)},kk=()=>new od(403,"Forbidden"),fL=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a string"},pL=(t,e,n)=>{const r=Number(n.getItem(t)||0);return e-Date.now()+r},x_=(t,e,n)=>{setTimeout(()=>{n.removeItem(t)},e)},Ak=(t,e,n)=>{if(!n.throttle)return!1;fL(n.throttle,n.id);const r=n.id||e,i=pL(r,n.throttle,t);return i>0?(x_(r,i,t),!0):(t.setItem(r,Date.now().toString()),x_(r,n.throttle,t),!1)},xk=()=>new od(429,"Too Many Requests"),mL=(t,e,n,r)=>{const i=Jy(r),s=i.publicKey||Wt.publicKey,o=i.blockHeadless||Wt.blockHeadless,a={...Wt.blockList,...i.blockList},l={...Wt.limitRate,...i.limitRate};return o&&Tk(navigator)?Promise.reject(Ik()):(Ek(s,t,e),uL(n),n&&Sk(a,n)?Promise.reject(kk()):Ak(localStorage,location.pathname,l)?Promise.reject(xk()):wk("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"}))},gL=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},yL=t=>typeof t=="string"?document.querySelector(t):t,vL=(t,e,n,r)=>{const i=Jy(r),s=i.publicKey||Wt.publicKey,o=i.blockHeadless||Wt.blockHeadless,a={...Wt.blockList,...i.blockList},l={...Wt.limitRate,...i.limitRate};if(o&&Tk(navigator))return Promise.reject(Ik());const u=yL(n);Ek(s,t,e),gL(u);const c=new FormData(u);return Sk(a,c)?Promise.reject(kk()):Ak(localStorage,location.pathname,l)?Promise.reject(xk()):(c.append("lib_version","4.1.0"),c.append("service_id",t),c.append("template_id",e),c.append("user_id",s),wk("/api/v1.0/email/send-form",c))},_L={init:lL,send:mL,sendForm:vL};function Rk(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=Rk(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Br(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=Rk(t))&&(r&&(r+=" "),r+=e);return r}const pl=t=>typeof t=="number"&&!isNaN(t),ji=t=>typeof t=="string",tn=t=>typeof t=="function",ic=t=>ji(t)||tn(t)?t:null,cm=t=>b.isValidElement(t)||ji(t)||tn(t)||pl(t);function wL(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function ad(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:h,isIn:d,playToast:m}=o;const y=r?`${e}--${l}`:e,v=r?`${n}--${l}`:n,w=b.useRef(0);return b.useLayoutEffect(()=>{const p=h.current,f=y.split(" "),g=T=>{T.target===h.current&&(m(),p.removeEventListener("animationend",g),p.removeEventListener("animationcancel",g),w.current===0&&T.type!=="animationcancel"&&p.classList.remove(...f))};p.classList.add(...f),p.addEventListener("animationend",g),p.addEventListener("animationcancel",g)},[]),b.useEffect(()=>{const p=h.current,f=()=>{p.removeEventListener("animationend",f),i?wL(p,c,s):c()};d||(u?f():(w.current=1,p.className+=` ${v}`,p.addEventListener("animationend",f)))},[d]),ie.createElement(ie.Fragment,null,a)}}function R_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Mt=new Map;let ml=[];const hm=new Set,EL=t=>hm.forEach(e=>e(t)),bk=()=>Mt.size>0;function Pk(t,e){var n;if(e)return!((n=Mt.get(e))==null||!n.isToastActive(t));let r=!1;return Mt.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function Ck(t,e){cm(t)&&(bk()||ml.push({content:t,options:e}),Mt.forEach(n=>{n.buildToast(t,e)}))}function b_(t,e){Mt.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function TL(t){const{subscribe:e,getSnapshot:n,setProps:r}=b.useRef(function(s){const o=s.containerId||1;return{subscribe(a){const l=function(c,h,d){let m=1,y=0,v=[],w=[],p=[],f=h;const g=new Map,T=new Set,x=()=>{p=Array.from(g.values()),T.forEach(A=>A())},E=A=>{w=A==null?[]:w.filter(N=>N!==A),x()},k=A=>{const{toastId:N,onOpen:F,updateId:ee,children:Ee}=A.props,Te=ee==null;A.staleId&&g.delete(A.staleId),g.set(N,A),w=[...w,A.props.toastId].filter(Qe=>Qe!==A.staleId),x(),d(R_(A,Te?"added":"updated")),Te&&tn(F)&&F(b.isValidElement(Ee)&&Ee.props)};return{id:c,props:f,observe:A=>(T.add(A),()=>T.delete(A)),toggle:(A,N)=>{g.forEach(F=>{N!=null&&N!==F.props.toastId||tn(F.toggle)&&F.toggle(A)})},removeToast:E,toasts:g,clearQueue:()=>{y-=v.length,v=[]},buildToast:(A,N)=>{if((ae=>{let{containerId:Me,toastId:ve,updateId:Be}=ae;const Ve=Me?Me!==c:c!==1,zt=g.has(ve)&&Be==null;return Ve||zt})(N))return;const{toastId:F,updateId:ee,data:Ee,staleId:Te,delay:Qe}=N,Yt=()=>{E(F)},Xt=ee==null;Xt&&y++;const de={...f,style:f.toastStyle,key:m++,...Object.fromEntries(Object.entries(N).filter(ae=>{let[Me,ve]=ae;return ve!=null})),toastId:F,updateId:ee,data:Ee,closeToast:Yt,isIn:!1,className:ic(N.className||f.toastClassName),bodyClassName:ic(N.bodyClassName||f.bodyClassName),progressClassName:ic(N.progressClassName||f.progressClassName),autoClose:!N.isLoading&&(D=N.autoClose,H=f.autoClose,D===!1||pl(D)&&D>0?D:H),deleteToast(){const ae=g.get(F),{onClose:Me,children:ve}=ae.props;tn(Me)&&Me(b.isValidElement(ve)&&ve.props),d(R_(ae,"removed")),g.delete(F),y--,y<0&&(y=0),v.length>0?k(v.shift()):x()}};var D,H;de.closeButton=f.closeButton,N.closeButton===!1||cm(N.closeButton)?de.closeButton=N.closeButton:N.closeButton===!0&&(de.closeButton=!cm(f.closeButton)||f.closeButton);let K=A;b.isValidElement(A)&&!ji(A.type)?K=b.cloneElement(A,{closeToast:Yt,toastProps:de,data:Ee}):tn(A)&&(K=A({closeToast:Yt,toastProps:de,data:Ee}));const re={content:K,props:de,staleId:Te};f.limit&&f.limit>0&&y>f.limit&&Xt?v.push(re):pl(Qe)?setTimeout(()=>{k(re)},Qe):k(re)},setProps(A){f=A},setToggle:(A,N)=>{g.get(A).toggle=N},isToastActive:A=>w.some(N=>N===A),getSnapshot:()=>f.newestOnTop?p.reverse():p}}(o,s,EL);Mt.set(o,l);const u=l.observe(a);return ml.forEach(c=>Ck(c.content,c.options)),ml=[],()=>{u(),Mt.delete(o)}},setProps(a){var l;(l=Mt.get(o))==null||l.setProps(a)},getSnapshot(){var a;return(a=Mt.get(o))==null?void 0:a.getSnapshot()}}}(t)).current;r(t);const i=b.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(a=>{const{position:l}=a.props;o.has(l)||o.set(l,[]),o.get(l).push(a)}),Array.from(o,a=>s(a[0],a[1]))},isToastActive:Pk,count:i==null?void 0:i.length}}function IL(t){const[e,n]=b.useState(!1),[r,i]=b.useState(!1),s=b.useRef(null),o=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:l,closeToast:u,onClick:c,closeOnClick:h}=t;var d,m;function y(){n(!0)}function v(){n(!1)}function w(g){const T=s.current;o.canDrag&&T&&(o.didMove=!0,e&&v(),o.delta=t.draggableDirection==="x"?g.clientX-o.start:g.clientY-o.start,o.start!==g.clientX&&(o.canCloseOnClick=!1),T.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,T.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function p(){document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",p);const g=s.current;if(o.canDrag&&o.didMove&&g){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();g.style.transition="transform 0.2s, opacity 0.2s",g.style.removeProperty("transform"),g.style.removeProperty("opacity")}}(m=Mt.get((d={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||m.setToggle(d.id,d.fn),b.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||v(),window.addEventListener("focus",y),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",v)}},[t.pauseOnFocusLoss]);const f={onPointerDown:function(g){if(t.draggable===!0||t.draggable===g.pointerType){o.didMove=!1,document.addEventListener("pointermove",w),document.addEventListener("pointerup",p);const T=s.current;o.canCloseOnClick=!0,o.canDrag=!0,T.style.transition="none",t.draggableDirection==="x"?(o.start=g.clientX,o.removalDistance=T.offsetWidth*(t.draggablePercent/100)):(o.start=g.clientY,o.removalDistance=T.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(g){const{top:T,bottom:x,left:E,right:k}=s.current.getBoundingClientRect();g.nativeEvent.type!=="touchend"&&t.pauseOnHover&&g.clientX>=E&&g.clientX<=k&&g.clientY>=T&&g.clientY<=x?v():y()}};return a&&l&&(f.onMouseEnter=v,t.stacked||(f.onMouseLeave=y)),h&&(f.onClick=g=>{c&&c(g),o.canCloseOnClick&&u()}),{playToast:y,pauseToast:v,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:f}}function SL(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:h,theme:d}=t;const m=s||l&&u===0,y={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};l&&(y.transform=`scaleX(${u})`);const v=Br("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),w=tn(o)?o({rtl:c,type:i,defaultClassName:v}):Br(v,o),p={[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}};return ie.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},ie.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${i}`}),ie.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:w,style:y,...p}))}let kL=1;const Nk=()=>""+kL++;function AL(t){return t&&(ji(t.toastId)||pl(t.toastId))?t.toastId:Nk()}function ka(t,e){return Ck(t,e),e.toastId}function rh(t,e){return{...e,type:e&&e.type||t,toastId:AL(e)}}function Du(t){return(e,n)=>ka(e,rh(t,n))}function ye(t,e){return ka(t,rh("default",e))}ye.loading=(t,e)=>ka(t,rh("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),ye.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=ji(i)?ye.loading(i,n):ye.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,h,d)=>{if(h==null)return void ye.dismiss(r);const m={type:c,...a,...n,data:d},y=ji(h)?{render:h}:h;return r?ye.update(r,{...m,...y}):ye(y.render,{...m,...y}),d},u=tn(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},ye.success=Du("success"),ye.info=Du("info"),ye.error=Du("error"),ye.warning=Du("warning"),ye.warn=ye.warning,ye.dark=(t,e)=>ka(t,rh("default",{theme:"dark",...e})),ye.dismiss=function(t){(function(e){var n;if(bk()){if(e==null||ji(n=e)||pl(n))Mt.forEach(i=>{i.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){var r;(r=Mt.get(e.containerId))!=null&&r.removeToast(e.id)||Mt.forEach(i=>{i.removeToast(e.id)})}}else ml=ml.filter(i=>e!=null&&i.options.toastId!==e)})(t)},ye.clearWaitingQueue=function(t){t===void 0&&(t={}),Mt.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},ye.isActive=Pk,ye.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=Mt.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:Nk()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,ka(o,s)}},ye.done=t=>{ye.update(t,{progress:1})},ye.onChange=function(t){return hm.add(t),()=>{hm.delete(t)}},ye.play=t=>b_(!0,t),ye.pause=t=>b_(!1,t);const xL=typeof window<"u"?b.useLayoutEffect:b.useEffect,Lu=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return ie.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},_f={info:function(t){return ie.createElement(Lu,{...t},ie.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return ie.createElement(Lu,{...t},ie.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return ie.createElement(Lu,{...t},ie.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return ie.createElement(Lu,{...t},ie.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return ie.createElement("div",{className:"Toastify__spinner"})}},RL=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=IL(t),{closeButton:o,children:a,autoClose:l,onClick:u,type:c,hideProgressBar:h,closeToast:d,transition:m,position:y,className:v,style:w,bodyClassName:p,bodyStyle:f,progressClassName:g,progressStyle:T,updateId:x,role:E,progress:k,rtl:A,toastId:N,deleteToast:F,isIn:ee,isLoading:Ee,closeOnClick:Te,theme:Qe}=t,Yt=Br("Toastify__toast",`Toastify__toast-theme--${Qe}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":A},{"Toastify__toast--close-on-click":Te}),Xt=tn(v)?v({rtl:A,position:y,type:c,defaultClassName:Yt}):Br(Yt,v),de=function(re){let{theme:ae,type:Me,isLoading:ve,icon:Be}=re,Ve=null;const zt={theme:ae,type:Me};return Be===!1||(tn(Be)?Ve=Be({...zt,isLoading:ve}):b.isValidElement(Be)?Ve=b.cloneElement(Be,zt):ve?Ve=_f.spinner():(hd=>hd in _f)(Me)&&(Ve=_f[Me](zt))),Ve}(t),D=!!k||!l,H={closeToast:d,type:c,theme:Qe};let K=null;return o===!1||(K=tn(o)?o(H):b.isValidElement(o)?b.cloneElement(o,H):function(re){let{closeToast:ae,theme:Me,ariaLabel:ve="close"}=re;return ie.createElement("button",{className:`Toastify__close-button Toastify__close-button--${Me}`,type:"button",onClick:Be=>{Be.stopPropagation(),ae(Be)},"aria-label":ve},ie.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ie.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(H)),ie.createElement(m,{isIn:ee,done:F,position:y,preventExitTransition:n,nodeRef:r,playToast:s},ie.createElement("div",{id:N,onClick:u,"data-in":ee,className:Xt,...i,style:w,ref:r},ie.createElement("div",{...ee&&{role:E},className:tn(p)?p({type:c}):Br("Toastify__toast-body",p),style:f},de!=null&&ie.createElement("div",{className:Br("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Ee})},de),ie.createElement("div",null,a)),K,ie.createElement(SL,{...x&&!D?{key:`pb-${x}`}:{},rtl:A,theme:Qe,delay:l,isRunning:e,isIn:ee,closeToast:d,hide:h,type:c,style:T,className:g,controlledProgress:D,progress:k||0})))},ld=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},bL=ad(ld("bounce",!0));ad(ld("slide",!0));ad(ld("zoom"));ad(ld("flip"));const PL={position:"top-right",transition:bL,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function CL(t){let e={...PL,...t};const n=t.stacked,[r,i]=b.useState(!0),s=b.useRef(null),{getToastToRender:o,isToastActive:a,count:l}=TL(e),{className:u,style:c,rtl:h,containerId:d}=e;function m(v){const w=Br("Toastify__toast-container",`Toastify__toast-container--${v}`,{"Toastify__toast-container--rtl":h});return tn(u)?u({position:v,rtl:h,defaultClassName:w}):Br(w,ic(u))}function y(){n&&(i(!0),ye.play())}return xL(()=>{if(n){var v;const w=s.current.querySelectorAll('[data-in="true"]'),p=12,f=(v=e.position)==null?void 0:v.includes("top");let g=0,T=0;Array.from(w).reverse().forEach((x,E)=>{const k=x;k.classList.add("Toastify__toast--stacked"),E>0&&(k.dataset.collapsed=`${r}`),k.dataset.pos||(k.dataset.pos=f?"top":"bot");const A=g*(r?.2:1)+(r?0:p*E);k.style.setProperty("--y",`${f?A:-1*A}px`),k.style.setProperty("--g",`${p}`),k.style.setProperty("--s",""+(1-(r?T:0))),g+=k.offsetHeight,T+=.025})}},[r,l,n]),ie.createElement("div",{ref:s,className:"Toastify",id:d,onMouseEnter:()=>{n&&(i(!1),ye.pause())},onMouseLeave:y},o((v,w)=>{const p=w.length?{...c}:{...c,pointerEvents:"none"};return ie.createElement("div",{className:m(v),style:p,key:`container-${v}`},w.map(f=>{let{content:g,props:T}=f;return ie.createElement(RL,{...T,stacked:n,collapseAll:y,isIn:a(T.toastId,T.containerId),style:T.style,key:`toast-${T.key}`},g)}))}))}const NL=()=>{const t=()=>ye.success("Message Sent!"),e=b.useRef(),n=r=>{r.preventDefault(),_L.sendForm("service_l9hdidc","template_yzjlt8i",e.current,{publicKey:"A3ft7knGh8fnKFbFu"}).then(i=>{t(),console.log(i.text)},i=>{console.log("FAILED...",i.text)}),r.target.reset()};return _.jsxs("div",{id:"contact",className:"w-full px-4 pt-32 pb-16",children:[_.jsx("div",{className:"max-w-full mx-auto text-center mb-16",children:_.jsx("h2",{className:"font-pixelF text-4xl sm:text-6xl text-slate-100",children:"Contact Me"})}),_.jsx("div",{className:"w-full lg:w-1/2 lg:mx-auto",children:_.jsxs("form",{ref:e,onSubmit:n,children:[_.jsxs("div",{className:"px-4 mb-4",children:[_.jsx("label",{htmlFor:"",className:"font-semibold text-slate-100 mb-2 inline-block",children:"Name"}),_.jsx("input",{type:"text",name:"name",class:"w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow"})]}),_.jsxs("div",{className:"px-4 mb-4",children:[_.jsx("label",{htmlFor:"",className:"font-semibold text-slate-100 mb-2 inline-block",children:"Email"}),_.jsx("input",{type:"email",name:"email",required:!0,class:"w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow"})]}),_.jsxs("div",{className:"px-4 mb-4",children:[_.jsx("label",{htmlFor:"",className:"font-semibold text-slate-100 mb-2 inline-block",children:"Mesagge"}),_.jsx("textarea",{type:"text",name:"message",class:"w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow h-32"})]}),_.jsx("div",{className:"px-4",children:_.jsx("button",{type:"submit",value:"Send",className:"bg-transparent border border-primaryYellow text-primaryYellow rounded-md py-2 px-6 font-medium hover:bg-primaryYellow hover:text-white",children:"Send"})})]})}),_.jsx(CL,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})},OL=()=>_.jsxs("footer",{className:"bg-dark p-4 shadow-2xl  flex flex-col items-center",children:[_.jsxs("div",{className:"flex flex-wrap justify-center items-center flex-initial mb-3",children:[_.jsx("a",{href:"https://www.instagram.com/nzib.art/",target:"_blank",class:"flex items-center justify-center text-slate-100 hover:text-primaryYellow mr-5",children:_.jsxs("svg",{role:"img",width:"17",className:"fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("title",{children:"Instagram"}),_.jsx("path",{d:"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"})]})}),_.jsx("a",{href:"https://twitter.com/nzib_h",target:"_blank",class:"flex items-center justify-center text-slate-100 hover:text-primaryYellow mr-5",children:_.jsxs("svg",{role:"img",width:"17",className:"fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("title",{children:"X"}),_.jsx("path",{d:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"})]})}),_.jsx("a",{href:"",target:"_blank",class:"flex items-center justify-center text-slate-100 hover:text-primaryYellow",children:_.jsxs("svg",{role:"img",width:"17",className:"fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("title",{children:"Discord"}),_.jsx("path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"})]})})]}),_.jsx("div",{className:"flex justify-center items-center flex-initial",children:_.jsxs("p",{className:"text-sm text-slate-100",children:["© 2024 ",_.jsx("span",{className:"font-bold",children:"Nzib "})," Pixel Art Artists."]})})]}),DL=()=>{const[t,e]=b.useState(vf.filter(c=>c.category==="scanes")),n=c=>{const h=vf.filter(d=>d.category===c);e(h)},[r,i]=b.useState(0),[s,o]=b.useState(!1),a=c=>{i(c),o(!0)};vf.filter(c=>c.category==="scanes");const[l,u]=b.useState([]);return b.useEffect(()=>{const c=async()=>{const d=_o(Ro,"scanes/"),y=(await kh(d)).items.map(v=>Sl(v));return Promise.all(y)};(async()=>{const d=await c();u(d)})()},[]),_.jsxs("div",{id:"gallery",className:"w-full px-4 pb-28 pt-32",children:[_.jsx("div",{className:"max-w-full text-center mx-auto mb-10",children:_.jsx("h2",{className:"text-4xl sm:text-6xl text-slate-100 font-pixelF",children:"Gallery"})}),_.jsx("div",{className:"md:py-4 mb-4",children:_.jsxs("ul",{className:"list-none text-slate-100 flex justify-center items-center ",children:[_.jsx("li",{className:`bg-main font-semibold py-2 rounded-sm shadow-lg px-4 cursor-pointer text-sm mr-1 ${n==="scanes"?"active-tabs":""}`,onClick:()=>n("scanes"),children:"Scenes"}),_.jsx("li",{className:"bg-main font-semibold py-2 rounded-sm shadow-lg px-4 cursor-pointer text-sm mr-1",onClick:()=>n("sprites"),children:"Sprites"}),_.jsx("li",{className:`bg-main font-semibold py-2 rounded-sm shadow-lg px-4 cursor-pointer text-sm mr-1 ${n==="nft"?"active-tabs":""}`,onClick:()=>n("nft"),children:"NFT PFP"})]})}),_.jsx("div",{className:"w-full px-4",children:_.jsx("div",{className:"",children:_.jsxs("div",{className:"max-w-full mx-auto",children:[_.jsx("h1",{className:"text-white text-xl md:text-2xl mb-4"}),_.jsx("div",{className:"flex flex-wrap justify-center item-center",children:l.map(c=>_.jsx("div",{className:"md:w-1/2 lg:w-1/3 p-2",children:_.jsx("div",{className:"flex relative",children:_.jsx("img",{src:c,alt:"",onClick:()=>a(index),className:"inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"})})}))})]})})})]})};function LL(){return _.jsxs("div",{className:"min-h-screen bg-main bg-fixed",children:[_.jsx(HR,{}),_.jsx("div",{className:"bg-[url('./assets/img/hero.gif')] bg-center bg-no-repeat bg-cover bg-blend-multiply pt-12 pb-32",children:_.jsx(DR,{})}),_.jsxs("div",{className:"container mx-auto",children:[_.jsx(sL,{}),_.jsx(aL,{}),_.jsx(NL,{})]}),_.jsx(OL,{})]})}/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qe(){return qe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qe.apply(this,arguments)}var Ye;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ye||(Ye={}));const P_="popstate";function ML(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return gl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wl(i)}return FL(e,n,null,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ts(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VL(){return Math.random().toString(36).substr(2,8)}function C_(t,e){return{usr:t.state,key:t.key,idx:e}}function gl(t,e,n,r){return n===void 0&&(n=null),qe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Er(e):e,{state:n,key:e&&e.key||r||VL()})}function Wl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Er(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function FL(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ye.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(qe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Ye.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:p})}function d(w,p){a=Ye.Push;let f=gl(v.location,w,p);n&&n(f,w),u=c()+1;let g=C_(f,u),T=v.createHref(f);try{o.pushState(g,"",T)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(T)}s&&l&&l({action:a,location:v.location,delta:1})}function m(w,p){a=Ye.Replace;let f=gl(v.location,w,p);n&&n(f,w),u=c();let g=C_(f,u),T=v.createHref(f);o.replaceState(g,"",T),s&&l&&l({action:a,location:v.location,delta:0})}function y(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:Wl(w);return pe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(P_,h),l=w,()=>{i.removeEventListener(P_,h),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let p=y(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(w){return o.go(w)}};return v}var He;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(He||(He={}));const jL=new Set(["lazy","caseSensitive","path","id","index","children"]);function UL(t){return t.index===!0}function dm(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(pe(i.index!==!0||!i.children,"Cannot specify children on an index route"),pe(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),UL(i)){let l=qe({},i,e(i),{id:a});return r[a]=l,l}else{let l=qe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=dm(i.children,e,o,r)),l}})}function Ms(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Er(e):e,i=ql(r.pathname||"/",n);if(i==null)return null;let s=Ok(t);zL(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=XL(s[a],e7(i));return o}function $L(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Ok(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ui([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ok(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:QL(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Dk(s.path))i(s,o,l)}),e}function Dk(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Dk(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function zL(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:YL(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const BL=/^:[\w-]+$/,HL=3,WL=2,qL=1,KL=10,GL=-2,N_=t=>t==="*";function QL(t,e){let n=t.split("/"),r=n.length;return n.some(N_)&&(r+=GL),e&&(r+=WL),n.filter(i=>!N_(i)).reduce((i,s)=>i+(BL.test(s)?HL:s===""?qL:KL),r)}function YL(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function XL(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=JL({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Ui([i,c.pathname]),pathnameBase:o7(Ui([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Ui([i,c.pathnameBase]))}return s}function JL(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ZL(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:m}=c;if(d==="*"){let v=a[h]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[h];return m&&!y?u[d]=void 0:u[d]=t7(y||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ZL(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ts(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function e7(t){try{return decodeURI(t)}catch(e){return ts(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function t7(t,e){try{return decodeURIComponent(t)}catch(n){return ts(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ql(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function n7(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Er(t):t;return{pathname:n?n.startsWith("/")?n:r7(n,e):e,search:a7(r),hash:l7(i)}}function r7(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function i7(t,e){let n=Lk(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function s7(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Er(t):(i=qe({},t),pe(!i.pathname||!i.pathname.includes("?"),wf("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),wf("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),wf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=n7(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ui=t=>t.join("/").replace(/\/\/+/g,"/"),o7=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),a7=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,l7=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Zy{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Mk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Vk=["post","put","patch","delete"],u7=new Set(Vk),c7=["get",...Vk],h7=new Set(c7),d7=new Set([301,302,303,307,308]),f7=new Set([307,308]),Ef={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},p7={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Wo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Fk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,m7=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),jk="remix-router-transitions";function g7(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;pe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let I=t.detectErrorBoundary;i=S=>({hasErrorBoundary:I(S)})}else i=m7;let s={},o=dm(t.routes,i,void 0,s),a,l=t.basename||"/",u=qe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},t.future),c=null,h=new Set,d=null,m=null,y=null,v=t.hydrationData!=null,w=Ms(o,t.history.location,l),p=null;if(w==null){let I=dn(404,{pathname:t.history.location.pathname}),{matches:S,route:R}=U_(o);w=S,p={[R.id]:I}}let f,g=w.some(I=>I.route.lazy),T=w.some(I=>I.route.loader);if(g)f=!1;else if(!T)f=!0;else if(u.v7_partialHydration){let I=t.hydrationData?t.hydrationData.loaderData:null,S=t.hydrationData?t.hydrationData.errors:null;f=w.every(R=>R.route.loader&&R.route.loader.hydrate!==!0&&(I&&I[R.route.id]!==void 0||S&&S[R.route.id]!==void 0))}else f=t.hydrationData!=null;let x,E={historyAction:t.history.action,location:t.history.location,matches:w,initialized:f,navigation:Ef,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||p,fetchers:new Map,blockers:new Map},k=Ye.Pop,A=!1,N,F=!1,ee=new Map,Ee=null,Te=!1,Qe=!1,Yt=[],Xt=[],de=new Map,D=0,H=-1,K=new Map,re=new Set,ae=new Map,Me=new Map,ve=new Set,Be=new Map,Ve=new Map,zt=!1;function hd(){if(c=t.history.listen(I=>{let{action:S,location:R,delta:L}=I;if(zt){zt=!1;return}ts(Ve.size===0||L!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=uv({currentLocation:E.location,nextLocation:R,historyAction:S});if(B&&L!=null){zt=!0,t.history.go(L*-1),Gl(B,{state:"blocked",location:R,proceed(){Gl(B,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),t.history.go(L)},reset(){let se=new Map(E.blockers);se.set(B,Wo),Jt({blockers:se})}});return}return yi(S,R)}),n){x7(e,ee);let I=()=>R7(e,ee);e.addEventListener("pagehide",I),Ee=()=>e.removeEventListener("pagehide",I)}return E.initialized||yi(Ye.Pop,E.location,{initialHydration:!0}),x}function Kk(){c&&c(),Ee&&Ee(),h.clear(),N&&N.abort(),E.fetchers.forEach((I,S)=>Kl(S)),E.blockers.forEach((I,S)=>lv(S))}function Gk(I){return h.add(I),()=>h.delete(I)}function Jt(I,S){S===void 0&&(S={}),E=qe({},E,I);let R=[],L=[];u.v7_fetcherPersist&&E.fetchers.forEach((B,se)=>{B.state==="idle"&&(ve.has(se)?L.push(se):R.push(se))}),[...h].forEach(B=>B(E,{deletedFetchers:L,unstable_viewTransitionOpts:S.viewTransitionOpts,unstable_flushSync:S.flushSync===!0})),u.v7_fetcherPersist&&(R.forEach(B=>E.fetchers.delete(B)),L.forEach(B=>Kl(B)))}function Po(I,S,R){var L,B;let{flushSync:se}=R===void 0?{}:R,Q=E.actionData!=null&&E.navigation.formMethod!=null&&Sn(E.navigation.formMethod)&&E.navigation.state==="loading"&&((L=I.state)==null?void 0:L._isRedirect)!==!0,G;S.actionData?Object.keys(S.actionData).length>0?G=S.actionData:G=null:Q?G=E.actionData:G=null;let q=S.loaderData?j_(E.loaderData,S.loaderData,S.matches||[],S.errors):E.loaderData,ce=E.blockers;ce.size>0&&(ce=new Map(ce),ce.forEach((Se,mt)=>ce.set(mt,Wo)));let lt=A===!0||E.navigation.formMethod!=null&&Sn(E.navigation.formMethod)&&((B=I.state)==null?void 0:B._isRedirect)!==!0;a&&(o=a,a=void 0),Te||k===Ye.Pop||(k===Ye.Push?t.history.push(I,I.state):k===Ye.Replace&&t.history.replace(I,I.state));let ne;if(k===Ye.Pop){let Se=ee.get(E.location.pathname);Se&&Se.has(I.pathname)?ne={currentLocation:E.location,nextLocation:I}:ee.has(I.pathname)&&(ne={currentLocation:I,nextLocation:E.location})}else if(F){let Se=ee.get(E.location.pathname);Se?Se.add(I.pathname):(Se=new Set([I.pathname]),ee.set(E.location.pathname,Se)),ne={currentLocation:E.location,nextLocation:I}}Jt(qe({},S,{actionData:G,loaderData:q,historyAction:k,location:I,initialized:!0,navigation:Ef,revalidation:"idle",restoreScrollPosition:hv(I,S.matches||E.matches),preventScrollReset:lt,blockers:ce}),{viewTransitionOpts:ne,flushSync:se===!0}),k=Ye.Pop,A=!1,F=!1,Te=!1,Qe=!1,Yt=[],Xt=[]}async function nv(I,S){if(typeof I=="number"){t.history.go(I);return}let R=fm(E.location,E.matches,l,u.v7_prependBasename,I,u.v7_relativeSplatPath,S==null?void 0:S.fromRouteId,S==null?void 0:S.relative),{path:L,submission:B,error:se}=O_(u.v7_normalizeFormMethod,!1,R,S),Q=E.location,G=gl(E.location,L,S&&S.state);G=qe({},G,t.history.encodeLocation(G));let q=S&&S.replace!=null?S.replace:void 0,ce=Ye.Push;q===!0?ce=Ye.Replace:q===!1||B!=null&&Sn(B.formMethod)&&B.formAction===E.location.pathname+E.location.search&&(ce=Ye.Replace);let lt=S&&"preventScrollReset"in S?S.preventScrollReset===!0:void 0,ne=(S&&S.unstable_flushSync)===!0,Se=uv({currentLocation:Q,nextLocation:G,historyAction:ce});if(Se){Gl(Se,{state:"blocked",location:G,proceed(){Gl(Se,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),nv(I,S)},reset(){let mt=new Map(E.blockers);mt.set(Se,Wo),Jt({blockers:mt})}});return}return await yi(ce,G,{submission:B,pendingError:se,preventScrollReset:lt,replace:S&&S.replace,enableViewTransition:S&&S.unstable_viewTransition,flushSync:ne})}function Qk(){if(dd(),Jt({revalidation:"loading"}),E.navigation.state!=="submitting"){if(E.navigation.state==="idle"){yi(E.historyAction,E.location,{startUninterruptedRevalidation:!0});return}yi(k||E.historyAction,E.navigation.location,{overrideNavigation:E.navigation})}}async function yi(I,S,R){N&&N.abort(),N=null,k=I,Te=(R&&R.startUninterruptedRevalidation)===!0,iA(E.location,E.matches),A=(R&&R.preventScrollReset)===!0,F=(R&&R.enableViewTransition)===!0;let L=a||o,B=R&&R.overrideNavigation,se=Ms(L,S,l),Q=(R&&R.flushSync)===!0;if(!se){let mt=dn(404,{pathname:S.pathname}),{matches:hn,route:ut}=U_(L);fd(),Po(S,{matches:hn,loaderData:{},errors:{[ut.id]:mt}},{flushSync:Q});return}if(E.initialized&&!Qe&&E7(E.location,S)&&!(R&&R.submission&&Sn(R.submission.formMethod))){Po(S,{matches:se},{flushSync:Q});return}N=new AbortController;let G=Ko(t.history,S,N.signal,R&&R.submission),q,ce;if(R&&R.pendingError)ce={[Aa(se).route.id]:R.pendingError};else if(R&&R.submission&&Sn(R.submission.formMethod)){let mt=await Yk(G,S,R.submission,se,{replace:R.replace,flushSync:Q});if(mt.shortCircuited)return;q=mt.pendingActionData,ce=mt.pendingActionError,B=Tf(S,R.submission),Q=!1,G=new Request(G.url,{signal:G.signal})}let{shortCircuited:lt,loaderData:ne,errors:Se}=await Xk(G,S,se,B,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,R&&R.initialHydration===!0,Q,q,ce);lt||(N=null,Po(S,qe({matches:se},q?{actionData:q}:{},{loaderData:ne,errors:Se})))}async function Yk(I,S,R,L,B){B===void 0&&(B={}),dd();let se=k7(S,R);Jt({navigation:se},{flushSync:B.flushSync===!0});let Q,G=mm(L,S);if(!G.route.action&&!G.route.lazy)Q={type:He.error,error:dn(405,{method:I.method,pathname:S.pathname,routeId:G.route.id})};else if(Q=await qo("action",I,G,L,s,i,l,u.v7_relativeSplatPath),I.signal.aborted)return{shortCircuited:!0};if(Oi(Q)){let q;return B&&B.replace!=null?q=B.replace:q=Q.location===E.location.pathname+E.location.search,await Co(E,Q,{submission:R,replace:q}),{shortCircuited:!0}}if(Vs(Q)){let q=Aa(L,G.route.id);return(B&&B.replace)!==!0&&(k=Ye.Push),{pendingActionData:{},pendingActionError:{[q.route.id]:Q.error}}}if(Ni(Q))throw dn(400,{type:"defer-action"});return{pendingActionData:{[G.route.id]:Q.data}}}async function Xk(I,S,R,L,B,se,Q,G,q,ce,lt){let ne=L||Tf(S,B),Se=B||se||B_(ne),mt=a||o,[hn,ut]=D_(t.history,E,R,Se,S,u.v7_partialHydration&&G===!0,Qe,Yt,Xt,ve,ae,re,mt,l,ce,lt);if(fd(Ie=>!(R&&R.some(De=>De.route.id===Ie))||hn&&hn.some(De=>De.route.id===Ie)),H=++D,hn.length===0&&ut.length===0){let Ie=ov();return Po(S,qe({matches:R,loaderData:{},errors:lt||null},ce?{actionData:ce}:{},Ie?{fetchers:new Map(E.fetchers)}:{}),{flushSync:q}),{shortCircuited:!0}}if(!Te&&(!u.v7_partialHydration||!G)){ut.forEach(De=>{let On=E.fetchers.get(De.key),Yl=Go(void 0,On?On.data:void 0);E.fetchers.set(De.key,Yl)});let Ie=ce||E.actionData;Jt(qe({navigation:ne},Ie?Object.keys(Ie).length===0?{actionData:null}:{actionData:Ie}:{},ut.length>0?{fetchers:new Map(E.fetchers)}:{}),{flushSync:q})}ut.forEach(Ie=>{de.has(Ie.key)&&Ir(Ie.key),Ie.controller&&de.set(Ie.key,Ie.controller)});let cs=()=>ut.forEach(Ie=>Ir(Ie.key));N&&N.signal.addEventListener("abort",cs);let{results:pd,loaderResults:hs,fetcherResults:Sr}=await rv(E.matches,R,hn,ut,I);if(I.signal.aborted)return{shortCircuited:!0};N&&N.signal.removeEventListener("abort",cs),ut.forEach(Ie=>de.delete(Ie.key));let vi=$_(pd);if(vi){if(vi.idx>=hn.length){let Ie=ut[vi.idx-hn.length].key;re.add(Ie)}return await Co(E,vi.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:md,errors:gd}=F_(E,R,hn,hs,lt,ut,Sr,Be);Be.forEach((Ie,De)=>{Ie.subscribe(On=>{(On||Ie.done)&&Be.delete(De)})});let yd=ov(),ds=av(H),Ql=yd||ds||ut.length>0;return qe({loaderData:md,errors:gd},Ql?{fetchers:new Map(E.fetchers)}:{})}function Jk(I,S,R,L){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");de.has(I)&&Ir(I);let B=(L&&L.unstable_flushSync)===!0,se=a||o,Q=fm(E.location,E.matches,l,u.v7_prependBasename,R,u.v7_relativeSplatPath,S,L==null?void 0:L.relative),G=Ms(se,Q,l);if(!G){No(I,S,dn(404,{pathname:Q}),{flushSync:B});return}let{path:q,submission:ce,error:lt}=O_(u.v7_normalizeFormMethod,!0,Q,L);if(lt){No(I,S,lt,{flushSync:B});return}let ne=mm(G,q);if(A=(L&&L.preventScrollReset)===!0,ce&&Sn(ce.formMethod)){Zk(I,S,q,ne,G,B,ce);return}ae.set(I,{routeId:S,path:q}),eA(I,S,q,ne,G,B,ce)}async function Zk(I,S,R,L,B,se,Q){if(dd(),ae.delete(I),!L.route.action&&!L.route.lazy){let De=dn(405,{method:Q.formMethod,pathname:R,routeId:S});No(I,S,De,{flushSync:se});return}let G=E.fetchers.get(I);Tr(I,A7(Q,G),{flushSync:se});let q=new AbortController,ce=Ko(t.history,R,q.signal,Q);de.set(I,q);let lt=D,ne=await qo("action",ce,L,B,s,i,l,u.v7_relativeSplatPath);if(ce.signal.aborted){de.get(I)===q&&de.delete(I);return}if(u.v7_fetcherPersist&&ve.has(I)){if(Oi(ne)||Vs(ne)){Tr(I,Rr(void 0));return}}else{if(Oi(ne))if(de.delete(I),H>lt){Tr(I,Rr(void 0));return}else return re.add(I),Tr(I,Go(Q)),Co(E,ne,{fetcherSubmission:Q});if(Vs(ne)){No(I,S,ne.error);return}}if(Ni(ne))throw dn(400,{type:"defer-action"});let Se=E.navigation.location||E.location,mt=Ko(t.history,Se,q.signal),hn=a||o,ut=E.navigation.state!=="idle"?Ms(hn,E.navigation.location,l):E.matches;pe(ut,"Didn't find any matches after fetcher action");let cs=++D;K.set(I,cs);let pd=Go(Q,ne.data);E.fetchers.set(I,pd);let[hs,Sr]=D_(t.history,E,ut,Q,Se,!1,Qe,Yt,Xt,ve,ae,re,hn,l,{[L.route.id]:ne.data},void 0);Sr.filter(De=>De.key!==I).forEach(De=>{let On=De.key,Yl=E.fetchers.get(On),oA=Go(void 0,Yl?Yl.data:void 0);E.fetchers.set(On,oA),de.has(On)&&Ir(On),De.controller&&de.set(On,De.controller)}),Jt({fetchers:new Map(E.fetchers)});let vi=()=>Sr.forEach(De=>Ir(De.key));q.signal.addEventListener("abort",vi);let{results:md,loaderResults:gd,fetcherResults:yd}=await rv(E.matches,ut,hs,Sr,mt);if(q.signal.aborted)return;q.signal.removeEventListener("abort",vi),K.delete(I),de.delete(I),Sr.forEach(De=>de.delete(De.key));let ds=$_(md);if(ds){if(ds.idx>=hs.length){let De=Sr[ds.idx-hs.length].key;re.add(De)}return Co(E,ds.result)}let{loaderData:Ql,errors:Ie}=F_(E,E.matches,hs,gd,void 0,Sr,yd,Be);if(E.fetchers.has(I)){let De=Rr(ne.data);E.fetchers.set(I,De)}av(cs),E.navigation.state==="loading"&&cs>H?(pe(k,"Expected pending action"),N&&N.abort(),Po(E.navigation.location,{matches:ut,loaderData:Ql,errors:Ie,fetchers:new Map(E.fetchers)})):(Jt({errors:Ie,loaderData:j_(E.loaderData,Ql,ut,Ie),fetchers:new Map(E.fetchers)}),Qe=!1)}async function eA(I,S,R,L,B,se,Q){let G=E.fetchers.get(I);Tr(I,Go(Q,G?G.data:void 0),{flushSync:se});let q=new AbortController,ce=Ko(t.history,R,q.signal);de.set(I,q);let lt=D,ne=await qo("loader",ce,L,B,s,i,l,u.v7_relativeSplatPath);if(Ni(ne)&&(ne=await zk(ne,ce.signal,!0)||ne),de.get(I)===q&&de.delete(I),!ce.signal.aborted){if(ve.has(I)){Tr(I,Rr(void 0));return}if(Oi(ne))if(H>lt){Tr(I,Rr(void 0));return}else{re.add(I),await Co(E,ne);return}if(Vs(ne)){No(I,S,ne.error);return}pe(!Ni(ne),"Unhandled fetcher deferred data"),Tr(I,Rr(ne.data))}}async function Co(I,S,R){let{submission:L,fetcherSubmission:B,replace:se}=R===void 0?{}:R;S.revalidate&&(Qe=!0);let Q=gl(I.location,S.location,{_isRedirect:!0});if(pe(Q,"Expected a location on the redirect navigation"),n){let Se=!1;if(S.reloadDocument)Se=!0;else if(Fk.test(S.location)){const mt=t.history.createURL(S.location);Se=mt.origin!==e.location.origin||ql(mt.pathname,l)==null}if(Se){se?e.location.replace(S.location):e.location.assign(S.location);return}}N=null;let G=se===!0?Ye.Replace:Ye.Push,{formMethod:q,formAction:ce,formEncType:lt}=I.navigation;!L&&!B&&q&&ce&&lt&&(L=B_(I.navigation));let ne=L||B;if(f7.has(S.status)&&ne&&Sn(ne.formMethod))await yi(G,Q,{submission:qe({},ne,{formAction:S.location}),preventScrollReset:A});else{let Se=Tf(Q,L);await yi(G,Q,{overrideNavigation:Se,fetcherSubmission:B,preventScrollReset:A})}}async function rv(I,S,R,L,B){let se=await Promise.all([...R.map(q=>qo("loader",B,q,S,s,i,l,u.v7_relativeSplatPath)),...L.map(q=>q.matches&&q.match&&q.controller?qo("loader",Ko(t.history,q.path,q.controller.signal),q.match,q.matches,s,i,l,u.v7_relativeSplatPath):{type:He.error,error:dn(404,{pathname:q.path})})]),Q=se.slice(0,R.length),G=se.slice(R.length);return await Promise.all([z_(I,R,Q,Q.map(()=>B.signal),!1,E.loaderData),z_(I,L.map(q=>q.match),G,L.map(q=>q.controller?q.controller.signal:null),!0)]),{results:se,loaderResults:Q,fetcherResults:G}}function dd(){Qe=!0,Yt.push(...fd()),ae.forEach((I,S)=>{de.has(S)&&(Xt.push(S),Ir(S))})}function Tr(I,S,R){R===void 0&&(R={}),E.fetchers.set(I,S),Jt({fetchers:new Map(E.fetchers)},{flushSync:(R&&R.flushSync)===!0})}function No(I,S,R,L){L===void 0&&(L={});let B=Aa(E.matches,S);Kl(I),Jt({errors:{[B.route.id]:R},fetchers:new Map(E.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function iv(I){return u.v7_fetcherPersist&&(Me.set(I,(Me.get(I)||0)+1),ve.has(I)&&ve.delete(I)),E.fetchers.get(I)||p7}function Kl(I){let S=E.fetchers.get(I);de.has(I)&&!(S&&S.state==="loading"&&K.has(I))&&Ir(I),ae.delete(I),K.delete(I),re.delete(I),ve.delete(I),E.fetchers.delete(I)}function tA(I){if(u.v7_fetcherPersist){let S=(Me.get(I)||0)-1;S<=0?(Me.delete(I),ve.add(I)):Me.set(I,S)}else Kl(I);Jt({fetchers:new Map(E.fetchers)})}function Ir(I){let S=de.get(I);pe(S,"Expected fetch controller: "+I),S.abort(),de.delete(I)}function sv(I){for(let S of I){let R=iv(S),L=Rr(R.data);E.fetchers.set(S,L)}}function ov(){let I=[],S=!1;for(let R of re){let L=E.fetchers.get(R);pe(L,"Expected fetcher: "+R),L.state==="loading"&&(re.delete(R),I.push(R),S=!0)}return sv(I),S}function av(I){let S=[];for(let[R,L]of K)if(L<I){let B=E.fetchers.get(R);pe(B,"Expected fetcher: "+R),B.state==="loading"&&(Ir(R),K.delete(R),S.push(R))}return sv(S),S.length>0}function nA(I,S){let R=E.blockers.get(I)||Wo;return Ve.get(I)!==S&&Ve.set(I,S),R}function lv(I){E.blockers.delete(I),Ve.delete(I)}function Gl(I,S){let R=E.blockers.get(I)||Wo;pe(R.state==="unblocked"&&S.state==="blocked"||R.state==="blocked"&&S.state==="blocked"||R.state==="blocked"&&S.state==="proceeding"||R.state==="blocked"&&S.state==="unblocked"||R.state==="proceeding"&&S.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+S.state);let L=new Map(E.blockers);L.set(I,S),Jt({blockers:L})}function uv(I){let{currentLocation:S,nextLocation:R,historyAction:L}=I;if(Ve.size===0)return;Ve.size>1&&ts(!1,"A router only supports one blocker at a time");let B=Array.from(Ve.entries()),[se,Q]=B[B.length-1],G=E.blockers.get(se);if(!(G&&G.state==="proceeding")&&Q({currentLocation:S,nextLocation:R,historyAction:L}))return se}function fd(I){let S=[];return Be.forEach((R,L)=>{(!I||I(L))&&(R.cancel(),S.push(L),Be.delete(L))}),S}function rA(I,S,R){if(d=I,y=S,m=R||null,!v&&E.navigation===Ef){v=!0;let L=hv(E.location,E.matches);L!=null&&Jt({restoreScrollPosition:L})}return()=>{d=null,y=null,m=null}}function cv(I,S){return m&&m(I,S.map(L=>$L(L,E.loaderData)))||I.key}function iA(I,S){if(d&&y){let R=cv(I,S);d[R]=y()}}function hv(I,S){if(d){let R=cv(I,S),L=d[R];if(typeof L=="number")return L}return null}function sA(I){s={},a=dm(I,i,void 0,s)}return x={get basename(){return l},get future(){return u},get state(){return E},get routes(){return o},get window(){return e},initialize:hd,subscribe:Gk,enableScrollRestoration:rA,navigate:nv,fetch:Jk,revalidate:Qk,createHref:I=>t.history.createHref(I),encodeLocation:I=>t.history.encodeLocation(I),getFetcher:iv,deleteFetcher:tA,dispose:Kk,getBlocker:nA,deleteBlocker:lv,_internalFetchControllers:de,_internalActiveDeferreds:Be,_internalSetRoutes:sA},x}function y7(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function fm(t,e,n,r,i,s,o,a){let l,u;if(o){l=[];for(let h of e)if(l.push(h),h.route.id===o){u=h;break}}else l=e,u=e[e.length-1];let c=s7(i||".",i7(l,s),ql(t.pathname,n)||t.pathname,a==="path");return i==null&&(c.search=t.search,c.hash=t.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!ev(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Ui([n,c.pathname])),Wl(c)}function O_(t,e,n,r){if(!r||!y7(r))return{path:n};if(r.formMethod&&!S7(r.formMethod))return{path:n,error:dn(405,{method:r.formMethod})};let i=()=>({path:n,error:dn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=$k(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Sn(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,y)=>{let[v,w]=y;return""+m+v+"="+w+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!Sn(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}pe(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=pm(r.formData),u=r.formData;else if(r.body instanceof FormData)l=pm(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=V_(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=V_(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Sn(c.formMethod))return{path:n,submission:c};let h=Er(n);return e&&h.search&&ev(h.search)&&l.append("index",""),h.search="?"+l,{path:Wl(h),submission:c}}function v7(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function D_(t,e,n,r,i,s,o,a,l,u,c,h,d,m,y,v){let w=v?Object.values(v)[0]:y?Object.values(y)[0]:void 0,p=t.createURL(e.location),f=t.createURL(i),g=v?Object.keys(v)[0]:void 0,x=v7(n,g).filter((k,A)=>{let{route:N}=k;if(N.lazy)return!0;if(N.loader==null)return!1;if(s)return N.loader.hydrate?!0:e.loaderData[N.id]===void 0&&(!e.errors||e.errors[N.id]===void 0);if(_7(e.loaderData,e.matches[A],k)||a.some(Ee=>Ee===k.route.id))return!0;let F=e.matches[A],ee=k;return L_(k,qe({currentUrl:p,currentParams:F.params,nextUrl:f,nextParams:ee.params},r,{actionResult:w,defaultShouldRevalidate:o||p.pathname+p.search===f.pathname+f.search||p.search!==f.search||Uk(F,ee)}))}),E=[];return c.forEach((k,A)=>{if(s||!n.some(Te=>Te.route.id===k.routeId)||u.has(A))return;let N=Ms(d,k.path,m);if(!N){E.push({key:A,routeId:k.routeId,path:k.path,matches:null,match:null,controller:null});return}let F=e.fetchers.get(A),ee=mm(N,k.path),Ee=!1;h.has(A)?Ee=!1:l.includes(A)?Ee=!0:F&&F.state!=="idle"&&F.data===void 0?Ee=o:Ee=L_(ee,qe({currentUrl:p,currentParams:e.matches[e.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:w,defaultShouldRevalidate:o})),Ee&&E.push({key:A,routeId:k.routeId,path:k.path,matches:N,match:ee,controller:new AbortController})}),[x,E]}function _7(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function Uk(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function L_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function M_(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];pe(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";ts(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!jL.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,qe({},e(i),{lazy:void 0}))}async function qo(t,e,n,r,i,s,o,a,l){l===void 0&&(l={});let u,c,h,d=v=>{let w,p=new Promise((f,g)=>w=g);return h=()=>w(),e.signal.addEventListener("abort",h),Promise.race([v({request:e,params:n.params,context:l.requestContext}),p])};try{let v=n.route[t];if(n.route.lazy)if(v){let w,p=await Promise.all([d(v).catch(f=>{w=f}),M_(n.route,s,i)]);if(w)throw w;c=p[0]}else if(await M_(n.route,s,i),v=n.route[t],v)c=await d(v);else if(t==="action"){let w=new URL(e.url),p=w.pathname+w.search;throw dn(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:He.data,data:void 0};else if(v)c=await d(v);else{let w=new URL(e.url),p=w.pathname+w.search;throw dn(404,{pathname:p})}pe(c!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){u=He.error,c=v}finally{h&&e.signal.removeEventListener("abort",h)}if(I7(c)){let v=c.status;if(d7.has(v)){let p=c.headers.get("Location");if(pe(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!Fk.test(p))p=fm(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,p,a);else if(!l.isStaticRequest){let f=new URL(e.url),g=p.startsWith("//")?new URL(f.protocol+p):new URL(p),T=ql(g.pathname,o)!=null;g.origin===f.origin&&T&&(p=g.pathname+g.search+g.hash)}if(l.isStaticRequest)throw c.headers.set("Location",p),c;return{type:He.redirect,status:v,location:p,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===He.error?He.error:He.data,response:c};let w;try{let p=c.headers.get("Content-Type");p&&/\bapplication\/json\b/.test(p)?c.body==null?w=null:w=await c.json():w=await c.text()}catch(p){return{type:He.error,error:p}}return u===He.error?{type:u,error:new Zy(v,c.statusText,w),headers:c.headers}:{type:He.data,data:w,statusCode:c.status,headers:c.headers}}if(u===He.error)return{type:u,error:c};if(T7(c)){var m,y;return{type:He.deferred,deferredData:c,statusCode:(m=c.init)==null?void 0:m.status,headers:((y=c.init)==null?void 0:y.headers)&&new Headers(c.init.headers)}}return{type:He.data,data:c}}function Ko(t,e,n,r){let i=t.createURL($k(e)).toString(),s={signal:n};if(r&&Sn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=pm(r.formData):s.body=r.formData}return new Request(i,s)}function pm(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function V_(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function w7(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(pe(!Oi(c),"Cannot handle redirect results in processLoaderData"),Vs(c)){let m=Aa(t,d),y=c.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=y),s[d]=void 0,l||(l=!0,a=Mk(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else Ni(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function F_(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=w7(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:m}=s[c];pe(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let y=o[c];if(!(m&&m.signal.aborted))if(Vs(y)){let v=Aa(t.matches,d==null?void 0:d.route.id);u&&u[v.route.id]||(u=qe({},u,{[v.route.id]:y.error})),t.fetchers.delete(h)}else if(Oi(y))pe(!1,"Unhandled fetcher revalidation redirect");else if(Ni(y))pe(!1,"Unhandled fetcher deferred data");else{let v=Rr(y.data);t.fetchers.set(h,v)}}return{loaderData:l,errors:u}}function j_(t,e,n,r){let i=qe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Aa(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function U_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function dn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Zy(t||500,o,new Error(a),!0)}function $_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Oi(n))return{result:n,idx:e}}}function $k(t){let e=typeof t=="string"?Er(t):t;return Wl(qe({},e,{hash:""}))}function E7(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Ni(t){return t.type===He.deferred}function Vs(t){return t.type===He.error}function Oi(t){return(t&&t.type)===He.redirect}function T7(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function I7(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function S7(t){return h7.has(t.toLowerCase())}function Sn(t){return u7.has(t.toLowerCase())}async function z_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!Uk(u,l)&&(s&&s[l.route.id])!==void 0;if(Ni(a)&&(i||c)){let h=r[o];pe(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await zk(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function zk(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:He.data,data:t.deferredData.unwrappedData}}catch(i){return{type:He.error,error:i}}return{type:He.data,data:t.deferredData.data}}}function ev(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function mm(t,e){let n=typeof e=="string"?Er(e).search:e.search;if(t[t.length-1].route.index&&ev(n||""))return t[t.length-1];let r=Lk(t);return r[r.length-1]}function B_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Tf(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function k7(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Go(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function A7(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Rr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function x7(t,e){try{let n=t.sessionStorage.getItem(jk);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function R7(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(jk,JSON.stringify(n))}catch(r){ts(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ih(){return ih=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ih.apply(this,arguments)}const Bk=b.createContext(null),Hk=b.createContext(null),Wk=b.createContext(null),ud=b.createContext(null),cd=b.createContext({outlet:null,matches:[],isDataRoute:!1}),qk=b.createContext(null);function tv(){return b.useContext(ud)!=null}function b7(){return tv()||pe(!1),b.useContext(ud).location}function P7(t,e,n,r){tv()||pe(!1);let{navigator:i}=b.useContext(Wk),{matches:s}=b.useContext(cd),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=b7(),c;if(e){var h;let w=typeof e=="string"?Er(e):e;l==="/"||(h=w.pathname)!=null&&h.startsWith(l)||pe(!1),c=w}else c=u;let d=c.pathname||"/",m=l==="/"?d:d.slice(l.length)||"/",y=Ms(t,{pathname:m}),v=L7(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Ui([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Ui([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&v?b.createElement(ud.Provider,{value:{location:ih({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ye.Pop}},v):v}function C7(){let t=j7(),e=Mk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const N7=b.createElement(C7,null);class O7 extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(cd.Provider,{value:this.props.routeContext},b.createElement(qk.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function D7(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(Bk);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(cd.Provider,{value:e},r)}function L7(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));c>=0||pe(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:d,errors:m}=n,y=h.route.loader&&d[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,d)=>{let m,y=!1,v=null,w=null;n&&(m=a&&h.route.id?a[h.route.id]:void 0,v=h.route.errorElement||N7,l&&(u<0&&d===0?(U7("route-fallback",!1),y=!0,w=null):u===d&&(y=!0,w=h.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,d+1)),f=()=>{let g;return m?g=v:y?g=w:h.route.Component?g=b.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=c,b.createElement(D7,{match:h,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?b.createElement(O7,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var gm=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(gm||{});function M7(t){let e=b.useContext(Hk);return e||pe(!1),e}function V7(t){let e=b.useContext(cd);return e||pe(!1),e}function F7(t){let e=V7(),n=e.matches[e.matches.length-1];return n.route.id||pe(!1),n.route.id}function j7(){var t;let e=b.useContext(qk),n=M7(gm.UseRouteError),r=F7(gm.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}const H_={};function U7(t,e,n){!e&&!H_[t]&&(H_[t]=!0)}function $7(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ye.Pop,navigator:s,static:o=!1,future:a}=t;tv()&&pe(!1);let l=e.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:s,static:o,future:ih({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Er(r));let{pathname:c="/",search:h="",hash:d="",state:m=null,key:y="default"}=r,v=b.useMemo(()=>{let w=ql(c,l);return w==null?null:{location:{pathname:w,search:h,hash:d,state:m,key:y},navigationType:i}},[l,c,h,d,m,y,i]);return v==null?null:b.createElement(Wk.Provider,{value:u},b.createElement(ud.Provider,{children:n,value:v}))}new Promise(()=>{});function z7(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:b.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:b.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:b.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sh(){return sh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sh.apply(this,arguments)}const B7="6";try{window.__reactRouterVersion=B7}catch{}function H7(t,e){return g7({basename:e==null?void 0:e.basename,future:sh({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:ML({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||W7(),routes:t,mapRouteProperties:z7,window:e==null?void 0:e.window}).initialize()}function W7(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=sh({},e,{errors:q7(e.errors)})),e}function q7(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Zy(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const K7=b.createContext({isTransitioning:!1}),G7=b.createContext(new Map),Q7="startTransition",W_=TA[Q7],Y7="flushSync",q_=OR[Y7];function X7(t){W_?W_(t):t()}function Qo(t){q_?q_(t):t()}class J7{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function Z7(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=b.useState(n.state),[o,a]=b.useState(),[l,u]=b.useState({isTransitioning:!1}),[c,h]=b.useState(),[d,m]=b.useState(),[y,v]=b.useState(),w=b.useRef(new Map),{v7_startTransition:p}=r||{},f=b.useCallback(k=>{p?X7(k):k()},[p]),g=b.useCallback((k,A)=>{let{deletedFetchers:N,unstable_flushSync:F,unstable_viewTransitionOpts:ee}=A;N.forEach(Te=>w.current.delete(Te)),k.fetchers.forEach((Te,Qe)=>{Te.data!==void 0&&w.current.set(Qe,Te.data)});let Ee=n.window==null||typeof n.window.document.startViewTransition!="function";if(!ee||Ee){F?Qo(()=>s(k)):f(()=>s(k));return}if(F){Qo(()=>{d&&(c&&c.resolve(),d.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})});let Te=n.window.document.startViewTransition(()=>{Qo(()=>s(k))});Te.finished.finally(()=>{Qo(()=>{h(void 0),m(void 0),a(void 0),u({isTransitioning:!1})})}),Qo(()=>m(Te));return}d?(c&&c.resolve(),d.skipTransition(),v({state:k,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})):(a(k),u({isTransitioning:!0,flushSync:!1,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation}))},[n.window,d,c,w,f]);b.useLayoutEffect(()=>n.subscribe(g),[n,g]),b.useEffect(()=>{l.isTransitioning&&!l.flushSync&&h(new J7)},[l]),b.useEffect(()=>{if(c&&o&&n.window){let k=o,A=c.promise,N=n.window.document.startViewTransition(async()=>{f(()=>s(k)),await A});N.finished.finally(()=>{h(void 0),m(void 0),a(void 0),u({isTransitioning:!1})}),m(N)}},[f,o,c,n.window]),b.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,d,i.location,o]),b.useEffect(()=>{!l.isTransitioning&&y&&(a(y.state),u({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),v(void 0))},[l.isTransitioning,y]),b.useEffect(()=>{},[]);let T=b.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:k=>n.navigate(k),push:(k,A,N)=>n.navigate(k,{state:A,preventScrollReset:N==null?void 0:N.preventScrollReset}),replace:(k,A,N)=>n.navigate(k,{replace:!0,state:A,preventScrollReset:N==null?void 0:N.preventScrollReset})}),[n]),x=n.basename||"/",E=b.useMemo(()=>({router:n,navigator:T,static:!1,basename:x}),[n,T,x]);return b.createElement(b.Fragment,null,b.createElement(Bk.Provider,{value:E},b.createElement(Hk.Provider,{value:i},b.createElement(G7.Provider,{value:w.current},b.createElement(K7.Provider,{value:l},b.createElement($7,{basename:x,location:i.location,navigationType:i.historyAction,navigator:T,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?b.createElement(eM,{routes:n.routes,future:n.future,state:i}):e))))),null)}function eM(t){let{routes:e,future:n,state:r}=t;return P7(e,void 0,r,n)}var K_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(K_||(K_={}));var G_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(G_||(G_={}));function tM(){return _.jsxs("div",{className:"min-h-screen bg-main bg-fixed pt-32",children:[_.jsx("div",{className:"container mx-auto",children:_.jsxs("div",{className:"w-full px-4",children:[_.jsx("div",{className:""}),_.jsx("div",{className:"w-full lg:w-1/2 lg:mx-auto",children:_.jsxs("form",{children:[_.jsxs("div",{className:"px-4 mb-4",children:[_.jsx("label",{htmlFor:"",className:"font-semibold text-slate-100 mb-2 inline-block",children:"Name"}),_.jsx("input",{type:"text",name:"name",class:"w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow"})]}),_.jsxs("div",{className:"px-4 mb-4",children:[_.jsx("label",{htmlFor:"",className:"font-semibold text-slate-100 mb-2 inline-block",children:"Email"}),_.jsx("input",{type:"email",name:"email",required:!0,class:"w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow"})]}),_.jsxs("div",{className:"px-4 mb-4",children:[_.jsx("label",{htmlFor:"",className:"font-semibold text-slate-100 mb-2 inline-block",children:"Mesagge"}),_.jsx("textarea",{type:"text",name:"message",class:"w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow h-32"})]}),_.jsx("div",{className:"px-4",children:_.jsx("button",{type:"submit",className:"bg-transparent border border-primaryYellow text-primaryYellow rounded-md py-2 px-6 font-medium hover:bg-primaryYellow hover:text-white",children:"Send"})})]})})]})}),_.jsx(DL,{})]})}function If({id:t,imageUrl:e}){const n=async()=>{if(window.confirm("Are you sure you want to delete this article?"))try{await X3(YI(Ly,"Portfolio",t)),ye("Images deleted successfully",{type:"success"});const r=_o(Ro,e);await LC(r)}catch(r){ye("Error deleting article",{type:"error"}),console.log(r)}};return _.jsx("div",{children:_.jsx("button",{type:"submit",className:"bg-transparent border border-primaryYellow text-primaryYellow rounded-md py-2 px-6 font-medium hover:bg-primaryYellow hover:text-white",onClick:n,children:"Delete"})})}function nM(){const[t,e]=b.useState({category:"",image:"",createdAt:Je.now().toDate()}),[n,r]=b.useState(0),i=a=>{e({...t,[a.target.name]:a.target.value})},s=a=>{e({...t,image:a.target.files[0]})},o=()=>{if(!t.category||!t.image){alert("Isian heula bre");return}const a=_o(Ro,`/${t.category}/${t.image.name}`),l=DC(a,t.image);l.on("state_changed",u=>{const c=Math.round(u.bytesTransferred/u.totalBytes*100);r(c)},u=>{console.log(u)},()=>{e({category:"",image:""}),Sl(l.snapshot.ref).then(u=>{const c=QI(Ly,"Portfolio");J3(c,{category:t.category,imageUrl:u,createdAt:Je.now().toDate()}).then(()=>{ye("Collection added successfully",{type:"success"}),r(0),window.location.reload(!0)}).catch(h=>{ye("Error adding collection",{type:"error"})})})})};return _.jsx("div",{className:"",children:_.jsxs("form",{children:[_.jsxs("div",{className:"px-4 mb-4",children:[_.jsx("label",{htmlFor:"",className:"font-semibold text-slate-100 mb-2 inline-block",children:"Image"}),_.jsx("input",{type:"file",name:"image",accept:"image/*",onChange:a=>s(a),class:"w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow"})]}),_.jsxs("div",{className:"px-4 mb-4",children:[_.jsx("label",{htmlFor:"",className:"font-semibold text-slate-100 mb-2 inline-block",children:"Category"}),_.jsx("input",{name:"category",value:t.category,onChange:a=>i(a),class:"w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow"})]}),n===0?null:_.jsx("div",{className:"progress",children:_.jsx("div",{className:"progress-bar progress-bar-striped mt-2",style:{width:`${n}%`},children:`uploading image ${n}%`})}),_.jsx("div",{className:"px-4",children:_.jsx("button",{type:"button",onClick:o,className:"bg-transparent border border-primaryYellow text-primaryYellow rounded-md py-2 px-6 font-medium hover:bg-primaryYellow hover:text-white",children:"Upload"})})]})})}function rM(){const[t,e]=b.useState([]);b.useEffect(()=>{const s=QI(Ly,"Portfolio"),o=W3(s,q3("createdAt","desc"));Z3(o,a=>{const l=a.docs.map(u=>({id:u.id,...u.data()}));e(l),console.log(l)})},[]);const n=t.filter(s=>s.category==="scanes"),r=t.filter(s=>s.category==="sprites"),i=t.filter(s=>s.category==="nft");return _.jsx("div",{className:"min-h-screen bg-main bg-fixed pt-32",children:_.jsx("div",{className:"container mx-auto",children:_.jsxs("div",{className:"w-full px-4",children:[_.jsxs("div",{className:"w-full lg:w-1/2 lg:mx-auto text-center mb-16",children:[_.jsx("h1",{className:"text-white text-xl md:text-2xl mb-4",children:"Upload"}),_.jsx(nM,{})]}),_.jsxs("div",{className:"w-full mx-auto mb-16",children:[_.jsx("h1",{className:"text-white text-xl md:text-2xl mb-4",children:"Scanes"}),_.jsx("div",{className:"flex flex-wrap justify-center item-center text-slate-100",children:n.map(({imageUrl:s,category:o,id:a})=>_.jsxs("div",{className:"md:w-1/2 lg:w-1/3 p-2",children:[_.jsx("div",{className:"flex relative mb-2",children:_.jsx("img",{src:s,alt:"",className:"inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"})}),_.jsx(If,{id:a,imageUrl:s})]}))})]}),_.jsxs("div",{className:"w-full mx-auto mb-16",children:[_.jsx("h1",{className:"text-white text-xl md:text-2xl mb-4",children:"Sprites"}),_.jsx("div",{className:"flex flex-wrap justify-center item-center text-slate-100",children:r.map(({imageUrl:s,category:o,id:a})=>_.jsxs("div",{className:"md:w-1/2 lg:w-1/3 p-2",children:[_.jsx("div",{className:"flex relative mb-2",children:_.jsx("img",{src:s,alt:"",className:"inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"})}),_.jsx(If,{id:a,imageUrl:s})]}))})]}),_.jsxs("div",{className:"w-full mx-auto",children:[_.jsx("h1",{className:"text-white text-xl md:text-2xl mb-4",children:"Nft"}),_.jsx("div",{className:"flex flex-wrap justify-center item-center text-slate-100",children:i.map(({imageUrl:s,category:o,id:a})=>_.jsxs("div",{className:"md:w-1/2 lg:w-1/3 p-2",children:[_.jsx("div",{className:"flex relative mb-2",children:_.jsx("img",{src:s,alt:"",className:"inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"})}),_.jsx(If,{id:a,imageUrl:s})]}))})]})]})})})}const iM=H7([{path:"/nzib_portofolio",element:_.jsx(LL,{})},{path:"/nzib_portofolio/collection",element:_.jsx(tM,{})},{path:"/nzib_portofolio/admin",element:_.jsx(rM,{})}]);Sf.createRoot(document.getElementById("root")).render(_.jsx(ie.StrictMode,{children:_.jsx(Z7,{router:iM})}));
