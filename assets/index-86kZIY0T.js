(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const c=()=>{const d=document.querySelector("#grid"),t=d.clientWidth,r=t-parseInt(window.getComputedStyle(d).paddingTop,10)*2;return d.style.height=r+"px",{gridWidth:t,gridHeight:r}};function s(){const d=document.querySelector("#btn-start"),t=document.querySelector("#intro"),r=document.querySelector("#game"),o=document.querySelector("#grid");d.addEventListener("click",()=>{console.log("Start Game!"),t.classList.add("hidden"),setTimeout(()=>{o.animate([{height:"0",opacity:"0"},{height:`${c().gridHeight} px`,opacity:"1"}],{duration:300}),c(),o.insertAdjacentHTML("beforeend",`<div>Grid!</div><div>Grid!</div><div>Grid!</div><div>Grid!</div>
      <div>Grid!</div><div>Grid!</div><div>Grid!</div><div>Grid!</div>
      <div>Grid!</div><div>Grid!</div><div>Grid!</div><div>Grid!</div>
      <div>Grid!</div><div>Grid!</div><div>Grid!</div><div>Grid!</div>`),document.querySelectorAll("#grid > div").forEach((i,n)=>{setTimeout(()=>{i.classList.add("grid-item")},n*100)}),r.insertAdjacentHTML("beforeend","<p>Score:</p>"),window.addEventListener("resize",c)},100)})}document.querySelector("#app").innerHTML=`
  <div id="game">
    <div id="intro">
      <h1>Memory Game</h1>
      
      <button id="btn-start">
        Start Game
      </button>
    </div>
    <div id="grid"></div>
  </div>
`;s();
