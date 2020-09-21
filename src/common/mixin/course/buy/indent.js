import { courseDetail, courseDetailPay, createOrder,createOrderFree } from '@c/api/course'
import { mapState } from 'vuex'
import store from '@c/store'
export default {
  computed: {
    ...mapState('user', {
      address: state => state.address,
      userInfo: state => state.userInfo
    })
  },
  data() {
    return {
      detail: [],
      discounts:{}
    }
  },
  mounted() {
    this.$store.dispatch('user/getAddress')
    this.getDetail()
  },
  methods: {
    // 获取课程详情
    async getDetail () {
      let { output,code } = await courseDetail(this.$route.params.id)
      if (code !== 200) {
        return
      }
      this.detail = output
      this.getDiscounts()
    },
    // 获取优惠信息
    async getDiscounts () {
      let { output,code } = await courseDetailPay({courseid:this.$route.params.id,scode:this.$route.query.scode})
      if (code !== 200) {
        return
      }
      this.discounts = output
    },
    // 点击支付按钮
    async createOrder () {
      const address = this.address
      if (!address) {
        this.$toast('请填写正确的地址')
        return
      }
      let data = {
        tid: process.env.VUE_APP_PAY_TID,
        product_type: 0, // 课程
        product_id: this.$route.params.id, // 课程id 动态
        product_body: this.detail.title, // 课程的标题
        product_attach: '', // 空着
        account_type : 2, // 账户类型
        pay_way : 1 , // 支付方式
        account_id: this.userInfo.id,
        openid: this.userInfo.openid,
        callback: process.env.VUE_APP_HOME_URL+'/mobile/result-detail',// 回调地址
        discount:this.discounts.discount, // 优惠金额
        discount_code:this.discounts.discount_code, // 优惠码
        payment:this.discounts.payment, // 支付金额
        price:this.discounts.price, // 实际金额
        cours_ids:this.detail.id, //课程id
        scode: sessionStorage.getItem('scode')
      }
      this.$toast.loading({
        message: '提交中...',
        forbidClick: true,
      })
      if (this.detail.type == 3) {      // 零元课
        data.product_type = 0
        data.pay_way = 0
        let { output, code } = await createOrderFree(data)
        if (code !== 0) {
          return
        }

        this.$router.replace({path: `${this.$config.baseUrl}/result-detail`, query: {out_trade_no:output.out_trade_no}})
      } else { // 正价课 or 联报
        data.product_type = this.detail.type == 2 ? 1 : 3
        data.pay_way = 1
        data.cours_ids = this.detail.type == 2 ? this.detail.package[0].id+','+this.detail.package[1].id : this.detail.id
        let { output, code } = await createOrder(data)
        console.log(output)
        if (code !== 0) {
          return
        }
        window.location.replace(output.href_pay)
      }
    }
  },
}
