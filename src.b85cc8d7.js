parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BK7O":[function(require,module,exports) {
"use strict";function t(t){return i(t)||o(t)||n(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function i(t){if(Array.isArray(t))return a(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=e.get(t);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(t):n.value}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var d=new WeakMap,f=new WeakMap,v=new WeakMap,h=function(){function e(){var n=this;r(this,e),s(this,"addNavigation",function(){var e=document.createElement("div");e.classList.add("dots"),n.body.append(e),n.sections.forEach(function(){var t=document.createElement("a");t.classList.add("dots__item"),e.append(t)}),t(document.querySelectorAll(".dots__item")).forEach(function(t,e){0===e&&t.classList.add("dots__item_is-active"),t.addEventListener("click",function(t){t.preventDefault(),u(n,f).call(n,e),u(n,v).call(n,e)})})}),s(this,"goToSection",function(t){u(n,f).call(n,t-1),u(n,v).call(n,t-1)}),s(this,"setSectionColors",function(t){n.sections.forEach(function(e,n){e.style.backgroundColor=t[n]})}),s(this,"setAnimationDuration",function(t){n.animationDuration=t,n.content.style.transitionDuration="".concat(t,"ms")}),d.set(this,{writable:!0,value:function(){window.addEventListener("wheel",function(t){n.canScroll&&(n.canScroll=!1,t.deltaY>0?n.activeSectionIndex<n.sections.length-1&&(n.activeSectionIndex+=1):n.activeSectionIndex>0&&(n.activeSectionIndex-=1),u(n,f).call(n,n.activeSectionIndex),u(n,v).call(n,n.activeSectionIndex))})}}),f.set(this,{writable:!0,value:function(t){n.onScrollCallbacks.start.forEach(function(t){t()}),n.activeSectionIndex=t,n.content.style.transform="translateY(-".concat(100*t,"vh)"),setTimeout(function(){n.canScroll=!0,n.onScrollCallbacks.end.forEach(function(t){t()})},n.animationDuration)}}),v.set(this,{writable:!0,value:function(e){var n=t(document.querySelectorAll(".dots__item"));n.forEach(function(t){return t.classList.remove("dots__item_is-active")}),n[e].classList.add("dots__item_is-active")}}),this.body=document.querySelector(".fullscreen"),this.sections=t(document.querySelectorAll(".section")),this.content=document.querySelector(".sections"),this.animationDuration=500,this.activeSectionIndex=0,this.canScroll=!0,this.onScrollCallbacks={end:[],start:[]},u(this,d).call(this)}return l(e,[{key:"onScroll",value:function(t,e){"start"===t?this.onScrollCallbacks.start.push(e):"end"===t&&this.onScrollCallbacks.end.push(e)}}]),e}();exports.default=h;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./scripts/myNavigation"));function t(e){return e&&e.__esModule?e:{default:e}}var o=new e.default;o.addNavigation(),o.setSectionColors(["#FFD700","#8FBC8F","#FF7F50","#00BFFF","#FFB6C1"]),o.setAnimationDuration(1e3),o.goToSection(1);var n=function(){var e=document.createElement("div"),t=document.querySelector(".fullscreen");e.classList.add("popUp"),t.append(e),setTimeout(function(){e.remove()},1e3)};o.onScroll("start",n);
},{"./scripts/myNavigation":"BK7O"}]},{},["Focm"], null)
//# sourceMappingURL=src.b85cc8d7.js.map