import { useEffect, useState } from 'react'

export const useSelectValue = (val, validator, extras) => {
  const [value, setValue] = useState(val)
  const [isPress, setIsPress] = useState(false)
  const [helperText, setHelperText] = useState(null)
  const [errors, setErrors] = useState(false)

  const onChange = (e) => {
    e && setValue(e.target.value)
  }

  const onOpen = () => {
    !isPress && setIsPress(true)
  }

  const onClose = () => {
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
    setValue,
    ...extras,
  }
}
