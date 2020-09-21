<template>
  <div class="app">
    <Header></Header>
    <router-view class="app-body" :class="{'full-scene': $route.meta.fullScene}" />
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@p/components/Footer/index.vue'
import Header from '@p/components/Header/index.vue'
export default {
  name: 'p-app',
  components: { Footer, Header },
}
</script>
<style lang="scss" scoped>
.app {
  margin: 0 auto;
  background: #fafafa;
  min-height: 100vh;
  min-width: 1200px;
  .app-body {
    width: 1200px;
    margin: 20px auto 0 auto;
    min-height: calc(100vh - 315px);
  }
  .full-scene {
    width: 100% !important;
    margin: 0 !important;
  }
}
</style>