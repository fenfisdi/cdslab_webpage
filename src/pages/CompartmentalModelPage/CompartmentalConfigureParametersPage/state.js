import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { getStateWithQueryparams } from '../common'
import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'
import { usePathBreadCrums } from '../../../helpers'

export const useCompartmentalConfigureParametersPageState = ({showSnack, setShowSnack }) => {
  const history = useHistory()
  const [isSend, setIsSend] = useState(false)
  const {handlePathBreadCrums } = usePathBreadCrums()
  const {
    state: {      
      compartmentalModel: { loading, predefinedModelSelected, currentSimulation:{data:dataCurrentSimulation,error,errorData} }
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
          successMessage: 'loaded configuration parameters'
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
          errorMessage: errorData.detail
        }
      )
    }
  },[error])


  const executeRequestConfigureParameters =(option)=>{    
    const {  name,identifier,state_variable_limits,parameter_type } = dataCurrentSimulation
    const {modelData:{identifier:model_id}}=predefinedModelSelected
    handlePathBreadCrums('stateVariables',`?simulation_identifier=${identifier}&model_id=${model_id}`)
    updateCompartmentalSimulation({
      'name':name,
      'parameters_limits': option,
      'state_variable_limits':state_variable_limits,
      'parameter_type':parameter_type
    },identifier)    
    setIsSend(true)
  }

  return {
    loading,
    currentSimulation:dataCurrentSimulation,
    predefinedModelSelected:predefinedModelSelected,
    executeRequestConfigureParameters
  }
}
