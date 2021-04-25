import { useEffect, useState } from 'react'
import { qrAccountRecoveryActions } from '@actions/qrAccountRecoveryActions'
import { useStore } from '@store/storeContext'
import { useHistory } from 'react-router-dom'

export const useAccountRecoveryQrBindingState = ({ showSnack, setShowSnack }) => {
  const {
    state: {
      qrAccountRecovery: { loading, qrRecovery, qrSecurityQuestions }
    },
    dispatch
  } = useStore()
  const { requestQrBindingRecover, requestQrSecurityQuestions } = qrAccountRecoveryActions(dispatch)
  const [step, setStep] = useState(0)
  const history = useHistory()


  const redirectToPage = (location) => {
    history.replace(location)
  }


  useEffect(() => {
    updateshowSnackEffect(qrRecovery, 'security question submitted.', setStep, 1)
  }, [qrRecovery])

  useEffect(() => {
    updateshowSnackEffect(qrSecurityQuestions, 'security question submitted.', setStep, 2)
  }, [qrSecurityQuestions])


  const handleRequestQrBindingRecover = (userForm) => {
    requestQrBindingRecover(userForm)
  }

  const handleRequestQrSecurityQuestions = (userForm) => {
    requestQrSecurityQuestions(userForm)
  }

  const updateStep = (int) => {
    setStep(int)
  }

  const updateshowSnackEffect = (dataEvaluate, successMessage, callback, callbackParam) => {
    if (dataEvaluate && dataEvaluate.data && !dataEvaluate.error) {
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: true,
          successMessage: successMessage,
          error: false
        }
      )
      callback(callbackParam)
    } else if (dataEvaluate && dataEvaluate.error) {
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: dataEvaluate.errorData.message
        }
      )
    }
  }


  return {
    handleRequestQrBindingRecover,
    handleRequestQrSecurityQuestions,
    redirectToPage,
    updateStep,
    loading,
    step,
    qrRecovery,
    qrSecurityQuestions
  }
}