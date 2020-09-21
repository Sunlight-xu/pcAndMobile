<!-- 切换 -->
<template>
  <div class="tab">
    <router-link class="item" to="/pc/my-course" active-class="active">我的课程</router-link>
    <router-link class="item" to="/pc/my-course-all" active-class="active">我的课表</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.tab {
  width: 100%;
  height: 46px;
  background: #f4f4f4;
  .item {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #333333;
    display: inline-block;
    width: 116px;
    height: 46px;
    line-height: 46px;
  }
  .active {
    border-top: 2px solid #fb4b09;
    background: #ffffff;
  }
}
</style>
