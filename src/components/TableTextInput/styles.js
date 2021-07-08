import styled from 'styled-components'
// import { primary } from '../../styles/constants'

export const Table = styled.ul`
  display: flex;
  flex-direction: column;
  width: max-content;
`

export const TitleRow = styled.li`
  display: flex;
  margin-bottom: 10px;
  list-style: none;
  background-color: #CFD8DC;
  font-weight: 400;
  color: #000;
  height: 20px;
`

export const Row = styled.li`
  display: flex;
  list-style: none;
  background-color: #ECEFF1;
  height: 65px;
  font-weight: 400;
  color: #000;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 150px;
  border: 1px solid white;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 150px;
`

export const Input = styled.input`
  width: 100px;
  height: 20px;
  border: 1px solid #025E5C;
  color: #025E5C;
  box-sizing: border-box;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 23px;
  padding: 1px 5px;
  outline: none;
`
