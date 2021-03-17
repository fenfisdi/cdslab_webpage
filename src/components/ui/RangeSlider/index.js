import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider'
import { RangeSliderContainer, RangeSliderLabel } from './styles'

const defaultValueLabelFormat = (value) => `${value}`
const defaultMinMaxFormat = (value) => `${value}`

export default function RangeSlider ({
  min = 0,
  max = 100,
  step = 1,
  id = 'rangeSlider',
  initValue = 50,
  minMaxFormat = defaultMinMaxFormat,
  valueLabelFormat = defaultValueLabelFormat,
  label = 'Default Label'
}) {
  const [value, setValue] = useState(initValue)
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

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <RangeSliderContainer>
      <RangeSliderLabel id={`label-${id}`}>
        {label}
      </RangeSliderLabel>
      <Slider
        value={value}
        min={min}
        step={step}
        max={max}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay='auto'
        aria-labelledby={`label-${id}`}
        marks={marks}
      />
    </RangeSliderContainer>
  )
}
