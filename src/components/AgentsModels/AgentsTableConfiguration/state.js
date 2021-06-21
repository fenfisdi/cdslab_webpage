import { useState } from 'react'

export const useAgentsTableConfigurationState = ({ initialItems, columns }) => {
  const [items, setItems] = useState(initialItems)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [openSettings, setOpenSettings] = useState(false)

  const handleAddItem = () => {
    const itemsCopy = [...items]
    const newItem = {}
    columns.forEach((column) => {
      newItem[column.att] = ''
    })
    itemsCopy.push(newItem)

    setItems(itemsCopy)
  }

  const handleItemChanged = (i, event) => {
    const itemsCopy = [...items]
    itemsCopy[i] = { ...itemsCopy[i], [event.target.name]: event.target.value }
    setItems(itemsCopy)
  }

  const handleItemDeleted = (i) => {
    const itemsCopy = [...items]
    itemsCopy.splice(i, 1)
    setItems(itemsCopy)
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
    items,
    setItems,
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
