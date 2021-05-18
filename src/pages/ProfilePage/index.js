import React from 'react'
import { Grid } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Link from '@material-ui/core/Link'
import {useProfilePageStyles } from './styles'


const ProfilePage=()=>{
  const classes = useProfilePageStyles()

  return(
    <Grid container  spacing={8} className={classes.root} direction="column" justify="center"  alignItems="center">
      <Grid item>
        <AccountCircleIcon style={{ fontSize: 80, color: '#827C02'}} />
      </Grid>
      <Grid item>
        <Link href="#" onClick={console.log(1)} color="inherit">
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
      <Grid container  direction='column' justify='center' alignItems='flex-end'>
        <Grid item className={classes.item}>
          <h4>Notify me when a simulation finishes</h4>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProfilePage