export const gradeToNameFilter = id => {
  const gradeList = [
    '一年级',
    '二年级',
    '三年级',
    '四年级',
    '五年级',
    '六年级',
    '初一',
    '初二',
    '初三',
    '高一',
    '高二',
    '高三'
  ]
  const index = id - 1
  return gradeList[index]
}
export const classStatus = val => {
  const target = ['未开始', '直播中', '回看']
  const index = Number(val) - 1
  return target[index]
}

export const Sex = val => {
  if (!val) return '未知'
  const target = ['未知', '男', '女']
  const index = Number(val)
  return target[index]
}

export const Day = val => {
  const target = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const index = Number(val)
  return target[index]
}
