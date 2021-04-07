import React, {useState} from 'react'
import { Grid } from '@material-ui/core'
import theme from '../../styles/theme'
import { useRecoveryQrBindingStyles } from './styles'
import SnackbarComponent from '../../components/ui/Snackbars'
import { useAccountRecoveryQrBindingState } from './state'
import AccountRecoveryEmailForm from '../../components/AccountRecovery/AccountRecoveryEmailForm'
import securityQuestionsForm from '../../components/AccountRecovery/AccountRecoverySecurityQuestionsForm'

const RecoveryQrBindingPage = () =>{
  const classes = useRecoveryQrBindingStyles(theme)
  const [showSnack, setShowSnack] = useState({show:false, success:false, error:false, successMessage:'', errorMessage:''})
  const{ sendForm ,step,updateStep,loading,data } = useAccountRecoveryQrBindingState({ showSnack, setShowSnack})

  const handleCloseSnack = () => {
    setShowSnack({...showSnack,show:false,success:false, error:false, successMessage:'', errorMessage:''})
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
      {step==0 &&<AccountRecoveryEmailForm eventEmitter={sendForm} loading={loading}/>}
      {step==1 &&<securityQuestionsForm questions={data} loading={loading} />}
      { /*step==3 &&<SuccessRegister />*/}         
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


