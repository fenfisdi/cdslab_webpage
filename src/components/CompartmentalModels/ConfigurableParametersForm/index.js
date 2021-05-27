import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { creationResponseConfigurableParametersForm, useConfigurableParametersFormFieldsCreation } from './fieldsCreation'
import CompartmentalButton from '../CompartmentalButton'
import ParametersForm from './children/parametersForm'
import { checkErrorsForm } from './validators'
import { isEmpty } from 'lodash'
import { usePathBreadCrums } from '../../../helpers'

const ConfigurableParametersForm = ({parameters,handleRequestAction,valuesFieldParameters}) => {
  const [isValid,setIsValid] = useState(true)
  const fieldsParametersForm = useConfigurableParametersFormFieldsCreation({parameters,valuesFieldParameters})
  useEffect(()=>{
    checkErrorsForm({fieldsParametersForm,setIsValid})
  },[fieldsParametersForm])
  

  return (
    <Grid container item xs={12} justify="center" alignItems="center" direction="column">
      
      {!isEmpty(fieldsParametersForm) && <ParametersForm parameters={parameters} fieldsParametersForm={fieldsParametersForm}/>} 

      <CompartmentalButton
        disabled={!isValid ? true:false}
        onClick={() => handleRequestAction(creationResponseConfigurableParametersForm(fieldsParametersForm))}
        justify="flex-end"
        alignItems="center"
        text={'Continue'}
      />  
      
    </Grid>

  )

  
}

export default ConfigurableParametersForm
