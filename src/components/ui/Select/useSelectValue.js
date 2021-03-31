import { useEffect, useState } from 'react'

export const useSelectValue = (val, validator, extras) => {
  const [value, setValue] = useState(val)
  const [isPress, setIsPress] = useState(false)
  const [helperText, setHelperText] = useState(null)
  const [errors, setErrors] = useState(false)

  const onChange = (e) => {
    if (e && e.target) {
      setValue(e.target.value)
    }
  }

  const onOpen = (event) => {
    !isPress && setIsPress(true)
  }

  const onClose = (event) => {
    if (validator.value && isPress && !value.length > 0) {
      setErrors(true)
      setHelperText(validator.message)
    }
  }

  useEffect(() => {
    if (errors) {
      setErrors(false)
      setHelperText('')
    }
  }, [value])

  return {
    errors,
    helperText,
    value,
    onOpen,
    onClose,
    onChange,
    ...extras,
  }
}
