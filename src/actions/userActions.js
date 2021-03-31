import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SAVE
} from './types/registerTypes'

import{
  VALIDATION_QR_SUCCESS,
  VALIDATION_QR_ERROR,
  VALIDATION_QR_LOADING
} from './types/qrTypes'

import { registerUserService, validateQrService } from '../services/userServices'
export const useUserActions = (dispatch) => {
  /**
   * @param {*} userForm {username, name, lastname}
   * @param {*} userQrValidation {username, name, lastname}
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
        const {response:{data}}=error
        
        dispatch({
          type: REGISTER_ERROR,
          payload: { error: true, errorData: data.detail }
        })
      })

  }

  const validateQr = (userQrValidation) => {
    dispatch({ type: VALIDATION_QR_LOADING })
    validateQrService(userQrValidation)
      .then((response) => {
        dispatch({
          type: VALIDATION_QR_SUCCESS,
          payload: response.data
        })
        return response
      }) 
      .catch((error) => {
        dispatch({
          type: VALIDATION_QR_ERROR,
          payload: { error: true, errorData: error }
        })
      })
  }

  return { registerUser, validateQr }

  
}


