import { useStore } from '@store/storeContext'
import { useSessionActions } from '@actions/sessionsActions'
import { useHistory, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const useLoginState = ({ showSnack, setShowSnack }) => {
  const {
    state: {
      session: { isAuth, loading, error, errorData, user }
    },
    dispatch
  } = useStore()
  const { login } = useSessionActions(dispatch)
  const [step, setStep] = useState(0)


  const history = useHistory()
  const location = useLocation()
  const [title, setTitle] = useState('Sign in')
  const { from } = location.state || { from: { pathname: '/agents' } }
  const LOGIN_ENABLED = process.env.REACT_APP_LOGIN_ENABLED === 'true'


  const redirectSimulations = () => {
    history.replace(from)
  }

  useEffect(() => {
    const noLoginEnabledStep = !LOGIN_ENABLED && step === 1
    console.log({ step, LOGIN_ENABLED })
    if (step === 3 || noLoginEnabledStep) {
      redirectSimulations()
    }
  }, [step])

  useEffect(() => {
    if (user && !error) {

      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: true,
          successMessage: 'logged user.',
          error: false
        }
      )
      setStep(1)
    } else if (error) {

      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: errorData.message
        }
      )
    }
  }, [user, error])



  const handleSubmit = (dataForm) => {

    login({
      email: dataForm?.email,
      password: dataForm?.password
    })
  }

  const updateStep = (int) => {
    setStep(int)
  }

  return {
    isAuth,
    loading,
    error,
    handleSubmit,
    title,
    setTitle,
    errorData,
    showSnack,
    setShowSnack,
    step,
    updateStep,
    data: user
  }
}
