import {
  MY_SIMULATION_DELETE,
  MY_SIMULATION_ERROR,
  MY_SIMULATION_LOADING,
  MY_SIMULATION_SELECT,
  MY_SIMULATION_SET_LIST
} from '../../actions/types/mySimulationTypes'

export const initialState = {
  mySimulations: {
    mySimulations: [],
    mySimulationSelected: null,
    loading: false,
    error: null
  }
}

export const mySimulationReducer = (state, action) => {
  switch (action.type) {
  case MY_SIMULATION_LOADING:
    return { ...state, loading: true, error: null }
  case MY_SIMULATION_ERROR:
    return { ...state, loading: true, error: action.payload }
  case MY_SIMULATION_SET_LIST:
    return {
      ...state,
      loading: false,
      error: null,
      mySimulations: action.payload
    }
  case MY_SIMULATION_SELECT:
    return {
      ...state,
      mySimulationSelected: action.payload
    }
  case MY_SIMULATION_DELETE:
    return {
      ...state,
      mySimulations: [...state.mySimulations.slice(0, action.payload), ...state.mySimulations.slice(action.payload + 1)]
    }
  default:
    return state
  }
}
