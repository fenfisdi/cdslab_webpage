import { useEffect } from 'react'
import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { isEmpty, isNull } from 'lodash'

export const useCompartmentalNewSimulationPageState = ({ showSnack, setShowSnack }) => {
  const {
    state: {
      compartmentalModel: { 
        loading, 
        predefinedModels:{data:predefinedModelsList,error,errorData}, 
        predefinedModelSelected, 
        currentSimulation }
    },
    dispatch
  } = useStore()
  
  const { 
    getPredefinedModels, 
    storePredefinedModelSelected, 
    setDefinitionCompartmentalSimulation, 
    setDefinitionCompartmentalFolderSimulation,
    setDefinitionCompartmentalExecuteSimulation } = useCompartmentalModelActions(dispatch)
  
  useEffect(() => {
    if(isNull(predefinedModelsList) && error!=true){
      getPredefinedModels()
    }

    if(!isEmpty(predefinedModelSelected) && currentSimulation.data != null){
      storePredefinedModelSelected({})
      setDefinitionCompartmentalSimulation(null)
      setDefinitionCompartmentalFolderSimulation(null)
      setDefinitionCompartmentalExecuteSimulation(null)
    }
  }, [predefinedModelsList]) 

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


  return {
    loading,
    predefinedModelsList,
    storePredefinedModelSelected,
    getPredefinedModels
  }
}
