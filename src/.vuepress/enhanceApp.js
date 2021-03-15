import Element from 'element-ui';
import './element-theme/index.css'
export default ({ Vue, router }) => {
  const env = process.env.NODE_ENV
  let baseURL = ''
  if (env && env == 'development') {
    baseURL = 'http://localhost:8849'
  } else {
    baseURL = 'https://static.ys.zhenxin.xyz'
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
  console.log('====================================')
  console.log('Genshin Wiki By ZhenXin')
  console.log('Github: https://github.com/Genshin-Wiki/Genshin-Wiki')
  console.log('====================================')
};
