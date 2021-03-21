<template>
  <el-tabs v-model="activeName">
    <el-tab-pane v-for="(item, key) in data" :label="item.title" :key="'char-iaage-' + key" :name="'char-image-' + key">
      <img :src="$baseURL + item.image" />
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
      activeName: 'char-image-0',
      style: {}
    }
  },
  created() {
    const result = require(`../../data/char/${this.name}/image.js`)
    this.data = result.default
  },
  mounted() {
    const img = this.$baseURL + this.data[0].image
    this.style = document.createElement('style')
    const css = document.createTextNode(`body:before { background: url('${img}') center/cover;}`)
    this.style.appendChild(css)
    document.head.appendChild(this.style)
  },
  destroyed() {
    this.style.remove()
  }
}
</script>

<style>
body:before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  z-index: -1;
  content: '';
  position: fixed;
}
</style>

<style lang="scss" scoped></style>
