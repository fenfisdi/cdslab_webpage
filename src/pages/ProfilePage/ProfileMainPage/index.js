import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { Grid } from '@material-ui/core'
import Switch from '../../../components/ui/Switch'
import {ContainerTitle, ProfileContainer, useProfilePageStyles, ContainerButtonCard } from './styles'
import TitleIcon from '../../../components/layouts/TitleIcon'
import SvgProfiles from '../../../assets/icons/SvgProfiles'
import ButtonCard from '../../../components/ButtonCard'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'
import {userProfileMainPageState} from './state'

const ProfileMainPage = () => {

  const classes = useProfilePageStyles()
  

  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const { data }= userProfileMainPageState({ showSnack, setShowSnack })
  const history = useHistory()
  console.log(data)

  const [state, setState] = useState({
    notifySmulations: true,
    notifyFileRemoval: true
  })
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
    data['notify_removal'] = !state.notifyFileRemoval
    data['notify_simulation_done'] = !state.notifySmulations
  }
  
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

  const eventEmitter = () =>{
    console.log(data)
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
          <Switch
            value={state.notifySmulations}
            handleChange={handleChange}
            name='notifySmulations'
            label='Notify me when a simulation finishes'
            labelPlacement='start'            
          />          
        </Grid>

        <Grid item className={classes.item}>
          <Switch
            value={state.notifyFileRemoval}
            handleChange={handleChange}
            name='notifyFileRemoval'
            label='Notify me before file removal'
            labelPlacement='start'
          />          
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
