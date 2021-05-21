import { useInputValue } from '../../../../ui/Input/useInputValue'
import { checkTypePhoneNumber, parametersFormFieldsValidators } from './validators'

export const useParametersFormFieldsCreation = ({fieldParameters=[],valuesFieldParameters=[]}) => {
  /******* form fields  */
  let fields = {}
  for (let index = 0; index < fieldParameters.length; index++) {
    const { 
      label,
      representation='',
      max_value:maxValue= Number.MAX_SAFE_INTEGER, 
      min_value:minValue=0
    }=fieldParameters[index] || {}
    const updateValuePersis = valuesFieldParameters[index]
    const field = useInputValue(updateValuePersis!=undefined?updateValuePersis['value']: '', parametersFormFieldsValidators({minValue, maxValue}), {
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