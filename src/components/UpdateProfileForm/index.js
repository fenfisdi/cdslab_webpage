import { Grid, Paper } from '@material-ui/core'
<<<<<<< HEAD
import React, { Fragment, useEffect, useState, useContext } from 'react'
=======
import React, { Fragment, useState, useContext } from 'react'
>>>>>>> dev
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Input } from '../ui/Input'
<<<<<<< HEAD
import { TitleComponent } from '../ui/Title'
import theme from '../../styles/cdslabTheme'
import { useUpdateProfileFormStyles } from './styles'
import { PhoneNumber } from '../ui/PhoneNumber'
import Button from '@material-ui/core/Button'
import { userUpdateFormState } from './state'
import LoaderComponent from '../ui/Loader'
import { languageContext } from '../../config/languageContext'
import { useLocation } from 'react-router-dom'

const UpdateProfileForm = ({ eventEmitter, loading }) => {

  const classes = useUpdateProfileFormStyles(theme)
  const [isvalid, setIsvalid] = useState(false)
  const fieldsData = userUpdateFormState()
  const [phonePrefix, setPrefix] = useState('57')
  const { t } = useContext(languageContext)
  const location = useLocation()

  console.log(location.state)
=======
import { useUpdateProfileFormStyles } from './styles'
import {userUpdateFormState} from './state'
import { TitleComponent } from '../ui/Title'
import Button from '@material-ui/core/Button'
import { languageContext } from '../../config/languageContext'
import LoaderComponent from '../ui/Loader'

const UpdateProfileForm = ({eventEmitter, loading}) => {

  const classes = useUpdateProfileFormStyles(theme)
  const fieldsData = userUpdateFormState()
  const [phonePrefix, setPrefix] = useState('57')
  const { t } = useContext(languageContext)
>>>>>>> dev

  const {
    name,
    lastName,
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

<<<<<<< HEAD
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

=======
>>>>>>> dev
  const handleClick = () => {

    eventEmitter({
      name: name.value,
      last_name: lastName.value,
      institution: institution.value,
      institution_role: institutionAffiliation.value,
      profession: profession.value,
      birthday: new Date(dateBirth.value),
      phone: phoneNumber.value, //phoneNumber.value.trim(),
<<<<<<< HEAD
      phone_prefix: `+${phonePrefix}`
=======
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
>>>>>>> dev
    })
  }

  return (
    <Paper className={classes.formBody}>
      <Grid item container xs={12} justify="center" className={loading ? classes.loading : null}>
        {loading && <LoaderComponent width="100p%" height={80} marginTop="20px" />}
        {!loading && <Fragment>
<<<<<<< HEAD
          <TitleComponent
            justify='center'
            alignItems='center'
            title={t('registerPage.title')}
            variant='h5'
          />

=======
          <Grid
            item
            container
            xs={12}
            spacing={9}
            direction="row"
            
          >
            <Grid item xs={11}>
              <TitleComponent
                justify='center'
                alignItems='center'
                title={t('registerPage.title')}
                variant='h5'
            
              />
            </Grid>
          </Grid>
          
>>>>>>> dev
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
<<<<<<< HEAD
=======
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
>>>>>>> dev
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
<<<<<<< HEAD
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
=======
>>>>>>> dev
            alignItems="center"
          >
            <Grid item xs={2}>
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
<<<<<<< HEAD

=======
>>>>>>> dev
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