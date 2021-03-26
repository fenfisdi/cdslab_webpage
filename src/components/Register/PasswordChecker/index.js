import React, { useEffect, useState } from 'react'
import { Input } from '../../ui/Input'

export const PasswordChecker = ({
  checkValue,
  errorText = '',
  eventEmitter,
}) => {
  const [value, setValue] = useState('')
  const [isPress, setIsPress] = useState(false)
  const [helperText, setHelperText] = useState(null)

  useEffect(() => {
    if (!isPress && value.length > 0) {
      setIsPress(true)
    }
    validatePassword(value, checkValue)
  }, [value])

  useEffect(() => {    
    validatePassword(value, checkValue)    
  }, [checkValue])

  const onChange = (onChangeValue) => {
    setValue(onChangeValue.target.value)
  }

  const validatePassword = (validateValue, valueToCheck) => {
    if (validateValue != valueToCheck) {
      setHelperText(errorText)
      eventEmitter({ success: false })
    } else {
      setHelperText(null)
      eventEmitter({ success: true })
    }
  }

  return (
    <Input
      disabled={false}
      required
      fullWidth
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      margin="normal"
      autoComplete="repeatPassword"
      name="repeatPassword"
      label="Repeat password"
      type="password"
      helperText={isPress && helperText}
      onChange={(onChangeValue) => onChange(onChangeValue)}
      value={value}
    />
  )
}
