import { useState, useContext, useEffect } from 'react'
import { languageContext } from '../../../config/languageContext'


export const useSwitchInputValue = (
  val,
  extras,
  validators = []
) => {
  const [checked, setChecked] = useState(val)
  const [errors, setErrors] = useState([])
  const {language} = useContext(languageContext)

  useEffect(()=>{
    errors.length>0 && onChange({target:{
      checked
    }})
  },[language])


  const onChange = e => {
    setChecked(e.target.checked)
  }

  /**
   *
   * @param {*} value
   * @return Array of errors
   */
  

  
  return {
    checked,
    errors,
    validators,
    onChange,
    'custom-actions':{'setErrors':setErrors},
    ...extras
  }
}