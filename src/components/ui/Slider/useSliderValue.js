import { useState } from 'react'


export const useSliderValue = (
  val,
  extras,
  validators = []
) => {
  const [value, setValue] = useState(val)
  

  const onChange = ({slider}) =>  {
    setValue(slider.value)
  }

  
  return {
    value,
    validators,
    onChange,
    ...extras
  }
}