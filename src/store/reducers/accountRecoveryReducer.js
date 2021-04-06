
import { ACCOUNT_RECOVERY_SEND_EMAIL_ERROR, ACCOUNT_RECOVERY_LOADING, ACCOUNT_RECOVERY_SEND_EMAIL_SUCCESS } from '../../actions/types/accountRecoveryTypes'


export const initialState = {
  accountRecovery: {
    sendEmailData:{
      data: null,
      error: null,
      errorData: null,
    },
    loading: false
  }
}

export const accountRecoveryReducer = (state, action) => {
  switch (action.type) {
  case ACCOUNT_RECOVERY_LOADING:
    return { ...state, loading: true }

  case ACCOUNT_RECOVERY_SEND_EMAIL_ERROR:
    return { ...state, loading: false, sendEmailData:{error: true, errorData: action.payload} }

  case ACCOUNT_RECOVERY_SEND_EMAIL_SUCCESS:
    return {
      ...state, loading: false, sendEmailData:{error:false, data: action.payload}
    }

  default:
    return state
  }
}
