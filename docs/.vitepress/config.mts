import { defineConfig } from 'vitepress'
import { nav } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "北冥·群组服",
  description: "服务器游玩指南",
  themeConfig: {
    logo: '/logo512.webp',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
