import React, {useState} from 'react'
import {
  TableContainer,
  TableCell,
  TableRow,
} from './styles'
import { Button } from '../../../ui/Buttons'
import { useConfigTableState } from './state'
import ActionsZone from '../ActionsZone'
import TableInput from './TableInput'
import { renderComponentChildre } from '../../../../utils/common'
import { OPTIONS_MODAL } from '../../../../constants/agents'
import { AgentsModalContainer } from '../../../../components/AgentsModels/AgentsModalContainer'
import CompartmentalButton from '../../../CompartmentalModels/CompartmentalButton/'


const ConfigTable = ({
  initialItems,
  columns,
  showConfig = true,
  showCheck = true,
  showDelete = true,
  showAddButton = true,
  selectOptions,
}) => {
  const {
    items,
    handleItemChanged,
    handleItemDeleted,
    handleAddItem,
    handleSettings,
    openSettings,
    handleCloseSettings,
  } = useConfigTableState({
    initialItems,
    columns
  })
  
  const [componentChildren, setComponentChildren] = useState(OPTIONS_MODAL.VULNERABILITYGROUP)

  const Component = renderComponentChildre(componentChildren)


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
      <AgentsModalContainer
        modalTitle='Vulnerability Groups'       
        open={openSettings}
        handleClose={handleCloseSettings}           
        render={Component}
      />  
    </>
  )
}

export default ConfigTable
