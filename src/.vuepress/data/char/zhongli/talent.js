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
