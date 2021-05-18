import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { INDETIFIER_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION } from '../../../constants/compartmental'
import { useStore } from '../../../store/storeContext'
import { useEffect, useState } from 'react'
import { getStateWithQueryparams } from '../common'

export const useCompartmentalOptimizeParametersPageState = () => {
  const history = useHistory()
  const [isValid, setIsValid] = useState(false)
  
  const {
    state: {      
      compartmentalModel: { predefinedModelSelected, currentSimulation:{data:dataCurrentSimulation} }
    },
    dispatch
  } = useStore()
  
  const { findCompartmentalSimulation, findPredefinedModel } = useCompartmentalModelActions(dispatch)
  
  useEffect(()=>{
    const params = getStateWithQueryparams(history)
    if( dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected)){      
      setIsValid(true)

    }else if(dataCurrentSimulation!= null &&  isEmpty(predefinedModelSelected)){       
      const {name}=dataCurrentSimulation
      findPredefinedModel({model_id:params.model_id,  simulationName:name})

    }else if(!isEmpty(params) && dataCurrentSimulation == null && isEmpty(predefinedModelSelected)){
      findCompartmentalSimulation(params.simulation_identifier)
    }
    
  },[dataCurrentSimulation,predefinedModelSelected])


  const executeSelectedOption =(option)=>{
    const {indetifier}=option
    if( dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected) && isValid){     
      const {modelData:{identifier:model_id}}=predefinedModelSelected
      const { identifier} = dataCurrentSimulation
      if(indetifier == INDETIFIER_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION.UPLOAD){
        history.push({ 
          pathname: '/compartmentalModels/uploadData',
          search:   `?simulation_identifier=${identifier}&model_id=${model_id}`  ,
        })
      }  
    }
    
  }

  return {
    executeSelectedOption
  }
}