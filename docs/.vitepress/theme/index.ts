// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './style/index.css'

/* ====== 你的组件 / 插件 ====== */
import Confetti from "./components/Confetti.vue"
import giscusTalk from 'vitepress-plugin-comment-with-giscus'

/* ====== image viewer ====== */
import 'viewerjs/dist/viewer.min.css'
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'

/* ====== VitePress & Vue ====== */
import { useData, useRoute } from 'vitepress'
import { inBrowser } from "vitepress"
import { onMounted, watch, nextTick } from 'vue'

/* ====== NProgress ====== */
import { NProgress } from "nprogress-v2/dist/index.js"
import "nprogress-v2/dist/index.css"

let homePageStyle: HTMLStyleElement | undefined

const theme: Theme = {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // layout slots
    })
  },

  enhanceApp({ app, router }) {
    /* 注册全局组件 */
    app.component("Confetti", Confetti)
    app.component('vImageViewer', vImageViewer)

    /* 进度条 */
    if (inBrowser) {
      NProgress.configure({ showSpinner: false })

      router.onBeforeRouteChange = () => {
        NProgress.start()
      }
      router.onAfterRouteChange = () => {
        NProgress.done()
      }
    }
  },

  setup() {
    /* ====== VitePress 数据 ====== */
    const { frontmatter } = useData()
    const route = useRoute()

    /* ====== image viewer 启用 ====== */
    imageViewer(route)

    /* ====== giscus 评论 ====== */
    giscusTalk(
      {
        repo: 'ragingbulld/Beiming-Docs',
        repoId: 'R_kgDOP4NWZA',
        category: 'General',
        categoryId: 'DIC_kwDOP4NWZM4Cv--a',
        mapping: 'pathname',
        inputPosition: 'bottom',
        lang: 'zh-CN',
      },
      {
        frontmatter,
        route
      },
      true
    )
  }
}

export default theme
