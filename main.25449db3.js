parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(){return new Promise(function(t,e){document.body.addEventListener("mousedown",function(e){t("First promise was resolved")}),setTimeout(function(){e(new Error("First promise was rejected"))},3e3)})}function e(){return new Promise(function(t){document.body.addEventListener("mousedown",function(e){0!==e.button&&2!==e.button||t("Second promise was resolved")})})}function n(){return new Promise(function(t){var e=!1,n=!1;document.body.addEventListener("mousedown",function(o){0===o.button?e=!0:2===o.button&&(n=!0),e&&n&&t("Third promise was resolved")})})}var o=t(),i=e(),d=n();o.then(function(t){var e=document.createElement("div");e.classList.add("success"),e.setAttribute("data-qa","notification"),e.innerText=t,document.body.appendChild(e)},function(t){var e=document.createElement("div");e.classList.add("warning"),e.setAttribute("data-qa","notification"),e.innerText=t,document.body.appendChild(e)}),i.then(function(t){var e=document.createElement("div");e.classList.add("success"),e.setAttribute("data-qa","notification"),e.innerText=t,document.body.appendChild(e)}),d.then(function(t){var e=document.createElement("div");e.classList.add("success"),e.setAttribute("data-qa","notification"),e.innerText=t,document.body.appendChild(e)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.25449db3.js.map