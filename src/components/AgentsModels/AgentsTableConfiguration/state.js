import { useState } from 'react'

export const useConfigTableState = ({ initialItems, columns, setItems }) => {
  
  const [openSettings, setOpenSettings] = useState(false)

  const handleAddItem = () => {
    const itemsCopy = [...initialItems]
    const newItem = {}
    columns.forEach((column) => {
      const {inputProps:{initialValue=''}=''} = column
      newItem[column.att] = initialValue
    })
    itemsCopy.push(newItem)

    //setItems(itemsCopy)
    setItems(itemsCopy)
  }

  const handleItemChanged = (i, event) => {
    const name = event.target ? event.target.name : event.slider.name
    const value = event.target ? event.target.value : event.slider.value
    console.log(event.slider)
    const itemsCopy = [...initialItems]
    itemsCopy[i] = { ...itemsCopy[i], [name]: value }
    //setItems(itemsCopy)
    setItems(itemsCopy)
  }

  const handleItemDeleted = (i) => {
    const itemsCopy = [...initialItems]
    itemsCopy.splice(i, 1)
    //setItems(itemsCopy)
    setItems(itemsCopy)
  }

  return {
    handleAddItem,
    handleItemChanged,
    handleItemDeleted,
    openSettings,
    setOpenSettings
  }
}
