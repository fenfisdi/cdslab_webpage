import React, { createContext, useReducer, useContext } from 'react'
import { combineReducers } from './combineReducers'
import { sessionReducer, initialState as sessionInitialState } from './reducers/sessionReducer'
import { simulationReducer, initialState as simulationInitialState } from './reducers/simulationsReducer'
import { registerReducer, initialState as registerInitialState } from './reducers/registerReducer'
import { authQrReducer,initialState as auhtQrInitialState } from './reducers/authQrReducer'
import { userManagementReducer, initialState as userManagementInitialState } from './reducers/userManagementReducer'
import { accountRecoveryReducer, initialState as accountRecoveryInitialState } from './reducers/accountRecoveryReducer'
import { qrAccountRecoveryReducer, initialState as qrAccountRecoveryInitialState  } from './reducers/qrAccountRecoveryReducer'
import { compartmentalModelReducer, initialState as compartmentalModelInitialState  } from './reducers/compartmentalModelReducer'

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers({
      session: sessionReducer,
      simulations: simulationReducer,
      register: registerReducer,
      authQr: authQrReducer,
      accountRecovery:accountRecoveryReducer,
      qrAccountRecovery:qrAccountRecoveryReducer,
      compartmentalModel:compartmentalModelReducer,
      userManagement: userManagementReducer
    }),
    Object.assign(sessionInitialState, 
      simulationInitialState, 
      registerInitialState, 
      auhtQrInitialState,
      accountRecoveryInitialState,
      qrAccountRecoveryInitialState,
      compartmentalModelInitialState,
      userManagementInitialState)
  )
  const value = { state, dispatch }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
