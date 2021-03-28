<template>
  <el-tabs v-model="activeName">
    <el-tab-pane v-for="(item, key) in data.data" :label="item.title" :key="'char-constell-' + key" :name="'char-constell-' + data.element + '-' + key">
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
import { getDesc } from '../../../common/utils'
export default {
  props: {
    data: Object | Array
  },
  data() {
    return {
      activeName: ''
    }
  },
  mounted() {
    this.activeName = `char-constell-${this.data.element}-0`
  },
  methods: {
    getDesc
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/common/element-desc.scss';
</style>
