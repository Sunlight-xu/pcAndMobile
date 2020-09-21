import { getCourseDetail } from '@c/api/mycourse'
export default {
  data() {
    return {
      detail: []
    }
  },
  async created() {
    // 数据初始化
    let { output } = await getCourseDetail(this.$route.params.id)
    this.detail = output
  }
}
