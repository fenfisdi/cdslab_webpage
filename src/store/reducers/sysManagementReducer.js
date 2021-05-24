import {
  LOAD_SYS_MANAGEMENT_TABLE_DATA,
  SYS_MANAGEMENT_LOADING
} from '../../actions/types/sysManagementTypes'

export const initialState = {
  sysManagement: {
    sysManagementTableData: '',
    loading: false
  }
}

export const sysManagementReducer = (state, action) => {
  switch (action.type) {
  case SYS_MANAGEMENT_LOADING:
    return {
      ...state,
      sysManagement: {
        loading: true
      }
    }
  
  case LOAD_SYS_MANAGEMENT_TABLE_DATA:
    return {
      ...state,
      sysManagement: {
        loading: false,
        sysManagementTableData: action.payload
      }
    }

  default:
    return state
  }
}