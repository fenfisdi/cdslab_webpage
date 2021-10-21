import styled from 'styled-components'

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const TableRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
  background: ${(props) => props.theme.palette.grays.light};
  margin: 5px 0;
`
export const TableCell = styled.div`
  flex-grow: 0;
  width: inherit;
  margin: 0 10px;
`
export const ActionCell = styled.div`
  width: 100px;
`
export const CountCell = styled.div`
  color: ${(props) => props.theme.palette.primary.dark};
`
export const TableHeaderRow = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  padding: 10px 20px;
  justify-content: ${(props) =>
    props.unique ? 'flex-start' : 'space-between'};
  background: ${(props) => props.theme.palette.grays.main};
`
export const ColumnTitle = styled.p`
  flex-grow: 0;
  color: black;
  padding: 5px;
  width: inherit;
  font-size: 0.8em;
  font-weight: normal;
  width: 100%;
  text-align: center;
`
export const CountTitle = styled.div``