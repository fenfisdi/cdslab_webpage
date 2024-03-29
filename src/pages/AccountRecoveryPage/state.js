import { useEffect, useState } from 'react'
import { accountRecoveryActions } from '../../actions/accountRecoveryActions'
import { useStore } from '../../store/storeContext'
import { useHistory } from 'react-router-dom'

export const useAccountRecoveryState = ({ showSnack, setShowSnack }) => {
  const {
    state: {
      accountRecovery: { loading, sendEmailData, securityCode, resetPassword }
    },
    dispatch
  } = useStore()
  const {
    requestPasswordChange, 
    requestSecurityCodeVerification, 
    requestPasswordSubmission } = accountRecoveryActions(dispatch)
  const [step, setStep] = useState(0)
  const history = useHistory()
  

  const redirectSimulations = (location) => {
    history.replace(location)
  }

  useEffect(() => {
    updateshowSnackEffect(sendEmailData,'security code submitted.',setStep,1)    
  }, [sendEmailData]) 


  useEffect(()=>{
    updateshowSnackEffect(securityCode,'security code correct.',setStep,2)
  },[securityCode])


  useEffect(()=>{
    updateshowSnackEffect(resetPassword,'password changed.',redirectSimulations,'/')
  },[resetPassword])

  const handleRequestPasswordChange = (userForm) => {
    requestPasswordChange(userForm)
  }

  const handleRequestSecurityCode = (userForm) => {
    requestSecurityCodeVerification(userForm)
  }

  const handleRequestPasswordSubmission = (userForm) => {
    requestPasswordSubmission(userForm)
  }

  const updateStep = (int) => {
    setStep(int)
  }
  
  const updateshowSnackEffect =(dataEvaluate, successMessage,callback,callbackParam)=>{
    if(dataEvaluate && dataEvaluate.data && !dataEvaluate.error) {
      setShowSnack(
        {
          ...showSnack,
          show:true,
          success:true,
          successMessage:successMessage,
          error:false
        }
      )
      callback(callbackParam)
    }else if(dataEvaluate && dataEvaluate.error) {
      setShowSnack(
        {
          ...showSnack,
          show:true,
          success:false,
          error:true,
          errorMessage:dataEvaluate.errorData.message
        }
      )
    }
  }


  return {
    handleRequestPasswordChange,
    handleRequestSecurityCode,
    handleRequestPasswordSubmission,
    updateStep,
    loading,
    step,
    sendEmailData
  }
}
