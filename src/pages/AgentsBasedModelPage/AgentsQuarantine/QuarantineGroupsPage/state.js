import { useEffect, useState } from 'react'
import { useStore } from '../../../../store/storeContext'
import { useQuarantineActions } from '@actions/quarantineGroupsActions'
import useFieldsCreation from './fieldsCreation'
import fieldsToQuarantineGroups from './tableFieldsCreations'
import { getStateWithQueryparams } from '../../../CompartmentalModelPage/common'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router-dom'

export const useAgentsDiseaseStateGroups = ({showSnack, setShowSnack}) => {

  const {
    dispatch
  } = useStore()

  const history = useHistory()
  const [isValid, setIsValid] = useState(false)
  const [idConfiguration, setIdConfiguration] = useState('')

  const{
    saveQuarantineGroupsForm
  } = useQuarantineActions(dispatch)

  useEffect(()=>{
    const params = getStateWithQueryparams(history)    
    if(!isEmpty(params)){
      setIdConfiguration(params.idConfiguration)
    }
  },[history])

  const modalsFields = useFieldsCreation()
  
  const{
    cyclicField,
    tracingField,
  } = modalsFields

  const fields = fieldsToQuarantineGroups({cyclicField,tracingField})

  const schemaItems={
    'name': '',
  }
 
  const initialItems = [{...schemaItems}]

  const tableColumns = [
    { title: 'Quarantine Groups', att: 'name', type: 'text',inputProps: { fullWidth: true }  },
  ]
  
  const [items, setItems] = useState(initialItems)


  useEffect(()=>{    
    if(items.length>0){           
      setIsValid(true) 
    }else{
      setIsValid(false) 
    }
  },[items])

  const redirectQuarantineGroups = (has_cyclic_restrictions,has_tracing_restrictions) =>{
    if(has_cyclic_restrictions && has_tracing_restrictions){
      history.push({
        pathname: 'quarantineRestrictionsPage',
        search: `?idConfiguration=${idConfiguration}?redirec=true`
      })
    }else if(has_cyclic_restrictions && !has_tracing_restrictions){
      history.push({
        pathname: 'quarantineRestrictionsPage',
        search: `?idConfiguration=${idConfiguration}`
      })
    }else if(!has_cyclic_restrictions && has_tracing_restrictions){
      history.push({
        pathname: 'quarantineTracingRestrictionsPage',
        search: `?idConfigurationsss=${idConfiguration}`
      })
    }else{
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: 'Select a quarantine restriction'
        }
      )
    }
  }

  const handleSaveQuarantineGroups = ({body},QuarantineGroups) => {
    const has_cyclic_restrictions = false
    const has_tracing_restrictions = true
    const shemaQuarantineGroups = {
      'quarantine_groups': QuarantineGroups,
      'has_cyclic_restrictions': has_cyclic_restrictions,
      'has_tracing_restrictions': has_tracing_restrictions,
    }  
    saveQuarantineGroupsForm(shemaQuarantineGroups,idConfiguration)
    redirectQuarantineGroups(has_cyclic_restrictions,has_tracing_restrictions)
  }

  return {
    tableColumns,
    items,
    schemaItems,
    setItems,
    fields,
    isValid,
    handleSaveQuarantineGroups
  }

}

