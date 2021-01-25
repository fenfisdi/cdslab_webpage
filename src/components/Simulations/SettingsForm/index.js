import React from 'react'
import { useSettingsFormState } from './state'
import { Input } from '../../ui/Input'
import { Form, FormGroup } from './styles'

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
       <InputName  disabled={loading} />
        <InputSimulationDate />

      </FormGroup>
      <FormGroup>
        <InputIterationTime  disabled={loading} />
        <Input
          disabled={loading}
          required
          color="secondary"
          margin="normal"
          {...iterationsNumber} />
      </FormGroup>
      <FormGroup>
        <Input
          disabled={loading}
          required
          color="secondary"
          margin="normal"
          {...boxSizeHorizontal} />
        <Input
          disabled={loading}
          required
          color="secondary"
          margin="normal"
          {...boxSizeVertical} />
      </FormGroup>
      <FormGroup>
        <Input
          disabled={loading}
          required
          color="secondary"
          margin="normal"
          {...populationSize} />
      </FormGroup>

    </Form>
  )
}

export default SettingsForm
