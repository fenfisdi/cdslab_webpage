import { deleteDiseaseStateGroupsItemService, getDiseaseStateGroupsDistributionsService, getDiseaseStateGroupsInformationService, saveDiseaseStateGroupsItemFileService, saveDiseaseStateGroupsItemService, updateDiseaseStateGroupsItemService } from '../services/agentsDiseaseStateGroupsServices'
import { AGENTS_DISEASE_STATE_MODEL_GET_INFORMATION_ERROR, AGENTS_DISEASE_STATE_MODEL_GET_INFORMATION_SUCCESS, AGENTS_DISEASE_STATE_MODEL_RESET_INFORMATION_SUCCESS } from './types/agentsDiseaseStateGroupsTypes'






export const useAgentsDiseaseStateGroupsActions = (dispatch) => {
  
  const DtoDiseaseStateGroupsSuccess =(agentsDiseaseStateGroups)=> (
    {
      data:agentsDiseaseStateGroups == null ? []: agentsDiseaseStateGroups,
    }
  )

  const DtoDiseaseStateGroupsError =(error)=> (
    {
      message:error.message
    }
  )
    


  const getDiseaseStateGroupsInformation =(idConfiguration)=>{
    getDiseaseStateGroupsInformationService(idConfiguration).then((response)=>{       
      dispatch({
        type: AGENTS_DISEASE_STATE_MODEL_GET_INFORMATION_SUCCESS,
        payload:DtoDiseaseStateGroupsSuccess(response.data.data)
      })
      
    }).catch((error)=>{
      if (error.response) {
        const { response } = error        
        dispatch({
          type: AGENTS_DISEASE_STATE_MODEL_GET_INFORMATION_ERROR,
          payload: DtoDiseaseStateGroupsError(response.data)
        })
      }else if(error.request) {
        dispatch({
          type: AGENTS_DISEASE_STATE_MODEL_GET_INFORMATION_ERROR,
          payload:{detail:'The request was made but no response was received'}
        })
      }
    })
  }

  const setResetDiseaseStateGroupsInformation = () => {
    dispatch({
      type: AGENTS_DISEASE_STATE_MODEL_RESET_INFORMATION_SUCCESS,
    })
  }


  const saveDiseaseStateGroupsItemAction =(diseaseStateGroups,idConfiguration)=>{
    return saveDiseaseStateGroupsItemService(diseaseStateGroups,idConfiguration)
  }

  const updateDiseaseStateGroupsItemAction =(idConfiguration,idDiseaseStateGroup,diseaseStateGroup)=>{
    return updateDiseaseStateGroupsItemService(idConfiguration,idDiseaseStateGroup,diseaseStateGroup)
  }

  const deleteDiseaseStateGroupsItemAction =(idConfiguration,idDiseaseStateGroups)=>{
    return deleteDiseaseStateGroupsItemService(idConfiguration,idDiseaseStateGroups)
  }


  const saveDiseaseStateGroupsItemFile=(idConfiguration,idDiseaseStateGroups,diseaseStateGroups)=>{
    return saveDiseaseStateGroupsItemFileService(idConfiguration,idDiseaseStateGroups,diseaseStateGroups)
  }

  const  getDiseaseStateGroups=(idConfiguration)=>{
    return getDiseaseStateGroupsInformationService(idConfiguration)
  }

  const getDiseaseStateGroupsDistributions = ()=>{
    return getDiseaseStateGroupsDistributionsService()
  }
  

  return {
    getDiseaseStateGroupsInformation,
    setResetDiseaseStateGroupsInformation,
    saveDiseaseStateGroupsItemAction,
    updateDiseaseStateGroupsItemAction,
    deleteDiseaseStateGroupsItemAction,
    saveDiseaseStateGroupsItemFile,
    getDiseaseStateGroups,
    getDiseaseStateGroupsDistributions
  }
}