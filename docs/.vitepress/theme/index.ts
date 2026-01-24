// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './style/index.css'

/* ====== 你的组件 / 插件 ====== */
import Confetti from "./components/Confetti.vue"
import giscusTalk from 'vitepress-plugin-comment-with-giscus'

/* ====== VitePress & Vue ====== */
import { useData, useRoute } from 'vitepress'
import { inBrowser } from "vitepress"
import { onMounted, watch, nextTick } from 'vue'

/* ====== NProgress ====== */
import { NProgress } from "nprogress-v2/dist/index.js"
import "nprogress-v2/dist/index.css"

import mediumZoom from 'medium-zoom'

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
    const route = useRoute() // 确保这里获取了路由对象

    /* ====== 图片缩放 (Medium Zoom) ====== */
    const initZoom = () => {
      // 为 .main 容器下的所有图片增加缩放功能
      // 也可以根据需求修改选择器，例如 '.vp-doc img'
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }

    onMounted(() => {
      initZoom()
    })

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )

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