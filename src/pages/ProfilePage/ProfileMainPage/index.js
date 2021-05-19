import React from 'react'
import { Grid } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import SaveIcon from '@material-ui/icons/Save'
import {useProfilePageStyles } from './styles'


const ProfileMainPage=()=>{
  const classes = useProfilePageStyles()
  const [state, setState] = React.useState({
    notifySmulations: true,
    notifyFileRemoval: true,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return(
    <Grid container  className={classes.root}>
      <Grid container  spacing={9}  direction="column" justify="center"  alignItems="center">
        <Grid item>
          <AccountCircleIcon style={{ fontSize: 80, color: '#827C02'}} />
        </Grid>
        <Grid item>
          <Link href='#/updateDataProfile' color="inherit">
          Update personal data
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" onClick={console.log(1)} color="inherit">
          Change password
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" onClick={console.log(1)} color="inherit">
          Change QR bindings
          </Link>
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