import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { Input } from '../../ui/Input'
import { useInputValue } from '../../ui/Input/useInputValue'
import { checkTypePhoneNumber, VALIDATORS_REGISTER_FORM } from './validators'
import { TitleComponent } from '../../ui/Title'
import theme from '../../../styles/theme'
import { useRegisterFormStyles } from './styles'
import { PasswordChecker } from '../PasswordChecker'
import { useSelectValue } from '../../ui/Select/useSelectValue'
import Button from '@material-ui/core/Button'
import { usePhoneNumberValue } from '../../ui/PhoneNumber/usePhoneNumberValue'

const RegisterForm = ({ eventEmitter }) => {
  const classes = useRegisterFormStyles(theme)

  /******* form fields  */
  const email = useInputValue('', VALIDATORS_REGISTER_FORM.email, {
    name: 'email',
    type: 'email',
    label: 'Email'
  })
  const name = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'name',
    type: 'text',
    label: 'Name'
  })
  const lastName = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'lastName',
    type: 'text',
    label: 'Last Name'
  })

  const genre = useSelectValue('', VALIDATORS_REGISTER_FORM.genre, {
    options: [
      {
        value: 'F',
        label: 'Female'
      },
      {
        value: 'M',
        label: 'Male'
      }
    ],
    title: 'Gender'
  })

  const institution = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'institution',
    type: 'text',
    label: 'Institution'
  })
  const institutionAfiliation = useInputValue(
    '',
    VALIDATORS_REGISTER_FORM.alphabetic,
    {
      name: 'institutionAfiliation',
      type: 'text',
      label: 'Institution Afiliation'
    }
  )
  const profession = useInputValue('', VALIDATORS_REGISTER_FORM.alphabetic, {
    name: 'profession',
    type: 'text',
    label: 'Profession'
  })
  const dateBirth = useInputValue('', VALIDATORS_REGISTER_FORM.dateTime, {
    name: 'dateBirth',
    type: 'date',
    label: 'birth date'
  })
  const phoneNumber = usePhoneNumberValue('', VALIDATORS_REGISTER_FORM.phone, {
    name: 'phoneNumber',
    type: 'text',
    label: 'phone Number',
    onKeyDown: (event) => {
      return checkTypePhoneNumber(event)
    }
  })
  const phoneExtension = useInputValue('+57', VALIDATORS_REGISTER_FORM.ext, {
    name: 'phoneExtension',
    type: 'text',
    label: 'phone Extension',
    onKeyDown: (event) => {
      return checkTypePhoneNumber(event)
    }
  })
  const password = useInputValue('', VALIDATORS_REGISTER_FORM.password, {
    name: 'password',
    type: 'password',
    label: 'Password'
  })

  const handleClick = () => {
    eventEmitter({
      email: email.value,
      name: name.value,
      last_name: lastName.value,
      sex: genre.value,
      institution: institution.value,
      institution_afiliation: institutionAfiliation.value,
      profession: profession.value,
      date_of_birth: '2021-03-23T21:27:36.253Z',
      phone_number: phoneNumber.value,
      password: password.value
    })
  }

  /********************* */

  return (
    <Paper className={classes.formBody}>
      <Grid item container xs={12} justify='center'>
        <TitleComponent
          justify={'center'}
          alignItems={'center'}
          title={'Registro'}
          variant={'h5'}
        />
        <Grid
          item
          container
          xs={12}
          spacing={1}
          direction='row'
          justify='center'
        >
          <Grid item xs={5}>
            <Input required fullWidth {...name} />
          </Grid>
          <Grid item xs={5}>
            <Input required fullWidth autoComplete='last name' {...lastName} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          spacing={1}
          direction='row'
          justify='center'
        >
          <Grid item xs={5}>
            <Input required fullWidth {...email} />
          </Grid>
          <Grid item xs={5}>
            <Input
              required
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              margin='normal'
              autoComplete='dateBirth'
              {...dateBirth}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          spacing={1}
          direction='row'
          justify='center'
        >
          {/* <PhoneNumber
          xs={5}
          phoneNumber={phoneNumber}
          phoneExtension={phoneExtension}
        /> */}
        </Grid>
        <Grid
          item
          container
          xs={12}
          spacing={1}
          direction='row'
          justify='center'
        >
          <Grid item xs={5}>
            <Input
              required
              fullWidth
              autoComplete='institution'
              {...institution}
            />
          </Grid>
          <Grid item xs={5}>
            <Input
              required
              fullWidth
              autoComplete='institutionAfiliation'
              {...institutionAfiliation}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          spacing={1}
          direction='row'
          justify='center'
        >
          <Grid item xs={10}>
            <Input
              required
              fullWidth
              autoComplete='profession'
              {...profession}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          spacing={1}
          direction='row'
          justify='center'
        >
          <Grid item xs={5}>
            <Input required fullWidth autoComplete='password' {...password} />
          </Grid>
          <Grid item xs={5}>
            <PasswordChecker
              checkValue={password.value}
              errorText={'Incorrect password.. '}
              eventEmitter={(value) => {
                console.log('isVeri:::>', value)
              }}
            />
          </Grid>
        </Grid>

        <Button
          onClick={handleClick}
          variant='contained'
          color='primary'
          className={{}}
          disabled={false}
        >
          Continue
        </Button>
      </Grid>
    </Paper>
  )
}

export default RegisterForm
