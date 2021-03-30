import { useEffect, useState } from 'react'
import { useUserActions } from '../../actions/userActions'
import { useStore } from '../../store/storeContext'

export const useRegisterState = () => {
  const {
    state: {
      register: { data, loading, error }
    },
    dispatch
  } = useStore()
  const [showSnack, setShowSnack] = useState({show:false, success:false, error:false})
  const { registerUser } = useUserActions(dispatch)
  const [step, setStep] = useState(0)
  
    
  useEffect(() => {
    if (data && !error) {
      console.log('Data loader ', data) // dummy example
      setShowSnack({...showSnack,show:true,success:true,error:false})
      setStep(1)
    }
    
    if (error) {
      console.log(':::::::error', error)
      setShowSnack({...showSnack,show:true,success:false,error:true})
    }
  }, [data, error])
    
  const handleCloseSnack = () => {
    setShowSnack({...showSnack,show:false})
  }
    
  // dummy example
  const sendForm = (object) => {
    console.log('::data send', object)
    registerUser(object)
  }

  const updateStep = (int) => {
    setStep(int)
  } 
  

  return {
    showSnack,sendForm,handleCloseSnack,loading,data,error,updateStep,step
  }
}
