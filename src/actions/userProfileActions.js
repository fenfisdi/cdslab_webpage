import { getUserDataService, updateUserDataService, getUserUrlToptService } from '../services/userProficeServices'
import {
  USER_DATA_SUCCESS,
  USER_DATA_ERROR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_QR_BINDING_SUCCESS,
  UPDATE_QR_BINDING_ERROR
} from './types/userProfileTypes'

export const userProfileActions = (dispatch) =>{

  const getUserData=(email) => {

    getUserDataService(email)
      .then((response)=>{
        dispatch({
          type: USER_DATA_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        if (error.response) {
          const { response: { data } } = error
          dispatch({
            type: USER_DATA_ERROR,
            payload: data
          })
        } else if (error.request) {
          dispatch({
            type: USER_DATA_ERROR,
            payload:{detail:'The request was made but no response was received'}
          })
        }
      })
  }

  const updateUserData = (updateUserForm) => {
    
    updateUserDataService(updateUserForm)
      .then((response) => {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: response.data.data
        })
      })
      .catch ((error) => {
        if(error.response) {
          const { response: { data } } = error
          dispatch({
            type: UPDATE_USER_ERROR,
            payload: data 
          })
        } else if (error.request){
          dispatch({
            type: UPDATE_USER_ERROR,
            payload:{ message:'The request was made but no response was received' }
          })
        }
      })
  }

  const getUserUrlTopt=(email) => {

    getUserUrlToptService(email)
      .then((response)=>{
        dispatch({
          type: UPDATE_QR_BINDING_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        if (error.response) {
          const { response: { data } } = error
          dispatch({
            type: UPDATE_QR_BINDING_ERROR,
            payload: data
          })
        } else if (error.request) {
          dispatch({
            type: UPDATE_QR_BINDING_ERROR,
            payload:{detail:'The request was made but no response was received'}
          })
        }
      })
  }

  return{
    getUserData,
    updateUserData,
    getUserUrlTopt
  }
}