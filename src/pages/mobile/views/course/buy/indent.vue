<template>
  <div id="indent-box">
    <router-link :to="{name:'m-mine-address', params: {}}">
      <div class="indentSite">
        <div class="indentSiteBtn">
          <div>{{address ? address.name + ' ' + address.mobile : '请选择教材的邮寄地址'}}</div>
          <div>{{address ? address.province + address.city + address.area + address.addr : '如本课程需要纸质教材我们会邮寄至所选地址'}}</div>
        </div>
        <Icon size="16" name="arrow" color="#999999"/>
      </div>
    </router-link>
    <!-- 判断是否联报课程 -->
    <div class="indentCourse" v-if="!detail.package">
      <indentCourse :detail="detail"></indentCourse>
    </div>
    <div class="indentCourse" v-if="detail.package">
      <indentCourse v-for="item in detail.package" :key="item.id" :detail="item" ></indentCourse>
    </div>
    <div class="indentPrice">
      <div class="price">
        <div>课程总价</div>
        <div>¥{{discounts.amount}}</div>
      </div>
      <div class="discounts">
        <div>减免</div>
        <div >-¥{{discounts.allowance}}</div>
      </div>
      <div class="discounts">
        <div>优惠</div>
        <div v-if="discounts.discount != 0">-¥{{discounts.discount}}</div>
        <div v-if="discounts.discount == 0">暂无优惠券</div>
      </div>
      <div class="payment">
        <div>实付金额: <span>￥{{discounts.payment}}</span></div>
      </div>
    </div>
    <div class="indentPya">
      <div>实付款: <span>￥{{discounts.payment}}</span></div>
      <div @click="createOrder">提交订单</div>
    </div>
  </div>
</template>
<script>
import indentDetail from '@c/mixin/course/buy/indent.js'
import indentCourse from '@/pages/mobile/views/course/components/indentCourse.vue'
import { Icon } from 'vant'
export default {
  mixins: [indentDetail],
  components: { Icon,indentCourse },
}
</script>
<style lang="scss" scoped>
#indent-box {
  padding-bottom: 210px;
}
.indentSite{
  width: 690px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px auto 40px auto;
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
.indentCourse{
  width: 690px;
  padding: 0px 30px 40px 30px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px 0px rgba(229, 229, 229, 0.5);
  border-radius: 16px;
  margin: 0 auto 30px auto;
  overflow: hidden;
  div{
    border-bottom: 1px solid #D8D8D8;
    padding-bottom: 30px;
  }
  div:last-of-type{
    border: none;
    padding-bottom: 0px;
  }
}
.indentPrice{
  width: 690px;
  padding: 40px 30px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px 0px rgba(229, 229, 229, 0.5);
  border-radius: 16px;
  margin: 0 auto;
  .price{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    div:nth-child(1){
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
    }
    div:nth-child(2){
      font-size: 28px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
    }
  }
  .discounts{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    div:nth-child(1){
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
    }
    div:nth-child(2){
      font-size: 28px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FB4B09;
    }
  }
  .payment{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
    div{
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
    span{
      font-size: 28px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FB4B09;
      }
    }
  }
}
.indentPya{
  width: 750px;
  height: 100px;
  background: #FAFAFC;
  box-shadow: 0px -2px 8px 0px rgba(162, 131, 131, 0.24);
  position: fixed;
  bottom: 0;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div:nth-child(1){
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    span{
      color:#FB4B09
    }
    }
    div:nth-child(2){
      width: 208px;
      height: 80px;
      background: #FB4B09;
      box-shadow: 0px -2px 8px 0px rgba(162, 131, 131, 0.24);
      border-radius: 44px;
      text-align: center;
      line-height: 80px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
    }
}
</style>