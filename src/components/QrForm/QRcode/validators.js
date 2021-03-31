import {
    checkMinLength,
    checkMaxLength,
    checkPattern
  } from '../../components/Forms/validators/validatorsCheks'
  import { PATTERN_ALPHANUMERIC, PATTERN_EMAIL } from '../../components/Forms/validators/patterns'
  
  export const REQUIRED_MESSAGE = 'This field is requiered.'
  export const PATTERN_ERROR_MESSAGE = 'It must be a valid email. e.g. myemail@mydomain.com.'
  export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is 6 characters.'
  export const MIN_LENGTH_MESSAGE = 'The minimum size allowed is ? characters.'

  export const VALIDATORS_QR_VALUE = {

    QR_value: [
        {
          type: 'maxlength',
          message: MAX_LENGTH_MESSAGE,
          check: checkMaxLength,
          valueToCheck: 6
        }
    ]
  }