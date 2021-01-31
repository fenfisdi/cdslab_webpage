import {
  SESSION_LOADING,
  SESSION_LOGIN,
  SESSION_LOGOUT
} from './types/sessionTypes'

export const useAuthActions = (dispatch) => {
  /**
 * @param {*} loginInfo {username, password}
 */
  const login = async (loginInfo) => {
    dispatch({ type: SESSION_LOADING })
    dispatch({ type: SESSION_LOGIN, payload: { username: loginInfo.username } })
  }

  const logout = async () => {
    dispatch({ type: SESSION_LOGOUT })
  }

  return { login, logout }
}
