import React, { useEffect, useState, Fragment } from 'react'
import ParametersForm from '../ParametersForm'
import { useParametersFormFieldsCreation } from '../ParametersForm/fieldsCreation'
import CompartmentalButton from '../../../CompartmentalButton'
import { checkErrorsStateVariableForm } from './validators'
import { creationResponseStateVariableForm } from './fieldsCreation'
import { isEmpty } from 'lodash'

const FixedParametersFormStateVariables = ({fieldParameters,valuesFieldParameters,executeRequestConfigureStateVariables,headersParams}) => {
  const [isValid,setIsValid] = useState(false)
  const fields = useParametersFormFieldsCreation({fieldParameters,valuesFieldParameters})
  
  useEffect(()=>{
    setIsValid(checkErrorsStateVariableForm({fields}))
  },[fields])
  
  return (
    <Fragment>
      
      {!isEmpty(fields) && <ParametersForm fields={fields} fieldParameters={fieldParameters} headersParams={headersParams}/>}

      <CompartmentalButton
        onClick={()=>{executeRequestConfigureStateVariables(creationResponseStateVariableForm ({fields}))}}
        justify="flex-end"
        alignItems="center"
        text={'Continue'}
      />  

    </Fragment>
  )
}

export default FixedParametersFormStateVariables
