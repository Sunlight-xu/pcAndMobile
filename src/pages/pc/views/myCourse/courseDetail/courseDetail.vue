<template>
  <div class="courseDetail">
    <div class="DetailTitle">
      <div class="banner">
        <img v-if="detail.assistant_info" :src="detail.assistant_info.img" alt />
      </div>
      <div>
        <div class="title">{{detail.title}}</div>
        <div class="detail">
          <div class="time">
            开课时间:
            <span v-if="detail.start_date">{{detail.start_date.replace(/\-/g,'.')}}</span>-
            <span v-if="detail.end_date">{{detail.end_date.replace(/\-/g,'.')}}</span>
          </div>
          <div class="sum" v-if="detail.list">共{{detail.lessons}}课时</div>
        </div>
        <div class="speed">
          <span>完成进度：</span>
          <span style="color:#EB2323">{{detail.over_count}}</span>
          /
          <span v-if="detail.list">{{detail.lessons}}</span>
        </div>
      </div>
    </div>
    <div class="titleText">课程表</div>
    <div class="courseClass" v-for="(i, index) in detail.list" :key="index">
      <div class="classTitle">
        <div class="classIndex">{{index+1}}</div>
        <div class="title-right">
          <div class="text">{{i.title}}</div>
          <div
            class="time"
          >{{i.start_at.substring(5,10).replace('-','.')}} {{i.start_at.substring(11,16)}}-{{i.end_at.substring(11,16)}} | 第{{i.no}}节</div>
        </div>
      </div>
      <div class="classDetail">
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
  padding: 30px 20px;
  padding-bottom: 100px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(229, 229, 229, 0.5);
  .DetailTitle {
    background: #ffffff;
    border-bottom: 1px solid #d8d8d8;
    padding: 40px 30px;
    margin-bottom: 30px;
    display: flex;
    .banner {
      margin-right: 50px;
      img {
        width: 470px;
        height: 262px;
      }
    }
    .title {
      font-size: 16px;
      font-weight: bold;
      color: #333333;
      line-height: 21px;
    }
    .detail {
      .time {
        margin-top: 15px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #666666;
        line-height: 19px;
      }
      .sum {
        margin-top: 15px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffa1a1;
        line-height: 17px;
      }
    }
    .speed {
      margin-top: 30px;
      font-size: 16px;
      font-weight: bold;
      color: #333333;
      line-height: 21px;
    }
  }
  .titleText {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    line-height: 31px;
  }
  .courseClass {
    border-bottom: 1px solid #d8d8d8;
    padding: 30px 0 36px 0;
    display: flex;
    justify-content: space-between;
    .classTitle {
      display: flex;
      align-items: center;
      .title-right {
        margin-left: 20px;
        .text {
          font-size: 16px;
          font-weight: 500;
          color: #333333;
          line-height: 22px;
        }
        .time {
          margin-top: 20px;
          font-size: 14px;
          font-weight: 400;
          color: #666666;
          line-height: 20px;
        }
      }
      .classIndex {
        width: 24px;
        height: 24px;
        background: #eeeeee;
        border-radius: 50%;
        text-align: center;
        line-height: 24px;
        font-size: 16px;
        font-weight: 500;
        color: #666666;
      }
    }
    .classDetail {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .classDetailTime {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        margin-top: 28px;
      }
      .classBtn {
        width: 68px;
        height: 32px;
        background: #ffffff;
        border-radius: 30px;
        border: 1px solid #eeeeee;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #cccccc;
      }
    }
  }
}
</style>