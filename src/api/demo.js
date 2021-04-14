import request from './request'

/**
 * @param {object} data 请求数据
 * @returns {void}
  */
export function selectPageParamConfig(data) {
  return request({
    url: '/stores/getStoreMenuCached',
    method: 'post',
    data
  })
} 
