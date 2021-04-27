import { useEffect } from 'react'
import { useUserActions } from '@actions/userActions'
import { useStore } from '@store/storeContext'

export const useAuthQrState = ({ sendStep, showSnack, setShowSnack }) => {
  const {
    state: {
      authQr: { data, isValid, error, errorData, loading }
    },
    dispatch
  } = useStore()
  const { validateQr } = useUserActions(dispatch)


  useEffect(() => {
    if (data && !error) {
      console.log(data)
      sendStep(3)

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
  }, [data, error])


  return {
    data, isValid, error, loading, validateQr, showSnack
  }
}
