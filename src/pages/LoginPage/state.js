import { useStore } from '../../store/storeContext'
import { useAuthActions } from '../../actions/authActions'
//import { useHistory, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const useLoginState = () => {
  const {
    state: {
      auth: { isAuth, loading, error }
    },
    dispatch
  } = useStore()
  const { login } = useAuthActions(dispatch)
 // const history = useHistory()
  //const location = useLocation()
  const [title, setTitle] = useState('Sign in')
  const { from } = location.state || { from: { pathname: '/protected' } }
  const redirectLogin = () => {
    //history.replace(from)
  }

  useEffect(() => {
    // Is authenticated redirect to /protected
    if (isAuth) {
      redirectLogin()
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

