import { useEffect, useState } from 'react'


export const useParametersFormState = ({fields}) => {
  const [isValid, setIsvalid] = useState(false)

  useEffect(()=>{
    let notIsValid = false
    for(var key in fields) {
      console.log(fields[key])
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
    let answers=[]
    for(var key in fields) {
      answers.push(fields[key].value)
    }
    console.log('data:::>',answers)
    
  }
  
  return {
    handleClickButton,
    setIsvalid,
    isValid
  }
}