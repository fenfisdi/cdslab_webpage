import {
  checkMinLength,
  checkMaxLength,
  checkPattern
} from '../../components/Forms/validators/validatorsCheks'
import { PATTERN_ALPHANUMERIC } from '../../components/Forms/validators/patterns'

export const REQUIRED_MESSAGE = 'This field is requiered'
export const PATTERN_ERROR_MESSAGE = 'a-z 0-9'
export const MAX_LENGTH_MESSAGE = 'Max size is 20'
export const MIN_LENGTH_MESSAGE = 'Min size is'

export const VALIDATORS_LOGIN_FORM = {
  username: [
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
      valueToCheck: PATTERN_ALPHANUMERIC
    },
    {
      type: 'maxlength',
      message: MAX_LENGTH_MESSAGE,
      check: checkMaxLength,
      valueToCheck: 20
    },
    {
      type: 'minlength',
      message: MIN_LENGTH_MESSAGE,
      check: checkMinLength,
      valueToCheck: 3
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
      message: `${MIN_LENGTH_MESSAGE} 3`,
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
