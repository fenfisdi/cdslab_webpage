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
          payload: response.data.data
        })
      })
      .catch((error) => {
        if(error.response) {
          const {response:{data}}=error          
          dispatch({
            type: REGISTER_ERROR,
            payload: data.detail
          })
        }else if(error.request){
          dispatch({
            type: REGISTER_ERROR,
            payload:{message:'The request was made but no response was received'}
          })
        }      
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
      }) 
      .catch((error) => {
        if(error.response) {
          const {response:{data}}=error          
          dispatch({
            type: VALIDATION_QR_ERROR,
            payload:  data.detail
          })
        }
        
      })
  }

  return { registerUser, validateQr }

  
}


