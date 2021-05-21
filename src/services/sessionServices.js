import request from '../httpClient/api.request'

export const loginService = async (authForm) => {
  return  request(
    `${process.env.REACT_APP_AUTH_API_URL}`,
    'POST',
    authForm
  )
}
