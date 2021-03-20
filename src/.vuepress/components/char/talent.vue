<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(item, key) in data.data" :label="item.title" :key="'char-talent-' + key" :name="'char-talent-' + key">
        <div class="char-talent-image">
          <img :class="data.element" :src="$baseURL + item.image" />
        </div>
        <div class="char-talent-desc" v-for="(desc, descKey) in item.desc" :key="'char-talent-desc-' + descKey" v-html="getDesc(desc)"></div>
        <char-talent-table v-if="item.data != null" :data="item.data" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      data: [],
      activeName: 'char-talent-0'
    }
  },
  created() {
    const result = require(`../../data/char/${this.name}/talent.js`)
    this.data = result.default
  },
  methods: {
    // 格式化简介
    getDesc(desc) {
      // 正则匹配全部标签
      /**
       * bold 强调
       * pyro 火
       * hydro 水
       * geo 岩
       * electro 雷
       * cyro 冰
       * ameno 风
       */
      const reg = /<((bold)|(pyro)|(hydro)|(geo)|(electro)|(cyro)|(ameno))>(.*?)<\/((bold)|(pyro)|(hydro)|(geo)|(electro)|(cyro)|(ameno))>/g
      // 替换标签为对应样式
      let result = desc.replace(reg, '<span class="$1">$9</span>')
      // 是否为空
      if (result === '') {
        // 为空则添加空格
        result = '&nbsp;'
      }
      // 返回
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.char-talent-image {
  .base {
    border-radius: 50%;
    margin-bottom: 20px;
    width: 100px;
    height: 100px;
  }
  .pyro {
    @extend .base;
    background: #ff9999;
  }
  .hydro {
    @extend .base;
    background: #80c0ff;
  }
  .geo {
    @extend .base;
    background: #ffe699;
  }
  .electro {
    @extend .base;
    background: #ffacff;
  }
  .cyro {
    @extend .base;
    background: #4be1ff;
  }
  .ameno {
    @extend .base;
    background: #80ffd7;
  }
}
.char-talent-desc {
  margin-bottom: 10px;

  ::v-deep .base {
    font-weight: bold;
  }
  ::v-deep .bold {
    @extend .base;
    color: #ffc038;
  }
  ::v-deep .pyro {
    @extend .base;
    color: #ff4b4b;
  }
  ::v-deep .hydro {
    @extend .base;
    color: #389cff;
  }
  ::v-deep .geo {
    @extend .base;
    color: #ffd34b;
  }
  ::v-deep .electro {
    @extend .base;
    color: #ff5bff;
  }
  ::v-deep .cyro {
    @extend .base;
    color: #4be1ff;
  }
  ::v-deep .ameno {
    @extend .base;
    color: #38ffc0;
  }
}
</style>
