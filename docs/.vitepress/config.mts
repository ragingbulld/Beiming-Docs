import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'
import { figure } from '@mdit/plugin-figure'

// 先写你的基础配置
const baseConfig = {
  title: "北冥文档库",
  description: "Minecraft 服务器游玩指南",
  head: [
    ["link", { rel: "icon", href: "https://bu.dusays.com/2025/09/09/68bfa36e3d5d8.ico" }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
  ],
  markdown: {
    lineNumbers: true,
    config: (md) => md.use(figure)
  },
  themeConfig: {
    logo: '/logo512.webp',
    outline: { 
      level: [2,4],
      label: '当前页大纲'
    },
    editLink: { 
      pattern: 'https://github.com/ragingbulld/Beiming-Docs/edit/main/docs/:path',
      text: '在GitHub编辑本页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'medium' },
    },
    docFooter: { prev: '上一页', next: '下一页' }, 
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/1-服务器总体/1.1-如何加入服务器' },
      { text: '服务器守则', link: '/main/server-rules' },
      { text: '常见问题', link: '/main/faq' },
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
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: { recentSearchesTitle: '搜索历史', noRecentSearchesText: '没有搜索历史', saveRecentSearchButtonTitle: '保存至搜索历史', removeRecentSearchButtonTitle: '从搜索历史中移除', favoriteSearchesTitle: '收藏', removeFavoriteSearchButtonTitle: '从收藏中移除' },
                errorScreen: { titleText: '无法获取结果', helpText: '你可能需要检查你的网络连接' },
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭', searchByText: '搜索提供者' },
                noResultsScreen: { noResultsText: '无法找到相关结果', suggestedQueryText: '你可以尝试查询', reportMissingResultsText: '你认为该查询应该有结果？', reportMissingResultsLinkText: '点击反馈' }
              },
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ragingbulld/Beiming-Docs' },
      { icon: 'bilibili', link: 'https://b23.tv/6ld3Ns8' },
      { icon: 'qq', link: 'https://qm.qq.com/q/PFHxrAUwi6' }
    ],
    footer: { copyright: '© 2025 北冥·群组服' }
  }
}

// 侧边栏配置，用 withSidebar 包裹
export default defineConfig(
  withSidebar(baseConfig, {
    collapsed: true,
    documentRootPath: '/docs',
    sortMenusByFrontmatterOrder: true,
    removePrefixAfterOrdering: true,
    prefixSeparator: '-',
  })
)
