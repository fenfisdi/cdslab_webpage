import React from 'react'
import './styles.css'
import SideNav from '../SideNav'
import { ChildrenContainer, MainContainer } from './styles'

export const Layout = ({ children }) => {
  return (
    <MainContainer>
      <SideNav></SideNav>
      <ChildrenContainer>{children}</ChildrenContainer>
    </MainContainer>
  )
}
