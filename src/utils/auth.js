/**
 * @function
 * @returns {String} 返回token值
 * @description 获取存储在sessionStorage中的token
 */
export function getToken() {
  // eslint-disable-next-line no-undef
  return uni.getStorageSync('token')
}

/**
 * @function
 * @param {String} token 用户登录凭证
 * @return {void}
 * @description 保存用户token、
 */
export function setToken(token) {
  // eslint-disable-next-line no-undef
  return uni.setStorageSync('token', token)
}

/**
 * @function
 * @returns {void}
 * @description 移除用户token
 */
export function removeToken() {
  // eslint-disable-next-line no-undef
  return uni.removeStorageSync('token')
}
