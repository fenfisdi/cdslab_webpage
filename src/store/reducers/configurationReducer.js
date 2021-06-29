import {
  CONFIGURATION_DELETE,
  CONFIGURATION_ADD,
  CONFIGURATION_ERROR,
  CONFIGURATION_LOADING,
  CONFIGURATION_SELECT,
  CONFIGURATION_SET_LIST,
  CONFIGURATION_DISTANCE_LIST,
  CONFIGURATION_TIME_LIST,
  CONFIGURATION_DISEASE_STATE
} from '../../actions/types/configurationTypes'

export const initialState = {
  configuration: {
    data: {},
    listConfiguration: [],
    listConfigurationDistance:[],
    listConfigurationTime: [],
    configurationSelected: null,
    loading: false,
    error: null,
    listDiseaseState:[]
  }
}

export const configurationReducer = (state, action) => {
  switch (action.type) {
  case CONFIGURATION_LOADING:
    return { ...state, loading: true, error: null }
  case CONFIGURATION_ERROR:
    return { ...state, loading: false, error: action.payload }
  case CONFIGURATION_SET_LIST:
    return {
      ...state,
      loading: false,
      error: null,
      listConfiguration: action.payload
    }
  case CONFIGURATION_ADD:
    return {
      ...state,
      loading: false,
      error: null,
      data: action.payload,
      listConfiguration: [...state.listConfiguration, action.payload]
    }    
  case CONFIGURATION_DISTANCE_LIST:
    return {
      ...state,
      loading: false,
      error: null,
      listConfigurationDistance: action.payload
    }  
  case CONFIGURATION_TIME_LIST:
    return {
      ...state,
      loading: false,
      error: null,
      listConfigurationTime: action.payload
    }    
  case CONFIGURATION_DISEASE_STATE :
    return {
      ...state,
      loading: false,
      error: null,
      listDiseaseState: action.payload
    }    
  case CONFIGURATION_SELECT:
    return {
      ...state,
      configurationSelected: action.payload
    }
  case CONFIGURATION_DELETE:
    return {
      ...state,
      loading: false,
      listConfiguration: [...state.listConfiguration.slice(0, action.payload), ...state.listConfiguration.slice(action.payload + 1)]
    }
  default:
    return state
  }
}
