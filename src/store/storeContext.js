import React, { createContext, useReducer, useContext } from 'react'
import { combineReducers } from './combineReducers'
import { authReducer, initialState as authInitialState } from './reducers/authReducer'
import { simulationReducer, initialState as simulationInitialState } from './reducers/simulationsReducer'

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers({ auth: authReducer, simulations: simulationReducer }),
    Object.assign(authInitialState, simulationInitialState)
  )
  const value = { state, dispatch }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
