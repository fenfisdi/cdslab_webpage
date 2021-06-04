import React from 'react'
import { useHistory } from 'react-router'
import { Grid } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import SaveIcon from '@material-ui/icons/Save'
import {useProfilePageStyles } from './styles'
import TitleIcon from '../../../components/layouts/TitleIcon'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

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
    <Grid container  className={classes.root}>
      <div className={classes.titleContainer}>
        <TitleIcon otherIconType={true} title={'Profile'} icon={<AccountCircleIcon style={{ fontSize: 60, marginRight: '20px', color: '#827C02'}} />}/>
      </div>
      <Grid container  spacing={9}  direction="column" justify="center"  alignItems="center">
        <Grid item>
          <ButtonCommon
            functionButton={redirectUpdateDataProfile}
            classButton={classes.buttonStyle}
            name={'Update personal data'}
          />
        </Grid>
        <Grid item>
          <ButtonCommon
            functionButton={redirectChangePassword}
            classButton={classes.buttonStyle}
            name={'Change password'}
          />
        </Grid>
        <Grid item>
          <ButtonCommon
            functionButton={handleChangeQRBindings}
            classButton={classes.buttonStyle}
            name={'Change QR bindings'}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={2} direction='column' justify="flex-end" alignItems="flex-end">
        <Grid item className={classes.item}>
          <FormControlLabel
            control={<Switch checked={state.notifySmulations} onChange={handleChange} name="notifySmulations"/>}
            label="Notify me when a simulation finishes"
            labelPlacement="start" 
          />
        </Grid>
        <Grid item className={classes.item}>
          <FormControlLabel
            control={<Switch checked={state.notifyFileRemoval} onChange={handleChange} name="notifyFileRemoval"/>}
            label="Notify me before file removal"
            labelPlacement="start"
          />
        </Grid>
        <Grid item className={classes.item}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
          >
        Save changes
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProfileMainPage