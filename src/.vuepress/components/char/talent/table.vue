<template>
  <div>
    <div>
      <el-button type="text" @click="handleClick">点击 {{ tableStatus.text }} 详细数据</el-button>
    </div>
    <el-collapse-transition>
      <div v-show="tableStatus.display" v-table-drag>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Lv.1</th>
              <th>Lv.2</th>
              <th>Lv.3</th>
              <th>Lv.4</th>
              <th>Lv.5</th>
              <th>Lv.6</th>
              <th>Lv.7</th>
              <th>Lv.8</th>
              <th>Lv.9</th>
              <th>Lv.10</th>
              <th>Lv.11</th>
              <th>Lv.12</th>
              <th>Lv.13</th>
              <th>Lv.14</th>
              <th>Lv.15</th>
            </tr>
            <tr v-for="(item, talentDataKey) in data" :key="'char-talent-data-' + talentDataKey">
              <th>{{ item.title }}</th>
              <td v-for="(info, infoKey) in item.data" :key="'char-talent-info-' + infoKey">{{ info }}</td>
            </tr>
          </tbody>
        </table>
        <span>注: 以上数据仅供参考，请以游戏内为准。</span>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {
      tableStatus: {
        display: false,
        text: '展开'
      }
    }
  },
  methods: {
    handleClick() {
      this.tableStatus.display = !this.tableStatus.display
      if (this.tableStatus.display) {
        this.tableStatus.text = '收起'
      } else {
        this.tableStatus.text = '展开'
      }
    }
  }
}
</script>

<style lang="stylus" scoped></style>
