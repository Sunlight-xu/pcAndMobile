<template>
  <div id="person-cont">
    <div class="person-form">
      <Form label-position="left" label-width="100px" >
        <FormItem label="ID：">
          <div>{{detail.member}}</div>
        </FormItem>
        <FormItem label="真实姓名：">
          <Input v-model="detail.realname" placeholder="请填写真实姓名，让老师更快认识你"/>
        </FormItem>
        <FormItem label="所在地区：">
          <Select v-model="detail.province_name" placeholder="省份" style="width:114px;margin-right:20px" @change="provinceChange">
            <Option
              v-for="item in this.province"
              :key="item.id"
              :label="item.name"
              :value="item.name">
            </Option>
          </Select>
          <Select v-model="detail.city_name" placeholder="城市" style="width:114px;margin-right:20px" @change="cityChange" :disabled="detail.province_name === ''">
            <Option
              v-for="item in this.city"
              :key="item.id"
              :label="item.name"
              :value="item.name">
            </Option>
          </Select>
          <Select v-model="detail.area_name" placeholder="区县" style="width:114px;margin-right:20px" :disabled="detail.city_name === ''">
            <Option
              v-for="item in this.area"
              :key="item.id"
              :label="item.name"
              :value="item.name">
            </Option>
          </Select>
        </FormItem>
        <FormItem label="学校名称：">
          <Input v-model="detail.school_name" placeholder="请输入学校名称"/>
        </FormItem>
        <FormItem label="性别：">
          <Radio v-model="detail.sex" :label="1">男</Radio>
          <Radio v-model="detail.sex" :label="2">女</Radio>
        </FormItem>
      </Form>
      <Button type="primary" 
        round  style="width: 160px;margin-top:30px" 
        :disabled="!detail.realname || !detail.province_name || !detail.city_name || !detail.area_name || !detail.school_name "
        @click="submitFunc">
        保存
      </Button>
    </div>
  </div>
</template>

<script>
import { Input, Form, FormItem, Select, Option, Button, Radio } from 'element-ui'
import { getProvince, getCity, getArea } from '@c/api/index'
import { updateUserInfo } from '@c/api/user'

export default {
  name: 'PersonDoc',
  components: { Input, Form, FormItem, Select, Option, Button, Radio },
  props: {
    details: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  updated() {
    this.detail = this.details
  },
  data() {
    return {
      province:[],
      city: [],
      area: [],
      detail: {}
    }
  },
  methods: {
    initCityData () {
      this.getProvince().then(res => {
        const pIndex = this.province.findIndex(el => {
          return el.name == this.detail.province_name
        })
        const pId = pIndex === -1 ? this.province[0].id : this.province[pIndex].id
        this.getCity(pId).then(res => {
          const cIndex = this.city.findIndex(el => {
            return el.name == this.detail.city_name
          })
          const cId = cIndex === -1 ? this.city[0].id : this.city[cIndex].id
          this.getArea(cId).then(res => {
            const aIndex = this.area.findIndex(el => {
              return el.name == this.detail.area_name
            })
            const aId = aIndex === -1 ? this.area[0].id : this.area[aIndex].id
          })
        })
      })
    },
    provinceChange (value) {
      const index = this.province.findIndex(el => {
        return el.name == this.detail.province_name
      })
      const id = this.province[index].id
      this.detail.city_name = ''
      this.detail.area_name = ''
      this.getCity(id).then((res) => {
        this.getArea(this.city[0].id)
      })
    },
    cityChange (value) {
      const index = this.city.findIndex(el => {
        return el.name == this.detail.city_name
      })
      const id = this.city[index].id
      this.detail.area = ''
      this.getArea(id)
    },
    async getProvince () {
      let { code, output } = await getProvince()
      if (code !== 200) return
      this.province = output
      return
    },
    async getCity (id) {
      let { code, output } = await getCity({province_id: id})
      if (code !== 200) return
      this.city = output
      return
    },
    async getArea (id) {
      let { code, output } = await getArea({city_id: id})
      if (code !== 200) return
      this.area = output
      return
    },
    async submitFunc() {
      let user = {
        ...this.detail
      }
      user.name = this.detail.realname
      user.province_name = this.detail.province_name
      user.city_name = this.detail.city_name
      user.area_name = this.detail.area_name
      user.school_name = this.detail.school_name
      user.sex = this.detail.sex
      
      let { code } = await updateUserInfo(user)
      if (code === 200) {
        this.$message({
          message: '个人资料保存成功',
          type: 'success'
        })
      }
    },
  },
  mounted() {
    this.initCityData()
  },
}
</script>

<style lang="scss" scoped>
#person-cont {
  width: 100%;
  padding: 50px;
  border: 1px solid #D8D8D8;
  .person-form {
    width: 520px;
  }
  .person-form /deep/ .el-form-item__label {
    font-weight: bold;
    font-size: 16px;
    color: #333333;
  }
} 
</style>