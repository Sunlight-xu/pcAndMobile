import request from '@c/utils/request'

// 获取订单列表
export function orderListApi(params) {
  return request({
    url: `v1/user/order`,
    method: 'get',
    params
  })
}

// 获取订单详情
export function orderDetailApi(params) {
  return request({
    url: `v1/user/order/detail`,
    method: 'get',
    params
  })
}
