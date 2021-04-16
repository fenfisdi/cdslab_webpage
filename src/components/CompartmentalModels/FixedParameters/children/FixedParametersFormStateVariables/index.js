import React from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ParametersForm from '../ParametersForm'
import { COMPARTMENTAL_FIELDS } from '../../../../../constants/compartmental'
import LoaderComponent from '../../../../ui/Loader'




const FixedParametersFormStateVariables = ({
  modelIndetifier,
  formConfigureStateVariablesSave,
  stateVariableValues,
  classes,
  loading}) => {
  
  return (
    <>
      <Grid container item xs={12} justify="center" alignItems="center" direction="column">
        <Typography variant="body1" component="p" className={classes.title}>
              Configure State Variables  Initial Values
        </Typography>
      </Grid>
      {!loading && <ParametersForm 
        modelIndetifier={modelIndetifier} 
        formParametersSave={formConfigureStateVariablesSave} 
        parameterValues={stateVariableValues}
        fieldsSchema={COMPARTMENTAL_FIELDS[modelIndetifier].fieldStates}
      />}
      {loading && <LoaderComponent width="100p%" height={80} marginTop="20px"/>}
    </>
  )
}

export default FixedParametersFormStateVariables
