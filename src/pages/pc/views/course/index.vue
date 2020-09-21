<template>
  <div>
    <div class="course">
      <Carousel indicator-position="none" height="444px">
        <CarouselItem v-for="item in bannerList" :key="item.id">
         <img style="height:360px" :src="item.img_url" @click="bannerJumpFunc(item)"/>
        </CarouselItem>
      </Carousel>
    </div>
    <div class="checkGread flex">
      <div class="greadText">年级</div>
      <div @click="checkGread(index+1)" v-for="(item, index) in gradeList" :key="index" :class="gradeId === (index+1) ? 'gread checked' : 'gread'">{{item}}</div>
    </div>
    <div class="checkGread flex">
      <div class="greadText">学科</div>
      <div @click="checkClass(index)" v-for="(item, index) in subjectList" :key="index" :class="subjectIndex === (index) ? 'gread checked' : 'gread'">{{item.name}}</div>
    </div>
    <div class="courseList">
      <courseItem v-for="(item, index) in list" :key="index" :course="item"></courseItem>
    </div>
  </div>
</template>
<script>
  import course from '@c/mixin/course'
  import { Carousel,CarouselItem } from 'element-ui'
  import  courseItem  from './components/courseItem.vue'
  export default {
  components: { Carousel, CarouselItem, courseItem },
  mixins: [course],
  data() {
      return {
        gradeList: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三']
      };
    },
  methods: {
    checkGread(id){
      this.$store.dispatch('course/setGrade', id)
      this.$store.dispatch('course/setSubject', 0)
      this.subjectActive = 0
      this.getSubjectList()
      this.getBannerList()
    },
    checkClass(id){
      this.changeSubject(id)
    },
    bannerJumpFunc (data) {
      if (data.type === 1) {
        window.location.href = data.link
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.course{
  img{
    width:100%;
    hegiht:360px;
  }
}
// .el-carousel__item{
//   background:green;
// }
.flex{
  display: flex;
  align-items: center;
  justify-content: left;
  height:32px;
  line-height:32px;
  margin-top:24px;
}
.greadText{
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #999999;
  margin-right:27px;
}
.gread:hover{
  cursor: pointer
}
.gread{
  margin-right:20px;
  width: 62px;
  height: 32px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #333333;
  text-align:center;
}
.gread:nth-child(7),.gread:nth-child(10){
  // padding-right:20px;
  width: 82px;
  border-right:1px solid #D8D8D8;
}
.gread:last-of-type{
    border:none
  }
.checked{
  background: #FB4B09;
  border-radius: 17px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #FFFFFF;
  line-height: 32px;
}
.courseList{
  margin-top:60px;
}

</style>