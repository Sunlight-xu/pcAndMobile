<template>
  <div id="course-pack" class="pack-item">
    <p class="title">{{detail.title}}</p>
    <p class="time">开课时间: {{detail.start_date}}-{{detail.end_date}}</p>
    <div class="teacher-list">
      <div class="teacher-item" v-for="item in detail.teacher" :key="item.id">
        <Avatar :size="36" :src="item.headimg"></Avatar>
        <p><span class="name">{{item.realname}}</span><span>主讲老师</span></p>
      </div>
    </div>
    
  </div>
</template>

<script>
import { Avatar } from 'element-ui'

export default {
  name: 'CoursePack',
  components: { Avatar },
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
.pack-item {
  width: 345px;
  padding: 20px 15px;
  background: #F5F5F5;
  border-radius: 8px;
  margin-bottom: 10px;
  .title{
    color: #333333;
    font-size: 14px;
    font-weight: bold;
  }
  .time {
    color: #999999;
    font-size: 12px;
    line-height: 17px;
    margin: 10px 0;
  }
  .teacher-list {
    display: flex;
    .teacher-item {
      display: flex;
      margin-right: 30px;
      p {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 5px;
        color: #A4A4A4;
        font-size: 14px;
        line-height: 20px;
        .name {
          color: #333333;
          font-weight: bold;
        }
      }
    }
  }
  
}
</style>