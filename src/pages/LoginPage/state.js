import { useStore } from '../../store/storeContext'
import { useSessionActions } from '../../actions/sessionsActions'
import { useHistory, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const useLoginState = () => {
  const {
    state: {
      session: { isAuth, loading, error }
    },
    dispatch
  } = useStore()
  const { login } = useSessionActions(dispatch)
  const history = useHistory()
  const location = useLocation()
  const [title, setTitle] = useState('Sign in')
  const { from } = location.state || { from: { pathname: '/simulations' } }
  const redirectSimulations = () => {
    history.replace(from)
  }

  useEffect(() => {
    // Is authenticated redirect to /simulations
    if (isAuth) {
      redirectSimulations()
    }
  }, [isAuth])

  const handleSubmit = (dataForm) => {
    login({
      username: dataForm?.username,
      password: dataForm?.password
    })
  }

  return {
    isAuth, loading, error, handleSubmit, title, setTitle
  }
}
