import { registerModelParametersService } from '../services/compartmentalModelServices'
import { COMPARTMENTAL_MODEL_LOADING, COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_ERROR, COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_SUCCESS } from './types/compartmentalModelTypes'

export const useCompartmentalModelActions = (dispatch) => {
  /**
     * @param {*} userForm {username, name, lastname}
     * @param {*} userQrValidation {username, name, lastname}
     */
  const registerModelParameters = () => {
    dispatch({ type: COMPARTMENTAL_MODEL_LOADING })
    /*registerModelParametersService(userForm)
      .then((response) => {
          
        dispatch({
          type: COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        if(error.response) {
          const {response:{data}}=error          
          dispatch({
            type: COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_ERROR,
            payload: data 
          })
        }else if(error.request){
          dispatch({
            type: COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_ERROR,
            payload:{message:'The request was made but no response was received'}
          })
        }      
      })*/
  
  }
  
  
  return { registerModelParameters }
  
    
}