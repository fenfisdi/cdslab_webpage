import request from '../httpClient/api.request'

export const requestPasswordChangeService = async (userForm) => {
  return request(
    `${process.env.REACT_APP_REGISTER_API_URL}/save_user`,
    'POST',
    userForm
  ) 
}

export const requestQrBindingRecoverService = async (useForm) => {
  return request(
    `${process.env.REACT_APP_AUTH_API_URL}/qrRecoveryvinculation`,
    'POST',
    useForm
  )
}