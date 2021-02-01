import React from 'react'
import { useSettingsFormState } from './state'
import { Input } from '../../ui/Input'
import { BoxSizeTitle, Form, FormGroup } from './styles'
import RangeSlider from '../../ui/RangeSlider'

const SettingsForm = ({ simulation, loading, error }) => {
  const {
    InputPopulationSize,
    InputIterationsNumber,
    InputBoxSizeHorizontal,
    InputBoxSizeVertical,
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
        <InputPopulationSize />
      </FormGroup>
      <FormGroup>
        <InputIterationTime disabled={loading}/>
        <InputIterationsNumber />
      </FormGroup>
      <BoxSizeTitle>Box size</BoxSizeTitle>
      <FormGroup>
       <InputBoxSizeHorizontal />
        <InputBoxSizeVertical />
      </FormGroup>


    </Form>
  )
}

export default SettingsForm
