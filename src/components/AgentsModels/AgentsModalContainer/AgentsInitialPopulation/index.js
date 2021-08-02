import { Typography, Grid  } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import NavNewVariable from './childrens/navNewVariable'




const AgentsInitialPopulation = ({
  modalSettings,
  setModalSettings,
  hanldeDone
}) => {

  const[isValid,setIsValid] = useState(false)
  return (
    <div>
      <Grid container item xs={12} justify='center' alignItems='center'>
        <p>Hola AgentsInitialPopulation </p>
        <NavNewVariable />
  
      </Grid>
    </div>
  )

}

export default AgentsInitialPopulation
