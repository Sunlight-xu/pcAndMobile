import { getCoursedate, getClass } from '@c/api/mycourse.js'
import moment from 'moment'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      active: moment().format('YYYY-MM-DD'),
      year: moment().year(),
      month: moment().month() + 1,
      s_date: moment()
        .startOf('month')
        .format('YYYY-MM-DD'),
      e_date: moment()
        .endOf('month')
        .format('YYYY-MM-DD'),
      dateList: [],
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
      this.active = i
      this.getClassList()
    },
    async init() {
      this.month = Number(this.month) >= 10 ? this.month : '0' + this.month
      // 获取日历课时
      this.getDateList()
      this.getClassList()
    },
    changeMonth(key) {
      if (key === 'add') {
        if (this.month != '12') {
          this.month = Number(this.month) + 1
        } else {
          this.month = 1
          this.year = Number(this.year) + 1
        }
      } else {
        if (this.month != '01') {
          this.month = Number(this.month) - 1
        } else {
          this.month = 12
          this.year = Number(this.year) - 1
        }
      }
      console.log(this.month)
      this.month = Number(this.month) >= 10 ? this.month : '0' + this.month
      console.log(this.month)
      this.active = moment(`${this.year}-${this.month}`)
        .startOf('month')
        .format('YYYY-MM-DD')
      this.s_date = moment(`${this.year}-${this.month}`)
        .startOf('month')
        .format('YYYY-MM-DD')
      this.e_date = moment(`${this.year}-${this.month}`)
        .endOf('month')
        .format('YYYY-MM-DD')
      this.getDateList()
      this.getClassList()
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
    async getClassList() {
      let { code, output } = await getClass({
        date: this.active
      })
      if (code === 200) {
        this.lesson = output || []
      }
    }
  }
}
