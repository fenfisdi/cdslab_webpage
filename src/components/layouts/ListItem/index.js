import React from 'react'
import Item from '../Item'

const ListItem = ({ list = [], type, optionMenu }) => {

  const renderDefault = () => {
    return <ul>
      {list.map(item => (
        <Item key={item._id} name={item.name} optionMenu={optionMenu} />
      ))}
    </ul>
  }

  return (
    renderDefault()
  )
}

export default ListItem
