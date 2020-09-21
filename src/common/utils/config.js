import { IsPC } from './index'
let baseUrl = '/pc'
if (!IsPC()) baseUrl = '/mobile'
export default {
  baseUrl: baseUrl
}
