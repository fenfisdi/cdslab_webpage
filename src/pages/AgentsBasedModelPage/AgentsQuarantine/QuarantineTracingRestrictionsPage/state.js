import { useEffect, useState } from 'react'
import { useStore } from '../../../../store/storeContext'
import { useQuarantineActions } from '@actions/quarantineGroupsActions'
import { getStateWithQueryparams } from '../../../CompartmentalModelPage/common'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router-dom'

export const useQuarantineTracingRestrictions = ({showSnack, setShowSnack}) => {

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


  const schemaItems={
    'name': 'Hola',
  }
 
  const initialItems = [{name:'Hola'},{name:'variable 2'}]

  const tableColumns = [
    { title: 'Quarantine by Tracing Variables', att: 'name', type: 'label',inputProps: { fullWidth: true }  },
  ]
  
  const [items, setItems] = useState(initialItems)


  useEffect(()=>{    
    if(items.length>0){           
      setIsValid(true) 
    }else{
      setIsValid(false) 
    }
  },[items])



  const handleSaveQuarantineGroups = ({body},QuarantineGroups) => {
    const has_cyclic_restrictions = true
    const has_tracing_restrictions = false
    const shemaQuarantineGroups = {
      'quarantine_groups': QuarantineGroups,
      'has_cyclic_restrictions': has_cyclic_restrictions,
      'has_tracing_restrictions': has_tracing_restrictions,
    }  
    saveQuarantineGroupsForm(shemaQuarantineGroups,idConfiguration)
  }

  return {
    tableColumns,
    items,
    schemaItems,
    setItems,
    isValid,
    handleSaveQuarantineGroups
  }

}

