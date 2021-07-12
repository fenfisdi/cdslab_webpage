import { deleteSusceptibilityGroupsItemService, getSusceptibilityGroupsInformationService, saveSusceptibilityGroupsInformationService, saveSusceptibilityGroupsItemFileService, saveSusceptibilityGroupsItemService, updateSusceptibilityGroupsItemService } from '../services/agentsSusceptibilityGroupsServices'
import { AGENTS_SUSCEPTIBILITY_GROUPS_MODEL_GET_INFORMATION_ERROR, AGENTS_SUSCEPTIBILITY_GROUPS_MODEL_GET_INFORMATION_SUCCESS, AGENTS_SUSCEPTIBILITY_GROUPS_MODEL_RESET_INFORMATION_SUCCESS } from './types/agentsSusceptibilityGroupsTypes'




export const useAgentsSusceptibilityGroupsActionsActions = (dispatch) => {
  
  const DtoSusceptibilityGroupsSuccess =(agesSusceptibilityGroups)=> (
    {
      data:agesSusceptibilityGroups == null ? []: agesSusceptibilityGroups,
    }
  )

  const DtoSusceptibilityGroupsError =(error)=> (
    {
      message:error.message
    }
  )
    
  const saveSusceptibilityGroupsInformation =(agentsInformation,idConfiguration)=>{
    
    return saveSusceptibilityGroupsInformationService(agentsInformation,idConfiguration)
  }

  const getSusceptibilityGroupsInformation =(idConfiguration)=>{
    getSusceptibilityGroupsInformationService(idConfiguration).then((response)=>{       
      dispatch({
        type: AGENTS_SUSCEPTIBILITY_GROUPS_MODEL_GET_INFORMATION_SUCCESS,
        payload:DtoSusceptibilityGroupsSuccess(response.data.data)
      })
      
    }).catch((error)=>{
      if (error.response) {
        const { response } = error        
        dispatch({
          type: AGENTS_SUSCEPTIBILITY_GROUPS_MODEL_GET_INFORMATION_ERROR,
          payload: DtoSusceptibilityGroupsError(response.data)
        })
      }else if(error.request) {
        dispatch({
          type: AGENTS_SUSCEPTIBILITY_GROUPS_MODEL_GET_INFORMATION_ERROR,
          payload:{detail:'The request was made but no response was received'}
        })
      }
    })
  }

  const setResetSusceptibilityGroupsInformation = () => {
    dispatch({
      type: AGENTS_SUSCEPTIBILITY_GROUPS_MODEL_RESET_INFORMATION_SUCCESS,
    })
  }


  const saveSusceptibilityGroupsItemAction =(susceptibilityGroup,idConfiguration)=>{
    return saveSusceptibilityGroupsItemService(susceptibilityGroup,idConfiguration)
  }

  const deleteSusceptibilityGroupsItemAction =(idConfiguration,idSusceptibilityGroup)=>{
    return deleteSusceptibilityGroupsItemService(idConfiguration,idSusceptibilityGroup)
  }


  const saveSusceptibilityGroupsItemFile=(idConfiguration,idSusceptibilityGroup,susceptibilityGroup)=>{
    return saveSusceptibilityGroupsItemFileService(idConfiguration,idSusceptibilityGroup,susceptibilityGroup)
  }

  const updateSusceptibilityGroupsItemAction = (idConfiguration,idSusceptibilityGroups,susceptibilityGroups) =>{
    return updateSusceptibilityGroupsItemService(idConfiguration,idSusceptibilityGroups,susceptibilityGroups)
  }

  return {
    saveSusceptibilityGroupsItemAction,
    deleteSusceptibilityGroupsItemAction,
    saveSusceptibilityGroupsItemFile,
    getSusceptibilityGroupsInformation,
    setResetSusceptibilityGroupsInformation,
    saveSusceptibilityGroupsInformation,
    updateSusceptibilityGroupsItemAction
  }
}