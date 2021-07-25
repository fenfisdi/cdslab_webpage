
import { getQuarantineGroupsService, getQuarantineInformationService,saveQuarantineGroups, putQuarantineInformationService } from '../services/quarantineGroupsServices'

export const useQuarantineActions = () => {

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
    return saveQuarantineGroups(quarantineGroups,idConfiguration)
  }

  return {
    getQuarantineGroupsAction,
    saveQuarantineGroupsForm,
    getQuarantineInformationAction,
    putQuarantineInformationAction
  }
  
}

