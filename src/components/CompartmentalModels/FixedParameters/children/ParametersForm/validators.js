import { checkMinLength } from '../../../../Forms/validators/validatorsCheks'

export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ERROR_MESSAGE =
    'It must be a valid email. e.g. myemail@mydomain.com.'
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
    },
    {
      type: 'minlength',
      message: MIN_LENGTH_MESSAGE.replace('?', 3),
      check: checkMinLength,
      valueToCheck: 3
    }
  ]
}
  
export const checkTypePhoneNumber = (event) => {
  const keyCod = event.keyCode
  const key = event.key
  
  if (![8, 9, 35, 36, 37, 39, 46, 187].includes(keyCod) && isNaN(Number(key))) {
    event.preventDefault()
    event.stopPropagation()
  }
}
  