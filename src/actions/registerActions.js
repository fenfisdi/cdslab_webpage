import { REGISTER_LOADING, REGISTER_SAVE } from './types/registerTypes'

export const useRegisterActions = (dispatch) => {

  /**
   * Dummy method
   * @param {*} userForm {username, name, lastname}
   */
  const save = async (userForm) => {
    dispatch({ type: REGISTER_LOADING })
    dispatch({ type: REGISTER_SAVE, payload: { name: userForm.name, lastname: userForm.lastname } })
  }

  return { save }
}