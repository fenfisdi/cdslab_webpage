import { useInputValue } from '../../ui/Input/useInputValue'
import { VALIDATORS_LOGIN_FORM } from '../../LoginForm/validators'
import { Input } from '../../ui/Input'
import { FormGroup } from './styles'
import React from 'react'

export const useSettingsFormState = (simulation) => {
  const name = useInputValue({
    value: simulation?.name,
    name: 'name',
    type: 'text',
    label: 'Simulation Name'
  })
  const iterationTime = useInputValue({
    value: simulation?.iterationTime,
    name: 'iterationTime',
    type: 'number',
    label: 'Iteration Time'
  })
  const simulationDate = useInputValue({
    value: simulation?.simulationDate,
    name: 'simulationDate',
    type: 'text',
    label: 'Simulation Date'
  })
  const iterationsNumber = useInputValue({
    value: simulation?.iterationsNumber,
    name: 'iterationsNumber',
    type: 'number',
    label: 'Iteration Number'
  })

  const boxSizeHorizontal = useInputValue({
    value: simulation?.boxSizeHorizontal,
    name: 'boxSizeHorizontal',
    type: 'number',
    label: 'Horizontal'
  })

  const boxSizeVertical = useInputValue({
    value: simulation?.boxSizeVertical,
    name: 'boxSizeVertical',
    type: 'number',
    label: 'Vertical'
  })

  const populationSize = useInputValue({
    value: simulation?.populationSize,
    name: 'populationSize',
    type: 'number',
    label: 'Population Size'
  })

  const InputName = (props) =>  (
    <Input
  required
  color="secondary"
  margin="normal"
  {...props}
  {...name} />
    )
  const InputIterationTime = (props) =>  (
  <Input
    required
    color="secondary"
    margin="normal"
    {...props}
    {...iterationTime} />
  )

  return {
    name,
    iterationTime,
    simulationDate,
    iterationsNumber,
    boxSizeHorizontal,
    boxSizeVertical,
    populationSize,
    InputName,
    InputIterationTime

  }
}
