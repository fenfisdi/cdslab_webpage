import React from 'react'
import { MiniLoader } from '../layouts/MiniLoader'
import { useInputValue } from '../ui/Input/useInputValue'
import { Input } from '../ui/Input'
import { LoadingMessage, LoginError, useLoginFormStyles } from './styles'
import { VALIDATORS_LOGIN_FORM } from './validators'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import theme from '../../styles/cdslabTheme'
import Copyright from '../layouts/Copyright'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'

export const LoginForm = ({
  onSubmit,
  title = 'Sign in',
  loading
}) => {
  // const [errorMessage, setErrorMessage] = useState()
  const classes = useLoginFormStyles(theme)
  const history = useHistory()

  const password = useInputValue('', VALIDATORS_LOGIN_FORM.password, {
    name: 'password',
    type: 'password',
    label: 'Your password'
  })
  const email = useInputValue('', VALIDATORS_LOGIN_FORM.email, {
    name: 'email',
    type: 'email',
    label: 'Your Email'
  })

  const verifyForm = async (e) => {
    e.preventDefault()
    if (isInvalidForm()) {
      // TODO setErrorMessage('you have an error')
    } else {
      onSubmit({
        email: email.value,
        password: password.value
      })
    }
  }

  const isInvalidForm = () =>
    !!(email.errors.length > 0 || password.errors.length > 0)

  const fillSignInHeader = () => (
    <>
      <Grid container>
        <Grid item xs>
          <Link className={classes.link} variant='body2' onClick={() => { history.push('/register') }}>
            {'Sign Up'}
          </Link>
        </Grid>
      </Grid>
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
        <Link className={classes.link} variant='body2' onClick={() => { history.push('/accountRecovery') }}>
          {'Forgot password?'}
        </Link>
      </Grid>
      <Grid item>
        <Link className={classes.link} variant='body2' onClick={() => { history.push('/qrBindingRecovery') }}>
          {'Forgot your security link?'}
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
          {...email}
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
      {loading && (
        <LoadingMessage>
          <p>Logging in</p>
          <MiniLoader />
        </LoadingMessage>
      )}
      {!loading && fillForm()}
    </>
  )
}
