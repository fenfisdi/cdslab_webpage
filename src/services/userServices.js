import request from '../httpClient/api.request'

export const registerUserService = async (userForm) => {
  const response = await request(
    'http://127.0.0.1:8000/register/save_user',
    'POST',
    userForm
  )
  return response
}
