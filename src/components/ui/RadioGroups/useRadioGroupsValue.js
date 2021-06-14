import { useState } from 'react'

export const useRadioGroupsValue = (val, extras) => {
  const [value, setValue] = useState(val)

  const onChange = (e) => {
    e.target ? setValue(e.target.value) : setValue(e)
  }

  return {
    value,

    onChange,
    ...extras,
  }
}
