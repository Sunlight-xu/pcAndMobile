import { orderDetailApi} from '@c/api/order'

export default {
  data() {
    return {
      orderDetail:{}
    }
  },
  methods: {
    // 获取讲座列表
    async getOrderDetail () {
      let { code, output } = await orderDetailApi({ out_trade_no:this.$route.params.id })
      if (code !== 200) {
        return
      }
      this.orderDetail = output
    },
  },
  mounted() {
    this.getOrderDetail()
  },
  created() {
    
  }
}
