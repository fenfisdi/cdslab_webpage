import { useEffect, useState } from 'react'
import { useUserActions } from '../../actions/userActions'
import { useStore } from '../../store/storeContext'

export const useCompartmentalModelsPageState = () => {
  
  const [step, setStep] = useState(0)

  const updateStep = (int) => {
    setStep(int)
  } 
  
  return {    
    updateStep,    
    step
  }
}
