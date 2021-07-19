import { isEmpty } from 'lodash'
import {  useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { getStateWithQueryparams } from '../../../CompartmentalModelPage/common'
import useFieldsCreation from './fieldsCreation'



export  const useQuarantineRestrictionsPageState = () => {

  const history = useHistory()
  const [initialDate, setInitialDate] = useState(null)
  const [idConfiguration, setIdConfiguration] = useState('')
  const dataGlobalCuarantineTimeSelect =[{label:'uni 1',value:'uni 1'},{label:'uni 2',value:'uni 2'}]
  const dataTimeWithoutRestrictionsModeSelect =[{label:'mode uni 1',value:'mode uni 1'},{label:'mode uni 2',value:'mode uni 2'}]
  const dataTimeWithoutRestrictionsSelect =[{label:'res uni 1',value:'res uni 1'},{label:'res uni 2',value:'res uni 2'}]

  const fields = useFieldsCreation({dataGlobalCuarantineTimeSelect,dataTimeWithoutRestrictionsModeSelect,dataTimeWithoutRestrictionsSelect})

  const {
    globalCuarantineTimeSelect,
    globalCuarantineTimeInput,
    timeWithoutRestrictionsModeSelect,
    timeWithoutRestrictionsSelect,
    timeWithoutRestrictionsInput
  } = fields

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
    setInitialDate,
    handleDate,
    redirectToSusceptibilityGroupsPage
  }

}