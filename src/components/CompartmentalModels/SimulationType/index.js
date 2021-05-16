import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import ModelCard from '../ModelCard'
import CompartmentalButton from '../CompartmentalButton'
import {  useSimulationTypeStyles } from './styles'
import { useSimulationTypeState } from './state'
import { isEmpty } from 'lodash'


const SimulationType = ({handleClickSimulationType,options}) => {
  const classes = useSimulationTypeStyles()
  const {
    handleClickButton,
    setModelData,    
    modelData
  }= useSimulationTypeState({handleClickSimulationType})
  const { name } = modelData || {}

  return (
    <Grid 
      xs={12}
      container 
      direction="column" 
      justify="center" 
      alignItems="center"
      spacing={1}
    >
      <Grid container item xs={12} justify="center" alignItems="center" direction="column">
        <Typography variant="body1" component="p" className={classes.title}>
        Compartmental models
        </Typography>
        <Typography variant="body2" component="p" className={classes.title}>
        Choose simulation type   
        </Typography>
      </Grid>
      <ModelCard 
        direction="column"
        justify="center"
        alignItems="center"
        ruta="compartmentalModels"
        options={options}
        eventEmitted={(data)=>{setModelData(data)}}
        
      />
      <CompartmentalButton
        disabled={isEmpty(modelData)}   
        onClick={handleClickButton}           
        justify="center"
        alignItems="center"
        text={`Go to ${name ? name: 'Simulation type selected'} Settings`}
      />
    </Grid>
  )
}

export default SimulationType
