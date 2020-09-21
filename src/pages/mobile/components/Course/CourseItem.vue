<template>
  <div id="course-item">
    <div class="top-box">
      <p class="title">{{detail.title}}</p>
      <div class="cont">
        <p class="time">
          <span class="iconfont icon-shijian icon"></span>
          <span>{{detail.tips}}</span>
        </p>
        <p class="num" v-if="detail.type !== 2">共{{detail.lessons}}课时</p>
      </div>
    </div>
    <div class="bot-box">
      <p class="open-time">开课时间: {{detail.start_date}}-{{detail.end_date}}</p>
      <slot name="bot-right"></slot>
    </div>
    <img src="../../assets/img/lianbaoyouhui.png" alt="" class="icon-lianbao" v-if="detail.type === 2">
  </div>
</template>

<script>

export default {
  name: 'CourseItem',
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
#course-item {
  width: 100%;
  padding: 40px 30px 0 30px;
  background: #ffffff;
  box-shadow: 0px 0px 16px 0px rgba(229, 229, 229, 0.5);
  border-radius: 16px;
  margin-bottom: 30px;
  position: relative;
  .top-box {
    .title {
      font-size: 32px;
      font-weight: bold;
      color: #333333;
      line-height: 44px;
    }
    .cont {
      padding: 30px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 94px;
      font-size: 24px;
      border-bottom: 1px solid #EBEBEB;
      .time {
        font-family: DIN Alternate;
        color: #666666;
        display: flex;
        height: 34px;
        align-items: center;
        .icon {
          font-size: 24px;
          color: #CCCCCC;
        }
        span {
          margin-left: 6px;
        }
      }
      .num {
        font-family: DIN Alternate;
        color: #FFA1A1;
        line-height: 34px;
      }
    }
  }
  .bot-box {
    width: 100%;
    display: flex;
    height: 94px;
    align-items: center;
    justify-content: space-between;
    .open-time {
      font-family: DIN Alternate;
      color: #999999;
      font-size: 24px;
    }
  }
  .icon-lianbao {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }
}
</style>
