import React, { createContext, useReducer, useContext } from 'react'
import { combineReducers } from './combineReducers'
import { authReducer, initialState as authInitialState } from './reducers/authReducer'
import { biometricReducer, initialState as biometricInitialState } from './reducers/biometricReducer'

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers({ auth: authReducer, biometrics: biometricReducer }),
    Object.assign(authInitialState, biometricInitialState)
  )
  const value = { state, dispatch }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
