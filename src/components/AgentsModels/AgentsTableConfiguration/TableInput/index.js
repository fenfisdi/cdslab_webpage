import React from 'react'
import { TextField } from '@material-ui/core'
import TableSlider from './Slider'
import TableSelect from './Select'
export default function TableInput({
  name,
  type = 'text',
  min = 0,
  max = 100,
  step,
  value = '',
  selectOptions,
  onChange,
  fullWidth,
  style
}) {
  const renderTextField = () => (
    <TextField
      style={{'backgroundColor':'white'}}
      variant="outlined"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
    />
  )

  const renderSlider = () => (
    <TableSlider
      style={style}
      name={name}
      id={name}
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={onChange}      
    />
  )

  const renderSelect = () => (
    <TableSelect
      name={name}
      value={value}
      onChange={onChange}
      options={selectOptions}
      style={style}
    />
  )

  const renderLabel = () => <p>{value}</p>

  const renderInput = {
    text: renderTextField,
    number: renderTextField,
    slider: renderSlider,
    select: renderSelect,
    label: renderLabel
  }

  return <>{renderInput[type]()}</>
}
