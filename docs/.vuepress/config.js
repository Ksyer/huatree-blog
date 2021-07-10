const moment = require('moment')

moment.locale('zh-cn')

module.exports = {
  base: '/docs/',
  title: '耀华的个人博客',
  description: '涵盖前端问题库',
  port: '8081',
  head: [
    ['link', { rel: 'icon', href: '/img/wyh.png' }],
    ['link', { rel: 'stylesheet', href: '/css/base.css' }]
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/back-to-top',
      '@vuepress/last-updated',
      {
        transformer: timestamp => {
          return moment(timestamp).format('LLLL')
        }
      },
      [
        '@vuepress/pwa',
        {
          serviceWorker: true,
          updatePopup: {
            message: '有新的内容.',
            buttonText: '更新'
          }
        }
      ]
    ]
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    nav: require('./nav.js'),
    sidebar: require('./sidebar.js'),
    collapsable: true,
    searchMaxSuggestoins: 10,
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  }
}
