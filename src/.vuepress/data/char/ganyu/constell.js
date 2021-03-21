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
  element: 'cyro', // 元素 参考上方标签名称
  data: [
    {
      title: "饮露",
      image: "/image/char/talent/UI_Talent_S_Ganyu_01.png",
      desc: [
        '二段蓄力重击的霜华矢或霜华绽发命中敌人时，会使敌人的<cyro>冰元素抗性</cyro>降低15%，持续6秒；',
        '此外，命中时会为甘雨恢复2点元素能量。每次二段蓄力重击只能触发一次元素能量恢复效果，无论霜华矢或霜华绽发是否都命中目标。'
      ]
    },
    {
      title: "获麟",
      image: "/image/char/talent/UI_Talent_S_Ganyu_02.png",
      desc: [
        '<bold>山泽麟迹</bold>的可使用次数增加1次'
      ]
    },
    {
      title: "云行",
      image: "/image/char/talent/UI_Talent_U_Ganyu_01.png",
      desc: [
        '<bold>降众天华</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "西狩",
      image: "/image/char/talent/UI_Talent_S_Ganyu_03.png",
      desc: [
        '在<bold>降众天华</bold>的领域内，敌人受到的伤害会增加，这个效果会随时间逐步加强。',
        '受伤害加成初始为5%,每3秒提升5%，至多提升至25%。',
        '离开领域后，效果至多持续3秒。'
      ]
    },
    {
      title: "折草",
      image: "/image/char/talent/UI_Talent_U_Ganyu_02.png",
      desc: [
        '<bold>山泽麟迹</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "履虫",
      image: "/image/char/talent/UI_Talent_S_Ganyu_01.png",
      desc: [
        '施放<bold>山泽麟迹</bold>后30秒内的第一次霜华矢，无需蓄力即可施放。'
      ]
    }
  ]
}
