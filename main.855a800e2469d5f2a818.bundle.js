(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(c=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var c,a,u;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<n.length;a++){var u=[].concat(n[a]);o&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},function(n,e,t){n.exports=t(5)},function(n,e,t){var o=t(3),r=t(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);n.exports=r.locals||{}},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),c=[];function a(n){for(var e=-1,t=0;t<c.length;t++)if(c[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},o=[],r=0;r<n.length;r++){var i=n[r],u=e.base?i[0]+e.base:i[0],s=t[u]||0,f="".concat(u," ").concat(s);t[u]=s+1;var l=a(f),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(c[l].references++,c[l].updater(d)):c.push({identifier:f,updater:m(d,e),references:1}),o.push(f)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var c=i(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var f,l=(f=[],function(n,e){return f[n]=e,f.filter(Boolean).join("\n")});function d(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),c=n.childNodes;c[e]&&n.removeChild(c[e]),c.length?n.insertBefore(i,c[e]):n.appendChild(i)}}function v(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var p=null,h=0;function m(n,e){var t,o,r;if(e.singleton){var i=h++;t=p||(p=s(e)),o=d.bind(null,t,i,!1),r=d.bind(null,t,i,!0)}else t=s(e),o=v.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);c[r].references--}for(var i=u(n,e),s=0;s<t.length;s++){var f=a(t[s]);0===c[f].references&&(c[f].updater(),c.splice(f,1))}t=i}}}},function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o)()(!0);r.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),e.default=r},function(n,e,t){"use strict";t.r(e);var o=function(){console.log("This is the homepage")},r={render:function(){return'\n  <div class="row">\n    <div class="col-sm">\n      One of three columns\n    </div>\n    <div class="col-sm">\n      One of three columns\n    </div>\n    <div class="col-sm">\n      One of three columns\n    </div>\n    <div id="chart"></div>\n  </div>\n'},effects:function(){window.addEventListener("click",o)},cleanup:function(){window.removeEventListener("click",o)}},i={render:function(){return"<div>Not Found</div>"},effects:function(){},cleanup:function(){}},c=(t(2),{"/":r,"/page1":{render:function(){return"<div>Page 1</div>"},effects:function(){},cleanup:function(){}},"/page2":{render:function(){return"<div>Page 2</div>"},effects:function(){},cleanup:function(){}}}),a=null,u="/data-world",s=document.querySelector("#root");document.querySelectorAll(".nav-link").forEach((function(n){n.addEventListener("click",(function(e){e.preventDefault();var t=n.getAttribute("href");!function(n){window.history.pushState({},n,n),dispatchEvent(new PopStateEvent("popstate",{}))}("".concat(u).concat(t))}))})),window.onload=window.onpopstate=function(){var n,e=window.location.pathname;null===(n=a)||void 0===n||n.cleanup(),a=c[e.replace(u,"")]||i,s.innerHTML=a.render(),a.effects()}}],[[1,1]]]);