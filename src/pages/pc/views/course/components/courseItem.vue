<template>
  <div id="course-item">
    <router-link :to="{name:'p-courseDetail', params: {id:course.id}}">
    <img src="../../../assets/img/lianbaoyouhui.png" v-if="course.type == 2" alt="" class="lianbao">
    <div class="courseTitle">{{course.title}}</div>
    <div class="courseTips">开课日期:{{course.tips}}</div>
    <div class="teacher">
      <div class="teacherDetail" v-for="(item, index) in course.teacher" :key="index">
        <img :src="item.headimg"/>
        <div class="identityText">
          <div>{{item.realname}}</div>
          <div>主讲老师</div>
        </div>
      </div>
    </div>
    <div class="courseStatus">
      <div class="allClass">共{{course.lessons}}课时</div>
      <div class="status" v-if="course.type !== 3 && !course.buy"><span>￥</span>{{course.price}}<span>{{course.amount}}</span></div>
      <div class="status" v-if="course.type === 3 && !course.buy">免费报名</div>
      <div class="statusbuy" v-if="course.buy">已购买</div>
    </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'courseItem',
  props: {
    course: {
      type: Object,
      default () {
      }
    }
  },
  data() {
    return {
      second:'',
      timer:{}
    }
  },
  methods: {
   
  },
  mounted() {
  },
}
</script>
<style lang="scss" scoped>
  #course-item:hover{
    cursor: pointer
  }
  #course-item{
    width:386px;
    padding:30px 20px;
    margin:0px 13px 30px 0;
    background: #ffffff;
    box-shadow: 0px 1px 8px 0px rgba(216, 216, 216, 0.5);
    border-radius: 8px;
    display: inline-block;
    position: relative;
    .lianbao{
      width:50px;
      height:16px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .courseTitle{
      font-size: 16px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #333333;
      margin-bottom:17px;
      height:42px;
      display: flex;
      align-items: center;
      justify-content: left;
    }
    .courseTips{
      font-size: 12px;
      font-family: MicrosoftYaHei;
      color: #666666;
      margin-bottom:20px;
    }
    .teacher{
       display: flex;
      align-items: center;
      justify-content: left;
      // margin-right: 40px;
      padding-bottom:20px;
      border-bottom:1px solid #EBEBEB;
      .teacherDetail{
        display: flex;
        align-items: center;
        justify-content: left;
        margin-right: 20px;
        img{
          width: 34px;
          height: 34px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .identityText div:nth-child(1){
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          margin-bottom: 5px;
        }
        .identityText div:nth-child(2){
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #A4A4A4;
          margin-top:6px;
        }
      }
    }
    .courseStatus{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top:20px;
      .allClass{
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFA1A1;
      }
      .statusbuy{
        width: 76px;
        height: 32px;
        border-radius: 16px;
        border: 1px solid #D8D8D8;
        font-size: 12px;
        font-family: MicrosoftYaHei;
        color: #666666;
        line-height: 32px;
        text-align: center;
      }
      .status{
        font-size: 24px;
        font-family: MicrosoftYaHei;
        color: #EB2323;
        line-height: 31px;
        span{
          width: 29px;
          height: 16px;
          font-size: 12px;
          font-family: MicrosoftYaHei;
          line-height: 16px;
        }
        span:nth-child(2){
          color:#333333;
          text-decoration:line-through;
          margin-left:5px;
        }
      }
    }
  }
</style>
