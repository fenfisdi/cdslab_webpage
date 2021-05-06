import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import qs from 'qs'
import { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { useHistory, useLocation } from 'react-router'

export const useCompartmentalConfigureParametersPageState = () => {
  const history = useHistory()
  const location = useLocation()


  const {
    state: {      
      compartmentalModel: { loading, predefinedModelSelected, currentSimulation:{data:dataCurrentSimulation} }
    },
    dispatch
  } = useStore()
  
  const { findCompartmentalSimulation, findPredefinedModel } = useCompartmentalModelActions(dispatch)

  useEffect(()=>{
    const params = getStateWithQueryparams(history)
    if( dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected)){      
      console.log('currentSimulation::::::::::::::::>',dataCurrentSimulation)
      console.log('predefinedModelSelected::::::::::::::::>',predefinedModelSelected)

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

  return {
    loading,
    currentSimulation:dataCurrentSimulation,
    predefinedModelSelected:predefinedModelSelected
  }
}
