import request from '@c/utils/request'
// 获取有课程日期列表
export function getCoursedate(params) {
  return request({
    url: 'v1/my/coursedate',
    params
  })
}
export function getCourse(params) {
  return request({
    url: 'v1/my/course',
    params
  })
}
export function getClass(params) {
  return request({
    url: 'v1/date/course',
    params
  })
}
export function getCourseDetail(id) {
  return request({
    url: `v2/my/course/${id}`
  })
}
