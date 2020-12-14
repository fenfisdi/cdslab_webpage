import {
  AUTH_LOADING,
  AUTH_ERROR,
  AUTH_LOGIN,
  AUTH_LOGOUT
} from '../../actions/types/authTypes'

export const initialState = {
  auth: {
    isAuth: false,
    session: null, // { user : { username } }
    loading: false,
    error: null
  }
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return { ...state, loading: true, error: null }
    case AUTH_ERROR:
      return { ...state, loading: false, error: action.payload }
    case AUTH_LOGIN:
      return {
        ...state,
        loading: false,
        isAuth: true,
        session: { ...state.session, user: action.payload }
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        loading: false,
        isAuth: false,
        session: null
      }
    default:
      return state
  }
}
