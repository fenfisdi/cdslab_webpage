import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import ModelCard from '../../../components/CompartmentalModels/ModelCard'
import { OPTIONS_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION } from '../../../constants/compartmental'
import SupportComponent from '../../../components/SupportComponent'
import {HELP_INFORMATION_OPTIMIZE_PARAMETERS_SIMULATIONS} from '../../../constants/helpInformation'
import { useCompartmentalOptimizeParametersPageState } from './state'
import { CompartmentalOptimizeParametersSection, CompartmentalOptimizeParametersTitle } from './styles'


const CompartmentalOptimizeParametersPage = () => {
  const { executeSelectedOption } = useCompartmentalOptimizeParametersPageState()

  return (
    <CompartmentalOptimizeParametersSection>
      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_OPTIMIZE_PARAMETERS_SIMULATIONS}/>
      </Grid>
     
      <CompartmentalOptimizeParametersTitle>
        <Typography variant="body2" component="p" style={{'fontWeight':'500', 'fontSize':'18px', 'marginBottom':'18px'}}>
          Choose data source
        </Typography>
      </CompartmentalOptimizeParametersTitle>

      <Grid container item xs={12}>
        <ModelCard
          options={OPTIONS_COMPARTMENTAL_OPTIMIZE_PARAMETERS_SIMULATION}
          direction="column"
          eventEmitted={executeSelectedOption}
        />
      </Grid>
    </CompartmentalOptimizeParametersSection>
  )
}

export default CompartmentalOptimizeParametersPage
