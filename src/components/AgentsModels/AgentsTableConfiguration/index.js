import React from 'react'
import {
  ColumnTitle,
  TableContainer,
  TableCell,
  TableRow,
  TableHeaderRow,
  CountCell,
  CountTitle
} from './styles'
import ActionsZone from './actionZone'
import { useConfigTableState } from './state'
import { Button } from '../../ui/Buttons'
import TableInput from './TableInput'

const AgentsTableConfiguration = ({
  initialItems,
  setItems,
  columns,
  showConfig = true,
  showCheck = true,
  showDelete = true,
  showAddButton = true,
  selectOptions,
  schemaItems,
  handleSettings
}) => {
  const {
    handleItemChanged,
    handleItemDeleted,
    handleAddItem,
  } = useConfigTableState({
    initialItems,
    setItems,
    columns,
    schemaItems
  })

  const renderRows = () =>
    initialItems.map((item, i) => (
      <TableRow key={'item-' + i}>
        <CountCell>
          <p>#{i + 1} </p>
        </CountCell>
        {columns.map((column, j) => (
          <TableCell key={'cell-' + j}>
            <TableInput
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
            itemsCount={initialItems.length}
            item={item}
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

      {showAddButton && (
        <Button onClick={handleAddItem} color="primary">
          Add
        </Button>
      )}      
    </>
  )
}

export default AgentsTableConfiguration
