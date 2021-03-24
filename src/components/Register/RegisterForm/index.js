import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { Input } from '../../ui/Input'
import { TitleComponent } from '../../ui/Title'
import theme from '../../../styles/theme'
import { useRegisterFormStyles } from './styles'
import { PhoneNumber } from '../../ui/PhoneNumber'
import { PasswordChecker } from '../PasswordChecker'
import { SelectComponent } from '../../ui/Select'
import { useRegisterFormState } from './state'

const RegisterForm = () => {
  const classes = useRegisterFormStyles(theme)

  const {
    email,
    password,
    name,
    lastName,
    phoneExtension,
    phoneNumber,
    date_of_birth,
    institution,
    institutionAfiliation,
    genre,
    profession
  } = useRegisterFormState()
  /********************* */

  return (
    <Paper className={classes.formBody}>
      <Grid item container xs={12}>
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
              required
              fullWidth
              {...name}
            />
          </Grid>
          <Grid item xs={5}>
            <Input
              required
              fullWidth
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
              required
              fullWidth
              {...email}
            />
          </Grid>
          <Grid item xs={5}>
            <Input
              required
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              autoComplete="date_of_birth"
              {...date_of_birth}
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
          direction="row"
          justify="center"
        >
          <Grid item xs={5}>
            <Input
              required
              fullWidth
              autoComplete="institution"
              {...institution}
            />
          </Grid>
          <Grid item xs={5}>
            <Input
              required
              fullWidth
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
              required
              fullWidth
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
              required
              fullWidth
              autoComplete="password"
              {...password}
            />
          </Grid>
          <Grid item xs={5}>
            <PasswordChecker
              checkValue={password.value}
              errorText={'Incorrect password.. '}
              eventEmmiter={(value) => {
                console.log('isVeri:::>', value)
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default RegisterForm
