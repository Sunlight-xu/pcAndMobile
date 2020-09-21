<template>
  <div id="person-center">
    <div class="person-box">
      <p class="title">完善资料</p>
      <PersonDoc :details="userInfo" />
    </div>
    <div class="person-box">
      <p class="title">我的收货地址</p>
      <Address />
    </div>
  </div>
</template>
<script>
import Address from '@/pages/pc/components/Address/index.vue'
import PersonDoc from '@/pages/pc/views/mine/components/PersonDoc.vue'
import { mapState } from 'vuex'

export default {
  name: 'PersonCenter',
  components: { Address, PersonDoc },
  computed: {
    ...mapState('user', {
      userInfo: state => state.userInfo
    })
  },
}
</script>
<style lang="scss" scoped>
#person-center {
  padding: 50px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(229, 229, 229, 0.5);
  .person-box {
    margin: 50px 0;
    .title {
      font-size: 24px;
      font-weight: bold;
      color: #333333;
      line-height: 31px;
      margin-bottom: 50px;
    }
  }
}

</style>