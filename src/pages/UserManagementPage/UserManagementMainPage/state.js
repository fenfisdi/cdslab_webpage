import { useEffect } from 'react'
import { useStore } from '@store/storeContext'
import { managementActions } from '@actions/ManagementActions'
import { isNull } from 'lodash'

export const userManagementMainPageState = ({ showSnack, setShowSnack }) =>{
  const {
    state:{
      userManagement: { 
        userListRecovery, updateUserStatus
      }
    }, 
    dispatch
  } = useStore()

  const { getUsersListData, updateUserEnableState } = managementActions(dispatch)
  
  useEffect(() => {
    
    if(isNull(userListRecovery.data) && !userListRecovery.error){
      getUsersListData()
    }
    if(!isNull(userListRecovery.data)){
      /*  console.log(data) */
    }
  },[userListRecovery.data])

  useEffect(()=>{
    if(userListRecovery.error){
      setShowSnack(
        {
          ...showSnack,
          show: true,
          success: false,
          error: true,
          errorMessage: userListRecovery.errorData.detail
        }
      )
    }
  },[userListRecovery.error])


  useEffect(()=>{
    console.log(updateUserStatus.data)

  },[updateUserStatus.data])

  const sendUsersForm = (object) => {
    
    updateUserEnableState(object)
  }

  return {
    getUsersListData,
    data:userListRecovery.data,
    sendUsersForm
  }
}