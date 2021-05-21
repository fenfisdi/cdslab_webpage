import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { getStateWithQueryparams } from '../common'
import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'

export const useCompartmentalFixedParametersPageState = ({showSnack, setShowSnack }) => {
  const history = useHistory()
  const [isSend, setIsSend] = useState(false)
  const {
    state: {      
      compartmentalModel: { loading, 
        predefinedModelSelected, 
        currentSimulation:{data:dataCurrentSimulation,error}
      }
    },
    dispatch
  } = useStore()
  
  const { 
    findCompartmentalSimulation, 
    findPredefinedModel,
    updateCompartmentalSimulation
  } = useCompartmentalModelActions(dispatch)

  useEffect(()=>{
    const params = getStateWithQueryparams(history)
    if(dataCurrentSimulation!= null &&  isEmpty(predefinedModelSelected)){      
      const {name}=dataCurrentSimulation
      findPredefinedModel({model_id:params.model_id,  simulationName:name})

    }else if(!isEmpty(params) && dataCurrentSimulation == null &&
      isEmpty(predefinedModelSelected)){
      findCompartmentalSimulation(params.simulation_identifier)
    }
    
  },[dataCurrentSimulation,predefinedModelSelected])

  useEffect(()=>{
    if( isSend && dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected)){      
      const {modelData:{identifier:model_id}}=predefinedModelSelected
      const { identifier} = dataCurrentSimulation            
      history.push({ 
        pathname: '/compartmentalModels/stateVariables',
        search:   `?simulation_identifier=${identifier}&model_id=${model_id}`  ,
      })
    }
  },[isSend,dataCurrentSimulation])


  useEffect(()=>{
    if(error){
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: 'error when loading fixed parameters'
        }
      )
    }
  },[error])


  const executeRequestConfigureParametersFixed =(fieldsValues)=>{
    const {  name,identifier,parameter_type,state_variable_limits } = dataCurrentSimulation
    
    fieldsValues.map((field)=>{
      field.type = 'fixed'
    })
    
    updateCompartmentalSimulation({
      'name':name,
      'parameters_limits':fieldsValues,
      'state_variable_limits':state_variable_limits,
      'parameter_type':parameter_type
    },identifier)  
    setIsSend(true) 
  }

  return {
    loading,
    fixedParametersFormFields:predefinedModelSelected?.modelData?.parameters || [],
    currentSimulation:dataCurrentSimulation,
    predefinedModelSelected:predefinedModelSelected,
    executeRequestConfigureParametersFixed
  }
}
