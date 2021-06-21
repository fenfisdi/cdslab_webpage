import { useState } from 'react'

export const useConfigTableState = ({ initialItems, columns, setInitialItems }) => {
  const [currentIndex, setCurrentIndex] = useState(null)
  const [openSettings, setOpenSettings] = useState(false)

  const handleAddItem = () => {
    const itemsCopy = [...initialItems]
    const newItem = {}
    columns.forEach((column) => {
      newItem[column.att] = ''
    })
    itemsCopy.push(newItem)

    //setItems(itemsCopy)
    setInitialItems(itemsCopy)
  }

  const handleItemChanged = (i, event) => {
    const name = event.target ? event.target.name : event.slider.name
    const value = event.target ? event.target.value : event.slider.value
    console.log(event.slider)
    const itemsCopy = [...initialItems]
    itemsCopy[i] = { ...itemsCopy[i], [name]: value }
    //setItems(itemsCopy)
    setInitialItems(itemsCopy)
  }

  const handleItemDeleted = (i) => {
    const itemsCopy = [...initialItems]
    itemsCopy.splice(i, 1)
    //setItems(itemsCopy)
    setInitialItems(itemsCopy)
  }

  const handleSettings = (i) => {
    setCurrentIndex(i)
    setOpenSettings(true)
  }

  const handleCloseSettings = (item) => {
    console.log('HANDLE CLOSED', item)
    const itemsCopy = [...initialItems]
    const state = item?.state
    itemsCopy[currentIndex] = { ...itemsCopy[currentIndex], state: state }
    //setItems(itemsCopy)
    setInitialItems(itemsCopy)
    setOpenSettings(false)    
  }

  return {
    handleAddItem,
    handleItemChanged,
    handleItemDeleted,
    handleSettings,
    openSettings,
    setOpenSettings,
    handleCloseSettings,
    currentIndex
  }
}
