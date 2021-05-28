import { useEffect } from 'react'
import { useStore } from '@store/storeContext'
import { managementActions } from '@actions/managementActions'
import { isNull } from 'lodash'

export const userManagementMainPageState = ({ showSnack, setShowSnack }) =>{
  const {
    state:{
      userListRecovery: { data, error, errorData }
    }, 
    dispatch
  } = useStore()

  const { getUsersListData } = managementActions(dispatch)

  useEffect(() => {
    if(isNull(data) && error!=true){
      getUsersListData()
    }
  },[data,error,errorData])

  useEffect(()=>{
    if(error == true){
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


  return {
    getUsersListData
  }
}