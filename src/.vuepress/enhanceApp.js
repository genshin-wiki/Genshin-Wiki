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
  console.log('====================================');
  console.log('Genshin Wiki By ZhenXin');
  console.log('Github: https://github.com/Genshin-Wiki/Genshin-Wiki');
  console.log('====================================');
};