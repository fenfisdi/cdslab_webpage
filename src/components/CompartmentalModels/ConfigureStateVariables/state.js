import { useEffect, useState } from 'react'


export const useConfigureStateVariablesState = ({fields,formConfigureStateVariablesSave}) => {
  const [isValid, setIsvalid] = useState(false)

  useEffect(()=>{
    let notIsValid = false
    for(var key in fields) {      
      if(
        (fields[key] && !fields[key].value.length>0) || 
        (fields[key] && Array.isArray(fields[key].errors) && fields[key].errors.length>0)
      ){        
        notIsValid = true        
      }
    }
    setIsvalid(notIsValid)
  },[fields]) 
  
  const handleClickButton = () => {    
    let data={}
    for(var key in fields) {
      data[key]=fields[key]['value']
    }
    formConfigureStateVariablesSave(data)
  }
  
  return {
    handleClickButton,
    setIsvalid,
    isValid
  }
}