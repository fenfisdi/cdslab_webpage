
import { AGENTS_MOBILITY_GROUPS_MODEL_GET_INFORMATION_ERROR, AGENTS_MOBILITY_GROUPS_MODEL_GET_INFORMATION_SUCCESS, AGENTS_MOBILITY_GROUPS_MODEL_RESET_INFORMATION_SUCCESS } from '../../actions/types/agentsMobilityGroupsTypes'

export const initialState = {
  agentsMobilityGroupsModel: {
    data:null,
    error:false,
    errorData:null,
    loading: false
  }
}

export const agentsMobilityGroupsModelReducer = (state, action) => {
  switch (action.type) { 
    
  case AGENTS_MOBILITY_GROUPS_MODEL_GET_INFORMATION_SUCCESS:
    return {
      ...state, 
      loading: false, 
      data: action.payload.data,
      error:false,
      errorData:null
    }

  case AGENTS_MOBILITY_GROUPS_MODEL_GET_INFORMATION_ERROR:
    return {
      ...state, 
      loading: false,
      data:null, 
      error:true,
      errorData:action.payload.message,
    }

  case AGENTS_MOBILITY_GROUPS_MODEL_RESET_INFORMATION_SUCCESS:
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
