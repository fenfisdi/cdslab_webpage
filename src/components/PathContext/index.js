import React, { createContext, useContext, useState } from 'react'

const PathContext = createContext()

export function usePath() {
  const context = useContext(PathContext)
  if (context === undefined) {
    throw new Error('usePath must be used within a PathProvider')
  }
  return context
}

export const PathProvider = ({children}) => {
  const [path, setPath] = useState([])
  return (
    <PathContext.Provider value={{path,setPath}}> 
      {children}
    </PathContext.Provider>
  )
}