<template>
  <div>
    <div class="payCancel">
      <!-- 判断状态显示 待支付或者已取消 -->
      <div class="statusText">待支付</div>
      <div class="countDown" v-if="detail.expired_second >= 0">剩余支付时间: <CountDown :time="(detail.expired_second + 1)*1000" format="mm 分 ss 秒" @finish="finish"></CountDown></div>
      <div class="orderDetailBox">
        <div v-if="!detail.course.package">
          <payOrderDetail :course="detail.course" ></payOrderDetail>
        </div>
        <div v-if="detail.course.package">
          <payOrderDetail :course="item"  v-for="item in detail.course.package" :key="item.id"></payOrderDetail>
        </div>
        <div class="totalPrice">
          <div>课程总价</div>
          <div>{{detail.product_amount}}</div>
        </div>
        <div class="actualprice">
          <div>实付金额</div>
          <div>{{detail.product_amount - detail.product_discount}}</div>
        </div>
      </div>
      <div class="detail">
        <div >订单号: <span>{{detail.out_trade_no}}</span></div>
        <div >下单时间: <span>{{detail.created_at}}</span></div>
      </div>
    </div>
    <div class="payBtn">
      <div @click="cancelCancel(detail.out_trade_no)">取消订单</div>
      <div @click="payBtn(detail.out_trade_no)">立即支付</div>
    </div>
  </div>
</template>

<script>
import { Dialog, CountDown } from 'vant'
import payOrderDetail from '@/pages/mobile/views/mine/components/payOrderDetail.vue'
import { createOrderCancel } from '@c/api/course'
export default {
  name: 'payFinish',
  components: { payOrderDetail, CountDown },
  props: {
    detail: {
      type: Object,
      default () {
      }
    }
  },
  methods: {
    cancelCancel(e){
      Dialog.confirm({
        title: '温馨提示',
        message: '您确认要取消订单吗？',
        customStyle:'customStyle'
      })
        .then(() => { 
          this.createOrder(e)
        })
        .catch(() => {
          // on cancel
        })
    },
    // 超时未购买
    finish(){
      Dialog.confirm({
        title: '温馨提示',
        message: '已超过支付时间是否重新购买？',
        customStyle:'customStyle'
      })
        .then(() => {
          this.$router.push({ name: 'm-courseDetail', params: { id: this.detail.course.id } })
        })
         .catch(() => {
          this.$router.go(0)
      });
  
    },
    payBtn(e){
      window.location.href = process.env.VUE_APP_PAY_URL+'payment/view?out_trade_no='+e + '&callback='+ process.env.VUE_APP_HOME_URL+'/mobile/result-detail'
    },
     // 取消订单
    async createOrder (e) {
      let { output, code } = await createOrderCancel({out_trade_no:e})
      if (code !== 0) {
        return
      }
      setTimeout(() => {
        this.$router.go(0)
      }, 1000);
    }
  }
}
</script>
<style lang="scss" scoped>
.payCancel{
  width: 690px;
  margin: 0 auto;
  overflow: hidden;
  .statusText{
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    margin-bottom: 20px;
    margin-top: 30px;
  }
  .countDown{
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FB4B09;
    margin-bottom: 30px;
    div{
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FB4B09;
    }
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
        // border: none;
        // padding-bottom: 0;
        margin-bottom: 0;
      }
      .totalPrice{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px 0;
        border-bottom: 1px solid #D8D8D8;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
      }
      .actualprice{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px 0 0 0;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        div:nth-child(2){
          color: #FF0000;
        }
      }
    }
  .detail{
    font-size: 32px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 64px;
    span{
      margin-left: 20px;
      color: #666666;
    }
  }
}

  .payBtn{
    width: 100vw;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100px;
    box-shadow: 0px -2px 8px 0px rgba(162, 131, 131, 0.24);
    display: flex;
    align-items: center;
    justify-content: left;
    text-align: center;
    line-height: 100px;
    div:nth-child(1){
      width: 250px;
      height: 100%;
      background: #FFFFFF;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
    }
    div:nth-child(2){
      width: 500px;
      height: 100%;
      background: #FB4B09;
      font-size: 36px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
    }
  }
</style>
