import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Button, Grid, Paper } from '@material-ui/core'
import { useAccountRecoveryEmailFormStyles } from './styles'
import { Input } from '../../ui/Input'
import LoaderComponent from '../../ui/Loader'
import theme from '../../../styles/cdslabTheme'
import { TitleComponent } from '../../ui/Title'
import { useAccountRecoveryEmailFormState } from './state'
import { languageContext } from '../../../config/languageContext'

const AccountRecoveryEmailForm = ({ loading, handleClick, messageBody, messageTitle }) => {
  const classes = useAccountRecoveryEmailFormStyles(theme)
  const { email } = useAccountRecoveryEmailFormState()
  const [isValid, setIsvalid] = useState(false)
  const { t } = useContext(languageContext)

  useEffect(() => {
    let notIsValid = false
    if (
      (email && !email.value.length > 0) ||
      (email && Array.isArray(email.errors) && email.errors.length > 0)
    ) {
      notIsValid = true
    }
    setIsvalid(notIsValid)
    
  }, [email])


  const handleClickButton = () => {
    handleClick({ email: email.value })
    
  }

  return (
    <Paper className={classes.formBody}>
      <Grid item container xs={12} justify="center" className={loading ? classes.loading : null}>
        {loading && <LoaderComponent width="100p%" height={80} marginTop="20px" />}
        {!loading && <Fragment>
          <TitleComponent
            justify={'center'}
            alignItems={'center'}
            title={messageTitle}
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
            <Grid item container xs={12}>
              <p>{messageBody}</p>
            </Grid>
            <Grid item container xs={12}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="name"
                {...email}
              />
            </Grid>
            <Grid item container xs={12} justify="flex-end" spacing={1}>
              <Button variant="contained" color="default" style={{ 'margin-right': '6px' }}>
                {t('common.cancelButton')}
              </Button>
              <Button
                onClick={handleClickButton}
                variant="contained"
                color="primary"
                className={{}}
                disabled={!isValid ? false : true}
              >
                {t('common.continueButton')}
              </Button>
            </Grid>
          </Grid>

        </Fragment>}

      </Grid>
    </Paper>
  )
}

export default AccountRecoveryEmailForm
