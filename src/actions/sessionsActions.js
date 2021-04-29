import { loginService } from '../services/sessionServices'
import { FAKE_USER } from '../utils/dataTest'
import {
  SESSION_ERROR,
  SESSION_LOADING,
  SESSION_LOGIN,
  SESSION_LOGOUT, SESSION_SET_CURRENT_NAVIGATION, SESSION_SET_CURRENT_SECTION_NAVIGATION
} from './types/sessionTypes'

export const useSessionActions = (dispatch) => {
  const LOGIN_ENABLED = process.env.REACT_APP_LOGIN_ENABLED === 'true'
  /**
 * @param {*} loginInfo {username, password}
 */
  const login = async (loginInfo) => {
    console.log({ LOGIN_ENABLED })
    if (!LOGIN_ENABLED) {
      dispatch({
        type: SESSION_LOGIN,
        payload: FAKE_USER
      })
      return
    }
    dispatch({ type: SESSION_LOADING })
    loginService(loginInfo)
      .then((response) => {
        dispatch({
          type: SESSION_LOGIN,
          payload: response.data.data
        })

      })
      .catch((error) => {
        if (error.response) {
          const { response: { data } } = error
          dispatch({
            type: SESSION_ERROR,
            payload: data
          })
        } else if (error.request) {
          dispatch({
            type: SESSION_ERROR,
            payload: { message: 'The request was made but no response was received' }
          })
        }
      })

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
