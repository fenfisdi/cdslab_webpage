import { useState } from 'react'
import { useStore } from '../../../../store/storeContext'
import useFieldsCreation from './fieldsCreation'

export const useAgentsDiseaseStateGroups = () => {
  const {
    state: {      
      agentsDiseaseStateGroups: { data, error },
      configuration: { listConfigurationDistance, error:errorListConfigurationDistance }
    },
    dispatch
  } = useStore()

  const modalsFields = useFieldsCreation()
  const{
    spreadRadius,
    canGetinfected,
    isInfected,
    canSpread,
  } = modalsFields

  const schemaItems={
    'name': '',
    'can_infected': false,
    'is_infected': false,
    'can_spread': false,
    'spread_radius': 0,
    'spread_radius_unit': null,
    'spread_probability': 0,
    'distributions': {},
    'state':''
  }
 
  const initialItems = [{...schemaItems}]

  const tableColumns = [
    { title: 'Quarantine Groups', att: 'name', type: 'text',inputProps: { fullWidth: true }  },
  ]
  
  const fieldsToDiseaseModal = () =>{
    return{
      headers:[
        {label:'Parameter',attr:'paramater'},
        {label:'Value',attr:'type'},
        {label:'',attr:'extra'}
      ],
      body:[
        {
          paramater:'Can get infected?',
          type:'switch',
          props:{
            ...canGetinfected,
            handleChange:canGetinfected.onChange                               
          }
        },
        {
          paramater:'Is infected?',
          type:'switch',
          props:{
            ...isInfected,
            handleChange:isInfected.onChange
          }
        },
        {          
          paramater:'Can spread?',
          type:'switch',
          name:'canspread',
          props:{
            ...canSpread,
            handleChange:canSpread.onChange            
          }
        },
      ]
    }
  }

  const [items, setItems] = useState(initialItems)

  return {
    tableColumns,
    items,
    schemaItems,
    setItems,
    fieldsToDiseaseModal
  }

}

