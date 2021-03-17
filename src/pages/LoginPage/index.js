import React from 'react'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import { useLoginState } from './state'
import { useLoginStyles } from './styles'
import { LoginForm } from '../../components/LoginForm'
import theme from '../../styles/theme'

export const LoginPage = () => {
  const { loading, error, handleSubmit, title } = useLoginState()
  const classes = useLoginStyles(theme)

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <LoginForm onSubmit={handleSubmit} title={title} loading={loading} error={error} />
        </div>
      </Grid>
    </Grid>
  )
}
