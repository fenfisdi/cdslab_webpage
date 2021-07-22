import { getQuarantineGroupsService } from '../services/quarantineGroupsServices'

export const useQuarantineActions = () => {

  const getQuarantineGroupsAction =(idConfiguration)=>{
    return getQuarantineGroupsService(idConfiguration)
  }
  
  return {
    getQuarantineGroupsAction
  }
  
}

