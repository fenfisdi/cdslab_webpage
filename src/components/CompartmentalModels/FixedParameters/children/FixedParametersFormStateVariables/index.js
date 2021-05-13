import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ParametersForm from '../ParametersForm'
import { useParametersFormFieldsCreation } from '../ParametersForm/fieldsCreation'
import CompartmentalButton from '../../../CompartmentalButton'
import { checkErrorsStateVariableForm } from './validators'
import { creationResponseStateVariableForm } from './fieldsCreation'




const FixedParametersFormStateVariables = ({fieldsSchema,loading,executeRequestConfigureStateVariables,valuesFieldParameters}) => {
  const [isValid,setIsValid] = useState(false)
  const fields = useParametersFormFieldsCreation({fieldsSchema,valuesFieldParameters})

  useEffect(()=>{
    setIsValid(checkErrorsStateVariableForm({fields}))
  },[fields])
  
  return (
    <>
      <Grid container item xs={12} justify="center" alignItems="center" direction="column">
        <Typography variant="body1" component="p" >
              Configure State Variables  Initial Values
        </Typography>
      </Grid>
      {!loading && <ParametersForm fields={fields} fieldsSchema={fieldsSchema} />}

      <CompartmentalButton
        disabled={isValid?false:true }
        onClick={()=>{executeRequestConfigureStateVariables(creationResponseStateVariableForm ({fields}))}}
        justify="flex-end"
        alignItems="center"
        text={'Continue'}
      />  

    </>
  )
}

export default FixedParametersFormStateVariables
