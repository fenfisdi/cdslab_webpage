import { Grid, Paper } from '@material-ui/core'
import React, { Fragment} from 'react'
import theme from '../../styles/cdslabTheme'
import { Input } from '../ui/Input'
import { useChangePasswordFormStyles } from './styles'
import {useRegisterFormState} from '../Register/RegisterForm/state'
import { TitleComponent } from '../ui/Title'
import Button from '@material-ui/core/Button'

const ChangePasswordForm = () => {

  const fieldsData = useRegisterFormState()
  const classes = useChangePasswordFormStyles(theme)

  const {
    password
  } = fieldsData

  return (
    <Paper className={classes.formBody}>
      <Grid container xs={12} spacing={2} justify='center'>
        <Fragment>
          <TitleComponent
            justify='center'
            alignItems='center'
            title='New password'
            variant='h5'
          />
          <Grid container spacing={1} xs={12}>
            <Grid item sm={12} md={6}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="name"
                {...password}/>
            </Grid>
            <Grid item sm={12} md={6}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="name"
                {...password}
              />
            </Grid>
          </Grid>
          <Button
            onClick={{}}
            variant="contained"
            color="primary"
          >
            Update password
          </Button>
        </Fragment>
      </Grid>
    </Paper>
  )

}
export default ChangePasswordForm