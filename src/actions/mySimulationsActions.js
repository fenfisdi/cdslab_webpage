import {
  MY_SIMULATION_DELETE,
  MY_SIMULATION_ERROR,
  MY_SIMULATION_LOADING,
  MY_SIMULATION_SELECT,
  MY_SIMULATION_SET_FILES,
  MY_SIMULATION_SET_LIST,
  MY_SIMULATION_FILE_SELECT,
  MY_SIMULATION_EXECUTION_TRUE,
  MY_SIMULATION_EXECUTION_FALSE
} from './types/mySimulationTypes'
import { 
  downloadSimulationsFiles,
  requestDeleteSimulations, 
  requestListSimulations, 
  requestListSimulationsFiles 
} from '../services/simulationsServices'

export const useMySimulationActions = (dispatch) => {

  const setActiveSimulation = (simulation) => {
    dispatch({ type: MY_SIMULATION_SELECT, payload: simulation })
  }

  const getMySimulations = async () => {
    dispatch({ type: MY_SIMULATION_EXECUTION_FALSE })
    dispatch({ type: MY_SIMULATION_LOADING })
    requestListSimulations()
      .then(({data}) => {
        const dataList = []
        data.data.map((elem) => {
          dataList.push({
            check : false,
            ...elem
          })
        })
        dispatch({ type: MY_SIMULATION_SET_LIST, payload: dataList })
      })
      .catch((error) => {
        if(error.response) {
          const { response: { data } } = error
          dispatch({
            type: MY_SIMULATION_ERROR,
            payload: data
          })
        }else if (error.request) {
          dispatch({
            type: MY_SIMULATION_ERROR,
            payload:{ message:'The request was made but no response was received' }
          })
        }
      })
  }

  const getMySimulationsFiles = async (uidSimulations) => {
    dispatch({ type: MY_SIMULATION_EXECUTION_FALSE })
    dispatch({ type: MY_SIMULATION_LOADING })
    requestListSimulationsFiles(uidSimulations)
      .then(({data}) => {
        console.log('Files :',data)
        if(data.data.length > 0) {
          dispatch({ type: MY_SIMULATION_SET_FILES, payload: data.data })
        }else{
          dispatch({
            type: MY_SIMULATION_ERROR,
            payload: data
          })
        }
      })
      .catch((error) => {
        if(error.response) {
          const { response: { data } } = error
          dispatch({
            type: MY_SIMULATION_ERROR,
            payload: data
          })
        }else if (error.request) {
          dispatch({
            type: MY_SIMULATION_ERROR,
            payload:{ message:'The request was made but no response was received' }
          })
        }
      })
  }

  const getMySimulationsDownloadFiles = async (uidSimulations,uidFile) => {
    dispatch({ type: MY_SIMULATION_EXECUTION_FALSE })
    dispatch({ type: MY_SIMULATION_LOADING })
    downloadSimulationsFiles(uidSimulations,uidFile)
      .then(({data}) => {
        console.log('Download :',data)
        dispatch({ type: MY_SIMULATION_FILE_SELECT, payload: data.data })
      })
      .catch((error) => {
        if(error.response) {
          const { response: { data } } = error
          dispatch({
            type: MY_SIMULATION_ERROR,
            payload: data
          })
        }else if (error.request) {
          dispatch({
            type: MY_SIMULATION_ERROR,
            payload:{ message:'The request was made but no response was received' }
          })
        }
      })
  }

  const deleteSimulation = async (row) => {
    dispatch({ type: MY_SIMULATION_EXECUTION_FALSE })
    console.log('entro delete',row)
    dispatch({ type: MY_SIMULATION_LOADING })
    try {
      requestDeleteSimulations(row.identifier).then((response) => {
        console.log('response',response)
        dispatch({ type: MY_SIMULATION_DELETE, payload: row.identifier })
      })
        .catch((error) => {
          if(error.response) {
            const { response: { data } } = error
            dispatch({
              type: MY_SIMULATION_ERROR,
              payload: data
            })
          }else if (error.request) {
            dispatch({
              type: MY_SIMULATION_ERROR,
              payload:{ message:'The request was made but no response was received' }
            })
          }
        })
    } catch (err) {
      const error = err.message
      dispatch({ type: MY_SIMULATION_ERROR, payload: error })
    }
  }

  const getExecution = async () => {
    dispatch({ type: MY_SIMULATION_EXECUTION_TRUE })
  }
  return { 
    setActiveSimulation, 
    getMySimulations, 
    deleteSimulation,
    getMySimulationsFiles,
    getMySimulationsDownloadFiles,
    getExecution
  }
}
