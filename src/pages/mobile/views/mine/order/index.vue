<template>
  <div id="course-list">
    <!-- 选择支付状态 -->
    <Tabs 
      class="subject-list" 
      color="#FB4B09" 
      line-width="20px" 
      line-height="2px" 
      title-active-color="#333333" 
      title-inactive-color="#999999"
      offset-top="1.22667rem"
      :ellipsis="false"
      @change="changeFunc">
      <Tab title="全部">
        <div class="t-body">
          <List  
            v-model="loading"
            :finished="finished"
            finished-text="暂无更多订单"
            offset=100
            @load="onLoad">
            <CourseState v-for="(item, index) in courseList" :key="index" :course="item"></CourseState>
          </List> 
        </div>
      </Tab>
      <Tab title="已支付">
        <div class="t-body">
          <List  
            v-model="loading"
            :finished="finished"
            finished-text="暂无更多订单"
            offset=100
            @load="onLoad">
            <CourseState v-for="(item, index) in courseList" :key="index" :course="item"></CourseState>
          </List> 
        </div>
      </Tab>
      <Tab title="待支付">
        <div class="t-body">
          <List  
            v-model="loading"
            :finished="finished"
            finished-text="暂无更多订单"
            offset=100
            @load="onLoad">
            <CourseState v-for="(item, index) in courseList" :key="index" :course="item"></CourseState>
          </List> 
        </div>
      </Tab>
      <Tab title="已取消">
        <div class="t-body">
          <List  
            v-model="loading"
            :finished="finished"
            finished-text="暂无更多订单"
            offset=100
            @load="onLoad">
            <CourseState v-for="(item, index) in courseList" :key="index" :course="item"></CourseState>
          </List> 
        </div>
      </Tab>
    </Tabs>
  </div>
</template>
<script>
import order from '@c/mixin/mine/order/index.js'
import CourseState from '@m/views/mine/components/courseState.vue'
import { Tab, Tabs ,List} from 'vant'

export default {
  name: 'courseList',
  components: { CourseState, Tab, Tabs , List},
  mixins: [order],
  methods: {
    changeFunc (index,title) {
      console.log(title)
      this.changeSubject(title)
    }
  }
}
</script>
<style lang="scss" scoped>
#course-list {
  padding-bottom: 100px;
  .subject-list {
    background: #F7F8FA;
    padding-bottom: 30px;
    .t-body {
      width: 100%;
      padding: 0 30px;
      height: 85vh;
      overflow-y: scroll;
      // .c-list {
      //   width: 100%;
      // }
    }
  }
}
</style>