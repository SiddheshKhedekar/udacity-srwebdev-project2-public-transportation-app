"use strict";var staticCacheName="pta-static-v1";self.addEventListener("install",function(t){t.waitUntil(caches.open(staticCacheName).then(function(t){return t.addAll(["/"])}))}),self.addEventListener("activate",function(t){}),self.addEventListener("fetch",function(t){t.respondWith(caches.match(t.request).then(function(e){return e||fetch(t.request)}))});