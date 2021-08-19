import { getListAllowedGroupsService, getListAllowedValuesService, getListAllowedVariablesService } from '../services/InitialPopulationServices'


export const useInitialPopulationActions = () => {

  const getListAllowedVariablesAction = (idConfiguration) =>{
    return getListAllowedVariablesService(idConfiguration)
  }

  const getListAllowedGroupsAction = (idConfiguration,variables)=>{
    return getListAllowedGroupsService(idConfiguration,variables)
  }

  const getListAllowedValuessAction = (idConfiguration,value)=>{
    return getListAllowedValuesService(idConfiguration,value)
  }
  
  return {
    getListAllowedVariablesAction,
    getListAllowedGroupsAction,
    getListAllowedValuessAction
  }
  
}

