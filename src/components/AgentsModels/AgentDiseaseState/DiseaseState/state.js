import { useEffect } from 'react'
import { useConfigurationActions } from '@actions/configurationActions'
import { useStore } from '../../../../store/storeContext'


export const DiseaseStateList = (list) =>{
  const {
    state: {    
      configuration: { listConfigurationDistance, error }
    },
    dispatch
  } = useStore()
  const {getListConfigurationDistance} = useConfigurationActions(dispatch)
  
  useEffect(() => {
    if (listConfigurationDistance.length == 0 && error == null) { 
      getListConfigurationDistance(list)
    }
  },[listConfigurationDistance])

  return { listConfigurationDistance }
}