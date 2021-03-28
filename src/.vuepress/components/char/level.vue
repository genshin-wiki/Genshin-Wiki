<template>
  <div>
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
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      data: {
        lv20: {
          item: null,
          unlock: null,
          attributes: [
            {
              name: '',
              value: 0
            }
          ]
        },
        lv40: {
          item: null,
          unlock: null,
          attributes: [
            {
              name: '',
              value: 0
            }
          ]
        },
        lv50: {
          item: null,
          unlock: null,
          attributes: [
            {
              name: '',
              value: 0
            }
          ]
        },
        lv60: {
          item: null,
          unlock: null,
          attributes: [
            {
              name: '',
              value: 0
            }
          ]
        },
        lv70: {
          item: null,
          unlock: null,
          attributes: [
            {
              name: '',
              value: 0
            }
          ]
        },
        lv80: {
          item: null,
          unlock: null,
          attributes: [
            {
              name: '',
              value: 0
            }
          ]
        },
        lv90: {
          item: null,
          unlock: null,
          attributes: [
            {
              name: '',
              value: 0
            }
          ]
        }
      },
      activeName: 'char-level-20'
    }
  },
  async created() {
    const result = await this.$http.get(`/char/${this.name}/level`)
    if (result.code == 200) {
      this.data = result.data
    } else {
      this.$message.error(`请求错误: (${result.code})${result.msg}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>
