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
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function SnackbarComponent({configData,handleCloseSnack,successMessage,errorMessage,snackDuration}) {
  const classes = useStyles()
  const {show, success, error}=configData || {}

  

  return (
    <div className={classes.root}>
     
      {success&&<Snackbar open={show} autoHideDuration={snackDuration} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="success">
          {successMessage}
        </Alert>        
      </Snackbar>}

      {error && <Snackbar open={show} autoHideDuration={snackDuration} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>}

    </div>
  )
}