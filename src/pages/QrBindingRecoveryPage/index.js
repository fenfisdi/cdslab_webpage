import React, {useState} from 'react'
import { Grid } from '@material-ui/core'
import theme from '../../styles/theme'
import { useRecoveryQrBindingStyles } from './styles'
import SnackbarComponent from '../../components/ui/Snackbars'
import { useAccountRecoveryQrBindingState } from './state'
import AccountRecoveryEmailForm from '../../components/AccountRecovery/AccountRecoveryEmailForm'
import QrBindingRecoverySecurityQuestions from '../../components/QrForm/QrBindingRecoverySecurityQuestions'
import QrBindingRecoveryShowLink from '../../components/QrForm/QrBindingRecoveryShowLink'

const RecoveryQrBindingPage = () =>{
  const classes = useRecoveryQrBindingStyles(theme)
  const [showSnack, setShowSnack] = useState({show:false, success:false, error:false, successMessage:'', errorMessage:''})
  const { 
    handleRequestQrBindingRecover,
    handleRequestQrSecurityQuestions,
    redirectToPage,
    step,
    loading,
    qrRecovery,
    qrSecurityQuestions
  } = useAccountRecoveryQrBindingState({ showSnack, setShowSnack})

  const { data:dataRecovery } = qrRecovery || {}
  const { data:dataSecurityQuestions } = qrSecurityQuestions || {}

  const handleCloseSnack = () => {
    setShowSnack({...showSnack,show:false,success:false, error:false, successMessage:'', errorMessage:''})
  }

  const handleClickRecoveryEmail = (formFields) => {
    const {email} = formFields
    handleRequestQrBindingRecover({
      email
    })
  }

  const handleClickSecurityQuestion = (formFields) => {
    const { email }= dataRecovery || {}
    const { answers } = formFields    
    handleRequestQrSecurityQuestions({
      email,
      answers
    }) 
  }

  const handleClickRedirect =()=>{
    redirectToPage('/')
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
      {step==0 && <AccountRecoveryEmailForm 
        handleClick={handleClickRecoveryEmail} 
        loading={loading} 
        messageBody={'Ingresa tu correo electrónico para restablecer tu Qr'} 
        messageTitle={'Recuperar tu Qr'}/>}

      {step==1 && <QrBindingRecoverySecurityQuestions
        loading={loading} 
        questions={dataRecovery ? dataRecovery.securityQuestions:[]}
        handleEventEmitted={handleClickSecurityQuestion}
      />}
      
      {step==2 && <QrBindingRecoveryShowLink 
        qrUrl={dataSecurityQuestions && dataSecurityQuestions.urlPath}
        title={'Codigo Qr generado.'}
        handleClick={handleClickRedirect}
      />}        
      
      {showSnack && showSnack.show && <SnackbarComponent 
        snackDuration={3500}
        configData={showSnack}  
        handleCloseSnack={handleCloseSnack} 
        successMessage={showSnack.successMessage} 
        errorMessage={showSnack.errorMessage}/>}
    </Grid>
  )
}

export default RecoveryQrBindingPage


