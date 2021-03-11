---
title: 帮助文档
---

## 如何编辑词条？

- 在`src/.vuepress/data/`内寻找相应 js 文件，修改对应模板内容，或直接修改相应 md 文件

## 如何新增词条？

- 在`src/.vuepress/data/`增加对应模板数据

内容示例：

```javascript
// card.js

export default {
  avatar: '/assets/image/char/avatar/hu-tao.png', // 头像链接
  name: '胡桃', // 角色名称
  prefix: '雪霁梅香', // 角色称号
  by: '往生堂', // 所属
  rank: 5, // 星级
  element: '火', // 元素(神之眼)
  constell: '引蝶座', // 命之座
  weapon: '长柄武器', // 武器类型
  cv: {
    // CV列表
    cn: '陶典', // 中配
    jp: '高桥李依', // 日配
    en: '布丽安娜 · 尼克博克', // 英配
    kr: '金贺娄' // 韩配
  },
  desc: '「往生堂」七十七代堂主，年纪轻轻就已主掌璃月的葬仪事务。' // 角色简介
}
```

- 创建对应 MD 文件

内容示例：

```markdown
---
title: 胡桃
---

## 信息

<char-card name="hu-tao"/>

## 图片

<char-image name="hu-tao"/>

## 故事

<char-story name="hu-tao"/>

## 语音

<char-voice name="hu-tao"/>
```
