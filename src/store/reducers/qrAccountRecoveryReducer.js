
import { QR_ACCOUNT_RECOVERY_ERROR, 
  QR_ACCOUNT_RECOVERY_LOADING, 
  QR_ACCOUNT_RECOVERY_SUCCESS, 
  QR_ACCOUNT_SECURITY_QUESTIONS_ERROR, 
  QR_ACCOUNT_SECURITY_QUESTIONS_SUCCESS} from '../../actions/types/qrTypes'


export const initialState = {
  qrAccountRecovery: {
    qrRecovery:{
      data: null,
      error: null,
      errorData: null,
    },
    qrSecurityQuestions:{
      data: null,
      error: null,
      errorData: null,
    },
    loading: false
  }
}

export const qrAccountRecoveryReducer = (state, action) => {
  switch (action.type) {

  case QR_ACCOUNT_RECOVERY_LOADING:
    return { ...state, loading: true }

  case QR_ACCOUNT_RECOVERY_ERROR:
    return { 
      ...state, loading: false, qrRecovery:{ error: true, errorData: action.payload } 
    }

  case QR_ACCOUNT_RECOVERY_SUCCESS:
    return {
      ...state, loading: false, qrRecovery:{ error:false, data: action.payload }
    }

  case QR_ACCOUNT_SECURITY_QUESTIONS_ERROR:
    return { 
      ...state, loading: false, qrSecurityQuestions:{ error: true, errorData: action.payload } 
    }

  case QR_ACCOUNT_SECURITY_QUESTIONS_SUCCESS:
    return {
      ...state, loading: false, qrSecurityQuestions:{ error:false, data: action.payload }
    }

  default:
    return state
  }
}
