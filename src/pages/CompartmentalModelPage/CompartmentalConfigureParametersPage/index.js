import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useCompartmentalConfigureParametersPageState } from './state'


const CompartmentalConfigureParametersPage = () => {
  const { loading, simulation_identifier, parameters } = useCompartmentalConfigureParametersPageState()
  
  return (
    <Grid container item xs={12} justify="center" alignItems="center" direction="column">
      <Grid container item xs={6} justify="center" alignItems="center" direction="column">
        <Typography variant="body2" component="p">
        Configure parameters values
        </Typography>
      </Grid>



    </Grid>

  )
}

export default CompartmentalConfigureParametersPage
