<template>
  <div class="order">
    <Tabs v-model="activeName" @tab-click="changeFunc">
      <TabPane label="全部" name="all">
        <div class="orderTabsBox" v-if="activeName == 'all'">
          <CourseState v-for="(item, index) in courseList" :key="index" :course="item"></CourseState>
        </div>
      </TabPane>
      <TabPane label="已支付" name="havePaid">
        <div class="orderTabsBox" v-if="activeName == 'havePaid'">
          <CourseState v-for="(item, index) in courseList" :key="index" :course="item"></CourseState>
        </div>
      </TabPane>
      <TabPane label="待支付" name="unpaid">
        <div class="orderTabsBox" v-if="activeName == 'unpaid'">
          <CourseState v-for="(item, index) in courseList" :key="index" :course="item"></CourseState>
        </div>
      </TabPane>
      <TabPane label="已取消" name="cancel">
        <div class="orderTabsBox" v-if="activeName == 'cancel'">
          <CourseState v-for="(item, index) in courseList" :key="index" :course="item"></CourseState>
        </div>
      </TabPane>
    </Tabs>
    <div class="loadMore" @click="onLoad" v-if="is_load">加载更多</div>
    <div v-if="courseList.length == 0 && !is_load" class="noOrder">暂无订单</div>
  </div>
</template>
<script>
import order from '@c/mixin/mine/order/index.js'
import { Tabs, TabPane } from 'element-ui'
import CourseState from '../components/courseState.vue'
export default {
  components: { Tabs, TabPane, CourseState },
  mixins: [order],
  data() {
    return {
      activeName: 'all',
    }
  },
  methods: {
    changeFunc(tab, event) {
      this.changeSubject(tab.label)
    },
  },
}
</script>
<style lang="scss" scoped>
/deep/ .el-tabs {
  background: #f4f4f4;
  // height:46px
}
/deep/ .el-tabs__header {
  margin: 0;
}
/deep/ .el-tabs__nav-wrap::after {
  background-color: #f4f4f4;
}
/deep/ .el-tabs__item {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  width: 116px;
  text-align: center;
  color: #999999;
  padding: 0;
  height: 46px;
  line-height: 46px;
}
/deep/ .is-active {
  color: #333333;
  width: 116px;
  background: #ffffff;
}
/deep/ .el-tabs__active-bar {
  background-color: #fb4b09;
  top: 0;
}
.orderTabsBox {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  // height:500px
  background: #ffffff;
  padding-top: 92px;
  padding-left: 79px;
}
.order {
  width: 100%;
  background: #ffffff;
  padding-bottom: 50px;
}
.loadMore,.noOrder {
  width: 80px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #eeeeee;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 32px;
  text-align: center;
  margin: 0 auto;
}
</style>