<template>
  <table>
    <tbody>
      <tr>
        <th>汉语</th>
        <th>日语</th>
        <th>英语</th>
        <th>韩语</th>
      </tr>
      <tr>
        <td>
          <i class="char-voice-play-button" :class="icon.cn" @click="play('cn')"></i>
        </td>
        <td>
          <i class="char-voice-play-button" :class="icon.jp" @click="play('jp')"></i>
        </td>
        <td>
          <i class="char-voice-play-button" :class="icon.en" @click="play('en')"></i>
        </td>
        <td>
          <i class="char-voice-play-button" :class="icon.kr" @click="play('kr')"></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    voice: Object
  },
  data() {
    return {
      icon: {
        cn: 'el-icon-video-play',
        jp: 'el-icon-video-play',
        en: 'el-icon-video-play',
        kr: 'el-icon-video-play'
      },
      playing: {
        cn: false,
        jp: false,
        en: false,
        kr: false
      }
    }
  },
  methods: {
    play(region) {
      if (!this.playing[region]) {
        this.reset()
        this.icon[region] = 'el-icon-video-pause'
        this.playing[region] = true
        this.$emit('play', this.$baseURL + this.voice[region])
      } else {
        this.icon[region] = 'el-icon-video-play'
        this.playing[region] = false
        this.pause()
      }
    },
    pause() {
      this.$emit('pause')
    },
    reset() {
      for (const key in this.icon) {
        this.icon[key] = 'el-icon-video-play' // 重置按钮图标
        this.playing[key] = false // 重置播放状态
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.char-voice-play-button
  cursor pointer
  font-size 26px
</style>
