import {
  checkMinLength,
  checkPattern,

} from '../../../components/Forms/validators/validatorsCheks'
import {
  PATTERN_NUMERIC,
} from '../../../components/Forms/validators/patterns'

export const REQUIRED_MESSAGE = 'validators.fieldRequired'
export const PATTERN_ERROR_MESSAGE ='validators.validateCodeType'
export const MAX_LENGTH_MESSAGE = 'validators.maxLength'
export const MIN_LENGTH_MESSAGE = 'validators.minLength'

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