import { useState } from 'react'

export const useAgentsDiseaseStateGroups = () => {
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
  
  const [items, setItems] = useState(initialItems)

  return {
    tableColumns,
    items,
    schemaItems,
    setItems
  }

}

