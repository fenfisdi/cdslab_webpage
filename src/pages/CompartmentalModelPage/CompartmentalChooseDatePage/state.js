import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useStore } from '../../../store/storeContext'
import { getStateWithQueryparams } from '../common'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'

export const useCompartmentalChooseDatePageState = (
  {
    showSnack,
    setShowSnack
  }) => {
  const history = useHistory()
  const [isSend, setIsSend] = useState(false)
  const {
    state: {      
      compartmentalModel: { predefinedModelSelected, currentSimulation:{data:dataCurrentSimulation,error,errorData} }
    },
    dispatch
  } = useStore()

  const { findCompartmentalSimulation, findPredefinedModel, updateCompartmentalSimulation } = useCompartmentalModelActions(dispatch)


  useEffect(()=>{
    const params = getStateWithQueryparams(history)
    if( dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected)){      
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: true,
          error: false,
          successMessage: 'loaded Information'
        }
      )

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
    if( isSend && dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected)){      
      const {modelData:{identifier:model_id}}=predefinedModelSelected
      const { identifier} = dataCurrentSimulation
      history.push({ 
        pathname: '/compartmentalModels/reviewConfigurationInformation',
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
          errorMessage: errorData.detail
        }
      )
    }
  },[error])


  const executeRequest=({initialDate,finalDate})=>{    
    const {  name,identifier,state_variable_limits,parameter_type,parameters_limits } = dataCurrentSimulation
    updateCompartmentalSimulation({
      'name':name,
      'parameters_limits': parameters_limits,
      'state_variable_limits':state_variable_limits,
      'parameter_type':parameter_type,
      'interval_date': {
        'start': initialDate,
        'end': finalDate
      }
    },identifier)    
    setIsSend(true)
  }

  return {
    executeRequest,
    currentSimulation:dataCurrentSimulation
  }

}