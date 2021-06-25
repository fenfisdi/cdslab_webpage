import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useAgentsMobilityGroupsActions } from '@actions/agentsMobilityGroupsActions'
import { useStore } from '../../../store/storeContext'

export const useAgentsMobilityGroups = () => {
  const history = useHistory()
  const {
    state: {      
      agentsMobilityGroupsModel: {
        data,
        error
      }
    },
    dispatch
  } = useStore()
  
  const { saveMobilityGroupsInformation, getMobilityGroupsInformation } = useAgentsMobilityGroupsActions(dispatch)
  
  const schemaItems={
    name: '',
    distribution: {
      'identifier':'',
      'name':'',
      'distribution_type':'',
      'distribution_name':'',
      'distribution_filename':'',
      'distribution_extra_arguments': {}
    },      
  }
 
  const initialItems = [{...schemaItems}]

  const tableColumns = [
    { title: 'Mobility group name', att: 'name', type: 'text',inputProps: { fullWidth: true }  },
  ]

  const [items, setItems] = useState(initialItems)

  
  useEffect(()=>{
    console.log(items)
  },[items])


  useEffect(()=>{     
    if(data.length == 0 && !error){
      getMobilityGroupsInformation('94257c90-d396-11eb-a821-02420a000520')
    }else if(data.length > 0 && !error){
      console.log('hola::::::::::::::::::::::>',data)
    }
  },[data,error])
  

  const redirectToSusceptibilityGroupsPage = () => {
    
    history.push({
      pathname: 'agentSusceptibilityGroups'
    })
  }

  const handleClickSaveMobilityGroups =(information)=>{    
    saveMobilityGroupsInformation(information,'94257c90-d396-11eb-a821-02420a000520').then(()=>{      
      getMobilityGroupsInformation('94257c90-d396-11eb-a821-02420a000520')
      redirectToSusceptibilityGroupsPage()
    })
    
  }
  
  return {
    tableColumns,
    items, 
    setItems,
    schemaItems,
    handleClickSaveMobilityGroups
  }
  
}
