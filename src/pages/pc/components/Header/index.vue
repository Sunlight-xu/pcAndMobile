<!-- 头部 -->
<template>
  <div class="header">
    <div class="header-content">
      <div class="menu">
        <div class="logo">
          <img src="@/assets/images/logo.png" />
          <div class="logo-text">满分班</div>
        </div>
        <div class="list">
          <router-link to="/pc/course-list" class="item" active-class="active">
            <div class="cn">课程中心</div>
            <div class="en">Courses</div>
          </router-link>
          <router-link to="/pc/my-course" class="item" active-class="active">
            <div class="cn">我的课程</div>
            <div class="en">My Courses</div>
          </router-link>
          <router-link to="/pc/download" class="item" active-class="active">
            <div class="cn">下载客户端</div>
            <div class="en">Download</div>
          </router-link>
          <router-link to="/pc/introduce/" class="item" active-class="active">
            <div class="cn">关于我们</div>
            <div class="en">About Us</div>
          </router-link>
        </div>
      </div>
      <div v-if="userInfo" class="userInfo">
        <Dropdown>
          <Avatar :size="36" :src="userInfo.headimg">
            <img src="@/assets/images/logo-grey.png" />
          </Avatar>
          <DropdownMenu slot="dropdown">
            <DropdownItem @click.native="$router.push('/pc/mine/order-list')">我的订单</DropdownItem>
            <DropdownItem @click.native="$router.push('/pc/mine')">个人中心</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div class="logo-out" @click="logoOut">退出登录</div>
      </div>
      <div v-else class="login" @click="login">登录/注册</div>
    </div>
    <Login></Login>
  </div>
</template>

<script>
import Login from '../Login/index.vue'
import { mapState } from 'vuex'
import { Avatar, Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
export default {
  components: { Login, Avatar, Dropdown, DropdownMenu, DropdownItem },
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo,
    }),
  },
  methods: {
    logoOut() {
      this.$confirm('确定退出登录吗？', {
        confirmButtonText: '退出',
        cancelButtonText: '留下',
      }).then(() => {
        this.$store.dispatch('user/resetUserInfo')
        location.reload()
      })
    },
    login() {
      this.$store.commit('user/SET_SHOWLOGINMODAL', true)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 2px 7px 0px rgba(216, 216, 216, 0.5);
  // margin-bottom: 20px;
  display: flex;
  align-items: center;
  .header-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu {
      display: flex;
      align-items: center;
      .logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
          width: 50px;
          height: 50px;
        }
        .logo-text {
          margin-left: 20px;
          font-size: 30px;
          font-weight: bold;
          color: #333333;
          line-height: 40px;
          border-right: 1px solid #d8d8d8;
          padding-right: 40px;
        }
      }
      .list {
        margin-left: 50px;
        display: flex;
        .active {
          color: #fb4b09 !important;
        }
        .item {
          margin-right: 70px;
          text-align: center;
          color: #333333;
          .cn {
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
          }
          .en {
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
          }
        }
      }
    }
    .login {
      font-size: 20px;
      font-weight: 500;
      color: #fb4b09;
      line-height: 28px;
    }
    .userInfo {
      display: flex;
      align-items: center;
      .logo-out {
        cursor: pointer;
        margin-left: 10px;
        font-size: 20px;
        font-weight: 400;
        color: #666666;
        line-height: 28px;
      }
    }
  }
}
</style>
