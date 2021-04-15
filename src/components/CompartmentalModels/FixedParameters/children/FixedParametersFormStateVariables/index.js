import React from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ParametersForm from '../ParametersForm'
import { COMPARTMENTAL_FIELDS_STATE } from '../../../../../constants/compartmental'




const FixedParametersFormStateVariables = ({
  modelIndetifier,
  formConfigureStateVariablesSave,
  stateVariableValues,
  classes}) => {
  
  return (
    <>
      <Grid container item xs={12} justify="center" alignItems="center" direction="column">
        <Typography variant="body1" component="p" className={classes.title}>
              Configure State Variables’ Initial Values
        </Typography>
      </Grid>
      <ParametersForm 
        modelIndetifier={modelIndetifier} 
        formParametersSave={formConfigureStateVariablesSave} 
        parameterValues={stateVariableValues}
        fieldsSchema={COMPARTMENTAL_FIELDS_STATE}
      />
    </>
  )
}

export default FixedParametersFormStateVariables
