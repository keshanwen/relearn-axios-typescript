import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { bulidURL } from './helpers/url'

function axios(config: AxiosRequestConfig) {
  // 处理请求配置
  processConfig(config)
  xhr(config)
}






function processConfig(config: AxiosRequestConfig): void {
  // 处理请求url， 将请求参数拼接到URL上
  config.url = transformUrl(config)
}



function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}



export default axios
