/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import RegisterForm from '../../components/RegisterForm'
import { useStore } from '../../store/storeContext'
import { useUserActions } from '../../actions/userActions'
import { useRegisterActions } from '../../actions/registerActions'
import { Button } from '@material-ui/core'

const RegisterPage = () => {
  const {
    state: {
      register: { data, loading, error }
    }, dispatch
  } = useStore()
  const { registerUser } = useUserActions(dispatch)
  const { save } = useRegisterActions(dispatch)
  const [ window, setWindow ] = useState(1)

  useEffect(() => {
    console.log(data, loading, error)
  }, [])

  useEffect(() => {
    console.log('Data updated ', data) // dummy example
  }, [data])

  // dummy example
  const handleClick = (e) => {
    e.preventDefault()
    registerUser({
      name: 'Juan',
      lastname: 'Chaverra'
    })
  }
  return (
    <section>
      {window === 1 && <RegisterForm/>}
      {window === 2 && <p>Estoy en la ventana dos</p>}
      <Button  variant='contained' color="primary" onClick={handleClick}>Test reducer</Button>
    </section>
  )
}

export default RegisterPage
