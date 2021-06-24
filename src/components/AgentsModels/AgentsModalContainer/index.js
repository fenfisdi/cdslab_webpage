import React from 'react'
import { makeStyles } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import { Modal } from '@material-ui/core'
import { Fade } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,    
    padding: theme.spacing(2, 4, 3),
    width: '50%',
    height: '50%'
  }
}))

export const AgentsModalContainer = (
  {
    open,
    handleClose,
    render
  }) => {
  const Component  = render  
  const classes = useStyles()

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={()=>{handleClose()}}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>          
          <Component.container {...Component.props}/>
        </div>
      </Fade>
    </Modal>
  )
}
