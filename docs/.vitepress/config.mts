import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "北冥·群组服",
  description: "Minecraft 服务器游玩指南",
  head: [
    // 网站图标（浏览器标签页）
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // 移动端适配
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
  ],

  themeConfig: {
    logo: '/logo512.webp',

    // 🔹 顶部导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/quick-start' },
      { text: '服务器守则', link: '/server-rules' },
      { text: '常见问题', link: '/faq' },
    ],

    // 🔹 侧边栏
    sidebar: [
      {
        text: '快速开始',
        collapsed: false,
        items: [
          { text: '进入服务器', link: '/quick-start' },
          { text: '整合包安装', link: '/modpack-install' },
        ]
      },
      {
        text: '玩法指南',
        collapsed: false,
        items: [
          { text: '生电技巧', link: '/gameplay/redstone' },
          { text: '整合包特色', link: '/gameplay/modpack-features' },
        ]
      },
      {
        text: '服务器信息',
        collapsed: false,
        items: [
          { text: '服务器守则', link: '/server-rules' },
          { text: '网络优化说明', link: '/network-optimization' },
          { text: 'FAQ', link: '/faq' },
        ]
      }
    ],

    // 🔹 社交链接（示例）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Beiming-Group' },
      { icon: 'discord', link: 'https://discord.gg/xxxxxx' },
      { icon: 'qq', link: 'https://qm.qq.com/xxxxxx' }
    ],

    // 🔹 页脚（可选）
    footer: {
      copyright: '© 2025 北冥·群组服'
    }
  }
})
