import {
  checkMinLength,
  checkMaxLength,
  checkPattern
} from '../../../components/Forms/validators/validatorsCheks'
import {
  PATTERN_EMAIL,
} from '../../../components/Forms/validators/patterns'

export const REQUIRED_MESSAGE = 'validators.fieldRequired'
export const PATTERN_ERROR_MESSAGE =
  'validators.validateEmail'
export const MAX_LENGTH_MESSAGE = 'validators.maxLength'
export const MIN_LENGTH_MESSAGE = 'validators.minLength'
export const TYPE_NUMBER = 'validators.validatePhone'

export const VALIDATORS_REGISTER_FORM = {
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
  ],
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
  ],
  dateTime: [],
  phone: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    },
    {
      type: 'minlength',
      message: MIN_LENGTH_MESSAGE.replace('?', 10),
      check: checkMinLength,
      valueToCheck: 9
    }
  ],
  ext: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    }
  ],
  genre: {
    type: 'required',
    message: REQUIRED_MESSAGE,
    value: true
  }
}

export const checkTypePhoneNumber = (event) => {
  const keyCod = event.keyCode
  const key = event.key

  if (![8, 9, 35, 36, 37, 39, 46, 187].includes(keyCod) && isNaN(Number(key))) {
    event.preventDefault()
    event.stopPropagation()
  }
}