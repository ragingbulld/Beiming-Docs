import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "北冥文档库",
  description: "Minecraft 服务器游玩指南",
  head: [
    // 网站图标（浏览器标签页）
    ["link", { rel: "icon", href: "https://bu.dusays.com/2025/09/09/68bfa36e3d5d8.ico" }],
    // 移动端适配
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    logo: '/logo512.webp',
    outline: { 
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },
    //编辑本页
    editLink: { 
      pattern: 'https://github.com/ragingbulld/Beiming-Docs/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },
    //上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
    // 🔹 顶部导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/quick-start' },
      { text: '服务器守则', link: '/server-rules' },
      { text: '常见问题', link: '/faq' },
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: '74UVGNCPRE',
        apiKey: 'b04e083a8829f21d0bda88ac50d89bdd',
        indexName: 'docs',
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                },
              },
            },
          },
        },
      },
    },
    // 🔹 侧边栏
    sidebar: [
      {
        text: '快速开始',
        collapsed: false,
        items: [
          { text: '服务器介绍', link: '/main/introductions.md' },
          { text: '如何进入服务器', link: '/main/access-server.md' },
        ]
      },
      {
        text: '玩法指南',
        collapsed: false,
        items: [
          { text: '生电服务器', items: [ { text: '如何使用carpet', link: '/main/intro-history.md' }, { text: '红石机器使用事项', link: '/main/intro-features.md' } ] },
          { text: '整合包服务器', items: [ { text: '如何下载整合包', link: '/main/intro-history.md' } ] },
        ]
      },
      {
        text: '服务器信息',
        collapsed: false,
        items: [
          { text: '服务器守则', link: '/rules/server-rules' },
          { text: 'FAQ', link: '/faq' },
        ]
      }
    ],

    // 🔹 社交链接（示例）
    socialLinks: [
      { icon: 'bilibili', link: 'https://b23.tv/6ld3Ns8' },
      { icon: 'qq', link: 'https://qm.qq.com/q/PFHxrAUwi6' }
    ],

    // 🔹 页脚（可选）
    footer: {
      copyright: '© 2025 北冥·群组服'
    }
  }
})
