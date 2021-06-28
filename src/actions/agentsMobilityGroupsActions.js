import { getMobilityGroupsInformationService, saveMobilityGroupsInformationService } from '../services/agentsMobilityGroupServices'
import { AGENTS_MOBILITY_GROUPS_MODEL_GET_INFORMATION_ERROR, AGENTS_MOBILITY_GROUPS_MODEL_GET_INFORMATION_SUCCESS, AGENTS_MOBILITY_GROUPS_MODEL_RESET_INFORMATION_SUCCESS } from './types/agentsMobilityGroupsTypes'


export const useAgentsMobilityGroupsActions = (dispatch) => {
  
  const DtoMobilityGroupsSuccess =(agesMobilityGroups)=> (
    {
      data:agesMobilityGroups == null ? []: agesMobilityGroups,
    }
  )

  const DtoMobilityGroupsError =(error)=> (
    {
      message:error.message
    }
  )
    
  const saveMobilityGroupsInformation =(agentsInformation,idConfiguration)=>{
    
    return saveMobilityGroupsInformationService(agentsInformation,idConfiguration)
  }

  const getMobilityGroupsInformation =(idConfiguration)=>{
    getMobilityGroupsInformationService(idConfiguration).then((response)=>{       
      dispatch({
        type: AGENTS_MOBILITY_GROUPS_MODEL_GET_INFORMATION_SUCCESS,
        payload:DtoMobilityGroupsSuccess(response.data.data)
      })
      
    }).catch((error)=>{
      if (error.response) {
        const { response } = error        
        dispatch({
          type: AGENTS_MOBILITY_GROUPS_MODEL_GET_INFORMATION_ERROR,
          payload: DtoMobilityGroupsError(response.data)
        })
      }else if(error.request) {
        dispatch({
          type: AGENTS_MOBILITY_GROUPS_MODEL_GET_INFORMATION_ERROR,
          payload:{detail:'The request was made but no response was received'}
        })
      }
    }) 
  }

  const setResetMobilityGroupsInformation = () => {
    dispatch({
      type: AGENTS_MOBILITY_GROUPS_MODEL_RESET_INFORMATION_SUCCESS,
    })
  }

  return {
    saveMobilityGroupsInformation,
    getMobilityGroupsInformation,
    setResetMobilityGroupsInformation
  }
}