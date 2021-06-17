import { 
  findCompartmentalSimulationService, 
  findPredefinedModelService, 
  getPredefinedModelsService, 
  storeCompartmentalSimulationService, 
  updateCompartmentalSimulationService,
  storeCompartmentalSimulationFolderService, 
  storeCompartmentalFileUploadService,
  executeSimulationService,
  getInsParametersVariablesService,
  getInsParametersRegionsService,
  getInsParametersDatesService,
  getInformationInsService,
  postInformationInsService} from '../services/compartmentalModelServices'
import {
  COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_ERROR,
  COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_SUCCESS,
  COMPARTMENTAL_MODEL_STORE_PREDEFINED_MODEL_SELECTED,
  COMPARTMENTAL_MODEL_LOADING,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_SUCCESS,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_ERROR,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_FOLDER_SUCCESS,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_FOLDER_ERROR,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_FOLDER_LOAD,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_LOADER,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_ERROR,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_SUCCESS,
  COMPARTMENTAL_MODEL_NEXT_STEP_FILE_UPLOAD_PROPERTY,
  COMPARTMENTAL_MODEL_EXECUTE_SIMULATION_SUCCESS,
  COMPARTMENTAL_MODEL_EXECUTE_SIMULATION_ERROR,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_UPDATE_FILE_DATA,
  COMPARTMENTAL_MODEL_CHOOSE_DATA_SOURCE_UPLOAD_PROPERTY,
  COMPARTMENTAL_MODEL_GET_INS_PARAMETERS_VARIABLES_ERROR,
  COMPARTMENTAL_MODEL_GET_INS_PARAMETERS_VARIABLES_SUCCESS,
  COMPARTMENTAL_MODEL_GET_INS_PARAMETERS_REGIONS_SUCCESS,
  COMPARTMENTAL_MODEL_GET_INS_PARAMETERS_REGIONS_ERROR
} from './types/compartmentalModelTypes'

