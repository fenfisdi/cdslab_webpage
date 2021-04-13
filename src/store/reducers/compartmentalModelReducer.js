
import { COMPARTMENTAL_MODEL_LOADING, 
  COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_ERROR, 
  COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_SUCCESS } from '../../actions/types/compartmentalModelTypes'


export const initialState = {
  compartmentalModel: {
    configuredParameters:{
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
      ...state, loading: false, sendEmailData:{ error: true, errorData: action.payload } 
    }

  case COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_SUCCESS:
    return {
      ...state, loading: false, sendEmailData:{ error:false, data: action.payload }
    }

  default:
    return state
  }
}
