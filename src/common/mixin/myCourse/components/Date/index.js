import moment from 'moment'
export default {
  props: {
    type: {
      type: String,
      default: 'week'
    },
    year: {
      type: [String, Number],
      default: moment().year()
    },
    month: {
      type: [String, Number],
      default: moment().month() + 1
    },
    value: {
      type: String,
      default: moment(new Date()).format('YYYY-MM-DD')
    },
    dateList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  filters: {
    dateFormat(val) {
      if (!val) return
      let date = val.split('-')
      return date[2]
    }
  },
  data() {
    return {
      calendar: [],
      today: moment(new Date()).format('YYYY-MM-DD'),
      active: this.value
    }
  },
  created() {
    this.init()
  },
  watch: {
    month() {
      this.init()
    },
    value() {
      this.active = this.value
    }
  },
  methods: {
    init() {
      if (this.type === 'week') {
        this.calendar = this.getWeek()
      } else {
        let num = 0
        if (moment(`${this.year}-${this.month}-01`).day() === 0) {
          // 当前日期为周日
          num = 6
        } else if (moment(`${this.year}-${this.month}-01`).day() === 1) {
          // 当前日期为周一
          num = 0
        } else {
          num = moment(`${this.year}-${this.month}-01`).day() - 1
        }
        this.calendar = [
          ...Array(num).fill(),
          ...this.getDaysInMonth(this.year, this.month)
        ]
      }
    },
    getDaysInMonth(year, month) {
      const daysOfMonth = []
      month = parseInt(month, 10)
      const lastDayOfMonth = new Date(year, month, 0).getDate()
      for (let i = 1; i <= lastDayOfMonth; i++) {
        daysOfMonth.push(
          moment(new Date(new Date(year, month - 1).setDate(i))).format(
            'YYYY-MM-DD'
          )
        )
      }
      return daysOfMonth
    },
    getWeek() {
      const today = new Date(new Date().toLocaleDateString())
      const start = new Date(
        today.setDate(today.getDate() - (today.getDay() || 7) + 1)
      )
      const week = [
        moment(new Date(start)).format('YYYY-MM-DD'),
        ...Array(6)
          .fill()
          .map(_ =>
            moment(new Date(start.setDate(start.getDate() + 1))).format(
              'YYYY-MM-DD'
            )
          )
      ]
      return week
    },
    setDate(i) {
      if (i == undefined) return
      this.active = i
      this.$emit('select', i)
      this.$emit('input', i)
    }
  }
}
