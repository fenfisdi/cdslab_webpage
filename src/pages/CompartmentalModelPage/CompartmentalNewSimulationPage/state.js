import { useEffect, useState } from 'react'
import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { isNull } from 'lodash'

export const useCompartmentalNewSimulationPageState = () => {
  const {
    state: {      
      compartmentalModel: { configuredParameters, loading, predefinedModels:{data:predefinedModelsList} }
    },
    dispatch
  } = useStore()
  const { getPredefinedModels } = useCompartmentalModelActions(dispatch)

  useEffect(() => {
    if(isNull(predefinedModelsList)){
      getPredefinedModels()
    }
  }, [])


  return {
    loading,
    predefinedModelsList
  }
}
