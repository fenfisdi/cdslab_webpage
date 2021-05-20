import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { INDETIFIER_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION } from '../../../constants/compartmental'
import { useStore } from '../../../store/storeContext'
import { useEffect, useState } from 'react'
import { getStateWithQueryparams } from '../common'

export const useCompartmentalOptimizeParametersPageState = ({showSnack, setShowSnack }) => {
  const history = useHistory()
  const [isValid, setIsValid] = useState(false)
  
  const {
    state: {      
      compartmentalModel: { predefinedModelSelected, currentSimulation:{data:dataCurrentSimulation, error, errorData} }
    },
    dispatch
  } = useStore()
  
  const { 
    findCompartmentalSimulation, 
    findPredefinedModel,
    updateCompartmentalSimulation } = useCompartmentalModelActions(dispatch)
  
  useEffect(()=>{
    const params = getStateWithQueryparams(history)
    if( dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected)){   
      
      setIsValid(true)      
      if(dataCurrentSimulation.data_source != null && dataCurrentSimulation.data_source != 'none' ){
        const { modelData:{ identifier:model_id } }=predefinedModelSelected
        const { identifier } = dataCurrentSimulation
        let pathname = ''
        
        if(dataCurrentSimulation.data_source == 'upload'){
          pathname = '/compartmentalModels/uploadData'
        }

        history.push({ 
          pathname: pathname,
          search:`?simulation_identifier=${identifier}&model_id=${model_id}`  ,
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
      if(indetifier == INDETIFIER_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION.UPLOAD){
        dataSource = 'upload'
      }else if(indetifier == INDETIFIER_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION.USEAVAILABLE){
        dataSource = 'ins'
      }
     
      updateCompartmentalSimulation({
        'name':name,
        'parameters_limits': parameters_limits,
        'state_variable_limits':state_variable_limits,
        'parameter_type':parameter_type,
        'data_source':dataSource
      },identifier) 

    }
    
  }

  return {
    executeSelectedOption
  }
}