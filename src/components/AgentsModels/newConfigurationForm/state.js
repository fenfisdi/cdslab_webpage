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
    label: t('newConfiguration.nameConfiguration'),
  })

  const simulationInitialDate = useInputValue('', VALIDATORS_NEW_CONFIGURATION_FORM.simulationInitialDate, {
    name: 'simulationInitialDate',
    type: 'date',
    label: t('newConfiguration.simulationInitialDate'),
  })

  const simulationFinalDate = useInputValue('', VALIDATORS_NEW_CONFIGURATION_FORM.simulationInitialDate, {
    name: 'simulationFinalDate',
    type: 'date',
    label: t('newConfiguration.simulationFinalDate'),
  })

  const iterationName = useInputValue('', VALIDATORS_NEW_CONFIGURATION_FORM.iterationName, {
    name: 'iterationName',
    type: 'number',
    label: t('newConfiguration.iterationName'),
  })

  const populationSize = useInputValue('', VALIDATORS_NEW_CONFIGURATION_FORM.populationSize, {
    name: 'populationSize',
    type: 'number',
    label: t('newConfiguration.populationSize'),
  })

  const boxHorizontalSize = useInputValue('', VALIDATORS_NEW_CONFIGURATION_FORM.boxHorizontalSize, {
    name: 'boxHorizontalSize',
    type: 'number',
    label: t('newConfiguration.boxHorizontalSize'),
  })

  const boxVerticalSize = useInputValue('', VALIDATORS_NEW_CONFIGURATION_FORM.boxVerticalSize, {
    name: 'boxVerticalSize',
    type: 'number',
    label: t('newConfiguration.boxVerticalSize'),
  })

  const timeUnits = useSelectValue('', VALIDATORS_NEW_CONFIGURATION_FORM.timeUnits, {
  })

  const optionsTimeUnits =[
    {label:'Sir', value:MODEL_TYPE_SIR},
    {label:'Mod Seirv', value:MODEL_TYPE_MOD_SEIRV},
    {label:'Seir', value:MODEL_TYPE_SEIR}
  ]
  const distanceUnits = useSelectValue('', VALIDATORS_NEW_CONFIGURATION_FORM.distanceUnits, {
  })

  const optionsDistanceUnits = [
    {label:'Fixed parameter', value:PARAMETER_TYPE_FIXED},
    {label:'Optimize parameter', value:PARAMETER_TYPE_OPTIMIZE_PARAMETERS}
  ]
  
  return {
    nameConfiguration,
    simulationInitialDate,
    simulationFinalDate,
    iterationName,
    populationSize,
    boxHorizontalSize,
    boxVerticalSize,
    timeUnits,
    optionsTimeUnits,
    distanceUnits,
    optionsDistanceUnits
  }
}
