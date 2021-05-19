
import {
  COMPARTMENTAL_MODEL_GET_FIXED_PARAMETERS_FORM_FIELDS_ERROR,
  COMPARTMENTAL_MODEL_GET_FIXED_PARAMETERS_FORM_FIELDS_SUCCESS,
  COMPARTMENTAL_MODEL_EXECUTE_SIMULATION_ERROR,
  COMPARTMENTAL_MODEL_EXECUTE_SIMULATION_SUCCESS,
  COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_ERROR,
  COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_SUCCESS,
  COMPARTMENTAL_MODEL_LOADING,
  COMPARTMENTAL_MODEL_NEXT_STEP_FILE_UPLOAD_PROPERTY,
  COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_ERROR,
  COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_SUCCESS,
  COMPARTMENTAL_MODEL_STORE_PREDEFINED_MODEL_SELECTED,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_ERROR,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_ERROR,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_LOADER,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_SUCCESS,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_FOLDER_ERROR,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_FOLDER_LOAD,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_FOLDER_SUCCESS,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_SUCCESS
} from '../../actions/types/compartmentalModelTypes'


export const initialState = {
  compartmentalModel: {
    configuredParameters: {
      data: null,
      error: null,
      errorData: null,
    },
    predefinedModels: {
      data: null,
      error: null,
      errorData: null,
    },
    predefinedModelSelected:{},
    currentSimulation:{
      data: null,
      error: null,
      errorData: null,
    },
    simulationFolderInformation:{
      data: null,
      error: null,
      errorData: null,
      loadingSimulationFolderInformation: false
    },
    simulationFileUpload:{
      data: null,
      error: null,
      errorData: null,
      loadingSimulationFileUpload: false,
      nextStep:false
    },
    fixedParametersFormFields:{
      data: null,
      error: null,
      errorData: null,
      loadingFixedParametersFormFields: false,     
    },
    simulationExecuted:{
      data: null,
      error: null,
      errorData: null,
    },
    loading: false
  }
}

export const compartmentalModelReducer = (state, action) => {
  switch (action.type) { 
  case COMPARTMENTAL_MODEL_LOADING: 
    return { ...state, loading: true }

  case COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_ERROR:
    return {
      ...state, loading: false, sendEmailData: { error: true, errorData: action.payload }
    }

  case COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_SUCCESS:
    return {
      ...state, loading: false, sendEmailData: { error: false, data: action.payload }
    }

  case COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_ERROR:
    return {
      ...state, loading: false, predefinedModels: { ...state.predefinedModels, error: true, errorData: action.payload }
    }

  case COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_SUCCESS:
    return {
      ...state, loading: false, predefinedModels: { ...state.predefinedModels, error: false, data: action.payload }
    }

  case COMPARTMENTAL_MODEL_STORE_PREDEFINED_MODEL_SELECTED:
    return {
      ...state, loading: false, predefinedModelSelected: action.payload 
    }

  case COMPARTMENTAL_MODEL_STORE_SIMULATION_ERROR:
    return {
      ...state, loading: false, currentSimulation: { ...state.currentSimulation, error: true, errorData: action.payload }
    }

  case COMPARTMENTAL_MODEL_STORE_SIMULATION_SUCCESS:
    return {
      ...state, loading: false, currentSimulation: { ...state.currentSimulation, error: false, data: action.payload }
    }

  case COMPARTMENTAL_MODEL_STORE_SIMULATION_FOLDER_ERROR:
    return {
      ...state, loading: false, simulationFolderInformation: { ...state.simulationFolderInformation, error: true, errorData: action.payload, loadingSimulationFolderInformation:false }
    }

  case COMPARTMENTAL_MODEL_STORE_SIMULATION_FOLDER_SUCCESS:
    return {
      ...state, loading: false, simulationFolderInformation: { ...state.simulationFolderInformation, error: false, data: action.payload, loadingSimulationFolderInformation:false }
    }

  case COMPARTMENTAL_MODEL_STORE_SIMULATION_FOLDER_LOAD:
    return {
      ...state, loading: false, simulationFolderInformation: { ...state.simulationFolderInformation, loadingSimulationFolderInformation:action.payload }
    }

  case COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_ERROR:
    return {
      ...state, loading: false, simulationFileUpload: { ...state.simulationFileUpload, error: true, errorData: action.payload, loadingSimulationFileUpload:false }
    }

  case COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_SUCCESS:
    return {
      ...state, 
      loading: false, 
      currentSimulation: { 
        ...state.currentSimulation, 
        error: false, 
        data: action.payload.simulationStore },
      simulationFileUpload: { 
        ...state.simulationFileUpload, 
        error: false, 
        data: action.payload.fileStore, 
        loadingSimulationFileUpload:false,
        nextStep:true
      }      
    }

  case COMPARTMENTAL_MODEL_STORE_SIMULATION_FILE_LOADER:
    return {
      ...state, loading: false, simulationFileUpload: { ...state.simulationFileUpload, loadingSimulationFileUpload:action.payload }
    }

  case COMPARTMENTAL_MODEL_NEXT_STEP_FILE_UPLOAD_PROPERTY:
    return {
      ...state, loading: false, simulationFileUpload: { ...state.simulationFileUpload, nextStep:action.payload }
    } 

  case COMPARTMENTAL_MODEL_GET_FIXED_PARAMETERS_FORM_FIELDS_ERROR:
    return {
      ...state, loading: false, 
      fixedParametersFormFields: {
        ...state.fixedParametersFormFields, 
        error: true, 
        errorData: action.payload, 
        loadingFixedParametersFormFields:false }
    }

  case COMPARTMENTAL_MODEL_GET_FIXED_PARAMETERS_FORM_FIELDS_SUCCESS:
    return {
      ...state, loading: false, 
      fixedParametersFormFields: {
        ...state.fixedParametersFormFields, 
        error: false, 
        data: action.payload, 
        loadingFixedParametersFormFields:false }
    }
        
  case COMPARTMENTAL_MODEL_EXECUTE_SIMULATION_ERROR:
    return {
      ...state, loading: false, 
      simulationExecuted: { ...state.simulationExecuted, error: true, errorData: action.payload }
    }

  case COMPARTMENTAL_MODEL_EXECUTE_SIMULATION_SUCCESS:
    return {
      ...state, loading: false, 
      simulationExecuted: { ...state.simulationExecuted, error: false, data: action.payload }
    }
    

  default:
    return state
  }
}
