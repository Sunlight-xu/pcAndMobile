<!-- 学校 -->
<template>
  <div class="config-school min-height">
    <div class="title">城市</div>
    <div class="input-box" @click="showPickerFunc">
      <Icon class="arrow" size="14" name="arrow"></Icon>
      <div class="city">{{province_name}}{{city_name}}{{area_name}}</div>
    </div>
    <div class="title">学校名称</div>
    <div class="input-box">
      <input v-model="school_name" />
    </div>
    <Button
      class="submint"
      round
      block
      :disabled="!school_name||!area_name"
      type="primary"
      color="#FA5D3F"
      @click="submit"
    >保存</Button>
    <Popup v-model="showPicker" position="bottom">
      <Picker
        show-toolbar
        value-key="name"
        :loading="isLoading"
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
        @change="changeFunc"
      />
    </Popup>
  </div>
</template>

<script>
import configSchool from '@c/mixin/mine/config/school.js'
import { Button, Popup, Picker, Icon } from 'vant'
export default {
  mixins: [configSchool],
  components: { Button, Popup, Picker, Icon },
  data() {
    return {
      show: false,
      isLoading: false,
      cityIsLoaded: false,
      showPicker: false,
      columns: [{ values: [] }, { values: [] }, { values: [] }],
      indexs: [0, 0, 0],
      areaArr: ['北京', '北京', '丰台区'],
    }
  },
  methods: {
    // 弹起城市级联
    showPickerFunc() {
      this.showPicker = true
      this.getPickerData()
    },
    // 设置当前pick对应数据
    getPickerData() {
      if (this.cityIsLoaded === true) return
      this.isLoading = true
      this.getProvince().then((res) => {
        const pIndex = this.province.findIndex((el) => {
          return el.name == this.province_name
        })
        const pId =
          pIndex === -1 ? this.province[0].id : this.province[pIndex].id
        this.columns[0].defaultIndex = pIndex
        this.getCity(pId).then((res) => {
          const cIndex = this.city.findIndex((el) => {
            return el.name == this.city_name
          })
          const cId = cIndex === -1 ? this.city[0].id : this.city[cIndex].id
          this.columns[1].defaultIndex = cIndex
          this.getArea(cId).then((res) => {
            const aIndex = this.area.findIndex((el) => {
              return el.name == this.area_name
            })
            const cId = aIndex === -1 ? this.area[0].id : this.area[aIndex].id
            this.columns[2].defaultIndex = aIndex
            this.cityIsLoaded = true
            this.isLoading = false
          })
        })
      })
    },
    changeFunc(picker, values, index) {
      if (index === 0) {
        const value = picker.getColumnValue(index)
        this.isLoading = true
        this.getCity(value.id).then((res) => {
          this.getArea(this.city[0].id).then((res) => {
            this.isLoading = false
          })
        })
      }
      if (index === 1) {
        const value = picker.getColumnValue(index)
        this.isLoading = true
        this.getArea(value.id).then((res) => {
          this.isLoading = false
        })
      }
    },
    onConfirm(values, index) {
      this.province_name = values[0].name
      this.city_name = values[1].name
      this.area_name = values[2].name
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
.config-school {
  padding: 30px;
  .title {
    margin-top: 20px;
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
    position: relative;
    .city {
      color: #333333;
      width: 100%;
      line-height: 88px;
      font-size: 28px;
    }
    input {
      color: #333333;
      width: 100%;
      height: calc(100% - 4px);
      font-size: 28px;
      border: none;
      outline: none;
    }
    .arrow {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .submint {
    margin-top: 100px;
  }
}
</style>
