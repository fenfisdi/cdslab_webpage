import { useState, useContext, useEffect } from 'react'
import { languageContext } from '../../../config/languageContext'


export const useSwitchInputValue = (
  val,
  validators = [],
  extras
) => {
  console.log('ccccccccccccccccccccccccc',val)
  const [checked, setChecked] = useState(val)
  const [errors, setErrors] = useState([])
  const [helperText, setHelperText] = useState(null)
  const {t,language} = useContext(languageContext)

  // useEffect(()=>{
  //   errors.length>0 && onChange({target:{
  //     value
  //   }})
  // },[language])


  const onChange = e => {
    setChecked(e.target.checked)
  }

  /**
   *
   * @param {*} value
   * @return Array of errors
   */
  const validateInput = value => {
    if (!validators) {
      return
    }
    const err = validators
      .filter(validator => !validator.check(value, validator.valueToCheck))
      .map(val => {
        return { type: val.type, message: val.message }
      })
    setErrors(err)
    updateHelperText(err)
    return err
  }

  const updateHelperText = (err) => {
    const newArray =  err.map(e =>
    {
      return {
        type: e.type,
        message:t(e.message)
      }
    }
    )
    newArray.length > 0 ? setHelperText(newArray.map(e => e.message)?.join('\n')) : setHelperText(null)
  }

  return {
    checked,
    errors,
    validators,
    helperText,
    onChange,
    'custom-actions':{'setErrors':setErrors},
    ...extras
  }
}