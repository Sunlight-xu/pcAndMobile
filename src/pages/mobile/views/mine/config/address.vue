<!-- 地址 -->
<template>
  <div class="config-address">
    <div class="form">
      <div class="form-item">
        <div class="lable">收件人：</div>
        <input v-model="address.name" placeholder="请填写收件人姓名" />
      </div>
      <div class="form-item">
        <div class="lable">手机号：</div>
        <input v-model="address.mobile" placeholder="请输入手机号" />
      </div>
      <div class="form-item">
        <div class="lable">城市：</div>
        <input v-model="address.areaStr" placeholder="请选择省/市/区" readonly @click="showPickerFunc" />
      </div>
      <div class="form-item form-item-top">
        <div class="lable">地址：</div>
        <textarea v-model="address.addr" placeholder="请输入详细地址" rows="3" />
      </div>
    </div>
    <Button
      class="submint"
      round
      block
      :disabled="!address.name || !address.mobile || !address.province || !address.city || !address.area || !address.addr"
      type="primary"
      color="#FA5D3F"
      @click="submit"
    >保存</Button>
    <!-- 城市级联 -->
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        value-key="name"
        :loading="isLoading"
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
        @change="changeFunc"
      />
    </van-popup>
  </div>
</template>

<script>
import configAddress from '@c/mixin/mine/config/address'
import { Button, Picker as VanPicker, Popup as VanPopup } from 'vant'

export default {
  mixins: [configAddress],
  components: { Button, VanPicker, VanPopup },
  data() {
    return {
      showPicker: false,
      columns: [{ values: [] }, { values: [] }, { values: [] }],
      isLoading: false,
      cityIsLoaded: false
    }
  },
  methods: {
    // 弹起城市级联
    showPickerFunc() {
      this.showPicker = true
      this.getPickerData()
    },
    // 设置当前pick对应数据
    getPickerData () {
      if (this.cityIsLoaded === true) return 
      this.isLoading = true
      this.getProvince().then(res => {
        const pIndex = this.province.findIndex(el => {
          return el.name == this.address.province
        })
        const pId = pIndex === -1 ? this.province[0].id : this.province[pIndex].id
        this.columns[0].defaultIndex = pIndex
        this.getCity(pId).then(res => {
          const cIndex = this.city.findIndex(el => {
            return el.name == this.address.city
          })
          const cId = cIndex === -1 ? this.city[0].id : this.city[cIndex].id
          this.columns[1].defaultIndex = cIndex
          this.getArea(cId).then(res => {
            const aIndex = this.area.findIndex(el => {
              return el.name == this.address.area
            })
            const aId = aIndex === -1 ? this.area[0].id : this.area[aIndex].id
            this.columns[2].defaultIndex = aIndex
            this.cityIsLoaded = true
            this.isLoading = false
          })
        })
      })
    },
    changeFunc(picker, values, index) {
      if (this.cityIsLoaded === false) return 
      if (index === 0) {
        const value = picker.getColumnValue(index)
        this.isLoading = true
        this.columns[1].defaultIndex = 0
        this.columns[2].defaultIndex = 0
        this.getCity(value.id).then((res) => {
          this.getArea(this.city[0].id).then((res) => {
            this.isLoading = false
            this.address.province = values[0].name
            this.address.city = this.city[0].name
            this.address.area = this.area[0].name
            this.address.areaStr = `${values[0].name} ${this.city[0].name} ${this.area[0].name}`
          })
        })
      }
      if (index === 1) {
        const value = picker.getColumnValue(index)
        this.isLoading = true
        this.columns[2].defaultIndex = 0
        this.getArea(value.id).then((res) => {
          this.isLoading = false
          this.address.province = values[0].name
          this.address.city = values[1].name
          this.address.area = this.area[0].name
          this.address.areaStr = `${values[0].name} ${values[1].name} ${this.area[0].name}`
        })
      }
      this.address.province = values[0].name
      this.address.city = values[1].name
      this.address.area = values[2].name
      this.address.areaStr = `${values[0].name} ${values[1].name} ${values[2].name}`
    },
    onConfirm(values, index) {
      this.address.province = values[0].name
      this.address.city = values[1].name
      this.address.area = values[2].name
      this.address.areaStr = `${values[0].name} ${values[1].name} ${values[2].name}`
      this.showPicker = false
    },
  },
  watch: {
    province(newVal) {
      this.columns[0].values = newVal
    },
    city(newVal) {
      this.columns[1].values = newVal
    },
    area(newVal) {
      this.columns[2].values = newVal
    },
  },
}
</script>

<style lang="scss"  scoped>
.config-address {
  padding: 30px;
  .form {
    background: #ffffff;
    box-shadow: 0px 0px 16px 0px rgba(229, 229, 229, 0.5);
    border-radius: 16px;
    .form-item-top {
      align-items: flex-start !important;
      .lable {
        margin-top: 26px;
      }
      textarea {
        padding-top: 20px;
      }
    }
    .form-item {
      min-height: 86px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #d8d8d8;
      &:last-child {
        border-bottom: none;
      }
      .lable {
        width: 160px;
        font-size: 32px;
        font-weight: 400;
        color: #333333;
      }
      input {
        flex: 1;
        font-size: 32px;
        font-weight: 400;
        color: #999999;
        line-height: 44px;
        border: none;
        outline: none;
      }
      textarea {
        flex: 1;
        font-size: 32px;
        font-weight: 400;
        color: #999999;
        line-height: 44px;
        border: none;
        outline: none;
        resize: none;
      }
    }
  }
  .submint {
    margin-top: 100px;
  }
}
</style>
