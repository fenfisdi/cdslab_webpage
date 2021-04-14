import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import { useCompartmentalModelActions } from '../../actions/compartmentalModelActions'
import { SIMULATION_IDENTIFIERS } from '../../constants/compartmental'
import { useStore } from '../../store/storeContext'

export const useCompartmentalModelsPageState = () => {
  const {
    state: {compartmentalModel: { configuredParameters, loading }},
    dispatch
  } = useStore()

  const { registerModelParameters } = useCompartmentalModelActions(dispatch) 

  const [step, setStep] = useState(0)
  const [configuredParameterValues,setConfiguredParameterValues] = useState({})
  const [showSnack, setShowSnack] = useState({show:false, success:false, error:false, successMessage:'', errorMessage:''})

  const[parameters,setParameters] = useState(
    { predefinedModel:{}, simulationType:{} }
  )

  
  const handleCloseSnack = () => {
    setShowSnack({...showSnack,show:false,success:false, error:false, successMessage:'', errorMessage:''})
  }
  
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
      const {parametersValue } = configuredParameterValues
      registerModelParameters(parametersValue)
    }
  },[configuredParameterValues])

  useEffect(()=>{
    console.log('::::::::::>configuredParameters',configuredParameters)
  },[configuredParameters])
  
  return {    
    updateStep,    
    setParameters,
    handleClickPredefinedModels,
    handleClickSimulationType,
    handleClickAdjustParameters,
    handleClickBackButton,
    handleClickFixedParameters,
    handleCloseSnack,
    step,
    parameters,
    loading,
    showSnack
  }
}
