import { useEffect, useState } from 'react'
import { accountRecoveryActions } from '../../actions/accountRecoveryActions'
import { useStore } from '../../store/storeContext'

export const useAccountRecoveryState = ({ showSnack, setShowSnack }) => {
  const {
    state,
    state: {
      accountRecovery: { loading, sendEmailData:{data, error, errorData} }
    },
    dispatch
  } = useStore()
  const { requestPasswordChange } = accountRecoveryActions(dispatch)
  const [step, setStep] = useState(0)
  

  console.log(':::::::::::::::::::::>state',state)

  useEffect(() => {
    if (data && !error) {
      console.log('AccountRecovery success :::::::::::::::::::>', data) // dummy example
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: true,
          successMessage: 'AccountRecovery.',
          error: false
        }
      )
      setStep(1)
    } else if (error) {
      console.log('AccountRecovery error :::::::::::::::::>', errorData)
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
  }, [data, error]) 

  const sendForm = (userForm) => {
    console.log('::AccountRecovery send data', userForm)
    //requestPasswordChange(userForm)
  }

  const updateStep = (int) => {
    setStep(int)
  }


  return {
    sendForm,
    loading,
    updateStep,
    step
  }
}
