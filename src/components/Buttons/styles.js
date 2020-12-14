import styled, { css } from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  font-weight: 700;
  padding: 5px 10px;
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
