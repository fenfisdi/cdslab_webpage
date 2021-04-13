import { useEffect, useState } from 'react'



export const usePredefinedModelsState = () => {
  
  const [step, setStep] = useState(0)

  const updateStep = (int) => {
    setStep(int)
  } 
  
  return {    
    updateStep,    
    step
  }
}
