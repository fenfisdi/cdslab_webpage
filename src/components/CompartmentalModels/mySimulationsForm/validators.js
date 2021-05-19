import { checkMaxLength, checkMinLength } from '../../Forms/validators/validatorsCheks'

export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ERROR_MESSAGE =
  'It must be a valid email. e.g. myemail@mydomain.com.'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
export const MIN_LENGTH_MESSAGE = 'validators.minLength'

export const VALIDATORS_MY_SIMULATIONS_FORM = {

  search: [
  ],
  modelType: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      value: true
    }
  ],
  parameterType: [
  ],
  year: [
  ],
  month: [
    {
      type: 'minlength',
      message: MIN_LENGTH_MESSAGE.replace('?', 2),
      check: checkMinLength,
      valueToCheck: 2
    }
  ],
  day: [
  ],
}
