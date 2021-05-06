import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { INDETIFIER_COMPARTMENTAL_CHOOSE_SIMULATION } from '@constants/compartmental'
import { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'

export const useCompartmentalChooseSimulationPageState = () => {
  const history = useHistory()
  const {
    state: {      
      compartmentalModel: { loading, predefinedModelSelected, currentSimulation }
    },
    dispatch
  } = useStore()
  
  const { storeCompartmentalSimulation } = useCompartmentalModelActions(dispatch)

  useEffect(()=>{
    if(isEmpty(predefinedModelSelected)){
      history.push({ pathname: '/compartmentalModels/newSimulations' })
    }
  },[predefinedModelSelected])


  useEffect(()=>{
    if(!isEmpty(currentSimulation) && currentSimulation.data!= null && !isEmpty(predefinedModelSelected)){

      const {modelData:{identifier:model_id}}=predefinedModelSelected
      const { data:{identifier}} = currentSimulation
      history.push({ 
        pathname: '/compartmentalModels/configureParameters',
        search:   `?simulation_identifier=${identifier}&model_id=${model_id}`  ,
      })      
    }
    
  },[currentSimulation])
  

  const executeSelectedOption =(option)=>{
    const {indetifier}=option
    if(indetifier == INDETIFIER_COMPARTMENTAL_CHOOSE_SIMULATION.OPTIMIZE){

      const {modelData:{identifier:model_id}, simulationName:name}=predefinedModelSelected
      
      storeCompartmentalSimulation({
        'name': name,
        'optimize_parameters': true,
        'interval_date': [
          '2019-08-24T14:15:22Z',
          '2019-08-24T14:15:22Z'
        ],
        'parameters_limits': { },
        'state_variables_init_vals': { },
        'state_variable_to_fit': { },
        'model_id': model_id
      })
    }
    
  }


  return {
    loading,
    executeSelectedOption
  }
}
