import React from 'react'
import QrBindingRecoveryShowLink from '@components/QrForm/QrBindingRecoveryShowLink'
import { useHistory } from 'react-router'
import { useLocation } from 'react-router-dom'

const ChangeQRlink = () => {

  const history = useHistory()
  const location = useLocation()
  const url = location.state.detail

  const hancleRedirect =()=>{
    history.push({ 
      pathname: '/profile',
    })
  }

  return(
    <QrBindingRecoveryShowLink qrUrl={url} title={''} handleClick={hancleRedirect}/>
  )
}

export default ChangeQRlink