import request from '@c/utils/request'
import payRequest from '@c/utils/payRequest'

// 获取学科列表
export function subjectListApi(params) {
  return request({
    url: 'v1/subject',
    method: 'get',
    params
  })
}

// 获取课程列表
export function courseListApi(params) {
  return request({
    url: 'v1/course',
    method: 'get',
    params
  })
}

// 获取课程列表
export function bannerListApi(params) {
  return request({
    url: 'v1/banner',
    method: 'get',
    params
  })
}

// 获取课程详情
export function courseDetail(id) {
  return request({
    url: `v1/course/${id}`,
    method: 'get'
  })
}

// 确定订单以及优惠券信息
export function courseDetailPay(data) {
  return request({
    url: `v1/coupon/check`,
    method: 'post',
    data
  })
}

// 创建支付订单
export function createOrder(data) {
  return payRequest({
    url: `order/create`,
    method: 'post',
    data
  })
}

// 创建零元课订单
export function createOrderFree(data) {
  return payRequest({
    url: `order/free`,
    method: 'post',
    data
  })
}

// 取消购课
export function createOrderCancel(data) {
  return payRequest({
    url: `order/cancel`,
    method: 'post',
    data
  })
}
