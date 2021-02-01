import { useInputValue } from "../../ui/Input/useInputValue"
import { VALIDATORS_LOGIN_FORM } from "../../LoginForm/validators"
import { Input } from "../../ui/Input"
import React from "react"
import DatePicker from "../../ui/DatePicker"
import RangeSlider from "../../ui/RangeSlider"

export const useSettingsFormState = (simulation) => {
  const name = useInputValue({
    value: simulation?.name,
  })
  const iterationTime = useInputValue({
    value: +simulation?.iteration_time
  })
  const simulationDate = useInputValue({
    value: simulation?.simulation_date
  })
  const iterationsNumber = useInputValue({
    value: +simulation?.iteration_number
  })

  const boxSizeHorizontal = useInputValue({
    value: +simulation?.box_size[0]
  })

  const boxSizeVertical = useInputValue({
    value: +simulation?.box_size[1]
  })

  const populationSize = useInputValue({
    value: +simulation?.population_size
  })

  const InputName = (props) => (
    <Input
      {...name}
      required
      color="secondary"
      margin="normal"
      name= "name"
      type= "text"
      label= "Simulation Name"
      {...props}
    />
  )
  const InputIterationTime = (props) => (
    <Input
      required
      color="secondary"
      margin="normal"
      name= "iterationTime"
      type= "number"
      label= "Iteration Time"
      {...props}
      {...iterationTime} />
  )

  const InputSimulationDate = (props) => (
    <DatePicker
      {...simulationDate}
      required
      color="secondary"
      margin="normal"
      id="date-picker-dialog"
      format="MM/dd/yyyy"
      name= "simulationDate"
      label= "Simulation Date"
      {...props}
    />
  )

  const InputIterationsNumber = (props) => (
    <Input
      {...iterationsNumber}
      required
      color="secondary"
      margin="normal"
      name= "iterationsNumber"
      type= "number"
      label= "Iteration Number"
      {...props}
    />
  )

  const InputBoxSizeHorizontal = (props) => (
    <RangeSlider  {...boxSizeHorizontal} label="Horizontal" min="1" max="10" {...props}/>
  )

  const InputBoxSizeVertical = (props) => (
    <RangeSlider  {...boxSizeVertical} label="Vertical" min="1" max="10" {...props}/>
  )
  const InputPopulationSize = (props) => (
    <Input
      {...populationSize}
      required
      color="secondary"
      margin="normal"
      name= "populationSize"
      type= "number"
      label= "Population Size"
      {...props}
    />
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
    InputIterationTime,
    InputSimulationDate,
    InputIterationsNumber,
    InputBoxSizeHorizontal,
    InputBoxSizeVertical,
    InputPopulationSize

  }
}
