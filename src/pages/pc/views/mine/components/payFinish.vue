<template>
  <div class="finishBox">
  
    <div class="payFinish">
      <div class="statusText">已支付</div>
      <div class="orderDetailBox">
        <div v-if="detail.course && (detail.course.type == 1 || detail.course.type == 3)">
          <!-- <payOrderDetail :course="detail.course" ></payOrderDetail> -->
        </div>
        <div v-if="detail.course && detail.course.type == 2">
          <!-- <payOrderDetail :course="item"  v-for="item in detail.course.package" :key="item.id"></payOrderDetail> -->
        </div>
      </div>
      <div class="order">
        <div class="detail">
          <div >订单号: <span>{{detail.out_trade_no}}</span></div>
          <div >下单时间: <span>{{detail.created_at}}</span></div>
          <div >支付方式: <span>{{detail.pay_way === 1 ? '微信支付' : detail.pay_way === 2 ? '支付宝' : '未支付'}}</span></div>
        </div>
        <div class="service" @click="service">联系客服</div>
      </div>
    </div>
    <div class="assistant">
      <div v-if="detail.course && (detail.course.type == 1 || detail.course.type == 3)">
        <!-- <courseAssistant :course="detail.course"></courseAssistant> -->
      </div>
        <div v-if="detail.course && detail.course.type == 2">
        <!-- <courseAssistant v-for="item in detail.course.package" :key="item.id" :course="item"></courseAssistant> -->
      </div>
    </div>
    <div class="serviceCode" v-if="is_serviceCode">
      <div class="code">
        <div>我是您的专属服务老师，有任何问题都可以联系我帮您解决</div>
        <img src="https://image-01.17jzh.com/common/kefu-qrcode.png"/>
        <div>长按识别二维码</div>
        <Icon name="cross" size="16px" color="#CCCCCC" class="crossBtn" @click="closeService"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'
// import payOrderDetail from '@/pages/mobile/views/mine/components/payOrderDetail.vue'
// import courseAssistant from '@/pages/mobile/views/mine/components/courseAssistant.vue'
export default {
  name: 'payFinish',
  // components: { payOrderDetail, Icon, courseAssistant },
  props: {
    detail: {
      type: Object,
      default () {
      }
    }
  },
  data () {
    return {
      is_serviceCode:false
    }
  },
  methods: {
    service(){
      this.is_serviceCode = true
    },
    closeService(){
      this.is_serviceCode = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .finishBox{
    background: #FFFFFF;
    min-height: 100vh;
  }
  .payFinish{
    width: 750px;
    padding:0 30px ;
    overflow: hidden;
    background: #F7F8FA;
    .statusText{
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      margin-bottom: 20px;
      margin-top: 30px;
    }
    .orderDetailBox{
      background: #FFFFFF;
      border-radius: 16px;
      padding: 40px 30px;
      margin-bottom: 30px;
      .orderDetail{
        border-bottom: 1px solid #D8D8D8;
        padding-bottom: 30px;
        margin-bottom: 30px;
      }
      .orderDetail:last-of-type{
        border: none;
        padding-bottom: 0;
        margin-bottom: 0;
      }
    }
    .order{
      display: flex;
      // align-items: flex-start;
      justify-content: space-between;
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      margin-bottom: 60px;
      .detail{
        line-height: 54px;
        span{
          color: #666666;
        }
      } 
      .service{
        width: 160px;
        height: 64px;
        border-radius: 32px;
        border: 2px solid #D8D8D8;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        text-align: center;
        line-height: 64px;
        margin-top: 10px;
      }
    }
  }
  .assistant{
    border-radius: 20px;
    width: 100%;
    padding: 60px 0 82px 0;
    background: #FFFFFF;
    text-align: center;
    overflow: hidden;
  }
  .serviceCode{
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: .4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .code{
      width: 560px;
      height: 524px;
      background: #FFFFFF;
      border-radius: 20px;
      text-align: center;
      position: relative;
      div:nth-child(1){
        width: 500px;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        margin: 60px auto 30px auto;
        line-height: 40px;
      }
      img:nth-child(2){
        width: 240px;
        height: 240px;
        margin-bottom: 20px;
      }
      div:nth-child(3){
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
      }
      .crossBtn{
        position: absolute;
        top: 24px;
        right: 24px;
      }
    }
  }
</style>
