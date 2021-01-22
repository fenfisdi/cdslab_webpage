import React from 'react'
import { LoginButton } from '../../components/LoginForm/styles'
import { useStore } from '../../store/storeContext'
import { useAuthActions } from '../../actions/authActions'
import { Wrapper } from './styles'
import { Button } from '@material-ui/core'

export const ProtectedPage = () => {
  const {
    state: {
      auth: {
        session: { user }
      }
    },
    dispatch
  } = useStore()
  const { logout } = useAuthActions(dispatch)

  const handleClick = (e) => {
    e.preventDefault()
    logout()
  }

  return (
    <Wrapper>
      <p>Hi {user.username}, you are in protected Page</p>
      <Button onClick={handleClick}>Logout</Button>
    </Wrapper>
  )
}
