import { useState } from 'react'
import { useHistory } from 'react-router'

export const useAgentsAgeGroups = () => {

  const history = useHistory()

  const initialItems = [
    {
      agename: '',
      population: ''
    }
  ]
  const tableColumns = [
    { title: 'Age group name', att: 'agename', type: 'text' },
    { title: '% of population', att: 'population', type: 'number' }
  ]
  const [items, setItems] = useState(initialItems)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [openSettings, setOpenSettings] = useState(false)
  
  const redirectToMobilityGroupsPage = () => {
    history.push({
      pathname: 'agentsMobilityGroups'
    })
  }

  const handleSettings = (i) => {
    setCurrentIndex(i)
    setOpenSettings(true)
  }

  const handleCloseSettings = (item) => {
    console.log(item)
    console.log('HANDLE CLOSED', item)
    const itemsCopy = [...items]
    const state = item?.state
    itemsCopy[currentIndex] = { ...itemsCopy[currentIndex], state: state }
    setItems(itemsCopy)
    setOpenSettings(false)
  }

  return {
    redirectToMobilityGroupsPage,
    items,
    setItems,
    handleSettings,
    openSettings,
    setOpenSettings,
    handleCloseSettings,
    currentIndex,
    tableColumns
  }
    
  
}
