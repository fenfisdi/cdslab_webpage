import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import ModelCard from '../ModelCard'
import CompartmentalButton from '../CompartmentalButton'
import {  useSimulationTypeStyles } from './styles'
import { useSimulationTypeState } from './state'


const SimulationType = ({handleClickSimulationType}) => {
  const classes = useSimulationTypeStyles()
  const { updateStep, step}= useSimulationTypeState()

  const handleClick =(charter)=>{
    handleClickSimulationType(charter)
  }
  

  return (
    <Grid 
      xs={12}
      container 
      direction="column" 
      justify="center" 
      alignItems="center"
      spacing={2}
    >
      <Typography variant="body1" component="p" className={classes.title}>
        Compartmental models
      </Typography>
      <Typography variant="body2" component="p" className={classes.title}>
        Choose simulation type   
      </Typography>
      <ModelCard 
        justify="center"
        alignItems="center"
        options={[{name:'Adjust parameters'},{name:'Fixed parameters'}]}
        eventEmitted={handleClick}
      />
      <CompartmentalButton        
        justify="center"
        alignItems="center"
        text={'Go to <Simulation type selected> Settings'}
      />
    </Grid>
  )
}

export default SimulationType
