<template>
  <div id="address-cont">
    <div class="address" v-if="!update">
      <p class="info">
        <span class="txt">{{address.name}}  {{address.mobile}}  {{address.areaStr}}{{address.addr}}</span>
        <span class="desc">【默认地址】</span>
      </p>
      <div class="btn-group" @click="update = true">
        <span class="iconfont icon-gerenxinxi iconsss"></span>
        <span class="btn-txt">修改地址</span>
      </div>
    </div>
    <div class="address-form" v-if="update">
      <Form label-position="left" label-width="100px" >
        <FormItem label="收件人：">
          <Input v-model="address.name" placeholder="请填写收货地址"/>
        </FormItem>
        <FormItem label="手机号码：">
          <Input v-model="address.mobile" placeholder="收件人手机号"/>
        </FormItem>
        <FormItem label="所在地区：">
          <Select v-model="address.province" placeholder="省份" style="width:114px;margin-right:20px" @change="provinceChange">
            <Option
              v-for="item in this.province"
              :key="item.id"
              :label="item.name"
              :value="item.name">
            </Option>
          </Select>
          <Select v-model="address.city" placeholder="城市" style="width:114px;margin-right:20px" @change="cityChange" :disabled="address.province === ''">
            <Option
              v-for="item in this.city"
              :key="item.id"
              :label="item.name"
              :value="item.name">
            </Option>
          </Select>
          <Select v-model="address.area" placeholder="区县" style="width:114px;margin-right:20px" :disabled="address.city === ''">
            <Option
              v-for="item in this.area"
              :key="item.id"
              :label="item.name"
              :value="item.name">
            </Option>
          </Select>
        </FormItem>
        <FormItem label="所在地区：">
          <Input v-model="address.addr" placeholder="请填写收货地址"/>
        </FormItem>
      </Form>
      <Button type="primary" 
        round  style="width: 160px;margin-top:30px" 
        :disabled="!address.name || !address.mobile || !address.province || !address.city || !address.area || !address.addr"
        @click="submitFunc">
        保存地址
      </Button>
    </div>
  </div>
</template>

<script>
import { Input, Form, FormItem, Select, Option, Button } from 'element-ui'
import configAddress from '@c/mixin/mine/config/address'
import { updateAddress } from '@c/api/user'

export default {
  name: 'AddressCont',
  components: { Input, Form, FormItem, Select, Option, Button },
  mixins: [configAddress],
  data() {
    return {
      update: false,
    }
  },
  methods: {
    initCityData () {
      this.getProvince().then(res => {
        const pIndex = this.province.findIndex(el => {
          return el.name == this.address.province
        })
        const pId = pIndex === -1 ? this.province[0].id : this.province[pIndex].id
        this.getCity(pId).then(res => {
          const cIndex = this.city.findIndex(el => {
            return el.name == this.address.city
          })
          const cId = cIndex === -1 ? this.city[0].id : this.city[cIndex].id
          this.getArea(cId).then(res => {
            const aIndex = this.area.findIndex(el => {
              return el.name == this.address.area
            })
            const aId = aIndex === -1 ? this.area[0].id : this.area[aIndex].id
          })
        })
      })
    },
    provinceChange (value) {
      const index = this.province.findIndex(el => {
        return el.name == this.address.province
      })
      const id = this.province[index].id
      this.address.city = ''
      this.address.area = ''
      this.getCity(id).then((res) => {
        this.getArea(this.city[0].id)
      })
    },
    cityChange (value) {
      const index = this.city.findIndex(el => {
        return el.name == this.address.city
      })
      const id = this.city[index].id
      this.address.area = ''
      this.getArea(id)
    },
    async submitFunc() {
      let { code } = await updateAddress(this.address)
      if (code === 200) {
        this.$message({
          message: '地址保存成功',
          type: 'success'
        })
        let res = await this.$store.dispatch('user/getAddress')
        this.address = res
        this.update = false
      }
    },
  },
  mounted() {
    this.$store.dispatch('user/getAddress').then(res => {
      if (res) {
        this.update = false
        this.address = res
      } else {
        this.update = true
      }
      this.initCityData()
    })
  },
}
</script>

<style lang="scss" scoped>
#address-cont {
  width: 100%;
  padding: 50px;
  border: 1px solid #D8D8D8;
  .address {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666666;
    .info {
      display: flex;
      align-items: center;
      .txt {
        font-size: 14px;
      }
      .desc {
        color: #FB4B09;
        margin-left: 50px;
      }
    }
    .btn-group {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      .iconsss {
        margin: 0 auto;
        font-size: 24px;
      }
      .btn-txt {
        font-size: 12px;
        margin-top: 5px;
      }
    }
  }
  .address-form {
    width: 520px;
    &.address-form /deep/ .el-form-item__label {
      font-weight: bold;
      font-size: 16px;
      color: #333333;
    }
  }
} 
</style>