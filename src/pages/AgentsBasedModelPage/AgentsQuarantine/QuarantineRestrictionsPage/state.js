import { isEmpty } from 'lodash'
import {  useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useConfigurationActions } from '../../../../actions/configurationActions'
import { useStore } from '../../../../store/storeContext'
import { getStateWithQueryparams } from '../../../CompartmentalModelPage/common'
import useFieldsCreation from './fieldsCreation'



export  const useQuarantineRestrictionsPageState = () => {
  const history = useHistory()
  const {
    state: {
      configuration: { listConfigurationTime, error }
    },
    dispatch
  } = useStore()

  const { 
    getConfigurationAction,
    getListConfigurationTime
  } = useConfigurationActions(dispatch)

  const dataTimeWithoutRestrictionsModeSelect = [
    {label:'fixed',value:'fixed'},
    {label:'random',value:'random'}
  ]

  const [initialDate, setInitialDate] = useState(null)
  const [idConfiguration, setIdConfiguration] = useState('')
 
  const fields = useFieldsCreation({
    dataGlobalCuarantineTimeSelect:listConfigurationTime,
    dataTimeWithoutRestrictionsModeSelect,
    dataTimeWithoutRestrictionsSelect:listConfigurationTime
  })

  const {
    globalCuarantineTimeSelect,
    globalCuarantineTimeInput,
    timeWithoutRestrictionsModeSelect,
    timeWithoutRestrictionsSelect,
    timeWithoutRestrictionsInput
  } = fields

  useEffect(()=>{
    if(listConfigurationTime && listConfigurationTime.length == 0 && error == null){
      getListConfigurationTime()
    }
  },[listConfigurationTime])

  const handleDate = (dateValue) => {
    setInitialDate(dateValue)
  } 

  useEffect(()=>{
    console.log('fields',fields)
    console.log('initialDate',initialDate)
  },[fields,initialDate])

  useEffect(()=>{
    const params = getStateWithQueryparams(history)    
    if(!isEmpty(params)){
      setIdConfiguration(params.idConfiguration)
    }
  },[history])

  const redirectToSusceptibilityGroupsPage = () => {
    
    history.push({
      pathname: '',
      search: `?idConfiguration=${idConfiguration}`
    })
  }
  
  return {
    initialDate,
    globalCuarantineTimeSelect,
    globalCuarantineTimeInput,
    timeWithoutRestrictionsModeSelect,
    timeWithoutRestrictionsSelect,
    timeWithoutRestrictionsInput,
    listConfigurationTime,
    setInitialDate,
    handleDate,
    redirectToSusceptibilityGroupsPage
  }

}