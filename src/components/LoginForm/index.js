import React from 'react'
import { MiniLoader } from '../layouts/MiniLoader'
import { useInputValue } from '../ui/Input/useInputValue'
import { Input } from '../ui/Input'
import { LoadingMessage, LoginError, useLoginFormStyles } from './styles'
import { VALIDATORS_LOGIN_FORM } from './validators'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import theme from '../../styles/theme'
import Copyright from '../layouts/Copyright'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'

export const LoginForm = ({ onSubmit, title = 'Sign in', error, loading }) => {
  // const [errorMessage, setErrorMessage] = useState()
  const classes = useLoginFormStyles(theme)

  const password = useInputValue(
    '',
    VALIDATORS_LOGIN_FORM.password, {
      name: 'password',
      type: 'password',
      label: 'Your password',
    }
  )
  const username = useInputValue(
    '',
    VALIDATORS_LOGIN_FORM.username, {
      name: 'username',
      type: 'email',
      label: 'Your Email', 
    })

  const verifyForm = async (e) => {
    e.preventDefault()
    if (isInvalidForm()) {
      // TODO setErrorMessage('you have an error')
    } else {
      onSubmit({
        username: username.value,
        password: password.value
      })
    }
  }

  const fillError = () => {
    return <LoginError><span>{error}</span></LoginError>
  }

  const isInvalidForm = () => !!(username.errors.length > 0 || password.errors.length > 0)

  const fillSignInHeader = () => (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        {title}
      </Typography>
    </>
  )

  const fillLoginHelpers = () => (
    <Grid container>
      <Grid item xs>
        <Link href='#' variant='body2'>
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link href='#' variant='body2'>
          {'Don\'t have an account? Sign Up'}
        </Link>
      </Grid>
    </Grid>
  )

  const fillForm = () => (
    <>
      <form className={classes.form} noValidate onSubmit={verifyForm}>
        <Input
          disabled={loading}
          required
          fullWidth
          variant='outlined'
          margin='normal'
          autoComplete='email'
          {...username}
        />
        <Input
          disabled={loading}
          required
          fullWidth
          variant='outlined'
          margin='normal'
          autoComplete='current-password'
          {...password}
        />
        {error && fillError()}
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          disabled={isInvalidForm()}
        >
          Sign In
        </Button>
        {fillLoginHelpers()}
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </>
  )

  return (
    <>
      {fillSignInHeader()}
      {loading && <LoadingMessage><p>Logging in</p><MiniLoader /></LoadingMessage>}
      {!loading && fillForm()}

    </>
  )
}
