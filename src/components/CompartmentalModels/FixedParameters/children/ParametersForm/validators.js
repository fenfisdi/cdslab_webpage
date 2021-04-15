import { PATTERN_REALS_NUMERIC } from '../../../../Forms/validators/patterns'
import { checkMinLength, checkPattern } from '../../../../Forms/validators/validatorsCheks'

export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ERROR_MESSAGE =
    'This should be a valid real number.'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
export const MIN_LENGTH_MESSAGE = 'The minimum size allowed is ? characters.'
export const TYPE_NUMBER = 'This field must be a phone number'
  
export const VALIDATORS_PARAMETERS_FORM = {
  
  alphabetic: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    },{
      type: 'pattern',
      message: PATTERN_ERROR_MESSAGE,
      check: checkPattern,
      valueToCheck: PATTERN_REALS_NUMERIC
    },
  ]
}
  
export const checkTypePhoneNumber = (event) => {
  const keyCod = event.keyCode
  const key = event.key
  if (![8, 9, 35, 36, 37, 39, 46,189,190].includes(keyCod) && isNaN(Number(key))) {
    event.preventDefault()
    event.stopPropagation()
  }
}
  