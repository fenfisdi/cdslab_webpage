import React from 'react'
import { Grid } from '@material-ui/core'
import { MySimulationsForm } from '../../../components/CompartmentalModels/mySimulationsForm'


const CompartmentalMySimulationPage = ({pathParent}) => {


  return (

    <Grid container item xs={12} justify="center" alignItems="center" direction="column">
      <MySimulationsForm />
    </Grid>

  )
}

export default CompartmentalMySimulationPage
