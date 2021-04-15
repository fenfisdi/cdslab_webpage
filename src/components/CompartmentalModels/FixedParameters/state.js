import { useEffect, useState } from 'react'

export const useFixedParametersState =({
  setParameters,
  parameters,
  handleClickSaveConfiguredParameterValues,
  handleClickSaveConfigureStateVariables})=>{

  const [step,setStep] = useState(0)

  const handleFormParametersSave=(data)=>{
    updateStep(1)
    handleClickSaveConfiguredParameterValues(data)    
  }

  const handleFormConfigureStateVariablesSave=(data)=>{
    handleClickSaveConfigureStateVariables(data)
  }


  useEffect(()=>{ 

    if(step == 0){
      setParameters({...parameters,stateVariableValues:{}})
    }
  },[step])
  
  const updateStep = (int) => {
    setStep(int)
  } 

  return {
    handleFormParametersSave,
    handleFormConfigureStateVariablesSave,
    updateStep,
    step
  }
}