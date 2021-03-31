import React from 'react'
import RegisterForm from '../../components/Register/RegisterForm'
import { Grid } from '@material-ui/core'
import { useRegisterStyles } from './styles'
import theme from '../../styles/theme'
import SnackbarComponent from '../../components/ui/Snackbars'
import { useRegisterState } from './state'

const RegisterPage = () => {
  const {showSnack,sendForm,handleCloseSnack,loading,error,errorData}= useRegisterState()
  const classes = useRegisterStyles(theme)

  return (
    <Grid
      xs={12}
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.body}      
    >
      <RegisterForm eventEmitter={sendForm} loading={loading}/>      
      {showSnack && showSnack.show && <SnackbarComponent 
        snackDuration={3500}
        configData={showSnack}  
        handleCloseSnack={handleCloseSnack} 
        successMessage={'user successfully registered.'} 
        errorMessage={error && errorData && errorData.message}/>}
    </Grid>
  )
}

export default RegisterPage
