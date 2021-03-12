<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(item, key) in data" :label="item.title" :key="key" :name="`${key}`">
        <span>{{ item.text }}</span>
        <table class="char-voice-table">
          <tbody>
            <tr>
              <th class="char-voice-th">语言</th>
              <th>汉语</th>
              <th>日语</th>
              <th>英语</th>
              <td>韩语</td>
            </tr>
            <tr>
              <th class="char-voice-th">播放</th>
              <td>
                <el-button type="primary" @click="play($baseURL + item.voice.cn)">播放</el-button>
              </td>
              <td>
                <el-button type="primary" @click="play($baseURL + item.voice.jp)">播放</el-button>
              </td>
              <td>
                <el-button type="primary" @click="play($baseURL + item.voice.en)">播放</el-button>
              </td>
              <td>
                <el-button type="primary" @click="play($baseURL + item.voice.kr)">播放</el-button>
              </td>
            </tr>
          </tbody>
        </table>
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
      activeName: '0',
      audio: new Audio()
    }
  },
  created() {
    const result = require(`../../data/char/${this.name}/voice`)
    this.data = result.default
  },
  methods: {
    play(url) {
      this.audio.src = url
      this.audio.play()
    }
  }
}
</script>

<style lang="stylus">
.char-voice-table
  table-layout: fixed
  min-width: 100%
.char-voice-th
  min-width: 36px
</style>
