import Card from '@material-ui/core/Card'
import styled, { css } from 'styled-components'

export const CardContainer = styled(Card)`
  ${({ theme }) => `
        background-color: ${theme.palette.secondary.dark};
        &:hover{
          background-color: ${theme.palette.secondary.light};
        }
    `}
      ${props => props.selected && css`
         ${({ theme }) => `
          background-color: ${theme.palette.secondary.main};
         `}
      `}
    color: white;
    width: 30%;
    height: 100px;
    min-width: 275px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 10px;

`