import { useEffect, useState } from 'react'
import { useUserActions } from '../../actions/userActions'
import { useStore } from '../../store/storeContext'

export const useAuthQrState = ({urlPath, sendStep,showSnack, setShowSnack}) => {
  const {
    state: {
      authQr: { data, isValid, error, loading }
    },
    dispatch
  } = useStore()
  const { validateQr } = useUserActions(dispatch)
  //const [showSnack, setShowSnack] = useState({show:false, success:false, error:false})

  useEffect(() => {
    if (data && !error) {
      sendStep(3)
      console.log('QRrender::::::::::::>success ', data) // dummy example
    }
    if (error) {
      console.log('QRrender::::::::::::>error', error)
      setShowSnack(
        {
          ...showSnack,
          show:true,
          success:false,
          error:true,
          errorMessage:'Error key value not match'
        }
      )
    }
  }, [data, error])
      
  useEffect(() => {
    if(urlPath){
      console.log('::::::::::::::::::>urlPath',urlPath)
    }
  }, [urlPath])
  

  return {
    data, isValid, error, loading, validateQr, showSnack
  }
}
