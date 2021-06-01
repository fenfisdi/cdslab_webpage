
import {
  VALIDATION_QR_SUCCESS,
  VALIDATION_QR_ERROR,
  VALIDATION_QR_LOADING
} from '../../actions/types/qrTypes'

export const initialState = {
  authQr: {
    isValid: localStorage.getItem('token')?true:false,
    loading: false,
    data: null,
    error: null,
    errorData:null
  }
}

export const authQrReducer = (state, action) => {
  switch (action.type) {
  case VALIDATION_QR_LOADING:
    return { ...state, loading: true, error: null, data: null, isValid:false }
  
  case VALIDATION_QR_ERROR:
    return{...state, loading: false, error: true,errorData:action.payload}
  case VALIDATION_QR_SUCCESS:
    return {
      ...state, isValid: true, loading: false, data: action.payload
    }
  default:
    return state
  }
}
