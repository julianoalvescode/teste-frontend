if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js')
      let s = Promise.resolve()
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const n = document.createElement('script')
              ;(n.src = e), document.head.appendChild(n), (n.onload = s)
            } else importScripts(e), s()
          })),
        s.then(() => {
          if (!n[e]) throw new Error(`Module ${e} didn’t register its module`)
          return n[e]
        })
      )
    },
    s = (s, n) => {
      Promise.all(s.map(e)).then((e) => n(1 === e.length ? e[0] : e))
    },
    n = { require: Promise.resolve(s) }
  self.define = (s, t, i) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {}
        const a = { uri: location.origin + s.slice(1) }
        return Promise.all(
          t.map((s) => {
            switch (s) {
              case 'exports':
                return n
              case 'module':
                return a
              default:
                return e(s)
            }
          })
        ).then((e) => {
          const s = i(...e)
          return n.default || (n.default = s), n
        })
      }))
  }
}
define('./sw.js', ['./workbox-ea903bce'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/C-4oqisjNzGLntk9wLJD6/_buildManifest.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        {
          url: '/_next/static/C-4oqisjNzGLntk9wLJD6/_ssgManifest.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        {
          url: '/_next/static/chunks/46-dbabcbd81a81556a6283.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        {
          url: '/_next/static/chunks/6728d85a-ee4a9ace2d83442b4ae8.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        {
          url: '/_next/static/chunks/95b64a6e-7ecb33688e0733229db7.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        {
          url: '/_next/static/chunks/framework-2191d16384373197bc0a.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        {
          url: '/_next/static/chunks/main-dc05f6a777bd1f810fad.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        {
          url: '/_next/static/chunks/pages/_app-fd84014359acbc0d5d5e.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        {
          url: '/_next/static/chunks/pages/_error-e69890b6db18dcbc6fa4.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        {
          url: '/_next/static/chunks/pages/index-87979b92a9ad6f9d8dac.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        {
          url: '/_next/static/chunks/pages/org-80ab77ccd1acd010d850.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        {
          url: '/_next/static/chunks/pages/search-e76ae41dfb4d84617dad.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        {
          url: '/_next/static/chunks/polyfills-eef578260fd80f8fff94.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        {
          url: '/_next/static/chunks/webpack-af8d060cb140570bcfb2.js',
          revision: 'C-4oqisjNzGLntk9wLJD6',
        },
        { url: '/_next/static/css/f6d07377d802f854cb60.css', revision: 'C-4oqisjNzGLntk9wLJD6' },
        {
          url: '/static/img/android-chrome-192x192.png',
          revision: '3dc6b46228d50db76099b1cdd0b88e54',
        },
        {
          url: '/static/img/android-chrome-512x512.png',
          revision: '3aa40b02d469760c8d11f3a69e6b3e7d',
        },
        { url: '/static/img/apple-touch-icon.png', revision: 'd62993fd2b625f5fac103e9526ca448b' },
        { url: '/static/img/background.jpg', revision: '9271785a6a72263861625464d1037470' },
        { url: '/static/img/error.svg', revision: '5b23a7fc4ed56ca788010da322a9ae3e' },
        { url: '/static/img/favicon-16x16.png', revision: '9b080bbd20951337d1365c35f321efad' },
        { url: '/static/img/favicon-32x32.png', revision: 'a699268d9f19ea5cc68506b6e6882de5' },
        { url: '/static/img/favicon.ico', revision: '5b644ffe9b0a6333c13678c0b5406a72' },
        { url: '/static/img/logo.png', revision: 'd9df2ea0eafac04a9e80b2e3409099db' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: n, state: t }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-media-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    )
})
