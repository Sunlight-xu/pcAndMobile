import { getCode, getLogin, getUserInfo } from '@c/api/user'
export default {
  data() {
    return {
      form: {
        userid: '',
        VerificationCode: ''
      },
      btnActive: true,
      timer: null,
      text: '获取验证码',
      redirect: this.$route.query.redirect,
      loading: false
    }
  },
  async created() {},
  methods: {
    //获取电话框的焦点
    getfocus() {
      document.getElementById('phoneint').focus() //文本框的id
    },
    getfocuscode() {
      document.getElementById('codeint').focus() //文本框的id
    },
    // 提示组件
    toast(message) {
      this.showMessage(message)
    },
    //倒计时
    runCuntDown() {
      if (this.timer) return
      this.text = 60
      this.timer = setInterval(() => {
        this.text--
        if (this.text <= 0) {
          clearInterval(this.timer)
          this.timer = null
          this.text = '获取验证码'
        }
      }, 1000)
    },
    //获取验证码
    getVerificationCode() {
      let pars = {
        phone: this.form.userid,
        client: '1'
      }
      getCode(pars)
        .then(res => {
          if (res.code != 200) {
            this.toast(res.tip)
          } else {
            this.toast('发送成功')
            this.runCuntDown()
          }
        })
        .catch(err => {
          this.toast(err.tip)
        })
    },
    //发送验证码
    sendCode() {
      if (
        !/^1[3456789]\d{9}$/.test(this.form.userid) ||
        this.form.userid == ''
      ) {
        this.toast('请正确填写手机号')
      } else {
        this.getVerificationCode()
      }
    },
    //手机验证校验
    checkTell() {
      if (!/\d$/.test(this.form.userid)) {
        this.toast('只能填写数字')
        this.form.userid = ''
        return
      }
    },
    //验证码验证校验
    checkCode() {
      if (!/\d$/.test(this.form.VerificationCode)) {
        this.toast('只能填写数字')
        this.form.VerificationCode = ''
        return
      }
    },
    //登录 target: pc 不跳转
    login(target) {
      if (this.form.userid == '') {
        this.toast('请输入手机号')
      } else if (!/^1[3456789]\d{9}$/.test(this.form.userid)) {
        this.toast('请填写正确的手机号格式')
      } else if (this.VerificationCode == '') {
        this.toast('请输入验证码')
      } else if (!/^\d{4}$/.test(this.form.VerificationCode)) {
        this.toast('验证码格式错误')
      } else {
        let cid =
          window.localStorage.getItem('cid') == null
            ? 1
            : window.localStorage.getItem('cid')
        let par = {
          phone: this.form.userid,
          code: this.form.VerificationCode,
          cid: cid,
          indexurl: window.location.href
        }
        this.loading = true
        getLogin(par)
          .then(res => {
            if (res.code == 200) {
              window.localStorage.setItem('token', res.output.token)
              this.$store.dispatch('user/getUser')
              this.$store.dispatch('user/setToken', res.output.token)
              if (target !== 'pc') {
                if (this.redirect) {
                  this.$router.replace(this.redirect)
                } else {
                  this.$router.replace(`${this.$config.baseUrl}/course-list`)
                }
              } else {
                // 关闭登录弹框 刷新页面
                this.$emit('update:show', false)
                location.reload()
              }
            } else if (res.code == 302) {
              window.location.href = res.output
            }
            this.loading = false
          })
          .catch(err => {
            this.toast(err.tip)
            this.loading = false
          })
      }
    }
  }
}
