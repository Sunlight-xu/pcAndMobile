import { mapState } from 'vuex'
import { getCoursedate, getCourse, getClass } from '@c/api/mycourse.js'
import moment from 'moment'
export default {
  data() {
    return {
      s_date: moment()
        .isoWeekday(1)
        .format('YYYY-MM-DD'),
      e_date: moment()
        .isoWeekday(7)
        .format('YYYY-MM-DD'),
      dateList: [],
      date: moment().format('YYYY-MM-DD'),
      course: [],
      lesson: []
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  mounted() {
    if (this.userInfo) {
      this.init()
    }
  },
  methods: {
    getDate(i) {
      this.date = i
      this.getClassList()
    },
    async init() {
      this.getDateList()
      this.getClassList()
      // 全部课程
      this.getAll()
    },
    // 获取课程日历
    async getDateList() {
      // 获取日历课时
      let { code, output } = await getCoursedate({
        s_date: this.s_date,
        e_date: this.e_date
      })
      if (code === 200) {
        this.dateList = output || []
      }
    },
    async getAll() {
      let { code, output } = await getCourse()
      if (code === 200) {
        if (output.length > 0) {
          this.course = output
        } else {
          this.course = null
        }
      }
    },
    async getClassList() {
      let { code, output } = await getClass({
        date: this.date
      })
      if (code === 200) {
        this.lesson = output || []
      }
    }
  }
}
