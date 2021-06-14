import { getUserDataService, updateUserService } from '../services/userProficeServices'
import {
  USER_DATA_SUCCESS,
  USER_DATA_ERROR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from './types/userProfileTypes'

export const userProfileActions = (dispatch) =>{

  const getUserData=() => {

    getUserDataService()
      .then((response)=>{
        console.log(response)
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
    
    updateUserService(updateUserForm)
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

  return{
    getUserData,
    updateUserData,
  }
}