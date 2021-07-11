import {
  DISTRIBUTION_SET_LIST,
  DISTRIBUTION_PARAMETERS_SET_LIST,
  DISTRIBUTION_LOADING,
  DISTRIBUTION_ERROR
} from '../../actions/types/distributionTypes'

export const initialState = {
  distribution: {
    distributionList: [],
    parameterList: {},
    loading: false,
    error: null
  }
}

export const distributionReducer = (state, action) => {
  switch (action.type) {
  case DISTRIBUTION_SET_LIST:
    return {
      ...state,
      loading: false,
      error: null,
      distributionList: action.payload
    }
  case DISTRIBUTION_PARAMETERS_SET_LIST:
    return {
      ...state,
      loading: false,
      error: null,
      parameterList: {...state.parameterList,[action.payload.name]:action.payload}
    }  
  case DISTRIBUTION_LOADING:
    return { ...state, loading: true, error: null }   
  case DISTRIBUTION_ERROR:
    return { ...state, loading: false, error: action.payload } 
  default:
    return state
  }
}
