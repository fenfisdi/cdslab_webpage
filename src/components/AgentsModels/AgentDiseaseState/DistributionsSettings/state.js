import { useState } from 'react'

export const useDistributionsConfigState = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [openSettings, setOpenSettings] = useState(false)

  const handleSettings = (i) => {
    setCurrentIndex(i)
    setOpenSettings(true)
  }

  const handleCloseSettings = (item) => {
    const itemsCopy = [...items]
    const state = item?.state
    itemsCopy[currentIndex] = { ...itemsCopy[currentIndex], state: state }
    setItems(itemsCopy)
    setOpenSettings(false)
  }

  return {
    items,
    setItems,
    handleSettings,
    openSettings,
    setOpenSettings,
    handleCloseSettings,
    currentIndex
  }
}
