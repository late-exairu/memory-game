var _=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Dt=_((f,d)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();const T=()=>{const e=document.querySelector("#grid"),t=e.clientWidth,r=t-parseInt(window.getComputedStyle(e).paddingTop,10)*2;return e.style.height=r+"px",{gridWidth:t,gridHeight:r}};var X=typeof global=="object"&&global&&global.Object===Object&&global;const P=X;var Y=typeof self=="object"&&self&&self.Object===Object&&self,D=P||Y||Function("return this")();const F=D;var k=F.Symbol;const p=k;var V=Object.prototype,J=V.hasOwnProperty,Q=V.toString,l=p?p.toStringTag:void 0;function Z(e){var t=J.call(e,l),r=e[l];try{e[l]=void 0;var n=!0}catch{}var o=Q.call(e);return n&&(t?e[l]=r:delete e[l]),o}var z=Object.prototype,ee=z.toString;function te(e){return ee.call(e)}var re="[object Null]",ne="[object Undefined]",I=p?p.toStringTag:void 0;function y(e){return e==null?e===void 0?ne:re:I&&I in Object(e)?Z(e):te(e)}function m(e){return e!=null&&typeof e=="object"}var oe="[object Symbol]";function ie(e){return typeof e=="symbol"||m(e)&&y(e)==oe}function ce(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var ae=Array.isArray;const q=ae;var se=/\s/;function ue(e){for(var t=e.length;t--&&se.test(e.charAt(t)););return t}var fe=/^\s+/;function de(e){return e&&e.slice(0,ue(e)+1).replace(fe,"")}function b(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var S=NaN,le=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,pe=/^0o[0-7]+$/i,be=parseInt;function ye(e){if(typeof e=="number")return e;if(ie(e))return S;if(b(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=b(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=de(e);var r=ge.test(e);return r||pe.test(e)?be(e.slice(2),r?2:8):le.test(e)?S:+e}var O=1/0,me=17976931348623157e292;function j(e){if(!e)return e===0?e:0;if(e=ye(e),e===O||e===-O){var t=e<0?-1:1;return t*me}return e===e?e:0}var he="[object AsyncFunction]",Te="[object Function]",je="[object GeneratorFunction]",ve="[object Proxy]";function Ae(e){if(!b(e))return!1;var t=y(e);return t==Te||t==je||t==he||t==ve}function Ie(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}var Se=9007199254740991,Oe=/^(?:0|[1-9]\d*)$/;function G(e,t){var r=typeof e;return t=t??Se,!!t&&(r=="number"||r!="symbol"&&Oe.test(e))&&e>-1&&e%1==0&&e<t}function $e(e,t){return e===t||e!==e&&t!==t}var Ee=9007199254740991;function N(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ee}function B(e){return e!=null&&N(e.length)&&!Ae(e)}function xe(e,t,r){if(!b(r))return!1;var n=typeof t;return(n=="number"?B(r)&&G(t,r.length):n=="string"&&t in r)?$e(r[t],e):!1}var Le=Object.prototype;function we(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Le;return e===r}function Me(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Pe="[object Arguments]";function $(e){return m(e)&&y(e)==Pe}var C=Object.prototype,Fe=C.hasOwnProperty,Ve=C.propertyIsEnumerable,qe=$(function(){return arguments}())?$:function(e){return m(e)&&Fe.call(e,"callee")&&!Ve.call(e,"callee")};const Ge=qe;function Ne(){return!1}var R=typeof f=="object"&&f&&!f.nodeType&&f,E=R&&typeof d=="object"&&d&&!d.nodeType&&d,Be=E&&E.exports===R,x=Be?F.Buffer:void 0,Ce=x?x.isBuffer:void 0,Re=Ce||Ne;const Ue=Re;var He="[object Arguments]",We="[object Array]",Ke="[object Boolean]",_e="[object Date]",Xe="[object Error]",Ye="[object Function]",De="[object Map]",ke="[object Number]",Je="[object Object]",Qe="[object RegExp]",Ze="[object Set]",ze="[object String]",et="[object WeakMap]",tt="[object ArrayBuffer]",rt="[object DataView]",nt="[object Float32Array]",ot="[object Float64Array]",it="[object Int8Array]",ct="[object Int16Array]",at="[object Int32Array]",st="[object Uint8Array]",ut="[object Uint8ClampedArray]",ft="[object Uint16Array]",dt="[object Uint32Array]",i={};i[nt]=i[ot]=i[it]=i[ct]=i[at]=i[st]=i[ut]=i[ft]=i[dt]=!0;i[He]=i[We]=i[tt]=i[Ke]=i[rt]=i[_e]=i[Xe]=i[Ye]=i[De]=i[ke]=i[Je]=i[Qe]=i[Ze]=i[ze]=i[et]=!1;function lt(e){return m(e)&&N(e.length)&&!!i[y(e)]}function gt(e){return function(t){return e(t)}}var U=typeof f=="object"&&f&&!f.nodeType&&f,g=U&&typeof d=="object"&&d&&!d.nodeType&&d,pt=g&&g.exports===U,v=pt&&P.process,bt=function(){try{var e=g&&g.require&&g.require("util").types;return e||v&&v.binding&&v.binding("util")}catch{}}();const L=bt;var w=L&&L.isTypedArray,yt=w?gt(w):lt;const mt=yt;var ht=Object.prototype,Tt=ht.hasOwnProperty;function jt(e,t){var r=q(e),n=!r&&Ge(e),o=!r&&!n&&Ue(e),c=!r&&!n&&!o&&mt(e),a=r||n||o||c,h=a?Me(e.length,String):[],K=h.length;for(var u in e)(t||Tt.call(e,u))&&!(a&&(u=="length"||o&&(u=="offset"||u=="parent")||c&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||G(u,K)))&&h.push(u);return h}function vt(e,t){return function(r){return e(t(r))}}var At=vt(Object.keys,Object);const It=At;var St=Object.prototype,Ot=St.hasOwnProperty;function $t(e){if(!we(e))return It(e);var t=[];for(var r in Object(e))Ot.call(e,r)&&r!="constructor"&&t.push(r);return t}function Et(e){return B(e)?jt(e):$t(e)}function xt(e,t){return ce(t,function(r){return e[r]})}function Lt(e){return e==null?[]:xt(e,Et(e))}var wt=Math.floor,Mt=Math.random;function Pt(e,t){return e+wt(Mt()*(t-e+1))}var Ft=Math.ceil,Vt=Math.max;function qt(e,t,r,n){for(var o=-1,c=Vt(Ft((t-e)/(r||1)),0),a=Array(c);c--;)a[n?c:++o]=e,e+=r;return a}function Gt(e){return function(t,r,n){return n&&typeof n!="number"&&xe(t,r,n)&&(r=n=void 0),t=j(t),r===void 0?(r=t,t=0):r=j(r),n=n===void 0?t<r?1:-1:j(n),qt(t,r,n,e)}}var Nt=Gt();const M=Nt;function H(e,t){var r=-1,n=e.length,o=n-1;for(t=t===void 0?n:t;++r<t;){var c=Pt(r,o),a=e[c];e[c]=e[r],e[r]=a}return e.length=t,e}function Bt(e){return H(Ie(e))}function Ct(e){return H(Lt(e))}function Rt(e){var t=q(e)?Bt:Ct;return t(e)}const s={firstItemValue:null,secondItemValue:null};function Ut(e){const t=document.querySelector("#game"),r=e.currentTarget;r.classList.contains("flipped")||(s.firstItemValue===null?(s.firstItemValue=r.textContent,r.classList.add("flipped")):s.secondItemValue===null&&(s.secondItemValue=r.textContent,r.classList.add("flipped"),Wt()),s.firstItemValue===null&&s.secondItemValue===null&&setTimeout(()=>{Ht(),A()},1e3),Kt()&&(t.insertAdjacentHTML("beforeend",`<div>
         <p>You Win!</p>
         <button id="btn-restart">Restart Game</button>
       </div>`),document.querySelector("#btn-restart").addEventListener("click",W)))}const Ht=()=>{document.querySelectorAll("#grid > div").forEach(t=>{t.classList.remove("flipped")})},A=()=>{s.firstItemValue=null,s.secondItemValue=null},Wt=()=>{const e=document.querySelectorAll(".flipped");s.firstItemValue===s.secondItemValue?(console.log("Match!"),e.forEach(t=>{t.classList.add("matched")}),A()):(console.log("No Match!"),A())},Kt=()=>{if(document.querySelectorAll(".matched").length===16)return console.log("You Win!"),!0};function _t(){const e=document.querySelector("#grid"),t=Rt([...M(8),...M(8)]);e.innerHTML="",t.forEach(n=>{e.insertAdjacentHTML("beforeend",`<div class="grid-item hidden">
        <div class="front-face"></div>
        <div class="back-face">${n}</div>
      </div>
    `)}),document.querySelectorAll("#grid .grid-item").forEach((n,o)=>{setTimeout(()=>{n.classList.remove("hidden"),n.addEventListener("click",Ut)},o*50)})}function Xt(){const e=document.querySelector("#btn-start"),t=document.querySelector("#intro"),r=document.querySelector("#grid");e.addEventListener("click",()=>{console.log("Game Started!"),t.classList.add("hidden"),r.animate([{height:"0",opacity:"0"},{height:`${T().gridHeight} px`,opacity:"1"}],{duration:300}),T(),_t(),window.addEventListener("resize",T)})}function W(){Yt(),Xt()}const Yt=()=>{document.querySelector("#app").innerHTML=`
  <div id="game">
    <div id="intro">
      <h1>Memory Game</h1>
      
      <button id="btn-start">
        Start Game
      </button>
    </div>
    <div id="grid"></div>
  </div>
`};W()});export default Dt();
