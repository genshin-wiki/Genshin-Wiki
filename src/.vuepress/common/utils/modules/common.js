// 格式化简介
function getDesc(desc) {
  // 正则匹配全部标签
  /**
   * bold 强调
   * pyro 火
   * hydro 水
   * geo 岩
   * electro 雷
   * cyro 冰
   * ameno 风
   */
  const reg = /<((bold)|(pyro)|(hydro)|(geo)|(electro)|(cyro)|(ameno))>(.*?)<\/((bold)|(pyro)|(hydro)|(geo)|(electro)|(cyro)|(ameno))>/g
  // 替换标签为对应样式
  let result = desc.replace(reg, '<span class="$1">$9</span>')
  // 是否为空
  if (result === '') {
    // 为空则添加空格
    result = '&nbsp;'
  }
  // 返回
  return result
}

export { getDesc }
