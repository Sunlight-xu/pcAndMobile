<template>
  <div class="orderDetail">
    <div class="orderDetailLeft">
        <div>{{course.title}}</div>
        <div>开课时间: {{course.start_date}}-{{course.end_date}} {{course.tips}}</div>
        <div>共{{course.lessons}}课时</div>
    </div>
    <div class="orderDetailRight">
      <div v-for="(item, index) in course.teacher" :key="index" class="orderDetailRightDetail">
        <img :src="item.headimg"/>
        <div>
          <div>{{item.realname}}</div>
          <div>主讲老师</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Icon } from 'vant'
export default {
  name: 'payRoderDetail',
  // components: { Icon },
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom:20px;
    margin-bottom:20px;
    .orderDetailLeft{
      line-height:30px;
      div:nth-child(1){
        font-size: 16px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #333333;
      }
      div:nth-child(2){
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #666666;
      }
      div:nth-child(3){
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #666666;
      }
    }
    .orderDetailRight{
        display: flex;
        align-items: center;
        justify-content: right;
        .orderDetailRightDetail{
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left:30px;
          img{
            width:52px;
            height:52px;
            border-radius: 50%;
            margin-right:20px
          }
          div:nth-child(1){
            font-size: 18px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: #333333;
          }
          div:nth-child(2){
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #A4A4A4;
            margin-top:6px;
          }
        }
    }
    // .title{
    //   font-size: 32px;
    //   font-family: PingFangSC-Medium, PingFang SC;
    //   font-weight: 500;
    //   color: #333333;
    //   margin-bottom: 20px;
    // }
    // .classTime{
    //   font-size: 24px;
    //   font-family: PingFangSC-Regular, PingFang SC;
    //   font-weight: 400;
    //   color: #4A4A4A;
    //   margin-bottom: 20px;
    //   display: flex;
    //   align-items: center;
    //   justify-content: left;
    // }
    // .time{
    //   display: flex;
    //   align-items: center;
    //   justify-content: space-between;
    //   div:nth-child(1){
    //     font-size: 24px;
    //     font-family: PingFangSC-Regular, PingFang SC;
    //     font-weight: 400;
    //     color: #666666;
    //   }
    //   div:nth-child(2){
    //     font-size: 24px;
    //     font-family: PingFangSC-Regular, PingFang SC;
    //     font-weight: 400;
    //     color: #999999;
    //   }
    // }
  }
</style>
