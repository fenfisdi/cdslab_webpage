import { useContext} from 'react'
import { languageContext } from '../../../config/languageContext'
import { useInputValue } from '../../ui/Input/useInputValue'
import { useSelectValue } from '../../ui/Select/useSelectValue'
import { VALIDATORS_MY_SIMULATIONS_FORM } from './validators'

const MODEL_TYPE_SIR = 'sir'
const MODEL_TYPE_MOD_SEIRV = 'modSeirv'
const MODEL_TYPE_SEIR = 'seir'

const PARAMETER_TYPE_FIXED = 'fixed'
const PARAMETER_TYPE_OPTIMIZE_PARAMETERS = 'optimized'


export const useMySimulationsForm = () => {
  const {t} = useContext(languageContext)
  const search = useInputValue('', VALIDATORS_MY_SIMULATIONS_FORM.email, {
    name: 'search',
    type: 'text',
    label: t('mySimulations.email'),
  })
  const modelType = useSelectValue('', VALIDATORS_MY_SIMULATIONS_FORM.modelType, {
  })

  const optionsModelType =[
    {label:'Sir', value:MODEL_TYPE_SIR},
    {label:'Mod Seirv', value:MODEL_TYPE_MOD_SEIRV},
    {label:'Seir', value:MODEL_TYPE_SEIR}
  ]
  const parameterType = useSelectValue('', VALIDATORS_MY_SIMULATIONS_FORM.modelType, {
  })

  const optionsParameterType = [
    {label:'Fixed parameter', value:PARAMETER_TYPE_FIXED},
    {label:'Optimize parameter', value:PARAMETER_TYPE_OPTIMIZE_PARAMETERS}
  ]
  const year = useInputValue('', VALIDATORS_MY_SIMULATIONS_FORM.alphabetic, {
    name: 'year',
    type: 'number',
    label: t('mySimulations.year'),
  })
  const month = useInputValue('', VALIDATORS_MY_SIMULATIONS_FORM.alphabetic, {
    name: 'month',
    type: 'number',
    label: t('mySimulations.month'),
  })
  const day = useInputValue('', VALIDATORS_MY_SIMULATIONS_FORM.alphabetic, {
    name: 'day',
    type: 'number',
    label: t('mySimulations.day'),
  })

  return {
    search,
    modelType,
    optionsModelType,
    parameterType,
    optionsParameterType,
    year,
    month,
    day
  }
}
