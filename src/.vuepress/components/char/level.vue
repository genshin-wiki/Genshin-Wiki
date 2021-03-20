<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="20级突破" name="char-level-20">
      <char-level-item :data="data.lv20" />
    </el-tab-pane>
    <el-tab-pane label="40级突破" name="char-level-40">
      <char-level-item :data="data.lv40" />
    </el-tab-pane>
    <el-tab-pane label="50级突破" name="char-level-50">
      <char-level-item :data="data.lv50" />
    </el-tab-pane>
    <el-tab-pane label="60级突破" name="char-level-60">
      <char-level-item :data="data.lv60" />
    </el-tab-pane>
    <el-tab-pane label="70级突破" name="char-level-70">
      <char-level-item :data="data.lv70" />
    </el-tab-pane>
    <el-tab-pane label="80级突破" name="char-level-80">
      <char-level-item :data="data.lv80" />
    </el-tab-pane>
    <el-tab-pane label="90级属性" name="char-level-90">
      <char-level-item :data="data.lv90" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      data: [],
      activeName: 'char-level-20'
    }
  },
  created() {
    const result = require(`../../data/char/${this.name}/level.js`)
    this.data = result.default
  }
}
</script>

<style lang="scss" scoped></style>
