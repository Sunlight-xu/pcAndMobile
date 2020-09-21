import { IsPC } from './index'
export function jumpPc() {
  let newUrl = null
  if (IsPC() && location.href.indexOf('/mobile') != -1) {
    newUrl = location.href.replace('/mobile', '/pc')
    location.href = newUrl
  }
}
export function jumpMobile() {
  let newUrl = null
  if (!IsPC() && location.href.indexOf('/pc') != -1) {
    newUrl = location.href.replace('/pc', '/mobile')
    location.href = newUrl
  }
}
