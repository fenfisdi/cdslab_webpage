import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { INDETIFIER_COMPARTMENTAL_CHOOSE_SIMULATION, SIMULATION_IDENTIFIERS } from '@constants/compartmental'
import { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'
import { usePathBreadCrums } from '../../../helpers'

export const useCompartmentalChooseSimulationPageState = (
  {
    showSnack,
    setShowSnack
  }) => {
  const history = useHistory()
  const {
    state: {
      compartmentalModel: {  predefinedModelSelected, currentSimulation, simulationFolderInformation }
    },
    dispatch
  } = useStore()

  const {handlePathBreadCrums } = usePathBreadCrums()
  const { storeCompartmentalSimulation,storeCompartmentalSimulationFolder } = useCompartmentalModelActions(dispatch)

  useEffect(() => {
    if (isEmpty(predefinedModelSelected)){
      history.push({ pathname: '/compartmentalModels/newSimulations' })
    }
  }, [predefinedModelSelected])


  useEffect(()=>{
    if(currentSimulation.data == null && currentSimulation.error){
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: currentSimulation.errorData.message
        }
      )
    } else if (!isEmpty(currentSimulation) && currentSimulation.data != null && !isEmpty(predefinedModelSelected) 
    && !currentSimulation.error &&
    !simulationFolderInformation.error &&
    simulationFolderInformation.data == null
    ) {
      const { data: { identifier } } = currentSimulation
      storeCompartmentalSimulationFolder(identifier)
    }
  },[currentSimulation])


  useEffect(()=>{
    if(simulationFolderInformation.data == null && simulationFolderInformation.error){      
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: simulationFolderInformation.errorData.detail
        }
      )
    } else if (simulationFolderInformation.data !=null && currentSimulation.data != null) {
      const { modelData: { identifier: model_id } } = predefinedModelSelected
      const { data: { identifier, parameter_type } } = currentSimulation
      let pathname =''
      if (SIMULATION_IDENTIFIERS.OPTIMIZE == parameter_type.toUpperCase()) {
        pathname= '/compartmentalModels/configureParameters'
      } else if (SIMULATION_IDENTIFIERS.FIXED == parameter_type.toUpperCase()) {
        pathname= '/compartmentalModels/fixedParameters'
      }
      history.push({
        pathname: pathname,
        search: `?simulation_identifier=${identifier}&model_id=${model_id}`
      })
    }
  },[simulationFolderInformation])
  
  const executeSelectedOption = (option) => {
    const { indetifier, ruta } = option
    const { modelData: { identifier: model_id }, simulationName: name } = predefinedModelSelected
    
    let parameter_type=''
    if (indetifier == INDETIFIER_COMPARTMENTAL_CHOOSE_SIMULATION.OPTIMIZE) {
      parameter_type = SIMULATION_IDENTIFIERS.OPTIMIZE
    } else if (indetifier == INDETIFIER_COMPARTMENTAL_CHOOSE_SIMULATION.FIXED) {
      parameter_type = SIMULATION_IDENTIFIERS.FIXED
    }
    storeCompartmentalSimulation({
      'name': name,
      'status':'incomplete',
      'model_id': model_id,
      'parameter_type':parameter_type.toLowerCase()
    })
    handlePathBreadCrums(ruta,`?simulation_identifier=${indetifier}&model_id=${model_id}`)
  }


  return {
    loadingSimulationFolderInformation:simulationFolderInformation.loadingSimulationFolderInformation,
    executeSelectedOption
  }
}
