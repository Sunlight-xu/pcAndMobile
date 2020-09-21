<template>
  <div id="course-info">
    <p class="title">{{detail.title}}</p>
    <div class="cont">
      <p class="time">
        <span v-if="detail.type !== 2">开课时间：{{detail.start_date}} - {{detail.end_date}}</span>
        <span v-if="detail.type === 2">包含{{detail.package.length}}门课 | 火热报名中</span>
      </p>
      <p class="num" v-if="detail.type !== 2">共{{detail.lessons}}课时</p>
    </div>
    <p class="price">¥ {{detail.price}}</p>
  </div>
</template>

<script>

export default {
  name: 'CourseInfo',
  props: {
    detail: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#course-info {
  background: #ffffff;
  width: 100%;
  padding: 30px;
  border-bottom: 0.01333rem solid #EBEBEB;
  .title {
    font-size: 32px;
    font-weight: bold;
    color: #333333;
    line-height: 44px;
  }
  .cont {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 94px;
    font-size: 24px;
    .time {
      color: #999999;
      display: flex;
      height: 34px;
      align-items: center;
      span {
        margin-left: 6px;
      }
    }
    .num {
      font-family: DIN Alternate;
      color: #999999;
      line-height: 34px;
    }
  }
  .price {
    font-family: DIN Alternate;
    font-weight: bold;
    color: #EB2323;
    font-size: 36px;
  }
}
</style>