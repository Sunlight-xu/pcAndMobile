<template>
  <div>
    <div class="resultTop">
      <div><img src="../../../assets/img/icon_queren.png"/>支付成功</div>
      <div>订单号：{{detail.out_trade_no}}</div>
      <div>支付时间：{{detail.paid_at}}</div>
    </div>
    <div class="resultQrCode">
      <div class="resultQrCodeText">助教微信用于通知上课时间，作业批改，一定要添加哦～</div>
      <img class="iconResultCenter" src="@m/assets/img/icon_result2.png"/>
      <div v-if="detail.course && (detail.course.type == 1 || detail.course.type == 3)" >
        <resultQrcode :detail="detail.course"></resultQrcode>
      </div>
      <div v-if="detail.course && detail.course.type == 2" >
        <resultQrcode v-for="item in detail.course.package" :key="item.id" :detail="item"></resultQrcode>
      </div>
    </div>
    <img class="iconResultBottom" src="@m/assets/img/icon_result1.png"/>
    <router-link :to="{name:'m-courseList', params: {}}">
      <div class="continue">继续选课</div>
    </router-link>
  </div>
</template>
<script>
import resultDetail from '@c/mixin/course/buy/result.js'
import resultQrcode from '@/pages/mobile/views/course/components/resultQrcode.vue'
export default {
  mixins: [resultDetail],
  components: { resultQrcode },
}
</script>
<style lang="scss" scoped>
  .resultTop{
    width: 750px;
    height: 382px;
    background: linear-gradient(270deg, #FB410A 0%, #FF7E22 100%);
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
    overflow: hidden;
    div:nth-child(1){
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      margin-top: 88px;
      img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 20px;
      }
    }
      div:nth-child(2){
        margin-bottom: 10px;
      }
  }
  .resultQrCode{
    width: 690px;
    margin: -102px auto 0 auto;
    overflow: hidden;
    .resultQrCodeText{
      padding: 40px 40px 0 40px;
      font-size: 28px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      margin: 0 auto;
      text-align: center;
      background: #FFFFFF;
      line-height: 40px;
    }
    .iconResultCenter{
      width: 690px;
      margin-bottom: -20px;
      vertical-align:top
    }
  }
  .iconResultBottom{
    width: 690px;
    display: block;
    margin: 0 auto;
  }
  .continue{
    width: 160px;
    height: 64px;
    border-radius: 32px;
    border: 2px solid #FB4B09;
    line-height: 64px;
    text-align: center;
    color:#FB4B09;
    margin: 40px auto;
    // padding: 40px 0 100px 0;
  }
</style>