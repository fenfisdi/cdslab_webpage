import { useEffect, useState } from 'react'
import { useUserActions } from '../../actions/userActions'
import { useStore } from '../../store/storeContext'

export const useRegisterState = ({showSnack, setShowSnack}) => {
  const {
    state: {
      register: { data, loading, error, errorData }
    },
    dispatch
  } = useStore()
  const { registerUser } = useUserActions(dispatch)
  const [step, setStep] = useState(0)
  
    
  useEffect(() => {
    if (data && !error) {
      
      setShowSnack(
        {
          ...showSnack,
          show:true,
          success:true,
          successMessage:'user successfully registered.',
          error:false
        }
      )
      setStep(1)
    }else if (error) {
      
      setShowSnack(
        {
          ...showSnack,
          show:true,
          success:false,
          error:true,
          errorMessage:errorData.message
        }
      )
    }
  }, [data, error])
    
  const sendForm = (object) => {
    
    registerUser(object)
  }

  const updateStep = (int) => {
    setStep(int)
  } 
  

  return {
    sendForm,
    loading,
    data,
    error,
    updateStep,
    step
  }
}
