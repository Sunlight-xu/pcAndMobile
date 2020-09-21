<template>
  <div>
    <div class="courseDetail">
      <div class="courseDetailText">订单详情</div>
      <!-- 订单信息 -->
      <div class="courseMessage">
        <div class="courseMessageTop">
          <div>订单信息</div>
          <div v-if="orderDetail.status == 1">已支付</div>
          <div v-if="orderDetail.status == 2">已取消</div>
          <div class="countDown" v-if="orderDetail.status == 0 && second!= ''">待支付丨剩余支付时间: {{second}}</div>
        </div>
        <div class="courseMessageBottom">
          <div class="courseMessageBottomText">
            <div>订单号: <span>{{orderDetail.out_trade_no}}</span></div>
            <div>下单时间: <span>{{orderDetail.created_at}}</span></div>
            <div v-if="orderDetail.pay_way === 1 || orderDetail.pay_way == 2">支付方式: <span>{{orderDetail.pay_way === 1 ? '微信支付' : orderDetail.pay_way === 2 ? '支付宝' : ''}}</span></div>
            <!-- <div>支付方式: <span>{{orderDetail.pay_way === 1 ? '微信支付' : orderDetail.pay_way === 2 ? '支付宝' : '未支付'}}</span></div> -->
          </div>
          <div class="service" @click="openQrCode"><img src="../../../assets/img/icon_service.png"/>联系客服</div>
        </div>
      </div>
      <!-- 课程信息 -->
      <div class="course">
          <div class="courseText">课程信息</div>
          <div class="courseBox" v-if="orderDetail.course && (orderDetail.course.type == 1 || orderDetail.course.type == 3)">
            <payOrderDetail :course="orderDetail.course"></payOrderDetail>
          </div>
          <div class="courseBox" v-if="orderDetail.course && (orderDetail.course.type == 2)">
            <payOrderDetail  v-for="item in orderDetail.course.package" :key="item.id" :course="item"></payOrderDetail>
          </div>
      </div>
      <!-- 助教老师二维码  status == 1的时候展示-->
      <div class="assistantCode" v-if="orderDetail.status == 1">
        <div class="assistantCodeText">助教老师</div>
        <div class="assistantCodeBox">
          <div class="assistantCodeDetail" v-if="orderDetail.course && (orderDetail.course.type == 1 || orderDetail.course.type == 3)">
            <qrCode :qrCode="orderDetail.course" ></qrCode>
          </div>
          <div class="assistantCodeDetail" v-for="item in orderDetail.course.package" :key="item.id">
            
            <div v-if="orderDetail.course && (orderDetail.course.type == 2)">
              <qrCode :qrCode="item"></qrCode>
            </div>
          </div>
        </div>
      </div>
      <!-- 结算信息 status == 0 或者 == 2 的时候展示-->
      <div class="accounts" v-if="orderDetail.status == 0 || orderDetail.status == 2">
        <div class="accountsText">结算信息</div>
        <div class="accountsBox">
          <div class="totalPrice">
            <div>课程总价</div>
            <div>{{orderDetail.product_amount}}</div>
          </div>
          <div class="actualprice">
            <div>实付金额:</div>
            <div>{{orderDetail.product_amount - orderDetail.product_discount}}</div>
          </div>
        </div>
        <!-- satus == 0的时候展示购买 -->
        <div class="accountsBtn" v-if="orderDetail.status == 0">
          <div @click="cancel(orderDetail.out_trade_no)">取消订单</div>
          <div @click="payBtn(orderDetail.out_trade_no)">立即付款</div>
        </div>
        <!-- status == 2 的时候展示重新购买 -->
        <div class="accountsBtn" v-if="orderDetail.status == 2">
        <router-link :to="{name:'p-courseDetail', params: {id: orderDetail.course.id}}">
          <div class="accountsAgain">重新购买</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="assistantQrCode" @click="closeQrCode" v-if="QrCode">
      <div class="QrCodeBox" @click.stop="QrCodeBtn">
        <div>我是您的专属服务老师，有任何问题都可以联系我帮您解决</div>
        <img src="https://image-01.17jzh.com/common/kefu-qrcode.png" />
        <div>拿出手机微信扫一扫添加服务老师</div>
      </div>
    </div>
  </div>
