
import { ACCOUNT_RECOVERY_SEND_EMAIL_ERROR, ACCOUNT_RECOVERY_LOADING, ACCOUNT_RECOVERY_SEND_EMAIL_SUCCESS, ACCOUNT_RECOVERY_SECURITY_CODE_SUCCESS, ACCOUNT_RECOVERY_SECURITY_CODE_ERROR, ACCOUNT_RECOVERY_RESET_PASSWORD_ERROR, ACCOUNT_RECOVERY_RESET_PASSWORD_SUCCESS } from '../../actions/types/accountRecoveryTypes'


export const initialState = {
  accountRecovery: {
    sendEmailData:{
      data: null,
      error: null,
      errorData: null,
    },
    securityCode:{
      data: null,
      error: null,
      errorData: null
    },
    resetPassword:{
      data: null,
      error: null,
      errorData: null
    },
    loading: false
  }
}

export const accountRecoveryReducer = (state, action) => {
  switch (action.type) {
  case ACCOUNT_RECOVERY_LOADING:
    return { ...state, loading: true }

  case ACCOUNT_RECOVERY_SEND_EMAIL_ERROR:
    return { 
      ...state, loading: false, sendEmailData:{ error: true, errorData: action.payload } 
    }

  case ACCOUNT_RECOVERY_SEND_EMAIL_SUCCESS:
    return {
      ...state, loading: false, sendEmailData:{ error:false, data: action.payload }
    }

  case ACCOUNT_RECOVERY_SECURITY_CODE_ERROR:
    return {
      ...state, loading: false, securityCode:{ error: true, errorData: action.payload }
    }

  case ACCOUNT_RECOVERY_SECURITY_CODE_SUCCESS:
    return {
      ...state, loading: false, securityCode:{ error:false, data: action.payload }
    }

  case ACCOUNT_RECOVERY_RESET_PASSWORD_ERROR:
    return {
      ...state, loading: false, resetPassword:{ error: true, errorData: action.payload }
    }

  case ACCOUNT_RECOVERY_RESET_PASSWORD_SUCCESS:
    return {
      ...state, loading: false, resetPassword:{ error: false, data: action.payload }
    }

  default:
    return state
  }
}
