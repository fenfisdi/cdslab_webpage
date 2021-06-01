import { getUsersList } from '../services/userManagementService'
import {
  USERS_LIST_SUCCESS,
  USER_LIST_ERROR
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
  
  return {
    getUsersListData
  }
}