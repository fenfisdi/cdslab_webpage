
import { getQuarantineGroupsService, getQuarantineInformationService,saveQuarantineGroups, putQuarantineInformationService, getQuarantineTracingService } from '../services/quarantineGroupsServices'
import { QUARANTINE_GROUPS_ERROR, QUARANTINE_GROUPS_SAVE, QUARANTINE_TRACING } from './types/quarantineGroupsTypes'

export const useQuarantineActions = (dispatch) => {

  const getQuarantineGroupsAction =(idConfiguration)=>{
    return getQuarantineGroupsService(idConfiguration)
  }

  const getQuarantineInformationAction =(idConfiguration)=>{
    return getQuarantineInformationService(idConfiguration)
  }

  const putQuarantineInformationAction =(idConfiguration,data)=>{
    return putQuarantineInformationService(idConfiguration,data)
  }
  
  const saveQuarantineGroupsForm =(quarantineGroups,idConfiguration)=>{
    saveQuarantineGroups(quarantineGroups,idConfiguration).then(({data}) => {
      dispatch({ type: QUARANTINE_GROUPS_SAVE, payload: data.data })
    })
      .catch((error) => {
        const { response: { data } } = error
        dispatch({ type: QUARANTINE_GROUPS_ERROR, payload: data.data })
      })
  }

  const getQuarantineTracingAction =()=>{
    return getQuarantineTracingService().then((response)=>{       
      dispatch({
        type: QUARANTINE_TRACING,
        payload:response.data.data
      })
      
    }).catch((error)=>{
      if (error.response) {
        const { response } = error        
        dispatch({
          type: QUARANTINE_GROUPS_ERROR,
          payload: response.data
        })
      }else if(error.request) {
        dispatch({
          type: QUARANTINE_GROUPS_ERROR,
          payload:{detail:'The request was made but no response was received'}
        })
      }
    })
  }

  return {
    getQuarantineGroupsAction,
    saveQuarantineGroupsForm,
    getQuarantineInformationAction,
    putQuarantineInformationAction,
    getQuarantineTracingAction
  }
  
}

