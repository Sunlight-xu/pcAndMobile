<template>
  <div class="courseAssistant">
    <div>助教微信用于通知上课时间，作业批改，一定要添加哦～</div>
      <img :src="course.assistant_info.img"/>
      <div>{{course.assistant_info.name}}老师</div>
      <img :src="course.assistant_info.qrcode"/>
      <div>长按识别二维码添加</div>
  </div>
</template>

<script>
// import { Icon } from 'vant'
export default {
  name: 'courseAssistant',
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
.courseAssistant{
  width:621px;
  margin:0 auto 30px auto;
  padding-bottom:30px;
    div:nth-child(1){
      width: 514px;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      margin: 0px auto 40px auto;
      line-height: 40px;
    }
    img:nth-child(2){
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    div:nth-child(3){
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      margin-bottom: 30px;
    }
    img:nth-child(4){
      width: 300px;
      height: 300px;
      margin-bottom: 20px;
    }
    div:nth-child(5){
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      // padding-bottom: 300px;
    }
}
</style>
