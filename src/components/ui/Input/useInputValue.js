import { useState, useContext } from 'react'
import { languageContext } from '../../../config/languageContext'


export const useInputValue = (
  val,
  validators = [],
  extras
) => {
  const [value, setValue] = useState(val)
  const [errors, setErrors] = useState([])
  const [helperText, setHelperText] = useState(null)
  const {t} = useContext(languageContext)

  const onChange = e => {
    e.target ? setValue(e.target.value) : setValue(e)
    e.target ? validateInput(e.target.value) : validateInput(e)
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
    err.length > 0 ? setHelperText(err.map(e => t(e.message))?.join('\n')) : setHelperText(null)
  }

  return {
    value,
    errors,
    validators,
    helperText,
    onChange,
    'custom-actions':{'setErrors':setErrors},
    ...extras
  }
}
