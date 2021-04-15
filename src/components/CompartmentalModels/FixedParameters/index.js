import React from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useFixedParametersStyles } from './styles'
import { useFixedParametersState } from './state'
import ParametersForm from './children/ParametersForm'
import LoaderComponent from '../../ui/Loader'
import ConfigureStateVariables from '../ConfigureStateVariables'
import BackButton from '../../ui/BackButton'


const FixedParameters = ({configuredParameterValues,stateVariableValues,predefinedModel,handleClickSaveConfiguredParameterValues,handleClickSaveConfigureStateVariables,loading,fatherUpdateStep}) => {
  const classes = useFixedParametersStyles()
  const {updateStep,step}= useFixedParametersState()
  const {name,indetifier}=predefinedModel

  const handleFormParametersSave=(data)=>{
    updateStep(1)
    handleClickSaveConfiguredParameterValues(data)    
  }

  const handleFormConfigureStateVariablesSave=(data)=>{
    handleClickSaveConfigureStateVariables(data)
  }


  return (
    <>
      { <BackButton evenOnClick={()=>{step==0 ?fatherUpdateStep():updateStep(step-1)}} text="back" />}
      <Grid 
        xs={12}
        container      
        direction="column" 
        justify="center" 
        alignItems="center" 
        spacing={1}   
      >
        {step == 0 && !loading &&
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
            modelIndetifier={indetifier} 
            formParametersSave={handleFormParametersSave} 
            configuredParameterValues={configuredParameterValues}/>
        </>
        }
        {step == 1 && !loading && 
        <>
          <Grid container item xs={12} justify="center" alignItems="center" direction="column">
            <Typography variant="body1" component="p" className={classes.title}>
              Configure State Variables’ Initial Values
            </Typography>
          </Grid>
          <ConfigureStateVariables 
            modelIndetifier={indetifier} 
            formConfigureStateVariablesSave={handleFormConfigureStateVariablesSave} 
            stateVariableValues={stateVariableValues}/>
        </>
        }
        {loading && <LoaderComponent width="100p%" height={80} marginTop="20px"/>}
      </Grid>
    </>
  )
}

export default FixedParameters
