<template>
  <div class="container">
    <div class="title">满分班</div>
    <div class="slogan">与你一起成就满分传奇！</div>
    <div class="content-box">
      <div class="input-item" :class="{'b-red': form.userid.length > 0}">
        <span class="iconfont icon-shoujihao f-size"></span>
        <input v-model.number.trim="form.userid" @keyup="checkTell" maxlength="11" placeholder="请输入手机号" type="tel" />
      </div>
      <div class="input-item" :class="{'b-red': form.VerificationCode.length > 0}">
        <span class="iconfont icon-mima f-size"></span>
        <input
          v-model.number.trim="form.VerificationCode"
          type="tel"
          @keyup="checkCode"
          maxlength="4"
          placeholder="请输入短信验证码"
        />
        <div class="get-ms" @click="sendCode">
          <span v-if="typeof text === 'number' && !isNaN(text)" class="c-red">{{text}} S</span>
          <span v-else>{{text}}</span>
        </div>
        <!-- <Button
          class="get-ms"
          type="primary"
          plain
          color="#ffffff"
          :disabled="typeof text === 'number' && !isNaN(text)"
          @click="sendCode"
        >
          <span v-if="typeof text === 'number' && !isNaN(text)">{{text}} S</span>
          <span v-else>{{text}}</span>
        </Button> -->
      </div>
      <Button
        class="submint"
        round
        block
        :loading="loading"
        loading-text="登录中..."
        type="primary"
        color="#FA5D3F"
        @click="login"
      >登录满分班</Button>
    </div>
  </div>
</template>
<script>
import { Button, Toast } from 'vant'
import login from '@c/mixin/login/index.js'
export default {
  components: { Button },
  mixins: [login],
  methods: {
    showMessage(message) {
      Toast(message)
    },
  },
}
</script>
<style lang="scss" scoped>
.f-size {
  font-size: 40px;
  color: #FB4B09;
}
.c-red {
  color: #FB4B09;
}
.container {
  overflow: hidden;
  padding: 0 60px;
  height: 100vh;
  background: #ffffff;
  .title {
    margin-top: 120px;
    font-size: 60px;
    color: #FB4B09;
    font-weight: bold;
  }
  .slogan {
    margin-top: 14px;
    color: #333333;
    font-size: 32px;
    font-family: PingFang-SC-Regular, PingFang-SC;
    font-weight: 400;
    line-height: 44px;
  }
  .content-box {
    padding-top: 66px;
    .input-item {
      position: relative;
      overflow: hidden;
      margin-top: 30px;
      box-sizing: border-box;
      width: 100%;
      height: 92px;
      display: flex;
      align-items: center;
      border-bottom: 2px solid #D8D8D8;
      &.b-red {
        border-bottom: 2px solid #FB4B09;
      }
      input {
        padding-left: 16px;
        width: 100%;
        font-size: 28px;
        border: none;
        outline: none;
      }
    }
    .get-ms {
      position: absolute;
      padding: 0;
      right: 0;
      width: 200px;
      height: 100%;
      font-size: 28px;
      color: #666666;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .submint {
      margin-top: 120px;
    }
  }
}
</style>