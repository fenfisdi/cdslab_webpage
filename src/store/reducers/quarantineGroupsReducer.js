import {
  QUARANTINE_GROUPS_LOADING,
  QUARANTINE_GROUPS_ERROR,
  QUARANTINE_GROUPS_SAVE
} from '../../actions/types/quarantineGroupsTypes'

export const initialState = {
  quarantineGroups: {
    data: null,
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
  default:
    return state
  }
}
