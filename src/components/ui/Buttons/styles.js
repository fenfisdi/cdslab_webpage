import styled, { css } from 'styled-components'
import { Button } from '@material-ui/core'

export const NormalButton = styled(Button)`
  background: ${(props) => props.background || 'palevioletred'};
  & svg {
    margin: 4px;
  }
  ${(props) => {
    !props.canDisplay &&
      css`
        display: none;
      `
  }}
`
