<template>
  <div id="indent-box">
    <div class="indent-title">确认订单</div>
    <div class="address-box">
      <div class="courseText">收货地址</div>
      <p class="tips">请选择教材的邮寄地址，如本课程需要纸质教材我们会邮寄至所选地址</p>
      <Address></Address>
    </div>
    <!-- 课程信息 -->
    <div class="course">
      <div class="courseText">课程信息</div>
      <div class="courseBox" v-if="detail && (detail.type == 1 || detail.type == 3)">
        <payOrderDetail :course="detail"></payOrderDetail>
      </div>
      <div class="courseBox" v-if="detail && (detail.type == 2)">
        <payOrderDetail  v-for="item in detail.package" :key="item.id" :course="item"></payOrderDetail>
      </div>
    </div>
    <!-- 结算信息 -->
      <div class="accounts" >
        <div class="accountsText">结算信息</div>
        <div class="accountsBox">
          <div class="totalPrice">
            <div>课程总价</div>
            <div>{{discounts.amount}}</div>
          </div>
          <div class="totalPrice">
            <div>减免</div>
            <div>-¥{{discounts.allowance}}</div>
          </div>
          <div class="totalPrice">
            <div>优惠</div>
              <div v-if="discounts.discount != 0">-¥{{discounts.discount}}</div>
              <div v-if="discounts.discount == 0">暂无优惠券</div>
          </div>
          <div class="actualprice">
            <div>实付金额:</div>
            <div>￥{{discounts.payment}}</div>
          </div>
        </div>
      </div>
      <div class="indentPya" @click="createOrder">提交订单</div>
  </div>
</template>
<script>
import indentDetail from '@c/mixin/course/buy/indent.js'
import payOrderDetail from '@/pages/pc/views/mine/components/payOrderDetail.vue'
import Address from '@/pages/pc/components/Address/index.vue'

export default {
  mixins: [indentDetail],
  components: { payOrderDetail, Address },
}
</script>
<style lang="scss" scoped>
#indent-box {
  // padding-bottom: 210px;
  background:#FFFFFF;
  padding:50px 50px 200px 50px;
  .indent-title {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    line-height: 31px;
  }
  .address-box {
    margin-top: 30px;
    margin-bottom: 50px;
    .courseText{
      font-size: 18px;
      font-weight: bold;
      color: #333333;
      margin-bottom:15px
    }
    .tips {
      font-size: 12px;
      color: #666666;
      line-height: 16px;
      margin-bottom: 30px;
    }
  }
}
.indentSite{
  width: 690px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin: 40px auto 40px auto;
  .indentSiteBtn{
    div:nth-child(1){
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FB4B09;
    margin-bottom: 10px;
    }
    div:nth-child(2){
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 34px;
    }
  }
}
.indentPya{
  width: 200px;
  height: 46px;
  background: #FB4B09;
  box-shadow: 0px -1px 4px 0px rgba(162, 131, 131, 0.24);
  border-radius: 22px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  text-align:center;
  line-height:46px;
  float:right;
  margin-top:76px;
}
.course{
    margin-bottom:50px;
    .courseText{
      font-size: 18px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #333333;
      margin-bottom:30px
    }
    .courseBox{
      width: 1100px;
      padding: 20px 50px;
      border: 1px solid #D8D8D8;
      .orderDetail:last-of-type{
        border-bottom:0;
        padding-bottom:0;
        margin-bottom:0;
      }
      .orderDetail{
        border-bottom:1px solid #D8D8D8
      }
    }
  }

.accounts{
    .accountsText{
      font-size: 18px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #333333;
      margin-bottom:30px;
    }
    .accountsBox{
      width: 1100px;
      padding: 50px;
      border: 1px solid #D8D8D8;
      .totalPrice{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom:20px;
        div:nth-child(1){
          font-size: 16px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: #333333;
        }
        div:nth-child(2){
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #FB4B09;
        }
      }
      .actualprice{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width:100%;
        div:nth-child(1){
          font-size: 18px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: #333333;
          margin-right:40px
        }
        div:nth-child(2){
          font-size: 24px;
          font-family: MicrosoftYaHei;
          color: #FB4B09;
        }
      }
    }
    .accountsBtn{
      display:flex;
      align-items:center;
      justify-content:flex-end;
      margin-top:75px;
      .accountsAgain{
        width: 200px;
        height: 46px;
        box-shadow: 0px -1px 4px 0px rgba(162, 131, 131, 0.24);
        border-radius: 22px;
        border: 1px solid #FB4B09;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FB4B09 !important; 
        text-align:center;
        line-height:46px
      }
      div:nth-child(1){
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #999999;
        margin-right:50px
      }
      div:nth-child(2){
        width: 200px;
        height: 46px;
        background: #FB4B09;
        box-shadow: 0px -1px 4px 0px rgba(162, 131, 131, 0.24);
        border-radius: 22px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        text-align:center;
        line-height:46px
      }
    }
  }


</style>