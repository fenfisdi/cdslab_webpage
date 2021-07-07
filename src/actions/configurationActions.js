import {
  CONFIGURATION_ADD,
  CONFIGURATION_ERROR,
  CONFIGURATION_LOADING,
  CONFIGURATION_SET_LIST,
  CONFIGURATION_DISTANCE_LIST,
  CONFIGURATION_TIME_LIST,
  CONFIGURATION_DISEASE_STATE,
} from './types/configurationTypes'

import { 
  requestListConfiguration,
  requestListConfigurationDistance,
  requestListConfigurationTime,
  requestAddConfiguration
} from '../services/configurationServices'
import ListDistance from '../helpers/useDataStateDimises'

export const useConfigurationActions = (dispatch) => {

  const getListConfiguration =  () => {
    dispatch({ type: CONFIGURATION_LOADING })
    requestListConfiguration()
      .then(({data}) => {
        dispatch({ type: CONFIGURATION_SET_LIST, payload: data.data })
      })
      .catch(() => {
        dispathError()
      })
  }

  const getListConfigurationDistance =  (listDiseaseState) => {
    dispatch({ type: CONFIGURATION_LOADING })
    requestListConfigurationDistance()
      .then(({data}) => {
        let dataList = []
        for (const property in data.data) {
          dataList.push({value: data.data[property],label: data.data[property]})
        }
        if(listDiseaseState){
          dataList = ListDistance(dataList)
          dispatch({ type: CONFIGURATION_DISEASE_STATE, payload: dataList })
        }
        dispatch({ type: CONFIGURATION_DISTANCE_LIST, payload: dataList })
      })
      .catch(() => {
        dispathError()
      })
  }

  const getListConfigurationTime =  () => {
    dispatch({ type: CONFIGURATION_LOADING })
    requestListConfigurationTime()
      .then(({data}) => {
        const dataList = []
        for (const property in data.data) {
          dataList.push({value: data.data[property],label: data.data[property]})
        }
        dispatch({ type: CONFIGURATION_TIME_LIST, payload: dataList })
      })
      .catch(() => {
        dispathError()
      })
  }

  const addConfiguration = (configurationForm) => {
    dispatch({ type: CONFIGURATION_LOADING })
    requestAddConfiguration(configurationForm)
      .then(({data}) => {
        dispatch({ type: CONFIGURATION_ADD, payload: data.data })
      })
      .catch(() => {
        dispathError()
      })
  }

  const dispathError = () => {
    dispatch({
      type: CONFIGURATION_ERROR,
      payload: 'Error configuration'
    })
  }
 
  return {
    getListConfiguration,
    getListConfigurationDistance,
    getListConfigurationTime,
    addConfiguration
  }
}
