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
import theme from '@styles/cdslabTheme'
import { renderComponentChildre } from '../../../../utils/common'
import { OPTIONS_MODAL } from '../../../../constants/agents'
import { AgentsModalContainer } from '../../AgentsModalContainer'
import VulnerabilityGroup from '../../../../pages/AgentsBasedModelPage/VulnerabilityGroup'
import ModalCommon from '../../../ui/ModalCommon'
import { useHeaderStyles } from '../../../../pages/LandingPage/styles'

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

  const [openModalCancel, setOpenModalCancel] = useState(false)
  const classes = useHeaderStyles(theme)
  const [componentChildren, setComponentChildren] = useState(OPTIONS_MODAL.WEIGTHS)

  const Component = renderComponentChildre(componentChildren,{


  })

  const handleCloseModalCancel = () => {
    setOpenModalCancel(false)
  }

  const openModal = () => {
    setOpenModalCancel(true)
  }

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
      <ModalCommon
        classes={classes}
        handleOptions={''}
        handleClose={handleCloseSettings}
        open={openSettings}
        disableBackdropClick={true}
        title={'Cancelar solicitud'}
        handleConfirm={''}
        cancel={''}
        confirm={'Done'}
      >
        <VulnerabilityGroup
        />
      </ModalCommon>
    </>
  )
}

export default ConfigTable
