importScripts('./uv/uv.sw.js');

const sw = new UVServiceWorker();

sw.on('request', event => {

})

if (url == "www.pornhub.com") url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
if (url == "pornhub.com") url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

self.addEventListener('fetch', event => {
    event.respondWith(
        sw.fetch(event)
    )
});
