
import { QR_ACCOUNT_RECOVERY_ERROR, 
  QR_ACCOUNT_RECOVERY_LOADING, 
  QR_ACCOUNT_RECOVERY_SUCCESS, 
  QR_ACCOUNT_SECURITY_QUESTIONS_ERROR,  
  QR_ACCOUNT_SECURITY_QUESTIONS_SUCCESS } from './types/qrTypes'
import { requestQrBindingRecoverService, requestQrSecurityQuestionsService } from '../services/qrAccountRecoveryServices'

export const qrAccountRecoveryActions = (dispatch) => {
  const requestQrBindingRecover = (userForm) => {
    dispatch({ type: QR_ACCOUNT_RECOVERY_LOADING })
    requestQrBindingRecoverService(userForm)
      .then((response) => {
        dispatch({
          type: QR_ACCOUNT_RECOVERY_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        if(error.response) {
          const { response: { data } } = error
          dispatch({
            type: QR_ACCOUNT_RECOVERY_ERROR,
            payload: data
          })
        }else if (error.request) {
          dispatch({
            type: QR_ACCOUNT_RECOVERY_ERROR,
            payload:{ message:'The request was made but no response was received' }
          })
        }
      })
    
  }

  const requestQrSecurityQuestions = (userForm) => {
    dispatch({ type: QR_ACCOUNT_RECOVERY_LOADING })
    requestQrSecurityQuestionsService(userForm)
      .then((response) => {
        dispatch({
          type: QR_ACCOUNT_SECURITY_QUESTIONS_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        if(error.response) {
          const {response:{data}}=error
          dispatch({
            type: QR_ACCOUNT_SECURITY_QUESTIONS_ERROR,
            payload: data
          })
        }else if (error.request) {
          dispatch({
            type: QR_ACCOUNT_SECURITY_QUESTIONS_ERROR,
            payload:{ message:'The request was made but no response was received' }
          })
        }
      })
  }

  return { requestQrBindingRecover, requestQrSecurityQuestions }
}
