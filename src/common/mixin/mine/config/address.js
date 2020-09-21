import { mapState } from 'vuex'
import { updateAddress } from '@c/api/user'
import { getProvince, getCity, getArea } from '@c/api/index'
import { Toast } from 'vant'

export default {
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
      // address: state => !state.user.address ? this.defaultAddress : state.user.address
    })
  },
  data() {
    return {
      province: [],
      city: [],
      area: [],
      address: {
        province: '',
        city: '',
        area: '',
        addr: '',
        name: '',
        mobile: '',
        addr_id: 0,
        areaStr: ''
      }
    }
  },
  mounted() {
    this.$store.dispatch('user/getAddress').then(res => {
      if (res) {
        this.address = res
      }
    })
  },
  methods: {
    async submit() {
      let { code } = await updateAddress(this.address)
      if (code === 200) {
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
