<template>
  <el-tabs v-model="activeName">
    <el-tab-pane v-for="(item, key) in data.data" :label="item.title" :key="'char-constell-' + key" :name="'char-constell-' + key">
      <div class="char-element-image">
        <div :class="'background ' + data.element">
          <img class="image" :src="$baseURL + item.image" />
        </div>
      </div>
      <div class="char-element-desc" v-for="(desc, descKey) in item.desc" :key="'char-constell-desc-' + descKey" v-html="getDesc(desc)"></div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { getDesc } from '../../common/utils'
export default {
  props: {
    name: String
  },
  data() {
    return {
      data: [],
      activeName: 'char-constell-0'
    }
  },
  created() {
    const result = require(`../../data/char/${this.name}/constell`)
    this.data = result.default
  },
  methods: {
    getDesc
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/common/element-desc.scss';
</style>
