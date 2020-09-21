<template>
  <div id="course-table" class="courseClass">
    <div class="classTitle">{{sortIndex}}</div>
    <div class="classDetail">
      <p class="name">{{detail.title}}</p>
      <div class="classDetailTime">{{detail.start_at}} | 第{{detail.no}}节</div>
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
    padding: 20px 0;
    display: flex;
    align-items: center;
    .classTitle{
      font-size: 14px;
      font-weight: bold;
      color: #333333;
      margin-left: 15px;
      width: 24px;
      height: 24px;
      text-align: center;
      line-height: 24px;
      border-radius: 50%;
      background: #EEEEEE;
      flex-shrink: 0;
      flex-grow: 0;
    }
    .classDetail{
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: 30px;
      .classDetailTime{
        font-size: 12px;
        font-weight: 400;
        color: #666666;
        margin-top: 15px;
      }
      .name {
        color: #333333;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }
    }
    .y-color {
      color: #FB4B09;
    }
  }
}
</style>