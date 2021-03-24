import {
  SIMULATION_ADD, SIMULATION_DELETE,
  SIMULATION_ERROR,
  SIMULATION_LOADING,
  SIMULATION_SELECT,
  SIMULATION_SET_LIST
} from './types/simulationTypes'
import { SIMULATIONS } from '../utils/dataTest'
import { useStore } from '../store/storeContext'

export const useSimulationActions = (dispatch) => {
  const {
    state: {
      simulations: { simulations }
    }
  } = useStore()

  const setActiveSimulation = (simulation) => {
    dispatch({ type: SIMULATION_SELECT, payload: simulation })
  }

  const getSimulations = async () => {
    dispatch({ type: SIMULATION_LOADING })
    try {
      // TODO call api to get simulations
      const simulationsDummies = SIMULATIONS
      dispatch({ type: SIMULATION_SET_LIST, payload: simulationsDummies })
    } catch (err) {
      const error = err.message
      dispatch({ type: SIMULATION_ERROR, payload: error })
    }
  }

  const addSimulation = async (simulation) => {
    dispatch({ type: SIMULATION_LOADING })
    try {
      // TODO call api to save simulation
      dispatch({ type: SIMULATION_ADD, payload: simulation })
    } catch (err) {
      const error = err.message
      dispatch({ type: SIMULATION_ERROR, payload: error })
    }
  }

  const deleteSimulation = async (id) => {
    dispatch({ type: SIMULATION_LOADING })
    try {
      // TODO call api to delete simulation
      const idx = simulations.findIndex(s => s._id === id)
      if (idx >= 0) {
        dispatch({ type: SIMULATION_DELETE, payload: idx })
      }
    } catch (err) {
      const error = err.message
      dispatch({ type: SIMULATION_ERROR, payload: error })
    }
  }

  return { setActiveSimulation, getSimulations, addSimulation, deleteSimulation }
}
