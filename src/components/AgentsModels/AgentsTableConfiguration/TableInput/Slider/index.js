import React from 'react'
import Slider from '@material-ui/core/Slider'
import Input from '@material-ui/core/Input'
import { SliderContainer } from './styles'

const defaultValueLabelFormat = (value) => `${value}`
const defaultMinMaxFormat = (value) => `${value}`

export default function TableSlider({
  name,
  min = 0,
  max = 100,
  value,
  minMaxFormat = defaultMinMaxFormat,
  valueLabelFormat = defaultValueLabelFormat,
  onChange
}) {
  const marks = [
    {
      value: min,
      label: minMaxFormat(min)
    },
    {
      value: max,
      label: minMaxFormat(max)
    }
  ]

  const handleSliderChange = (name) => (event, value) => {
    let newVal = value ? value : event.target.value
    newVal = newVal > max ? max : Number(newVal)
    newVal = newVal < min || isNaN(newVal) ? min : Number(newVal)
    onChange({ slider: { name, value: newVal } })
  }

  return (
    <SliderContainer>
      <Slider
        className="range-slider"
        name={name}
        id={name}
        value={value}
        min={min}
        max={max}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleSliderChange(name)}
        valueLabelDisplay="auto"
        aria-labelledby={`label-${name}`}
        marks={marks}
      />
      <Input
        className="input-slider"
        id={name}
        value={value}
        name={name}
        margin="dense"
        onChange={handleSliderChange(name)}
        inputProps={{
          step: 1,
          min: 0,
          max: 100,
          type: 'number',
          'aria-labelledby': 'input-slider'
        }}
      />
    </SliderContainer>
  )
}
