import { useEffect } from 'react'
import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { isNull } from 'lodash'

export const useCompartmentalNewSimulationPageState = ({ showSnack, setShowSnack }) => {
  const {
    state: {      
      compartmentalModel: { loading, predefinedModels:{data:predefinedModelsList,error,errorData} }
    },
    dispatch
  } = useStore()
  
  const { getPredefinedModels, storePredefinedModelsSelected } = useCompartmentalModelActions(dispatch)
  
  useEffect(() => {
    if(isNull(predefinedModelsList) && error!=true){
      getPredefinedModels()
    }
  }, []) 

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
    storePredefinedModelsSelected,
    getPredefinedModels
  }
}
