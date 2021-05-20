import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { INDETIFIER_COMPARTMENTAL_CHOOSE_SIMULATION } from '@constants/compartmental'
import { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'

export const useCompartmentalChooseSimulationPageState = ({showSnack, setShowSnack }) => {
  const history = useHistory()
  const {
    state: {
      compartmentalModel: {  predefinedModelSelected, currentSimulation, simulationFolderInformation }
    },
    dispatch
  } = useStore()
  
  const { storeCompartmentalSimulation,storeCompartmentalSimulationFolder } = useCompartmentalModelActions(dispatch)

  useEffect(() => {
    if (isEmpty(predefinedModelSelected)) {
      history.push({ pathname: '/compartmentalModels/newSimulations' })
    }
  },[predefinedModelSelected])


  useEffect(()=>{
    if (currentSimulation.error) {
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: currentSimulation.errorData.detail
        }
      )
    } else if (!isEmpty(currentSimulation) && currentSimulation.data!= null && !isEmpty(predefinedModelSelected) 
    && !currentSimulation.error &&
    !simulationFolderInformation.error &&
    simulationFolderInformation.data == null
    ) {
      const { data: { identifier } } = currentSimulation
      storeCompartmentalSimulationFolder(identifier)
    }
  },[currentSimulation])


  useEffect(() => {
    if (simulationFolderInformation.error) {
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: simulationFolderInformation.errorData.detail
        }
      )
    } else if (simulationFolderInformation.data != null && currentSimulation.data != null) {
      const { modelData: { identifier: model_id } } = predefinedModelSelected
      const { data: { identifier } } = currentSimulation
      history.push({
        pathname: '/compartmentalModels/configureParameters',
        search: `?simulation_identifier=${identifier}&model_id=${model_id}`
      })
    }
  }, [simulationFolderInformation])

  const executeSelectedOption = (option) => {
    const { indetifier } = option
    if (indetifier == INDETIFIER_COMPARTMENTAL_CHOOSE_SIMULATION.OPTIMIZE) {

      const { modelData: { identifier: model_id }, simulationName: name } = predefinedModelSelected

      storeCompartmentalSimulation({
        'name': name,
        'status':'incomplete',
        'model_id': model_id,
        'parameter_type':'optimized'
      })
    }

  }


  return {
    loadingSimulationFolderInformation:simulationFolderInformation.loadingSimulationFolderInformation,
    executeSelectedOption
  }
}
