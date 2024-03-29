import {
  checkMinLength,
  checkMaxLength,
  checkPattern
} from '../../components/Forms/validators/validatorsCheks'
import { PATTERN_EMAIL } from '../../components/Forms/validators/patterns'

export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ERROR_MESSAGE = 'It must be a valid email. e.g. myemail@mydomain.com.'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
export const MIN_LENGTH_MESSAGE = 'The minimum size allowed is ? characters.'

export const VALIDATORS_LOGIN_FORM = {
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
  ],
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
