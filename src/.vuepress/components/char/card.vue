<template>
  <div>
    <img class="char-card-avatar" :src="$baseURL + data.avatar" />
    <el-tabs>
      <el-tab-pane label="角色资料">
        <table class="char-card-table">
          <tbody>
            <tr>
              <th>名称</th>
              <td>{{ `${data.prefix}·${data.name}` }}</td>
            </tr>
            <tr>
              <th>稀有度</th>
              <td><el-rate v-model="data.rank" disabled /></td>
            </tr>
            <tr>
              <th>所属</th>
              <td>{{ data.by }}</td>
            </tr>
            <tr>
              <th>神之眼</th>
              <td>{{ data.element }}</td>
            </tr>
            <tr>
              <th>命之座</th>
              <td>{{ data.constell }}</td>
            </tr>
            <tr>
              <th>武器类型</th>
              <td>{{ data.weapon }}</td>
            </tr>
            <tr>
              <th>CV(中)</th>
              <td>{{ data.cv.cn }}</td>
            </tr>
            <tr>
              <th>CV(日)</th>
              <td>{{ data.cv.jp }}</td>
            </tr>
            <tr>
              <th>CV(英)</th>
              <td>{{ data.cv.en }}</td>
            </tr>
            <tr>
              <th>CV(韩)</th>
              <td>{{ data.cv.kr }}</td>
            </tr>
            <tr>
              <th>简介</th>
              <td>{{ data.desc }}</td>
            </tr>
          </tbody>
        </table>
      </el-tab-pane>
      <el-tab-pane label="基础属性">
        <table>
          <tbody>
            <tr>
              <th>攻击方式</th>
              <td>{{ data.attributes.attackType }}</td>
            </tr>
            <tr>
              <th>生命值</th>
              <td>{{ data.attributes.hp }}</td>
            </tr>
            <tr>
              <th>攻击力</th>
              <td>{{ data.attributes.attack }}</td>
            </tr>
            <tr>
              <th>防御力</th>
              <td>{{ data.attributes.defense }}</td>
            </tr>
            <tr>
              <th>元素精通</th>
              <td>{{ data.attributes.proficient }}</td>
            </tr>
            <tr>
              <th>暴击率</th>
              <td>{{ data.attributes.critRate }}</td>
            </tr>
            <tr>
              <th>暴击伤害</th>
              <td>{{ data.attributes.critDamage }}</td>
            </tr>
            <tr>
              <th>治疗加成</th>
              <td>{{ data.attributes.heal }}</td>
            </tr>
            <tr>
              <th>受治疗加成</th>
              <td>{{ data.attributes.healMe }}</td>
            </tr>
            <tr>
              <th>元素充能效率</th>
              <td>{{ data.attributes.recharge }}</td>
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
      data: {
        avatar: '', // 头像链接
        name: '', // 角色名称
        prefix: '', // 角色称号
        by: '', // 所属
        rank: 0, // 星级
        element: '', // 元素(神之眼)
        constell: '', // 命之座
        weapon: '', // 武器类型
        cv: {
          // CV列表
          cn: '', // 中配
          jp: '', // 日配
          en: '', // 英配
          kr: '' // 韩配
        },
        desc: '', // 角色简介
        attributes: {
          // 基础属性
          attackType: '', // 攻击类型
          hp: 0, // 生命值
          attack: 0, // 攻击力
          defense: 0, // 防御力
          proficient: 0, // 元素精通
          critRate: '', // 暴击率
          critDamage: '', // 暴击伤害
          heal: '', // 治疗加成
          healMe: '', // 受治疗加成
          recharge: '' // 元素充能效率
        }
      }
    }
  },
  async created() {
    const result = await this.$http.get(`/char/${this.name}/card`)
    if (result.code == 200) {
      this.data = result.data
    } else {
      this.$message.error(`请求错误: (${result.code})${result.msg}`)
    }
  }
}
</script>

<style lang="scss" scoped>
table td {
  word-break: unset;
  white-space: unset;
}
.char-card-table {
  text-align: unset;
}
.char-card-avatar {
  width: 180px;
  height: 180px;
}
</style>
