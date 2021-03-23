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
  element: 'ameno', // 元素 参考上方标签名称
  data: [
    {
      title: "坏劫·毁坏三界",
      image: "/image/char/talent/UI_Talent_S_Xiao_01.png",
      desc: [
        '<bold>风轮两立</bold>的可使用次数增加1次。'
      ]
    },
    {
      title: "空劫·虚空华开敷变",
      image: "/image/char/talent/UI_Talent_S_Xiao_02.png",
      desc: [
        '处于队伍后台时，魈自己的元素充能效率提高25%。'
      ]
    },
    {
      title: "降魔·忿怒显相",
      image: "/image/char/talent/UI_Talent_U_Xiao_01.png",
      desc: [
        '<bold>风轮两立</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "神通·诸苦灭尽",
      image: "/image/char/talent/UI_Talent_S_Xiao_03.png",
      desc: [
        '魈的生命值低于50%时，获得100%防御力提升。'
      ]
    },
    {
      title: "成劫·无明增长",
      image: "/image/char/talent/UI_Talent_U_Xiao_02.png",
      desc: [
        '<bold>靖妖傩舞</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "降魔·护法夜叉",
      image: "/image/char/talent/UI_Talent_S_Xiao_04.png",
      desc: [
        '在<bold>靖妖傩舞</bold>状态下，下落攻击命中至少2个敌人时，<bold>风轮两立</bold>立刻获得1次可使用次数，并且在接下来1秒内，可以无视冷却时间施放风轮两立。'
      ]
    }
  ]
}
