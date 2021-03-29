import {
  SESSION_LOADING,
  SESSION_ERROR,
  SESSION_LOGIN,
  SESSION_LOGOUT,
  SESSION_SET_CURRENT_NAVIGATION, SESSION_SET_CURRENT_SECTION_NAVIGATION
} from '../../actions/types/sessionTypes'

export const initialState = {
  session: {
    isAuth: false,
    user: null,
    loading: false,
    error: null,
    errorData:null,
    navigation: null
  }
}

export const sessionReducer = (state, action) => {
  switch (action.type) {
  case SESSION_LOADING:
    return { ...state, loading: true, error: null }
  case SESSION_ERROR:
    return { ...state, loading: false, error: true,errorData:action.payload}
  case SESSION_LOGIN:
    return {
      ...state,
      error:false,
      errorData:null,
      loading: false,
      isAuth: true,
      user: action.payload
    }
  case SESSION_LOGOUT:
    return {
      ...state,
      loading: false,
      isAuth: false,
      user: null
    }
  case SESSION_SET_CURRENT_NAVIGATION:
    return {
      ...state,
      navigation: { ...state.navigation, current: action.payload }
    }
  case SESSION_SET_CURRENT_SECTION_NAVIGATION:
    return {
      ...state,
      navigation: { ...state.navigation, activeSection: action.payload }
    }
  default:
    return state
  }
}
