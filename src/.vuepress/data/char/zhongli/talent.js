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
  element: 'geo', // 元素 参考上方标签名称
  data: [
    {
      title: '普通攻击·岩雨',
      image: '/image/char/talent/Skill_A_03.png',
      desc: [
        '<bold>普通攻击</bold>',
        '进行至多六段的连续枪击。',
        '',
        '<bold>重击</bold>',
        '消耗一定体力，向前方疾行，在行动路径上和终点投下如雨的岩枪。',
        '',
        '<bold>下落攻击</bold>',
        '从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。'
      ],
      data: [
        {
          title: '一段伤害',
          data: [
            '30.77%',
            '33.27%',
            '35.78%',
            '39.36%',
            '41.86%',
            '44.72%',
            '48.66%',
            '52.59%',
            '56.53%',
            '60.82%',
            '65.74%',
            '71.53%',
            '77.31%',
            '83.1%',
            '89.41%'
          ]
        },
        {
          title: '二段伤害',
          data: [
            '31.15%',
            '33.69%',
            '36.22%',
            '39.85%',
            '42.38%',
            '45.28%',
            '49.26%',
            '53.25%',
            '57.23%',
            '61.58%',
            '66.56%',
            '72.42%',
            '78.27%',
            '84.13%',
            '90.52%'
          ]
        },
        {
          title: '三段伤害',
          data: [
            '38.58%',
            '41.72%',
            '44.86%',
            '49.34%',
            '52.48%',
            '56.07%',
            '61%',
            '65.94%',
            '70.87%',
            '76.26%',
            '82.42%',
            '89.68%',
            '96.93%',
            '104.18%',
            '112.1%'
          ]
        },
        {
          title: '四段伤害',
          data: [
            '42.94%',
            '46.43%',
            '49.93%',
            '54.92%',
            '58.42%',
            '62.41%',
            '67.9%',
            '73.4%',
            '78.89%',
            '84.88%',
            '91.74%',
            '99.82%',
            '107.89%',
            '115.97%',
            '124.77%'
          ]
        },
        {
          title: '五段伤害',
          data: [
            '10.75%×4',
            '11.63%×4',
            '12.5%×4',
            '13.75%×4',
            '14.63%×4',
            '15.63%×4',
            '17%×4',
            '18.38%×4',
            '19.75%×4',
            '21.25%×4',
            '22.97%×4',
            '24.99%×4',
            '27.01%×4',
            '29.03%×4',
            '31.24%×4'
          ]
        },
        {
          title: '六段伤害',
          data: [
            '54.5%',
            '58.93%',
            '63.37%',
            '69.7%',
            '74.14%',
            '79.21%',
            '86.18%',
            '93.15%',
            '100.12%',
            '107.73%',
            '116.44%',
            '126.69%',
            '136.93%',
            '147.18%',
            '158.36%'
          ]
        },
        {
          title: '重击伤害',
          data: [
            '111.03%',
            '120.06%',
            '129.1%',
            '142.01%',
            '151.05%',
            '161.38%',
            '175.58%',
            '189.78%',
            '203.98%',
            '219.47%',
            '237.22%',
            '258.1%',
            '278.97%',
            '299.85%',
            '322.62%'
          ]
        },
        {
          title: '重击体力消耗',
          data: [
            '25.0点',
            '25.0点',
            '25.0点',
            '25.0点',
            '25.0点',
            '25.0点',
            '25.0点',
            '25.0点',
            '25.0点',
            '25.0点',
            '25.0点',
            '25.0点',
            '25.0点',
            '25.0点',
            '25.0点'
          ]
        },
        {
          title: '下坠期间伤害',
          data: [
            '63.93%',
            '69.14%',
            '74.34%',
            '81.77%',
            '86.98%',
            '92.93%',
            '101.1%',
            '109.28%',
            '117.46%',
            '126.38%',
            '135.3%',
            '144.22%',
            '153.14%',
            '162.06%',
            '170.98%'
          ]
        },
        {
          title: '低空/高空坠地冲击伤害',
          data: [
            '127.84% / 159.68%',
            '138.24% / 172.67%',
            '148.65% / 185.67%',
            '163.51% / 204.24%',
            '173.92% / 217.23%',
            '185.81% / 232.09%',
            '202.16% / 252.51%',
            '218.51% / 272.93%',
            '234.86% / 293.36%',
            '252.7% / 315.64%',
            '270.54% / 337.92%',
            '288.38% / 360.2%',
            '306.22% / 382.48%',
            '324.05% / 404.76%',
            '341.89% / 427.04%'
          ]
        }
      ]
    },
    {
      title: '地心',
      image: '/image/char/talent/UI_Talent_U_Zhongli_01.png',
      desc: [
        '山脉中、大地上、磐石间，都遍布着岩之力。能自如驱动这股力量的人却少之又少。',
        '',
        '<bold>点按</bold>',
        '命令大地上岩元素积聚而起，创造岩脊。',
        '',
        '<bold>点按</bold>',
        '令附近的岩元素爆发，造成以下效果：',
        '·如果岩脊数量没有达到上限，则创造岩脊；',
        '·形成玉璋护盾，伤害吸收量受益于钟离的生命值上限；',
        '·造成<geo>岩元素范围伤害</geo>；',
        '·身边如果有附带有<bold>岩元素</bold>的目标，则大量消耗至多两个目标的<bold>岩元素</bold>。这个效果不会造成伤害。',
        '',
        '<bold>岩脊</bold>',
        '创造时，造成<bold>岩元素范围伤害</bold>。',
        '此外，存在期间会与周围的其他<bold>岩元素创造物</bold>间歇进行原岩共鸣，对周围的敌人造成<bold>岩元素伤害</bold>。',
        '岩脊视为<bold>岩元素创造物</bold>，可以阻拦攻击，可以攀爬。',
        '由钟离自己创造的岩脊，初始同时只能存在一个。',
        '',
        '<bold>玉璋护盾</bold>',
        '对所有元素伤害与物理伤害有150%的吸收效果。',
        '处于玉璋护盾庇护下的角色，会使附近小范围内敌人的所有元素抗性与物理抗性降低20%，该效果不可叠加。',
        '',
        '岩者坚也，可攻玉雕金。'
      ],
      data: [
        {
          title: '岩脊伤害/共鸣伤害',
          data: [
            '16% / 32%',
            '17.2% / 34.4%',
            '18.4% / 36.8%',
            '20% / 40%',
            '21.2% / 42.4%',
            '22.4% / 44.8%',
            '24% / 48%',
            '25.6% / 51.2%',
            '27.2% / 54.4%',
            '28.8% / 57.6%',
            '30.4% / 60.8%',
            '32% / 64%',
            '34% / 68%',
            '36% / 72%',
            '38% / 76%'
          ]
        },
        {
          title: '点按冷却时间',
          data: [
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒'
          ]
        },
        {
          title: '长按伤害',
          data: [
            '80%',
            '86%',
            '92%',
            '100%',
            '106%',
            '112%',
            '120%',
            '128%',
            '136%',
            '144%',
            '152%',
            '160%',
            '170%',
            '180%',
            '190%'
          ]
        },
        {
          title: '护盾基础吸收量',
          data: [
            '1232',
            '1356',
            '1489',
            '1633',
            '1787',
            '1951',
            '2126',
            '2311',
            '2506',
            '2712',
            '2927',
            '3153',
            '3389',
            '3636',
            '3893'
          ]
        },
        {
          title: '护盾附加吸收量(最大生命值)',
          data: [
            '12.8%',
            '13.76%',
            '14.72%',
            '16%',
            '16.96%',
            '17.92%',
            '19.2%',
            '20.48%',
            '21.76%',
            '23.04%',
            '24.32%',
            '25.6%',
            '27.2%',
            '28.8%',
            '30.4%'
          ]
        },
        {
          title: '护盾持续时间',
          data: [
            '20.0秒',
            '20.0秒',
            '20.0秒',
            '20.0秒',
            '20.0秒',
            '20.0秒',
            '20.0秒',
            '20.0秒',
            '20.0秒',
            '20.0秒',
            '20.0秒',
            '20.0秒',
            '20.0秒',
            '20.0秒',
            '20.0秒'
          ]
        },
        {
          title: '长按冷却时间',
          data: [
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒'
          ]
        }
      ]
    },
    {
      title: '天星',
      image: '/image/char/talent/UI_Talent_U_Zhongli_02.png',
      desc: [
        '降下巨大的星岩，对坠落范围内的敌人造成巨额<geo>岩元素伤害</geo>，并使其<geo>石化</geo>。',
        '',
        '<bold>石化</bold>',
        '处于<geo>石化</geo>状态下的敌人无法行动。',
        '',
        '以陨天苍岩星，昭命理昏暝者。',
      ],
      data: [
        {
          title: '技能伤害',
          data: [
            '401.08%',
            '444.44%',
            '487.8%',
            '542%',
            '590.78%',
            '639.56%',
            '704.6%',
            '769.64%',
            '834.68%',
            '899.72%',
            '964.76%',
            '1029.8%',
            '1084%',
            '1138.2%',
            '1192.4%'
          ]
        },
        {
          title: '石化时间',
          data: [
            '3.1秒',
            '3.2秒',
            '3.3秒',
            '3.4秒',
            '3.5秒',
            '3.6秒',
            '3.7秒',
            '3.8秒',
            '3.9秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒',
            '4.0秒'
          ]
        },
        {
          title: '冷却时间',
          data: [
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒',
            '12.0秒'
          ]
        },
        {
          title: '元素能量',
          data: [
            '40',
            '40',
            '40',
            '40',
            '40',
            '40',
            '40',
            '40',
            '40',
            '40',
            '40',
            '40',
            '40',
            '40',
            '40'
          ]
        }
      ]
    },
    {
      title: '悬岩宸断',
      image: '/image/char/talent/UI_Talent_S_Zhongli_05.png',
      desc: [
        '玉璋护盾受到伤害时，会产生坚璧效果：',
        '·处于玉璋护盾庇护下的角色，护盾强效提升5%；',
        '·该效果至多叠加5次，持续直到玉璋护盾消失。'
      ],
      data: null
    },
    {
      title: '炊金馔玉',
      image: '/image/char/talent/UI_Talent_S_Zhongli_06.png',
      desc: [
        '基于生命值上限，钟离的以下攻击造成的伤害提高：',
        '·普通攻击、重击与下落攻击伤害提高值：生命值上限的1.39%',
        '·<bold>地心</bold>的岩脊、共鸣伤害与长按伤害提高值：生命值上限的1.9%',
        '·<bold>天星</bold>伤害提高值：生命值上限的33%'
      ],
      data: null
    },
    {
      title: '晶石命理',
      image: '/image/char/talent/UI_Talent_Forge_Pole.png',
      desc: [
        '锻造长柄武器时，返还15%消耗的矿石。'
      ],
      data: null
    }
  ]
}