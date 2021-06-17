import { useEffect, useState } from 'react'
import { useStore } from '../../../store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'
import { getStateWithQueryparams } from '../common'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router'
import { formatYmd } from '../../../utils/common'

export const useComparmentalInsPageState = ({stateVariable}) => {
  const history = useHistory()
  const {
    state: {      
      compartmentalModel: {
        predefinedModelSelected,
        currentSimulation:{ data: dataCurrentSimulation },
        simulationInsData:{
          insVariables,
          insRegions          
        }
      }
    },
    dispatch
  } = useStore()

  const { getInsParametersVariables, 
    getInsParametersRegions, 
    getInsParametersDates, 
    getInformationIns,
    postInformationIns, 
    findCompartmentalSimulation,
    findPredefinedModel,
    updateCompartmentalSimulation } = useCompartmentalModelActions(dispatch)

  const [initialDate, setInitialDate] = useState(null)
  const [finalDate, setFinalDate] = useState(null)
  
  const [initialDateRegion,setInitialDateRegion] = useState(null)
  const [finalDateRegion,setFinalDateRegion] = useState(null)


  const [showError, setShowError] = useState(false)  
  const [showMessage,setShowMessage] = useState(false)
  const [regionChoose,setRegionChoose] = useState(null)
  
  const [headersTable, setHeadersTable] = useState([])
  const [dataTable, setDataTable] = useState([])
  
  
  const [isValid,setIsValid] = useState(false)

  
  /******************* useEffects get Informations **********/
  useEffect(()=>{
    const params = getStateWithQueryparams(history)    
    if (dataCurrentSimulation != null &&  isEmpty(predefinedModelSelected)) {
      const {name}=dataCurrentSimulation
      findPredefinedModel({model_id:params.model_id,  simulationName:name})

    } else if (!isEmpty(params) && dataCurrentSimulation == null && isEmpty(predefinedModelSelected)){
      findCompartmentalSimulation(params.simulation_identifier)
    }

    if(insVariables.data == null && !insVariables.error){
      getInsParametersVariables()
    }

    if(insRegions.data == null && !insRegions.error){
      getInsParametersRegions()
    }
  },[dataCurrentSimulation,predefinedModelSelected,insVariables.data,insRegions.data])

  /******************************* */

  
  /************ useEffects fields validations ************** */
  useEffect(()=>{
    if(!showMessage && regionChoose!=null){      
      setInitialDate(null)
      setFinalDate(null)
      getInsParametersDates(regionChoose).then((response)=>{
        const { data:{data}} = response        
        setInitialDateRegion(new Date(data.initialDate))
        setInitialDate(new Date(data.initialDate))
        setFinalDateRegion( new Date(data.finalDate))
        setFinalDate(new Date(data.finalDate))
      })
    }
  },[regionChoose])

  useEffect(()=>{
    if(showError){
      setRegionChoose(null)
    }
  },[showError])


  useEffect(()=>{
    if(stateVariable.value && regionChoose!=null && initialDate!=null && finalDate!=null){
      setIsValid(true)
    }else{
      setIsValid(false)
    }

  },[stateVariable.value,regionChoose,initialDate,finalDate])
  /********************************************/


  const nextStepRedirect =()=>{
    const {modelData:{identifier:model_id}}=predefinedModelSelected
    const { identifier} = dataCurrentSimulation
    history.push({ 
      pathname: '/compartmentalModels/chooseDate',
      search:  `?simulation_identifier=${identifier}&model_id=${model_id}`,
    })
  }
  
  const handleExecuteIns = ()=>{
    getInformationIns({
      stateVariable:stateVariable.value,
      regionChoose,
      initialDate:formatYmd(initialDate),
      finalDate:formatYmd(finalDate)
    }).then((response)=>{
      const {
        headers,
        body
      } = response.data.data      
      setHeadersTable(headers)
      setDataTable(body)
    })
  }


  const handleExecuteContinue = ()=>{
    
    postInformationIns({
      variable:stateVariable.value,
      regionName:regionChoose.name || '',
      initialDate:formatYmd(initialDate),
      finalDate:formatYmd(finalDate),
      identifier:dataCurrentSimulation.identifier || '',
      predefinedModelSelected
    }).then( (response)=>{
      if(!isEmpty(response.data.data)){
        const {  name,identifier,state_variable_limits,parameter_type,parameters_limits } = dataCurrentSimulation
        updateCompartmentalSimulation({
          'name':name,
          'parameters_limits':parameters_limits,
          'state_variable_limits':state_variable_limits,
          'parameter_type':parameter_type
        },identifier,nextStepRedirect)
      }
    }) 
    
  }

  return {
    dates:{
      initialDate,
      setInitialDate,
      finalDate,
      setFinalDate,
      initialDateRegion,
      finalDateRegion
    },
    tableDate:{
      headersTable,
      setHeadersTable,
      dataTable,
      setDataTable
    },
    messages:{
      showMessage,
      setShowMessage,
      showError,
      setShowError
    },    
    optionsRegions:insRegions.data,
    regionChoose,
    setRegionChoose,
    selectOptions:insVariables.data, 
    handleExecuteIns,
    isValid,
    handleExecuteContinue,
    dataCurrentSimulation
  }

}