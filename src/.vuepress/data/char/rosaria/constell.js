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
      title: "罪之导引",
      image: "/image/char/talent/UI_Talent_S_Rosaria_01.png",
      desc: [
        '罗莎莉亚的攻击造成暴击后，自身攻击速度提升10%，普通攻击造成的伤害提升10%，持续4秒。'
      ]
    },
    {
      title: "无福之地",
      image: "/image/char/talent/UI_Talent_S_Rosaria_02.png",
      desc: [
        '终命的圣礼创造的冰枪持续时间延长4秒。'
      ]
    },
    {
      title: "告解之仪",
      image: "/image/char/talent/UI_Talent_U_Rosaria_01.png",
      desc: [
        '<bold>噬罪的告解</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "苦痛恩典",
      image: "/image/char/talent/UI_Talent_S_Rosaria_03.png",
      desc: [
        '<bold>噬罪的告解</bold>造成暴击时，为罗莎莉亚自己恢复5点元素能量。',
        '每次噬罪的告解至多触发1次该效果。'
      ]
    },
    {
      title: "临终祈礼",
      image: "/image/char/talent/UI_Talent_U_Rosaria_02.png",
      desc: [
        '<bold>终命的圣礼</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "代行裁判",
      image: "/image/char/talent/UI_Talent_S_Rosaria_04.png",
      desc: [
        '<bold>终命的圣礼</bold>的攻击会使敌人的物理抗性降低20%，持续10秒。'
      ]
    }
  ]
}
