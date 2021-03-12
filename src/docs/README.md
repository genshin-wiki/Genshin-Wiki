---
title: 帮助文档
---

## 克隆项目

需git支持 [下载地址](https://git-scm.com/download/)

```shell
# Github
git clone https://github.com/Genshin-Wiki/Genshin-Wiki

# Gitee 国内访问更快
git clone https://gitee.com/Genshin-Wiki/Genshin-Wiki
```

## 安装依赖

需Nodejs环境 [下载地址](https://nodejs.org/zh-cn/) 推荐使用LTS（长期支持版）

- 安装yarn (如已安装请忽略)

```shell
# 安装yarn和yrm
npm i -g yarn yrm --registry https://registry.npm.taobao.org
# 使用yrm切换淘宝镜像
yrm use taobao
```

- 安装项目依赖

```shell
yarn
```

- 运行开发服务器

```shell
yarn dev
```

访问[本地8848端口](http://localhost:8848)打开网页

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
