import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'
import { getStateWithQueryparams } from '../common'

export const useCompartmentalUploadDataPageState = ({showSnack, setShowSnack }) => {

  const history = useHistory()

  const {
    state: {
      compartmentalModel: {
        predefinedModelSelected,
        currentSimulation:{ data: dataCurrentSimulation, error, errorData },
        simulationFileUpload
      }
    },
    dispatch
  } = useStore()
  
  const {
    findCompartmentalSimulation,
    findPredefinedModel,
    storeCompartmentalFileUpload } = useCompartmentalModelActions(dispatch)
  
  useEffect(()=>{
    const params = getStateWithQueryparams(history)
    if (dataCurrentSimulation != null &&  isEmpty(predefinedModelSelected)) {
      const {name}=dataCurrentSimulation
      findPredefinedModel({model_id:params.model_id,  simulationName:name})

    } else if (!isEmpty(params) && dataCurrentSimulation == null && isEmpty(predefinedModelSelected)){
      findCompartmentalSimulation(params.simulation_identifier)
    }
  },[dataCurrentSimulation,predefinedModelSelected])


  useEffect(()=>{
    if (simulationFileUpload.nextStep && dataCurrentSimulation!= null && 
      simulationFileUpload.data!=null && !simulationFileUpload.error ) {
      const { modelData: { identifier: model_id } } = predefinedModelSelected
      const { identifier} = dataCurrentSimulation
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: true,
          error: false,
          successMessage: `${simulationFileUpload.data ? simulationFileUpload.data.name:''} file loaded.`
        }
      )
      history.push({ 
        pathname: '/compartmentalModels/reviewConfigurationInformation',
        search:  `?simulation_identifier=${identifier}&model_id=${model_id}`,
      })
    } else if (simulationFileUpload.error && simulationFileUpload.errorData != null) {
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: simulationFileUpload.errorData.detail
        }
      )
    }
  },[simulationFileUpload])

  useEffect(()=>{
    if(error){
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


  const executeRequestUploadData = ({ formData }) => {
    const { name,identifier,parameters_limits,state_variable_limits,parameter_type } = dataCurrentSimulation
    state_variable_limits.map((stateVariable) => {
      const {label} = stateVariable
      if (label.toLowerCase() == formData.get('stateVariable').toLowerCase()){
        stateVariable.to_fit = true
      } else {
        stateVariable.to_fit = false
      }
    })
    formData.delete('stateVariable')
    storeCompartmentalFileUpload({
      'name':name,
      'parameters_limits':parameters_limits,
      'state_variable_limits':state_variable_limits,
      'parameter_type':parameter_type
    },identifier,formData)
  }

  return {
    loadingSimulationFileUpload:simulationFileUpload.loadingSimulationFileUpload,
    stateVariables:predefinedModelSelected?.modelData?.state_variables || [],
    currentSimulation:dataCurrentSimulation,
    predefinedModelSelected:predefinedModelSelected,
    executeRequestUploadData
  }
}
