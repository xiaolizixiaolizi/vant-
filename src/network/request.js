import axios from 'axios'
const config = require('@/config')

const instance = axios.create({
  baseURL: config.baseUrl,
  timeout: 15 * 1000 // 15s timeout
})

instance.interceptors.request.use(
  //定义在请求拦截的所有的请求头request Header都会带.并且下面请求如果带了自定义请求头，请求头只会合并，不会覆盖
  function (config) {
    config.headers['token'] = "abc";

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    const data = response.data
    // if (data.resCode !== 0) {
    //   return Promise.reject(data) // 人为走catch代码
    // }
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 第三个参数是自定义请求头
export function get(url, params, commonHeaders) {

  return instance.get(url, {
    headers: commonHeaders || {}, //这个请求头会和请求拦截配置的请求头合并。
    params: params || {},

  })
}
export function post(url, params, commonHeaders) {

  // instance.defaults.headers.post['Content-Type'] = 'application/json'
  params = params || {};
  commonHeaders = commonHeaders || {};
  return instance.post(url, JSON.stringify(params), {
    headers: {
      "Content-Type": "application/json",
      ...commonHeaders
    }
  })
}