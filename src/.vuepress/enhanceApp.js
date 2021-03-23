import Element from 'element-ui';
import './element-theme/index.css'
export default ({ Vue, router }) => {
  const env = process.env.NODE_ENV
  let baseURL = ''
  if (env && env == 'development') {
    baseURL = 'http://localhost:8849'
  } else {
    baseURL = 'https://genshin-wiki.gitee.io/static'
  }
  Vue.prototype.$baseURL = baseURL
  Vue.mixin({
    mounted() {
      import('wisdom-ui').then(function (m) {
        Vue.use(m.default)
      })
    },
  })

  Vue.use(Element);
  Vue.directive('table-drag', {
    inserted: function (el) {
      const table = el.querySelector('table')
      el.onmousewheel = function (e) {
        if (e.wheelDelta > 0) {
          table.scrollLeft -= 50
        } else {
          table.scrollLeft += 50
        }
        return false
      }
    }
  })
  const color = "color:#fff; background: linear-gradient(to right , #08f, #6cf); padding:3px; border-radius: 3px;"
  console.log("%c Genshin Wiki By ZhenXin ", color)
  console.log('%c Github: Genshin-Wiki/Genshin-Wiki ', color)
};
