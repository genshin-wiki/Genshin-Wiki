// 角色天赋数据

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
      title: '普通攻击·卷积微尘',
      image: '/image/char/talent/Skill_A_03.png',
      desc: [
        '<bold>普通攻击</bold>',
        '进行至多六段的连续枪击。',
        '',
        '<bold>重击</bold>',
        '消耗一定体力，进行上挑攻击。',
        '',
        '<bold>下落攻击</bold>',
        '从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。',
        '魈进行下落攻击时，不会承受坠落伤害。'
      ],
      data: [
        {
          "title":"一段伤害",
          "data":[
              "27.54% + 27.54%",
              "29.42% + 29.42%",
              "31.3% + 31.3%",
              "33.8% + 33.8%",
              "35.68% + 35.68%",
              "37.87% + 37.87%",
              "40.69% + 40.69%",
              "43.51% + 43.51%",
              "46.32% + 46.32%",
              "49.14% + 49.14%",
              "51.96% + 51.96%",
              "54.78% + 54.78%",
              "57.59% + 57.59%",
              "60.41% + 60.41%",
              "63.23% + 63.23%"
          ]
      },
      {
          "title":"二段伤害",
          "data":[
              "56.94%",
              "60.82%",
              "64.7%",
              "69.88%",
              "73.76%",
              "78.29%",
              "84.11%",
              "89.93%",
              "95.76%",
              "101.58%",
              "107.4%",
              "113.23%",
              "119.05%",
              "124.87%",
              "130.69%"
          ]
      },
      {
          "title":"三段伤害",
          "data":[
              "68.55%",
              "73.23%",
              "77.9%",
              "84.13%",
              "88.81%",
              "94.26%",
              "101.27%",
              "108.28%",
              "115.29%",
              "122.3%",
              "129.31%",
              "136.33%",
              "143.34%",
              "150.35%",
              "157.36%"
          ]
      },
      {
          "title":"四段伤害",
          "data":[
              "37.66% + 37.66%",
              "40.23% + 40.23%",
              "42.8% + 42.8%",
              "46.22% + 46.22%",
              "48.79% + 48.79%",
              "51.79% + 51.79%",
              "55.64% + 55.64%",
              "59.49% + 59.49%",
              "63.34% + 63.34%",
              "67.2% + 67.2%",
              "71.05% + 71.05%",
              "74.9% + 74.9%",
              "78.75% + 78.75%",
              "82.6% + 82.6%",
              "86.46% + 86.46%"
          ]
      },
      {
          "title":"五段伤害",
          "data":[
              "71.54%",
              "76.42%",
              "81.3%",
              "87.8%",
              "92.68%",
              "98.37%",
              "105.69%",
              "113.01%",
              "120.32%",
              "127.64%",
              "134.96%",
              "142.28%",
              "149.59%",
              "156.91%",
              "164.23%"
          ]
      },
      {
          "title":"六段伤害",
          "data":[
              "95.83%",
              "102.37%",
              "108.9%",
              "117.61%",
              "124.15%",
              "131.77%",
              "141.57%",
              "151.37%",
              "161.17%",
              "170.97%",
              "180.77%",
              "190.58%",
              "200.38%",
              "210.18%",
              "219.98%"
          ]
      },
      {
          "title":"重击伤害",
          "data":[
              "121.09%",
              "129.34%",
              "137.6%",
              "148.61%",
              "156.86%",
              "166.5%",
              "178.88%",
              "191.26%",
              "203.65%",
              "216.03%",
              "228.42%",
              "240.8%",
              "253.18%",
              "265.57%",
              "277.95%"
          ]
      },
      {
          "title":"重击体力消耗",
          "data":[
              "25.0点",
              "25.0点",
              "25.0点",
              "25.0点",
              "25.0点",
              "25.0点",
              "25.0点",
              "25.0点",
              "25.0点",
              "25.0点",
              "25.0点",
              "25.0点",
              "25.0点",
              "25.0点",
              "25.0点"
          ]
      },
      {
          "title":"下坠期间伤害",
          "data":[
              "81.83%",
              "88.49%",
              "95.16%",
              "104.67%",
              "111.33%",
              "118.94%",
              "129.41%",
              "139.88%",
              "150.35%",
              "161.76%",
              "173.18%",
              "184.6%",
              "196.02%",
              "207.44%",
              "218.86%"
          ]
      },
      {
          "title":"低空/高空坠地冲击伤害",
          "data":[
              "163.63% / 204.39%",
              "176.95% / 221.02%",
              "190.27% / 237.66%",
              "209.3% / 261.42%",
              "222.62% / 278.06%",
              "237.84% / 297.07%",
              "258.77% / 323.21%",
              "279.7% / 349.36%",
              "300.63% / 375.5%",
              "323.46% / 404.02%",
              "346.29% / 432.54%",
              "369.12% / 461.06%",
              "391.96% / 489.57%",
              "414.79% / 518.09%",
              "437.62% / 546.61%"
          ]
      }
      ]
    },
    {
      title: '风轮两立',
      image: '/image/char/talent/UI_Talent_U_Xiao_01.png',
      desc: [
        '疾速突进，对路径上的敌人造成<ameno>风元素伤害</ameno>。可以在空中施放。',
        '初始拥有2次可使用次数。',
        '',
        '在他乡的传说里，世界会被两大风轮碾碎，魈的枪术已臻化境，来回之间仿佛两座风轮同时撕裂敌人。'
      ],
      data: [
        {
          "title":"技能伤害",
          "data":[
              "252.8%",
              "271.76%",
              "290.72%",
              "316%",
              "334.96%",
              "353.92%",
              "379.2%",
              "404.48%",
              "429.76%",
              "455.04%",
              "480.32%",
              "505.6%",
              "537.2%",
              "568.8%",
              "600.4%"
          ]
      },
      {
          "title":"冷却时间",
          "data":[
              "10.0秒",
              "10.0秒",
              "10.0秒",
              "10.0秒",
              "10.0秒",
              "10.0秒",
              "10.0秒",
              "10.0秒",
              "10.0秒",
              "10.0秒",
              "10.0秒",
              "10.0秒",
              "10.0秒",
              "10.0秒",
              "10.0秒"
          ]
      }
      ]
    },
    {
      title: '靖妖傩舞',
      image: '/image/char/talent/UI_Talent_U_Xiao_02.png',
      desc: [
        '展现数千年前令神魔精妖睹之胆颤的夜叉傩面。',
        '',
        '<bold>夜叉傩面</bold>',
        '·大幅提升魑的跳跃能力;',
        '·提高攻击范围与攻击伤害；',
        '·将攻击伤害转为<ameno>风元素伤害</ameno>，该元素转化无法被附魔覆盖。',
        '',
        '在这个状态下,魈会持续损失生命值。',
        '效果将在魈退场时解除。',
        '',
        '戴上降魔的傩面，现出令诸恶胆寒，除尽妖魔奸邪的「护法夜叉」之姿。获得强大的力量，也会引导出巨大的痛苦。其式既名「靖妖傩舞」。'
      ],
      data: [
        {
          "title":"普通攻击/重击/下落攻击伤害提升",
          "data":[
              "58.45%",
              "61.95%",
              "65.45%",
              "70%",
              "73.5%",
              "77%",
              "81.55%",
              "86.1%",
              "90.65%",
              "95.2%",
              "99.75%",
              "104.3%",
              "108.85%",
              "113.4%",
              "117.95%"
          ]
      },
      {
          "title":"生命流失",
          "data":[
              "每秒3%当前生命值",
              "每秒3%当前生命值",
              "每秒3%当前生命值",
              "每秒2.5%当前生命值",
              "每秒2.5%当前生命值",
              "每秒2.5%当前生命值",
              "每秒2%当前生命值",
              "每秒2%当前生命值",
              "每秒2%当前生命值",
              "每秒2%当前生命值",
              "每秒2%当前生命值",
              "每秒2%当前生命值",
              "每秒2%当前生命值",
              "每秒2%当前生命值",
              "每秒2%当前生命值"
          ]
      },
      {
          "title":"持续时间",
          "data":[
              "15.0秒",
              "15.0秒",
              "15.0秒",
              "15.0秒",
              "15.0秒",
              "15.0秒",
              "15.0秒",
              "15.0秒",
              "15.0秒",
              "15.0秒",
              "15.0秒",
              "15.0秒",
              "15.0秒",
              "15.0秒",
              "15.0秒"
          ]
      },
      {
          "title":"CD",
          "data":[
              "18.0秒",
              "18.0秒",
              "18.0秒",
              "18.0秒",
              "18.0秒",
              "18.0秒",
              "18.0秒",
              "18.0秒",
              "18.0秒",
              "18.0秒",
              "18.0秒",
              "18.0秒",
              "18.0秒",
              "18.0秒",
              "18.0秒"
          ]
      },
      {
          "title":"元素能量",
          "data":[
              "70",
              "70",
              "70",
              "70",
              "70",
              "70",
              "70",
              "70",
              "70",
              "70",
              "70",
              "70",
              "70",
              "70",
              "70"
          ]
      }
      ]
    },
    {
      title: '降魔·平妖大圣心',
      image: '/image/char/talent/UI_Talent_S_Xiao_05.png',
      desc: [
        '在<bold>靖妖傩舞</bold>状态下，魈造成的所有伤害提高5%。此后，在技能持续时间内，每经过3秒，造成的伤害再额外提高5%。',
        '至多获得25%伤害加成。'
      ],
      data: null
    },
    {
      title: '天地交泰',
      image: '/image/char/talent/UI_Talent_S_Xiao_06.png',
      desc: [
        '施放<bold>风轮两立</bold>会使之后7秒内的风轮两立造成的伤害提高15%。',
        '该效果持续7秒,最多叠加3次,叠加时刷新持续时间。'
      ],
      data: null
    },
    {
      title: '神通·空中自在法',
      image: '/image/char/talent/UI_Talent_Explosion_Climb.png',
      desc: [
        '队伍中自己的角色攀爬消耗的体力降低20%。',
        '无法与效果完全相同的固有天赋叠加。'
      ],
      data: null
    }
  ]
}
