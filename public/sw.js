if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,n,c)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(n.map((a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}}))).then((e=>{const a=c(...e);return s.default||(s.default=a),s}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/604-a24cb1e56decffe910d0.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/905-2f638333347bf723d7ca.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/main-8676970a2e93f44d33f4.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/pages/404-c439f8df2f6884774cb7.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/pages/_app-6428f66986018c7b217f.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/pages/about-fa0e8234bd78b28f820b.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/pages/blog-daf08c30798238ac1265.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/pages/blog/%5B...slug%5D-3ccaa024130643d65879.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/pages/blog/page/%5Bpage%5D-bf48ba4ca95da8547eed.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/pages/cursos-fedc1ed4847ae5b68bc2.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/pages/index-fcb4bfd711a3688aa8c7.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/pages/podcast-006e40b0d9c7e49c869a.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/pages/tags-2caed3309eab78b8e121.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/pages/tags/%5Btag%5D-96aecf1e2b24e6d3f257.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/chunks/webpack-fb76148cfcfb42ca18eb.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/css/aabd5268fb0d6999ddf5.css",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/pf6ga6HaTJR9SuvaxHFZc/_buildManifest.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/_next/static/pf6ga6HaTJR9SuvaxHFZc/_ssgManifest.js",revision:"pf6ga6HaTJR9SuvaxHFZc"},{url:"/ads.txt",revision:"24fe66db210935e634e2d48d5821c7cd"},{url:"/android-icon-192x192.png",revision:"a2f6da0a99184c186b85c4169021aee8"},{url:"/apple-icon-114x114.png",revision:"f9d08eb9eb1cb9364a91655c4c806ce0"},{url:"/apple-icon-120x120.png",revision:"a9591ba167b70ddba21faf188f28cc0d"},{url:"/apple-icon-144x144.png",revision:"8e596d7a13373ea6aa2a8b9ec703cc0c"},{url:"/apple-icon-152x152.png",revision:"223ede930b57d83ab20b6a2dd64993aa"},{url:"/apple-icon-180x180.png",revision:"53f88e9606012e93716991549ee813b2"},{url:"/apple-icon-57x57.png",revision:"52ac6b9a9537b6720dfb2f13e69e96d5"},{url:"/apple-icon-60x60.png",revision:"5f6cfcb0bfae6ec7c83b8086bf7d7224"},{url:"/apple-icon-72x72.png",revision:"012d4a014888ab8a81fef39a72681003"},{url:"/apple-icon-76x76.png",revision:"8a51fff741e9ed23a50b508c0b0cadf8"},{url:"/favicon-16x16.png",revision:"e5c69ba2df5e674e273982565158ca01"},{url:"/favicon-32x32.png",revision:"278b8f7d0a4b0285dd911f65262b8695"},{url:"/favicon-96x96.png",revision:"38299e4233cd8f76337e965a63b05d2f"},{url:"/favicon.png",revision:"1de7acfd57f755c75bcb9e987a2947aa"},{url:"/feed.xml",revision:"76aa34b5f7411cce1bf8f41f859e898e"},{url:"/humans.txt",revision:"a017a5cd03c15ec9d61dcee1eaa5a1d6"},{url:"/icon-192x192.png",revision:"ddb3317eedef22f9b32350b11f180726"},{url:"/icon-256x256.png",revision:"bd05dbe02625f7f7940c4e34237f1d17"},{url:"/icon-384x384.png",revision:"c426f0dde7c3525e17368e575af4300d"},{url:"/icon-512x512.png",revision:"aa68436a821046fca6452aa8c011b2b2"},{url:"/manifest.json",revision:"ad89d3e39d5982e40be96a7723892c31"},{url:"/robots.txt",revision:"1eaa7195a85ea135b2bd21c600675898"},{url:"/screenshots/screen1.png",revision:"fc9646ea4743b7e7e080f9d1b8d1fbf2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
