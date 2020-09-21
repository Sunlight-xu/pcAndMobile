<template>
  <div>
    <div class="top-1">
      <div >好服务，双师辅导全程办学</div>
      <div >采用双师模式，让学生享受更优质的教学服务</div>
      <div >学情沟通，及时了解学习状态</div>
      <div >定制专属学习计划</div>
      <div >作业布置，一对一批改</div>
      <div >随时回放复习，巩固学习</div>
    </div>
    <Swipe class="top-2" :autoplay="3000" :show-indicators="false">
      <SwipeItem class="swipeItem">
        <div>好老师，严格优选全国名师</div>
        <div>依托清北强大教育资源，万里挑一打造一流主讲老师团队</div>
        <img src="../../assets/img/icon_top-2-1.png" class="images"/>
      </SwipeItem >
      <SwipeItem class="swipeItem">
        <div>好老师，严格优选全国名师</div>
        <div>依托清北强大教育资源，万里挑一打造一流主讲老师团队</div>
        <img src="../../assets/img/icon_top-2-2.png" class="images"/>
      </SwipeItem>
      <SwipeItem class="swipeItem">
        <div>好老师，严格优选全国名师</div>
        <div>依托清北强大教育资源，万里挑一打造一流主讲老师团队</div>
        <img src="../../assets/img/icon_top-2-3.png" class="images"/>
      </SwipeItem>
    </Swipe>
    <Swipe class="top-3" :autoplay="3000" :show-indicators="false">
      <SwipeItem class="swipeItem">
        <div>好课程，匠心打造品质好课</div>
        <div>专业教研团队，与名师一起打磨每一门好课</div>
        <img src="../../assets/img/icon_top-3-1.png" class="images"/>
      </SwipeItem >
      <SwipeItem class="swipeItem">
        <div>好课程，匠心打造品质好课</div>
        <div>专业教研团队，与名师一起打磨每一门好课</div>
        <img src="../../assets/img/icon_top-3-2.png" class="images"/>
      </SwipeItem>
      <SwipeItem class="swipeItem">
        <div>好课程，匠心打造品质好课</div>
        <div>专业教研团队，与名师一起打磨每一门好课</div>
        <img src="../../assets/img/icon_top-3-3.png" class="images"/>
      </SwipeItem>
    </Swipe>
    <div class="top-4">
      <div>高科技，助力学习效率翻倍</div>
      <div>比学校更懂你</div>
      <div>
        <img src="../../assets/img/icon_top-4-1.png"/>
        <p>随时随地在线学习实时互动</p>
      </div>
      <div>
        <p>支持客户端、微信公众号等多端上课</p>
        <img src="../../assets/img/icon_top-4-2.png"/>
      </div>
    </div>
    <div class="top-5">
      <div>未来，我们仍在努力</div>
      <div>致力于一门好课</div>
      <router-link :to="{name:'m-courseList', params: {}}" class="start">
        <p>开始选课</p>
      </router-link>
    </div>
  </div>
</template>
<script>
import { Swipe,SwipeItem } from 'vant'
export default {
  components: { Swipe,SwipeItem },
}
</script>
<style lang="scss" scoped>
  .top-1{
    width:100%;
    height:calc(100vh - 92px);
    background:url('../../assets/img/icon_top-1.png') no-repeat 0 0;
    background-size:100% 100%;
    overflow:hidden;
    text-align:center;
    div:nth-child(1){
      font-size: 48px;
      font-family: FZLTDHK--GBK1-0, FZLTDHK--GBK1;
      font-weight: 900;
      color: #FB4B09;
      margin-top:120px
    }
    div:nth-child(2){
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      margin-top:40px
    }
    div:nth-child(3),div:nth-child(4),div:nth-child(5),div:nth-child(6){
      width: 576px;
      height: 100px;
      background: linear-gradient(90deg, #FB4B09 0%, #FF7837 100%);
      border-radius: 50px;
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 200;
      color: #FFFFFF;
      line-height:100px;
      margin:100px auto;
    }
  }
  .top-2,.top-3{
    background:#FFFFFF;
    width:100%;
    height:calc(100vh - 92px);
    .swipeItem{
      text-align:center;
      div:nth-child(1){
        font-size: 48px;
        font-family: FZLTDHK--GBK1-0, FZLTDHK--GBK1;
        font-weight: 900;
        color: #FB4B09;
        margin-top:120px;
      }
      div:nth-child(2){
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        margin-top:40px;
      }
      .images{
        width:636px;
        height:672px;
        margin-top:64px;
      }
    }

  }
  .top-4{
    width:100%;
    padding:0 60px;
    height:calc(100vh - 92px);
    background:#FFFFFF;
    text-align:center;
    overflow:hidden;
    div:nth-child(1){
      font-size: 48px;
      font-family: FZLTDHK--GBK1-0, FZLTDHK--GBK1;
      font-weight: 900;
      color: #FB4B09;
      margin-top:120px
    }
    div:nth-child(2){
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      margin-top:40px;
      margin-bottom:80px;
    }
    div:nth-child(3),div:nth-child(4){
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top:30px;
      p{
        width:285px;
        padding:50px 30px;
        background: rgba(251, 238, 231 ,1);
        border-radius: 20px;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 40px;
      }
      img{
        width:282px;
        hegiht:340px;
      }
    }
  }
  .top-5{
      width:100%;
      padding:0 60px;
      height:calc(100vh - 92px);
      background:#FFFFFF;
      text-align:center;
      overflow:hidden;
     div:nth-child(1){
      font-size: 48px;
      font-family: FZLTDHK--GBK1-0, FZLTDHK--GBK1;
      font-weight: 900;
      color: #FB4B09;
      margin-top:120px
    }
    div:nth-child(2){
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      margin-top:40px;
      margin-bottom:80px;
    }
    .start{
      p{
        text-align:center;
        line-height:88px;
        margin:0 auto;
        width: 312px;
        height: 88px;
        background: #FB4B09;
        border-radius: 44px;
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        margin-top:200px;
      }  
    }
  }
</style>