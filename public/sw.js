const CACHE="con-market-v2";
const CORE=["/","/en/","/zh/","/ko/","/favicon.svg","/site.webmanifest","/con-market-hero.svg"];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('con-market-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const request=event.request,url=new URL(request.url);if(request.method!=="GET"||url.origin!==self.location.origin||url.pathname.startsWith('/api/'))return;
event.respondWith(fetch(request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy));}return response;}).catch(()=>caches.match(request).then(cached=>{if(cached)return cached;if(request.mode==='navigate'){const lang=url.pathname.match(/^\/(en|zh|ko)(?:\/|$)/)?.[1];return caches.match(lang?'/'+lang+'/':'/');}return Response.error();}))));});
