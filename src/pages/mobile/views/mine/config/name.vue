<!-- 真实姓名 -->
<template>
  <div class="config-name min-height">
    <div class="title">名称</div>
    <div class="input-box">
      <input v-model="name" />
    </div>
    <Button
      class="submint"
      round
      block
      :disabled="!name"
      loading-text="保存中..."
      type="primary"
      color="#FA5D3F"
      @click="submit"
    >保存</Button>
  </div>
</template>

<script>
import configName from '@c/mixin/mine/config/name'
import { Button } from 'vant'
export default {
  mixins: [configName],
  components: { Button },
}
</script>

<style lang="scss"  scoped>
.config-name {
  padding: 30px;
  .title {
    font-size: 32px;
    font-weight: 500;
    color: #333333;
  }
  .input-box {
    margin-top: 20px;
    height: 92px;
    border-radius: 8px;
    border: 2px solid #d8d8d8;
    overflow: hidden;
    padding: 0 20px;
    input {
      color: #333333;
      width: 100%;
      height: calc(100% - 4px);
      font-size: 28px;
      border: none;
      outline: none;
    }
  }
  .submint {
    margin-top: 100px;
  }
}
</style>
