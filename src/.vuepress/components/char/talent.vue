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
      data: {
        element: '', // 元素
        data: [
          {
            title: '',
            image: '',
            desc: [''],
            data: ['']
          }
        ]
      },
      activeName: 'char-talent-0'
    }
  },
  async created() {
    const result = await this.$http.get(`/char/${this.name}/talent`)
    if (result.code == 200) {
      this.data = result.data
    } else {
      this.$message.error(`请求错误: (${result.code})${result.msg}`)
    }
  },
  methods: {
    getDesc
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/common/element-desc.scss';
</style>
