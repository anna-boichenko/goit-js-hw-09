const e=document.querySelector("body"),t=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let a=null;t.addEventListener("click",(()=>{a=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0,d.disabled=!1})),d.addEventListener("click",(()=>{clearInterval(a),d.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.94b3a42a.js.map