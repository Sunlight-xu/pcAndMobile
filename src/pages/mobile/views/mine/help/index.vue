<!-- 帮助中心 -->
<template>
  <div class="help">
    <div class="box">
      <div class="header">
        <div class="img">
          <img src="@/assets/images/logo.png" />
        </div>
        <div class="name">满分班客服</div>
        <div class="text">我是您的专属服务老师，有任何问题都可以联系我帮您解决</div>
      </div>
      <div class="code-box">
        <div class="code-img">
          <van-image src="https://image-01.17jzh.com/common/kefu-qrcode.png"></van-image>
        </div>
        <div class="code-text">识别上方二维码添加我的微信</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Image as VanImage } from 'vant'
export default {
  components: { VanImage },
}
</script>

<style lang="scss" scoped>
.help {
  padding-top: 60px;
  .box {
    margin: 0 auto;
    width: 620px;
    height: 842px;
    background: #ffffff;
    box-shadow: 0px 0px 12px 0px #d8d8d8;
    border: 2px solid #e4e4e4;
    .header {
      padding: 30px;
      box-sizing: border-box;
      width: 620px;
      height: 312px;
      background: linear-gradient(270deg, #ff5a3e 0%, #ff8e3d 100%);
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      .img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .name {
        margin-top: 4px;
        margin-bottom: 20px;
        font-size: 32px;
        font-weight: 600;
        color: #ffffff;
      }
      .text {
        font-size: 24px;
        font-weight: 400;
        color: #ffffff;
        line-height: 40px;
      }
    }
    .code-box {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      height: calc(100% - 312px);
      .code-img {
        width: 400px;
        height: 420px;
        background: #ccc;
      }
      .code-text {
        margin-top: 20px;
        font-size: 28px;
        font-weight: 400;
        color: #333333;
      }
    }
  }
}
</style>
