import {
  USER_DATA_SUCCESS,
  USER_DATA_ERROR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR
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
  
  default:
  
    return state
  }
}