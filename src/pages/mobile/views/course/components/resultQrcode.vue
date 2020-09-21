<template>
  <div class="qrCodeBox">
    <div class="qrCode" v-if="detail.assistant_info">
      <div class="qrCodeTeacher">
        <img :src="detail.assistant_info.img"/>
        <div>{{detail.assistant_info.name}}老师</div>
      </div>
      <div class="qrCodeDetail">
        <div>{{detail.title}}</div>
        <div>开课时间: {{detail.start_date}}-{{detail.end_date}}</div>
        <div>
          <img :src="detail.assistant_info.qrcode"/>
          <div>长按识别二维码添加</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'resultQrcode',
  props: {
    detail: {
      type: Object,
      default () {
      }
    }
  }
}
</script>

<style lang="scss" scoped>
      .qrCode:last-of-type{
      border-bottom: 0;
    }
    .qrCodeBox{
      background: #FFFFFF;
    }
    .qrCode{
      width: 612px;
      padding: 30px 0;
      border-top: 2px dashed #D8D8D8;
      border-bottom: 2px dashed #D8D8D8;
      display: flex;
      justify-content: left;
      margin: 0 auto;
      .qrCodeTeacher{
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        text-align: center;
        width: 100px;
        margin-right: 50px;
        img{
          width: 72px;
          height: 72px;
          border-radius: 72px;
        }
      }
      .qrCodeDetail{
        div:nth-child(1){
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          margin-bottom: 10px;
        }
        div:nth-child(2){
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          margin-bottom: 54px;
        }
        div:nth-child(3){
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          text-align: center;
          width: 300px;
          img{
            width: 300px;
            height: 300px;
            margin-bottom: 20px;
          }
        }
      }
    }
</style>