import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'
import { getStateWithQueryparams } from '../common'

export const useCompartmentalReviewConfigurationInformationPageState = ({showSnack, setShowSnack }) => {
  
  const history = useHistory()
  

  const {
    state: {      
      compartmentalModel: { 
        predefinedModelSelected, 
        currentSimulation:{data:dataCurrentSimulation,error,errorData}, 
        simulationFileUpload
      }
    },
    dispatch
  } = useStore()
  
  const { 
    findCompartmentalSimulation, 
    findPredefinedModel,
    updateNextStepFileUploadProperty,
    executeSimulation } = useCompartmentalModelActions(dispatch)
  
  useEffect(()=>{
    const params = getStateWithQueryparams(history)
    if( dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected)){
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: true,
          error: false,
          successMessage: 'uploaded data.'
        }
      )
    }else if(dataCurrentSimulation!= null &&  isEmpty(predefinedModelSelected)){       
      const {name}=dataCurrentSimulation
      findPredefinedModel({model_id:params.model_id,  simulationName:name})

    }else if(!isEmpty(params) && dataCurrentSimulation == null && isEmpty(predefinedModelSelected)){
      findCompartmentalSimulation(params.simulation_identifier)
    }
    
  },[dataCurrentSimulation,predefinedModelSelected])


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

  useEffect(()=>{
    if(simulationFileUpload.data!=null && !simulationFileUpload.error && simulationFileUpload.nextStep){
      updateNextStepFileUploadProperty(false)
    }
  },[simulationFileUpload])


  const executeRequestRunSimulation =()=>{
    const {modelData:{identifier:model_id}}=predefinedModelSelected
    const { identifier} = dataCurrentSimulation
    executeSimulation(identifier)
    history.push({ 
      pathname: '/compartmentalModels/reviewConfigurationMessage',
      search:   `?simulation_identifier=${identifier}&model_id=${model_id}`  ,
    })
    
  }

  return {
    fileName:simulationFileUpload?.data?.name,
    currentSimulation:dataCurrentSimulation,
    predefinedModelSelected:predefinedModelSelected,
    executeRequestRunSimulation
  }
}
