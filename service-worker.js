"use strict";var precacheConfig=[["/index.html","7ae62471b4e5dac418eaa9b3e3ed96e2"],["/static/css/main.cdf2fd30.css","c90cda688308caa1b6434ec6197b6fb7"],["/static/js/main.e8209e08.js","5d8ee9632d60ca1f21d84733808e94a9"],["/static/media/chinguCoupons.08ea6f5e.jpg","08ea6f5ed9c3415015f072351d7f3da9"],["/static/media/contact.bcad987d.png","bcad987d1e1d281bccd56787c098cfff"],["/static/media/cryptoMars.6a6bd318.jpg","6a6bd31890151857484a93c84a87d07e"],["/static/media/hbServerMonitor.70d41016.jpg","70d410163f5ea2b6661b054a0c582be6"],["/static/media/introBackground.da72f59c.jpg","da72f59c0c97e9a8a9372cd703480c36"],["/static/media/jsonPatchAPI.c5e59ef3.jpg","c5e59ef3d3c03fdaa31d449c05d948c0"],["/static/media/marsMaps.dbd8066a.jpg","dbd8066aa10872f28be9e470c821e9c5"],["/static/media/mazeGame.a65615df.jpg","a65615df9759ec32ba31a886c0e10e92"],["/static/media/portfolio.b3600f27.jpg","b3600f2724335686105dfc60ae1fb8b1"],["/static/media/projects_background.887215d5.png","887215d5dadbb65d7d18b6ab365991de"],["/static/media/rfpPhotography.141b46f1.jpg","141b46f112c0241047eea594c0f0978e"],["/static/media/skill_card_background.9ce59f30.png","9ce59f309d5f6b2958c8d9ae46c79ae0"],["/static/media/skills_background.4b66523d.png","4b66523db35dd0fba2d183535ce5a8e3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});