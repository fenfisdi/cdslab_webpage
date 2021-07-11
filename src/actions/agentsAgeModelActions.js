import { getAgentsAgeModelInformationService, saveAgentsAgeModelInformationService } from '../services/agentsModelServices'
import { AGENTS_AGE_MODEL_GET_INFORMATION_ERROR, AGENTS_AGE_MODEL_GET_INFORMATION_SUCCESS, AGENTS_AGE_MODEL_RESET_INFORMATION_SUCCESS } from './types/agentsModelTypes'

export const useAgentsAgeModelActions = (dispatch) => {
  
  const DtoAgentsAgeModelSuccess =(agesModelInformation)=> (
    {
      data:agesModelInformation == null ? []: agesModelInformation,
    }
  )

  const DtoAgentsAgeModelError =(error)=> (
    {
      message:error.message
    }
  )
    
  const saveAgentsAgeModelInformation =(agentsInformation,idConfiguration)=>{
    
    return saveAgentsAgeModelInformationService(agentsInformation,idConfiguration)
  }

  const getAgentsAgeModelInformation =(idConfiguration)=>{
    getAgentsAgeModelInformationService(idConfiguration).then((response)=>{       
      dispatch({
        type: AGENTS_AGE_MODEL_GET_INFORMATION_SUCCESS,
        payload:DtoAgentsAgeModelSuccess(response.data.data)
      })
      
    }).catch((error)=>{
      if (error.response) {
        const { response } = error        
        dispatch({
          type: AGENTS_AGE_MODEL_GET_INFORMATION_ERROR,
          payload: DtoAgentsAgeModelError(response.data)
        })
      }else if(error.request) {
        dispatch({
          type: AGENTS_AGE_MODEL_GET_INFORMATION_ERROR,
          payload:{detail:'The request was made but no response was received'}
        })
      }
    })
  }

  const setAgeModelInformation = () => {
    dispatch({
      type: AGENTS_AGE_MODEL_RESET_INFORMATION_SUCCESS,
    })
  }

  return {
    saveAgentsAgeModelInformation,
    getAgentsAgeModelInformation,
    setAgeModelInformation
  }
}