<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(item, key) in data" :label="item.title" :key="key" :name="`${key}`">
        <img :src="$baseURL + item.image" />
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
      activeName: '0'
    }
  },
  created() {
    const result = require(`../../data/char/${this.name}/image.js`)
    this.data = result.default
  }
}
</script>

<style lang="stylus"></style>
