/* ===================================

	SW cache handle

======================================*/

// the following was imported from own code from notes of the Offline Web Applications course

// sets the cache name
var staticCacheName = 'pta-static-v7.1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/service-worker.js',
        '/components/my-app.html',
        '/components/my-icons.html',
        '/components/my-view1.html',
        '/components/my-view3.html',
        '/components/my-view404.html',
        '/components/my-view404.html',
        '/components/js/sw/sw-handle.js',
        '/components/json/stops_sat.json',
        '/components/json/stops_sun.json',
        'components/img/c-train.jpg',
        'components/img/c-train-schedule.jpg'
      ]);
    })
  );
});

// adds cleanup for old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('pta-') &&
                 cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  
 // TODO: respond to requests for the root page with
  // the page skeleton from the cache
  // parses the request URL form the cache
  var requestURL = new URL(event.request.url);

  // checks to see if the request URL is the same as the current origin
  if (requestURL.origin === location.origin) {
    //after the first request is true, checks if the user's request URL is the root
    if (requestURL.pathname ==='/') {
      // and if so, responds with the /skeleton URL instead
      // grabs the /skeleton URL straight, from the cache
      event.respondWith(caches.match('/'));
      // no need to go the network as a fallback if this fails, as /skeleton is cached no matter what during the sw install
      return;
    }
  } 

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});