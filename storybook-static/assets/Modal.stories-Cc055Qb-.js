import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as c,R as tt}from"./iframe-DGcxGepY.js";import{u as nt,a as pe,P as k,b as rt,c as ce,d as ot,e as M,f as at,D as it,g as ct}from"./index-D_gOxvHA.js";import{u as $,c as lt}from"./index-LhYNraeY.js";import{b as I}from"./Button-DHCS4zdB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BIF4d0TV.js";import"./index-BgaelG20.js";import"./Icon-DQ-tARWa.js";import"./clsx-B-dksMZM.js";var st=tt[" useId ".trim().toString()]||(()=>{}),ut=0;function Q(e){const[t,n]=c.useState(st());return nt(()=>{n(r=>r??String(ut++))},[e]),e||(t?`radix-${t}`:"")}var J="focusScope.autoFocusOnMount",ee="focusScope.autoFocusOnUnmount",ve={bubbles:!1,cancelable:!0},dt="FocusScope",Ae=c.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...u}=e,[i,v]=c.useState(null),p=pe(o),h=pe(a),d=c.useRef(null),g=$(t,s=>v(s)),y=c.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.useEffect(()=>{if(r){let s=function(x){if(y.paused||!i)return;const E=x.target;i.contains(E)?d.current=E:N(d.current,{select:!0})},f=function(x){if(y.paused||!i)return;const E=x.relatedTarget;E!==null&&(i.contains(E)||N(d.current,{select:!0}))},m=function(x){if(document.activeElement===document.body)for(const S of x)S.removedNodes.length>0&&N(i)};document.addEventListener("focusin",s),document.addEventListener("focusout",f);const b=new MutationObserver(m);return i&&b.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",s),document.removeEventListener("focusout",f),b.disconnect()}}},[r,i,y.paused]),c.useEffect(()=>{if(i){he.add(y);const s=document.activeElement;if(!i.contains(s)){const m=new CustomEvent(J,ve);i.addEventListener(J,p),i.dispatchEvent(m),m.defaultPrevented||(ft(gt(Pe(i)),{select:!0}),document.activeElement===s&&N(i))}return()=>{i.removeEventListener(J,p),setTimeout(()=>{const m=new CustomEvent(ee,ve);i.addEventListener(ee,h),i.dispatchEvent(m),m.defaultPrevented||N(s??document.body,{select:!0}),i.removeEventListener(ee,h),he.remove(y)},0)}}},[i,p,h,y]);const C=c.useCallback(s=>{if(!n&&!r||y.paused)return;const f=s.key==="Tab"&&!s.altKey&&!s.ctrlKey&&!s.metaKey,m=document.activeElement;if(f&&m){const b=s.currentTarget,[x,E]=pt(b);x&&E?!s.shiftKey&&m===E?(s.preventDefault(),n&&N(x,{select:!0})):s.shiftKey&&m===x&&(s.preventDefault(),n&&N(E,{select:!0})):m===b&&s.preventDefault()}},[n,r,y.paused]);return l.jsx(k.div,{tabIndex:-1,...u,ref:g,onKeyDown:C})});Ae.displayName=dt;function ft(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(N(r,{select:t}),document.activeElement!==n)return}function pt(e){const t=Pe(e),n=me(t,e),r=me(t.reverse(),e);return[n,r]}function Pe(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function me(e,t){for(const n of e)if(!vt(n,{upTo:t}))return n}function vt(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function mt(e){return e instanceof HTMLInputElement&&"select"in e}function N(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&mt(e)&&t&&e.select()}}var he=ht();function ht(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ge(e,t),e.unshift(t)},remove(t){var n;e=ge(e,t),(n=e[0])==null||n.resume()}}}function ge(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function gt(e){return e.filter(t=>t.tagName!=="A")}var te=0;function yt(){c.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??ye()),document.body.insertAdjacentElement("beforeend",e[1]??ye()),te++,()=>{te===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),te--}},[])}function ye(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var R=function(){return R=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},R.apply(this,arguments)};function je(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function bt(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var H="right-scroll-bar-position",G="width-before-scroll-bar",xt="with-scroll-bars-hidden",Et="--removed-body-scroll-bar-size";function ne(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function St(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Ct=typeof window<"u"?c.useLayoutEffect:c.useEffect,be=new WeakMap;function wt(e,t){var n=St(null,function(r){return e.forEach(function(o){return ne(o,r)})});return Ct(function(){var r=be.get(n);if(r){var o=new Set(r),a=new Set(e),u=n.current;o.forEach(function(i){a.has(i)||ne(i,null)}),a.forEach(function(i){o.has(i)||ne(i,u)})}be.set(n,e)},[e]),n}function Rt(e){return e}function Ot(e,t){t===void 0&&(t=Rt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var u=t(a,r);return n.push(u),function(){n=n.filter(function(i){return i!==u})}},assignSyncMedium:function(a){for(r=!0;n.length;){var u=n;n=[],u.forEach(a)}n={push:function(i){return a(i)},filter:function(){return n}}},assignMedium:function(a){r=!0;var u=[];if(n.length){var i=n;n=[],i.forEach(a),u=n}var v=function(){var h=u;u=[],h.forEach(a)},p=function(){return Promise.resolve().then(v)};p(),n={push:function(h){u.push(h),p()},filter:function(h){return u=u.filter(h),n}}}};return o}function Dt(e){e===void 0&&(e={});var t=Ot(null);return t.options=R({async:!0,ssr:!1},e),t}var ke=function(e){var t=e.sideCar,n=je(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return c.createElement(r,R({},n))};ke.isSideCarExport=!0;function Nt(e,t){return e.useMedium(t),ke}var Me=Dt(),re=function(){},Y=c.forwardRef(function(e,t){var n=c.useRef(null),r=c.useState({onScrollCapture:re,onWheelCapture:re,onTouchMoveCapture:re}),o=r[0],a=r[1],u=e.forwardProps,i=e.children,v=e.className,p=e.removeScrollBar,h=e.enabled,d=e.shards,g=e.sideCar,y=e.noRelative,C=e.noIsolation,s=e.inert,f=e.allowPinchZoom,m=e.as,b=m===void 0?"div":m,x=e.gapMode,E=je(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=g,O=wt([n,t]),D=R(R({},E),o);return c.createElement(c.Fragment,null,h&&c.createElement(S,{sideCar:Me,removeScrollBar:p,shards:d,noRelative:y,noIsolation:C,inert:s,setCallbacks:a,allowPinchZoom:!!f,lockRef:n,gapMode:x}),u?c.cloneElement(c.Children.only(i),R(R({},D),{ref:O})):c.createElement(b,R({},D,{className:v,ref:O}),i))});Y.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Y.classNames={fullWidth:G,zeroRight:H};var _t=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Tt(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=_t();return t&&e.setAttribute("nonce",t),e}function At(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Pt(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var jt=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Tt())&&(At(t,n),Pt(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},kt=function(){var e=jt();return function(t,n){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Ie=function(){var e=kt(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},Mt={left:0,top:0,right:0,gap:0},oe=function(e){return parseInt(e||"",10)||0},It=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[oe(n),oe(r),oe(o)]},Ft=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Mt;var t=It(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Bt=Ie(),j="data-scroll-locked",Lt=function(e,t,n,r){var o=e.left,a=e.top,u=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(xt,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(j,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(H,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(G,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(H," .").concat(H,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(G," .").concat(G,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(j,`] {
    `).concat(Et,": ").concat(i,`px;
  }
`)},xe=function(){var e=parseInt(document.body.getAttribute(j)||"0",10);return isFinite(e)?e:0},Wt=function(){c.useEffect(function(){return document.body.setAttribute(j,(xe()+1).toString()),function(){var e=xe()-1;e<=0?document.body.removeAttribute(j):document.body.setAttribute(j,e.toString())}},[])},Vt=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Wt();var a=c.useMemo(function(){return Ft(o)},[o]);return c.createElement(Bt,{styles:Lt(a,!t,o,n?"":"!important")})},ie=!1;if(typeof window<"u")try{var B=Object.defineProperty({},"passive",{get:function(){return ie=!0,!0}});window.addEventListener("test",B,B),window.removeEventListener("test",B,B)}catch{ie=!1}var T=ie?{passive:!1}:!1,zt=function(e){return e.tagName==="TEXTAREA"},Fe=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!zt(e)&&n[t]==="visible")},Ut=function(e){return Fe(e,"overflowY")},Ht=function(e){return Fe(e,"overflowX")},Ee=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Be(e,r);if(o){var a=Le(e,r),u=a[1],i=a[2];if(u>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Gt=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Kt=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Be=function(e,t){return e==="v"?Ut(t):Ht(t)},Le=function(e,t){return e==="v"?Gt(t):Kt(t)},$t=function(e,t){return e==="h"&&t==="rtl"?-1:1},Yt=function(e,t,n,r,o){var a=$t(e,window.getComputedStyle(t).direction),u=a*r,i=n.target,v=t.contains(i),p=!1,h=u>0,d=0,g=0;do{if(!i)break;var y=Le(e,i),C=y[0],s=y[1],f=y[2],m=s-f-a*C;(C||m)&&Be(e,i)&&(d+=m,g+=C);var b=i.parentNode;i=b&&b.nodeType===Node.DOCUMENT_FRAGMENT_NODE?b.host:b}while(!v&&i!==document.body||v&&(t.contains(i)||t===i));return(h&&Math.abs(d)<1||!h&&Math.abs(g)<1)&&(p=!0),p},L=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Se=function(e){return[e.deltaX,e.deltaY]},Ce=function(e){return e&&"current"in e?e.current:e},Xt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},qt=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Zt=0,A=[];function Qt(e){var t=c.useRef([]),n=c.useRef([0,0]),r=c.useRef(),o=c.useState(Zt++)[0],a=c.useState(Ie)[0],u=c.useRef(e);c.useEffect(function(){u.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var s=bt([e.lockRef.current],(e.shards||[]).map(Ce),!0).filter(Boolean);return s.forEach(function(f){return f.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),s.forEach(function(f){return f.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=c.useCallback(function(s,f){if("touches"in s&&s.touches.length===2||s.type==="wheel"&&s.ctrlKey)return!u.current.allowPinchZoom;var m=L(s),b=n.current,x="deltaX"in s?s.deltaX:b[0]-m[0],E="deltaY"in s?s.deltaY:b[1]-m[1],S,O=s.target,D=Math.abs(x)>Math.abs(E)?"h":"v";if("touches"in s&&D==="h"&&O.type==="range")return!1;var de=window.getSelection(),Z=de&&de.anchorNode,et=Z?Z===O||Z.contains(O):!1;if(et)return!1;var F=Ee(D,O);if(!F)return!0;if(F?S=D:(S=D==="v"?"h":"v",F=Ee(D,O)),!F)return!1;if(!r.current&&"changedTouches"in s&&(x||E)&&(r.current=S),!S)return!0;var fe=r.current||S;return Yt(fe,f,s,fe==="h"?x:E)},[]),v=c.useCallback(function(s){var f=s;if(!(!A.length||A[A.length-1]!==a)){var m="deltaY"in f?Se(f):L(f),b=t.current.filter(function(S){return S.name===f.type&&(S.target===f.target||f.target===S.shadowParent)&&Xt(S.delta,m)})[0];if(b&&b.should){f.cancelable&&f.preventDefault();return}if(!b){var x=(u.current.shards||[]).map(Ce).filter(Boolean).filter(function(S){return S.contains(f.target)}),E=x.length>0?i(f,x[0]):!u.current.noIsolation;E&&f.cancelable&&f.preventDefault()}}},[]),p=c.useCallback(function(s,f,m,b){var x={name:s,delta:f,target:m,should:b,shadowParent:Jt(m)};t.current.push(x),setTimeout(function(){t.current=t.current.filter(function(E){return E!==x})},1)},[]),h=c.useCallback(function(s){n.current=L(s),r.current=void 0},[]),d=c.useCallback(function(s){p(s.type,Se(s),s.target,i(s,e.lockRef.current))},[]),g=c.useCallback(function(s){p(s.type,L(s),s.target,i(s,e.lockRef.current))},[]);c.useEffect(function(){return A.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:g}),document.addEventListener("wheel",v,T),document.addEventListener("touchmove",v,T),document.addEventListener("touchstart",h,T),function(){A=A.filter(function(s){return s!==a}),document.removeEventListener("wheel",v,T),document.removeEventListener("touchmove",v,T),document.removeEventListener("touchstart",h,T)}},[]);var y=e.removeScrollBar,C=e.inert;return c.createElement(c.Fragment,null,C?c.createElement(a,{styles:qt(o)}):null,y?c.createElement(Vt,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Jt(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const en=Nt(Me,Qt);var We=c.forwardRef(function(e,t){return c.createElement(Y,R({},e,{ref:t,sideCar:en}))});We.classNames=Y.classNames;var tn=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},P=new WeakMap,W=new WeakMap,V={},ae=0,Ve=function(e){return e&&(e.host||Ve(e.parentNode))},nn=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Ve(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},rn=function(e,t,n,r){var o=nn(t,Array.isArray(e)?e:[e]);V[n]||(V[n]=new WeakMap);var a=V[n],u=[],i=new Set,v=new Set(o),p=function(d){!d||i.has(d)||(i.add(d),p(d.parentNode))};o.forEach(p);var h=function(d){!d||v.has(d)||Array.prototype.forEach.call(d.children,function(g){if(i.has(g))h(g);else try{var y=g.getAttribute(r),C=y!==null&&y!=="false",s=(P.get(g)||0)+1,f=(a.get(g)||0)+1;P.set(g,s),a.set(g,f),u.push(g),s===1&&C&&W.set(g,!0),f===1&&g.setAttribute(n,"true"),C||g.setAttribute(r,"true")}catch(m){console.error("aria-hidden: cannot operate on ",g,m)}})};return h(t),i.clear(),ae++,function(){u.forEach(function(d){var g=P.get(d)-1,y=a.get(d)-1;P.set(d,g),a.set(d,y),g||(W.has(d)||d.removeAttribute(r),W.delete(d)),y||d.removeAttribute(n)}),ae--,ae||(P=new WeakMap,P=new WeakMap,W=new WeakMap,V={})}},on=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=tn(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live], script"))),rn(r,o,n,"aria-hidden")):function(){return null}};function an(e){const t=cn(e),n=c.forwardRef((r,o)=>{const{children:a,...u}=r,i=c.Children.toArray(a),v=i.find(sn);if(v){const p=v.props.children,h=i.map(d=>d===v?c.Children.count(p)>1?c.Children.only(null):c.isValidElement(p)?p.props.children:null:d);return l.jsx(t,{...u,ref:o,children:c.isValidElement(p)?c.cloneElement(p,void 0,h):null})}return l.jsx(t,{...u,ref:o,children:a})});return n.displayName=`${e}.Slot`,n}function cn(e){const t=c.forwardRef((n,r)=>{const{children:o,...a}=n;if(c.isValidElement(o)){const u=dn(o),i=un(a,o.props);return o.type!==c.Fragment&&(i.ref=r?lt(r,u):u),c.cloneElement(o,i)}return c.Children.count(o)>1?c.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var ln=Symbol("radix.slottable");function sn(e){return c.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ln}function un(e,t){const n={...t};for(const r in t){const o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...i)=>{const v=a(...i);return o(...i),v}:o&&(n[r]=o):r==="style"?n[r]={...o,...a}:r==="className"&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}function dn(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var X="Dialog",[ze]=at(X),[fn,w]=ze(X),Ue=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:u=!0}=e,i=c.useRef(null),v=c.useRef(null),[p,h]=rt({prop:r,defaultProp:o??!1,onChange:a,caller:X});return l.jsx(fn,{scope:t,triggerRef:i,contentRef:v,contentId:Q(),titleId:Q(),descriptionId:Q(),open:p,onOpenChange:h,onOpenToggle:c.useCallback(()=>h(d=>!d),[h]),modal:u,children:n})};Ue.displayName=X;var He="DialogTrigger",pn=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=w(He,n),a=$(t,o.triggerRef);return l.jsx(k.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":ue(o.open),...r,ref:a,onClick:M(e.onClick,o.onOpenToggle)})});pn.displayName=He;var le="DialogPortal",[vn,Ge]=ze(le,{forceMount:void 0}),Ke=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=w(le,t);return l.jsx(vn,{scope:t,forceMount:n,children:c.Children.map(r,u=>l.jsx(ce,{present:n||a.open,children:l.jsx(ot,{asChild:!0,container:o,children:u})}))})};Ke.displayName=le;var K="DialogOverlay",$e=c.forwardRef((e,t)=>{const n=Ge(K,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=w(K,e.__scopeDialog);return a.modal?l.jsx(ce,{present:r||a.open,children:l.jsx(hn,{...o,ref:t})}):null});$e.displayName=K;var mn=an("DialogOverlay.RemoveScroll"),hn=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=w(K,n);return l.jsx(We,{as:mn,allowPinchZoom:!0,shards:[o.contentRef],children:l.jsx(k.div,{"data-state":ue(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),_="DialogContent",Ye=c.forwardRef((e,t)=>{const n=Ge(_,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=w(_,e.__scopeDialog);return l.jsx(ce,{present:r||a.open,children:a.modal?l.jsx(gn,{...o,ref:t}):l.jsx(yn,{...o,ref:t})})});Ye.displayName=_;var gn=c.forwardRef((e,t)=>{const n=w(_,e.__scopeDialog),r=c.useRef(null),o=$(t,n.contentRef,r);return c.useEffect(()=>{const a=r.current;if(a)return on(a)},[]),l.jsx(Xe,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:M(e.onCloseAutoFocus,a=>{var u;a.preventDefault(),(u=n.triggerRef.current)==null||u.focus()}),onPointerDownOutside:M(e.onPointerDownOutside,a=>{const u=a.detail.originalEvent,i=u.button===0&&u.ctrlKey===!0;(u.button===2||i)&&a.preventDefault()}),onFocusOutside:M(e.onFocusOutside,a=>a.preventDefault())})}),yn=c.forwardRef((e,t)=>{const n=w(_,e.__scopeDialog),r=c.useRef(!1),o=c.useRef(!1);return l.jsx(Xe,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var u,i;(u=e.onCloseAutoFocus)==null||u.call(e,a),a.defaultPrevented||(r.current||(i=n.triggerRef.current)==null||i.focus(),a.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:a=>{var v,p;(v=e.onInteractOutside)==null||v.call(e,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const u=a.target;((p=n.triggerRef.current)==null?void 0:p.contains(u))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),Xe=c.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...u}=e,i=w(_,n),v=c.useRef(null),p=$(t,v);return yt(),l.jsxs(l.Fragment,{children:[l.jsx(Ae,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:l.jsx(it,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":ue(i.open),...u,ref:p,onDismiss:()=>i.onOpenChange(!1)})}),l.jsxs(l.Fragment,{children:[l.jsx(Sn,{titleId:i.titleId}),l.jsx(wn,{contentRef:v,descriptionId:i.descriptionId})]})]})}),se="DialogTitle",bn=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=w(se,n);return l.jsx(k.h2,{id:o.titleId,...r,ref:t})});bn.displayName=se;var qe="DialogDescription",xn=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=w(qe,n);return l.jsx(k.p,{id:o.descriptionId,...r,ref:t})});xn.displayName=qe;var Ze="DialogClose",En=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=w(Ze,n);return l.jsx(k.button,{type:"button",...r,ref:t,onClick:M(e.onClick,()=>o.onOpenChange(!1))})});En.displayName=Ze;function ue(e){return e?"open":"closed"}var Qe="DialogTitleWarning",[Vn,Je]=ct(Qe,{contentName:_,titleName:se,docsSlug:"dialog"}),Sn=({titleId:e})=>{const t=Je(Qe),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return c.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},Cn="DialogDescriptionWarning",wn=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Je(Cn).contentName}}.`;return c.useEffect(()=>{var a;const o=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},Rn=Ue,On=Ke,Dn=$e,Nn=Ye;const _n="_modal__overlay_xl7yu_5",Tn="_modal__content_xl7yu_17",we={modal__overlay:_n,modal__content:Tn};function q({open:e,onOpenChange:t,children:n}){return l.jsx(Rn,{open:e,onOpenChange:t,children:l.jsxs(On,{children:[l.jsx(Dn,{className:we.modal__overlay}),l.jsx(Nn,{className:we.modal__content,children:n})]})})}q.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const zn={component:q,tags:["autodocs"],decorators:[e=>l.jsx("div",{style:{padding:"24px"},children:l.jsx(e,{})})]},z={render:function(){const[t,n]=c.useState(!1);return l.jsxs(l.Fragment,{children:[l.jsx(I,{onClick:()=>n(!0),children:"Open Modal"}),l.jsxs(q,{open:t,onOpenChange:n,children:[l.jsx("h2",{style:{marginBottom:"16px",fontSize:"18px"},children:"Modal Title"}),l.jsx("p",{style:{marginBottom:"24px",color:"var(--color-text-secondary)"},children:"This is the modal content. Click outside or press Escape to close."}),l.jsx(I,{variant:"secondary",onClick:()=>n(!1),children:"Close"})]})]})}},U={render:function(){const[t,n]=c.useState(!1);return l.jsxs(l.Fragment,{children:[l.jsx(I,{iconLeft:"plus-circle",onClick:()=>n(!0),children:"Добавить"}),l.jsxs(q,{open:t,onOpenChange:n,children:[l.jsx("h2",{style:{marginBottom:"20px",fontSize:"18px"},children:"Добавить товар"}),l.jsxs("form",{onSubmit:r=>{r.preventDefault(),n(!1)},style:{display:"flex",flexDirection:"column",gap:"16px",minWidth:"300px"},children:[l.jsxs("label",{children:[l.jsx("span",{style:{display:"block",marginBottom:"4px",fontSize:"14px"},children:"Наименование"}),l.jsx("input",{type:"text",placeholder:"Введите наименование",style:{width:"100%",padding:"8px 12px",border:"1px solid var(--color-border-light)",borderRadius:"6px"}})]}),l.jsxs("label",{children:[l.jsx("span",{style:{display:"block",marginBottom:"4px",fontSize:"14px"},children:"Цена"}),l.jsx("input",{type:"number",placeholder:"0",style:{width:"100%",padding:"8px 12px",border:"1px solid var(--color-border-light)",borderRadius:"6px"}})]}),l.jsxs("label",{children:[l.jsx("span",{style:{display:"block",marginBottom:"4px",fontSize:"14px"},children:"Вендор"}),l.jsx("input",{type:"text",placeholder:"Введите вендора",style:{width:"100%",padding:"8px 12px",border:"1px solid var(--color-border-light)",borderRadius:"6px"}})]}),l.jsxs("label",{children:[l.jsx("span",{style:{display:"block",marginBottom:"4px",fontSize:"14px"},children:"Артикул"}),l.jsx("input",{type:"text",placeholder:"Введите артикул",style:{width:"100%",padding:"8px 12px",border:"1px solid var(--color-border-light)",borderRadius:"6px"}})]}),l.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[l.jsx(I,{type:"submit",children:"Создать"}),l.jsx(I,{variant:"secondary",type:"button",onClick:()=>n(!1),children:"Отмена"})]})]})]})]})}};var Re,Oe,De;z.parameters={...z.parameters,docs:{...(Re=z.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: function DefaultStory() {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Modal</Button>\r
        <Modal open={open} onOpenChange={setOpen}>\r
          <h2 style={{
          marginBottom: '16px',
          fontSize: '18px'
        }}>Modal Title</h2>\r
          <p style={{
          marginBottom: '24px',
          color: 'var(--color-text-secondary)'
        }}>\r
            This is the modal content. Click outside or press Escape to close.\r
          </p>\r
          <Button variant="secondary" onClick={() => setOpen(false)}>\r
            Close\r
          </Button>\r
        </Modal>\r
      </>;
  }
}`,...(De=(Oe=z.parameters)==null?void 0:Oe.docs)==null?void 0:De.source}}};var Ne,_e,Te;U.parameters={...U.parameters,docs:{...(Ne=U.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: function FormContentStory() {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button iconLeft="plus-circle" onClick={() => setOpen(true)}>\r
          Добавить\r
        </Button>\r
        <Modal open={open} onOpenChange={setOpen}>\r
          <h2 style={{
          marginBottom: '20px',
          fontSize: '18px'
        }}>Добавить товар</h2>\r
          <form onSubmit={e => {
          e.preventDefault();
          setOpen(false);
        }} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          minWidth: '300px'
        }}>\r
            <label>\r
              <span style={{
              display: 'block',
              marginBottom: '4px',
              fontSize: '14px'
            }}>\r
                Наименование\r
              </span>\r
              <input type="text" placeholder="Введите наименование" style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid var(--color-border-light)',
              borderRadius: '6px'
            }} />\r
            </label>\r
            <label>\r
              <span style={{
              display: 'block',
              marginBottom: '4px',
              fontSize: '14px'
            }}>\r
                Цена\r
              </span>\r
              <input type="number" placeholder="0" style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid var(--color-border-light)',
              borderRadius: '6px'
            }} />\r
            </label>\r
            <label>\r
              <span style={{
              display: 'block',
              marginBottom: '4px',
              fontSize: '14px'
            }}>\r
                Вендор\r
              </span>\r
              <input type="text" placeholder="Введите вендора" style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid var(--color-border-light)',
              borderRadius: '6px'
            }} />\r
            </label>\r
            <label>\r
              <span style={{
              display: 'block',
              marginBottom: '4px',
              fontSize: '14px'
            }}>\r
                Артикул\r
              </span>\r
              <input type="text" placeholder="Введите артикул" style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid var(--color-border-light)',
              borderRadius: '6px'
            }} />\r
            </label>\r
            <div style={{
            display: 'flex',
            gap: '12px',
            marginTop: '8px'
          }}>\r
              <Button type="submit">Создать</Button>\r
              <Button variant="secondary" type="button" onClick={() => setOpen(false)}>\r
                Отмена\r
              </Button>\r
            </div>\r
          </form>\r
        </Modal>\r
      </>;
  }
}`,...(Te=(_e=U.parameters)==null?void 0:_e.docs)==null?void 0:Te.source}}};const Un=["Default","FormContent"];export{z as Default,U as FormContent,Un as __namedExportsOrder,zn as default};
