<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(item, key) in data.data" :label="item.title" :key="'char-talent-' + key" :name="'char-talent-' + key">
        <div class="char-talent-image">
          <div :class="'background ' + data.element">
            <img class="image" :src="$baseURL + item.image" />
          </div>
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
  .background {
    width: 100px;
    height: 100px;
    position: relative;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  .image {
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .pyro {
    background: rgba($color: #ff9999, $alpha: 0.7);
  }
  .hydro {
    background: rgba($color: #80c0ff, $alpha: 0.7);
  }
  .geo {
    background: rgba($color: #ffe699, $alpha: 0.7);
  }
  .electro {
    background: rgba($color: #ffacff, $alpha: 0.7);
  }
  .cyro {
    background: rgba($color: #90ecfe, $alpha: 0.7);
  }
  .ameno {
    background: rgba($color: #80ffd7, $alpha: 0.7);
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
