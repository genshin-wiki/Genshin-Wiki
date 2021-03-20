// 角色资料卡数据

export default {
  avatar: '/image/char/avatar/Rosaria.png', // 头像链接
  name: '罗莎莉亚', // 角色名称
  prefix: '', // 角色称号
  by: '西风教会', // 所属
  rank: 4, // 星级
  element: '冰', // 元素(神之眼)
  constell: '荆冠座', // 命之座
  weapon: '长柄武器', // 武器类型
  cv: { // CV列表
    cn: '张安琪', // 中配
    jp: '加隈亜衣', // 日配
    en: 'Elizabeth Maxwell', // 英配
    kr: '김보나' // 韩配
  },
  desc: '除了打扮哪里都不像神职人员的修女，冷淡的言行中透着锐利，总是单独行动。', // 角色简介
  attributes: { // 基础属性
    attackType: '远程', // 攻击类型
    hp: 1030, // 生命值
    attack: 20, // 攻击力
    defense: 60, // 防御力
    proficient: 0, // 元素精通
    critRate: '5.0%', // 暴击率
    critDamage: '50.0%', // 暴击伤害
    heal: '0.0%', // 治疗加成
    healMe: '0.0%', // 受治疗加成
    recharge: '100%' // 元素充能效率
  }
}
