import { checkTypePhoneNumber, replaceString, titleCase } from '../../../../utils/common'
import { useInputValue } from '../../../ui/Input/useInputValue'


const initialValue = (distribution_extra_arguments,key)=>{
  return distribution_extra_arguments[key]?distribution_extra_arguments[key]:''
}

export const useAgentsModalConstantFieldsCreation = ({parameters=[],valueSet={}}) => {
  const { distribution:{kwargs}} = valueSet
  let fields = {}
  for (let parameterObject of parameters) {    
    let field ={}
    const { parameter='', }=parameterObject     
    field['label']=parameter
    field['input']=
      {...useInputValue(initialValue(kwargs,titleCase(replaceString(parameter,' ','_'))), [], {
        name: parameter,
        type: 'text',
        label:parameter,
        onKeyDown: (event) => {
          return checkTypePhoneNumber(event)
        }}),
      }
    fields[titleCase(replaceString(parameter,' ','_'))]=field        
  } 
  
  return fields
}

