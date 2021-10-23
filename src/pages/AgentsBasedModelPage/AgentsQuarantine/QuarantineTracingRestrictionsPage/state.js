import { useEffect, useState } from 'react'
import { useStore } from '../../../../store/storeContext'
import { useQuarantineActions } from '@actions/quarantineGroupsActions'
import { getStateWithQueryparams } from '../../../CompartmentalModelPage/common'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router-dom'

export const useQuarantineTracingRestrictions = ({showSnack, setShowSnack}) => {

  const {
    state: {      
      quarantineGroups: {
        dataTracing,
        error
      }
    },
    dispatch
  } = useStore()

  const history = useHistory()
  const [isValid, setIsValid] = useState(false)
  const [idConfiguration, setIdConfiguration] = useState('')

  const{
    getQuarantineTracingAction
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
 
  const initialItems = [{...schemaItems}]

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

  useEffect(()=>{  
    console.log('entro',dataTracing,error,idConfiguration)   
    if(dataTracing == null && !error && idConfiguration!=''){
      getQuarantineTracingAction()
      console.log('dataTracingNull',dataTracing)
    }else if(dataTracing != null && !isEmpty(dataTracing) && !error){    
      setItems(convertDataTracing(dataTracing))
      console.log('dataTracing',convertDataTracing(dataTracing))
    }
  },[dataTracing,error,idConfiguration])

  const convertDataTracing = (data) =>{
    let dataT = []
    for (const property in data) {
      dataT.push({
        'name': data[property],
        'variable': property
      })
    }
    return dataT
  }

  return {
    tableColumns,
    items,
    schemaItems,
    setItems,
    isValid,
  }

}

