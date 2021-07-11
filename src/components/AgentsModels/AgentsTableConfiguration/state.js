import { isEmpty } from 'lodash'

export const useConfigTableState = ({ initialItems, columns, setItems, schemaItems={} }) => {
  
  const handleAddItem = () => {
    const itemsCopy = [...initialItems]
    let newItem = {}
    if(!isEmpty(schemaItems)){
      newItem = {...schemaItems}
    }else{
      columns.forEach((column) => {
        const {inputProps:{initialValue=''}=''} = column
        newItem[column.att] = initialValue
      })      
    }
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
    handleItemDeleted
  }
}
