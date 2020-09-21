import { orderDetailApi } from '@c/api/order'
export default {
  data() {
    return {
      detail: {},
    }
  },
  mounted () {
    if (this.$route.params.out_trade_no) {
      this.out_trade_no = this.$route.params.out_trade_no
    } else {
      this.out_trade_no = this.$route.query.out_trade_no
    }
    this.getDetail()
  },
  methods: {
    // 获取课程详情
    async getDetail () {
      let { output,code } = await orderDetailApi({ out_trade_no:this.out_trade_no })
      if (code !== 200) {
        return
      }
      this.detail = output
    },
  },
}
