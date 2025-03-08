self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("calculator-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/calculator.html",
        "/styles.css",
        "/script.js"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
