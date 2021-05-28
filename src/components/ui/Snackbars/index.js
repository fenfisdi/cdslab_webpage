import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display:'flex',
    '& > * + *': {
      marginTop: theme.spacing(2),
    }
  },
  snackbar:{
    width: '50%',
    marginLeft:'7%',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  }
}))

export default function SnackbarComponent({configData,handleCloseSnack,successMessage,errorMessage,snackDuration}) {
  const classes = useStyles()
  const {show, success, error}=configData || {}

  const displayMessage =(message)=>{
    let messageToShow = ''
    if (typeof message === 'string' || message instanceof String){
      messageToShow = message
    }else{
      messageToShow = 'there was an error, please contact us.'
    }
    return  messageToShow
  }

  return (
    <div className={classes.root}>
     
      {success && <Snackbar className={classes.snackbar} open={show} autoHideDuration={snackDuration} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="success">
          {displayMessage(successMessage)}
        </Alert>        
      </Snackbar>}

      {error && <Snackbar className={classes.snackbar} open={show} autoHideDuration={snackDuration} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="error">
          {displayMessage(errorMessage)}
        </Alert>
      </Snackbar>}

    </div>
  )
}