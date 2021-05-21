import React, { useEffect, useState } from 'react'
import ParametersForm from '../ParametersForm'
import { useParametersFormFieldsCreation } from '../ParametersForm/fieldsCreation'
import CompartmentalButton from '../../../CompartmentalButton'
import { checkErrorsStateVariableForm } from './validators'
import { creationResponseStateVariableForm } from './fieldsCreation'
import { isEmpty } from 'lodash'


const FixedParametersFormStateVariables = ({fieldParameters,valuesFieldParameters,executeRequestConfigureStateVariables}) => {
  const [isValid,setIsValid] = useState(false)
  const fields = useParametersFormFieldsCreation({fieldParameters,valuesFieldParameters})
  
  useEffect(()=>{
    setIsValid(checkErrorsStateVariableForm({fields}))
  },[fields])
  
  return (
    <>
      
      {!isEmpty(fields) && <ParametersForm fields={fields} fieldParameters={fieldParameters} />}

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
