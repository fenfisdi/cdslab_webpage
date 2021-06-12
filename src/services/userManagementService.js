import request from '../httpClient/api.request'

export const getUsersList = async () => {
  
  return request(
    `${process.env.REACT_APP_MANAGEMENT}/user`,
    'GET')
}

export const updateUserStateService = async (managementForm) => {
  return request(
    `${process.env.REACT_APP_MANAGEMENT}/user/enable`,
    'POST',
    managementForm
  )
}

