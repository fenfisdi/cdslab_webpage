import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'
import { getStateWithQueryparams } from '../common'

export const useCompartmentalConfigureStateVariablesPageState = ({showSnack, setShowSnack }) => {
  const history = useHistory()
  
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
          successMessage: 'loaded configuration state variables'
        }
      )

    }else if(dataCurrentSimulation!= null &&  isEmpty(predefinedModelSelected)){      
      const params = getStateWithQueryparams(history)      
      const {name}=dataCurrentSimulation
      findPredefinedModel({model_id:params.model_id,  simulationName:name})

    }else if(!isEmpty(params) && dataCurrentSimulation == null && isEmpty(predefinedModelSelected)){
      const params = getStateWithQueryparams(history)
      findCompartmentalSimulation(params.simulation_identifier)
    }
    
  },[dataCurrentSimulation,predefinedModelSelected])
  


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


  const executeRequestConfigureStateVariables =(option)=>{
    const {  name,identifier,parameters_limits } = dataCurrentSimulation
    updateCompartmentalSimulation({
      'name':name,
      'state_variable_limits': option,
      'parameters_limits':parameters_limits
    },identifier) 
  }

  return {
    loading,
    currentSimulation:dataCurrentSimulation,
    predefinedModelSelected:predefinedModelSelected,
    executeRequestConfigureStateVariables
  }
}
