import {
  checkMinLength
} from '../../../components/Forms/validators/validatorsCheks'

  
export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ERROR_MESSAGE =
    'It must be a valid email. e.g. myemail@mydomain.com.'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
export const MIN_LENGTH_MESSAGE = 'The minimum size allowed is ? characters.'
export const TYPE_NUMBER = 'This field must be a phone number'
  
export const VALIDATORS_QR_BINDING_RECOVERY_SECURITY_QUESTIONS = {
  
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
  

  