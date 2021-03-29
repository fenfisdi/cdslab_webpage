import request from '../httpClient/api.request'

export const loginService = async (authForm) => {
  const authlogin = await request(
    `${process.env.REACT_APP_AUTH_API_URL}/loginAuthentication`,
    'POST',
    authForm
  )
  return authlogin.data
  
}
