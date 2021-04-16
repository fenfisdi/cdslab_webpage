import { isEmpty } from 'lodash'
import { useInputValue } from '../../../../ui/Input/useInputValue'
import { checkTypePhoneNumber, VALIDATORS_PARAMETERS_FORM } from './validators'

export const useParametersFormFieldsCreation = ({fieldsSchema=[],parameterValues}) => {
  /******* form fields  */
  let fields = {}
  for (let index = 0; index < fieldsSchema.length; index++) {
    const { input:{ type, name }, indetifier }=fieldsSchema[index]
    const field = useInputValue(!isEmpty(parameterValues)?parameterValues[indetifier]:'', VALIDATORS_PARAMETERS_FORM.alphabetic, {
      name: name,
      type: type,
      onKeyDown: (event) => {
        return checkTypePhoneNumber(event)
      }
    })
    fields[indetifier]=field
        
  } 
  
  return fields
}