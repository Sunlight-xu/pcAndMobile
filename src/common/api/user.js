import request from '@c/utils/request'
// 获取验证码
export function getCode(data) {
  return request({
    url: 'v1/auth/sms',
    method: 'post',
    data
  })
}
// 登录
export function getLogin(data) {
  return request({
    url: 'v1/auth/login',
    method: 'post',
    data
  })
}
// 获取用户信息
export function getUserInfo(params) {
  return request({
    url: 'v1/user/base',
    method: 'get',
    params
  })
}
// 更新用户信息
export function updateUserInfo(data) {
  return request({
    url: 'v1/user',
    method: 'post',
    data
  })
}
// 获取地址
export function getAddress(params) {
  return request({
    url: 'v1/user/address',
    params
  })
}
// 更新地址
export function updateAddress(data) {
  return request({
    url: 'v1/user/address',
    method: 'post',
    data
  })
}

// 检测用户是否进行微信授权
export function getWechatAuthApi(params) {
  return request({
    url: 'oauth/wechat',
    method: 'get',
    params
  })
}
