<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(item, key) in data.data" :label="item.title" :key="'char-talent-' + key" :name="'char-talent-' + key">
        <div class="char-element-image">
          <div :class="'background ' + data.element">
            <img class="image" :src="$baseURL + item.image" />
          </div>
        </div>
        <div class="char-element-desc" v-for="(desc, descKey) in item.desc" :key="'char-talent-desc-' + descKey" v-html="getDesc(desc)"></div>
        <char-talent-table v-if="item.data != null" :data="item.data" />
      </el-tab-pane>
    </el-tabs>
  </div>
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
      activeName: 'char-talent-0'
    }
  },
  created() {
    const result = require(`../../data/char/${this.name}/talent.js`)
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
