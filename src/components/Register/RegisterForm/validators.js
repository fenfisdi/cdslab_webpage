import {
  checkMinLength,
  checkMaxLength,
  checkPattern,
  checkMinValue,
} from '../../../components/Forms/validators/validatorsCheks'
import {
  PATTERN_ALPHANUMERIC,
  PATTERN_EMAIL,
  PATTERN_NUMERIC,
} from '../../../components/Forms/validators/patterns'

export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ERROR_MESSAGE =
  'It must be a valid email. e.g. myemail@mydomain.com.'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
export const MIN_LENGTH_MESSAGE = 'The minimum size allowed is ? characters.'
export const TYPE_NUMBER = 'This field must be a phone number'

export const VALIDATORS_REGISTER_FORM = {
  email: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0,
    },
    {
      type: 'pattern',
      message: PATTERN_ERROR_MESSAGE,
      check: checkPattern,
      valueToCheck: PATTERN_EMAIL,
    },
    {
      type: 'maxlength',
      message: MAX_LENGTH_MESSAGE.replace('?', 100),
      check: checkMaxLength,
      valueToCheck: 100,
    },
  ],
  password: [
    {
      type: 'maxlength',
      message: MAX_LENGTH_MESSAGE,
      check: checkMaxLength,
      valueToCheck: 50,
    },
    {
      type: 'minlength',
      message: MIN_LENGTH_MESSAGE.replace('?', 3),
      check: checkMinLength,
      valueToCheck: 3,
    },
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0,
    },
  ],
  alphabetic: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0,
    },
    {
      type: 'minlength',
      message: MIN_LENGTH_MESSAGE.replace('?', 3),
      check: checkMinLength,
      valueToCheck: 3,
    },
  ],
  dateTime: [],
  phone: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0,
    },
    {
      type: 'pattern',
      message: TYPE_NUMBER,
      check: checkPattern,
      valueToCheck: PATTERN_NUMERIC,
    },
    {
      type: 'minlength',
      message: MIN_LENGTH_MESSAGE.replace('?', 3),
      check: checkMinLength,
      valueToCheck: 3,
    },
  ],
  ext: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0,
    },
  ],
  genre: {
    type: 'required',
    message: REQUIRED_MESSAGE,
    value: true,
  },
}

export const checkTypeNumber = (event) => {
  const keyCod = event.keyCode
  const key = event.key

  if (
    (![8, 9, 35, 36, 37, 39, 46].includes(keyCod) && isNaN(Number(key))) ||
    keyCod == 32
  ) {
    event.preventDefault()
    event.stopPropagation()
  }
}
