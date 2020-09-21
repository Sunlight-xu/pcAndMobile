<template>
  <div>
    <div class="payCancel">
      <div class="statusText">已取消</div>
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
    <router-link :to="{name:'m-courseDetail', params: {id: detail.course.id}}">
      <div class="payBtn">重新报名</div>
    </router-link>
  </div>
</template>

<script>
import payOrderDetail from '@/pages/mobile/views/mine/components/payOrderDetail.vue'
export default {
  name: 'payFinish',
  components: { payOrderDetail },
  props: {
    detail: {
      type: Object,
      default () {
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.payCancel{
  width: 690px; 
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 200px;
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
    text-align: center;
    line-height: 100px;
    background: #FB4B09;
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
  }
</style>
