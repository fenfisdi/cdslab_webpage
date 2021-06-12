import React, { useState } from 'react'
import { Dialog } from '@material-ui/core'
import { DialogTitle } from '@material-ui/core'
import { DialogContent } from '@material-ui/core'
import { DialogActions } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { AgentsDistribution } from './AgentsDistribution'


export const AgentsModalContainer = ({open,handleCloseModal,inputs}) => {

  const [step, setStep] = useState(1)


  return (
    <Dialog onClose={handleCloseModal} maxWidth='lg' fullWidth={true} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
          Help information
      </DialogTitle>
      <DialogContent dividers>
        <AgentsDistribution></AgentsDistribution>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCloseModal} style={{'color':'#333'}}>
            Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}
