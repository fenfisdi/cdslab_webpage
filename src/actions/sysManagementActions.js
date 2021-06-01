import { getProcessTimeTableData } from '../services/sysManagementServices'
import {
  LOAD_SYS_MANAGEMENT_TABLE_DATA,
  SYS_MANAGEMENT_LOADING
} from './types/sysManagementTypes'

export const useSysManagementActions = (dispatch) => {
  const loadProcessTimeTableData = () => {
    dispatch({ type: SYS_MANAGEMENT_LOADING })
    getProcessTimeTableData()
      .then((response) => {
        console.log(response)
        dispatch({
          type: LOAD_SYS_MANAGEMENT_TABLE_DATA,
          payload: response
        })
      })
      .catch((error) => {
        console.log(error)
        console.log(error)
      })
  }

  return { loadProcessTimeTableData }
}