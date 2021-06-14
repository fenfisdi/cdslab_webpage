import { useEffect, useState } from 'react'
import { useStore } from '../../../store/storeContext'
import { useCompartmentalModelActions } from '@actions/compartmentalModelActions'

export const useComparmentalInsPageState = ({stateVariable}) => {

  const {
    state: {      
      compartmentalModel: { 
        simulationInsData:{
          insVariables,
          insRegions
        }
      }
    },
    dispatch
  } = useStore()

  const { getInsParametersVariables, getInsParametersRegions, getInsParametersDates  } = useCompartmentalModelActions(dispatch)

  const [initialDate, setInitialDate] = useState(null)
  const [finalDate, setFinalDate] = useState(null)
  const [showError, setShowError] = useState(false)
  const [selectOptions, setSelectOptions] = useState([])
  const [optionsRegions, setOptionsRegions] = useState([])
  const [regionChoose,setRegionChoose] = useState(null)
  const [headersTable, setHeadersTable] = useState([])
  const [dataTable, setDataTable] = useState([])
  const [showMessage,setShowMessage] = useState(false)
  const [isValid,setIsValid] = useState(false)
  
  /*******************Effects get data */
  useEffect(()=>{    
    if(insVariables.data == null && insVariables.error!=true){
      getInsParametersVariables()
    }else if(insVariables.data!=null  && insVariables.error!=true && selectOptions.length == 0){
      setSelectOptions(insVariables.data)
    }
  },[insVariables])
  

  useEffect(()=>{
    if(insRegions.data == null && insRegions.error!=true){
      getInsParametersRegions()
    }else if(insRegions.data!=null  && insRegions.error!=true && optionsRegions.length == 0){      
      setOptionsRegions(insRegions.data)
    }
  },[insRegions])
  /******************************* */

  /************ hook fields ************** */

  useEffect(()=>{
    if(stateVariable.value){
      console.log('stateVariable:::::::::::::>',stateVariable.value)      
    }
  },[stateVariable.value])

  useEffect(()=>{
    if(!showMessage && regionChoose!=null){
      console.log('regionChoose:::::::::::::>',regionChoose)
      setInitialDate(null)
      setFinalDate(null)
      getInsParametersDates(regionChoose).then((res)=>{
        console.log('fecha obtenidoas:::::>',res)
        setInitialDate(res.initialDate)
        setFinalDate(res.finalDate)
      })
    }
  },[regionChoose])

  useEffect(()=>{
    if(showError){
      setRegionChoose(null)
    }
  },[showError])

  /********************************************/


  useEffect(()=>{
    if(stateVariable.value && regionChoose!=null && initialDate!=null && finalDate!=null){
      setIsValid(true)
    }else{
      setIsValid(false)
    }

  },[stateVariable.value,regionChoose,initialDate,finalDate])


  const handleExecuteIns = ()=>{
    console.log('stateVariable',stateVariable)
    console.log('regionChoose',regionChoose)
    console.log('initialDate',initialDate)
    console.log('finalDate',finalDate)
  }

  return {
    dates:{
      initialDate,
      setInitialDate,
      finalDate,
      setFinalDate
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
    optionsRegions, 
    setOptionsRegions,
    regionChoose,
    setRegionChoose,
    selectOptions, 
    setSelectOptions,
    handleExecuteIns,
    isValid
  }

}