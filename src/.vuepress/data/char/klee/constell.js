// 角色命之座数据

/**
 * 在desc中 可以使用以下标签
 * <bold>文字强调</bold>
 * <pyro>火元素伤害</pyro>
 * <hydro>水元素伤害</hydro>
 * <geo>岩元素伤害</geo>
 * <electro>雷元素伤害</electro>
 * <cyro>冰元素伤害</cyro>
 * <ameno>风元素伤害</ameno
 */

export default {
  element: 'pyro', // 元素 参考上方标签名称
  data: [
    {
      title: "连环轰隆",
      image: "/image/char/talent/UI_Talent_S_Klee_01.png",
      desc: [
        '攻击与施放技能时，有几率召唤火花轰击敌人，造成相当于<bold>轰轰火花</bold>攻击伤害120%的伤害。'
      ]
    },
    {
      title: "破破弹片",
      image: "/image/char/talent/UI_Talent_S_Klee_02.png",
      desc: [
        '<bold>蹦蹦炸弹</bold>的诡雷会使敌人的防御力降低23%，持续10秒。'
      ]
    },
    {
      title: "可莉特调",
      image: "/image/char/talent/UI_Talent_U_Klee_01.png",
      desc: [
        '<bold>蹦蹦炸弹</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "一触即发",
      image: "/image/char/talent/UI_Talent_S_Klee_03.png",
      desc: [
        '如果在<bold>轰轰火花</bold>持续期间内退场，会引发爆炸，造成555%攻击力的<pyro>火元素范围伤害</pyro>。'
      ]
    },
    {
      title: "轰击之星",
      image: "/image/char/talent/UI_Talent_U_Klee_02.png",
      desc: [
        '<bold>轰轰火花</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "火力全开",
      image: "/image/char/talent/UI_Talent_S_Klee_04.png",
      desc: [
        '在<bold>轰轰火花</bold>的状态下，可莉每3秒会为队伍中所有角色（不包括可莉自己）恢复3点元素能量；',
        '施放<bold>轰轰火花</bold>后的25秒内，队伍中所有角色获得10%<bold>火元素伤害加成</bold>。'
      ]
    }
  ]
}
