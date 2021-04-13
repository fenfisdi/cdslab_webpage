import { useEffect, useState } from 'react'



export const usePredefinedModelsState = ({handleClickPredefinedModels}) => {
  
  const [modelData, setModelData] = useState({})

  const handleClickButton =()=>{
    handleClickPredefinedModels(modelData)
  }
  
  return {    
    handleClickButton,
    setModelData,    
    modelData
  }
}
