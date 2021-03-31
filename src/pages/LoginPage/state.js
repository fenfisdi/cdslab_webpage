import { useStore } from '../../store/storeContext'
import { useSessionActions } from '../../actions/sessionsActions'
import { useHistory, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const useLoginState = () => {
  const {
    state: {
      session: { isAuth, loading, error, errorData, user }
    },
    dispatch
  } = useStore()
  const { login } = useSessionActions(dispatch)
  const history = useHistory()
  const location = useLocation()
  const [title, setTitle] = useState('Sign in')
  const [showSnack, setShowSnack] = useState({show:false, success:false, error:false})


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

  useEffect(() => {
    if (user && !error) {
      console.log('success login ', user) // dummy example
      setShowSnack({...showSnack,show:true,success:true,error:false})
    }

    if (error) {
      console.log(':::::::error login', error,errorData)
      setShowSnack({...showSnack,show:true,success:false,error:true})
    }
  }, [user, error])


  const handleCloseSnack = () => {
    setShowSnack({...showSnack,show:false})
  }

  const handleSubmit = (dataForm) => {
    login({
      email: dataForm?.email,
      password: dataForm?.password
    })
  }

  return {
    isAuth, loading, error, handleSubmit, title, setTitle, errorData, showSnack, setShowSnack, handleCloseSnack
  }
}
