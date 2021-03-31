import { useEffect, useState } from 'react'
import { useUserActions } from '../../actions/userActions'
import { useStore } from '../../store/storeContext'

export const useRegisterState = () => {
  const {
    state: {
      register: { data, loading, error, errorData }
    },
    dispatch
  } = useStore()
  const [showSnack, setShowSnack] = useState({show:false, success:false, error:false})
  const { registerUser } = useUserActions(dispatch)
  
    
  useEffect(() => {
    if (data && !error) {
      console.log('success register ', data) // dummy example
      setShowSnack({...showSnack,show:true,success:true,error:false})
    }
    
    if (error) {
      console.log(':::::::error register', error)
      setShowSnack({...showSnack,show:true,success:false,error:true})
    }
  }, [data, error])
    
  const handleCloseSnack = () => {
    setShowSnack({...showSnack,show:false})
  }
    
  // dummy example
  const sendForm = (object) => {    
    registerUser(object)
  }

  return {
    showSnack,sendForm,handleCloseSnack,loading,data,error,errorData
  }
}
