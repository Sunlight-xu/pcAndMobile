<template>
  <div>
    <div class="resultTop">
      <div><svg-icon class="iconchenggong" name="icon-chenggong"></svg-icon>支付成功</div>
      <div>订单号：<span>{{detail.out_trade_no}}</span></div>
      <div>支付时间：<span>{{detail.paid_at}}</span></div>
    </div>
    <div class="resultQrCodeText"><svg-icon class="icon" name="icon-tongzhi"></svg-icon>助教微信用于通知上课时间，作业批改，一定要添加哦～</div>
    <div class="resultQrCode">
      <div v-if="detail.course && (detail.course.type == 1 || detail.course.type == 3)" >
        <qrCode :qrCode="detail.course" ></qrCode>
      </div>
      <div v-if="detail.course && detail.course.type == 2" >
        <qrCode :qrCode="item" v-for="item in detail.course.package" :key="item.id"></qrCode>
      </div>
    </div>
    <router-link :to="{name:'p-courseList', params: {}}">
      <div class="continue">继续选课</div>
    </router-link>
  </div>
</template>
<script>
import resultDetail from '@c/mixin/course/buy/result.js'
import qrCode from '@/pages/pc/components/qrCode/qrCode.vue'
export default {
  mixins: [resultDetail],
  components: { qrCode },
}
</script>
<style lang="scss" scoped>
  .resultTop{
    width:100%;
    padding:50px;
    border:1px solid #D8D8D8;
    margin-bottom:50px;
    div:nth-child(1){
      font-size: 24px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #666666;
      display: flex;
      align-items: center;
      justify-content: left;
      .iconchenggong{
        font-size:46px;
        margin-right:15px;
      }
    }
    div:nth-child(2),div:nth-child(3){
      font-size: 16px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #333333;
      margin-top:15px;
      span{
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #333333;
        font-weight: 400;
      }
    }
  }
  .resultQrCodeText{
      width: 725px;
      height: 39px;
      font-size: 24px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #FB4B09;
      line-height: 31px;
      margin-bottom:27px;
      display: flex;
      align-items: center;
      justify-content: left;
    }
  .resultQrCode{
    width:100%;
    border:1px solid #D8D8D8;
    // padding-bottom:50px;
    margin-bottom:50px;
    .iconResultCenter{
      width: 690px;
      margin-bottom: -20px;
      vertical-align:top
    }
  }
  .continue{
    width:242px;
    height:46px;
    line-height: 46px;
    border-radius: 4px;
    border: 1px solid #FB4B09;
    text-align: center;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #FB4B09;
    margin-bottom:100px;
  }
</style>