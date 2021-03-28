<template>
  <div>
    <char-constell-tab v-if="single" :data="data" />
    <el-tabs v-else v-model="activeName">
      <el-tab-pane v-for="(item, index) in data" :label="item.title" :key="'char-constell-multi-' + index" :name="'char-constell-multi-' + index">
        <char-constell-tab :data="item" />
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
      data: [
        {
          title: '',
          image: '',
          desc: ['']
        }
      ],
      activeName: '',
      single: true
    }
  },
  async created() {
    const result = await this.$http.get(`/char/${this.name}/constell`)
    if (result.code == 200) {
      this.data = result.data
    } else {
      this.$message.error(`请求错误: (${result.code})${result.msg}`)
    }
  }
}
</script>
