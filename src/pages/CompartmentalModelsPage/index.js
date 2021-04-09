import React from 'react'
import ModelCard from '../../components/CompartmentalModels/ModelCard'
import theme from '../../styles/theme'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { useCompartmentalModelsPageState } from './state'
import { useCompartmentalModelsPageStyles } from './styles'
import CompartmentalButton from '../../components/CompartmentalModels/CompartmentalButton'

const CompartmentalModelsPage = () => {
  const classes = useCompartmentalModelsPageStyles(theme)
  const {updateStep,step}= useCompartmentalModelsPageState()

  const handleClickModelCard =(charter)=>{
    console.log('::::::::::::::::>handleClickModelCard',charter)
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
        eventEmitted={handleClickModelCard}
      />
      <CompartmentalButton        
        justify="center"
        alignItems="center"
      />
    </Grid>
  )
}

export default CompartmentalModelsPage
