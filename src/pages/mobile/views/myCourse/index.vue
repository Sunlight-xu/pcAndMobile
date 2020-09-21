<template>
  <div class="my-course">
    <div v-if="userInfo">
      <div class="title">我的课程</div>
      <div class="course-week">
        <Date :date-list="dateList" @select="getDate" />
        <div class="course">
          <router-link class="all" to="my-course-all">
            <div>
              当天共
              <span class="mum">{{lesson.length}}</span> 节课
            </div>
            <div class="arrow">
              全部课程表
              <Icon size="14" name="arrow"></Icon>
            </div>
          </router-link>
          <div class="course-details-item" v-for="(i, index) in lesson" :key="index">
            <div class="left">
              <div class="title-course">{{i.course_title}}</div>
              <div class="time">
                <Icon name="clock" size="14" color="#CCCCCC" style="margin-right:5px" />
                {{i.start_at}}-{{i.end_at}} 第{{i.no}}节
              </div>
            </div>
            <div class="right" :class="{ 'disable':i.status =='1' }">{{i.status|classStatus}}</div>
          </div>
          <div v-if="lesson.length == 0" class="nolesson">当天暂无课程</div>
        </div>
      </div>
      <div class="title">全部课程</div>
      <div v-if="course" class="course-all">
        <router-link
          :to="`my-course-detail/${i.id}`"
          class="course-item"
          v-for="(i, index) in course"
          :key="index"
        >
          <div class="course-body">
            <div class="title-course">{{i.title}}</div>
            <div class="content">
              <div class="time">
                <Icon name="clock" size="14" color="#CCCCCC" style="margin-right:5px" />
                {{i.tips}}
              </div>
              <div class="sum">共{{i.lessons}}节课</div>
            </div>
          </div>
          <div class="course-bottom">
            <div class="date">开课时间: {{i.start_date}}-{{i.end_date}}</div>
            <div class="speed">
              <span class="color">{{i.over_count}}</span>
              / {{i.lessons}}
            </div>
          </div>
        </router-link>
      </div>
      <div v-else>
        <div class="login-tip no-course">暂无课程，快去选课吧～</div>
        <div class="login">
          <router-link to="course-list">
            <Button class="login-btn" round type="primary" color="#FA5D3F">选择课程</Button>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="login-tip">立即登录，查看你买过的课程</div>
      <div class="login">
        <router-link to="login?redirect=my-course">
          <Button class="login-btn" round type="primary" color="#FA5D3F">登录/注册</Button>
        </router-link>
      </div>
    </div>
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from '@m/components/Tabbar/index.vue'
import myCourse from '@c/mixin/myCourse/index.js'
import { getCoursedate } from '@c/api/mycourse.js'
import { Button, Icon } from 'vant'
import Date from './components/Date/index.vue'
export default {
  components: { Tabbar, Button, Date, Icon },
  mixins: [myCourse],
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.my-course {
  padding: 20px 30px;
  .title {
    margin: 28px 0 20px 0;
    font-size: 32px;
    font-weight: 500;
    color: #333333;
  }
  .course-week {
    background: #ffffff;
    box-shadow: 0px 0px 16px 0px rgba(229, 229, 229, 0.5);
    border-radius: 4px;
    .course {
      padding: 20px 36px;
      .all {
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        font-weight: 400;
        color: #666666;
        .mum {
          color: #fb4b09;
        }
        .arrow {
          display: flex;
          align-items: center;
        }
      }
      .course-details-item {
        margin-top: 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          .title-course {
            font-size: 28px;
            font-weight: 400;
            color: #333333;
            line-height: 40px;
          }
          .time {
            margin-top: 10px;
            display: flex;
            align-items: center;
            line-height: 34px;
          }
        }
        .right {
          font-size: 28px;
          font-weight: 400;
          color: #fb4b09;
        }
        .disable {
          color: #999999;
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
  }
  .course-all {
    margin-bottom: 120px;
    .course-item {
      display: block;
      margin-top: 30px;
      padding: 40px 30px;
      background: #ffffff;
      box-shadow: 0px 0px 16px 0px rgba(229, 229, 229, 0.5);
      border-radius: 16px;
      .course-body {
        border-bottom: 2px solid #ebebeb;
        .title-course {
          font-size: 32px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 44px;
        }
        .content {
          margin: 30px 0;
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
          .sum {
            color: #ffa1a1;
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
  .no-course {
    padding-top: 60px !important;
  }
  .login-tip {
    text-align: center;
    padding-top: 272px;
    font-size: 28px;
    font-weight: 400;
    color: #999999;
  }
  .login {
    margin-top: 80px;
    text-align: center;
    .login-btn {
      width: 364px;
    }
  }
}
</style>