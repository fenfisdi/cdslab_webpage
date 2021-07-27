import { getListAllowedVariablesService } from '../services/InitialPopulationServices'


export const useInitialPopulationActions = () => {

  const getListAllowedVariablesAction = (idConfiguration) =>{
    return getListAllowedVariablesService(idConfiguration)
  }

 
  
  return {
    getListAllowedVariablesAction
  }
  
}

