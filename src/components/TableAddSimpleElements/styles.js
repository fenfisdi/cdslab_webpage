import styled from 'styled-components'
import { primary } from '../../styles/constants'

export const TableContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;
`
export const TableRow = styled.div`
display: flex;
width: 100%;
align-items: center;
padding: 5px;
justify-content: space-between;
`
export const TableCell = styled.div`
 flex-grow: 0;
 width: inherit;
`
export const TableHeaderRow = styled.div`
display: flex;
width: 100%;
align-items: center;
padding: 5px 5px 5px 0;
justify-content: space-between;
background: ${primary};
`
export const ColumnTitle = styled.div`
 flex-grow: 0;
color: white;
padding: 5px;
width: inherit;
`
