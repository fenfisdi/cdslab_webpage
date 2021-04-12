import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import ModelCard from '../ModelCard'
import CompartmentalButton from '../CompartmentalButton'
import {  useAdjustParametersStyles } from './styles'
import { useAdjustParametersState } from './state'


const AdjustParameters = ({handleClickAdjustParameters,options}) => {
  const classes = useAdjustParametersStyles()
  const { updateStep, step}= useAdjustParametersState()

  const handleClick =(charter)=>{
    handleClickAdjustParameters(charter)
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
        Choose Data Source
      </Typography>
    
      <ModelCard 
        justify="center"
        alignItems="center"
        options={options}
        eventEmitted={handleClick}
      />
      <CompartmentalButton        
        justify="center"
        alignItems="center"
        text={'Go to <Upload Data / Use Available data selected> Settings'}
      />
    </Grid>
  )
}

export default AdjustParameters
