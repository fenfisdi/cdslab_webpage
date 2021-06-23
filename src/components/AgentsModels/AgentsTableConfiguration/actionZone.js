import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import { ButtonsContainer } from './styles'

const ActionsZone = ({
  index,
  itemsCount,
  handleItemDeleted,
  handleSettings,
  isConfigured,
  setComponentChildren
}) => {

  const handleSettingsConfig = () => {
    handleSettings(index)
    setComponentChildren('distribution')
  }

  return (
    <ButtonsContainer>
      <IconButton
        onClick={() => handleSettingsConfig(index)}
        color="primary"
        aria-label="Sttings"
        component="span"
      >
        <SettingsOutlinedIcon />
      </IconButton>
      <IconButton
        disabled={!isConfigured}
        color="primary"
        aria-label="Sttings"
        component="span"
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        disabled={itemsCount === 1}
        onClick={() => handleItemDeleted(index)}
        color="primary"
        aria-label="Delete"
        component="span"
      >
        <DeleteOutlineIcon />
      </IconButton>
    </ButtonsContainer>
  )
}

export default ActionsZone
