import { IconButton } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import CheckIcon from '@material-ui/icons/Check'
import React from 'react'

const OptionButtons = ({ showConfig = false, showCheck = false, showInfo = false }) => {
  return (
    <>
      <Grid container>
        { showConfig && (
          <Grid item xs={4}>
            <IconButton
              onClick={() => ''}
              color="primary"
              aria-label="Sttings"
              component="span"
            >
              <SettingsOutlinedIcon />
            </IconButton>
          </Grid>
        )}
        { showCheck && (
          <Grid item xs={4}>
            <IconButton
              disabled={false}
              color="primary"
              aria-label="Sttings"
              component="span"
            >
              <CheckIcon />
            </IconButton>
          </Grid>
        )}
        { showInfo && (
          <Grid item xs={4}>
            <IconButton
              color="primary" aria-label="Information" component="span"
            >
              <InfoOutlinedIcon />
            </IconButton>
             
            
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default OptionButtons
