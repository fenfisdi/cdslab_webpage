import { useEffect, useState } from 'react'

export const useAdjustParametersState = () => {
  
  const [step, setStep] = useState(0)

  const updateStep = (int) => {
    setStep(int)
  } 
  
  return {    
    updateStep,    
    step
  }
}
