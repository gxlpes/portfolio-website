parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
var e=document.querySelector(".burguer"),t=document.querySelector("nav"),o=document.querySelector(".nav-active");e.addEventListener("click",function(){t.classList.toggle("nav-active"),e.classList.toggle("toggle")});var c=0;function n(){document.querySelectorAll(".art-text")[c%3].classList.toggle("colored"),c++}setInterval(n,1e3);var l=document.querySelector(".change-theme"),r=document.querySelector(".change-theme-svg-light-mode"),i=document.querySelector(".change-theme-svg-dark-mode"),d=document.querySelectorAll(".btn-nav"),s=document.querySelector(".dark-mode-img"),u=document.querySelector(".light-mode-img"),a=document.querySelector(".dark-mode"),g=document.querySelectorAll(".container"),m=document.querySelectorAll(".container-project-main");function v(){r.classList.toggle("hiddden"),setTimeout(function(){i.classList.toggle("hiddden")},250),document.body.classList.toggle("light-mode"),s.classList.toggle("hidden-img"),d.forEach(function(e){return e.classList.toggle("dark-mode-btn")}),g.forEach(function(e){return e.classList.toggle("dark-container")}),m.forEach(function(e){return e.classList.toggle("dark-container")}),document.body.classList.toggle("dark-mode"),u.classList.toggle("hidden-img")}l.addEventListener("click",function(){v()});for(var h=document.querySelectorAll(".email"),y=document.querySelectorAll(".tooltip"),L=document.querySelectorAll(".bottom"),f=function(e){h[e].addEventListener("click",function(){q(),L[e].classList.add("visible"),setTimeout(function(){L[e].classList.remove("visible")},1e3)})},S=0;S<h.length;S++)f(S);function q(){var e=document.getElementById("emailInput");e.select(),e.setSelectionRange(0,99999),navigator.clipboard.writeText(e.value)}for(var k=document.querySelectorAll(".open-project"),b=function(e){k[e].addEventListener("click",function(){this.classList.toggle("open-project-active"),document.querySelectorAll(".hidden-project")[e].classList.toggle("hidden-remove")})},p=0;p<k.length;p++)b(p);
},{}]},{},["mpVp"], null)
//# sourceMappingURL=script.2cbe390a.js.map