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

      {/* {modelData && modelData.parameters && <ConfigurableParametersForm
        parameters={modelData && modelData.parameters}
      />} */}

      <ConfigurableParametersForm
        parameters={
          [
            {label:'labelA', unit:'per day', minValue:2,maxValue:5},
            {label:'labelB', unit:'per day', minValue:2,maxValue:7}
          ]
        }/>
      

    </Grid>

  )
}

export default CompartmentalConfigureParametersPage
