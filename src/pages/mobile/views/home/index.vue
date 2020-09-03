<template>
  <div>
    mobile home
    <NavBar title="标题" left-text="返回" right-text="按钮" />
    <Button>sdsd</Button>
    <div class="color">
      <div class="item"></div>
    </div>
  </div>
</template>
<script>
import { NavBar, Button } from "vant";
export default {
  components: { NavBar, Button },
};
</script>
<style lang="scss" scoped>
.color {
  width: 20px;
  height: 20px;
  background: red;
  .item {
    width: 10px;
    height: 10px;
    background:black;
  }
}
</style>