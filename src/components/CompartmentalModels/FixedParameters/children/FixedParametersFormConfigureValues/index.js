import React from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ParametersForm from '../ParametersForm'
import { COMPARTMENTAL_FIELDS } from '../../../../../constants/compartmental'
import LoaderComponent from '../../../../ui/Loader'




const FixedParametersFormConfigureValues = ({
  modelIndetifier,
  formParametersSave,
  configuredParameterValues,
  classes,
  name,
  loading}) => {
  
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
      {!loading && <ParametersForm 
        modelIndetifier={modelIndetifier} 
        formParametersSave={formParametersSave} 
        parameterValues={configuredParameterValues}
        fieldsSchema={COMPARTMENTAL_FIELDS[modelIndetifier].fields}
      />}
      {loading && <LoaderComponent width="100p%" height={80} marginTop="20px"/>}
    </>
  )
}

export default FixedParametersFormConfigureValues
