import { useInputValue } from '../../../../ui/Input/useInputValue'
import { checkTypePhoneNumber, VALIDATORS_PARAMETERS_FORM } from './validators'

export const useParametersFormFieldsCreation = ({fieldsSchema=[]}) => {
  /******* form fields  */
  let fields = {}
  for (let index = 0; index < fieldsSchema.length; index++) {
    const { 
      label,
      name
    }=fieldsSchema[index] || {}
    const field = useInputValue('', VALIDATORS_PARAMETERS_FORM.alphabetic, {
      name: name,
      type: 'text',
      onKeyDown: (event) => {
        return checkTypePhoneNumber(event)
      }
    })
    fields[label]=field        
  } 
  
  return fields
}