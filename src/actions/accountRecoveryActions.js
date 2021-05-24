import { ACCOUNT_RECOVERY_LOADING, 
  ACCOUNT_RECOVERY_RESET_PASSWORD_ERROR, 
  ACCOUNT_RECOVERY_RESET_PASSWORD_SUCCESS, 
  ACCOUNT_RECOVERY_SECURITY_CODE_ERROR, 
  ACCOUNT_RECOVERY_SECURITY_CODE_SUCCESS, 
  ACCOUNT_RECOVERY_SEND_EMAIL_ERROR, 
  ACCOUNT_RECOVERY_SEND_EMAIL_SUCCESS } from './types/accountRecoveryTypes'
  
import { requestPasswordSubmissionService, requestSecurityCodeService, requestSecurityCodeVerificationService } from '../services/accountRecoveryServices'

export const accountRecoveryActions = (dispatch) => {
  
  const requestPasswordChange = (userForm) => {
    dispatch({ type: ACCOUNT_RECOVERY_LOADING })
    requestSecurityCodeService(userForm)
      .then((response) => {
        dispatch({
          type: ACCOUNT_RECOVERY_SEND_EMAIL_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        if (error.response) {
          const { response: { data } } = error
          dispatch({
            type: ACCOUNT_RECOVERY_SEND_EMAIL_ERROR,
            payload: data
          })
        } else if (error.request) {
          dispatch({
            type: ACCOUNT_RECOVERY_SEND_EMAIL_ERROR,
            payload:{ message:'The request was made but no response was received' }
          })
        }
      })
  }

  const requestSecurityCodeVerification = (userForm) => {
    dispatch({ type: ACCOUNT_RECOVERY_LOADING })
    requestSecurityCodeVerificationService(userForm)
      .then((response) => {
        dispatch({
          type: ACCOUNT_RECOVERY_SECURITY_CODE_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        if (error.response) {
          const { response: { data } } = error
          dispatch({
            type: ACCOUNT_RECOVERY_SECURITY_CODE_ERROR,
            payload: data
          })
        } else if (error.request) {
          dispatch({
            type: ACCOUNT_RECOVERY_SECURITY_CODE_ERROR,
            payload:{ message: 'The request was made but no response was received' }
          })
        }
      })
  }

  const requestPasswordSubmission = (userForm) => {
    dispatch({ type: ACCOUNT_RECOVERY_LOADING })
    requestPasswordSubmissionService(userForm)
      .then((response) => {
        dispatch({
          type: ACCOUNT_RECOVERY_RESET_PASSWORD_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        if (error.response) {
          const { response: { data } } = error
          dispatch({
            type: ACCOUNT_RECOVERY_RESET_PASSWORD_ERROR,
            payload: data
          })
        } else if (error.request){
          dispatch({
            type: ACCOUNT_RECOVERY_RESET_PASSWORD_ERROR,
            payload:{ message: 'The request was made but no response was received' }
          })
        }
      })
  }

  return { requestPasswordChange, requestSecurityCodeVerification, requestPasswordSubmission }
}
