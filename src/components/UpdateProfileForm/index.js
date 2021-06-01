import { Grid, Paper } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { PhoneNumber } from '../ui/PhoneNumber'
import theme from '../../styles/cdslabTheme'
import { Input } from '../ui/Input'
import { useUpdateProfileFormStyles } from './styles'
import {useRegisterFormState} from '../Register/RegisterForm/state'
import { TitleComponent } from '../ui/Title'
import Button from '@material-ui/core/Button'

const UpdateProfileForm = () => {

  const fieldsData = useRegisterFormState()
  const classes = useUpdateProfileFormStyles(theme)
  const [phonePrefix, setPrefix] = useState('57')

  const {
    email,
    phoneNumber,
    institution,
    institutionAffiliation,
    profession,
  } = fieldsData

  return (
    <Paper className={classes.formBody}>
      <Grid container xs={12} spacing={2} justify='center'>
        <Fragment>
          <TitleComponent
            justify='center'
            alignItems='center'
            title='Update personal info'
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
                {...email}/>
            </Grid>
            <Grid item sm={12} md={6}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="name"
                {...profession}
              />
            </Grid>
          </Grid>
          <Grid container direction='row' spacing={1} xs={12} alignItems='center'>
            <Grid item sm={12} md={6}>
              <PhoneInput
                inputStyle={{width:'90px'}}
                country={'co'}
                value={phonePrefix}
                onChange={setPrefix}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              {<PhoneNumber
                xs={5}
                phoneNumber={phoneNumber}
              />}
            </Grid>
          </Grid>
          <Grid container spacing={1} xs={12}>
            <Grid item sm={12} md={6}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="name"
                {...institution}/>
            </Grid>
            <Grid item sm={12} md={6}>
              <Input
                disabled={false}
                required
                fullWidth
                variant="outlined"
                margin="normal"
                autoComplete="name"
                {...institutionAffiliation}
              />
            </Grid>
          </Grid>
          <Button
            onClick={console.log(1)}
            variant="contained"
            color="primary"
          >
            Save changes
          </Button>
        </Fragment>
      </Grid>
    </Paper>
  )

}
export default UpdateProfileForm