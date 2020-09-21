<template>
  <div id="course-pack" class="pack-item">
    <p class="title">{{detail.title}}</p>
    <p class="time">开课时间: {{detail.start_date}}-{{detail.end_date}}</p>
    <div class="teacher-list">
      <div class="teacher-item" v-for="item in detail.teacher" :key="item.id">
        <van-image round width="1.07rem" height="1.07rem" :src="item.headimg"/>
        <p><span class="name">{{item.realname}}</span><span>主讲老师</span></p>
      </div>
    </div>
    
  </div>
</template>

<script>
import { Image as VanImage } from 'vant'

export default {
  name: 'CoursePack',
  components: { VanImage },
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
  padding: 40px 30px;
  background: #F5F5F5;
  border-radius: 16px;
  margin-bottom: 20px;
  .title{
    color: #333333;
    font-size: 28px;
    font-weight: bold;
  }
  .time {
    color: #999999;
    font-size: 24px;
    line-height: 34px;
    margin: 20px 0;
  }
  .teacher-list {
    display: flex;
    .teacher-item {
      display: flex;
      margin-right: 60px;
      p {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10px;
        color: #A4A4A4;
        font-size: 28px;
        line-height: 40px;
        .name {
          color: #333333;
          font-weight: bold;
        }
      }
    }
  }
  
}
</style>