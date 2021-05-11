import { checkMinLength } from '../../../../Forms/validators/validatorsCheks'

export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
export const MIN_LENGTH_MESSAGE = 'The minimum size allowed is ? characters.'
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


export const showError =(fields,setErrorText)=>{  
  if(fields.length>0){
    let countError =0
    fields.forEach((field)=>{
      const {fieldInput:{errors}} = field
      if(errors.length>0){
        setErrorText(errors.map(e => e.message)?.join('\n'))
        return
      }
      countError = countError +1                     
    })            
    countError == fields.length && setErrorText('')
    if(fields.length>=2){
      countError == fields.length && fields[0]['fieldInput']['value'] > fields[1]['fieldInput']['value'] && setErrorText('nooo')     
    }
  }
  
  
}