import React from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ParametersForm from '../ParametersForm'
import { COMPARTMENTAL_FIELDS } from '../../../../../constants/compartmental'




const FixedParametersFormConfigureValues = ({
  modelIndetifier,
  formParametersSave,
  configuredParameterValues,
  classes,
  name}) => {
  
  return (
    <>
      <Grid container item xs={12} justify="center" alignItems="center" direction="column">
        <Typography variant="body1" component="p" className={classes.title}>
              Fixed Paramaters
        </Typography>
        <Typography variant="body2" component="p" className={classes.title}>
          {name} Model 
        </Typography>
        <Typography variant="body2" component="p" className={classes.title}>
              Configure parameters values    
        </Typography>
      </Grid>          
      <ParametersForm 
        modelIndetifier={modelIndetifier} 
        formParametersSave={formParametersSave} 
        parameterValues={configuredParameterValues}
        fieldsSchema={COMPARTMENTAL_FIELDS}
      />
    </>
  )
}

export default FixedParametersFormConfigureValues
