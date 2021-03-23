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
      title: "占理不饶人",
      image: "/image/char/talent/UI_Talent_S_Feiyan_01.png",
      desc: [
        '烟绯进行重击时，每持有一枚丹火印，都会提高烟绯在咏唱期间的抗打断能力，并额外降低本次重击10%的体力消耗。'
      ]
    },
    {
      title: "最终解释权",
      image: "/image/char/talent/UI_Talent_S_Feiyan_02.png",
      desc: [
        '烟绯的重击对于生命值低于50%的敌人，暴击率提高20%。'
      ]
    },
    {
      title: "真火炼宝印",
      image: "/image/char/talent/UI_Talent_U_Feiyan_01.png",
      desc: [
        '<bold>丹书立约</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "丹书金铁券",
      image: "/image/char/talent/UI_Talent_S_Feiyan_03.png",
      desc: [
        '施放<bold>凭此结契</bold>时：',
        '生成一个伤害吸收量等于生命值上限75%护盾，持续15秒。',
        '该护盾对<pyro>火元素伤害</pyro>有250%的吸收效果。'
      ]
    },
    {
      title: "遵法结切书",
      image: "/image/char/talent/UI_Talent_U_Feiyan_02.png",
      desc: [
        '<bold>凭此结契</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "是额外条款",
      image: "/image/char/talent/UI_Talent_S_Feiyan_04.png",
      desc: [
        '烟绯持有的丹火印最大数量增加一枚。'
      ]
    }
  ]
}
