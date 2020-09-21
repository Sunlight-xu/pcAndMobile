<template>
  <div id="course-tips" >
    <div class="tips-list">
      <div class="tips-item">
        <div class="tips-index">1</div>
        <div class="tips-cont">
          <p class="shuoming bold">课程说明</p>
          <p class="desc">
            <span class="bold">直播课节：</span>
            <span>课程在结束直播后自动生成回放，可以随时反复观看</span>
          </p>
          <p class="desc">
            <span class="bold">课时说明：</span>
            <span>课程上线后可在我的课程内查看</span>
          </p>
          <p class="desc">
            <span class="bold">休息时间：</span>
            <span>中小学生每节课为40分钟，主讲授课部分每40分钟休息10分钟</span>
          </p>
        </div>
      </div>
      <div class="tips-item">
        <div class="tips-index">2</div>
        <div class="tips-cont">
          <p class="shuoming bold">购课说明</p>
          <p class="desc">
            <span>报名成功后，一定要添加助教微信。用于上课通知，作业辅导，很重要哦</span>
          </p>
        </div>
      </div>
      <div class="tips-item">
        <div class="tips-index">3</div>
        <div class="tips-cont">
          <p class="shuoming bold">联系我们</p>
          <p class="desc">
            <span>客服电话：010-82158930<br>服务时间：9:00-21:00</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseTips'
}
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
#course-tips {
  .tips-item {
    display: flex;
    margin-bottom: 42px;
    .tips-index {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #D8D8D8;
      text-align: center;
      line-height: 40px;
      flex-shrink: 0;
      flex-grow: 0;
      margin-right: 20px;
    }
    .tips-cont {
      color: #333333;
      font-size: 28px;
      .shuoming {
        font-weight: bold;
        line-height: 40px;
      }
      .desc {
        line-height: 40px;
        margin-top: 30px;
      }
    }
  }
}
</style>