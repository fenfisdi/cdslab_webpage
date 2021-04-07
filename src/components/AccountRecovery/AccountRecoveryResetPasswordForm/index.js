import React, { Fragment, useEffect, useState } from 'react'
import { Box, Button, Grid, Paper } from '@material-ui/core'
import { useAccountRecoveryResetPasswordFormStyles } from './styles'
import { Input } from '../../ui/Input'
import LoaderComponent from '../../ui/Loader'
import theme from '../../../styles/theme'
import { TitleComponent } from '../../ui/Title'
import { PasswordChecker } from '../../Register/PasswordChecker'
import { useAccountRecoveryResetPasswordFormState } from './state'


const AccountRecoveryResetPasswordForm = ({ loading, handleClick }) => {
  const classes = useAccountRecoveryResetPasswordFormStyles(theme)
  const [isValid, setIsvalid] = useState(false)
  const[verificationPassword,setVerificationPassword] = useState(false)
  const { password } = useAccountRecoveryResetPasswordFormState()

  useEffect(() => {
    let notIsValid = false

    if (
      (password && !password.value.length > 0) ||
      (password && Array.isArray(password.errors) && password.errors.length > 0)
    ) {
      notIsValid = true
    }

    setIsvalid(notIsValid)
  }, [password])


  const handleClickButton = () => {
    handleClick({
      password: password.value,
    })
  }

  return (
    <Paper className={classes.formBody}>
      <Grid item container xs={12} justify="center" className={loading ? classes.loading : null}>
        {loading && <LoaderComponent width="100p%" height={80} marginTop="20px" />}
        {!loading && <Fragment>
          <TitleComponent
            justify={'center'}
            alignItems={'center'}
            title={'Cambio de contraseña'}
            variant={'h6'}
          />
          <Grid
            item
            container
            xs={12}
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.formEmail}
          >
            <Grid item container xs={6}>
              <Box p={1} bgcolor="background.paper">
                Digite la nueva contraseña
              </Box>                            
            </Grid>
            <Grid item container xs={6}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="password"
                {...password}
              />
            </Grid>
            <Grid item container xs={6}>
              <PasswordChecker
                checkValue={password.value}
                errorText={'Incorrect password.. '}
                eventEmitter={(value) => {                
                  const{success} = value                
                  setVerificationPassword(success)
                }}
              />
            </Grid>
            <Grid item container xs={12} justify="flex-end" spacing={1}>
              <Button variant="contained" color="default" style={{ 'margin-right': '6px' }}>
                Cancelar
              </Button>
              <Button
                onClick={handleClickButton}
                variant="contained"
                color="primary"
                className={{}}
                disabled={!isValid && verificationPassword? false:true}
              >
                Continue
              </Button>
            </Grid>
          </Grid>

        </Fragment>}

      </Grid>
    </Paper>
  )
}

export default AccountRecoveryResetPasswordForm
