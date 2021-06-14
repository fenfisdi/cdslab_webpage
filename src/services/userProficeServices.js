import request from '../httpClient/api.request'

export const getUserDataService = async () => {
  
  return request(
    `${process.env.REACT_APP_PROFILE_URL}`,
    'GET')
}

export const updateUserService = async (updateUserForm) => {

  return request(
    `${process.env.REACT_APP_PROFILE_URL}`,
    'PUT',
    updateUserForm
  )
  
}




