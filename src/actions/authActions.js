import {
  AUTH_LOADING,
  AUTH_LOGIN,
  AUTH_LOGOUT
} from './types/authTypes'

export const useAuthActions = (dispatch) => {
  /**
 * @param {*} loginInfo {username, password}
 */
  const login = async (loginInfo) => {
    dispatch({ type: AUTH_LOADING })
    dispatch({ type: AUTH_LOGIN, payload: { username: loginInfo.username } })
  }

  const logout = async () => {
    dispatch({ type: AUTH_LOGOUT })
  }

  return { login, logout }
}
