import {
  checkMinLength,
  checkMaxLength
} from '../../../components/Forms/validators/validatorsCheks'
    
export const MIN_LENGTH_MESSAGE = 'The minimum size allowed is ? characters.'
export const PATTERN_ERROR_MESSAGE =
      'It must be a valid email. e.g. myemail@mydomain.com.'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
    
export const VALIDATORS_ACCOUNT_RECOVERY_SECURYTI_CODE_FORM = {
  number: [
    {
      type: 'minlength',
      message: MIN_LENGTH_MESSAGE.replace('?', 6),
      check: checkMinLength,
      valueToCheck: 5
    },
    {
      type: 'maxlength',
      message: MAX_LENGTH_MESSAGE.replace('?', 6),
      check: checkMaxLength,
      valueToCheck: 7
    }
  ]
}

export const checkTypePhoneNumber = (event) => {
  const keyCod = event.keyCode
  const key = event.key

  if (![8, 9, 35, 36, 37, 39, 46, 187].includes(keyCod) && isNaN(Number(key))) {
    event.preventDefault()
    event.stopPropagation()
  }
}
    