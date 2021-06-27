import { checkTypePhoneNumber } from '../../../../utils/common'
import { useInputValue } from '../../../ui/Input/useInputValue'


const initialValue = (distribution_extra_arguments)=>{
  return distribution_extra_arguments?.type_constants?distribution_extra_arguments?.type_constants:''
}

export const useAgentsModalConstantFieldsCreation = ({parameters=[],valueSet={}}) => {
  const { distribution:{distribution_extra_arguments}} = valueSet
  let fields = {}
  for (let index = 0; index < parameters.length; index++) {    
    let field ={}
    const { Parameter='', Field:fieldValues=[] }=parameters[index]     
    field['label']=Parameter
    field['input']=
      {...useInputValue(initialValue(distribution_extra_arguments), [], {
        name: Parameter,
        type: 'text',
        label:Parameter,
        onKeyDown: (event) => {
          return checkTypePhoneNumber(event)
        }}),
      }
    fields[Parameter]=field        
  } 
  
  return fields
}

