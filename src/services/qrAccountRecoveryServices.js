import request from '../httpClient/api.request'

export const requestQrBindingRecoverService = async (useForm) => {
  return request( 
    `${process.env.REACT_APP_AUTH_API_URL}/security_question?email=${useForm.email}`,
    'GET',
  )
}

export const requestQrSecurityQuestionsService = async (useForm) => {
  return request(
    `${process.env.REACT_APP_AUTH_API_URL}/validateAnswers`,
    'POST',
    useForm
  )
}