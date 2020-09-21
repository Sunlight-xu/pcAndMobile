import { mapState } from 'vuex'
import { updateUserInfo } from '@c/api/user'
import { Toast } from 'vant'
export default {
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  data() {
    return {
      name: ''
    }
  },
  created() {
    this.name = this.userInfo.realname
  },
  methods: {
    async submit() {
      let user = {
        ...this.userInfo
      }
      user.name = this.name
      let { code } = await updateUserInfo(user)
      if (code === 200) {
        this.$store.dispatch('user/getUser')
        Toast('保存成功')
        this.$router.go(-1)
      }
    }
  }
}
