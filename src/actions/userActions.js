import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SAVE
} from './types/registerTypes'
import { registerUserService } from '../services/userServices'
export const useUserActions = (dispatch) => {
  /**
   * @param {*} userForm {username, name, lastname}
   */
  const registerUser = (userForm) => {
    dispatch({ type: REGISTER_LOADING })
    registerUserService(userForm)
      .then((response) => {
        
        dispatch({
          type: REGISTER_SAVE,
          payload: response.data
        })
      })
      .catch((error) => {
        if(error.response) {
          const {response:{data}}=error          
          dispatch({
            type: REGISTER_ERROR,
            payload: data.detail
          })
        }else{
          dispatch({
            type: REGISTER_ERROR,
            payload: { error: true, errorData: {message:'error'} }
          })
        }      
      })

  }

  return { registerUser }
}
