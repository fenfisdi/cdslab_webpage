import React from 'react'
import { Grid } from '@material-ui/core'
import PredefinedModelsForm from '../../../components/CompartmentalModels/PredefinedModelsForm'
import { OPTIONS_PREDEFINED_MODELS } from '../../../constants/compartmental'



const CompartmentalNewSimulationPage = () => {

  return (

    <Grid container item xs={12} justify="center" alignItems="center" direction="column">

      <PredefinedModelsForm
        handleClickPredefinedModels={() => { }}
        options={OPTIONS_PREDEFINED_MODELS}
      />
    </Grid>

  )
}

export default CompartmentalNewSimulationPage
