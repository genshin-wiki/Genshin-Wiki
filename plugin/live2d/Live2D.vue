<template>
  <div id="landlord">
    <canvas id="live2d" width="280" height="250" class="live2d"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    window.baseURL = this.$baseURL
    this.init()
    this.$router.afterEach((to, from) => {
      if (to.path !== from.path) {
        this.init()
      }
    })
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

<style lang="stylus">
@import './live2d.css'
</style>
