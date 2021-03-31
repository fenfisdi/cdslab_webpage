import React from 'react'
import Grid from '@material-ui/core/Grid'

const SuccessRegister =() =>{

  return(
    <Grid container 
      direction="column" 
      alignItems="center"
      justify="center"
      style={{ marginTop: '10%' }}
    >
      <h1>Please check your email to finish the process</h1>
    </Grid>
  )
}

export default SuccessRegister