import { useEffect, useState } from 'react'
import { useUserActions } from '../../actions/userActions'
import { useStore } from '../../store/storeContext'

export const useAuthQrState = (urlPath) => {
  const {
    state: {
      authQr: { data, isValid, error, loading }
    },
    dispatch
  } = useStore()
  const { validateQr } = useUserActions(dispatch)
    
  useEffect(() => {
    if (data && !error) {
      console.log('QRrender::::::::::::>success ', data) // dummy example
    }
    if (error) {
      console.log('QRrender::::::::::::>error', error)
    }
  }, [data, error])
      
  useEffect(() => {
    if(urlPath){
      console.log('::::::::::::::::::>urlPath',urlPath)
    }
  }, [urlPath])
  

  return {
    data, isValid, error, loading, validateQr
  }
}
