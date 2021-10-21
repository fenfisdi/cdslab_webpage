import React, {useEffect} from 'react'
import { useConfigurationActions } from '../../../actions/configurationActions'
import { useStore } from '../../../store/storeContext'

export const DiseaseStateList = (list) =>{
  const {
    state: {
      configuration: { listDiseaseState, error }
    },
    dispatch
  } = useStore()
  
  const {getListConfigurationDistance} = useConfigurationActions(dispatch)
  
  useEffect(() => {
    if (listDiseaseState.length == 0 && error == null) { 
      getListConfigurationDistance(list)
    }
  },[listDiseaseState])

  return {listDiseaseState}
}