import { getUsersList, updateUserStateService, updateAdminsStateService } from '../services/userManagementService'
import {
  USERS_LIST_SUCCESS,
  USER_LIST_ERROR,
  UPDATE_USERS_STATE_LOADING,
  UPDATE_USERS_STATE_ERROR,
  UPDATE_USERS_STATE_SUCCESS,
  UPDATE_ADMINS_STATE_SUCCESS,
  UPDATE_ADMINS_STATE_ERROR,
  UPDATE_ADMINS_STATE_LOADING
} from './types/userManagementTypes'

export const managementActions = (dispatch)=>{

  const getUsersListData = () => {  
    
    getUsersList()
      .then((response) => {
        
        dispatch({
          type: USERS_LIST_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        if (error.response) {
          const { response: { data } } = error
          dispatch({
            type: USER_LIST_ERROR,
            payload: data
          })
        } else if (error.request) {
          dispatch({
            type: USER_LIST_ERROR,
            payload:{detail:'The request was made but no response was received'}
          })
        }
      })
  }

  const updateUserEnableState = (managementForm) =>{
    dispatch({ type: UPDATE_USERS_STATE_LOADING })
    updateUserStateService(managementForm)
      .then((response) => {
        dispatch({
          type: UPDATE_USERS_STATE_SUCCESS,
          payload: response.data.data
        })
      })
      .catch ((error) => {
        if(error.response) {
          const { response: { data } } = error
          dispatch({
            type: UPDATE_USERS_STATE_ERROR,
            payload: data 
          })
        } else if (error.request){
          dispatch({
            type: UPDATE_USERS_STATE_ERROR,
            payload:{ message:'The request was made but no response was received' }
          })
        }
      })

  }

  const updateAdminsState = (managementForm) =>{
    dispatch({ type: UPDATE_ADMINS_STATE_LOADING })
    updateAdminsStateService(managementForm)
      .then((response) => {
        dispatch({
          type: UPDATE_ADMINS_STATE_SUCCESS,
          payload: response.data.data
        })
      })
      .catch ((error) => {
        if(error.response) {
          const { response: { data } } = error
          dispatch({
            type: UPDATE_ADMINS_STATE_ERROR,
            payload: data 
          })
        } else if (error.request){
          dispatch({
            type: UPDATE_ADMINS_STATE_ERROR,
            payload:{ message:'The request was made but no response was received' }
          })
        }
      })

  }
  
  return {
    getUsersListData,
    updateUserEnableState,
    updateAdminsState
  }
}