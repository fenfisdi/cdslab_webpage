import React, { useEffect, useState } from 'react'
import RegisterForm from '../../components/Register/RegisterForm'
import { useStore } from '../../store/storeContext'
import { useUserActions } from '../../actions/userActions'
import { Grid } from '@material-ui/core'
import { useRegisterStyles } from './styles'
import theme from '../../styles/theme'
import SnackbarComponent from '../../components/ui/Snackbars'

const RegisterPage = () => {
  const {
    state: {
      register: { data, loading, error }
    },
    dispatch
  } = useStore()
  const [showSnack, setShowSnack] = useState({show:false, success:false, error:false})
  const { registerUser } = useUserActions(dispatch)
  const classes = useRegisterStyles(theme)

  useEffect(() => {
    if (data && !error) {
      console.log('Data loader ', data) // dummy example
      setShowSnack({...showSnack,show:true,success:true,error:false})
    }

    if (error) {
      console.log(':::::::error', error)
      setShowSnack({...showSnack,show:true,success:false,error:true})
    }
  }, [data, error])

  const handleCloseSnack = () => {
    setShowSnack({...showSnack,show:false})
  }

  // dummy example
  const sendForm = (object) => {
    console.log('::data send', object)
    registerUser(object)
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
      <RegisterForm eventEmitter={sendForm} />
      <SnackbarComponent 
        snackDuration={3500}
        configData={showSnack}  
        handleCloseSnack={handleCloseSnack} 
        successMessage={'user successfully registered.'} 
        errorMessage={'wrong to register user.'}/>
    </Grid>
  )
}

export default RegisterPage
