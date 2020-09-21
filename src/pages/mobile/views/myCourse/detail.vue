<!-- 所有课程列表 -->
<template>
  <div class="course-all">
    <div class="date-box">
      <div class="date">{{year}}年{{month}}月</div>
      <div class="option">
        <Icon class="arrow-left" name="arrow-left" @click="changeMonth()"></Icon>
        <Icon name="arrow" @click="changeMonth('add')"></Icon>
      </div>
    </div>
    <Date
      type="month"
      v-model="active"
      :date-list="dateList"
      :month="month"
      :year="year"
      @select="getDate"
    />
    <div v-for="(i, index) in lesson" :key="index" class="course-list">
      <div class="course-item">
        <div class="course-body">
          <div class="title-course">{{i.course_title}}</div>
          <div class="content">
            <div class="time">
              <Icon name="clock" size="14" color="#CCCCCC" style="margin-right:5px" />
              {{i.start_at}}-{{i.end_at}} | 第{{i.no}}节
            </div>
            <div class="status" :class="{ 'disable':i.status =='1' }">{{i.status|classStatus}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="lesson.length == 0" class="nolesson">当天暂无课程</div>
  </div>
</template>

<script>
import Date from './components/Date/index.vue'
import detail from '@c/mixin/myCourse/detail.js'
import { Icon } from 'vant'
export default {
  components: { Date, Icon },
  mixins: [detail],
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.course-all {
  padding: 20px 30px;
  .date-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .date {
      font-size: 32px;
      font-weight: 500;
      color: #333333;
      line-height: 44px;
    }
    .arrow-left {
      margin-right: 40px;
    }
  }
  .course-list {
    margin-top: 30px;
    .course-item {
      padding: 40px 30px;
      background: #ffffff;
      box-shadow: 0px 0px 16px 0px rgba(229, 229, 229, 0.5);
      border-radius: 16px;
      .course-body {
        .title-course {
          font-size: 32px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 44px;
        }
        .content {
          margin: 30px 0 0 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .time {
            display: flex;
            align-items: center;
            font-size: 24px;
            font-weight: 400;
            color: #4a4a4a;
            line-height: 34px;
          }
          .status {
            padding: 6px 36px;
            color: #ffa1a1;
            border-radius: 30px;
            border: 2px solid #eeeeee;
          }
          .disable {
            color: #ccc !important;
            border: 2px solid transparent !important;
          }
        }
      }
      .course-bottom {
        margin-top: 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .date {
          font-size: 24px;
          font-weight: 400;
          color: #999999;
          line-height: 34px;
        }
        .speed {
          font-size: 28px;
          font-weight: 400;
          color: #333333;
          line-height: 40px;
        }
        .color {
          color: #fb4b09;
        }
      }
    }
  }
  .nolesson {
    text-align: center;
    padding: 40px 0;
    font-size: 28px;
    font-weight: 400;
    color: #333333;
  }
}
</style>
