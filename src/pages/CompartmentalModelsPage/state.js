import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import { useUserActions } from '../../actions/userActions'
import { SIMULATION_IDENTIFIERS } from '../../constants/compartmental'
import { useStore } from '../../store/storeContext'

export const useCompartmentalModelsPageState = () => {
  
  const [step, setStep] = useState(0)
  const[parameters,setParameters] = useState(
    { predefinedModel:{}, simulationType:{} }
  )
  const [configuredParameterValues,setConfiguredParameterValues] = useState({})
  
  const updateStep = (int) => {
    setStep(int)
  } 

  const handleClickPredefinedModels =(predefinedModel)=>{
    console.log('::::::::::::::::>handleClickPredefinedModels',predefinedModel)
    setParameters({...parameters,predefinedModel}) 
    updateStep(1)
    
  }
  
  const handleClickSimulationType =(simulationType)=>{
    console.log('::::::::::::::::>handleClickSimulationType',simulationType)
    setParameters({...parameters,simulationType}) 
    const { indetifier } = simulationType || {}

    if(indetifier == SIMULATION_IDENTIFIERS.ADJUST){
      updateStep(2)
    }else if(indetifier == SIMULATION_IDENTIFIERS.FIXED){
      updateStep(3)      
    }
  }

  const handleClickAdjustParameters =(adjustParameter)=>{
    console.log('::::::::::::::::>handleClickAdjustParameter',adjustParameter)
  }

  
  const handleClickFixedParameters =(data)=>{
    const {predefinedModel:{name} }= parameters
    setConfiguredParameterValues({...configuredParameterValues,parametersValue:{name,data}})
  }

  const handleClickBackButton =()=>{    
    const {simulationType } = parameters
    simulationType.indetifier == SIMULATION_IDENTIFIERS.FIXED ? updateStep(1) : updateStep(step-1)
  }

  useEffect(()=>{
    if(step && step==1){
      setParameters({...parameters,simulationType:{}})
    }
  },[step])

  useEffect(()=>{
    if(configuredParameterValues && !isEmpty(configuredParameterValues)){
      console.log(':::::::configuredParameterValues',configuredParameterValues)
    }
  },[configuredParameterValues])
  
  return {    
    updateStep,    
    setParameters,
    handleClickPredefinedModels,
    handleClickSimulationType,
    handleClickAdjustParameters,
    handleClickBackButton,
    handleClickFixedParameters,
    step,
    parameters
  }
}
