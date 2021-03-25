import React from 'react'
import { Input } from '../../ui/Input'
import { useEffect, useState } from 'react'

export const PasswordChecker = ({
  checkValue,
  errorText = '',
  eventEmitter
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
    if (isPress) {
      validatePassword(value, checkValue)
    }
  }, [checkValue])

  const onChange = (value) => {
    setValue(value.target.value)
  }

  const validatePassword = (value, checkValue) => {
    if (value != checkValue) {
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
      variant='outlined'
      margin='normal'
      autoComplete='repeat password'
      name='repeat password'
      type='password'
      label='Repeat password'
      helperText={isPress && helperText}
      onChange={(value) => onChange(value)}
    />
  )
}
