import {
  USER_LIST_LOADING,
  USER_LIST_ERROR,
  USERS_LIST_SUCCESS
} from '../../actions/types/userManagementTypes'

export const initialState = {
  userManagement:{
    userListRecovery:{
      data: null,
      error: false,
      errorData: null,
      loading: false,
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

  default:

    return state
  }
}