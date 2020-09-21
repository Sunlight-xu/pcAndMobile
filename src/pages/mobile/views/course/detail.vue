<template>
  <div id="course-detail" v-if="isLoad">
    <div class="course-tab" ref="courseTab" v-if="detail.type !== 2" :class="{'vis-hide': !tabState}">
      <Tabs v-model="active" color="#FB4B09" line-width="20px" line-height="2px" @click="tabChange">
        <Tab title="课程介绍"></Tab>
        <Tab title="主讲老师"></Tab>
        <Tab title="课程表"></Tab>
        <Tab title="购课须知"></Tab>
      </Tabs>
    </div>
    <div class="banner">
      <van-image width="100%" height="5.57rem" :src="detail.banner" />
    </div>
    <!-- 讲座信息 -->
    <course-info :detail="detail" />
    <!-- 关联课程 -->
    <div class="course-pack" v-if="detail.package && detail.type === 2">
      <div class="course-names">关联课程</div>
      <div class="pack-list">
        <router-link :to="{name: 'm-courseDetail', params: {id: item.id}}" v-for="item in detail.package" :key="item.id">
          <course-pack :detail="item" />
        </router-link>
      </div>
    </div>
    <!-- 课程介绍 -->
    <div class="course-desc" ref="courseDesc" v-if="detail.type !== 2">
      <div class="course-names">课程介绍</div>
      <van-image width="100%" :src="detail.annexes[0].info" />
    </div>
    <!-- 主讲老师 -->
    <div class="course-teacher" ref="courseTeacher" v-if="detail.type !== 2">
      <div class="course-names">主讲老师</div>
      <div class="teacher-list">
        <div class="teacher-item" v-for="item in detail.teacher" :key="item.id">
          <van-image round width="1.07rem" height="1.07rem" :src="item.headimg" />
          <p><span class="name">{{item.realname}}</span><span>主讲老师</span></p>
        </div>
      </div>
    </div>
    <!-- 课程表 -->
    <div class="course-table" ref="courseTable" v-if="detail.type !== 2">
      <div class="course-names">课程表</div>
      <div class="table-list">
        <course-table v-for="(item, index) in detail.list" :key="item.id" :detail="item" :sortIndex="index + 1"/>
      </div>
    </div>
    <!-- 购课须知 -->
    <div class="course-tips" ref="courseTips">
      <div class="course-names">购课须知</div>
      <div class="tips">
        <course-tips></course-tips>
      </div>
    </div>
    <!-- 底部报名按钮区 -->
    <div class="bot-btn">
      <router-link :to="{name: 'm-mine-help'}" class="customer">
        <div>
          <span class="iconfont icon-zixun"></span>
          <p>咨询</p>
        </div>
      </router-link>
      <div class="sign-btn" @click="jumpFunc('sign')" v-if="!detail.buy && detail.status === 1"><span>立即报名</span></div>
      <div class="sign-btn c-color" v-if="detail.buy" @click="jumpFunc('myCourse')"><span>已报名</span></div>
      <div class="sign-btn c-color" v-if="!detail.buy && detail.status === 3" @click="jumpFunc('dont')"><span>已下架</span></div>
      <div class="sign-btn c-color" v-if="!detail.buy && detail.status === 2" @click="jumpFunc('end')"><span>已结束</span></div>
    </div>
  </div>
</template>
<script>

import courseDetail from '@c/mixin/course/detail.js'
import { Image as VanImage, Tab, Tabs } from 'vant'
import CourseInfo from '@m/views/course/components/CourseDetail/CourseInfo.vue'
import CourseTable  from '@m/views/course/components/CourseDetail/CourseTable.vue'
import CourseTips  from '@m/views/course/components/CourseDetail/CourseTips.vue'
import CoursePack  from '@m/views/course/components/CourseDetail/CoursePack.vue'
let tabTimer = null

