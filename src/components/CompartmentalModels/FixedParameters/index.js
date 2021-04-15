import React from 'react'
import { Grid } from '@material-ui/core'
import { useFixedParametersStyles } from './styles'
import { useFixedParametersState } from './state'
import LoaderComponent from '../../ui/Loader'
import BackButton from '../../ui/BackButton'
import FixedParametersFormConfigureValues from './children/FixedParametersFormConfigureValues'
import FixedParametersFormStateVariables from './children/FixedParametersFormStateVariables'


const FixedParameters = ({
  handleClickSaveConfiguredParameterValues,
  handleClickSaveConfigureStateVariables,
  loading,
  fatherUpdateStep,
  setParameters,
  parameters}) => {
  
  const classes = useFixedParametersStyles()
  const  { predefinedModel, configuredParameterValues, stateVariableValues } = parameters
  const  { name, indetifier } = predefinedModel
  
  const { 
    handleFormParametersSave,
    handleFormConfigureStateVariablesSave,
    updateStep,
    step}= useFixedParametersState({
    setParameters,
    parameters,
    handleClickSaveConfiguredParameterValues,
    handleClickSaveConfigureStateVariables})
  

 

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
        {step == 0  &&
          <FixedParametersFormConfigureValues 
            modelIndetifier={indetifier}
            formParametersSave={handleFormParametersSave}
            configuredParameterValues={configuredParameterValues}
            classes={classes}
            name={name}
            loading={loading}
          />                 
        }

        {step == 1  && 
        
         <FixedParametersFormStateVariables 
           modelIndetifier={indetifier} 
           formConfigureStateVariablesSave={handleFormConfigureStateVariablesSave} 
           stateVariableValues={stateVariableValues}
           classes={classes}
           loading={loading}
         />        
        }

      </Grid>
    </>
  )
}

export default FixedParameters
