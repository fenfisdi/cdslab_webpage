import { Grid, Paper } from '@material-ui/core'
import React, { Fragment, useEffect, useState, useContext } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Input } from '../../ui/Input'
import { TitleComponent } from '../../ui/Title'
import theme from '../../../styles/cdslabTheme'
import { useRegisterFormStyles } from './styles'
import { PhoneNumber } from '../../ui/PhoneNumber'
import { PasswordChecker } from '../PasswordChecker'
import Button from '@material-ui/core/Button'
import { useRegisterFormState } from './state'
import LoaderComponent from '../../ui/Loader'
import { languageContext } from '../../../config/languageContext'


const RegisterForm = ({ eventEmitter, loading }) => {
  
  const classes = useRegisterFormStyles(theme)
  const [isValid, setIsvalid] = useState(false)
  const [verificationPassword, setVerificationPassword] = useState(false)
  const fieldsData = useRegisterFormState()
  const [phonePrefix, setPrefix] = useState('57')
  const { t } = useContext(languageContext)

  const {
    name,
    lastName,
    email,
    dateBirth,
    phoneNumber,
    institution,
    institutionAffiliation,
    profession,
    password,
    securityQuestion1,
    securityQuestion2,
    securityAnswer1,
    securityAnswer2
  } = fieldsData

  useEffect(() => {
    let notIsValid = false
    for (var key in fieldsData) {
      if (
        (fieldsData[key] && !fieldsData[key].value.length > 0) ||
        (fieldsData[key] && Array.isArray(fieldsData[key].errors) && fieldsData[key].errors.length > 0)
      ) {
        notIsValid = true
      }
    }
    setIsvalid(notIsValid)
  }, [fieldsData])

  const handleClick = () => {

    eventEmitter({
      email: email.value,
      name: name.value,
      last_name: lastName.value,
      institution: institution.value,
      institution_role: institutionAffiliation.value,
      profession: profession.value,
      birthday: new Date(dateBirth.value),
      phone: phoneNumber.value, //phoneNumber.value.trim(),
      phone_prefix: `+${phonePrefix}`,
      password: password.value,
      security_questions: [
        {
          question:securityQuestion1.value,
          answer:securityAnswer1.value
        },
        {
          question:securityQuestion2.value,
          answer:securityAnswer2.value
        }
      ]
    })
  }

  /********************* */

  return (
    <Paper className={classes.formBody}>
      <Grid item container xs={12} justify="center" className={loading ? classes.loading : null}>
        {loading && <LoaderComponent width="100p%" height={80} marginTop="20px" />}
        {!loading && <Fragment>
          <TitleComponent
            justify={'center'}
            alignItems={'center'}
            title={t('registerPage.title')}
            variant={'h5'}
          />

          <Grid
            item
            container
            xs={12}
            spacing={1}
            direction="row"
            justify="center"
          >
            <Grid item xs={5}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="name"
                {...name}
              />
            </Grid>
            <Grid item xs={5}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="last name"
                {...lastName}
              />
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            spacing={1}
            direction="row"
            justify="center"
          >
            <Grid item xs={5}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="email"
                {...email}
              />
            </Grid>

            <Grid item xs={5}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                autoComplete="dateBirth"
                {...dateBirth}
              />
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <PhoneInput
                inputStyle={{width:'90px'}}
                country={'co'}
                value={phonePrefix}
                onChange={setPrefix}
              />
            </Grid>
            {<PhoneNumber
              xs={5}
              phoneNumber={phoneNumber}

            />}
          </Grid>

          <Grid
            item
            container
            xs={12}
            spacing={1}
            direction="row"
            justify="center"
          >
            <Grid item xs={5}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="institution"
                {...institution}
              />
            </Grid>

            <Grid item xs={5}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="institutionAffiliation"
                {...institutionAffiliation}
              />
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            spacing={1}
            direction="row"
            justify="center"
          >
            <Grid item xs={10}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="profession"
                {...profession}
              />
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            spacing={1}
            direction="row"
            justify="center"
          >
            <Grid item xs={5}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="security question 1"
                {...securityQuestion1}
              />
            </Grid>

            <Grid item xs={5}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="security answer 1"
                {...securityAnswer1}
              />
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            spacing={1}
            direction="row"
            justify="center"
          >
            <Grid item xs={5}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="security question 2"
                {...securityQuestion2}
              />
            </Grid>

            <Grid item xs={5}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="security answer 2"
                {...securityAnswer2}
              />
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            spacing={1}
            direction="row"
            justify="center"
          >
            <Grid item xs={5}>
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
            <Grid item xs={5}>
              <PasswordChecker
                checkValue={password.value}
                errorText={t('validators.validatePasswords')}
                eventEmitter={(value) => {
                  const { success } = value
                  setVerificationPassword(success)
                }}
              />
            </Grid>
          </Grid>

          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            disabled={!isValid && verificationPassword ? false : true}
          >
            Continue
          </Button>
        </Fragment>}
      </Grid>
    </Paper>
  )
}

export default RegisterForm
