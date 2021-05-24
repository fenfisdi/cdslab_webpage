import request from '../httpClient/api.request'

export const getUsersList = async () => {
  return request(
    `${process.env.REACT_APP_MANAGEMENT}`,
    'GET')
}