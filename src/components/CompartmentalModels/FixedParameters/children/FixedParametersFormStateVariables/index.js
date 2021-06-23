import React, { Fragment } from 'react'
import ParametersForm from '../ParametersForm'
import { useParametersFormFieldsCreation } from '../ParametersForm/fieldsCreation'
import CompartmentalButton from '../../../CompartmentalButton'
import { creationResponseStateVariableForm } from './fieldsCreation'
import { isEmpty } from 'lodash'

const FixedParametersFormStateVariables = ({fieldParameters,valuesFieldParameters,executeRequestConfigureStateVariables,headersParams}) => {
  const fields = useParametersFormFieldsCreation({fieldParameters,valuesFieldParameters})
  
  
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
