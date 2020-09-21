<template>
  <div class="tabbar">
    <div class="item">
      <router-link class="tab" active-class="tab-active" to="course-list">
        <div class="icon-box">
          <svg-icon
            class="svg-icon"
            :name="$route.path ==='/mobile/course-list'?'icon-kechengzhongxin-xuanzhong':'icon-kechengzhongxin-weixuanzhong'"
          ></svg-icon>
        </div>
        <div>课程中心</div>
      </router-link>
    </div>
    <div class="item">
      <router-link class="tab" active-class="tab-active" to="my-course">
        <div class="icon-box">
          <svg-icon
            class="svg-icon"
            :name="$route.path ==='/mobile/my-course'?'icon-wodekecheng-xuanzhong':'icon-wodekecheng-weixuanzhong'"
          ></svg-icon>
        </div>
        <div>我的课程</div>
      </router-link>
    </div>
    <div class="item">
      <router-link class="tab" active-class="tab-active" to="mine">
        <div class="icon-box">
          <svg-icon
            class="svg-icon"
            :name="$route.path ==='/mobile/mine'?'icon-zhanghu-xuanzhong':'icon-zhanghu-weixuanzhong'"
          ></svg-icon>
        </div>
        <div>账户</div>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tabbar {
  bottom: 0;
  left: 0;
  position: fixed;
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  .item {
    font-size: 24px;
    flex: 1;
    text-align: center;
    .tab {
      color: #666666;
      text-decoration: none;
      .svg-icon {
        font-size: 40px;
      }
    }
    .tab-active {
      color: #fb4b09;
    }
  }
}
</style>