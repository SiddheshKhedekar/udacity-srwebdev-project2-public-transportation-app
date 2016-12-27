/* ===================================

	SW cache handle

======================================*/

// the following was imported from own code from notes of the Offline Web Applications course

// sets the cache name
var staticCacheName = 'pta-static-v6.2';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/public/index.html',
        '/public/service-worker.js',
        '/public/components/my-app.html',
        '/public/components/my-icons.html',
        '/public/components/my-view1.html',
        '/public/components/my-view2.html',
        '/public/components/my-view404.html',
        '/public/components/shared-styles.html',
        '/public/components/js/app.js',
        '/public/components/js/sw/sw-handle.js',
        '/public/components/js/components/my-app.js'
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