<template>
  <div>
    <div class="top-1">
      <div>好服务，双师辅导全程办学</div>
      <div>采用双师模式，让学生享受更优质的教学服务</div>
      <div></div>
      <div></div>
      <div></div>
      <img src="../../assets/img/icon_top-1-1.png" />
      <img src="../../assets/img/icon_top-1-2.png" />
      <img src="../../assets/img/icon_top-1-3.png" />
      <img src="../../assets/img/icon_top-1-4.png" />
      <img src="../../assets/img/icon_top-1-5.png" />
    </div>
    <div class="top-2">
      <div>好老师，严格优选全国名师</div>
      <div>依托清北强大教育资源，万里挑一打造一流主讲老师团队</div>
      <div class="manfen1">MAN FEN BAN</div>
      <div class="manfen2">MAN FEN BAN</div>
      <Carousel indicator-position="none" type="card" height="512px" class="swiperBox">
        <CarouselItem>
          <div class="top-2-banner">
            <img src="../../assets/img/icon_top-2-1.png" />
            <div>高晨</div>
            <div>满分班特约名师</div>
            <div>科目:物理</div>
            <div>满分班首席知名讲师,分区状元。10年初中教学经验,并且中考/高考满分班教师。已经取得人民大学物理系博士学位。老师的幽默言语让学员们亲切的称呼为“高博士”</div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="top-2-banner">
            <img src="../../assets/img/icon_top-2-2.png" />
            <div>张一</div>
            <div>中考数学题分“收割机”</div>
            <div>科目:数学</div>
            <div>10年初中数学教学经验,中考/高考满分教师。授课视频播放量3000万+,线上授课学生25万+,提分85%,满分班特约名师。</div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="top-2-banner">
            <img src="../../assets/img/icon_top-2-3.png" />
            <div>小毛</div>
            <div>英语口译翻译硕士教师</div>
            <div>科目:英语</div>
            <div>7年中考英语教学经验,19年培养超过40+中考英语满分学员,全国英语教学大赛一等奖,高质量口碑超人气英语主讲老师。</div>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <div class="top-3">
      <div></div>
      <div>好课程，匠心打造品质好课</div>
      <div>专业教研团队，与名师一起打磨每一门好课</div>
      <ul class="top-3-box">
        <li>
          <h5>90%</h5>
          <p>主讲老师90%毕业于重点高校及师范院校</p>
        </li>
        <li>
          <h5>2%</h5>
          <p>3轮严格筛选师资，录取率不足2%</p>
        </li>
        <li>
          <h5>8年</h5>
          <p>主讲老师教学经验平均教龄8年以上</p>
        </li>
        <li>
          <h5>14天</h5>
          <p>主讲老师每堂课，精心备课14天</p>
        </li>
      </ul>
    </div>
    <div class="top-4">
      <div>高科技，助力学习效率翻倍</div>
      <div>比学校更懂你</div>
      <div>
        <div>
          <img src="../../assets/img/icon_top-4-1.png" />
          <p>随时随地在线学习实时互动</p>
        </div>
        <div>
          <img src="../../assets/img/icon_top-4-2.png" />
          <p>支持客户端、微信公众号等多端上课</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui'
