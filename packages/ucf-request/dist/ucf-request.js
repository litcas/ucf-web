!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("axios")):"function"==typeof define&&define.amd?define(["axios"],t):"object"==typeof exports?exports["Ucf-request"]=t(require("axios")):e["Ucf-request"]=t(e.axios)}(window,function(e){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(t,o){t.exports=e},function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a="",u=Math.random();t.default=function(e,t){t.start&&t.start();var o=Object.assign({},t.params,"get"==t.method.toLowerCase()?{r:Math.random()}:{});return r()({timeout:8e3,method:t.method,url:e,data:t.data,headers:{"X-Requested-With":"XMLHttpRequest","random-num":u,"x-xsrf-token":a},params:o}).then(function(e){t.end&&t.end();var o=e.headers["x-xsrf-token"];return o&&(a=o),new Promise(function(t,o){e.data.code&&200==e.data.code?t(e.data):o({code:-1,data:[],message:"服务器响应code错误"})})}).catch(function(e){t.end&&t.end(),console.log(e);var o=e.response;if(o){var n=o.status,r=o.data.msg;switch(n){case 401:return console.log("RBAC鉴权失败!"+r),Promise.resolve(o);case 306:window.top.location.href="/wbalone/pages/login/login.html"}}return new Promise(function(e,t){t({code:-1,data:[],message:"request发生服务器 http ".concat(status," 请求错误!")})})})}}])});