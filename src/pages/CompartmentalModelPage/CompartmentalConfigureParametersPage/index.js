import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useCompartmentalConfigureParametersPageState } from './state'
import ConfigurableParametersForm from '../../../components/CompartmentalModels/ConfigurableParametersForm'


const CompartmentalConfigureParametersPage = () => {
  const { loading, currentSimulation, predefinedModelSelected, predefinedModelSelected:{modelData} } = useCompartmentalConfigureParametersPageState()
  
  return (
    <Grid container item xs={12} justify="center" alignItems="center" direction="column">
      <Grid container item xs={6} justify="center" alignItems="center" direction="column">
        <Typography variant="body2" component="p">
        Configure parameters values
        </Typography>
      </Grid>

      {modelData && modelData.parameters && <ConfigurableParametersForm
        parameters={modelData && modelData.parameters}
      />}

    </Grid>

  )
}

export default CompartmentalConfigureParametersPage
