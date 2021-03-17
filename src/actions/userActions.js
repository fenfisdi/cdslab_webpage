import { REGISTER_LOADING, REGISTER_SAVE } from './types/registerTypes'

export const useUserActions = (dispatch) => {
  /**
   * @param {*} userForm {username, name, lastname}
   */
  const registerUser = async (userForm) => {
    dispatch({ type: REGISTER_LOADING })
    dispatch({ type: REGISTER_SAVE, payload: { name: userForm.name, lastname: userForm.lastname  } })
  }


  return { registerUser }
}
