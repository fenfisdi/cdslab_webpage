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
import { TextField } from '@material-ui/core'
import ActionsZone from './actionZone'
import { useAgentsTableConfigurationState } from './state'
import { Button } from '../../ui/Buttons'
import { AgentsModalContainer } from '../AgentsModalContainer'

const AgentsTableConfiguration = ({
  initialItems,
  columns,
  showConfig = true,
  showCheck = true,
  showDelete = true,
  selectOptions,
  handleSettings,
  setComponentChildren
}) => {
  const {
    items,
    handleItemChanged,
    handleItemDeleted,
    handleAddItem,
  } = useAgentsTableConfigurationState({
    initialItems,
    columns
  })
  const renderRows = () =>
    items.map((item, i) => (
      <TableRow key={'item-' + i}>
        <CountCell>
          <p>#{i + 1} </p>
        </CountCell>
        {columns.map((column, j) => (
          <TableCell key={'cell-' + j}>
            <TextField
              type={column.type}
              name={column.att}
              value={item[column.att]}
              selectOptions={selectOptions}
              onChange={(event) => handleItemChanged(i, event)}
              {...column.inputProps}
            />
          </TableCell>
        ))}
        <TableCell>
          <ActionsZone
            showConfig={showConfig}
            showCheck={showCheck}
            showDelete={showDelete}
            itemsCount={items.length}
            index={i}
            isConfigured={item.state === 'CONFIGURED'}
            handleItemDeleted={handleItemDeleted}
            handleSettings={handleSettings}
            setComponentChildren={setComponentChildren}
          />
        </TableCell>
      </TableRow>
    ))

  const fillTableHeader = () => {
    return (
      <TableHeaderRow unique={columns.length === 1}>
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

      <Button onClick={handleAddItem} color="primary">
        Add
      </Button>
      
    </>
  )
}

export default AgentsTableConfiguration
