import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { useConfigurableParametersFormFieldsCreation } from './fieldsCreation'
import CompartmentalButton from '../CompartmentalButton'
import ParametersForm from './children/parametersForm'
import { checkErrorsForm } from './validators'

const ConfigurableParametersForm = ({parameters}) => {
  const [isValid,setIsValid] = useState(true)
  const fieldsParametersForm = useConfigurableParametersFormFieldsCreation({parameters})

  useEffect(()=>{
    checkErrorsForm({fieldsParametersForm,setIsValid})
  },[fieldsParametersForm])

  return (
    <Grid container item xs={12} justify="center" alignItems="center" direction="column">
      
      <ParametersForm parameters={parameters} fieldsParametersForm={fieldsParametersForm}/> 

      <CompartmentalButton
        disabled={!isValid ? true:false}
        onClick={()=>{console.log('presione')}}        
        justify="flex-end"
        alignItems="center"
        text={'Continue'}
      />  
      
    </Grid>

  )

  
}

export default ConfigurableParametersForm
