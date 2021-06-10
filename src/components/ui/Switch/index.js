import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { CustomSwitch } from './styles'

const Switch = ({value,handleChange,name,label,labelPlacement,inputProps}) => {
 
  
  return (
    <FormControlLabel
      control={<CustomSwitch checked={value} onChange={handleChange} name={name} />}
      label={label}
      labelPlacement={labelPlacement}
      inputProps={inputProps}
    />
  )
}

export default Switch