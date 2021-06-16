import { useEffect } from 'react'
import { useStore } from '@store/storeContext'
import { userProfileActions } from '@actions/userProfileActions'
import { isNull } from 'lodash'

export const userProfileMainPageState = ({ showSnack, setShowSnack }) => {
  const {
    state:{
      userProfile: { 
        userData: {
          data, error, errorData
        }
      }
    }, 
    dispatch
  } = useStore()

  const { getUserData, updateUserData } = userProfileActions(dispatch)

  useEffect(()=>{
    if(isNull(data) && !error){
      getUserData()
    }
    
  },[data])

  useEffect(()=>{
    if(error){
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: errorData.detail
        }
      )
    }
  },[error])

  const sendForm =(updateUserForm) => {
    updateUserData(updateUserForm)
  }

  return{
    getUserData,
    data,
    sendForm
  }
}