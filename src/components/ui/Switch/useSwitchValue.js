import { useState } from 'react'


export const useSwitchValue = (
  val,
  extras,
  validators = []
) => {
  const [value, setValue] = useState(val)
  

  const onChange = e => {
    setValue(e.target.checked)
  }

  
  return {
    value,
    validators,
    onChange,
    ...extras
  }
}