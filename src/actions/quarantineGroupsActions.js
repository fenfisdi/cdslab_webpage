
import { getQuarantineGroupsService, getQuarantineInformationService,saveQuarantineGroups, putQuarantineInformationService } from '../services/quarantineGroupsServices'
import { QUARANTINE_GROUPS_ERROR, QUARANTINE_GROUPS_SAVE } from './types/quarantineGroupsTypes'

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

  return {
    getQuarantineGroupsAction,
    saveQuarantineGroupsForm,
    getQuarantineInformationAction,
    putQuarantineInformationAction
  }
  
}

