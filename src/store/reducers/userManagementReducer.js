import {
  USER_LIST_LOADING,
  USER_LIST_ERROR,
  USERS_LIST_SUCCESS,
  UPDATE_USERS_STATE_SUCCESS,
  UPDATE_USERS_STATE_ERROR,
  UPDATE_USERS_STATE_LOADING
} from '../../actions/types/userManagementTypes'

export const initialState = {
  userManagement:{
    userListRecovery:{
      data: null,
      error: false,
      errorData: null,
      loading: false,
    },
    updateUserStatus:{
      data: null,
      error: false,
      errorData: null,
      loading: false
    }
  }
}

export const userManagementReducer = (state, action) => {
  switch (action.type) {

  case USER_LIST_LOADING:
    return {...state, userListRecovery:{...state.userListRecovery, loading: true, data: null, error: false} }
  
  case USER_LIST_ERROR:
    return {...state, userListRecovery:{...state.userListRecovery, loading: false, error: true, errorData: action.payload } }

  case USERS_LIST_SUCCESS:
    return {...state, userListRecovery:{...state.userListRecovery, loading: false, error: false, data: action.payload} }
  
  case UPDATE_USERS_STATE_LOADING:
    return{...state, updateUserStatus:{...state.updateUserStatus, loading: true, data: null, error: false} }

  case UPDATE_USERS_STATE_ERROR:
    return{...state, updateUserStatus:{...state.updateUserStatus, loading: false, error: true, errorData: action.payload } }
  
  case UPDATE_USERS_STATE_SUCCESS:
    return{...state, updateUserStatus:{...state.updateUserStatus, loading: false, error: false, data: action.payload } }
    
  default:

    return state
  }
}