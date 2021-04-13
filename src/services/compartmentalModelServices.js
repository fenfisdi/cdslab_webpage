import request from '../httpClient/api.request'

export const registerModelParametersService = async (userForm) => {
  return  request(
    `${process.env.REACT_APP_REGISTER_API_URL}/save_user`,
    'POST',
    userForm
  )
  
}