export default {
  name: 'courseDetail',
  components: { VanImage, CourseInfo, CourseTable, CourseTips, CoursePack, Tab, Tabs },
  mixins: [courseDetail],
  data() {
    return {
      offSetTopList: [],
      tabOffsetTop:0,
      tabState: false,
      tabIsClick: false
    }
  },
  methods: {
    // 跳转逻辑
    jumpFunc (type) {
      // 立即报名
      if (type === 'sign') {
        this.$router.push({ name: 'm-indentDetail', params: { id: this.detail.id },query:{scode:this.$route.query.scode} })
        return
      }
      // 已报名
      if (type === 'myCourse') {
        if (this.detail.type !== 2) {
          this.$router.push({ name: 'm-course_detail', params: { id: this.detail.id } })
        } else {
          this.$router.push({ name: 'm-myCourse' })
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
    // 滚动到指定位置
    scrollToBottom (top, behavior = 'smooth') {
      window.scrollTo({
        top: top,
        left: 0,
        behavior: behavior
      })
    },
    initTop () {
      this.offSetTopList = []
      return new Promise(resolve => {
        const tabOffsetTop = this.$refs.courseTab.offsetTop
        const tabOffsetHeight = this.$refs.courseTab.offsetHeight
        const countTop = tabOffsetTop + tabOffsetHeight
        this.offSetTopList.push(this.$refs.courseDesc.offsetTop - countTop)
        this.offSetTopList.push(this.$refs.courseTeacher.offsetTop - countTop)
        this.offSetTopList.push(this.$refs.courseTable.offsetTop - countTop)
        this.offSetTopList.push(this.$refs.courseTips.offsetTop - countTop)
        resolve()
      })
    },
    async tabChange (index) {
      await this.initTop()
      this.scrollToBottom(this.offSetTopList[index])
      this.active = index
      this.tabIsClick = true
    },
    async onScrollFunc () {
      if (this.detail.type === 2) return
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (this.tabIsClick === true) {
        if (tabTimer) {
          clearTimeout(tabTimer)
        }
        tabTimer = setTimeout(() => {
          this.tabIsClick = false
        }, 300)
      } else {
        await this.initTop()
        if (scrollTop < this.offSetTopList[0]) {
          this.tabState = false
        }
        if (scrollTop >= this.offSetTopList[0] && scrollTop < this.offSetTopList[1]) {
          this.tabState = true
          this.active = 0
        }
        if (scrollTop >= this.offSetTopList[1] && scrollTop < this.offSetTopList[2]) {
          this.tabState = true
          this.active = 1
        }
        if (scrollTop >= this.offSetTopList[2] && scrollTop < this.offSetTopList[3]) {
          this.tabState = true
          this.active = 2
        }
        if (scrollTop >= this.offSetTopList[3]) {
          this.tabState = true
          this.active = 3
        }
      }
    }   
  },
  watch: {
    isLoad (newVal, oldVal) {
      if (this.detail.type === 2) return
      if (newVal) {
        window.addEventListener('scroll', this.onScrollFunc)
        this.$nextTick(() => {
          setTimeout(() => {
            this.initTop()
          }, 500)
        })
      }
    },
    $route () {
      this.$router.go(0)
      this.scrollToBottom(0, 'auto')
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.onScrollFunc)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScrollFunc)
  }
}
</script>
<style lang="scss" scoped>
#course-detail {
  background: #ffffff;
  .course-names {
    padding: 30px;
    color: #333333;
    font-size: 32px;
    font-weight: bold;
  }
  .course-desc {
    padding-bottom: 30px;
  }
  .course-pack {
    padding-top: 30px;
    .pack-list {
      padding: 0 30px 30px 30px;
    }
  }
  .course-teacher {
    .teacher-list {
      padding: 10px 30px 30px 30px;
      display: flex;
      .teacher-item {
        display: flex;
        margin-right: 60px;
        p {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 20px;
          color: #333333;
          font-size: 28px;
          line-height: 40px;
          .name {
            color: #FB4B09;
            font-weight: bold;
          }
        }
      }
    }
  }
  .course-table {
    .table-list {
      padding: 10px 30px 30px 30px;
    }
  }
  .course-tips {
    padding-bottom: 100px;
    .tips {
      padding: 10px 30px 30px 30px;
    }
  }
  .course-tab {
    position: fixed;
    top: 92px;
    left: 0;
    width: 100%;
    z-index: 2;
  }
  .vis-hide {
    visibility: hidden;
  }
  .t-body {
    height: 800px;
  }
  .bot-btn {
    widows: 100%;
    height: 100px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #ffffff;
    box-shadow: 0px -2px 8px 0px rgba(162, 131, 131, 0.24);
    .customer {
      width: 160px;
      flex-shrink: 0;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #333333;
      span {
        font-size: 48px;
        margin-bottom: 4px;
      }
      p {
        color: #333333;
        font-size: 22px;
        line-height: 32px;
      }
    }
    .sign-btn {
      width: calc(100vw - 160px);
      flex-shrink: 0;
      text-align: center;
      line-height: 100px;
      font-size: 36px;
      font-weight: bold;
      background: #FB4B09;
      color: #ffffff;
      &.c-color {
        opacity: .4;
      }
    }
  }
}
</style>