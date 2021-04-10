import React from 'react'
import { Grid } from '@material-ui/core'
import { useCompartmentalModelsPageState } from './state'
import { useCompartmentalModelsPageStyles } from './styles'

import PredefinedModels from '../../components/CompartmentalModels/PredefinedModels'
import SimulationType from '../../components/CompartmentalModels/SimulationType'

const CompartmentalModelsPage = () => {
  const classes = useCompartmentalModelsPageStyles()
  const {updateStep,step}= useCompartmentalModelsPageState()

  const handleClickPredefinedModels =(charter)=>{
    console.log('::::::::::::::::>handleClickPredefinedModels',charter)
    updateStep(1)
  }
  
  const handleClickSimulationType =(charter)=>{
    console.log('::::::::::::::::>handleClickSimulationType',charter)
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
      {step==0 && <PredefinedModels handleClickPredefinedModels={handleClickPredefinedModels}/>}
      {step==1 && <SimulationType handleClickSimulationType={handleClickSimulationType} />}
    </Grid>
  )
}

export default CompartmentalModelsPage
