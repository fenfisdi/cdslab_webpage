import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useStore } from '../../store/storeContext'
import { useAuthActions } from '../../actions/authActions'
import { LoginForm } from '../../components/LoginForm'

export const LoginPage = () => {
  const {
    state: {
      auth: { isAuth, loading, error }
    },
    dispatch
  } = useStore()
  const { login } = useAuthActions(dispatch)
  const history = useHistory()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: '/protected' } }
  const redirectLogin = () => {
    history.replace(from)
  }

  useEffect(() => {
    // Is authenticated redirect to /protected
    if (isAuth) {
      redirectLogin()
    }
  }, [isAuth])

  const handleSubmit = (dataForm) => {
    login({
      username: dataForm.username,
      password: dataForm.password
    })
  }

  return (
    <>
      <LoginForm
        onSubmit={handleSubmit}
        title='Login'
        loading={loading}
        error={error}
      />
    </>
  )
}
