import { useStore } from '@store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'
import { getStateWithQueryparams } from '../common'
import { SIMULATION_IDENTIFIERS } from '../../../constants/compartmental'
import { usePathBreadCrums } from '../../../helpers/usePathBreadCrums'
import { usePath } from '../../../components/PathContext'

export const useCompartmentalConfigureStateVariablesPageState = ({showSnack, setShowSnack }) => {
  const [isSend, setIsSend] = useState(false)
  const history = useHistory()
  const {setPath}  = usePath()
  const {handlePathBreadCrums } = usePathBreadCrums()
  const {
    state: {      
      compartmentalModel: { loading, predefinedModelSelected, currentSimulation:{data:dataCurrentSimulation,error,errorData} }
    },
    dispatch
  } = useStore()
  
  const { findCompartmentalSimulation, findPredefinedModel, updateCompartmentalSimulation } = useCompartmentalModelActions(dispatch)
  
  useEffect(()=>{
    const params = getStateWithQueryparams(history)
    if( dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected)){      
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: true,
          error: false,
          successMessage: 'loaded configuration state variables'
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
    if( isSend && dataCurrentSimulation!= null && !isEmpty(predefinedModelSelected)){
      const {modelData:{identifier:model_id}}=predefinedModelSelected
      const { identifier, parameter_type } = dataCurrentSimulation
      let pathname = ''
      if(parameter_type == SIMULATION_IDENTIFIERS.OPTIMIZE.toLowerCase()){
        pathname = '/compartmentalModels/optimizeParameters'
      }
      else if(parameter_type == SIMULATION_IDENTIFIERS.FIXED.toLowerCase()){
        pathname = '/compartmentalModels/chooseDate'
      }
      history.push({ 
        pathname: pathname,
        search:   `?simulation_identifier=${identifier}&model_id=${model_id}`  ,
      })
    }
  },[isSend,dataCurrentSimulation])

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


  const executeRequestConfigureStateVariables =(option)=>{
    const {  name,identifier,parameters_limits,parameter_type } = dataCurrentSimulation
    const {modelData:{identifier:model_id}}=predefinedModelSelected
    updateCompartmentalSimulation({
      'name':name,
      'state_variable_limits': option,
      'parameters_limits':parameters_limits,
      'parameter_type':parameter_type
    },identifier) 
    if(parameter_type == SIMULATION_IDENTIFIERS.OPTIMIZE.toLowerCase()){
      handlePathBreadCrums('optimizeParameters','Optimize Parameters',`?simulation_identifier=${identifier}&model_id=${model_id}`)
    }
    else if(parameter_type == SIMULATION_IDENTIFIERS.FIXED.toLowerCase()){
      setPath([
        {breadCrumbRoute: 'compartmentalModels',name: 'Compartmental Models'},
        {breadCrumbRoute: 'reviewConfigurationInformation',name: 'Review Configuration Information'}
      ])
    }
    
    setIsSend(true)
  }

  return {
    loading,
    currentSimulation:dataCurrentSimulation,
    predefinedModelSelected:predefinedModelSelected,
    executeRequestConfigureStateVariables
  }
}
