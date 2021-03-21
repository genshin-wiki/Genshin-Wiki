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
      title: "赤团开时斜飞去",
      image: "/image/char/talent/UI_Talent_S_Hutao_03.png",
      desc: [
        '处于<bold>蝶引来生</bold>施加的<bold>彼岸蝶舞</bold>状态下时，胡桃的重击不会消耗体力。'
      ]
    },
    {
      title: "最不安神晴又复雨",
      image: "/image/char/talent/UI_Talent_S_Hutao_01.png",
      desc: [
        '<bold>血梅香</bold>造成的伤害提高，提高值相当于效果附加时胡桃生命值上限的10%。',
        '此外，<bold>安神秘法</bold>会为命中的敌人施加<bold>血梅香</bold>效果。'
      ]
    },
    {
      title: "逗留采血色",
      image: "/image/char/talent/UI_Talent_U_Hutao_01.png",
      desc: [
        '<bold>蝶引来生</bold>的技能等级提升3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "伴君眠花房",
      image: "/image/char/talent/UI_Talent_S_Hutao_02.png",
      desc: [
        '处于胡桃自己施加的<bold>血梅香</bold>状态影响下的敌人被击败时，附近的队伍中所有角色（不包括胡桃自己）的暴击率提高12%，持续15秒。'
      ]
    },
    {
      title: "无可奈何燃花作香",
      image: "/image/char/talent/UI_Talent_U_Hutao_02.png",
      desc: [
        '<bold>安神秘法</bold>的技能等级提升3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "幽蝶能留一缕芳",
      image: "/image/char/talent/UI_Talent_S_Hutao_04.png",
      desc: [
        '胡桃的生命值降至25%以下，或承受足以使她倒下的伤害时触发：',
        '此次伤害不会使胡桃倒下，并在接下来的10秒内，胡桃的所有元素抗性和物理抗性提高200%，暴击率提高100%，并极大地提高抗打断能力。',
        '这个效果在胡桃生命值为1时会自动触发。',
        '该效果每60秒只能触发一次。'
      ]
    }
  ]
}
