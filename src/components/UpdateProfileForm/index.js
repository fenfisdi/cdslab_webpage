import { Grid, Paper } from '@material-ui/core'
import React, { Fragment, useState, useContext } from 'react'
import { useHistory } from 'react-router'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Input } from '../ui/Input'
import { TitleComponent } from '../ui/Title'
import theme from '../../styles/cdslabTheme'
import { useUpdateProfileFormStyles } from './styles'
import { PhoneNumber } from '../ui/PhoneNumber'
import Button from '@material-ui/core/Button'
import { userUpdateFormState } from './state'
import LoaderComponent from '../ui/Loader'
import { languageContext } from '../../config/languageContext'
import { useLocation } from 'react-router-dom'

const UpdateProfileForm = ({  loading }) => {

  const history = useHistory()
  const location = useLocation()
  const userData = location.state.detail
  const classes = useUpdateProfileFormStyles(theme)
  const fieldsData = userUpdateFormState(userData)
  const [phonePrefix, setPrefix] = useState(userData.phone_prefix.slice(1))
  const { t } = useContext(languageContext)
  
  const {
    name,
    lastName,
    dateBirth,
    phoneNumber,
    institution,
    institutionAffiliation,
    profession,

  } = fieldsData

  

  const handleClick = () => {
    userData['name'] = name.value,
    userData['last_name'] = lastName.value,
    userData['birthday']= dateBirth.value,
    userData['institution'] = institution.value,
    userData['institution_role'] = institutionAffiliation.value,
    userData['profession'] = profession.value,
    userData['phone'] = phoneNumber.value,
    userData['phone_prefix'] = `+${phonePrefix}`
    history.push({
      pathname: '/profile'
    })
  }

  return (
    <Paper className={classes.formBody}>
      <Grid item container xs={12} justify="center" className={loading ? classes.loading : null}>
        {loading && <LoaderComponent width="100p%" height={80} marginTop="20px" />}
        {!loading && <Fragment>
          <TitleComponent
            justify='center'
            alignItems='center'
            title={t('registerPage.title')}
            variant='h5'
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
            <Grid item xs={3}>
              <PhoneInput
                inputStyle={{ width:'90px' }}
                country='co'
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
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            disabled={false}
          >
            Continue
          </Button>
        </Fragment>}
      </Grid>
    </Paper>
  )
}
export default UpdateProfileForm