<template>
  <div id="app">
    <Back v-if="$route.meta.back"></Back>
    <div class="pt92" v-if="$route.meta.back"></div>
    <!-- <keep-alive include="courseList"> -->
    <router-view />
    <!-- </keep-alive> -->
  </div>
</template>
<script>
import Back from '@m/components/Back/index.vue'
export default {
  components: { Back },
}
</script>
<style lang="scss" scoped>
.pt92 {
  height: 92px;
}
</style>