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
              required
              fullWidth
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
          <PhoneNumber
            xs={5}
            phoneNumber={phoneNumber}
            phoneExtension={phoneExtension}
          />
          <SelectComponent xs={5} {...genre} />
        </Grid>

        {/* <Divider style={{ margin: "10px 0", backgroundColor: "#0F0C5A" }} /> */}

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
