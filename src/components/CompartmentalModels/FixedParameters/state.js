import { useState } from 'react'

export const useFixedParametersState =()=>{
  const [step,setStep] = useState(0)
  
  const updateStep = (int) => {
    setStep(int)
  } 

  return {
    updateStep,
    step
  }
}