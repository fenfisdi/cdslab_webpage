import React from 'react'
import { useHistory } from 'react-router'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Switch from '../../../components/ui/Switch'
import {ContainerTitle, ProfileContainer, useProfilePageStyles, ContainerButtonCard } from './styles'
import TitleIcon from '../../../components/layouts/TitleIcon'
import SvgProfiles from '../../../assets/icons/SvgProfiles'
import ButtonCard from '../../../components/ButtonCard'
import CompartmentalButton from '../../../components/CompartmentalModels/CompartmentalButton'

export const ButtonCommon = ({ functionButton, classButton, name }) => (
  <Button
    onClick={functionButton}
    className={classButton}
  >
    {name}
  </Button>
)

const ProfileMainPage=()=>{
  const classes = useProfilePageStyles()
  const [state, setState] = React.useState({
    notifySmulations: true,
    notifyFileRemoval: true,
  })

  const history = useHistory()

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const redirectUpdateDataProfile = () => {
    history.push({ 
      pathname: '/profile/UpdateDataProfile'
    })
  }

  const redirectChangePassword = () => {
    history.push({ 
      pathname: '/profile/ChangePassword',
    })
  }

  const handleChangeQRBindings = () => {
    
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
            onClick={()=>{}}
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