<!-- 下载页面 -->
<template>
  <div class="download">
    <div>
      <img src="../../assets/img/download.png" class="backGround_img"/>
      <img src="../../assets/img/icon_manfen.png" class="icon_manfen"/>
      <img src="../../assets/img/icon_windows.png" class="icon_windows"/>
      <img src="../../assets/img/icon_mac.png" class="icon_mac"/>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style  scoped>
.download{
  width:100%;
}
.backGround_img{
  width:100vw;
  height:calc(100vh - 295px);
  object-fit:cover;
  position:absolute;
  top:80px;
  left:0;
}
.icon_manfen{
  width:372px;
  height:104px;
  position:absolute;
  top:20%;
  left:60%;
}
.icon_windows{
  width:340px;
  height:64px;
  position:absolute;
  top:35%;
  left:60%;
}
.icon_mac{
  width:340px;
  height:64px;
  position:absolute;
  top:45%;
  left:60%;
}
</style>
