import { checkMaxLength, checkMinLength } from '../../Forms/validators/validatorsCheks'


export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ERROR_MESSAGE =
  'It must be a valid email. e.g. myemail@mydomain.com.'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'

export const VALIDATORS_PREDEFINED_MODELS_FORM = {
  simulationName: [
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    },
    {
      type: 'maxlength',
      message: MAX_LENGTH_MESSAGE.replace('?', 100),
      check: checkMaxLength,
      valueToCheck: 100
    }
  ],
}
