<template>
  <div>
    <div class="courseDetail">
      <payFinish v-if="orderDetail.status == 1" :detail="orderDetail"></payFinish>
      <payUnpaid v-if="orderDetail.status == 0" :detail="orderDetail"></payUnpaid>
      <payCancel v-if="orderDetail.status == 2" :detail="orderDetail"></payCancel>
    </div>
  </div>
</template>
<script>
import order from '@c/mixin/mine/order/detail.js'
import payCancel from '@/pages/mobile/views/mine/components/payCancel.vue'
import payUnpaid from '@/pages/mobile/views/mine/components/payUnpaid.vue'
import payFinish from '@/pages/mobile/views/mine/components/payFinish.vue'
export default {
  name: 'courseDetail',
  components: { payCancel, payUnpaid, payFinish },
  mixins: [order]
}
</script>
<style lang="scss" scoped>
.courseDetail{
  // width: 690px;
  // margin: 0 auto;
  overflow: hidden;
}
</style>