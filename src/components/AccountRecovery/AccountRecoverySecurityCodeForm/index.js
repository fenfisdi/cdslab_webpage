import React, { Fragment, useEffect, useState } from 'react'
import { Box, Button, Grid, Paper } from '@material-ui/core'
import { useAccountRecoverySecurityCodeFormStyles } from './styles'
import { Input } from '../../ui/Input'
import LoaderComponent from '../../ui/Loader'
import theme from '../../../styles/cdslabTheme'
import { TitleComponent } from '../../ui/Title'
import { useAccountRecoverySecurityCodeFormState } from './state'

const AccountRecoverySecurityCodeForm = ({ loading, handleClick, messageTitle, messageBody }) => {
  const classes = useAccountRecoverySecurityCodeFormStyles(theme)
  const { securityCode } = useAccountRecoverySecurityCodeFormState()
  const [isValid, setIsvalid] = useState(false)

  useEffect(() => {
    let notIsValid = false

    if (
      (securityCode && !securityCode.value.length > 0) ||
      (securityCode && Array.isArray(securityCode.errors) && securityCode.errors.length > 0)
    ) {
      notIsValid = true
    }

    setIsvalid(notIsValid)
  }, [securityCode])


  const handleClickButton = () => {
    handleClick({ securityCode: securityCode.value })
  }

  return (
    <Paper className={classes.formBody}>
      <Grid item container xs={12} justify="center" className={loading ? classes.loading : null}>
        {loading && <LoaderComponent width="100p%" height={80} marginTop="20px" />}
        {!loading && <Fragment>
          <TitleComponent
            justify={'center'}
            alignItems={'center'}
            title={'Ingresa el código de seguridad'}
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
            <Grid item container direction="column" xs={12}>
              <Box p={1} bgcolor="background.paper">
                {messageTitle}
              </Box>
              <Box p={1} bgcolor="background.paper">
                {messageBody}
              </Box>

            </Grid>
            <Grid item container xs={12}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="name"
                {...securityCode}
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
                disabled={ !isValid ? false : true }
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

export default AccountRecoverySecurityCodeForm
