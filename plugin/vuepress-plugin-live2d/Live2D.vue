<template>
  <div v-if="!isMobile" class="live2d-box">
    <canvas id="live2d" width="280" height="250" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: true
    }
  },
  mounted() {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (!this.isMobile) {
      this.init()
    }
  },
  methods: {
    init() {
      let script = document.createElement('script')
      script.src = this.$baseURL + '/live2d/live2dcubismcore.min.js'
      document.body.appendChild(script)
      script = document.createElement('script')
      script.src = this.$baseURL + '/live2d/live2d.js'
      document.body.appendChild(script)
    }
  }
}
</script>

<style lang="scss">
.live2d-box {
  pointer-events: none;
  position: fixed;
  bottom: 2%;
  right: 0px;
  > canvas {
    position: relative;
  }
}
</style>
