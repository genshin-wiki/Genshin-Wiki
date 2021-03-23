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
  element: 'geo', // 元素 参考上方标签名称
  data: [
    {
      title: "岩者，六合引之为骨",
      image: "/image/char/talent/UI_Talent_S_Zhongli_01.png",
      desc: [
        '<bold>地心</bold>创造的岩脊至多可以同时存在2个。'
      ]
    },
    {
      title: "石者，八荒韫玉而明",
      image: "/image/char/talent/UI_Talent_S_Zhongli_02.png",
      desc: [
        '<bold>天星</bold>陨落时，会为附近的当前场上角色赋予玉璋护盾。'
      ]
    },
    {
      title: "圭璋，暝仍不移其晖",
      image: "/image/char/talent/UI_Talent_U_Zhongli_01.png",
      desc: [
        '<bold>地心</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "黄琮，破而不夺其坚",
      image: "/image/char/talent/UI_Talent_S_Zhongli_03.png",
      desc: [
        '<bold>天星</bold>的影响范围扩大20%。',
        '此外，天星的石化效果持续时间延长2秒。'
      ]
    },
    {
      title: "苍璧，驱之长昭天理",
      image: "/image/char/talent/UI_Talent_U_Zhongli_02.png",
      desc: [
        '<bold>天星</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "金玉，礼予天地四方",
      image: "/image/char/talent/UI_Talent_S_Zhongli_04.png",
      desc: [
        '玉璋护盾受到伤害时，将为当前角色恢复生命值，回复量为伤害的40%。',
        '单次回复量不超过当前角色最大生命值的8%。'
      ]
    }
  ]
}
