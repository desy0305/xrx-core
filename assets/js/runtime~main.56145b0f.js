(()=>{"use strict";var e,a,r,t,b,f={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return f[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=f,o.c=d,e=[],o.O=(a,r,t,b)=>{if(!r){var f=1/0;for(i=0;i<e.length;i++){r=e[i][0],t=e[i][1],b=e[i][2];for(var d=!0,c=0;c<r.length;c++)(!1&b||f>=b)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(d=!1,b<f&&(f=b));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[r,t,b]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var b=Object.create(null);o.r(b);var f={};a=a||[null,r({}),r([]),r(r)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,o.d(b,f),b},o.d=(e,a)=>{for(var r in a)o.o(a,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,r)=>(o.f[r](e,a),a)),[])),o.u=e=>"assets/js/"+({192:"9a7e4b65",719:"639bc74f",1235:"a7456010",1762:"f2b923b5",2202:"29128483",2308:"2742082f",3579:"eb9708af",4080:"b54731be",4134:"393be207",4583:"1df93b7f",4679:"f7e23012",4711:"462b747f",4791:"8db5c86d",4974:"3800a326",5742:"aba21aa0",6061:"1f391b9e",6154:"5e56f3cb",6209:"0e669fb4",6367:"1334a420",6969:"14eb3368",7098:"a7bd4aaa",7353:"4095856c",7517:"f39bde50",7588:"6a317c9e",8324:"023d36e4",8401:"17896441",8495:"3e31072e",8705:"0d4772ea",8775:"ada793f1",8810:"52d97b7c",8858:"30e5aa93",8896:"364eb5ea",8940:"110cdef5",9048:"a94703ab",9095:"dc58b723",9647:"5e95c892"}[e]||e)+"."+{192:"cfab2811",719:"ea3d6b7c",1169:"e89374e7",1176:"7852fb49",1235:"1c975098",1245:"fdf278a5",1303:"5a33142f",1331:"e6561893",1762:"b41bb284",1946:"514479e2",2130:"0d7215f9",2202:"dbab141a",2237:"12c08ea0",2308:"9913824c",2376:"06772aff",2453:"d1c2717c",2548:"7f26e59f",2843:"912a5b46",2901:"b07fd521",2925:"721d09ed",2983:"919c043c",3068:"8ed1bd68",3579:"67a593ed",3626:"152fb6fa",3706:"39e85d12",4080:"73046923",4134:"dec2a458",4162:"586ac1c9",4583:"022534b7",4679:"c5b7c81c",4711:"fbf8e8ef",4741:"79ccc514",4791:"d4abbbde",4943:"4f099589",4974:"24e6b2e3",5458:"05b4db7f",5604:"eae6928e",5742:"06048bc9",6061:"026aab62",6154:"5a8b9221",6209:"46305e11",6367:"18bb1c50",6420:"72bf8886",6429:"c8b98c4a",6788:"d7d41cc2",6803:"f09e1aef",6969:"c08c55a3",7098:"222b1788",7353:"50c4e0a2",7426:"f3e520c6",7517:"dd89a388",7588:"5b917aff",8055:"70b4a2cc",8324:"818bc4e8",8337:"acac1881",8401:"2ff52fae",8478:"5b690b2f",8495:"a0b36f04",8577:"dceeb8a4",8591:"7a24192f",8635:"3e84fbe3",8705:"d389ab31",8775:"1be3c0d6",8810:"b5e0a9a0",8858:"e1829b35",8869:"5575bd3f",8896:"b966b22a",8940:"e25c2b28",9048:"04d34f5a",9095:"34a6e0d2",9278:"89f71767",9647:"e084acc3",9689:"b3b4f292"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},b="docusaurus:",o.l=(e,a,r,f)=>{if(t[e])t[e].push(a);else{var d,c;if(void 0!==r)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+r){d=u;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",b+r),d.src=e),t[e]=[a];var l=(a,r)=>{d.onerror=d.onload=null,clearTimeout(s);var b=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),b&&b.forEach((e=>e(r))),a)return a(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),c&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/xrx-core/",o.gca=function(e){return e={17896441:"8401",29128483:"2202","9a7e4b65":"192","639bc74f":"719",a7456010:"1235",f2b923b5:"1762","2742082f":"2308",eb9708af:"3579",b54731be:"4080","393be207":"4134","1df93b7f":"4583",f7e23012:"4679","462b747f":"4711","8db5c86d":"4791","3800a326":"4974",aba21aa0:"5742","1f391b9e":"6061","5e56f3cb":"6154","0e669fb4":"6209","1334a420":"6367","14eb3368":"6969",a7bd4aaa:"7098","4095856c":"7353",f39bde50:"7517","6a317c9e":"7588","023d36e4":"8324","3e31072e":"8495","0d4772ea":"8705",ada793f1:"8775","52d97b7c":"8810","30e5aa93":"8858","364eb5ea":"8896","110cdef5":"8940",a94703ab:"9048",dc58b723:"9095","5e95c892":"9647"}[e]||e,o.p+o.u(e)},(()=>{var e={5354:0,1869:0};o.f.j=(a,r)=>{var t=o.o(e,a)?e[a]:void 0;if(0!==t)if(t)r.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var b=new Promise(((r,b)=>t=e[a]=[r,b]));r.push(t[2]=b);var f=o.p+o.u(a),d=new Error;o.l(f,(r=>{if(o.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var b=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;d.message="Loading chunk "+a+" failed.\n("+b+": "+f+")",d.name="ChunkLoadError",d.type=b,d.request=f,t[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,r)=>{var t,b,f=r[0],d=r[1],c=r[2],n=0;if(f.some((a=>0!==e[a]))){for(t in d)o.o(d,t)&&(o.m[t]=d[t]);if(c)var i=c(o)}for(a&&a(r);n<f.length;n++)b=f[n],o.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return o.O(i)},r=self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})()})();