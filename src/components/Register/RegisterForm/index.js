import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { Input } from '../../ui/Input'
import { TitleComponent } from '../../ui/Title'
import theme from '../../../styles/theme'
import { useRegisterFormStyles } from './styles'
import { PhoneNumber } from '../../ui/PhoneNumber'
import { PasswordChecker } from '../PasswordChecker'
import { SelectComponent } from '../../ui/Select'
import Button from '@material-ui/core/Button'
import { useRegisterFormState } from './state'

const RegisterForm = ({ eventEmitter }) => {
  const classes = useRegisterFormStyles(theme)

  const  {
    email,
    password,
    name,
    lastName,
    phoneExtension,
    phoneNumber,
    dateBirth,
    institution,
    institutionAfiliation,
    genre,
    profession
  } = useRegisterFormState()

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
      password: password.value,
    })
  }

  /********************* */

  return (
    <Paper className={classes.formBody}>
      <Grid item container xs={12} justify="center">
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
        >
          <PhoneNumber
            xs={5}
            phoneNumber={phoneNumber}
            phoneExtension={phoneExtension}
          />
          <SelectComponent xs={5} {...genre} />
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
              autoComplete="institutionAfiliation"
              {...institutionAfiliation}
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
              autoComplete="password"
              {...password}
            />
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
          variant="contained"
          color="primary"
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
