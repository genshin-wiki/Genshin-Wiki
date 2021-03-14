import Element from 'element-ui';
import './element-theme/index.css'

export default ({ Vue, options, router }) => {
  const env = process.env.NODE_ENV

  if (env && env == 'development') {
    Vue.prototype.$baseURL = 'http://localhost:8849'
  } else {
    Vue.prototype.$baseURL = 'https://static.ys.zhenxin.xyz'
  }

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
  console.log('====================================');
  console.log('Genshin Wiki By ZhenXin');
  console.log('Github: https://github.com/Genshin-Wiki/Genshin-Wiki');
  console.log('====================================');
};