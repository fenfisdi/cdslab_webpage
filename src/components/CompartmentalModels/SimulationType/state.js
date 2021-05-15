import { useState } from 'react'



export const useSimulationTypeState = ({handleClickSimulationType}) => {
  
  const [modelData, setModelData] = useState({})

  const handleClickButton =()=>{
    handleClickSimulationType(modelData)
  }
  
  return {    
    handleClickButton,
    setModelData,    
    modelData
  }
}
