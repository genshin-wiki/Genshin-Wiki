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
      title: "弦发的苍风",
      image: "/image/char/talent/UI_Talent_S_Venti_01.png",
      desc: [
        '<bold>瞄准射击</bold>会额外发射两枚分裂箭，分别造成原本33%的伤害。'
      ]
    },
    {
      title: "眷恋的泠风",
      image: "/image/char/talent/UI_Talent_S_Venti_02.png",
      desc: [
        '<bold>高天之歌</bold>会使敌人的<ameno>风元素抗性</ameno>与物理抗性降低12%，持续10秒。',
        '被<bold>高天之歌</bold>击飞的敌人在落地前，<ameno>风元素抗性</ameno>与物理抗性额外降低12%。'
      ]
    },
    {
      title: "千风的诗篇",
      image: "/image/char/talent/UI_Talent_U_Venti_02.png",
      desc: [
        '<bold>风神之诗</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "自由的凛风",
      image: "/image/char/talent/UI_Talent_S_Venti_03.png",
      desc: [
        '温迪获取元素晶球或元素微粒后，获得25%<ameno>风元素伤害加成</ameno>，持续10秒。'
      ]
    },
    {
      title: "高天的协奏",
      image: "/image/char/talent/UI_Talent_U_Venti_01.png",
      desc: [
        '<bold>高天之歌</bold>的技能等级提高3级。',
        '至多提升至15级。'
      ]
    },
    {
      title: "抗争的暴风",
      image: "/image/char/talent/UI_Talent_S_Venti_04.png",
      desc: [
        '受<bold>风神之诗</bold>伤害的敌人，<ameno>风元素抗性</ameno>降低20%；',
        '若产生了元素转化，则使转换的元素抗性也降低20%。'
      ]
    }
  ]
}
