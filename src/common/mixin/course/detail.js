import { courseDetail } from '@c/api/course'

export default {
  data() {
    return {
      detail: {},
      active: 0,
      isLoad: false // 接口是否请求完成
    }
  },
  computed: {
    courseId () {
      return Number(this.$route.params.id)
    }
  },
  methods: {
    // 获取课程详情
    async getDetail () {
      // 数据初始化
      let { code, output } = await courseDetail(this.courseId)
      if (code !== 200) {
        return
      }
      this.isLoad = true
      this.detail = output
    }
  },
  mounted() {
    this.getDetail()
  },
  created() {
    
  }
}
