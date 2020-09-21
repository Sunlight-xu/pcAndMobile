<template>
  <div class="QrCode">
    <div class="resultQrCodeTitle">{{qrCode.title}}</div>
    <div>
      <img :src="qrCode.assistant_info.img" />
      <div>{{qrCode.assistant_info.name}}老师</div>
      <img :src="qrCode.assistant_info.qrcode" />
      <div>打开微信扫一扫，添加助教微信</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CourseItem',
  props: {
    qrCode: {
      type: Object,
      default () {
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .QrCode{
      border-bottom:1px solid #D8D8D8;
      text-align:center;
    }
  img:nth-child(1){
      width:36px;
      height:36px;
      border-radius: 50%;
      margin-top:50px;
    }
    div:nth-child(2){
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      margin-top:5px;
    }
    img:nth-child(3){
      width:200px;
      height:200px;
      margin-top:30px;
    }
    div:nth-child(4){
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      margin-top:15px;
      margin-bottom:50px;
    }
  .resultQrCodeTitle{
    height: 46px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 46px;
    border-bottom:1px solid #D8D8D8;
    padding-left:20px;
    text-align:left;
  }
</style>
