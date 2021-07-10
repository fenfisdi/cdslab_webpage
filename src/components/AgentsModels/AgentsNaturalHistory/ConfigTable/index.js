import React from 'react'
import {
  TableContainer,
  TableCell,
  TableRow,
} from './styles'
import { Button } from '../../../ui/Buttons'
import { useConfigTableState } from './state'
import ActionsZone from '../ActionsZone'
import TableInput from './TableInput'
import ModalRoot from '../ModalRoot'

const ConfigTable = ({
  initialItems,
  columns,
  showConfig = true,
  showCheck = true,
  showDelete = true,
  showAddButton = true,
  selectOptions,
  settingsComponent,
  distributionType
}) => {
  const {
    items,
    handleItemChanged,
    handleItemDeleted,
    handleAddItem,
    handleSettings,
    openSettings,
    handleCloseSettings,
    currentIndex,
  } = useConfigTableState({
    initialItems,
    columns
  })

  const renderRows = () =>
    items.map((item, i) => (
      <TableRow key={'item-' + i}>
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
            itemsCount={items.length}
            index={i}
            isConfigured={item.state === 'CONFIGURED'}
            handleItemDeleted={handleItemDeleted}
            handleSettings={handleSettings}
          />
        </TableCell>
      </TableRow>
    ))

  return (
    <>
      <TableContainer>
        {renderRows()}
      </TableContainer>

      {showAddButton && (
        <Button onClick={handleAddItem} color="primary">
          Add
        </Button>
      )}
      <ModalRoot
        distributionType={distributionType}
        open={openSettings}
        handleClose={handleCloseSettings}
        children={settingsComponent}
        currentItem={items[currentIndex]}
      />
    </>
  )
}

export default ConfigTable
