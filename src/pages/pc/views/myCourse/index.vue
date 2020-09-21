<template>
  <div class="my-course">
    <div v-if="userInfo">
      <Tab></Tab>
      <div v-if="course" class="course-all">
        <router-link
          :to="`my-course-detail/${i.id}`"
          class="course-item"
          v-for="(i, index) in course"
          :key="index"
        >
          <div class="course-body">
            <div class="title-course">{{i.title}}</div>
            <div class="teacher">
              <div class="item" v-for="(it, index) in i.teacher" :key="index">
                <Avatar :size="34" :src="it.headimg"></Avatar>
                <div class="teacher-info">
                  <div class="position">主讲老师</div>
                  <div class="name">{{it.realname}}</div>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="time">开课时间: {{i.start_date}}-{{i.end_date}}</div>
            </div>
          </div>
          <div class="course-bottom">
            <div class="sum">共{{i.lessons}}课时</div>
            <div class="speed">
              <span class="color">{{i.over_count}} /</span>
              {{i.lessons}}
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
    </div>
  </div>
</template>
<script>
import myCourse from '@c/mixin/myCourse/index.js'
import { getCoursedate } from '@c/api/mycourse.js'
import { Button, Avatar } from 'element-ui'
import Tab from './components/Tab/index.vue'
export default {
  components: { Button, Tab, Avatar },
  mixins: [myCourse],
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.my-course {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(229, 229, 229, 0.5);
  .title {
    margin: 28px 0 20px 0;
    font-size: 32px;
    font-weight: 500;
    color: #333333;
  }
  .course-all {
    margin: 0 auto;
    width: calc(386px * 2 + 20px);
    margin-bottom: 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .course-item {
      box-sizing: border-box;
      overflow: hidden;
      width: 386px;
      height: 253px;
      display: block;
      margin-top: 20px;
      padding: 40px 30px;
      background: #ffffff;
      box-shadow: 0px 0px 16px 0px rgba(229, 229, 229, 0.5);
      border-radius: 16px;
      .course-body {
        border-bottom: 1px solid #d8d8d8;
        .title-course {
          height: 42px;
          font-size: 16px;
          font-weight: bold;
          color: #333333;
          line-height: 21px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .teacher {
          display: flex;
          align-items: center;
          .item {
            margin-right: 16px;
            display: flex;
          }
          .teacher-info {
            margin-left: 16px;
            .position {
              font-size: 14px;
              font-weight: bold;
              color: #333333;
              line-height: 20px;
            }
            .name {
              font-size: 12px;
              color: #a4a4a4;
              line-height: 16px;
            }
          }
        }
        .content {
          margin: 20px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .time {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: 400;
            color: #666666;
            line-height: 17px;
          }
        }
      }
      .course-bottom {
        margin-top: 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .sum {
          font-size: 12px;
          font-weight: 400;
          color: #ffa1a1;
          line-height: 17px;
        }
        .speed {
          font-size: 16px;
          font-weight: 500;
          color: #333;
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
    font-size: 24px;
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