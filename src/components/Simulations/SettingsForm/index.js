import React from 'react'
import { useSettingsFormState } from './state'
import { Input } from '../../ui/Input'
import { BoxSizeTitle, Form, FormGroup } from './styles'
import RangeSlider from '../../ui/RangeSlider'

const SettingsForm = ({ simulation, loading, error }) => {
  const {
    name,
    iterationTime,
    simulationDate,
    iterationsNumber,
    boxSizeHorizontal,
    boxSizeVertical,
    populationSize,
    InputName,
    InputIterationTime,
    InputSimulationDate
  } = useSettingsFormState(simulation)

  const isValidForm = () => true

  const verifyForm = async (e) => {
    e.preventDefault()
    if (isValidForm()) {
      // TODO
    } else {
      // TODO
    }
  }

  return (
    <Form noValidate onSubmit={verifyForm}>
      <FormGroup>
        <InputName disabled={loading}/>
      </FormGroup>
      <FormGroup>
        <InputSimulationDate/>
        <Input
          disabled={loading}
          required
          color="secondary"
          margin="normal"
          {...populationSize} />
      </FormGroup>
      <FormGroup>
        <InputIterationTime disabled={loading}/>
        <Input
          disabled={loading}
          required
          color="secondary"
          margin="normal"
          {...iterationsNumber} />
      </FormGroup>
      <BoxSizeTitle>Box size</BoxSizeTitle>
      <FormGroup>
        <RangeSlider label='Horizontal' max='10'/>
        <RangeSlider label='Vertical' max='10'/>
      </FormGroup>


    </Form>
  )
}

export default SettingsForm
