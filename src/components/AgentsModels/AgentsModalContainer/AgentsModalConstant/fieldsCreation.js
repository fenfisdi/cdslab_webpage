import { checkTypePhoneNumber, replaceString, titleCase } from '../../../../utils/common'
import { useInputValue } from '../../../ui/Input/useInputValue'


const initialValue = (distribution_extra_arguments,key)=>{
  return distribution_extra_arguments[key]?distribution_extra_arguments[key]:''
}

export const useAgentsModalConstantFieldsCreation = ({parameters=[],valueSet={}}) => {
  const { distribution:{distribution_extra_arguments}} = valueSet
  let fields = {}
  for (let parameterObject of parameters) {    
    let field ={}
    const { Parameter='', }=parameterObject     
    field['label']=Parameter
    field['input']=
      {...useInputValue(initialValue(distribution_extra_arguments,titleCase(replaceString(Parameter,' ','_'))), [], {
        name: Parameter,
        type: 'text',
        label:Parameter,
        onKeyDown: (event) => {
          return checkTypePhoneNumber(event)
        }}),
      }
    fields[titleCase(replaceString(Parameter,' ','_'))]=field        
  } 
  
  return fields
}

