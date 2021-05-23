import {
  USER_LIST_LOADING,
  USER_LIST_ERROR,
  USERS_LIST_SUCCESS
} from '../../actions/types/userManagementTypes'

export const initialState = {
  userListRecovery:{
    data: null,
    error: false,
    errorData: null,
    loading: false,
  }
}

export const userManagementReducer = (state, action) => {
  switch (action.type) {

  case USER_LIST_LOADING:
    return {...state, loading: true, data: null, error: false}
  
  case USER_LIST_ERROR:
    return {...state, loading: false, error: true, errorData: action.payload }

  case USERS_LIST_SUCCESS:
    return {...state, loading: false, error: false, data: action.payload }

  default:
    return state
  }
}