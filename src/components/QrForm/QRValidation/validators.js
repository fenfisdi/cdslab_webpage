import {
  checkMinLength,
  checkPattern,

} from '../../../components/Forms/validators/validatorsCheks'
import {
  PATTERN_NUMERIC,
} from '../../../components/Forms/validators/patterns'

export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ERROR_MESSAGE ='Invalid type code'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
export const MIN_LENGTH_MESSAGE = 'The minimum size allowed is ? characters.'

export const VALIDATORS_QR_VALUE = {
  otp_code: [
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
      valueToCheck: PATTERN_NUMERIC, 
    }

  ]
}