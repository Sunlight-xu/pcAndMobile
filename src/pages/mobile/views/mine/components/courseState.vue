<template>
  <div id="course-item">
    <img src="../../../assets/img/lianbaoyouhui.png" alt="" class="lianbao" v-if="course.course.type == 2">
    <div class="order">
      <div>订单编号: {{course.out_trade_no}}</div>
      <div v-if="course.status == 1">已支付</div>
      <div v-if="course.status == 0">未支付</div>
      <div v-if="course.status == 2">已取消</div>
      <div v-if="course.status == 3">已退款</div>
    </div>
    <div class="detail">
      <div class="title">{{course.course.title}}</div>
      <div class="time">{{course.course.start_date}}-{{course.course.end_date}} {{course.course.tips}}</div>
      <div class="identity">
        <!-- 遍历身份 -->
        <div class="identityBox">
          <div class="identityDetail" v-for="(item, index) in course.course.teacher" :key="index">
            <img :src="item.headimg"/>
            <div class="identityText">
              <div>{{item.realname}}</div>
              <div>主讲老师</div>
            </div>
          </div>
        </div>
        <!-- 判断倒计时否为为0且状态是否为2 -->
        <div class="countDown" v-if="course.expired_second > 0 && course.status == 0">
          <CountDown :time="(this.course.expired_second + 1)*1000" format="mm 分 ss 秒" @finish="finish"></CountDown>
          <div>剩余支付时间</div>
        </div>
      </div>
    </div>
     <div class="coursePay">
        <div>￥{{course.product_amount - course.product_discount}}</div>
        <div class="coursePayBtn">
          <router-link :to="{name:'m-mine-orderDetail', params: {id: course.out_trade_no}}" v-if="course.status != 3">
            <div style="color:#999999" >查看详情</div>
          </router-link>
          <div style="color:#FFFFFF;background:#FB4B09" v-if="course.status == 0" @click="payBtn(course.out_trade_no)">立即支付</div>
          <router-link :to="{name:'m-courseDetail', params: {id: course.course.id}}">
            <div style="color:#FFFFFF;background:#FB4B09" v-if="course.status == 2">重新购买</div>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import {CountDown} from 'vant'
export default {
  name: 'courseState',
  components: { CountDown },
  props: {
    course: {
      type: Object,
      default () {
      }
    }
  },
  methods: {
    finish(){
      setTimeout(() => {
        this.$router.go(0)
      }, 1000);
    },
    payBtn(e){
      window.location.href = process.env.VUE_APP_PAY_URL+'payment/view?out_trade_no='+e + '&callback='+ process.env.VUE_APP_HOME_URL+'/mobile/result-detail'
    }
  },
  mounted() {
    console.log(this.course.course.amount)
  },
}
</script>
<style lang="scss" scoped>
#course-item {
  width: 100%;
  padding: 40px 30px 30px 30px;
  background: #ffffff;
  box-shadow: 0px 0px 16px 0px rgba(229, 229, 229, 0.5);
  border-radius: 16px;
  margin-bottom: 30px;
  margin-top: 30px;
  position: relative;
  .lianbao{
    width: 100px;
    height: 32px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .order{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #EBEBEB;
    div:nth-child(1){
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
    }
    div:nth-child(2){
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
    }
  }
  .detail{
    margin-top: 34px;
    padding-bottom: 24px;
    border-bottom: 1px solid #EBEBEB;
    .title{
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      margin-bottom: 20px;
    }
    .time{
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      margin-bottom: 20px;
    }
    .identity{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .identityBox{
        display: flex;
        align-items: center;
        justify-content: left;
      }
      .identityDetail{
        display: flex;
        align-items: center;
        justify-content: left;
        margin-right: 40px;
        img{
          width: 64px;
          height: 64px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .identityText div:nth-child(1){
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          margin-bottom: 5px;
        }
        .identityText div:nth-child(2){
          font-size: 22px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #A4A4A4;
        }
      }
      .countDown{
        text-align: right;
        div:nth-child(1){
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FF0000;
          margin-bottom: 6px;
        }
        div:nth-child(2){
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
        }
      }
    }
  }
  .coursePay{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
      div:nth-child(1){
        font-size: 36px;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: #EB2323;
      }
    .coursePayBtn{
      display: flex;
      align-items: center;
      justify-content: right;
      div{
        width: 160px;
        height: 64px;
        border-radius: 32px;
        border: 2px solid #EEEEEE;
        line-height: 64px;
        text-align: center;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        margin-left: 30px;
      }
    }
  }
}
</style>
