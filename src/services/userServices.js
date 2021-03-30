import request from '../httpClient/api.request'

export const registerUserService = async (userForm) => {
  return await request(
    `${process.env.REACT_APP_REGISTER_API_URL}/save_user`,
    'POST',
    userForm
  )
  
}

export const validateQrService = async (userQrValidation) => {
  return await request(
    `${process.env.REACT_APP_REGISTER_API_URL}/qr_validation`,
    'POST',
    userQrValidation
  )
}