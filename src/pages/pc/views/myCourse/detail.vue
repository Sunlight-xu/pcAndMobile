<!-- 我的课节 -->
<template>
  <div class="my-course-all">
    <Tab></Tab>
    <div class="body">
      <div class="date-box">
        <Date
          type="month"
          v-model="active"
          :date-list="dateList"
          :month="month"
          :year="year"
          @select="getDate"
        ></Date>
        <div class="option">
          <div class="time">
            <i class="el-icon-arrow-left" @click="changeMonth()"></i>
            <div class="date">{{year}}年{{month}}月</div>
            <i class="el-icon-arrow-right" @click="changeMonth('add')"></i>
          </div>
          <div class="day">
            <div class="key">{{active.substring(8,10)}}</div>
            <div class="name">{{new Date(active).getDay()|Day}}</div>
          </div>
        </div>
      </div>
      <div class="class-list">
        <div v-if="lesson.length" class="title">今日课表</div>
        <div class="list">
          <div class="item" v-for="(i, index) in lesson" :key="index">
            <div class="left">
              <div class="time">{{i.start_at}}</div>
              <div class="border"></div>
            </div>
            <div class="center">
              <div class="line"></div>
              <div class="circular"></div>
            </div>
            <div class="right">
              <div class="course-content">
                <div class="title-course">{{i.course_title}}</div>
                <div class="time">
                  <svg-icon class="icon" name="icon-shijian"></svg-icon>
                  {{i.start_at}}-{{i.end_at}} | 第{{i.no}}节
                </div>
              </div>
              <div class="status" :class="{ 'disable':i.status =='1' }">{{i.status|classStatus}}</div>
            </div>
          </div>
        </div>
        <div v-if="lesson.length == 0" class="nolesson">当天暂无课程</div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from './components/Tab/index.vue'
import Date from './components/Date/index.vue'
import detail from '@c/mixin/myCourse/detail.js'
export default {
  components: { Tab, Date },
  mixins: [detail],
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.my-course-all {
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(229, 229, 229, 0.5);
  overflow: hidden;
  .body {
    margin: 50px auto;
    width: 720px;
    .date-box {
      display: flex;
      justify-content: space-between;
      .option {
        width: 249px;
        margin-top: 36px;
        .time {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          color: #333333;
          i {
            cursor: pointer;
          }
        }
        .day {
          text-align: center;
          .key {
            margin-top: 48px;
            font-size: 72px;
            color: #333333;
          }
          .name {
            margin-top: 8px;
            font-size: 18px;
            color: #fb4b09;
          }
        }
      }
    }
    .class-list {
      margin-top: 50px;
      margin-bottom: 50px;
      .title {
        font-size: 18px;
        color: #333333;
      }
      .list {
        margin-top: 50px;
        .item {
          display: flex;
          height: 140px;
          overflow: hidden;
          .left {
            position: relative;
            width: 63px;
            height: 30px;
            font-size: 24px;
            color: #333333;
            .time {
              position: relative;
              z-index: 1;
            }
            .border {
              left: 0;
              bottom: 8px;
              position: absolute;
              width: 100%;
              height: 4px;
              background: #fb4b09;
            }
          }
          .center {
            position: relative;
            margin-left: 36px;
            .circular {
              position: relative;
              z-index: 2;
              margin-top: 8px;
              width: 10px;
              height: 10px;
              background: #ffcece;
              border: 1px solid #fb4b09;
              border-radius: 50%;
            }
            .line {
              z-index: 1;
              position: absolute;
              top: -8px;
              left: 50%;
              transform: translateX(-50%);
              width: 1px;
              height: 148px;
              background: #d8d8d8;
            }
          }
          .right {
            margin-left: 30px;
            width: 355px;
            height: 98px;
            padding: 24px 20px;
            background: #ffffff;
            box-shadow: 0 0 8px 0 rgba(229, 229, 229, 0.5);
            border-radius: 8px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            .course-content {
              .title-course {
                font-size: 16px;
                color: #333333;
              }
              .time {
                margin-top: 20px;
                font-size: 12px;
                color: #4a4a4a;
                display: flex;
                align-items: center;
                .icon {
                  margin-right: 5px;
                }
              }
            }
            .status {
              margin-top: 30px;
              width: 60px;
              height: 24px;
              text-align: center;
              line-height: 24px;
              font-size: 12px;
              color: #fb4b09;
              color: #ffa1a1;
              border-radius: 30px;
              border: 1px solid #eeeeee;
            }
            .disable {
              color: #ccc !important;
              border: 1px solid transparent !important;
            }
          }
        }
      }
      .nolesson {
        margin-top: 16px;
        margin-left: 160px;
      }
    }
  }
}
</style>
