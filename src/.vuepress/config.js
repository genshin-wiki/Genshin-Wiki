module.exports = {
  title: '原神百科',
  port: 8848,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'keywords', content: '原神,原神百科,Genshin,Genshin Wiki,米哈游,mihoyo,崩坏3,崩坏学园2,未定事件簿,米游社' }],
    ['meta', { name: 'description', content: '原神百科 - 使用vuepress搭建的现代化Wiki程序 提供原神的相关资料 角色 武器 圣遗物等 Github: https://github.com/Genshin-Wiki/Genshin-Wiki' }],
    ['script', { src: 'https://cdn.zhenxin.xyz/static/js/autoGray.js' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    lastUpdated: '最后更新',
    docsRepo: 'Genshin-Wiki/Genshin-Wiki',
    docsDir: 'src',
    editLinks: true,
    editLinkText: '在 Github 编辑',
    record: '辽ICP备19016520号',
    catalogUrl: '/contents',
    recordLink: 'http://beian.miit.gov.cn/',
    startYear: '2021',
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '帮助文档', link: '/docs/', icon: 'reco-api' },
      { text: 'Github', link: 'https://github.com/Genshin-Wiki/Genshin-Wiki', icon: 'reco-github' },
    ]
  },
  chainWebpack(config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  }
}