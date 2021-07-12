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
import { AgentsModalContainer } from '../../AgentsModalContainer'

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
  const [modalSettings,setModalSettings] = useState({
    open:true,
    item:{},
    index:0
  })

  const [componentChildren, setComponentChildren] = useState(OPTIONS_MODAL.WEIGTHS)

  const Component = renderComponentChildre(componentChildren,{


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
      <AgentsModalContainer
        modalTitle='Mobility profile'       
        open={openSettings}
        handleClose={()=>{
          setModalSettings({...modalSettings,open:false})
        }}          
        render={Component}
      />
    </>
  )
}

export default ConfigTable
