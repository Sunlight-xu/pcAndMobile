import { subjectListApi, courseListApi, bannerListApi } from '@c/api/course'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('course', {
      subjectIndex: state => state.subjectIndex,
      gradeId: state => state.gradeId
    })
  },
  data() {
    return {
      list: [],
      subjectList: [],
      subjectActive: 0, // 当前选中的学科索引，默认为第一个
      bannerList: []
    }
  },
  methods: {
    // 获取学科列表
    async getSubjectList () {
      let { code, output } = await subjectListApi({grade: this.gradeId})
      if (code !== 200) {
        return
      }
      this.subjectList = [{ id: 0, name: '全部' }, ...output]
      this.getCourseList()
    },
    // 获取banner列表
    async getBannerList () {
      let { code, output } = await bannerListApi({grade: this.gradeId})
      if (code !== 200) {
        return
      }
      this.bannerList = output
    },
    // 获取讲座列表
    async getCourseList () {
      const params = {
        subject_id: Number(this.subjectList[this.subjectActive].id),
        grade_id: this.gradeId
      }
      let { code, output } = await courseListApi(params)
      if (code !== 200) {
        return
      }
      this.list = output
    },
    changeSubject (index) {
      this.subjectActive = index
      this.$store.dispatch('course/setSubject', index)
      this.getCourseList ()
    }
  },
  mounted() {
    this.subjectActive = this.subjectIndex
    this.getSubjectList()
    this.getBannerList()
  },
  created() {
    
  }
}
