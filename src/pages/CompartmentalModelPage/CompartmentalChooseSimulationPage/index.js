import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import ModelCard from '../../../components/CompartmentalModels/ModelCard'
import { useCompartmentalChooseSimulationPageState } from './state'
import { OPTIONS_COMPARTMENTAL_CHOOSE_SIMULATION } from '../../../constants/compartmental'
import SupportComponent from '../../../components/SupportComponent'
import {HELP_INFORMATION_CHOOSE_SIMULATIONS} from '../../../constants/helpInformation'


const CompartmentalChooseSimulationPage = () => {
  const {executeSelectedOption } = useCompartmentalChooseSimulationPageState()
  
  return (
    <Grid container item xs={12} justify="center" alignItems="center" direction="column" spacing={5}>
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_CHOOSE_SIMULATIONS}/>
      </Grid>
     
      <Grid container item xs={6} justify="center" alignItems="center" direction="column">
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'18px'}}>
          Choose simulation type
        </Typography>
      </Grid>

      <Grid container item xs={12}>
        <ModelCard
          options={OPTIONS_COMPARTMENTAL_CHOOSE_SIMULATION}
          direction="column"
          eventEmitted={executeSelectedOption}
        />
      </Grid>
    </Grid>

  )
}

export default CompartmentalChooseSimulationPage
