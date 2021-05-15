import React, { useEffect, useState } from 'react'
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
