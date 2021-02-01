import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { secondary } from '../../../styles/constants'

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  align-items: center;
`

export const NavigationBack = styled.div`
  display: flex;
`

export const NavigationForward = styled(Link)`
  display: flex;
  color: ${secondary};
  align-items: center;
`
