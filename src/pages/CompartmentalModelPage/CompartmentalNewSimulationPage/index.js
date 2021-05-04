import React from 'react'
import { Grid } from '@material-ui/core'
import ModelSettingsPage from '../../SimulationModelPage/ModelSettings'
import PredefinedModels from '../../../components/CompartmentalModels/PredefinedModels'
import { OPTIONS_PREDEFINED_MODELS } from '../../../constants/compartmental'



const CompartmentalNewSimulationPage = () => {

  return (

    <Grid container item xs={12} justify="center" alignItems="center" direction="column">
      <p>Hola mundo</p>
      <PredefinedModels
        handleClickPredefinedModels={() => { }}
        options={OPTIONS_PREDEFINED_MODELS}
        direction={'column'}
      />
      {/* <ModelSettingsPage /> */}
    </Grid>

  )
}

export default CompartmentalNewSimulationPage
