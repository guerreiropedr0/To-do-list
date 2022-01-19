(()=>{"use strict";var e={426:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(81),a=n.n(t),o=n(645),i=n.n(o)()(a());i.push([e.id,"body {\r\n  background-color: #f5f5f5;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 90vh;\r\n}\r\n\r\nh1 {\r\n  display: none;\r\n}\r\n\r\n#list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n  width: 30%;\r\n  border-radius: 0.1875rem;\r\n  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 15%);\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-bottom: 0.0625rem solid #e2e2e2;\r\n}\r\n\r\ntextarea,\r\ninput {\r\n  border: none;\r\n  overflow: auto;\r\n  outline: none;\r\n  -webkit-box-shadow: none;\r\n  -moz-box-shadow: none;\r\n  box-shadow: none;\r\n  resize: none;\r\n  padding: 1.5rem 0.5rem 0.5rem 0.5rem;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1rem;\r\n}\r\n\r\n.heading textarea {\r\n  border-bottom: 0.0625rem solid #e2e2e2;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.heading input {\r\n  font-style: italic;\r\n  padding: 1.7rem 1.7rem 1.7rem 1rem;\r\n}\r\n\r\nbutton {\r\n  order: 1;\r\n  background-color: #efefef;\r\n  color: #808080;\r\n  border: none;\r\n  padding: 1rem;\r\n}\r\n\r\nbutton:hover {\r\n  text-decoration: underline;\r\n  color: #000;\r\n  cursor: pointer;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  border-bottom: 0.0625rem solid #e2e2e2;\r\n}\r\n\r\n.task textarea {\r\n  flex: 2;\r\n}\r\n\r\n.task input {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.fa-trash-alt {\r\n  margin-right: 1rem;\r\n}\r\n",""]);const s=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);t&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),r.push(d))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=t.base?c[0]+t.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=a(f,t);t.byIndex=s,r.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);r[s].references--}for(var c=t(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}o=c}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,a&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var a=r[t];if(void 0!==a)return a.exports;var o=r[t]={id:t,exports:{}};return e[t](o,o.exports,n),o.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e=n(379),r=n.n(e),t=n(795),a=n.n(t),o=n(569),i=n.n(o),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class h{constructor(e,r=!1,n){this.description=e,this.completed=r,this.index=n}}class v{static save=e=>{localStorage.setItem("tasks",JSON.stringify(e))};static load=()=>null!=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]}const y=new class{constructor(){this.array=v.load()}display=()=>{const e=document.getElementById("list");e.innerHTML='<form><div class="heading"><textarea>Things to do</textarea><input type="text" placeholder="Add to your list..."></div><button class="clear" type="button">Clear all completed</button></form>',this.array.forEach((r=>{e.innerHTML+=`<div class="task"><input id="${r.index}" type="checkbox"><textarea id="${r.index}">${r.description}</textarea><i id="${r.index}" class="far fa-trash-alt"></i></div>`})),e.querySelectorAll(".fa-trash-alt").forEach((e=>{e.addEventListener("click",(()=>{this.removeTask(e.id-1)}))})),document.querySelectorAll(".task textarea").forEach((e=>{e.addEventListener("input",(()=>{this.editTask(e.id-1,e)}))})),document.querySelectorAll(".task input").forEach((e=>{e.addEventListener("change",(()=>{}))}))};addTask=()=>{const e=new h(document.querySelector("input[type='text'").value,!1,this.array.length+1);this.array.push(e),this.display(),v.save(this.array)};removeTask=e=>{this.array.splice(e,1);for(let r=e;r<this.array.length;r+=1)this.array[r].index-=1;this.display(),v.save(this.array)};editTask=(e,r)=>{this.array[e].description=r.value,v.save(this.array)}};y.display(),document.getElementById("list").addEventListener("submit",(e=>{e.preventDefault(),y.addTask()}))})()})();