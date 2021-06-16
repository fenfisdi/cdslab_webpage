import React from 'react'
import AccountRecoveryResetPasswordForm from '../../../components/AccountRecovery/AccountRecoveryResetPasswordForm'
import { useHistory } from 'react-router'

const ChangePassword =()=>{

  const history = useHistory()

  const GetPasswordvalue = (password)=>{
    
    history.push({ 
      pathname: '/profile',
      state: {value: password}
    })
  } 
  
  
  return(
    <AccountRecoveryResetPasswordForm handleClick={GetPasswordvalue} />
  )
}

export default ChangePassword