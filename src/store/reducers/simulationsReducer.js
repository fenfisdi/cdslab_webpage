import {
  SIMULATION_ADD, SIMULATION_DELETE,
  SIMULATION_ERROR,
  SIMULATION_LOADING,
  SIMULATION_SELECT,
  SIMULATION_SET_LIST
} from '../../actions/types/simulationTypes'

export const initialState = {
  simulations: {
    simulations: [] ,
    simulationSelected: null,
    loading: false,
    error: null
  }
}

export const simulationReducer = (state, action) => {
  switch (action.type) {
    case SIMULATION_LOADING:
      return { ...state, loading: true, error: null }
    case SIMULATION_ERROR:
      return { ...state, loading: false, error: action.payload }
    case SIMULATION_SET_LIST:
      return {
        ...state,
        loading: false,
        error: null,
        simulations: action.payload
      }
    case SIMULATION_SELECT:
      return {
        ...state,
        simulationSelected: action.payload
      }
    case SIMULATION_ADD:
      return {
        ...state,
        simulations: [...state.simulations, action.payload]
      }
    case SIMULATION_DELETE:
      return {
        ...state,
        simulations: [...state.simulations.slice(0, action.payload), ...state.simulations.slice(action.payload + 1)]
      }
    default:
      return state
  }
}
