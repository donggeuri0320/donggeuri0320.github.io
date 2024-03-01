import comp from "C:/hsyang/donggeuri0320.github.io/docs/.vuepress/.temp/pages/ddd/ddd.html.vue"
const data = JSON.parse("{\"path\":\"/ddd/ddd.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Hello DDD\",\"slug\":\"hello-ddd\",\"link\":\"#hello-ddd\",\"children\":[]}],\"git\":{\"updatedTime\":1709280235000,\"contributors\":[{\"name\":\"donggeuri0320\",\"email\":\"donggeuri0320@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"ddd/ddd.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
