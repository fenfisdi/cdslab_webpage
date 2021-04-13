import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import ModelCard from '../ModelCard'
import CompartmentalButton from '../CompartmentalButton'
import { usePredefinedModelsState } from './state'
import { usePredefinedModelsStyles } from './styles'
import { isEmpty } from 'lodash'


const PredefinedModels = ({handleClickPredefinedModels,options}) => {
  const classes = usePredefinedModelsStyles()
  const {  
    handleClickButton,
    setModelData,    
    modelData
  }= usePredefinedModelsState({handleClickPredefinedModels})


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
        Choose one of the predefined models     
        </Typography>
      </Grid>
      <ModelCard 
        justify="center"
        alignItems="center"
        options={options}
        eventEmitted={(data)=>{setModelData(data)}}
      />
      <CompartmentalButton
        disabled={isEmpty(modelData)}   
        onClick={handleClickButton}      
        justify="center"
        alignItems="center"
        text={'Choose Simulation Type'}
      />
    </Grid>
  )
}

export default PredefinedModels
