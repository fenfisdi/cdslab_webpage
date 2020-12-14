import React from 'react'
import { ItemLink, Menu, SideNaveContainer } from './styles'

const SideNav = () => {
  return (
    <SideNaveContainer>
      <Menu>
        <ItemLink to='/population_settings'>Population settings</ItemLink>
        <ItemLink to='/infection_diseases_states'>Infection and diseases states</ItemLink>
        <ItemLink to='/states_transitions'>States transitions</ItemLink>
        <ItemLink to='/risks_settings'>Risks settings</ItemLink>
      </Menu>
    </SideNaveContainer>
  )
}

export default SideNav
