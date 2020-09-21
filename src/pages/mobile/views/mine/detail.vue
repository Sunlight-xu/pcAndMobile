<!-- 账户详情 -->
<template>
  <div class="detail min-height" v-if="userInfo">
    <div class="item">
      <div class="title">学员ID</div>
      <div class="right">
        <div>{{userInfo.member}}</div>
      </div>
    </div>
    <router-link class="item" to="mine/name">
      <div class="title">真实姓名</div>
      <div class="right">
        <div class="text">{{userInfo.realname?userInfo.realname:'真实姓名方便老师沟通'}}</div>
        <div>
          <Icon size="16" name="arrow"></Icon>
        </div>
      </div>
    </router-link>
    <router-link to="mine/school" class="item">
      <div class="title">学校名称</div>
      <div class="right">
        <div class="text">{{userInfo.school_name}}</div>
        <div>
          <Icon size="16" name="arrow"></Icon>
        </div>
      </div>
    </router-link>
    <div class="item" @click="show=true">
      <div class="title">性别</div>
      <div class="right">
        <div class="text">{{sex|Sex}}</div>
        <div>
          <Icon size="16" name="arrow"></Icon>
        </div>
      </div>
    </div>
    <router-link to="mine/address" class="item">
      <div class="title">我的收货地址</div>
      <div class="right">
        <div class="text">{{address.areaStr ? address.areaStr : '设置您的地区信息'}}</div>
        <div>
          <Icon size="16" name="arrow"></Icon>
        </div>
      </div>
    </router-link>
    <ActionSheet
      v-model="show"
      :round="false"
      cancel-text="取消"
      :actions="actions"
      @select="onSelect"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import detail from '@c/mixin/mine/detail'
import { Icon, ActionSheet, Toast } from 'vant'
import { updateUserInfo } from '@c/api/user'
export default {
  mixins: [detail],
  components: { Icon, ActionSheet },
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo,
      address: (state) => state.user.address || {},
    }),
  },
  data() {
    return {
      show: false,
      actions: [
        { key: 1, name: '男' },
        { key: 2, name: '女' },
      ],
      sex: '',
    }
  },
  created() {
    this.$store.dispatch('user/getAddress')
  },
  mounted() {
    this.sex = this.userInfo.sex
  },
  methods: {
    async onSelect(item) {
      this.show = false
      this.sex = item.key
      let user = {
        ...this.userInfo,
      }
      user.sex = this.sex
      user.name = this.userInfo.realname
      let { code } = await updateUserInfo(user)
      if (code === 200) {
        this.$store.dispatch('user/getUser')
        Toast('保存成功')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.detail {
  .item {
    padding: 0 30px;
    box-sizing: border-box;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 92px;
    background: #ffffff;
    border-bottom: 2px solid #d8d8d8;
    .title {
      color: #333333;
    }
    .right {
      display: flex;
      align-items: center;
      color: #999999;
      .text {
        margin-right: 20px;
      }
      .icon {
        font-size: 40px;
      }
    }
  }
}
</style>
