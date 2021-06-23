import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { INDETIFIER_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION } from '../../../constants/compartmental'
import { useStore } from '../../../store/storeContext'
import { useEffect, useState } from 'react'
import { getStateWithQueryparams } from '../common'
import { usePathBreadCrums } from '../../../helpers/usePathBreadCrums'

export const useCompartmentalOptimizeParametersPageState = ({showSnack, setShowSnack }) => {
  const history = useHistory()
  const [isValid, setIsValid] = useState(false)
  const {handlePathBreadCrums } = usePathBreadCrums()
  const {
    state: {      
      compartmentalModel: { 
        predefinedModelSelected, 
        currentSimulation:{data:dataCurrentSimulation, error, errorData},
        chooseDataSource }
    },
    dispatch
  } = useStore()
  
  const { 
    findCompartmentalSimulation, 
    findPredefinedModel,
    updateCompartmentalSimulation,
    updateChooseDataSourceProperty } = useCompartmentalModelActions(dispatch)
  
  useEffect(()=>{
    const params = getStateWithQueryparams(history)
    if( dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected)){
      setIsValid(true)      
      if(dataCurrentSimulation.data_source != null && dataCurrentSimulation.data_source != 'none' && chooseDataSource.nextStep){
        const { modelData:{ identifier:model_id } }=predefinedModelSelected
        const { identifier } = dataCurrentSimulation
        history.push({ 
          pathname: chooseDataSource.pathname,
          search:`?simulation_identifier=${identifier}&model_id=${model_id}`  ,
        })
        updateChooseDataSourceProperty({
          nextStep:false,
          pathname:''
        })
      }

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


  const executeSelectedOption =(option)=>{
    const {indetifier}=option
    if( dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected) && isValid){
      const { name, identifier,state_variable_limits,parameter_type,parameters_limits } = dataCurrentSimulation
      
      let dataSource = ''
      let pathname = ''
      if(indetifier == INDETIFIER_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION.UPLOAD){
        dataSource = 'upload'
        pathname = '/compartmentalModels/uploadData'
      }else if(indetifier == INDETIFIER_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION.USEAVAILABLE){
        dataSource = 'ins'
        pathname = '/compartmentalModels/ins'
      }
      const { modelData:{ identifier:model_id } }=predefinedModelSelected
      const { identifier: identefierParam } = dataCurrentSimulation


      updateChooseDataSourceProperty({
        nextStep:true,
        pathname:pathname
      })
     
      updateCompartmentalSimulation({
        'name':name,
        'parameters_limits': parameters_limits,
        'state_variable_limits':state_variable_limits,
        'parameter_type':parameter_type,
        'data_source':dataSource
      },identifier) 

      handlePathBreadCrums('uploadData','Upload Data',`?simulation_identifier=${identefierParam}&model_id=${model_id}`)
    }
    
  }

  return {
    executeSelectedOption,
    loading:chooseDataSource.nextStep
  }
}