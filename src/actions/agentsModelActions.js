import { saveAgentsInformationService } from '../services/agentsModelServices'
import { AGENTS_MODEL_REGISTER_ERROR, AGENTS_MODEL_REGISTER_SUCCESS } from './types/agentsModelTypes'

export const useAgentsModelActions = (dispatch) => {
  
  const saveAgentsInformation =(agentsInformation,idConfiguration)=>{
    
    saveAgentsInformationService(agentsInformation,idConfiguration).then((response)=>{      
      dispatch({
        type: AGENTS_MODEL_REGISTER_SUCCESS,
        payload: response.data.data
      })
    }).catch((error)=>{
      if (error.response) {
        const { response: { data } } = error
        dispatch({
          type: AGENTS_MODEL_REGISTER_ERROR,
          payload: data
        })
      }else if(error.request) {
        dispatch({
          type: AGENTS_MODEL_REGISTER_ERROR,
          payload:{detail:'The request was made but no response was received'}
        })
      }
    })
  }

  return {
    saveAgentsInformation
  }
}