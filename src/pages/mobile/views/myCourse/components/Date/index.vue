<!-- 周 -->
<template>
  <div class="week">
    <div class="header">
      <div>一</div>
      <div>二</div>
      <div>三</div>
      <div>四</div>
      <div>五</div>
      <div>六</div>
      <div>日</div>
    </div>
    <div class="body">
      <div class="item-box" v-for="(i, index) in calendar" :key="index" @click="setDate(i)">
        <div v-if="i !== today" class="item" :class="{'active' : i == active}">
          {{i|dateFormat}}
          <div v-if="dateList.includes(i)" class="point"></div>
        </div>
        <div v-else class="today" :class="{'active' : i == active}">
          今
          <div v-if="dateList.includes(i)" class="point"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import index from '@c/mixin/myCourse/components/Date/index.js'
export default {
  mixins: [index],
}
</script>

<style lang="scss" scoped>
.week {
  overflow: hidden;
  width: 100%;
  background: #ffede6;
  background-image: url('~@/assets/images/date-bg.png');
  background-repeat: no-repeat;
  background-size: 150px 122px;
  background-position: 0 0;
  .header {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    font-size: 28px;
    font-weight: 500;
    color: #333333;
  }
  .body {
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 28px;
    font-weight: 400;
    color: #333333;
    .item-box {
      margin-top: 20px;
      width: calc(100% / 7);
      display: flex;
      justify-content: center;
    }
    .item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid transparent;
      width: 40px;
      height: 40px;
    }
    .today {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #fb4b09;
      width: 40px;
      height: 40px;
      color: #fb4b09;
      border-radius: 50%;
    }
    .active {
      background: #fb4b09;
      border-radius: 50%;
      color: #fff !important;
    }
    .point {
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      bottom: -14px;
      width: 10px;
      height: 10px;
      background: #fb4b09;
      border-radius: 50%;
    }
  }
}
</style>
