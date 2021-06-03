import { useEffect } from 'react'
import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import {  isNull } from 'lodash'

export const useCompartmentalMainPageState = () => {
  const {
    state: {
      compartmentalModel: {
        predefinedModels:{data:predefinedModelsList,error}
      }
    },
    dispatch
  } = useStore()
  
  const { setDefinitionDataGetPredefinedModels } = useCompartmentalModelActions(dispatch)
  
  useEffect(() => {    
    if(!isNull(predefinedModelsList) || error){
      setDefinitionDataGetPredefinedModels(null)
    }
  }, []) 


  return {
    predefinedModelsList
  }
}
