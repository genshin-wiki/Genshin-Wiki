module.exports = {
  title: '原神百科',
  port: 8848,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: 'reco',
  themeConfig: {
    lastUpdated: '最后更新',
    docsRepo: 'Genshin-Wiki/Genshin-Wiki',
    docsDir: 'src',
    editLinks: true,
    editLinkText: '在 Github 编辑',
    record: '辽ICP备19016520号',
    catalogUrl: '/contents',
    recordLink: 'http://beian.miit.gov.cn/',
    startYear: '2021'
  }
}