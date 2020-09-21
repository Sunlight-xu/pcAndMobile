<template>
  <div>
    <div class="indentCourseTitle">{{detail.title}}</div>
      <div class="indentCourseTime">开课时间: {{detail.start_date}}-{{detail.end_date}}</div>
      <div class="indentCourseTeacher">
        <div v-for="item in detail.teacher" :key="item.id" class="teacherItem">
          <img :src="item.headimg"/>
          <div class="indentCourseTeacherText">
            <div>{{item.realname}}</div>
            <div>主讲老师</div>
          </div>
        </div>
      </div>
      <div class="indentCoursePrice">
        <div>课程价格</div>
        <div>￥{{detail.price}}</div>
      </div>
  </div>
</template>
<script>

export default {
  name: 'indentCourse',
  props:['detail'],
}
</script>

<style lang="scss" scoped>
  .indentCourseTitle{
    font-size: 32px;
    margin-top: 40px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    margin-bottom: 20px;
  }
  .indentCourseTime{
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    margin-bottom: 32px;
  }
  .indentCourseTeacher{
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 38px;
    .teacherItem{
      display: flex;
      align-items: center;
      justify-content: left;
      margin-right: 20px;
      img{
        width: 68px;
        height: 68px;
        border-radius: 50%;
        margin-right: 12px;
      }
      .indentCourseTeacherText div:nth-child(1){
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        margin-bottom: 6px;
      }
      .indentCourseTeacherText div:nth-child(2){
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A4A4A4;
      }
    }
  }
  .indentCoursePrice{
    display: flex;
    align-items: center;
    justify-content: space-between;
    div:nth-child(1){
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
    }
    div:nth-child(2){
      font-size: 48px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #EB2323;
    }
  } 
</style>