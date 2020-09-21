<!-- 登录 -->
<template>
  <div class="login-layer" v-if="show">
    <div class="bg" @click="hiddenModal"></div>
    <div class="login-modal">
      <div class="circular-1"></div>
      <div class="circular-2"></div>
      <div class="circular-3"></div>
      <div class="body">
        <div class="title">满分班</div>
        <div class="text">与你一起成就满分传奇！</div>
        <Input
          v-model.number.trim="form.userid"
          @keyup="checkTell"
          maxlength="11"
          placeholder="请输入手机号"
          type="tel"
        />
        <div class="input-box">
          <Input
            class="input"
            v-model.number.trim="form.VerificationCode"
            type="tel"
            @keyup="checkCode"
            maxlength="4"
            placeholder="请输入短信验证码"
          />
          <div class="get-ms" @click="sendCode">
            <span v-if="typeof text === 'number' && !isNaN(text)" class="c-red">{{text}}s</span>
            <span v-else>{{text}}</span>
          </div>
        </div>
        <Button type="primary" round class="button" :disabled="loading" @click="login('pc')">登录满分班</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { Input, Message, Button } from 'element-ui'
import login from '@c/mixin/login/index.js'
export default {
  components: { Input, Button },
  computed: {
    show() {
      return this.$store.state.user.showLoginModal
    },
  },
  mixins: [login],
  data() {
    return {}
  },
  methods: {
    showMessage(msg) {
      Message(msg)
    },
    hiddenModal() {
      this.$store.commit('user/SET_SHOWLOGINMODAL', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.login-layer {
  z-index: 100;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba($color: #000000, $alpha: 0.3);
  }
  .login-modal {
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 476px;
    height: 534px;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    .body {
      position: relative;
      z-index: 1;
      padding: 100px 70px;
      .title {
        text-align: center;
        font-size: 30px;
        color: #fb4b09;
        line-height: 36px;
      }
      .text {
        margin-bottom: 50px;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        line-height: 22px;
      }
      .input {
        position: relative;
      }
      .input-box {
        margin-top: 14px;
        position: relative;
        .get-ms {
          text-align: center;
          width: 80px;
          font-size: 14px;
          font-weight: 400;
          color: #666666;
          line-height: 20px;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          position: absolute;
          .c-red {
            color: #fb4b09 !important;
          }
        }
      }
      .button {
        margin-top: 70px;
        width: 100%;
      }
    }
    .circular-1 {
      position: absolute;
      border-radius: 50%;
      right: -97px;
      top: -80px;
      width: 236px;
      height: 236px;
      background: linear-gradient(
        39deg,
        #fb4b09 0%,
        #ffdacc 100%,
        rgba(243, 50, 50, 0) 100%
      );
    }
    .circular-2 {
      position: absolute;
      border-radius: 50%;
      left: 300px;
      top: 123px;
      width: 34px;
      height: 34px;
      background: linear-gradient(
        224deg,
        #fb4b09 0%,
        #ffdacc 100%,
        rgba(243, 50, 50, 0) 100%
      );
    }
    .circular-3 {
      position: absolute;
      left: -113px;
      bottom: 62px;
      border-radius: 50%;
      width: 158px;
      height: 158px;
      background: linear-gradient(
        224deg,
        #fb4b09 0%,
        #ffdacc 100%,
        rgba(243, 50, 50, 0) 100%
      );
    }
  }
}
</style>
