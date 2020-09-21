<template>
  <div id="course-detail" v-if="isLoad">
    <ul class="tabs">
      <li class="tabs-item acitive">课程介绍</li>
      <li class="tabs-item">主讲老师</li>
      <li class="tabs-item">课程表</li>
      <li class="tabs-item">购课须知</li>
    </ul>
    <div class="detail-top">
      <img style="width: 470px; height: 262px" :src="detail.banner" />
      <div class="cont">
        <p class="title">{{detail.title}}</p>
        <p class="time" v-if="detail.type !== 2">开课时间：{{detail.start_date}} - {{detail.end_date}}</p>
        <p class="time" v-if="detail.type === 2">包含{{detail.package.length}}门课 | 火热报名中</p>
        <p class="count" v-if="detail.type !== 2">共{{detail.lessons}}课时</p>
        <p class="price">
          <span class="fuhao">¥</span>
          <span>{{detail.price}}</span>
        </p>
        <Button
          type="primary"
          style="width: 242px; height: 46px"
          @click="jumpFunc('sign')"
          v-if="!detail.buy && detail.status === 1"
        >立即报名</Button>
        <Button
          type="primary"
          style="width: 242px; height: 46px; opacity: 0.5"
          v-if="detail.buy"
          @click="jumpFunc('myCourse')"
        >已报名</Button>
        <Button
          type="primary"
          style="width: 242px; height: 46px; opacity: 0.5"
          v-if="!detail.buy && detail.status === 3"
          @click="jumpFunc('dont')"
        >已下架</Button>
        <Button
          type="primary"
          style="width: 242px; height: 46px; opacity: 0.5"
          v-if="!detail.buy && detail.status === 2"
          @click="jumpFunc('end')"
        >已结束</Button>
      </div>
    </div>
    <div class="detail-content">
      <div class="t-left">
        <!-- 联报课程 -->
        <div class="tb-box" v-if="detail.package && detail.type === 2">
          <div class="names">联报课程</div>
          <div class="course-cont pack-list">
            <router-link
              :to="{name: 'p-courseDetail', params: {id: item.id}}"
              v-for="item in detail.package"
              :key="item.id"
            >
              <course-pack :detail="item" />
            </router-link>
          </div>
        </div>
        <!-- 课程介绍 -->
        <div class="tb-box" v-if="detail.type !== 2">
          <div class="names">课程介绍</div>
          <div class="course-cont">
            <img style="width: 100%;min-height: 200px" :src="detail.annexes[0].info" />
          </div>
        </div>
        <!-- 主讲老师 -->
        <div class="tb-box" v-if="detail.type !== 2">
          <div class="names">主讲老师</div>
          <div class="course-cont">
            <div class="teacher-list">
              <div class="teacher-item" v-for="item in detail.teacher" :key="item.id">
                <Avatar :size="40" :src="item.headimg"></Avatar>
                <p>
                  <span class="name">{{item.realname}}</span>
                  <span>主讲老师</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 课程表 -->
        <div class="tb-box" v-if="detail.type !== 2">
          <div class="names">课程表</div>
          <div class="course-cont">
            <div class="table-list">
              <course-table
                v-for="(item, index) in detail.list"
                :key="item.id"
                :detail="item"
                :sortIndex="index + 1"
              />
            </div>
          </div>
        </div>
        <!-- 购课须知 -->
        <div class="tb-box">
          <div class="names">购课须知</div>
          <div class="course-cont">
            <course-tips></course-tips>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import courseDetail from '@c/mixin/course/detail.js'
import { Button, Avatar } from 'element-ui'
import CourseTable from '@p/views/course/components/CourseDetail/CourseTable.vue'
import CourseTips from '@p/views/course/components/CourseDetail/CourseTips.vue'
import CoursePack from '@p/views/course/components/CourseDetail/CoursePack.vue'
import { mapState } from 'vuex'
export default {
  name: 'CourseDetail',
  components: { Button, Avatar, CourseTable, CourseTips, CoursePack },
  mixins: [courseDetail],
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo,
    }),
  },
  methods: {
    // 跳转逻辑
    jumpFunc(type) {
      // 立即报名
      if (type === 'sign') {
        if (!this.userInfo) {
          this.$store.commit('user/SET_SHOWLOGINMODAL', true)
          return false
        }
        this.$router.push({
          name: 'p-indentDetail',
          params: { id: this.detail.id },
          query: { scode: this.$route.query.scode }
        })
        return
      }
      // 已报名
      if (type === 'myCourse') {
        if (this.detail.type !== 2) {
          this.$router.push({
            name: 'p-course_detail',
            params: { id: this.detail.id },
          })
        } else {
          this.$router.push({ name: 'p-myCourse' })
        }
        return
      }
      // 课程下架
      if (type === 'dont') {
        this.$toast('课程已下架')
        return
      }
      // 课程下限
      if (type === 'end') {
        this.$toast('课程已结束')
        return
      }
    },
  },
  watch: {
    $route() {
      this.$router.go(0)
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  width: 1200px;
  height: 46px;
  position: fixed;
  top: 0;
  display: flex;
  background: #f4f4f4;
  z-index: 10;
  display: none;
  .tabs-item {
    width: 116px;
    text-align: center;
    line-height: 46px;
    font-size: 14px;
    font-weight: 500;
    color: #333333;
    position: relative;
    &.acitive {
      background: #ffffff;
    }
    &.acitive::before {
      content: '';
      width: 100%;
      height: 2px;
      background: #fb4b09;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
.detail-top {
  width: 100%;
  display: flex;
  padding: 20px;
  background: #ffffff;
  .cont {
    margin-left: 50px;
    padding: 20px 0 10px 0;
    .title {
      font-size: 16px;
      font-weight: bold;
      color: #333333;
      line-height: 21px;
      margin-bottom: 15px;
    }
    .time {
      font-size: 14px;
      color: #666666;
      line-height: 19px;
      margin-bottom: 15px;
    }
    .count {
      font-size: 12px;
      font-weight: 400;
      color: #ffa1a1;
      line-height: 17px;
      margin-bottom: 15px;
    }
    .price {
      font-size: 30px;
      color: #eb2323;
      line-height: 40px;
      margin-bottom: 30px;
      .fuhao {
        font-size: 16px;
      }
    }
  }
}
.detail-content {
  .t-left {
    width: 780px;
    padding: 30px;
    background: #ffffff;
    margin-top: 42px;
    .tb-box {
      margin-bottom: 40px;
      .names {
        font-size: 18px;
        font-weight: bold;
        color: #333333;
        line-height: 25px;
        margin-bottom: 30px;
      }
      .teacher-list {
        display: flex;
        .teacher-item {
          display: flex;
          margin-right: 60px;
          p {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            color: #333333;
            font-size: 14px;
            line-height: 20px;
            .name {
              color: #fb4b09;
              font-weight: bold;
            }
          }
        }
      }
      .table-list {
        margin-top: -30px;
      }
      .pack-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
}
</style>