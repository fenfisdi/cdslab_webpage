import { useSelectValue } from '../../ui/Select/useSelectValue'
import { VALIDATORS_CONFIGURABLE_PARAMETERS_FORM } from './validators'

export const useConfigurableParametersFormFieldsCreation = ({parameters=[]}) => {
  /******* form fields  */
  let fields = {}
  for (let index = 0; index < parameters.length; index++) {
    const { label, representation,unit }=parameters[index]
    const field = useSelectValue('', VALIDATORS_CONFIGURABLE_PARAMETERS_FORM.selectors, {})
    fields[label]=field
        
  } 
  
  return fields
}