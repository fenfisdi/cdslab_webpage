
import { AGENTS_MODEL_REGISTER_ERROR, AGENTS_MODEL_REGISTER_SUCCESS } from '../../actions/types/agentsModelTypes'


export const initialState = {
  agentsModel: {
    data:{},
    error:{},
    loading: false
  }
}

export const agentsModelReducer = (state, action) => {
  switch (action.type) { 
    
  case AGENTS_MODEL_REGISTER_SUCCESS:
    return {
      ...state, 
      loading: false, 
      data: action.payload
    }

  case AGENTS_MODEL_REGISTER_ERROR:
    return {
      ...state, 
      loading: false, 
      error:action.payload
    }
        
  default:
    return state
  }
}
