<template>
  <div id="grade-list">
    <!-- 页面提示 -->
    <div class="tips">
      <p class="title">选择你想看的学习阶段</p>
      <p class="desc">可以随时更改，请放心选择</p>
    </div>
    <!-- 阶段大的列表 小学/初中/高中 -->
    <div class="stage-list">
      <div class="stage-item" v-for="(sItem, index) in gradeList" :key="index">
        <!-- 年级名称 -->
        <div class="name">{{sItem.stageName}}</div>
        <!-- 年级列表 -->
        <ul class="list">
          <li class="item"
            @click="changeGrade(gItem.id)"
            :class="{'active': gItem.id === gradeId}" 
            v-for="gItem in sItem.grades" 
            :key="gItem.id">
            {{gItem.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
import { mapState } from 'vuex'

export default {
  name: 'gradeList',
  computed: {
    // 初始化---年级列表
    gradeList () {
      const gradeList = [['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'], ['初一', '初二', '初三'], ['高一', '高二', '高三']]
      const list = []
      for (let i = 0; i < gradeList.length; i++) {
        const element = gradeList[i]
        const grades = []
        element.forEach((el, index) => {
          grades.push({ id: i === 0 ? index + 1 : i === 1 ? index + 7 : index + 10, name: el })
        })
        list.push({ stageName: i === 0 ? '小学' : i === 1 ? '初中' : '高中', grades })
      }
      return list
    },
    ...mapState('course', {
      gradeId: state => Number(state.gradeId)
    })
  },
  methods: {
    changeGrade (id) {
      this.$store.dispatch('course/setGrade', id)
      this.$router.replace({name: 'm-courseList'})
    }
  },
  mounted() {
    this.$store.dispatch('course/setSubject', 0)
  }
}
</script>

<style lang="scss" scoped>
#grade-list {
  padding: 0 30px;
  .tips {
    margin-top: 30px;
    p {
      text-align: center;
    }
    .title {
      color: #333333;
      font-size: 36px;
      font-weight: bold;
      line-height: 50px;
    }
    .desc {
      color: #A4A4A4;
      font-size: 24px;
      line-height: 34px;
      margin-top: 10px;
    }
  }
  .stage-list {
    width: 100%;
    margin-top: 40px;
    border-top: 2px solid #D8D8D8;
    color: #333333;
    padding-top: 40px;
    font-size: 28px;
    .stage-item {
      display: flex;
      .name {
        width: 130px;
        text-align: right;
        flex-shrink: 0;
        flex-grow: 0;
        font-weight: bold;
        line-height: 64px;
        margin-right: 40px;
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        .item {
          width: 164px;
          flex-shrink: 0;
          flex-grow: 0;
          text-align: center;
          line-height: 64px;
          border: 2px solid #EEEEEE;
          margin-right: 52px;
          border-radius: 32px;
          margin-bottom: 40px;
          &.active {
            color: #FB4B09;
            border-color: #FB4B09;
            background: #FFEDE6;
          }
        }
      }
    }
  }
}
</style>