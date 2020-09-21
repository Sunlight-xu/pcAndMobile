<!-- 底部 -->
<template>
  <div class="footer">
    <ul>
      <li>
        <router-link :to="{name:'p-courseList', params: {}}">
          网站首页
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'p-introduce', params: {}}">
          关于我们
        </router-link>
      </li>
      <!-- <li>
        <router-link :to="{name:'p-introduce', params: {}}">
          联系我们
        </router-link>
      </li> -->
      <li>客服电话:010-82158930 (服务时间:09:00 - 21:00)</li>
      <li>邮箱:manfenban@3laoshi.com</li>
    </ul>
    <ul>
      <li>满分班网校 http://www.nx100.cn</li>
      <li>杭州纳星科技有限公司 版权所有</li>
      <li>地址:北京市海淀区清华科技园</li>
    </ul>
    <div>浙ICP备17008535号</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
a{
  color: #666666;
}
.footer {
  border-top:1px solid #D8D8D8;
  height: 180px;
  background: #fafafa;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #666666;
  div{
    border-top:1px solid #D8D8D8;
    text-align:center;
    width:100vw;
    width:100%;
    height:40px;
    margin-top:50px;
    line-height: 40px;
    font-size: 11px;
  }
  ul{
    width:1200px;
    margin:0 auto;
    text-align:center;
    display: flex;
    padding-top:30px;
      // justify-content: space-between;
      // justify-content: space-around;
    justify-content: center;
    align-items: center;
      li{
        border-right:1px solid #D8D8D8;
        padding-right:40px;
        margin-right:40px;
      }
      li:last-of-type{
        border-right:none;
      }
  }
}
</style>
