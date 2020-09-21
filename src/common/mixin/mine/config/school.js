import { mapState } from 'vuex'
import { updateUserInfo } from '@c/api/user'
import { getProvince, getCity, getArea } from '@c/api/index'
import { Toast } from 'vant'
export default {
  computed: {
    ...mapState({
      userInfo: state => {
        return state.user.userInfo
      }
    })
  },
  data() {
    return {
      province_name: '',
      school_name: '',
      city_name: '',
      area_name: '',
      province: [],
      city: [],
      area: []
    }
  },
  created() {
    this.province_name = this.userInfo.province_name || ''
    this.city_name = this.userInfo.city_name || ''
    this.area_name = this.userInfo.area_name || ''
    this.school_name = this.userInfo.school_name || ''
  },
  methods: {
    async submit() {
      let user = {
        ...this.userInfo
      }
      user.name = this.userInfo.realname
      user.province_name = this.province_name
      user.city_name = this.city_name
      user.area_name = this.area_name
      user.school_name = this.school_name
      let { code } = await updateUserInfo(user)
      if (code === 200) {
        this.$store.dispatch('user/getUser')
        Toast('保存成功')
        this.$router.go(-1)
      }
    },
    async getProvince() {
      let { code, output } = await getProvince()
      if (code !== 200) return
      this.province = output
      return
    },
    async getCity(id) {
      let { code, output } = await getCity({ province_id: id })
      if (code !== 200) return
      this.city = output
      return
    },
    async getArea(id) {
      let { code, output } = await getArea({ city_id: id })
      if (code !== 200) return
      this.area = output
      return
    }
  }
}
