import { useEffect, useState } from 'react'


export const useUploadButtonValue = (val, validator, extras) => {
  const [value, setValue] = useState(val)
  const [helperText, setHelperText] = useState(null)
  const [errors, setErrors] = useState(false)
  const [fileName, setFileName] = useState('')

  const onChange = (event) => {
    console.log('hola', event.target.files)
    event && setValue(event.target.files[0])
    event && setFileName(event.target.files[0].name)
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
    onChange,
    setValue,
    fileName,
    ...extras,
  }
}
