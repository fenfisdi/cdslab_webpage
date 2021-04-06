import {
  checkMinLength,
  checkMaxLength,
  checkPattern
} from '../../../components/Forms/validators/validatorsCheks'

import {
  PATTERN_EMAIL
} from '../../../components/Forms/validators/patterns'
  
export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ERROR_MESSAGE =
    'It must be a valid email. e.g. myemail@mydomain.com.'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
  
export const VALIDATORS_ACCOUNT_RECOVERY_EMAIL_FORM = {
  email: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    },
    {
      type: 'pattern',
      message: PATTERN_ERROR_MESSAGE,
      check: checkPattern,
      valueToCheck: PATTERN_EMAIL
    },
    {
      type: 'maxlength',
      message: MAX_LENGTH_MESSAGE.replace('?', 100),
      check: checkMaxLength,
      valueToCheck: 100
    }
  ]
}
  