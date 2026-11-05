const APP_VERSION = '1.0.2';
const CACHE_NAME = `nocturne-v${APP_VERSION}`;

const FILES_TO_CACHE = [
    './',
    'index.html',
    './manifest.json',
    './css/main.css',
    './js/main.js',
    './js/episodes.js',
    './js/splash.js',
    './js/video.js',
    './icons/bell.svg',
    './icons/home.svg',
    './icons/menu.svg',
    './icons/nocturne-192.png',
    './icons/nocturne-512.png',
    './icons/nocturne-apple-touch-180.png',
    './icons/profile.svg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(FILES_TO_CACHE))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((names) =>
            Promise.all(
                names
                    .filter((name) => name.startsWith('nocturne-') && name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    if (new URL(event.request.url).origin !== self.location.origin) return;

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                if (response.ok) {
                    const copy = response.clone();
                    event.waitUntil(
                        caches.open(CACHE_NAME)
                            .then((cache) => cache.put(event.request, copy))
                    );
                }
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});