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
  const [showSnack, setShowSnack] = useState({show:false, success:false, error:false, successMessage:'', errorMessage:''})
  const[parameters,setParameters] = useState(
    { predefinedModel:{}, simulationType:{}, configuredParameterValues:{}, stateVariableValues:{} }
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

  
  const handleClickSaveConfiguredParameterValues =(data)=>{
    console.log('::::::::::::::::>handleClickSaveConfiguredParameterValues',data)
    setParameters({...parameters,configuredParameterValues:data})
  }

  const handleClickSaveConfigureStateVariables =(data)=>{
    console.log('::::::::::::::::>handleClickSaveConfigureStateVariables',data)
    setParameters({...parameters,stateVariableValues:data})
  }

  const handleClickBackButton =()=>{    
    const {simulationType } = parameters
    simulationType.indetifier == SIMULATION_IDENTIFIERS.FIXED ? updateStep(1) : updateStep(step-1)
  }

  useEffect(()=>{
    if(step && step==1){
      setParameters({...parameters,simulationType:{},configuredParameterValues:{}})
    }else if(step && step == 0){
      setParameters({...parameters,simulationType:{},configuredParameterValues:{},predefinedModel:{}})
    }
  },[step])

  useEffect(()=>{
    const {configuredParameterValues, stateVariableValues}=parameters || {}
    if(!isEmpty(configuredParameterValues)){
      console.log(':::::::::::::>parameters',parameters)
      //const {parametersValue } = configuredParameterValues
      //registerModelParameters(parametersValue)
    }
    if(!isEmpty(stateVariableValues)){
      console.log(':::::::::::::>parameters',parameters)
    }
  },[parameters])

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
    handleClickSaveConfiguredParameterValues,
    handleClickSaveConfigureStateVariables,
    handleCloseSnack,
    step,
    parameters,
    loading,
    showSnack
  }
}
