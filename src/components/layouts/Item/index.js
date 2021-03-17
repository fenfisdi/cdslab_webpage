import React from 'react'
import { Body, Header, ItemContainer, ItemContent } from './styles'
import ListItemMenu from '../../ui/ListMenuItem'

const Item = ({ id, name, customBody, optionMenu, handleClick }) => {
  const fillBody = () => (
    <Body>
      {customBody && customBody()}
    </Body>
  )

  const fillMenu = () => (
    <ListItemMenu options={optionMenu} />
  )

  const fillContent = () => (
    <ItemContent onClick={() => onClick(id)}>
      <Header>
        <h3>{name}</h3>
      </Header>
      {fillBody()}
    </ItemContent>
  )

  const onClick = (id) => {
    handleClick && handleClick(id)
  }

  return (
    <ItemContainer>
      {fillContent()}
      {fillMenu()}
    </ItemContainer>
  )
}

export default Item
