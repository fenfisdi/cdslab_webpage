import React, { useEffect } from 'react'
import {
  ColumnTitle,
  TableContainer,
  TableCell,
  TableRow,
  TableHeaderRow,
  CountCell,
  CountTitle
} from './styles'
/* import { Button } from "../ui/Buttons" */
import { TextField } from '@material-ui/core'
import ActionsZone from './actionZone'
import { useAgentsTableConfigurationState } from './state'
import { Button } from '../../ui/Buttons'
/* import ModalRoot from "./ModalRoot" */

const AgentsTableConfiguration = ({
  initialItems,
  columns
}) => {
  const {
    items,
    handleItemChanged,
    handleItemDeleted,
    handleAddItem,
    handleSettings
  } = useAgentsTableConfigurationState({
    initialItems,
    columns
  })
  useEffect(() => {
    renderRows()
  }, [items])

  const renderRows = () =>
    items.map((item, i) => (
      <TableRow key={'item-' + i}>
        <CountCell>
          <p>#{i + 1} </p>
        </CountCell>
        {columns.map((column, j) => (
          <TableCell key={'cell-' + j}>
            <TextField
              style={{'background-color':'white'}}
              variant="outlined"
              type={column.type}
              name={column.att}
              value={item[column.att]}
              onChange={(event) => handleItemChanged(i, event)}
            />
          </TableCell>
        ))}
        <TableCell>
          <ActionsZone
            itemsCount={items.length}
            index={i}
            isConfigured={item.state === 'CONFIGURED'}
            handleItemDeleted={handleItemDeleted}
            handleSettings={handleSettings}
          />
        </TableCell>
      </TableRow>
    ))

  const fillTableHeader = () => {
    return (
      <TableHeaderRow>
        <CountTitle />
        {columns.map((column, i) => (
          <ColumnTitle key={'title-' + i}>{column.title}</ColumnTitle>
        ))}
        <ColumnTitle />
      </TableHeaderRow>
    )
  }

  return (
    <>
      <TableContainer>
        {fillTableHeader()}
        {renderRows()}
      </TableContainer>

      <Button onClick={handleAddItem}>
        Add
      </Button>      
    </>
  )
}

export default AgentsTableConfiguration
