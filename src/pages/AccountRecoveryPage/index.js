import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useAccountRecoveryStyles } from './styles'
import theme from '../../styles/cdslabTheme'
import AccountRecoveryEmailForm from '../../components/AccountRecovery/AccountRecoveryEmailForm'
import SnackbarComponent from '../../components/ui/Snackbars'
import { useAccountRecoveryState } from './state'
import AccountRecoverySecurityCodeForm from '../../components/AccountRecovery/AccountRecoverySecurityCodeForm'
import AccountRecoveryResetPasswordForm from '../../components/AccountRecovery/AccountRecoveryResetPasswordForm'
import { replaceStringInRange } from '../../utils/common'

const AccountRecoveryPage = () => {
  const classes = useAccountRecoveryStyles(theme)
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const {
    handleRequestPasswordChange,
    handleRequestSecurityCode,
    handleRequestPasswordSubmission,
    loading,
    step,
    sendEmailData } = useAccountRecoveryState({ showSnack, setShowSnack })

  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  const handleClickRecoveryEmail = (formFields) => {
    const { email } = formFields
    handleRequestPasswordChange({ email: email })
  }

  const handleClickSecurityCode = (formFields) => {
    const {
      data: { email }
    } = sendEmailData

    const {
      securityCode
    } = formFields

    handleRequestSecurityCode({
      security_code: securityCode,
      email
    })
  }

  const handleClickPasswordSubmission = (formFields) => {
    const {
      data: { email }
    } = sendEmailData
    const { password } = formFields
    handleRequestPasswordSubmission({
      email,
      new_password: password,
      new_verify_password: password
    })
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
      {step == 0 && <AccountRecoveryEmailForm
        loading={loading}
        handleClick={handleClickRecoveryEmail}
        messageBody={'Ingresa tu correo electrónico para restablecer tu contraseña'}
        messageTitle={'Recupera tu cuenta'} />
      }
      {step == 1 && <AccountRecoverySecurityCodeForm
        loading={loading}
        handleClick={handleClickSecurityCode}
        messageTitle={'Comprueba si recibiste un correo electrónico con tu código de 6 dígitos.'}
        messageBody={`Enviamos el código a: ${sendEmailData && replaceStringInRange(sendEmailData.data.email, 1, 5, '*****')}`}
      />}
      {step == 2 && <AccountRecoveryResetPasswordForm loading={false} handleClick={handleClickPasswordSubmission} />}
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