export default {
  components: { Carousel, CarouselItem },
}
</script>
<style lang="scss" scoped>
.top-1 {
  width: 100%;
  height: 602px;
  background: #fb4b09;
  text-align: center;
  overflow: hidden;
  position: relative;
  div:nth-child(1) {
    font-size: 30px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #ffffff;
    margin-top: 60px;
    position: inherit;
    z-index: 2;
  }
  div:nth-child(2) {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    margin-top: 20px;
    position: inherit;
    z-index: 2;
  }
  div:nth-child(3) {
    position: absolute;
    width: 244px;
    height: 244px;
    background: linear-gradient(90deg, #fb3e09 0%, #ff9937 100%);
    border-radius: 345px;
    top: -100px;
    left: 470px;
  }
  div:nth-child(4) {
    position: absolute;
    width: 500px;
    height: 500px;
    background: linear-gradient(90deg, #fb3e09 0%, #ff9937 100%);
    border-radius: 345px;
    bottom: -100px;
    left: 160px;
  }
  div:nth-child(5) {
    position: absolute;
    width: 500px;
    height: 500px;
    background: linear-gradient(90deg, #fb3e09 0%, #ff9937 100%);
    border-radius: 345px;
    top: -100px;
    right: -200px;
  }
  img:nth-child(6) {
    position: absolute;
    width: 680px;
    height: 422px;
    bottom: 0px;
    left: 240px;
  }
  img:nth-child(7) {
    position: absolute;
    width: 324px;
    height: 48px;
    top: 250px;
    right: 350px;
  }
  img:nth-child(8) {
    position: absolute;
    width: 324px;
    height: 48px;
    top: 320px;
    right: 300px;
  }
  img:nth-child(9) {
    position: absolute;
    width: 324px;
    height: 48px;
    top: 390px;
    right: 400px;
  }
  img:nth-child(10) {
    position: absolute;
    width: 324px;
    height: 48px;
    top: 460px;
    right: 250px;
  }
}
.top-2 {
  width: 100%;
  height: 821px;
  background: #fafafa;
  text-align: center;
  overflow: hidden;
  position: relative;
  div:nth-child(1) {
    font-size: 30px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #fb4b09;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  div:nth-child(2) {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    // margin-top:20px;
  }
  .manfen1 {
    width: 1528px;
    height: 275px;
    font-size: 195px;
    font-family: Arial-Black, Arial;
    font-weight: 900;
    color: #fb4b09;
    line-height: 275px;
    opacity: 0.1;
    position: absolute;
    left: 50px;
  }
  .manfen2 {
    width: 1528px;
    height: 275px;
    font-size: 195px;
    font-family: Arial-Black, Arial;
    font-weight: 900;
    color: #fb4b09;
    line-height: 275px;
    opacity: 0.1;
    position: absolute;
    bottom: 20px;
    right: -50%;
  }
  .swiperBox {
    width: 1120px;
    margin: 100px auto;
    .top-2-banner {
      width: 562px;
      height: 512px;
      background: #ffffff;
      // box-shadow: 0px 2px 10px 0px rgba(216, 216, 216, 0.5);
      border-radius: 10px;
      img:nth-child(1) {
        width: 120px;
        hegiht: 120px;
        border-radius: 50%;
        margin-top: 50px;
      }
      div:nth-child(2) {
        font-size: 24px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #4a4a4a;
        margin-top: 15px;
      }
      div:nth-child(3) {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #333333;
        margin-top: 15px;
      }
      div:nth-child(4) {
        width: 100px;
        height: 32px;
        background: #fb4b09;
        border-radius: 16px;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
        margin: 20px auto 0 auto;
      }
      div:nth-child(5) {
        width: 410px;
        height: 92px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #333333;
        line-height: 29px;
        letter-spacing: 1px;
        margin: 20px auto 0 auto;
      }
    }
  }
}
.top-3 {
  width: 100%;
  height: 500px;
  background: url('../../assets/img/icon_top-3.png') no-repeat 0 0;
  background-size: 100% 100%;
  text-align: center;
  overflow: hidden;
  position: relative;
  div:nth-child(1) {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  div:nth-child(2) {
    font-size: 30px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #ffffff;
    margin-top: 60px;
    position: inherit;
    z-index: 2;
  }
  div:nth-child(3) {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    margin-top: 20px;
    position: inherit;
    z-index: 2;
  }
  .top-3-box {
    width: 1202px;
    height: 249px;
    border-radius: 10px;
    border: 2px solid #fb4b09;
    position: inherit;
    z-index: 2;
    margin: 60px auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      height: 70px;
      border-right: 2px solid #fb4b09;
      padding: 0 50px;
      text-align: center;
      h5 {
        font-size: 30px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #ffffff;
        line-height: 40px;
        text-align: center;
        margin-top: -15px;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
        line-height: 21px;
      }
    }
    li:last-of-type {
      border-right: none;
    }
  }
}
.top-4 {
  width: 100%;
  height: 629px;
  background: #fafafa;
  text-align: center;
  overflow: hidden;
  div:nth-child(1) {
    font-size: 30px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #fb4b09;
    margin-top: 60px;
  }
  div:nth-child(2) {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    margin-top: 20px;
  }
  div:nth-child(3) {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 1400px;
    margin: 100px auto;
    div:nth-child(1) {
      margin: 0;
      img {
        width: 345px;
        height: 280px;
      }
      p {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
      }
    }
    div:nth-child(2) {
      margin: 0;
      img {
        width: 484px;
        height: 280px;
      }
      p {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
      }
    }
  }
}
</style>