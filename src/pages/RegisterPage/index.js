import React, { useEffect, useState } from 'react'
import RegisterForm from '../../components/Register/RegisterForm'
import { Grid } from '@material-ui/core'
import { useRegisterStyles } from './styles'
import theme from '../../styles/theme'
import QRrender from '../QRPage'
import SuccessRegister from '../SuccessRegisterPage'
import SnackbarComponent from '../../components/ui/Snackbars'
import { useRegisterState } from './state'

const RegisterPage = () => {
  const {showSnack,sendForm,handleCloseSnack,step,loading,error,data,updateStep}= useRegisterState()
  const classes = useRegisterStyles(theme)

  // dummy example

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
      {step==1 &&<QRrender responseRegister={data} sendStep={updateStep} />}
      {step==3 &&<SuccessRegister />}         
      {showSnack && showSnack.show && <SnackbarComponent 
        snackDuration={3500}
        configData={showSnack}  
        handleCloseSnack={handleCloseSnack} 
        successMessage={'user successfully registered.'} 
        errorMessage={error && error.error && error.errorData.error}/>}
    </Grid>
  )
}

export default RegisterPage
