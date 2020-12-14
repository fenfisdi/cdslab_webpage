import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { primary, secondary } from '../../styles/constants'
const activeClassName = 'nav-item-active'
export const SideNaveContainer = styled.nav`
  display: inline-block;
  background: #f3f3f3;
  padding: 10px;
`
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`
export const ItemLink = styled(NavLink).attrs({ activeClassName })`
  padding: 10px 5px;
  color: ${primary};
   &.${activeClassName} {
    color: white;
    background: ${primary}
  }
`
