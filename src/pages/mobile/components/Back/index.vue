<template>
  <div class="back">
    <div class="left" @click="$router.go(-1) || $router.replace({'name': 'm-courseList'})">
      <Icon size="24" name="arrow-left" />
      <div class="text">返回</div>
      <div class="border"></div>
    </div>
    <div class="right">
      <div class="content">
        <div>满分班</div>
        <div>与你一起成就满分传奇</div>
      </div>
      <div class="logo">
        <img src="@/assets/images/logo.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from 'vant'
export default {
  components: { Icon },
}
</script>
<style lang="scss" scoped>
.back {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: fixed;
  top: 0;
  height: 92px;
  background: #ffffff;
  z-index: 10;
  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      margin-left: 24px;
      font-size: 28px;
      font-weight: 500;
    }
    .border {
      margin-left: 32px;
      height: 54px;
      width: 4px;
      background: #f2f2f2;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .content {
      text-align: right;
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      color: #a9a9a9;
    }
    .logo {
      margin-left: 16px;
      img {
        width: 48px;
        height: 48px;
      }
    }
  }
}
</style>