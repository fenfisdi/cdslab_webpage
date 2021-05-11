import { checkMinLength } from '../../../../Forms/validators/validatorsCheks'

export const MAX_LENGTH_MESSAGE = 'The maximum value allowed is ?.'
export const MIN_LENGTH_MESSAGE = 'The minimum value allowed is ?.'
export const REQUIRED_MESSAGE = 'This field is requiered.'

export const extraParametersValidators =({minValue, maxValue})=>{  
  const validators=[
    
    {
      type: 'required',
      message: REQUIRED_MESSAGE,
      check: checkMinLength,
      valueToCheck: 0
    },
    {
      type: 'maxlength',
      message: MAX_LENGTH_MESSAGE.replace('?', maxValue),
      check: (value,maxValue)=>{
        return !(value>maxValue ) 
      },
      valueToCheck: maxValue
    },
    {
      type: 'minlength',
      message: MIN_LENGTH_MESSAGE.replace('?', minValue),
      check: (value,minValue)=>{
        return !(minValue>value) 
      },
      valueToCheck: minValue
    }
  ]
  
  return validators
}
