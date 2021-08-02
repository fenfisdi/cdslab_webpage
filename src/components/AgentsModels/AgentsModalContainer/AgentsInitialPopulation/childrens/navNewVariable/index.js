import { Typography, Grid  } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const NavNewVariable = () => {

  const[isValid,setIsValid] = useState(false)
  return (
    <div>
      <Grid container item xs={12} justify='center' alignItems='center'>
        <p>NavNewVariable</p>
  
      </Grid>
    </div>
  )
  
}

export default NavNewVariable