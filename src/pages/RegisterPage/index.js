import React, { useEffect, useState } from 'react'
import RegisterForm from '../../components/Register/RegisterForm'
import { useStore } from '../../store/storeContext'
import { useUserActions } from '../../actions/userActions'
import { Grid } from '@material-ui/core'
import { useRegisterStyles } from './styles'
import theme from '../../styles/theme'
import QRrender from '../QRPage'
import SuccessRegister from '../SuccessRegisterPage'

const RegisterPage = () => {
  const {
    state: {
      register: { data, loading, error }
    },
    dispatch
  } = useStore()
  const { registerUser } = useUserActions(dispatch)
  const classes = useRegisterStyles(theme)
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (data && !error) {
      
      console.log('Data loader ', data) // dummy example
      setStep(1)
    }
    if (error) {
      console.log(':::::::error', error)
    }
  }, [data, error])

  // dummy example
  const sendForm = (object) => {
    
    registerUser(object)
    console.log('::data send', object)
    
  }

  const updateStep = (int) => {
    
    setStep(int)
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
      {step==0 &&<RegisterForm eventEmitter={sendForm} />}
      {step==1 &&<QRrender responseRegister={data} sendStep={updateStep} />}
      {step==3 &&<SuccessRegister />}    
    </Grid>
  )
}

export default RegisterPage