export const useCompartmentalModelActions = (dispatch) => {
  /**
     * @param {*} userForm {username, name, lastname}
     * @param {*} userQrValidation {username, name, lastname}
     */
  const registerModelParameters = () => {
    dispatch({ type: COMPARTMENTAL_MODEL_LOADING })
  }

  const  registerCompartmentalModelStore = (response) => {
    dispatch({
      type: COMPARTMENTAL_MODEL_STORE_SIMULATION_SUCCESS,
      payload: response.data.data
    })
  }

  const registerCompartmentalSimulation = (data) =>{
    dispatch({
      type: COMPARTMENTAL_MODEL_STORE_SIMULATION_SUCCESS,
      payload: data
    })
  }

  const registerErrorCompartmentalSimulation =(error)=>{
    if (error.response) {
      const { response: { data } } = error
      dispatch({
        type: COMPARTMENTAL_MODEL_STORE_SIMULATION_ERROR,
        payload: data
      })
    }else if(error.request) {
      dispatch({
        type: COMPARTMENTAL_MODEL_STORE_SIMULATION_ERROR,
        payload:{detail:'The request was made but no response was received'}
      })
    }
  }

  const  registerLoadCompartmentalSimulationFolder = (loader) => {
    dispatch({
      type: COMPARTMENTAL_MODEL_STORE_SIMULATION_FOLDER_LOAD,
      payload: loader
    })
  }

  const  registerLoaderCompartmentalSimulationFile = (loader) => {
    dispatch({
      type: COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_LOADER,
      payload: loader
    })
  }

  const  setDefinitionDataGetPredefinedModels = (data) => {
    dispatch({
      type: COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_SUCCESS,
      payload: data
    })
  }

  const getPredefinedModels = () => {  
    
    getPredefinedModelsService()
      .then((response) => {
        setDefinitionDataGetPredefinedModels(response.data.data)
      })
      .catch((error) => {
        if (error.response) {
          const { response: { data } } = error
          dispatch({
            type: COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_ERROR,
            payload: data
          })
        } else if (error.request) {
          dispatch({
            type: COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_ERROR,
            payload:{detail:'The request was made but no response was received'}
          })
        }
      })
  }

  const storePredefinedModelSelected =(predefinedModel)=>{
    dispatch({
      type: COMPARTMENTAL_MODEL_STORE_PREDEFINED_MODEL_SELECTED,
      payload: predefinedModel
    })
  }

  const setDefinitionCompartmentalSimulation = (simulation) => {
    dispatch({
      type: COMPARTMENTAL_MODEL_STORE_SIMULATION_SUCCESS,
      payload: simulation
    })
  }

  const setDefinitionCompartmentalFolderSimulation =(data)=>{
    dispatch({
      type: COMPARTMENTAL_MODEL_STORE_SIMULATION_FOLDER_SUCCESS,
      payload: data
    })
  }

  const setDefinitionCompartmentalExecuteSimulation =(data)=>{
    dispatch({
      type: COMPARTMENTAL_MODEL_EXECUTE_SIMULATION_SUCCESS,
      payload: data
    })
  }

  const storeCompartmentalFileUpload = (simulation,idSimulation,file)=>{
    registerLoaderCompartmentalSimulationFile(true)
    storeCompartmentalFileUploadService(idSimulation,file).then((responseFile)=>{
      updateCompartmentalSimulationService(simulation,idSimulation).then((responseSimulation)=>{ 
        dispatch({
          type: COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_SUCCESS,
          payload: {fileStore:responseFile.data.data, simulationStore:responseSimulation.data.data}
        })
        registerLoaderCompartmentalSimulationFile(false)
      })
        .catch((erroFile)=>{
          registerLoaderCompartmentalSimulationFile(false)
          if(erroFile.response) {          
            const {response:{data}}=erroFile                    
            dispatch({
              type: COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_ERROR,
              payload: data 
            })
          }else if(erroFile.request){
            dispatch({
              type: COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_ERROR,
              payload:{detail:'The request was made but no response was received'}
            })
          }
        })
    }).catch((error) => {
      registerLoaderCompartmentalSimulationFile(false)
      registerErrorCompartmentalSimulation(error)
    })
    
  }

  const updateNextStepFileUploadProperty =(nextStep)=>{
    dispatch({
      type: COMPARTMENTAL_MODEL_NEXT_STEP_FILE_UPLOAD_PROPERTY,
      payload: nextStep
    })
  }

  const updateChooseDataSourceProperty =(data)=>{
    dispatch({
      type: COMPARTMENTAL_MODEL_CHOOSE_DATA_SOURCE_UPLOAD_PROPERTY,
      payload: data
    })
  }
  
  const setDefinitionFileDataProperty =(data)=>{
    dispatch({
      type:COMPARTMENTAL_MODEL_STORE_SIMULATION_UPDATE_FILE_DATA,
      payload:data
    })
  }


  const storeCompartmentalSimulation =(simulation)=>{
    registerLoadCompartmentalSimulationFolder(true)
    storeCompartmentalSimulationService(simulation).then((response)=>{      
      registerCompartmentalModelStore(response)
    }).catch((error) => {
      registerLoadCompartmentalSimulationFolder(false)
      registerErrorCompartmentalSimulation(error)
    })
  }

  const storeCompartmentalSimulationFolder =(idSimulation)=>{
    storeCompartmentalSimulationFolderService(idSimulation).then((response)=>{  
      registerLoadCompartmentalSimulationFolder(false)    
      setDefinitionCompartmentalFolderSimulation(response.data.data)
    }).catch((error) => {
      registerLoadCompartmentalSimulationFolder(false)
      if(error.response) {          
        const {response:{data}}=error                    
        dispatch({
          type: COMPARTMENTAL_MODEL_STORE_SIMULATION_FOLDER_ERROR,
          payload: data 
        })
      }else if(error.request){
        dispatch({
          type: COMPARTMENTAL_MODEL_STORE_SIMULATION_FOLDER_ERROR,
          payload:{detail:'The request was made but no response was received'}
        })
      }
    })
  }

  const findCompartmentalSimulation =(idSimulation)=>{
    
    findCompartmentalSimulationService(idSimulation).then((response)=>{      
      registerCompartmentalModelStore(response)
    })
  }

  const findPredefinedModel = ({ model_id: idModel,simulationName }) => {
    findPredefinedModelService(idModel).then((response) => {
      const modelData = response.data.data
      storePredefinedModelSelected({modelData,simulationName})
    })
  }

  const updateCompartmentalSimulation = (simulation,idSimulation, callback=null) => {
    updateCompartmentalSimulationService(simulation,idSimulation).then((response) => {
      registerCompartmentalSimulation(response.data.data)
      console.log('holaaaaaaaaaaaaaa')
      if(callback){
        callback()
      }
    }).catch((error) => {
      registerErrorCompartmentalSimulation(error)
    })
  }

  const updateSimulationDate =(simulation,idSimulation)=>{
    return updateCompartmentalSimulationService(simulation,idSimulation)
  }

  
  const executeSimulation =(idSimulation)=>{
    executeSimulationService(idSimulation).then((response)=>{      
      setDefinitionCompartmentalExecuteSimulation(response.data.data)
    }).catch((error)=>{
      if (error.response) {
        const { response: { data } } = error
        dispatch({
          type: COMPARTMENTAL_MODEL_EXECUTE_SIMULATION_ERROR,
          payload: data
        })
      }else if(error.request) {
        dispatch({
          type: COMPARTMENTAL_MODEL_EXECUTE_SIMULATION_ERROR,
          payload:{detail:'The request was made but no response was received'}
        })
      }
    })
  }


  const getInsParametersVariables = ()=>{
    getInsParametersVariablesService().then((response)=>{
      dispatch({
        type: COMPARTMENTAL_MODEL_GET_INS_PARAMETERS_VARIABLES_SUCCESS,
        payload: response.data.data
      })
    }).catch((error)=>{
      if (error.response) {
        const { response: { data } } = error
        dispatch({
          type: COMPARTMENTAL_MODEL_GET_INS_PARAMETERS_VARIABLES_ERROR,
          payload: data
        })
      }else if(error.request) {
        dispatch({
          type: COMPARTMENTAL_MODEL_GET_INS_PARAMETERS_VARIABLES_ERROR,
          payload:{detail:'The request was made but no response was received'}
        })
      }
    })
  }

  const getInsParametersRegions = ()=>{
    getInsParametersRegionsService().then((response)=>{
      dispatch({
        type: COMPARTMENTAL_MODEL_GET_INS_PARAMETERS_REGIONS_SUCCESS,
        payload: response.data.data
      })
    }).catch((error)=>{
      if (error.response) {
        const { response: { data } } = error
        dispatch({
          type: COMPARTMENTAL_MODEL_GET_INS_PARAMETERS_REGIONS_ERROR,
          payload: data
        })
      }else if(error.request) {
        dispatch({
          type: COMPARTMENTAL_MODEL_GET_INS_PARAMETERS_REGIONS_ERROR,
          payload:{detail:'The request was made but no response was received'}
        })
      }
    })
  }

  const getInsParametersDates = (region)=>{
    const { hash } = region
    return getInsParametersDatesService(hash)
  }

  const getInformationIns = (data)=>{
    const {
      finalDate,
      initialDate,
      regionChoose:{
        hash 
      }
    } = data
    return getInformationInsService(hash,initialDate,finalDate)
  }

  const postInformationIns = ({initialDate,finalDate,identifier,regionName,variable })=>{
    return postInformationInsService(initialDate,finalDate,identifier,regionName,variable )
  }


  return {
    registerModelParameters,
    getPredefinedModels,
    storePredefinedModelSelected,
    storeCompartmentalSimulation,
    findCompartmentalSimulation,
    findPredefinedModel,
    setDefinitionCompartmentalSimulation,
    updateCompartmentalSimulation,
    storeCompartmentalSimulationFolder,
    storeCompartmentalFileUpload,
    setDefinitionCompartmentalFolderSimulation,
    updateNextStepFileUploadProperty,
    updateChooseDataSourceProperty,
    executeSimulation,
    setDefinitionCompartmentalExecuteSimulation,
    setDefinitionFileDataProperty,
    setDefinitionDataGetPredefinedModels,
    getInsParametersVariables,
    getInsParametersRegions,
    getInsParametersDates,
    getInformationIns,
    postInformationIns,
    updateSimulationDate }


}
