import axios from 'axios'
import { isEmpty, merge } from 'lodash'
import qs from 'qs'
import { OPTIONS_HTTP } from '../constants/optionsHttp'

const createHeaders = (settings, userLocal) => {
  const { access_token_info: { accessToken = '' } = {} } = userLocal || {}
  const defaultHeaders = {
    'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_SUBSCRIPTION_KEY}`,
    'Ocp-Apim-Trace': true,
    Authorization: `Bearer ${accessToken}`
  }

  if (isEmpty(settings.headers)) {
    return { ...defaultHeaders }
  }

  return merge({}, defaultHeaders, settings.headers)
}

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
      paramsSerializer: (params) =>
        isQueryString ? qs.stringify(params, { encode: false }) : null
    }
  case OPTIONS_HTTP.POST:
    return {
      ...defaultConfig,
      data: params
    }
  case OPTIONS_HTTP.DELETE:
    return {
      ...defaultConfig,
      params
    }
  case OPTIONS_HTTP.PUT:
    return {
      ...defaultConfig,
      data: params
    }
  case OPTIONS_HTTP.PATCH:
    return {
      ...defaultConfig,
      data: params,
      params
    }

  default:
    return defaultConfig
  }
}

const request = async (url, method, params, settings = {}) => {
  //refreshTokenResponseInterceptor(axios);
  const res = await axios(createConfig(url, method, params, settings))
  return res
}

export default request
//export const cancelToken = axios.CancelToken;
