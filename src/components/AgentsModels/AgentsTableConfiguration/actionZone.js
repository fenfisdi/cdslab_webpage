import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import { ButtonsContainer } from './styles'

const ActionsZone = ({
  index,
  item,
  itemsCount,
  handleItemDeleted,
  handleSettings,
  sttingsConfigured,
  isConfigured,
  showConfig = true,
  showCheck = true,
  showDelete = true
}) => {
  return (
    <ButtonsContainer>
      {showConfig && (
        <IconButton
          disabled={!sttingsConfigured}
          onClick={() => handleSettings({index,item})}
          color="primary"
          aria-label="Sttings"
          component="span"
        >
          <SettingsOutlinedIcon />
        </IconButton>
      )}
      {showCheck && (
        <IconButton
          disabled={!isConfigured}
          color="primary"
          aria-label="Sttings"
          component="span"
        >
          <CheckIcon />
        </IconButton>
      )}
      {showDelete && (
        <IconButton
          disabled={itemsCount === 1}
          onClick={() => handleItemDeleted({index,item})}
          color="primary"
          aria-label="Delete"
          component="span"
        >
          <DeleteOutlineIcon />
        </IconButton>
      )}
    </ButtonsContainer>
  )
}

export default ActionsZone
