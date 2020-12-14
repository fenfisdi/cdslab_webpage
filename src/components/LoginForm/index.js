import React, { useState } from 'react'
import { MiniLoader } from '../MiniLoader'
import { useInputValue } from '../Forms/Input/useInputValue'
import { Input } from '../Forms/Input'
import { LoginError, FormWrapper, LoginButton, Title, LoadingMessage } from './styles'
import { VALIDATORS_LOGIN_FORM } from './validators'

export const LoginForm = ({ onSubmit, title, error, loading }) => {
  const [errorMessage, setErrorMessage] = useState()

  const password = useInputValue({
    value: '',
    name: 'password',
    type: 'text',
    placeholder: 'Your password',
    validators: VALIDATORS_LOGIN_FORM.password
  })
  const username = useInputValue({
    value: '',
    name: 'username',
    type: 'text',
    placeholder: 'Your username',
    validators: VALIDATORS_LOGIN_FORM.username
  })

  const verifyForm = async (e) => {
    e.preventDefault()
    if (username.errors.length > 0 || password.errors.length > 0) {
      setErrorMessage('you have an error')
    } else {
      onSubmit({
        username: username.value,
        password: password.value
      })
    }
  }

  const fillError = () => {
    return <LoginError><span>{errorMessage}</span></LoginError>
  }
  const fillContent = () => {
    if (loading) {
      return <LoadingMessage><p>Ingresando</p><MiniLoader /></LoadingMessage>
    }
    return (
      <>
        <Title>{title}</Title>
        <form disabled={loading} onSubmit={verifyForm}>
          <Input disabled={loading} {...username} />
          <Input disabled={loading} {...password} />
          <LoginButton disabled={loading}>Login</LoginButton>
        </form>
      </>
    )
  }

  return (
    <FormWrapper>{fillContent()}
      {error && fillError()}
      {errorMessage}
    </FormWrapper>
  )
}
