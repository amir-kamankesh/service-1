if (workbox) {
    workbox.core.setCacheNameDetails({prefix: "service-1"});

    self.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SKIP_WAITING') {
            self.skipWaiting();
        }
    });
    self.__precacheManifest = [].concat(self.__precacheManifest || []);
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
    workbox.routing.registerRoute('https://jsonplaceholder.typicode.com/todos/1', workbox.strategies.cacheFirst({
        cacheName: 'todo-api'
    }));
}
