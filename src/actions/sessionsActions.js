import {
  SESSION_LOADING,
  SESSION_LOGIN,
  SESSION_LOGOUT, SESSION_SET_CURRENT_NAVIGATION, SESSION_SET_CURRENT_SECTION_NAVIGATION
} from './types/sessionTypes'

export const useSessionActions = (dispatch) => {
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

  const setCurrenNavigation = (titleNavigation) => {
    dispatch({ type: SESSION_SET_CURRENT_NAVIGATION, payload: titleNavigation })
  }

  const setActiveSection = (sectionTitle) => {
    dispatch({ type: SESSION_SET_CURRENT_SECTION_NAVIGATION, payload: sectionTitle })
  }

  return { login, logout, setCurrenNavigation, setActiveSection }
}
