<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(item, key) in data" :label="item.title" :key="key" :name="`${key}`">
        <table>
          <tr>
            <th>汉语</th>
            <td>
              <audio controls>
                <source :src="$baseURL + item.voice.cn" />
              </audio>
            </td>
          </tr>
          <tr>
            <th>日语</th>
            <td>
              <audio controls>
                <source :src="$baseURL + item.voice.jp" />
              </audio>
            </td>
          </tr>
          <tr>
            <th>英语</th>
            <td>
              <audio controls>
                <source :src="$baseURL + item.voice.en" />
              </audio>
            </td>
          </tr>
          <tr>
            <th>韩语</th>
            <td>
              <audio controls>
                <source :src="$baseURL + item.voice.kr" />
              </audio>
            </td>
          </tr>
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
      activeName: '0'
    }
  },
  created() {
    const result = require(`../../data/char/${this.name}/voice`)
    this.data = result.default
  }
}
</script>

<style lang="stylus"></style>
