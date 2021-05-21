import { useInputValue } from '../../../../ui/Input/useInputValue'
import { checkTypePhoneNumber, VALIDATORS_PARAMETERS_FORM } from './validators'

export const useParametersFormFieldsCreation = ({fieldParameters=[],valuesFieldParameters=[]}) => {
  /******* form fields  */
  let fields = {}
  for (let index = 0; index < fieldParameters.length; index++) {
    const { 
      label,
      representation=''
    }=fieldParameters[index] || {}
    const updateValuePersis = valuesFieldParameters[index]
    const field = useInputValue(updateValuePersis!=undefined?updateValuePersis['value']: '', VALIDATORS_PARAMETERS_FORM.alphabetic, {
      name: label,
      type: 'text',
      onKeyDown: (event) => {
        return checkTypePhoneNumber(event)
      },
      representation:representation
    })
    fields[label]=field        
  } 
  
  return fields
}