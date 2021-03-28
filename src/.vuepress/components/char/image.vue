<template>
  <el-main :class="isOK.class" element-loading-background="rgba(0, 0, 0, 0)" v-loading="!isOK">
    <div v-if="isOK.isOK">
      <el-tabs v-model="activeName">
        <el-tab-pane v-for="(item, key) in data" :label="item.title" :key="'char-iaage-' + key" :name="'char-image-' + key">
          <img :src="$baseURL + item.image" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-main>
</template>

<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      data: [
        {
          title: '', // 图片名称
          image: '' // 图片链接
        }
      ],
      activeName: 'char-image-0',
      style: {},
      isOK: {
        isOK: false,
        class: 'gw-loading'
      }
    }
  },
  async mounted() {
    const result = await this.$http.get(`/char/${this.name}/image`)
    if (result.code == 200) {
      this.data = result.data
      this.isOK.isOK = true
      this.isOK.class = ''
    } else {
      this.$message.error(`请求错误: (${result.code})${result.msg}`)
    }
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
