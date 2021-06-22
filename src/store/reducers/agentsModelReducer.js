
import { AGENTS_AGE_MODEL_GET_INFORMATION_ERROR, AGENTS_AGE_MODEL_GET_INFORMATION_SUCCESS } from '../../actions/types/agentsModelTypes'


export const initialState = {
  agentsAgeModel: {
    data:[],
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
      data:[], 
      error:true,
      errorData:action.payload.message,
    }
        
  default:
    return state
  }
}
