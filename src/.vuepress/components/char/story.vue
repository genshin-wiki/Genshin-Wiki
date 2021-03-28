<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="角色详细" name="desc">
        <p class="char-story-text" v-for="(item, key) in data.desc" :key="`desc-${key}`">
          {{ item }}
        </p>
      </el-tab-pane>
      <el-tab-pane label="角色故事1" name="story1">
        <p class="char-story-text" v-for="(item, key) in data.story1" :key="`story1-${key}`">
          {{ item }}
        </p>
      </el-tab-pane>
      <el-tab-pane label="角色故事2" name="story2">
        <p class="char-story-text" v-for="(item, key) in data.story2" :key="`story2-${key}`">
          {{ item }}
        </p>
      </el-tab-pane>
      <el-tab-pane label="角色故事3" name="story3">
        <p class="char-story-text" v-for="(item, key) in data.story3" :key="`story3-${key}`">
          {{ item }}
        </p>
      </el-tab-pane>
      <el-tab-pane label="角色故事4" name="story4">
        <p class="char-story-text" v-for="(item, key) in data.story4" :key="`story4-${key}`">
          {{ item }}
        </p>
      </el-tab-pane>
      <el-tab-pane label="角色故事5" name="story5">
        <p class="char-story-text" v-for="(item, key) in data.story5" :key="`story5-${key}`">
          {{ item }}
        </p>
      </el-tab-pane>
      <el-tab-pane :label="data.special.title" name="special">
        <p class="char-story-text" v-for="(item, key) in data.special.data" :key="`special-${key}`">
          {{ item }}
        </p>
      </el-tab-pane>
      <el-tab-pane label="神之眼" name="vision">
        <p class="char-story-text" v-for="(item, key) in data.vision" :key="`vision-${key}`">
          {{ item }}
        </p>
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
        desc: [''], // 角色详细
        story1: [''], // 角色故事1
        story2: [''], // 角色故事2
        story3: [''], // 角色故事3
        story4: [''], // 角色故事4
        story5: [''], // 角色故事5
        special: {
          // 角色特殊故事
          title: '', // 标题
          data: [''] // 内容
        },
        vision: [''] // 神之眼
      },
      activeName: 'desc'
    }
  },
  async created() {
    const result = await this.$http.get(`/char/${this.name}/story`)

    if (result.code == 200) {
      this.data = result.data
    } else {
      this.$message.error(`请求错误: (${result.code})${result.msg}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.char-story-text {
  line-height: 20px;
}
</style>
