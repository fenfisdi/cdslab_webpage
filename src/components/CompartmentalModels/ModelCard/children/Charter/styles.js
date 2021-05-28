import Card from '@material-ui/core/Card'
import styled, { css } from 'styled-components'

export const CardContainer = styled(Card)`
  ${({ theme }) => `
        background-color: ${theme.palette.secondary.card};
        &:hover{
          background-color: ${theme.palette.secondary.cardSelect};
        }
    `}
    ${props => props.selected && css`
        ${({ theme }) => `
        background-color: ${theme.palette.secondary.cardSelect};
        `}
    `}
    color: ${({ theme }) => theme.palette.secondary.cardFont};
    width:  80px;
    height: 80px;
    min-width: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    margin-bottom: 10px;
    svg {
      margin-right:10px;
    }
`