</template>
<script>
import order from '@c/mixin/mine/order/detail.js'
import payOrderDetail from '@/pages/pc/views/mine/components/payOrderDetail.vue'
import qrCode from '@/pages/pc/components/qrCode/qrCode.vue'
import { createOrderCancel } from '@c/api/course'
export default {
  name: 'courseDetail',
  components: { payOrderDetail,qrCode },
    data() {
    return {
      second:'',
      timer:{},
      QrCode:false
    }
  },
  mixins: [order],
  mounted() {
    clearInterval(this.timer);
    setTimeout(() => {
      if(this.orderDetail.expired_second > 0 && this.orderDetail.status == 0){
        this.countDown()
      }
    }, 500);
  },
  methods: {
    QrCodeBtn(){
      return
    },
    cancel(e){
      this.$confirm('您确认要取消订单吗', '温馨提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        center: true,
        type: 'warning'
      }).then(() => {
        this.createOrder(e)
      }).catch(() => {
               
      });
    },
    payBtn(e){
      window.location.href = process.env.VUE_APP_PAY_URL+'payment/view?out_trade_no='+e + '&callback='+ process.env.VUE_APP_HOME_URL+'/mobile/result-detail'
    },
    // 取消订单
    async createOrder (e) {
      console.log(e)
      let { output, code } = await createOrderCancel({out_trade_no:e})
      if (code !== 0) {
        return
      }
      setTimeout(() => {
        this.$router.go(0)
      }, 1000)
    },
    async countDown(e){
      let s = null;
      let m = null;
      let min = null;
      let sec = null;
      s = this.orderDetail.expired_second % 60;
      m = Math.floor(this.orderDetail.expired_second / 60);
      min = m <= 9 ? "0" + m : m;
      sec = s <= 9 ? "0" + s : s;
      this.second = `${min}分${sec}秒`;
      this.timer = setInterval(() => {
        if (this.orderDetail.expired_second < 1) {
          clearInterval(this.timer);
          this.finish()
          return
        }
        this.orderDetail.expired_second--;
        s = this.orderDetail.expired_second % 60;
        m = Math.floor(this.orderDetail.expired_second / 60);
        min = m <= 9 ? "0" + m : m;
        sec = s <= 9 ? "0" + s : s;
        this.second = `${min}分${sec}秒`;
      }, 1000);
    },
    // 支付超时
    finish(){
      // this.$confirm('已超过支付时间是否重新购买？', '温馨提示', {
      //     confirmButtonText: '重新购买',
      //     cancelButtonText: '取消购买',
      //     center: true,
      //     type: 'warning'
      //   }).then(() => {
      //   //  跳转购课详情
      //     this.$router.push({ name: 'p-courseDetail', params: { id: this.detail.course.id } })
      //   }).catch(() => {
      //     setTimeout(() => {
      //       this.$router.go(0)
      //     }, 1000);         
      //   });
      setTimeout(() => {
        this.$router.go(0)
      }, 1000);  
    },
    openQrCode(){
      this.QrCode = true
    },
    closeQrCode(){
      this.QrCode = false
    }
  }
}
</script>
<style lang="scss" scoped>
.courseDetail{
  padding:50px; 
  background:#FFFFFF;
  .courseDetailText{
    font-size: 24px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #333333;
    margin-bottom: 50px;
  }
  .courseMessage{
    margin-bottom:50px;
    .courseMessageTop{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        color: #333333;
      div:nth-child(1){
        font-size: 18px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
      }
      div:nth-child(2){
        font-size: 16px;
        font-family: MicrosoftYaHei;
      }
      .countDown{
        color:#FB4B09;
      }
    }
    .courseMessageBottom{
      width: 1100px;
      padding: 20px 50px;
      border: 1px solid #D8D8D8;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .courseMessageBottomText{
        line-height: 30px;
        div{
          font-size: 16px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: #333333;
        }
        span{
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #333333;
        }
      }
      .service{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width:24px;
          height:24px;
          margin-right:10px
        }
      }
    }
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
  .assistantCode{
    .assistantCodeText{
      font-size: 18px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #333333;
      margin-bottom:30px;
    }
    .assistantCodeBox{
      width: 1100px;
      // padding: 50px;
      border: 1px solid #D8D8D8;
      // display: flex;
      // align-items: center;
      // justify-content: space-around;
      .assistantCodeDetail{
        text-align:center;
        // display:flex;
        // // align-items:center;
        // justify-content: space-around;
        // width:100%;
        img:nth-child(1){
          width:36px;
          height:36px;
          border-radius:50%;
          margin-bottom:6px;
        }
        div:nth-child(2){
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          margin-bottom:30px
        }
        img:nth-child(3){
          width:200px;
          height:200px;
          margin-bottom:20px
        }
        div:nth-child(4){
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
        }
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
      // display: flex;
      // align-items: center;
      // justify-content: space-around;
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
}
.assistantQrCode{
  // width: 1920px;
  width:100%;
  height:100%;
  // height: 1000px;
  background: rgba(0,0,0,.4);
  // opacity: 0.4;
  position:fixed;
  top:0;
  left:0;
  display: flex;
  align-items: center;
  justify-content: center;
  .QrCodeBox{
    width: 422px;
    height: 422px;
    background: #FFFFFF;
    border-radius: 10px;
    text-align:center;
    div:nth-child(1){
      width: 250px;
      font-size: 16px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #333333;
      line-height:20px;
      margin:50px auto 30px auto
    }
    img:nth-child(2){
      width: 200px;
      height: 200px;
      margin:0 auto 30px auto
    }
    div:nth-child(3){
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
    }
  }
}
</style>