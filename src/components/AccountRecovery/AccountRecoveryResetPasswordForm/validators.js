import {
  checkMinLength,
  checkMaxLength
} from '../../../components/Forms/validators/validatorsCheks'

  
export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ERROR_MESSAGE =
    'It must be a valid email. e.g. myemail@mydomain.com.'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
export const MIN_LENGTH_MESSAGE = 'The minimum size allowed is ? characters.'
export const TYPE_NUMBER = 'This field must be a phone number'
  
export const VALIDATORS_ACCOUNT_RECOVERY_RESET_PASSWORD_FORM = {
 
  password: [
    {
      type: 'maxlength',
      message: MAX_LENGTH_MESSAGE,
      check: checkMaxLength,
      valueToCheck: 50
    },
    {
      type: 'minlength',
      message: MIN_LENGTH_MESSAGE.replace('?', 3),
      check: checkMinLength,
      valueToCheck: 3
    },
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    }
  ]
}
  
  