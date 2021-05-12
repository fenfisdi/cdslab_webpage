import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import qs from 'qs'
import { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'

export const useCompartmentalConfigureParametersPageState = ({showSnack, setShowSnack }) => {
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
    if(error == true){
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


  const getStateWithQueryparams = (queryParams) => {
    if (queryParams && queryParams.location) {
      const {
        location: { search }
      } = queryParams
  
      const params = qs.parse(search, {
        ignoreQueryPrefix: true
      })      
      return params
    }
  }


  const executeRequestConfigureParameters =(option)=>{
    const {  name,identifier } = dataCurrentSimulation

    updateCompartmentalSimulation({
      'name':name,
      'parameters_limits': option
    },identifier)    
    
  }

  return {
    loading,
    currentSimulation:dataCurrentSimulation,
    predefinedModelSelected:predefinedModelSelected,
    executeRequestConfigureParameters
  }
}
