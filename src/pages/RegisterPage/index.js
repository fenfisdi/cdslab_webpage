import React, { useState } from 'react'
import RegisterForm from '../../components/Register/RegisterForm'
import { Grid } from '@material-ui/core'
import { useRegisterStyles } from './styles'
import theme from '../../styles/theme'
import QRrender from '../QRPage'
import SuccessRegister from '../SuccessRegisterPage'
import SnackbarComponent from '../../components/ui/Snackbars'
import { useRegisterState } from './state'

const RegisterPage = () => {
  const classes = useRegisterStyles(theme)
  const [showSnack, setShowSnack] = useState({show:false, success:false, error:false, successMessage:'', errorMessage:''})
  const {sendForm,step,loading,data,updateStep}= useRegisterState({showSnack, setShowSnack})
  const { 
    email,
    urlPath
  }= data || {}
  
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
      {step==0 &&<RegisterForm eventEmitter={sendForm} loading={loading}/>}
      {step==1 &&<QRrender urlPath={urlPath} email={email} sendStep={updateStep} showSnack={showSnack} setShowSnack={setShowSnack} />}
      {step==3 &&<SuccessRegister />}         
      {showSnack && showSnack.show && <SnackbarComponent 
        snackDuration={3500}
        configData={showSnack}  
        handleCloseSnack={handleCloseSnack} 
        successMessage={showSnack.successMessage} 
        errorMessage={showSnack.errorMessage}/>}
    </Grid>
  )
}

export default RegisterPage
