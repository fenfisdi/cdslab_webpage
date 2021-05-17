import {
  checkMinLength,
  checkMaxLength,
  checkPattern
} from '../../components/Forms/validators/validatorsCheks'
import { PATTERN_EMAIL } from '../../components/Forms/validators/patterns'
//'validators.maxLength'
export const REQUIRED_MESSAGE = 'validators.fieldRequired'
export const PATTERN_ERROR_MESSAGE = 'validators.validateEmail'
export const MAX_LENGTH_MESSAGE = 'validators.maxLength'
export const MIN_LENGTH_MESSAGE = 'validators.minLength'

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
      message: MAX_LENGTH_MESSAGE,
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
      message: MIN_LENGTH_MESSAGE,
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
