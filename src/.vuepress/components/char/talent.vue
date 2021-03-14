<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(item, key) in data" :label="item.title" :key="'char-talent-' + key" :name="'char-talent-' + key">
        <!-- <img :src="$baseURL + item.image" /> -->
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
    getDesc(desc) {
      let result = desc.replace(/<b>/g, '<span class="char-talent-desc-bold">')
      result = result.replace(/<\/b>/g, '</span>')
      return result
    }
  }
}
</script>

<style lang="stylus">
.char-talent-desc-bold
  font-weight bold
</style>

<style lang="stylus" scoped>
.char-talent-desc
  margin-bottom 12px
</style>
