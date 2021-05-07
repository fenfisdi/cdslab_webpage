import request from '../httpClient/api.request'

export const requestSecurityCodeService = async (userForm) => {
  return  request(
    `${process.env.REACT_APP_AUTH_API_URL}/recovery_code?email=${userForm.email}`,
    'POST',
  ) 
}

export const requestSecurityCodeVerificationService = async (userForm) => {
  return  request(
    `${process.env.REACT_APP_AUTH_API_URL}/validate_code`,
    'POST',
    userForm
  ) 
}


export const requestPasswordSubmissionService = async (userForm) => {
  return  request(
    `${process.env.REACT_APP_AUTH_API_URL}/recover_password`,
    'POST',
    userForm
  ) 
}
