import { orderListApi} from '@c/api/order'

export default {
  data() {
    return {
      courseList: [],
      loading: false,
      finished: false,
      offset:100,
      page: 0,
      subjectActive: -1,
      is_load:true,
    }
  },
  methods: {
    // 获取讲座列表
    async getOrderList (type) {
      let { code, output } = await orderListApi({ page:this.page,status:this.subjectActive })
      if (code !== 200) {
        return
      }
      if (output.length === 0) {
        this.finished = true,
        this.is_load = false
        if (type === 1) { this.courseList = [] }
      } else {
        if (type === 1) {
          // 下拉更新页面
          this.courseList = output
        } else if (type === 2) {
          // 触底拉取接口
          this.courseList = this.courseList.concat(output)
        }
      }  
      this.loading = false
    },
    onLoad () {
      setTimeout(() => {
        if (this.refreshing) {
          this.page = 0
          this.getOrderList(1)
        } else {
          this.page += 1
          this.getOrderList(2)
        }
      }, 1000)
    },
    changeSubject (index) {
      this.subjectActive = index == '全部' ? -1 : index == '已支付' ? 1 : index == '待支付' ? 0 : index == '已取消' ? 2 : 3
      this.page = 0
      this.is_load = true
      this.getOrderList (1)
    }
  },
  mounted() {
    this.getOrderList(1)
  },
  created() {
    
  }
}
