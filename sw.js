// A minimal service worker to make the site "PWA-ready"

self.addEventListener('install', (event) => {
  // This event fires when the service worker is first installed.
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (event) => {
  // This just lets the browser handle all network requests normally.
  // We aren't doing any caching, but it's required for PWA detection.
  event.respondWith(fetch(event.request));
});
