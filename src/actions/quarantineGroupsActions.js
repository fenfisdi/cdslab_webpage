import { getQuarantineGroupsService, getQuarantineInformationService, putQuarantineInformationService } from '../services/quarantineGroupsServices'

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
  
  return {
    getQuarantineGroupsAction,
    getQuarantineInformationAction,
    putQuarantineInformationAction
  }
  
}

