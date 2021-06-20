import { useContext} from 'react'
import { languageContext } from '../../../config/languageContext'
import { useInputValue } from '../../ui/Input/useInputValue'
import { useSelectValue } from '../../ui/Select/useSelectValue'
import { VALIDATORS_NEW_CONFIGURATION_FORM } from './validators'

const MODEL_TYPE_SIR = 'sir'
const MODEL_TYPE_MOD_SEIRV = 'modSeirv'
const MODEL_TYPE_SEIR = 'seir'

const PARAMETER_TYPE_FIXED = 'fixed'
const PARAMETER_TYPE_OPTIMIZE_PARAMETERS = 'optimized'


export const useNewConfigurationForm = () => {

  const {t} = useContext(languageContext)

  const nameConfiguration = useInputValue('', VALIDATORS_NEW_CONFIGURATION_FORM.nameConfiguration, {
    name: 'nameConfiguration',
    type: 'text',
  })

  const simulationInitialDate = useInputValue('', VALIDATORS_NEW_CONFIGURATION_FORM.simulationInitialDate, {
    name: 'simulationInitialDate',
    type: 'date',
  })

  const simulationFinalDate = useInputValue('', VALIDATORS_NEW_CONFIGURATION_FORM.simulationInitialDate, {
    name: 'simulationFinalDate',
    type: 'date',
  })

  const iterationTime = useInputValue('', VALIDATORS_NEW_CONFIGURATION_FORM.iterationTime, {
    name: 'iterationTime',
    type: 'number',
  })

  const populationSize = useInputValue('', VALIDATORS_NEW_CONFIGURATION_FORM.populationSize, {
    name: 'populationSize',
    type: 'number',
  })

  const boxHorizontalSize = useInputValue('', VALIDATORS_NEW_CONFIGURATION_FORM.boxHorizontalSize, {
    name: 'boxHorizontalSize',
    type: 'number',
  })

  const boxVerticalSize = useInputValue('', VALIDATORS_NEW_CONFIGURATION_FORM.boxVerticalSize, {
    name: 'boxVerticalSize',
    type: 'number',
  })

  const timeUnits = useSelectValue('', VALIDATORS_NEW_CONFIGURATION_FORM.timeUnits, {
  })

  const distanceUnits = useSelectValue('', VALIDATORS_NEW_CONFIGURATION_FORM.distanceUnits, {
  })

  
  return {
    nameConfiguration,
    simulationInitialDate,
    simulationFinalDate,
    iterationTime,
    populationSize,
    boxHorizontalSize,
    boxVerticalSize,
    timeUnits,
    distanceUnits,
  }
}
