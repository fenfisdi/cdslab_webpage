import axios from 'axios'
import qs from 'qs'
import { OPTIONS_HTTP } from '../constants/optionsHttp'

const createConfig = (url, method, params, settings) => {
  const { isQueryString = false, cancelToken = false } = settings
  const defaultConfig = {
    url,
    method,
    cancelToken,
    timeout: 1000 * 120, // Wait for 120 seconds
    headers: {}
  }

  switch (method) {
  case OPTIONS_HTTP.GET:
    return {
      ...defaultConfig,
      params,
      paramsSerializer: (paramSerializer) =>
        isQueryString ? qs.stringify(paramSerializer, { encode: false }) : null
    }
  case OPTIONS_HTTP.POST:
    return {
      ...defaultConfig,
      data: params,
      key:OPTIONS_HTTP.POST
    }
  case OPTIONS_HTTP.DELETE:
    return {
      ...defaultConfig,
      params,
      key:OPTIONS_HTTP.DELETE
    }
  case OPTIONS_HTTP.PUT:
    return {
      ...defaultConfig,
      data: params,
      key:OPTIONS_HTTP.PUT
    }

  default:
    return defaultConfig
  }
}

const request = async (url, method, params, settings = {}) => {
  return axios(createConfig(url, method, params, settings))
}

export default request

