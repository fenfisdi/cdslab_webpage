import React from 'react'
import { Body, Header, ItemContainer, ItemContent } from './styles'
import { Menu } from '@material-ui/core'
import CustomizedMenus from '../../ui/CustomMenu'

const Item = ({ name, descripton, resume, optionMenu }) => {


  const fillContent = () => {
    return <ItemContent>
      <Header>
        <h3>{name}</h3>
      </Header>
      <Body>

      </Body>
    </ItemContent>
  }

  const fillMenu = () => {
    return   <>
     <CustomizedMenus options={optionMenu} />
      </>
  }
  return (
    <ItemContainer>
      {fillContent()}
      {fillMenu()}
    </ItemContainer>
  )
}

export default Item
