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
      compartmentalModel: { loading, predefinedModelSelected, currentSimulation }
    },
    dispatch
  } = useStore()
  
  const { storeCompartmentalSimulation } = useCompartmentalModelActions(dispatch)

  useEffect(()=>{
    if(!isEmpty(currentSimulation) && currentSimulation.data!= null && !isEmpty(predefinedModelSelected)){      
      console.log('currentSimulation::::::::::::::::>',currentSimulation)
      console.log('predefinedModelSelected::::::::::::::::>',predefinedModelSelected)
    }
    
  },[currentSimulation])


  const getStateWithQueryparams = (history) => {
    if (history && history.location) {
      const {
        location: { search }
      } = history
  
      const filters = qs.parse(search, {
        ignoreQueryPrefix: true
      })
      console.log('::::::::::::::::::::>filters',filters)
      return filters
    }
  }

  return {
    loading,
    simulation_identifier:getStateWithQueryparams(history),
    parameters:predefinedModelSelected && predefinedModelSelected.modelData? predefinedModelSelected.modelData.parameters : []

  }
}
