!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var o=n(1),r=n(2);e.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var d=(e=e||{}).random||(e.rng||o)();if(d[6]=15&d[6]|64,d[8]=63&d[8]|128,t)for(var c=0;c<16;++c)t[i+c]=d[c];return t||r(d)}},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var o=new Uint8Array(16);e.exports=function(){return n(o),o}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},function(e,t){for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,r=n;return[r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]]].join("")}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=[];function d(){var e=localStorage.getItem("todos");try{i=e?JSON.parse(e):[]}catch(e){i=[]}}function c(){localStorage.setItem("todos",JSON.stringify(i))}var a=function(){return i};d();var l={searchText:"",hideCompleted:""},u=function(e){"string"==typeof e.searchText&&(l.searchText=e.searchText),"boolean"==typeof e.hideCompleted&&(l.hideCompleted=e.hideCompleted)},s=function(){var e=document.getElementById("todos"),t=l,n=a().filter((function(e){return e.text.toLowerCase().includes(t.searchText.toLowerCase())&&!(e.completed&&t.hideCompleted)}));if(e.innerHTML="",t.searchText.length>0||t.hideCompleted?(document.querySelector("div.actions").classList.add("filter--active"),console.log("Filter is active")):(document.querySelector("div.actions").classList.remove("filter--active"),console.log("Filter off")),n.length>0)n.forEach((function(t){e.appendChild(function(e){var t=document.createElement("input"),n=document.createElement("span"),o=document.createElement("label"),r=document.createElement("div"),d=document.createElement("button");t.setAttribute("type","checkbox"),t.setAttribute("id","cbox-"+e.id),e.completed&&(t.checked=!0);t.addEventListener("change",(function(){var t,n;t=e.id,(n=i.findIndex((function(e){return e.id===t})))>-1&&(i[n].completed=!i[n].completed,c()),s()})),n.textContent=e.text,e.completed&&(n.textContent+=" [completed]");return d.textContent="Remove",d.addEventListener("click",(function(){var t,n;t=e.id,(n=i.findIndex((function(e){return e.id===t})))>-1&&(i.splice(n,1),c()),s()})),o.classList.add("list-item"),r.classList.add("list-item__container"),d.classList.add("button","button--text"),o.appendChild(t),o.appendChild(n),r.appendChild(d),o.appendChild(r),o}(t))}));else{var o=document.createElement("p");o.textContent="No to-dos to show",o.classList.add("empty-message"),e.appendChild(o)}!function(e){var t=e.filter((function(e){return!e.completed})),n=a().filter((function(e){return!e.completed})),o=document.createElement("h2");n.length?o.textContent="".concat(t.length," not completed todo").concat(1===t.length?"":"s"," displayed (").concat(n.length," total)"):o.textContent="You have nothing to do! :)";o.classList.add("list-title"),document.getElementById("todos").appendChild(o)}(n)};document.querySelector("#searcher").addEventListener("input",(function(e){u({searchText:e.target.value}),console.log("set filters: "+e.target.value),s()})),document.getElementById("new-form").addEventListener("submit",(function(e){e.preventDefault();var t,n=e.target.newTodoText.value.trim();n&&(t=n,i.push({id:r()(),text:t,completed:!1}),c(),s(),e.target.newTodoText.value="")})),document.getElementById("hide-completed").addEventListener("change",(function(e){u({hideCompleted:e.target.checked}),s()})),window.addEventListener("storage",(function(e){"todos"===e.key&&(d(),s())})),console.log("elindultunk"),s()}]);
//# sourceMappingURL=bundle.js.map