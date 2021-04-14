import request from './request'

/**
 * @param {object} data 请求数据
 * @returns {void}
  */
export function selectPageParamConfig(data) {
  return request({
    url: 'http://dev-auth-server.wangjiahuan.net/auth/stores/getStoreMenuCached',
    method: 'post',
    data
  })
}
