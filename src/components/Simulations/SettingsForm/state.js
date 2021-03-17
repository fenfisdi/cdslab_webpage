import { useInputValue } from '../../ui/Input/useInputValue'
import { VALIDATORS_SIMULATION_SETTINGS } from './validators'

export const useSettingsFormState = (simulation) => {
  const name = useInputValue(
    simulation?.name || '',
    VALIDATORS_SIMULATION_SETTINGS.name,
    {
      name: 'name',
      color: 'secondary',
      label: 'Simulation Name'
    }
  )
  const iterationTime = useInputValue(
    +simulation?.iteration_time || 0,
    VALIDATORS_SIMULATION_SETTINGS.iterationTime, {
      color: 'secondary',
      name: 'iterationTime',
      type: 'number',
      label: 'Iteration Time'
    }
  )
  const simulationDate = useInputValue(
    simulation?.simulation_date || 0,
    VALIDATORS_SIMULATION_SETTINGS.simulationDate, {
      color: 'secondary',
      margin: 'normal',
      name: 'simulationDate',
      label: 'Simulation Date'
    })
  const iterationsNumber = useInputValue(
    +simulation?.iteration_number || 0,
    VALIDATORS_SIMULATION_SETTINGS.iterationsNumber,
    {
      color: 'secondary',
      margin: 'normal',
      name: 'iterationsNumber',
      type: 'number',
      label: 'Iteration Number'
    }
  )

  const boxSizeHorizontal = useInputValue(
    +simulation?.box_size[0] || 0,
    VALIDATORS_SIMULATION_SETTINGS.boxSizeHorizontal, {
      label: 'Horizontal',
      min: 1,
      max: 10
    }
  )

  const boxSizeVertical = useInputValue(
    +simulation?.box_size[1] || 0,
    VALIDATORS_SIMULATION_SETTINGS.boxSizeVertical, {
      label: 'Vertical',
      min: 1,
      max: 10
    })

  const populationSize = useInputValue(
    +simulation?.population_size || 0,
    VALIDATORS_SIMULATION_SETTINGS.populationSize,
    {
      color: 'secondary',
      margin: 'normal',
      name: 'populationSize',
      type: 'number',
      label: 'Population Size'
    })

  return {
    name,
    iterationTime,
    simulationDate,
    iterationsNumber,
    boxSizeHorizontal,
    boxSizeVertical,
    populationSize
  }
}
