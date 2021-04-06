import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useAccountRecoveryStyles } from './styles'
import theme from '../../styles/theme'
import AccountRecoveryEmailForm from '../../components/AccountRecovery/AccountRecoveryEmailForm'
import SnackbarComponent from '../../components/ui/Snackbars'
import { useAccountRecoveryState } from './state'
import AccountRecoverySecurityCodeForm from '../../components/AccountRecovery/AccountRecoverySecurityCodeForm'

const AccountRecoveryPage = () => {
  const classes = useAccountRecoveryStyles(theme)
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { sendForm, step, loading, data, updateStep } = useAccountRecoveryState({ showSnack, setShowSnack })

  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  return (
    <Grid
      xs={12}
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.body}
    >
      {/* <AccountRecoveryEmailForm loading={false} eventEmitter={sendForm} /> */}
      <AccountRecoverySecurityCodeForm loading={false} eventEmitter={sendForm} />
      {showSnack && showSnack.show && <SnackbarComponent
        snackDuration={3500}
        configData={showSnack}
        handleCloseSnack={handleCloseSnack}
        successMessage={showSnack.successMessage}
        errorMessage={showSnack.errorMessage} />}

    </Grid>
  )
}

export default AccountRecoveryPage
