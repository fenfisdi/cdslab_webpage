import { 
  AGENTS_DISEASE_STATE_MODEL_GET_INFORMATION_ERROR, 
  AGENTS_DISEASE_STATE_MODEL_GET_INFORMATION_SUCCESS, 
  AGENTS_DISEASE_STATE_MODEL_RESET_INFORMATION_SUCCESS } from '../../actions/types/agentsDiseaseStateGroupsTypes'


export const initialState = {
  agentsDiseaseStateGroups: {
    data:null,
    error:false,
    errorData:null,
    loading: false
  }
}

export const agentsDiseaseStatesGroupsReducer = (state, action) => {
  switch (action.type) { 
    
  case AGENTS_DISEASE_STATE_MODEL_GET_INFORMATION_SUCCESS:
    return {
      ...state, 
      loading: false, 
      data: action.payload.data,
      error:false,
      errorData:null
    }

  case AGENTS_DISEASE_STATE_MODEL_GET_INFORMATION_ERROR:
    return {
      ...state, 
      loading: false,
      data:null, 
      error:true,
      errorData:action.payload.message,
    }

  case AGENTS_DISEASE_STATE_MODEL_RESET_INFORMATION_SUCCESS:
    return {
      ...state, 
      data:null,
      error:false,
      errorData:null,
      loading: false
    }
        
  default:
    return state
  }
}
