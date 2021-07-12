import { checkTypePhoneNumber, replaceString, titleCase } from '../../../../utils/common'
import { useInputValue } from '../../../ui/Input/useInputValue'


const initialValue = (kwargs,key)=>{  
  return kwargs[key]?kwargs[key]:''
}

export const useAgentsModalConstantFieldsCreation = ({parameters=[],valueSet={},key=''}) => {  
  const { distribution ={} } = valueSet || {}
  distribution['kwargs']=distribution['kwargs']?distribution['kwargs']:{}
  let fields = {}
  for (let parameterObject of parameters) {    
    let field ={}
    const { parameter='', }=parameterObject     
    field['label']=parameter
    field['input']=
      {...useInputValue(initialValue(distribution?.kwargs,key), [], {
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

