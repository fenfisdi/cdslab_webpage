import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { getStateWithQueryparams } from '../common'
import { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'

export const useCompartmentalFixedParametersPageState = ({showSnack, setShowSnack }) => {
  const history = useHistory()
  
  const {
    state: {      
      compartmentalModel: { loading, 
        predefinedModelSelected, 
        currentSimulation:{data:dataCurrentSimulation,error,errorData},
        fixedParametersFormFields }
    },
    dispatch
  } = useStore()
  
  const { 
    findCompartmentalSimulation, 
    findPredefinedModel,
    getFixedParametersFormFields } = useCompartmentalModelActions(dispatch)

  useEffect(()=>{
    const params = getStateWithQueryparams(history)
    if( dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected) && fixedParametersFormFields.data == null){
      getFixedParametersFormFields()
    }else if(dataCurrentSimulation!= null &&  isEmpty(predefinedModelSelected)){      
      const params = getStateWithQueryparams(history)      
      const {name}=dataCurrentSimulation
      findPredefinedModel({model_id:params.model_id,  simulationName:name})

    }else if(!isEmpty(params) && dataCurrentSimulation == null &&
      isEmpty(predefinedModelSelected)){
      const params = getStateWithQueryparams(history)
      findCompartmentalSimulation(params.simulation_identifier)
    }
    
  },[dataCurrentSimulation,predefinedModelSelected])


  useEffect(()=>{
    if( fixedParametersFormFields.data!=null){      
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: true,
          error: false,
          successMessage:'form fields loaded'
        }
      )

    }else if(fixedParametersFormFields.data == null && fixedParametersFormFields.error){
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: fixedParametersFormFields.errorData.detail
        }
      )
    }
  },[fixedParametersFormFields])


  useEffect(()=>{
    if(error){
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: errorData.detail
        }
      )
    }
  },[error])


  const executeRequestConfigureParameters =()=>{    
    console.log('::::::::::::::::::>dataCurrentSimulation',dataCurrentSimulation)
    console.log('::::::::::::::::::>predefinedModelSelected',predefinedModelSelected)
    console.log('::::::::::::::::::::::::>fixedParametersFormFields',fixedParametersFormFields)
    /* const {  name,identifier,state_variable_limits,parameter_type } = dataCurrentSimulation
    updateCompartmentalSimulation({
      'name':name,
      'parameters_limits': option,
      'state_variable_limits':state_variable_limits,
      'parameter_type':parameter_type
    },identifier)    
    setIsSend(true) */
  }

  return {
    loading,
    fixedParametersFormFields:fixedParametersFormFields?.data || [],
    currentSimulation:dataCurrentSimulation,
    predefinedModelSelected:predefinedModelSelected,
    executeRequestConfigureParameters
  }
}
