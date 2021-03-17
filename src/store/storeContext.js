import React, { createContext, useReducer, useContext } from 'react'
import { combineReducers } from './combineReducers'
import { sessionReducer, initialState as sessionInitialState } from './reducers/sessionReducer'
import { simulationReducer, initialState as simulationInitialState } from './reducers/simulationsReducer'

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers({ session: sessionReducer, simulations: simulationReducer }),
    Object.assign(sessionInitialState, simulationInitialState)
  )
  const value = { state, dispatch }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
