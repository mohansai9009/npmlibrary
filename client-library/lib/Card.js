!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r,n="object"==typeof exports?t(require("react")):t(e.react);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,function(v){return(()=>{"use strict";var r={529:(e,t,r)=>{r.d(t,{Z:()=>o});var t=r(81),t=r.n(t),n=r(645),r=r.n(n)()(t());r.push([e.id,'.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 1rem;\n  background-color: gray;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n',""]);const o=r},645:e=>{e.exports=function(n){var d=[];return d.toString=function(){return this.map(function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(0<e[5].length?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t}).join("")},d.i=function(e,t,r,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var i=0;i<e.length;i++){var u=[].concat(e[i]);r&&a[u[0]]||(void 0!==o&&(void 0!==u[5]&&(u[1]="@layer".concat(0<u[5].length?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]&&(u[1]="@media ".concat(u[2]," {").concat(u[1],"}")),u[2]=t),n&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=n):u[4]="".concat(n)),d.push(u))}},d}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var u=[];function d(e){for(var t=-1,r=0;r<u.length;r++)if(u[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],s=r[c]||0,i="".concat(c," ").concat(s),c=(r[c]=s+1,d(i)),s={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};-1!==c?(u[c].references++,u[c].updater(s)):(a=function(t,e){var r=e.domAPI(e);return r.update(t),function(e){e?e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer||r.update(t=e):r.remove()}}(s,t),t.byIndex=o,u.splice(o,0,{identifier:i,updater:a,references:1})),n.push(i)}return n}e.exports=function(e,a){var c=s(e=e||[],a=a||{});return function(e){e=e||[];for(var t=0;t<c.length;t++){var r=d(c[t]);u[r].references--}for(var e=s(e,a),n=0;n<c.length;n++){var o=d(c[n]);0===u[o].references&&(u[o].updater(),u.splice(o,1))}c=e}}},569:e=>{var r={};e.exports=function(e,t){if(!(e=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e)))throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(a){var c=a.insertStyleElement(a);return{update:function(e){var t,r,n,o;t=c,r=a,n="",(e=e).supports&&(n+="@supports (".concat(e.supports,") {")),e.media&&(n+="@media ".concat(e.media," {")),(o=void 0!==e.layer)&&(n+="@layer".concat(0<e.layer.length?" ".concat(e.layer):""," {")),n+=e.css,o&&(n+="}"),e.media&&(n+="}"),e.supports&&(n+="}"),(o=e.sourceMap)&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(n,t,r.options)},remove:function(){var e;null!==(e=c).parentNode&&e.parentNode.removeChild(e)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},156:e=>{e.exports=v}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;t=n[e]={id:e,exports:{}};return r[e](t,t.exports,o),t.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var e={};{o.r(e),o.d(e,{default:()=>f});var t=o(379),t=o.n(t),a=o(795),a=o.n(a),c=o(569),c=o.n(c),s=o(565),s=o.n(s),i=o(216),i=o.n(i),u=o(589),u=o.n(u),d=o(529),p={},u=(p.styleTagTransform=u(),p.setAttributes=s(),p.insert=c().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=i(),t()(d.Z,p),d.Z&&d.Z.locals&&d.Z.locals,o(156)),l=o.n(u);const f=function(e){var t=e.title,e=e.content;return l().createElement("div",{className:"card"},l().createElement("h1",null,t),l().createElement("p",null,e))}}return e})()});