import {
  QUARANTINE_GROUPS_LOADING,
  QUARANTINE_GROUPS_ERROR,
  QUARANTINE_GROUPS_SAVE,
  QUARANTINE_TRACING
} from '../../actions/types/quarantineGroupsTypes'

export const initialState = {
  quarantineGroups: {
    data: null,
    dataTracing: null,
    loading: false,
    error: false,
    errorData:null
  }
}

export const quarantineGroupsReducer = (state, action) => {
  switch (action.type) {
  case QUARANTINE_GROUPS_LOADING:
    return { ...state, loading: true, error: false, data: null }
  case QUARANTINE_GROUPS_ERROR:
    return { ...state, loading: false, error: true, errorData:action.payload }
  case QUARANTINE_GROUPS_SAVE:
    return {
      ...state,
      loading: false,
      data: action.payload
    }
  case QUARANTINE_TRACING:
    return {
      ...state,
      loading: false,
      dataTracing: action.payload
    }
  default:
    return state
  }
}
