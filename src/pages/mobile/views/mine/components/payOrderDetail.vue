<template>
  <div class="orderDetail">
    <div class="title">{{course.title}}</div>
    <div class="classTime"><Icon name="clock" size="12px" color="#CCCCCC" style="margin-right:5px"/>{{course.tips}}</div>
    <div class="time">
      <div>开课时间: {{course.start_date}}-{{course.end_date}}</div>
      <div>共{{course.lessons}}课时</div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'
export default {
  name: 'payRoderDetail',
  components: { Icon },
  props: {
    course: {
      type: Object,
      default () {
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .orderDetail{
    background: #FFFFFF;
    .title{
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      margin-bottom: 20px;
    }
    .classTime{
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #4A4A4A;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: left;
    }
    .time{
      display: flex;
      align-items: center;
      justify-content: space-between;
      div:nth-child(1){
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
      }
      div:nth-child(2){
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }
    }
  }
</style>
