import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SAVE
} from '../../actions/types/registerTypes'

import{
  VALIDATION_QR_SUCCESS,
  VALIDATION_QR_ERROR
} from '../../actions/types/qrTypes'

export const initialState = {
  register: {
    data: null,
    loading: false,
    error: null
  },
  qrValidation: {
    isValid: false,
    loading: false,
    data: null,
    error: null
  }
}

export const registerReducer = (state, action) => {
  switch (action.type) {
  case REGISTER_LOADING:
    return { ...state, loading: true, error: null, data: null }
  case REGISTER_ERROR:
    return { ...state, loading: false, error: action.payload }
  case REGISTER_SAVE:
    return {
      ...state,
      loading: false,
      data: action.payload
    }
  case VALIDATION_QR_ERROR:
    return{...state, loading: false, error:action.payload}
  case VALIDATION_QR_SUCCESS:
    return {
      ...state, isValid: true, loading: false, data: action.payload
    }
  default:
    return state
  }
}
