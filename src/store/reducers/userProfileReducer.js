import {
  USER_DATA_SUCCESS,
  USER_DATA_ERROR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_QR_BINDING_SUCCESS,
  UPDATE_QR_BINDING_ERROR
} from '../../actions/types/userProfileTypes'

export const initialState = {
  
  userProfile:{
    userData:{
      data: null,
      error: false,
      errorData: null
    },

    updateUserData:{
      data: null,
      error: false,
      errorData: null
    },

    updateUrlQr:{
      data: null,
      error: false,
      errorData: null
    }
  }
}

export const userProfileReducer = (state, action) => {
  switch (action.type) {
    
  case USER_DATA_ERROR:
    return {...state, userData:{...state.userData, loading: false, error: true, errorData: action.payload } }
  
  case USER_DATA_SUCCESS:
    return {...state, userData:{...state.userData, loading: false, error: false, data: action.payload} }

  case UPDATE_USER_SUCCESS:
    return {...state, updateUserData:{...state.updateUserData, loading: false, error: true, errorData: action.payload } }
  
  case UPDATE_USER_ERROR:
    return {...state, updateUserData:{...state.updateUserData, loading: false, error: false, data: action.payload} }
  
  case UPDATE_QR_BINDING_SUCCESS:
    return {...state, updateUrlQr:{...state.updateUrlQr, loading: false, error: true, errorData: action.payload } }
    
  case UPDATE_QR_BINDING_ERROR:
    return {...state, updateUrlQr:{...state.updateUrlQr, loading: false, error: false, data: action.payload} }
    
  default:
  
    return state
  }
}