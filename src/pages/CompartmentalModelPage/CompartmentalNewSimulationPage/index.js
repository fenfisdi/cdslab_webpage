import React from 'react'
import { Grid } from '@material-ui/core'
import PredefinedModelsForm from '../../../components/CompartmentalModels/PredefinedModelsForm'
import { OPTIONS_PREDEFINED_MODELS } from '../../../constants/compartmental'
import { useCompartmentalNewSimulationPageState } from './state'



const CompartmentalNewSimulationPage = () => {
  const { predefinedModelsList } = useCompartmentalNewSimulationPageState()
  return (

    <Grid container item xs={12} justify="center" alignItems="center" direction="column">

      <PredefinedModelsForm
        handleClickPredefinedModels={(values) => { console.log('values::::::::::::>',values) }}
        options={predefinedModelsList}
      />
    </Grid>

  )
}

export default CompartmentalNewSimulationPage
