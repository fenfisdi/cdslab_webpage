
import { AGENTS_AGE_MODEL_GET_INFORMATION_ERROR, AGENTS_AGE_MODEL_GET_INFORMATION_SUCCESS, AGENTS_AGE_MODEL_RESET_INFORMATION_SUCCESS } from '../../actions/types/agentsModelTypes'


export const initialState = {
  agentsAgeModel: {
    data:null,
    error:false,
    errorData:null,
    loading: false
  }
}

export const agentsAgeModelReducer = (state, action) => {
  switch (action.type) { 
    
  case AGENTS_AGE_MODEL_GET_INFORMATION_SUCCESS:
    return {
      ...state, 
      loading: false, 
      data: action.payload.data,
      error:false,
      errorData:null
    }

  case AGENTS_AGE_MODEL_GET_INFORMATION_ERROR:
    return {
      ...state, 
      loading: false,
      data:null, 
      error:true,
      errorData:action.payload.message,
    }

  case AGENTS_AGE_MODEL_RESET_INFORMATION_SUCCESS:
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
