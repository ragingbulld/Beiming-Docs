import { defineConfig } from 'vitepress'

const base = "/beiming-docs/"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "北冥·群组服",
  description: "服务器游玩指南",
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `/favicon.ico` }],
  ],
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
