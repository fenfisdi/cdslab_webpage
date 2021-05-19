import {
  MY_SIMULATION_DELETE,
  MY_SIMULATION_ERROR,
  MY_SIMULATION_LOADING,
  MY_SIMULATION_SELECT,
  MY_SIMULATION_SET_LIST
} from './types/mySimulationTypes'
import { useStore } from '../store/storeContext'
import { requestListSimulations } from '../services/simulationsServices'

export const useMySimulationActions = (dispatch) => {
  const {
    state: {
      mySimulations: { simulations }
    }
  } = useStore()

  const setActiveSimulation = (simulation) => {
    dispatch({ type: MY_SIMULATION_SELECT, payload: simulation })
  }

  const getMySimulations = async () => {
    
    dispatch({ type: MY_SIMULATION_LOADING })
    requestListSimulations()
      .then((response) => {
        console.log(response)
        dispatch({ type: MY_SIMULATION_SET_LIST, payload: response.data.data })
      })
      .catch((error) => {
        console.log(error)
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
  const deleteSimulation = async (id) => {
    dispatch({ type: MY_SIMULATION_LOADING })
    try {
      // TODO call api to delete simulation
      const idx = simulations.findIndex(s => s._id === id)
      if (idx >= 0) {
        dispatch({ type: MY_SIMULATION_DELETE, payload: idx })
      }
    } catch (err) {
      const error = err.message
      dispatch({ type: MY_SIMULATION_ERROR, payload: error })
    }
  }

  return { setActiveSimulation, getMySimulations, deleteSimulation }
}
