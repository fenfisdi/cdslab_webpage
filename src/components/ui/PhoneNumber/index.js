import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { Input } from '../Input'
const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%',
    marginTop: '16px',
    marginBottom: '8px'
  }
}))

export const PhoneNumber = ({ xs, phoneNumber }) => {
  const classes = useStyles()
  return (
    <Grid xs={xs} item direction='row' className={classes.formControl}>
      <Input
        required
        autoComplete='phoneNumber'
        InputLabelProps={{
          shrink: true
        }}
        {...phoneNumber}
        style={{ width: '100%', 'margin-top': '0px', 'margin-bottom': '0px' }}
      />
    </Grid>
  )
}
