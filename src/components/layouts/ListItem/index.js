import React from 'react'
import Item from '../Item'

const ListItem = ({ list = [], type, optionMenu, handleClick }) => {

  const renderDefault = () => {
    return <ul>
      {list.map(item => (
        <Item key={item._id}
              id={item._id}
              name={item.name}
              optionMenu={optionMenu}
              handleClick={handleClick} />
      ))}
    </ul>
  }

  return (
    renderDefault()
  )
}

export default ListItem
