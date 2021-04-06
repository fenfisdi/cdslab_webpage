import { Grid, Paper } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { Input } from '../../ui/Input'
import { TitleComponent } from '../../ui/Title'
import theme from '../../../styles/theme'
import { useRegisterFormStyles } from './styles'
import { PhoneNumber } from '../../ui/PhoneNumber'
import { PasswordChecker } from '../PasswordChecker'
import { SelectComponent } from '../../ui/Select'
import Button from '@material-ui/core/Button'
import { useRegisterFormState } from './state'
import LoaderComponent from '../../ui/Loader'
import { SecuritySharp } from '@material-ui/icons'


const RegisterForm = ({ eventEmitter, loading }) => {
  const classes = useRegisterFormStyles(theme)
  const [isValid, setIsvalid] = useState(false)
  const[verificationPassword,setVerificationPassword] = useState(false)
  const  fieldsData = useRegisterFormState()

  const {
    name,
    lastName,
    email,
    dateBirth,
    phoneNumber,
    genre,
    institution,
    institutionAfiliation,
    profession,
    password,
    securityQuestion1,
    securityQuestion2,
    securityAnswer1,
    securityAnswer2
  } = fieldsData

  const questions=[securityQuestion1.value, securityQuestion2.value]
  const answers=[securityAnswer1.value, securityAnswer2.value]

  useEffect(()=>{
    let notIsValid = false
    for(var key in fieldsData) {
      if(
        (fieldsData[key] && !fieldsData[key].value.length>0) || 
        (fieldsData[key] && Array.isArray(fieldsData[key].errors) && fieldsData[key].errors.length>0)
      ){        
        notIsValid = true        
      }
    }
    setIsvalid(notIsValid)
  },[fieldsData])

  const handleClick = () => {
    eventEmitter({
      email: email.value,
      name: name.value,
      last_name: lastName.value,
      sex: genre.value,
      institution: institution.value,
      institution_afiliation: institutionAfiliation.value,
      profession: profession.value,
      date_of_birth: new Date(dateBirth.value),
      phone_number: phoneNumber.value.trim(),
      password: password.value,
      security_questions:{
        questions,
        answers
      }
    })
  }

  /********************* */

  return (
    <Paper className={classes.formBody}>
      <Grid item container xs={12} justify="center" className={loading ? classes.loading : null}>
        {loading && <LoaderComponent width="100p%" height={80} marginTop="20px"/>}
        {!loading && <Fragment>
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
                errorText={'Incorrect password.. '}
                eventEmitter={(value) => {                
                  const{success} = value                
                  setVerificationPassword(success)
                }}
              />
            </Grid>
          </Grid>
        
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            className={{}}
            disabled={!isValid && verificationPassword? false:true}
          >
          Continue
          </Button>
        </Fragment>}
      </Grid>
    </Paper>
  )
}

export default RegisterForm
