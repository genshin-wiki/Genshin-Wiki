<template>
  <div class="main">
    <table class="char-card-table">
      <tbody>
        <tr>
          <th class="char-card-th">名称</th>
          <td>{{ `${data.prefix}·${data.name}` }}</td>
        </tr>
        <tr>
          <th class="char-card-th">稀有度</th>
          <td><el-rate v-model="data.rank" disabled /></td>
        </tr>
        <tr>
          <th class="char-card-th">所属</th>
          <td>{{ data.by }}</td>
        </tr>
        <tr>
          <th class="char-card-th">神之眼</th>
          <td>{{ data.element }}</td>
        </tr>
        <tr>
          <th class="char-card-th">命之座</th>
          <td>{{ data.constell }}</td>
        </tr>
        <tr>
          <th class="char-card-th">武器类型</th>
          <td>{{ data.weapon }}</td>
        </tr>
        <tr>
          <th class="char-card-th">CV(中)</th>
          <td>{{ data.cv.cn }}</td>
        </tr>
        <tr>
          <th class="char-card-th">CV(日)</th>
          <td>{{ data.cv.jp }}</td>
        </tr>
        <tr>
          <th class="char-card-th">CV(英)</th>
          <td>{{ data.cv.en }}</td>
        </tr>
        <tr>
          <th class="char-card-th">CV(韩)</th>
          <td>{{ data.cv.kr }}</td>
        </tr>
        <tr>
          <th class="char-card-th">简介</th>
          <td>{{ data.desc }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      data: {}
    }
  },
  created() {
    const result = require(`../../data/char/${this.name}/card`)
    this.data = result.default
  }
}
</script>

<style lang="stylus" scoped>
.char-card-table
  table-layout: fixed
  min-width: 100%
.char-card-th
  min-width: 60px
</style>
