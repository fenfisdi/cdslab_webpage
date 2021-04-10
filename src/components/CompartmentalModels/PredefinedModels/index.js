import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import ModelCard from '../ModelCard'
import CompartmentalButton from '../CompartmentalButton'
import { usePredefinedModelsState } from './state'
import { usePredefinedModelsStyles } from './styles'


const PredefinedModels = ({handleClickPredefinedModels}) => {
  const classes = usePredefinedModelsStyles()
  const {updateStep,step}= usePredefinedModelsState()

  const handleClick =(charter)=>{
    handleClickPredefinedModels(charter)
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
        Choose one of the predefined models     
      </Typography>
      <ModelCard 
        justify="center"
        alignItems="center"
        options={[{name:'SIR'},{name:'SEIR'},{name:'SEIRV'}]}
        eventEmitted={handleClick}
      />
      <CompartmentalButton        
        justify="center"
        alignItems="center"
        text={'Choose Simulation Type'}
      />
    </Grid>
  )
}

export default PredefinedModels
