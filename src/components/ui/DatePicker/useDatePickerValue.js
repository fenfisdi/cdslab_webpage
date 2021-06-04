import { useState, useContext } from 'react'
import { languageContext } from '../../../config/languageContext'


export const useDatePickerValue = (
  val=new Date(),
  validators = [],
  extras
) => {
  const [selectedDate, handleDateChange] = useState(val)
  const [errors, setErrors] = useState([])
  const [helperText, setHelperText] = useState(null)
  const {t} = useContext(languageContext)

  const onChange = e => {
    if(e){
      handleDateChange(e)
      validateInput(e)
    }
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
    value:selectedDate,
    errors,
    validators,
    helperText,
    onChange,
    'custom-actions':{'setErrors':setErrors},
    ...extras
  }
}
