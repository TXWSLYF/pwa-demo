var cacheName = 'latestNews-v1';

// 预加载资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll([
      './js/main.js',
      './js/article.js',
      './images/newspaper.svg',
      './css/site.css',
      './data/latest.json',
      './data/data-1.json',
      './article.html',
      './index.html'
    ]))
  );
});

// 缓存已加载过的资源
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true })
    .then(function(response) {
      if (response) {
        return response
      }
      var fetchRequest = event.request.clone()

      return fetch(fetchRequest).then(
        function(response) {
          if(!response || response.status !== 200) {
            return response
          }

          var responseToCache = response.clone()
          caches.open(cacheName)
          .then(function(cache) {
            cache.put(event.request, responseToCache)
          })

          return response;
        }
      )
    })
  )
})

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`)
  let body = JSON.parse(event.data.text())

  const title = body.title || '新闻早知道'
  const options = {
    body: body.msg,
    data: body.url,
    icon: 'images/homescreen.png',
    badge: 'images/homescreen.png'
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()

  event.waitUntil(
    clients.openWindow(event.notification.data)
  )
})
