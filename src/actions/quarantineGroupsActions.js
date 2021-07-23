import { getQuarantineGroupsService,saveQuarantineGroups } from '../services/quarantineGroupsServices'

export const useQuarantineActions = () => {

  const getQuarantineGroupsAction =(idConfiguration)=>{
    return getQuarantineGroupsService(idConfiguration)
  }
  
  const saveQuarantineGroupsForm =(quarantineGroups,idConfiguration)=>{
    return saveQuarantineGroups(quarantineGroups,idConfiguration)
  }

  return {
    getQuarantineGroupsAction,
    saveQuarantineGroupsForm
  }
  
}

