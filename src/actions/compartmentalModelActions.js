import { 
  findCompartmentalSimulationService, 
  findPredefinedModelService, 
  getPredefinedModelsService, 
  storeCompartmentalSimulationService, 
  updateCompartmentalSimulationService,
  storeCompartmentalSimulationFolderService, 
  storeCompartmentalFileUploadService,
  executeSimulationService} from '../services/compartmentalModelServices'
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
  COMPARTMENTAL_MODEL_EXECUTE_SIMULATION_ERROR
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

  const getPredefinedModels = () => {  
    
    getPredefinedModelsService()
      .then((response) => {
        dispatch({
          type: COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_SUCCESS,
          payload: response.data.data
        })
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

  const storeCompartmentalFileUpload = (simulation,idSimulation,file)=>{
    registerLoaderCompartmentalSimulationFile(true)
    updateCompartmentalSimulationService(simulation,idSimulation).then((responseSimulation)=>{ 
      storeCompartmentalFileUploadService(idSimulation,file).then((responseFile)=>{
        dispatch({
          type: COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_SUCCESS,
          payload: {fileStore:responseFile.data.data, simulationStore:responseSimulation.data.data}
        })
        registerLoaderCompartmentalSimulationFile(false)
      }).catch((erroFile)=>{
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

  const updateCompartmentalSimulation = (simulation,idSimulation) => {
    updateCompartmentalSimulationService(simulation,idSimulation).then((response) => {
      registerCompartmentalSimulation(response.data.data)
    }).catch((error) => {
      registerErrorCompartmentalSimulation(error)
    })
  }

  const executeSimulation =(idSimulation)=>{
    executeSimulationService(idSimulation).then((response)=>{
      dispatch({
        type: COMPARTMENTAL_MODEL_EXECUTE_SIMULATION_SUCCESS,
        payload: response.data.data
      })
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
    executeSimulation }


}
