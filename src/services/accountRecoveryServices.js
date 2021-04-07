import request from '../httpClient/api.request'

export const requestSecurityCodeService = async (userForm) => {
  return  request(
    `${process.env.REACT_APP_AUTH_API_URL}/securityCodeRecoverylink`,
    'POST',
    userForm
  ) 
}

export const requestSecurityCodeVerificationService = async (userForm) => {
  return  request(
    `${process.env.REACT_APP_AUTH_API_URL}/validateSecuritycode`,
    'POST',
    userForm
  ) 
}


export const requestPasswordSubmissionService = async (userForm) => {
  return  request(
    `${process.env.REACT_APP_AUTH_API_URL}/passwordRecover`,
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