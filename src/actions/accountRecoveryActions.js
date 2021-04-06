import { ACCOUNT_RECOVERY_LOADING, 
  ACCOUNT_RECOVERY_SEND_EMAIL_ERROR, 
  ACCOUNT_RECOVERY_SEND_EMAIL_SUCCESS } from './types/accountRecoveryTypes'
  
import { requestPasswordChangeService } from '../services/accountRecoveryServices'

export const accountRecoveryActions = (dispatch) => {
  
  const requestPasswordChange = (userForm) => {
    dispatch({ type: ACCOUNT_RECOVERY_LOADING })
    requestPasswordChangeService(userForm)
      .then((response) => {
        dispatch({
          type: ACCOUNT_RECOVERY_SEND_EMAIL_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        if(error.response) {
          const {response:{data}}=error          
          dispatch({
            type: ACCOUNT_RECOVERY_SEND_EMAIL_ERROR,
            payload: data.detail
          })
        }else if(error.request){
          dispatch({
            type: ACCOUNT_RECOVERY_SEND_EMAIL_ERROR,
            payload:{message:'The request was made but no response was received'}
          })
        }      
      })
  
  }
  
  return { requestPasswordChange }
  
    
}
  
  
  