import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'
import { getStateWithQueryparams } from '../common'

export const useCompartmentalUploadDataPageState = ({showSnack, setShowSnack }) => {
  const [selectOptions, setSelectOptions] = useState([])
  const history = useHistory()
  

  const {
    state: {      
      compartmentalModel: { 
        predefinedModelSelected, currentSimulation:{data:dataCurrentSimulation,error,errorData}, 
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
    if( dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected)){               
      const {modelData:{state_variables}} = predefinedModelSelected || {}
      const arrayStateDto = []
      state_variables.map((state)=>{
        const stateObject = {}
        stateObject.label = state.label.toLowerCase()
        stateObject.name  = state.name
        stateObject.value = state.label.toLowerCase()
        arrayStateDto.push(stateObject)
      })
      setSelectOptions(arrayStateDto)
    }else if(dataCurrentSimulation!= null &&  isEmpty(predefinedModelSelected)){       
      const {name}=dataCurrentSimulation
      findPredefinedModel({model_id:params.model_id,  simulationName:name})

    }else if(!isEmpty(params) && dataCurrentSimulation == null && isEmpty(predefinedModelSelected)){
      findCompartmentalSimulation(params.simulation_identifier)
    }
    
  },[dataCurrentSimulation,predefinedModelSelected])


  useEffect(()=>{
    if(dataCurrentSimulation!= null && simulationFileUpload.data!=null && !simulationFileUpload.error){
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: true,
          error: false,
          successMessage: `${simulationFileUpload.data ? simulationFileUpload.data.name:''} file loaded.`
        }
      )
    }else if(simulationFileUpload.error && simulationFileUpload.errorData!=null){
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


  const executeRequestUploadData =({formData})=>{
    const {  name,identifier,parameters_limits,state_variable_limits,parameter_type } = dataCurrentSimulation
    state_variable_limits.map((stateVariable)=>{
      stateVariable.label.toLowerCase() == formData.get('stateVariable') ? stateVariable.to_fit= true : stateVariable.to_fit = false      
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
    selectOptions,
    currentSimulation:dataCurrentSimulation,
    predefinedModelSelected:predefinedModelSelected,
    executeRequestUploadData
  }
}
