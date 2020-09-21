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
        <div class="countDown" v-if="course.expired_second > 0 && course.status == 0 && second!= ''">
          <div>{{second}}</div>
          <div>剩余支付时间</div>
        </div>
      </div>
    </div>
     <div class="coursePay">
        <div>￥{{course.product_amount - course.product_discount}}</div>
        <div class="coursePayBtn">
          <router-link :to="{name:'p-mine-orderDetail', params: {id: course.out_trade_no}}" v-if="course.status != 3">
            <div style="color:#999999" >查看详情</div>
          </router-link>
          <div style="color:#FFFFFF;background:#FB4B09" v-if="course.status == 0" @click="payBtn(course.out_trade_no)">立即支付</div>
          <router-link :to="{name:'p-courseDetail', params: {id: course.course.id}}">
            <div style="color:#FFFFFF;background:#FB4B09" v-if="course.status == 2">重新购买</div>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'courseState',
  props: {
    course: {
      type: Object,
      default () {
      }
    }
  },
  data() {
    return {
      second:'',
      timer:{}
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
    },
    async countDown(e){
      let s = null;
      let m = null;
      let min = null;
      let sec = null;
      s = this.course.expired_second % 60;
      m = Math.floor(this.course.expired_second / 60);
      min = m <= 9 ? "0" + m : m;
      sec = s <= 9 ? "0" + s : s;
      this.second = `${min}分${sec}秒`;
      this.timer = setInterval(() => {
        if (this.course.expired_second <= 0) {
          clearInterval(this.timer);
          // content.innerHTML = "支付未完成";
          this.finish()
        }
        this.course.expired_second--;
        s = this.course.expired_second % 60;
        m = Math.floor(this.course.expired_second / 60);
        min = m <= 9 ? "0" + m : m;
        sec = s <= 9 ? "0" + s : s;
        this.second = `${min}分${sec}秒`;
      }, 1000);
    }
  },
  mounted() {
    clearInterval(this.timer);
    setTimeout(() => {
      if(this.course.expired_second > 0 && this.course.status == 0){
        this.countDown()
      }
    }, 500);
  },
}
</script>
<style lang="scss" scoped>
#course-item {
  width: 420px;
  padding: 20px 30px 20px 30px;
  background: #ffffff;
  box-shadow: 0px 1px 8px 0px rgba(216, 216, 216, 0.7);
  border-radius: 8px;
  margin-bottom: 30px;
  margin-right: 30px;
  // margin-top: 30px;
  position: relative;
  .lianbao{
    width: 50px;
    height: 16px;
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
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
    }
    div:nth-child(2){
      font-size: 14px;
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
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      margin-bottom: 20px;
    }
    .time{
      font-size: 12px;
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
          width: 36px;
          height: 36px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .identityText div:nth-child(1){
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          margin-bottom: 5px;
        }
        .identityText div:nth-child(2){
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #A4A4A4;
          margin-top:6px;
        }
      }
      .countDown{
        text-align: right;
        div:nth-child(1){
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FF0000;
          margin-bottom: 6px;
        }
        div:nth-child(2){
          font-size: 12px;
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
        font-size: 18px;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: #EB2323;
      }
    .coursePayBtn{
      display: flex;
      align-items: center;
      justify-content: right;
      div{
        width: 80px;
        height: 32px;
        border-radius: 32px;
        border: 1px solid #EEEEEE;
        line-height: 31px;
        text-align: center;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        margin-left: 30px;
      }
    }
  }
}
</style>
