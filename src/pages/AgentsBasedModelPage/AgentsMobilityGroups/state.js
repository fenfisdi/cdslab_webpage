import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

export const useAgentsMobilityGroups = () => {
  const history = useHistory()

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

  const redirectToSusceptibilityGroupsPage = () => {
    history.push({
      pathname: 'agentSusceptibilityGroups'
    })
  }
  
  return {
    tableColumns,
    items, 
    setItems,
    schemaItems,
    redirectToSusceptibilityGroupsPage
  }
  
}
