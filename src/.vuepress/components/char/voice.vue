<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(item, key) in data" :label="item.title" :key="'char-voice-' + key" :name="'char-voice-' + key">
        <div v-for="(content, k) in item.content" :key="'char-voice-' + key + '-content' + k">
          <span>{{ content }}</span>
        </div>
        <char-voice-player @play="play" @pause="pause" :voice="item.voice" />
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
          title: '', // 标题
          voice: '', // 语音
          content: [''] // 内容
        }
      ],
      activeName: 'char-voice-0',
      audio: undefined
    }
  },
  async created() {
    const result = await this.$http.get(`/char/${this.name}/voice`)
    if (result.code == 200) {
      this.data = result.data
    } else {
      this.$message.error(`请求错误: (${result.code})${result.msg}`)
    }
    if (typeof Audio != 'undefined') {
      this.audio = new Audio()
    }
  },
  methods: {
    play(url) {
      if (this.audio != undefined) {
        this.audio.src = url
        this.audio.play()
      } else {
        this.$message.error('当前浏览器不支持音频播放')
      }
    },
    pause() {
      if (this.audio != undefined) {
        this.audio.pause()
      } else {
        this.$message.error('当前浏览器不支持音频播放')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
