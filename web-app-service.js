self.addEventListener("activate",  function(event) {

  event.waitUntil(self.clients.claim().then(function() {

    self.skipWaiting();

  }));

});

self.addEventListener("fetch", function(event) {

  event.respondWith(caches.match(event.request).then(function(response) {

    if (response && response.ok) {

      return response;

    }

  }));

});

self.addEventListener("install", function(event) {

  event.waitUntil(caches.open("web-app").then(function(cache) {
    return cache.addAll([ "/",
    "manifest.json",
    "index.html",
    "nav.html",
    "pages/login.html",
    "pages/home.html",
    "pages/about.html",
    "pages/contact.html",
    "css/materialize.min.css",
    "js/materialize.min.js",
    "js/jquery-3.1.1.min.js",
    "css/style.css",
    "js/nav.js",
    "js/script.js",
    "images/icons/pwsk-512.png",
    "images/icons/pwsk-16.png",
    "images/icons/pwsk-256.png",
    "images/icons/pwsk-32.png",
    "images/icons/pwsk-192.png",
    "images/gallary/1.png",
  ]).then(function() {

      self.skipWaiting();

    });

  }));

});