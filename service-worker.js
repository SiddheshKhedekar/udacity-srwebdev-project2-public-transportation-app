/* ===================================

	SW cache handle

======================================*/

// the following was imported from own code from notes of the Offline Web Applications course

// sets the cache name
var staticCacheName = 'pta-static-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {

 /* event.waitUntil(
  ); */
  
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});