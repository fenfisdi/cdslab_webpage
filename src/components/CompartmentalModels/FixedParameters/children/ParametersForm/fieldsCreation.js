import { useInputValue } from '../../../../ui/Input/useInputValue'
import { checkTypePhoneNumber, VALIDATORS_PARAMETERS_FORM } from './validators'

export const useParametersFormFieldsCreation = ({fieldsSchema=[],valuesFieldParameters=[]}) => {
  /******* form fields  */
  let fields = {}
  for (let index = 0; index < fieldsSchema.length; index++) {
    const { 
      label,
      name
    }=fieldsSchema[index] || {}
    const updateValuePersis = valuesFieldParameters[index]
    const field = useInputValue(updateValuePersis!=undefined?updateValuePersis['value']: '', VALIDATORS_PARAMETERS_FORM.alphabetic, {
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