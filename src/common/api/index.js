import request from '@c/utils/request'

// 获取省份
export function getProvince(params) {
  return request({
    url: 'v1/province',
    params
  })
}

// 获取城市
export function getCity(params) {
  return request({
    url: 'v1/city',
    params
  })
}

// 获取区县
export function getArea(params) {
  return request({
    url: 'v1/area',
    params
  })
}
