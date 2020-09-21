<template>
  <div class="courseDetail">
    <div class="DetailTitle">
      <div class="title">{{detail.title}}</div>
      <div class="detail">
        <div>
          开课时间:
          <span v-if="detail.start_date">{{detail.start_date.replace(/\-/g,'.')}}</span>-
          <span v-if="detail.end_date">{{detail.end_date.replace(/\-/g,'.')}}</span>
        </div>
        <div v-if="detail.list">共{{detail.lessons}}课时</div>
      </div>
    </div>
    <div class="titleText">我的课程</div>
    <div class="courseClass" v-for="(i, index) in detail.list" :key="index">
      <div class="classTitle">{{index+1}}.{{i.title}}</div>
      <div class="classDetail">
        <div
          class="classDetailTime"
        >{{i.start_at.substring(5,10).replace('-','.')}} {{i.start_at.substring(11,16)}}-{{i.end_at.substring(11,16)}} | 第{{i.no}}节</div>
        <div class="classBtn" :style="{color: i.status !=1?'#FB4B09':''}">{{i.status| classStatus}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import courseDetail from '@c/mixin/myCourse/courseDetail/courseDetail.js'

export default {
  mixins: [courseDetail],
}
</script>
<style lang="scss" scoped>
.courseDetail {
  width: 690px;
  margin: 30px auto;
  overflow: hidden;
  .DetailTitle {
    // width: 630px;
    background: #ffffff;
    box-shadow: 0px 0px 16px 0px rgba(229, 229, 229, 0.5);
    border-radius: 16px;
    padding: 40px 30px;
    margin-bottom: 30px;
    .title {
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      margin-bottom: 30px;
    }
    .detail {
      display: flex;
      align-items: center;
      justify-content: space-between;
      div:nth-child(1) {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
      }
      div:nth-child(2) {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }
    }
  }
  .titleText {
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
  }
  .courseClass {
    border-bottom: 1px solid #d8d8d8;
    padding: 30px 0 36px 0;
    .classTitle {
      font-size: 28px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
    }
    .classDetail {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 660px;
      margin: 0 auto;
      .classDetailTime {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        margin-top: 28px;
      }
      .classBtn {
        width: 120px;
        height: 48px;
        background: #ffffff;
        border-radius: 30px;
        border: 2px solid #eeeeee;
        text-align: center;
        line-height: 48px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #cccccc;
      }
    }
  }
}
</style>