!function(){"use strict";var e,t,n,r,o,a,i,f={},u={};function c(e){var t=u[e];if(void 0!==t)return t.exports;var n=u[e]={id:e,loaded:!1,exports:{}};return f[e].call(n.exports,n,n.exports,c),n.loaded=!0,n.exports}c.m=f,e=[],c.O=function(t,n,r,o){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var i=!0,f=0;f<n.length;f++)(!1&o||a>=o)&&Object.keys(c.O).every((function(e){return c.O[e](n[f])}))?n.splice(f--,1):(i=!1,o<a&&(a=o));if(i){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},c.d(o,a),o},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(t,n){return c.f[n](e,t),t}),[]))},c.u=function(e){return{65:"component---src-pages-private-tsx",218:"component---src-pages-404-tsx",295:"ba6547a5f43302a1cecd39afb92e5f407af946de",317:"component---src-pages-projects-tsx",351:"commons",392:"af1921efbf659406b6653ff7a4e0fbcc3c23e3eb",532:"styles",611:"component---src-pages-work-tsx",691:"component---src-pages-index-tsx"}[e]+"-"+{65:"3c77d359f778df8cd01a",218:"144e6662e2181c26aa5e",295:"537e96376d3076b193c3",317:"d46638fe64d7cbe909f0",351:"3b3fcff7fbb1e0519bf5",392:"e369cb6a2f425acb06d0",532:"355f3a4a5b234877dc92",611:"3b5b9a7073c4aa9824ff",691:"7e491fabc829b222274b"}[e]+".js"},c.miniCssF=function(e){return"styles.1704ef8af6c6fc7a1bd4.css"},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="gatsby-starter-default:",c.l=function(e,t,n,a){if(r[e])r[e].push(t);else{var i,f;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){i=d;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",o+n),i.src=e),r[e]=[t];var l=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),f&&document.head.appendChild(i)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/",a=function(e){return new Promise((function(t,n){var r=c.miniCssF(e),o=c.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var i;if((o=(i=a[r]).getAttribute("data-href"))===e||o===t)return i}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),f=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=f,o.parentNode.removeChild(o),r(u)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},i={658:0},c.f.miniCss=function(e,t){i[e]?t.push(i[e]):0!==i[e]&&{532:1}[e]&&t.push(i[e]=a(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))},function(){var e={658:0};c.f.j=function(t,n){var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=c.p+c.u(t),i=new Error;c.l(a,(function(n){if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}},c.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],i=n[1],f=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)c.o(i,r)&&(c.m[r]=i[r]);if(f)var s=f(c)}for(t&&t(n);u<a.length;u++)o=a[u],c.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0;return c.O(s)},n=self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-20be8b37abfd604e6c36.js.map