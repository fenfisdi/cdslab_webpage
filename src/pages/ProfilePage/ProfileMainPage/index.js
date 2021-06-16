import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { Grid } from '@material-ui/core'
import { ActiveComponent } from '../../../components/ProfilePage/SwitchComponent'
import {ContainerTitle, ProfileContainer, useProfilePageStyles, ContainerButtonCard } from './styles'
import TitleIcon from '../../../components/layouts/TitleIcon'
import SvgProfiles from '../../../assets/icons/SvgProfiles'
import ButtonCard from '../../../components/ButtonCard'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import {userProfileMainPageState} from './state'
import { useLocation } from 'react-router-dom'

const ProfileMainPage = () => {

  const classes = useProfilePageStyles()
  const location = useLocation()
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { data, sendForm, sendChangePassword }= userProfileMainPageState({ showSnack, setShowSnack })
  const history = useHistory()
  
  const password = location.state && location.state.value
  
  const redirectUpdateDataProfile = () => {
    history.push({ 
      pathname: '/profile/UpdateDataProfile',
      state: {detail: data}
    })
  }
  
  const redirectChangePassword = () => {
    history.push({ 
      pathname: '/profile/ChangePassword',
    })
  }

  const handleChangeQRBindings = () => {
    
  }
  
  function createUpdatePasswordData(
    email,
    password,
    verify_password
  ){
    return{
      email,
      password,
      verify_password
    }
  }


  function createUpdatedData (
    name, 
    last_name, 
    phone, 
    phone_prefix, 
    institution, 
    institution_role, 
    profession,
    birthday,
    notify_removal,
    notify_simulation_done) {

    return {
      name, 
      last_name, 
      phone, 
      phone_prefix, 
      institution, 
      institution_role, 
      profession,
      birthday,
      notify_removal,
      notify_simulation_done
    }
  }

  const eventEmitter = () =>{
    const newUserData = createUpdatedData(

      data.name, 
      data.last_name, 
      data.phone, 
      data.phone_prefix, 
      data.institution, 
      data.institution_role, 
      data.profession,
      new Date(data.birthday),
      data.notify_removal,
      data.notify_simulation_done)
    
    const newPassword = createUpdatePasswordData(
      data.email,
      password.password,
      password.password
    )

    sendForm(newUserData)
    sendChangePassword(newPassword)
  }

  
  return(
    <ProfileContainer>
      
      <ContainerTitle>
        <TitleIcon otherIconType={true} title={'Profile'} icon={<SvgProfiles />}/>
      </ContainerTitle>

      <ContainerButtonCard>
        <ButtonCard        
          name={'Update personal data'}
          indetifier={'indetifier'}
          handleClick={redirectUpdateDataProfile}
        />

        <ButtonCard        
          name={'Change password'}
          indetifier={'indetifier'}
          handleClick={redirectChangePassword}
        />

        <ButtonCard        
          name={'Change QR bindings'}
          indetifier={'indetifier'}
          handleClick={handleChangeQRBindings}       
        />
      </ContainerButtonCard>
     

      <Grid container className={classes.root} spacing={2} direction='column' justify="flex-end" alignItems="flex-end">
        <Grid item className={classes.item}>
          {data ? <ActiveComponent
            isActive={data && data.notify_simulation_done}
            user={data}
            label='Notify me when a simulation finishes'
                        
          />: <></>}          
        </Grid>

        <Grid item className={classes.item}>
          { data? <ActiveComponent
            isActive={data.notify_removal}
            user={data}
            label='Notify me before file removal'
          />: <></>}          
        </Grid>

        <Grid item className={classes.item}>
          <CompartmentalButton
            disabled={false }
            onClick={eventEmitter}
            justify="flex-end"
            alignItems="center"
            text={'Save changes'}
            icon='fas fa-save'
          />           
        </Grid>

      </Grid>
    </ProfileContainer>
  )
}

export default ProfileMainPage
