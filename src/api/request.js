
import axios from 'axios'
import { getToken } from '@/utils/auth'
// create an axios instance
const service = axios.create({
  baseURL: '', // url = base url + request url
  withCredentials: true, // 跨域请求时发送cookie
  // withCredentials: true, // send cookies when cross-domain requests 注意：withCredentials和后端配置的cross跨域不可同时使用
  timeout: 6000 // request timeout
  // crossDomain: true
})

// request拦截器,在请求之前做一些处理
service.interceptors.request.use((req) => {
  // 添加请求头
  req.headers['token'] = getToken()
  console.log('请求拦截成功')
  return req
},
(error) => {
  console.log(error) // for debug
  return Promise.reject(error)
}
)

// 配置成功后的拦截器
service.interceptors.response.use((res) => {
  const SUCCESS = 0 // 成功
  // const NO_LOGIN = 1 // 登录失效
  //     const NO_JURISDICTION = -403; // 没权限
  switch (res.data.code) {
    case SUCCESS: // 成功
      return res.data
    // case NO_LOGIN: // 登录失效
    //   console.log('登录失效,操作没写')
    //   return res.data
    default:
      return Promise.reject(res.data)
  }
}, (error) => {
  console.log('请求失败')
  return Promise.reject(error)
})


// 在main.js中放入这段自定义适配器的代码，就可以实现uniapp的app和小程序开发中能使用axios进行跨域网络请求，并支持携带cookie
axios.defaults.adapter = function(config) {
  return new Promise((resolve, reject) => {
    console.log(config)
    var settle = require('axios/lib/core/settle')
    var buildURL = require('axios/lib/helpers/buildURL')
    // eslint-disable-next-line no-undef
    uni.request({
      method: config.method.toUpperCase(),
      url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      complete: function complete(response) {
        console.log('执行完成：', response)
        response = {
          data: response.data,
          status: response.statusCode,
          errMsg: response.errMsg,
          header: response.header,
          config: config
        }

        settle(resolve, reject, response)
      }
    })
  })
}

export default service
