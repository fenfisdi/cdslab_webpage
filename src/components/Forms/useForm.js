import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

const FormComponent = ({
  setValue,
  value,
  label,
  name,
  helperText,
  type = 'text',
  extras
}) => (
  <form className="text-field">
    <TextField
      label={label}
      type={type}
      name={name}
      value={value}
      placeholder={label}
      helperText={helperText}
      onChange={(e) => setValue(e.target.value)}
      error={(!!helperText)}
      {...extras}
    />
  </form>
)

export default function useForm(
  { name,
    label,
    defaultValue,
    validators = [],
    extras }) {
  const [value, setValue] = useState(defaultValue)
  const [errors, setErrors] = useState([])
  const [helperText, setHelperText] = useState(null)

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
    err.length > 0 ? setHelperText(err.map(e => e.message)?.join('\n')) : setHelperText(null)
  }

  return [
    <FormComponent
      key={name}
      name={name}
      value={value}
      setValue={(e) => onChange(e)}
      label={label}
      validators={validators}
      helperText={helperText}
      extras={extras}
    />,
    value,
    setValue,
    errors
  ]
}
