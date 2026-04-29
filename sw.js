const CACHE_NAME = "kraeuterplan-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// Install
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Fetch
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
