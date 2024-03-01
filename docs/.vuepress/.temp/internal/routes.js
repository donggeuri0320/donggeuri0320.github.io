export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/hsyang/donggeuri0320.github.io/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/hsyang/donggeuri0320.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/ddd/appp.html", { loader: () => import(/* webpackChunkName: "appp.html" */"C:/hsyang/donggeuri0320.github.io/docs/.vuepress/.temp/pages/ddd/appp.html.js"), meta: {"title":""} }],
  ["/ddd/ddd.html", { loader: () => import(/* webpackChunkName: "ddd.html" */"C:/hsyang/donggeuri0320.github.io/docs/.vuepress/.temp/pages/ddd/ddd.html.js"), meta: {"title":""} }],
  ["/ddd/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/hsyang/donggeuri0320.github.io/docs/.vuepress/.temp/pages/ddd/index.html.js"), meta: {"title":"DDD"} }],
  ["/ddd/ttt.html", { loader: () => import(/* webpackChunkName: "ttt.html" */"C:/hsyang/donggeuri0320.github.io/docs/.vuepress/.temp/pages/ddd/ttt.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/hsyang/donggeuri0320.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
