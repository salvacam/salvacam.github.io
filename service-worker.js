var cacheName = 'salvacamPersonalWeb-v1';
var filesToCache = [
  '/',
  'index.html',
  'main.js',
  'css/style.css',
  'fonts/AMERSN__-webfont.eot',
  'fonts/AMERSN__-webfont.svg',
  'fonts/AMERSN__-webfont.ttf',
  'fonts/AMERSN__-webfont.woff',
  'fonts/Bellota-Regular-webfont.eot',
  'fonts/Bellota-Regular-webfont.svg',
  'fonts/Bellota-Regular-webfont.ttf',
  'fonts/Bellota-Regular-webfont.woff',

  'fonts/fontawesome-webfont.eot',
  'fonts/fontawesome-webfont.svg',
  'fonts/fontawesome-webfont.ttf',
  'fonts/fontawesome-webfont.woff2',

  'img/foto.png',

  'img/porfolio/barquitos.png',
  'img/porfolio/carta.png',
  'img/porfolio/deportes.png',
  'img/porfolio/egipto.png',
  'img/porfolio/goear.png',
  'img/porfolio/inmobiliaria.png',
  'img/porfolio/localizacion.png',
  'img/porfolio/podometro.png',
  'img/porfolio/quiz.png',
  'img/porfolio/restaurante.png',
  'img/porfolio/tienda.png',
  'img/porfolio/todo_list.png',
  'img/porfolio/transporte.png',
  'img/porfolio/usuarios.png',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
