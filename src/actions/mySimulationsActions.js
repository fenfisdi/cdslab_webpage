import {
  MY_SIMULATION_DELETE,
  MY_SIMULATION_ERROR,
  MY_SIMULATION_LOADING,
  MY_SIMULATION_SELECT,
  MY_SIMULATION_SET_FILES,
  MY_SIMULATION_SET_LIST,
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
        const { response: { data } } = error
        errorSimulation(data)
      })
  }

  const getMySimulationsFiles = async (uidSimulations) => {
    dispatch({ type: MY_SIMULATION_EXECUTION_FALSE })
    dispatch({ type: MY_SIMULATION_LOADING })
    requestListSimulationsFiles(uidSimulations)
      .then(async({data}) => {
        if(data.data.length > 0) {
          const dataFiles = []
          data.data.map(async(file) => {
            const body = transformFile(uidSimulations,file)
            dataFiles.push({
              body:body,
              ...file
            })
          })
          dispatch({ type: MY_SIMULATION_SET_FILES, payload: dataFiles})
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
          errorSimulation(data)
        }else if (error.request) {
          dispatch({
            type: MY_SIMULATION_ERROR,
            payload:{ message:'The request was made but no response was received' }
          })
        }
      })
  }

  const transformFile = async(uidSimulations,file) => {
    const {data : dataInformationContent} = await downloadSimulationsFiles(uidSimulations,file.uuid)
    return dataInformationContent
  }
  
  const getMySimulationsDownloadFiles = async (uidSimulations,uuidFile) => {
    dispatch({ type: MY_SIMULATION_EXECUTION_FALSE })
    dispatch({ type: MY_SIMULATION_LOADING })
    downloadSimulationsFiles(uidSimulations,uuidFile)
      .then(({data}) => data)
      .catch((error) => {
        if(error.response) {
          const { response: { data } } = error
          errorSimulation(data)
          
        }else if (error.request) {
          dispatch({
            type: MY_SIMULATION_ERROR,
            payload:{ message:'The request was made but no response was received' }
          })
        }
        return error
      })
  }

  const deleteSimulation = async (row) => {
    dispatch({ type: MY_SIMULATION_EXECUTION_FALSE })
    dispatch({ type: MY_SIMULATION_LOADING })
    requestDeleteSimulations(row.identifier).then(() => {
      dispatch({ type: MY_SIMULATION_DELETE, payload: row.identifier })
    })
      .catch(({ response: { data } }) => {
        errorSimulation(data)
      })
  }

  const errorSimulation = (data) =>{
    dispatch({
      type: MY_SIMULATION_ERROR,
      payload: data
    })
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
