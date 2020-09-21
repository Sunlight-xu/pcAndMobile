<template>
  <div id="course-table" class="courseClass">
    <div class="classTitle">{{sortIndex}}<span class="name">{{detail.title}}</span></div>
    <div class="classDetail">
      <div class="classDetailTime">{{detail.start_at}} | 第{{detail.no}}节</div>
      <p v-if="detail.status === 1">未开课</p>
      <p class="y-color" v-if="detail.status === 2">已开课</p>
      <p v-if="detail.status === 3">已结束</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseTable',
  props: {
    detail: {
      type: Object,
      default() {
        return {}
      }
    },
    sortIndex: {
      type: Number,
      value: 1
    }
  }
}
</script>

<style lang="scss" scoped>
#course-table {
  &.courseClass{
    border-bottom: 1px solid #D8D8D8;
    padding: 30px 0 36px 0;
    .classTitle{
      font-size: 28px;
      font-weight: bold;
      color: #333333;
      .name {
        margin-left: 20px;
      }
    }
    .classDetail{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 32px;
      margin-top: 28px;
      .classDetailTime{
        font-size: 24px;
        font-weight: 400;
        color: #666666;
      }
      p {
        color: #cccccc;
      }
    }
    .y-color {
      color: #FB4B09;
    }
  }
}
</style>