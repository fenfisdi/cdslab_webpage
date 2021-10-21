import { 
  deletePopulationService, 
  getInformationByVariableConfiguredPopulationService, 
  getListAllowedGroupsService, 
  getListAllowedValuesService, 
  getListAllowedVariablesService, 
  getPopulationService, 
  postPopulationService } from '../services/InitialPopulationServices'


export const useInitialPopulationActions = (dispatch) => {

  const getListAllowedVariablesAction = (idConfiguration) =>{
    return getListAllowedVariablesService(idConfiguration)
  }

  const getListAllowedGroupsAction = (idConfiguration,variables)=>{
    return getListAllowedGroupsService(idConfiguration,variables)
  }

  const getListAllowedValuessAction = (idConfiguration,value)=>{
    return getListAllowedValuesService(idConfiguration,value)
  }
  
  const postPopulation = (idConfiguration,value)=>{
    return postPopulationService(idConfiguration,value)
  }

  const getPopulation = (idConfiguration)=>{
    return getPopulationService(idConfiguration)
  }

  const deletePopulation =(idConfiguration,value)=>{
    return deletePopulationService(idConfiguration,value)
  }

  const getInformationByVariableConfiguredPopulation =(idConfiguration,value)=>{
    return getInformationByVariableConfiguredPopulationService(idConfiguration,value)
  }
  
  return {
    getListAllowedVariablesAction,
    getListAllowedGroupsAction,
    getListAllowedValuessAction,
    postPopulation,
    getPopulation,
    deletePopulation,
    getInformationByVariableConfiguredPopulation
  }
  
}

