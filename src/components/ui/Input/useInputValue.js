import { useState } from 'react'

export const useInputValue = ({
  name: nameP = '',
  value: valueP = '',
  label: placeholderP = '',
  validators: validatorsParam = [],
  errors: errorsP = [],
  type: typeP = 'text'
}) => {
  const [value, setValue] = useState(valueP)
  const [label, setLabel] = useState(placeholderP)
  const [name, setName] = useState(nameP)
  const [errors, setErrors] = useState(errorsP)
  const [validators, setValidators] = useState(validatorsParam)
  const [type, setType] = useState(typeP)
  const [helperText, setHelperText] = useState(null)

  const onChange = e => {
    setValue(e.target.value)
    validateInput(e.target.value)
  }

  /**
   *
   * @param {*} value
   * @return Array of errors
   */
  const validateInput = value => {
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
    err.length > 0 ? setHelperText(err.map(e => e.message)?.join('\n')) : setHelperText(null)
  }

  return {
    value,
    label,
    name,
    errors,
    type,
    validators,
    helperText,
    onChange
  }
}
