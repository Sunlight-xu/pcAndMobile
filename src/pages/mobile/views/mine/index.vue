<template>
  <div class="mine">
    <div v-if="userInfo">
      <div class="header">
        <div class="info">
          <div class="img">
            <img v-if="!userInfo.headimg" src="@/assets/images/logo-grey.png" />
            <img v-else :src="headimg" alt />
          </div>
          <div class="user">
            <div class="name">{{userInfo.realname || userInfo.member}}</div>
            <!-- <div class="class">{{userInfo.grade || '未知'}}</div> -->
          </div>
        </div>
        <div class="right">
          <router-link class="content" to="mine-detail">
            <div class="text">完善信息</div>
            <Icon class="icon" size="16" name="arrow" color="#fff" />
          </router-link>
        </div>
      </div>
      <div class="content">
        <router-link to="mine/order-list">
          <div class="item">
            <div class="icon">
              <svg-icon name="icon-dingdan"></svg-icon>
            </div>
            <div class="title">我的订单</div>
            <div class="right"></div>
          </div>
        </router-link>
        <router-link class="item" to="mine/help">
          <div class="icon">
            <svg-icon name="icon-bangzhuzhongxin"></svg-icon>
          </div>
          <div class="title">帮助中心</div>
          <div class="right"></div>
        </router-link>
      </div>
      <Button class="login-out" round block @click="show=true">退出登录</Button>
    </div>
    <div v-else>
      <div class="login-tip">立即登录，查看你的账户</div>
      <div class="login">
        <router-link to="login?redirect=mine">
          <Button class="login-btn" round type="primary" color="#FA5D3F">登录/注册</Button>
        </router-link>
      </div>
    </div>
    <ActionSheet
      v-model="show"
      @select="select"
      :actions="actions"
      cancel-text="留下"
      description="确定退出登录吗？"
    ></ActionSheet>
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from '@m/components/Tabbar/index.vue'
import mine from '@c/mixin/mine'
import { Button, Icon, ActionSheet } from 'vant'
export default {
  components: { Tabbar, Button, Icon, ActionSheet },
  mixins: [mine],
  data() {
    return {
      show: false,
      actions: [{ name: '退出', color: '#FB4B09' }],
    }
  },
  methods: {
    select() {
      this.$store.dispatch('user/resetUserInfo')
      location.reload()
    },
  },
}
</script>
<style lang="scss" scoped>
.mine {
  width: 100%;
  a {
    text-decoration: none;
  }
  .header {
    box-sizing: border-box;
    padding: 0px 30px;
    width: 100%;
    height: 220px;
    background: linear-gradient(265deg, #fd9970 0%, #fb4b09 100%);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info {
      display: flex;
      .img {
        width: 96px;
        height: 96px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .user {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        margin-left: 20px;
        font-size: 28px;
        font-weight: bold;
        color: #ffffff;
      }
    }
    .right {
      .content {
        display: flex;
        align-items: center;
      }
      .text {
        margin-right: 20px;
        color: #fff;
        font-size: 28px;
        font-weight: 400;
      }
    }
  }
  .login-out {
    color: #333333;
    left: 50%;
    transform: translateX(-50%);
    width: 690px;
    bottom: 200px;
    position: absolute;
  }
  .content {
    width: 100%;
    box-sizing: border-box;
    padding: 30px 16px;
    position: relative;
    .item {
      width: 100%;
      box-sizing: border-box;
      padding: 0 20px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      height: 92px;
      background: #ffffff;
      box-shadow: 0px 0px 14px 0px rgba(224, 224, 224, 0.5);
      border-radius: 12px;
      .icon {
        width: 48px;
        height: 48px;
        font-size: 48px;
        margin-right: 20px;
      }
      .title {
        font-size: 28px;
        font-weight: 500;
        color: #333333;
      }
      .right {
      }
    }
  }
  .login-tip {
    text-align: center;
    padding-top: 292px;
    font-size: 28px;
    font-weight: 400;
    color: #999999;
  }
  .login {
    margin-top: 80px;
    text-align: center;
    .login-btn {
      width: 364px;
    }
  }
}
</style>