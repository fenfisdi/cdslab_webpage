import React from 'react'
import Slider from '@material-ui/core/Slider'
import Input from '@material-ui/core/Input'
import { SliderContainer } from './styles'

const defaultValueLabelFormat = (value) => `${value}`
const defaultMinMaxFormat = (value) => `${value}`

export default function TableSlider({
  styles,
  name,
  min = 0,
  max = 1,
  step = 0.1,
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

  const handleSliderChange = (nameSlider) => (event, valueSlider) => {
    let newVal = valueSlider ? valueSlider : event.target.value
    newVal = newVal > max ? max : Number(newVal)
    newVal = newVal < min || isNaN(newVal) ? min : Number(newVal)
    onChange({ slider: { name:nameSlider, value: newVal } })
  }

  return (
    <SliderContainer styles={styles}>
      <Slider
        className="range-slider"
        name={name}
        id={name}
        value={value}
        min={min}
        max={max}
        step={step}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleSliderChange(name)}
        valueLabelDisplay="auto"
        aria-labelledby={`label-${name}`}
        marks={marks}
        style={styles}
      />
      <Input
        className="input-slider"
        id={name}
        value={value}
        name={name}
        margin="dense"
        onChange={handleSliderChange(name)}
        inputProps={{
          step: step,
          min: 0,
          max: 1,
          type: 'number',
          'aria-labelledby': 'input-slider'
        }}
      />
    </SliderContainer>
  )
}
