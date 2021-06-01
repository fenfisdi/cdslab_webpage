import request from '../httpClient/api.request'

export const getUserDataService = async (email) => {
  
  return request(
    `${process.env.REACT_APP_USER_PROFILE}/user?email=${email}`,
    'GET')
}

export const updateUserService = async (updateUserForm) => {

  return  request(
    `${process.env.REACT_APP_REGISTER_API_URL}/user`,
    'POST',
    updateUserForm
  )
  
}

export const getUserUrlToptService = async (email) => {
  
  return request(
    `${process.env.REACT_APP_USER_PROFILE}/url_otp/user?email=${email}`,
    'GET')
}



