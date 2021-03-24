import React from 'react'
import { Input } from '../../ui/Input'
import { useEffect, useRef, useState } from 'react'

export const PasswordChecker = ({
  checkValue,
  errorText = '',
  eventEmmiter,
}) => {
  const [value, setValue] = useState('')
  const [isPress, setIsPress] = useState(false)
  const [helperText, setHelperText] = useState(null)

  useEffect(() => {
    if (!isPress && value.length > 0) {
      setIsPress(true)
    }
    if (value != checkValue) {
      setHelperText(errorText)
      eventEmmiter({ success: false })
    } else {
      setHelperText(null)
      eventEmmiter({ success: true })
    }
  }, [value])

  const onChange = (value) => {
    setValue(value.target.value)
  }

  return (
    <Input
      disabled={false}
      required
      fullWidth
      variant="outlined"
      margin="normal"
      autoComplete="repeat password"
      name="repeat password"
      type="password"
      label="Repeat password"
      helperText={isPress && helperText}
      onChange={(value) => onChange(value)}
    />
  )
}
