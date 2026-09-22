// Kleine service worker: de app-schil in de cache, zodat het icoon op het beginscherm ook
// zonder netwerk opent. Cache-first voor de eigen bestanden; verhoog VERSIE bij elke wijziging.
const VERSIE = 'bb-beurs-v19';
const BESTANDEN = ['./', './index.html', './data.js', './plan.js', './jsqr.min.js', './fflate.min.js', './manifest.json', './icon.svg', './icon-180.png', './icon-512.png', './league-spartan.woff2', './logo-zwart.svg', './logo-wit.svg', './symbool-wit.svg'];

// cache:'reload' haalt elk bestand vers van het netwerk. Zonder dat kan de browsercache binnen de
// tien minuten na een push nog de vorige index.html onder de nieuwe versie zetten.
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSIE).then(c => c.addAll(BESTANDEN.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSIE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => {
      const net = fetch(e.request).then(r => {
        if (r && r.ok && new URL(e.request.url).origin === self.location.origin) {
          caches.open(VERSIE).then(c => c.put(e.request, r.clone()));
        }
        return r;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
