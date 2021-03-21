const moment = require('moment')
module.exports = {
  title: '原神百科',
  port: 8848,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
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
  plugins: [
    /*
    [
      require('../../plugin/vuepress-plugin-live2d')
    ],
    */
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format('YYYY/MM/DD HH:mm:ss')
        }
      }
    ],
    [
      'dynamic-title',
      {
        showText: '(/≧▽≦/)咦！又好了！',
        hideText: '(●—●)喔哟，崩溃啦！',
        recoverTime: 2000,
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://ys.zhenxin.xyz'
      }
    ],
    [
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.regularPath == '/' ? null : $page.frontmatter.description,
        twitterCard: _ => 'summary_large_image',
        type: $page => $page.regularPath == '/' ? 'website' : 'article',
        url: $page => 'https://ys.zhenxin.xyz' + $page.regularPath,
        image: $page => 'https://static.ys.zhenxin.xyz' + $page.frontmatter.image,
        customMeta: (add, context) => {
          const { $page } = context
          const categories = $page.frontmatter.categories
          const title = $page.title
          const keywords = $page.frontmatter.keywords
          let result = '原神wiki,原神攻略,原神资料,原神,原神百科,Genshin,Genshin Wiki,'
          if (categories) {
            result = result + categories + ','
          }
          if (title) {
            result = result + title + ','
          }
          if (keywords) {
            result = result + keywords + ','
          }
          result = result.substr(0, result.length - 1)
          add('keywords', result)
        }
      }
    ]
  ]
}
