import { isEmpty } from 'lodash'
import { useInputValue } from '../../ui/Input/useInputValue'

import { checkTypePhoneNumber, VALIDATORS_CONFIGURE_STATE_VARIABLES } from './validators'

export const useConfigureStateVariablesCreation = ({formFields=[],stateVariableValues}) => {
  /******* form fields  */
  let fields = {}
  for (let index = 0; index < formFields.length; index++) {
    const { input:{ type, name }, indetifier }=formFields[index]
    const field = useInputValue(!isEmpty(stateVariableValues)?stateVariableValues[indetifier]:'', VALIDATORS_CONFIGURE_STATE_VARIABLES.alphabetic, {
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