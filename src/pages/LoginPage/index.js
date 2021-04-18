import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import { useLoginState } from './state'
import { useLoginStyles } from './styles'
import { LoginForm } from '../../components/LoginForm'
import theme from '../../styles/cdslabTheme'
import SnackbarComponent from '../../components/ui/Snackbars'
import QRrender from '../QRPage'

export const LoginPage = () => {
  const LOGIN_ENABLED = process.env.REACT_APP_LOGIN_ENABLED === 'true'
  const classes = useLoginStyles(theme)
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { loading, handleSubmit, title, step, updateStep, data } = useLoginState({ showSnack, setShowSnack })
  const {
    email
  } = data || {}


  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {step == 0 && <LoginForm onSubmit={handleSubmit} title={title} loading={loading} />}
          {step == 1 && LOGIN_ENABLED && <QRrender urlPath={null} email={email} sendStep={updateStep} showSnack={showSnack} setShowSnack={setShowSnack} />}
          {showSnack && showSnack.show && <SnackbarComponent
            snackDuration={3500}
            configData={showSnack}
            handleCloseSnack={handleCloseSnack}
            successMessage={showSnack.successMessage}
            errorMessage={showSnack.errorMessage} />}
        </div>
      </Grid>
    </Grid>
  )
}
