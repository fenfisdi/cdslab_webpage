import { isEmpty } from 'lodash'
import { checkTypePhoneNumber, replaceString, titleCase } from '../../../../utils/common'
import { useInputValue } from '../../../ui/Input/useInputValue'


const initialValue = (kwargs,key)=>{
  return kwargs[key]?kwargs[key]:''
}

export const useAgentsModalConstantFieldsCreation = ({parameters=[],valueSet={},key='',multiple, currentMultipleName}) => {  
  
  const handleKwargsReturn =(initialValues)=>{
    if(multiple){      
      return  !isEmpty(initialValues.distributions) && initialValues.distributions[currentMultipleName.name] ? 
        initialValues.distributions[currentMultipleName.name]?.kwargs: initialValues.distributions
    }else{      
      return initialValues.distribution?.kwargs
    }
  }
  
  let fields = {}
  for (let parameterObject of parameters) {    
    let field ={}
    const { parameter='', }=parameterObject     
    field['label']=parameter
    field['input']=
      {...useInputValue(initialValue(handleKwargsReturn(valueSet),key), [], {
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

