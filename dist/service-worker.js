if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"bundle.js",revision:"3e6b963c09e0a34e8c33e0e8a53d3c50"},{url:"bundle.js.LICENSE.txt",revision:"14e12b18420774f420213c85a03d42b4"},{url:"index.html",revision:"574fe4c33d92b4b5ea9b7c9630c041d9"},{url:"main.css",revision:"b202487a922a5c6c8ac216d21672a908"}],{})}));
//# sourceMappingURL=service-worker.js.map