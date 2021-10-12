
import { getQuarantineGroupsService, 
  getQuarantineInformationService,
  saveQuarantineGroups, 
  putQuarantineInformationService } from '../services/quarantineGroupsServices'


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
    return  new Promise((resolve,reject) => {
      saveQuarantineGroups(quarantineGroups,idConfiguration).then(({data}) => {        
        resolve(data.data)
      })
        .catch((error) => {          
          reject(error)
        })
     
    })
  }

  return {
    getQuarantineGroupsAction,
    saveQuarantineGroupsForm,
    getQuarantineInformationAction,
    putQuarantineInformationAction
  }
  
}

