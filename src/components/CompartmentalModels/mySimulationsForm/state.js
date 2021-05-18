import { isEmpty } from 'lodash'
import { useContext, useEffect, useState } from 'react'
import { languageContext } from '../../../config/languageContext'
import { useInputValue } from '../../ui/Input/useInputValue'
import { VALIDATORS_MY_SIMULATIONS_FORM } from './validators'

const MODEL_TYPE = [
  {
    SIR : 'sir',
    MOD_SEIRV : 'modSeirv',
    SEIR : 'seir',
  }
]

const PARAMETER_TYPE = [
  {
    FIXED : 'fixParameter',
    OPTIMIZE : 'optimizeParameters',
  }
]

export const useMySimulationsForm = () => {
  const {t} = useContext(languageContext)
  const search = useInputValue('', VALIDATORS_MY_SIMULATIONS_FORM.email, {
    name: 'search',
    type: 'text',
    label: t('mySimulations.email'),
  })
  const modelType = useInputValue('', VALIDATORS_MY_SIMULATIONS_FORM.alphabetic, {
    name: 'modelType',
    type: 'text',
    label: t('mySimulations.modelType'),
    options:[
      {label:'Sir', value:MODEL_TYPE.SIR},
      {label:'Mod Seirv', value:MODEL_TYPE.MOD_SEIRV},
      {label:'Seir', value:MODEL_TYPE.SEIR}
    ]
  })
  const parameterType = useInputValue('', VALIDATORS_MY_SIMULATIONS_FORM.alphabetic, {
    name: 'parameterType',
    type: 'text',
    label: t('mySimulations.parameterType'),
    options:[
      {label:'Fixed parameter', value:PARAMETER_TYPE.FIXED},
      {label:'Optimize parameter', value:PARAMETER_TYPE.OPTIMIZE}
    ]
  })
  const year = useInputValue('', VALIDATORS_MY_SIMULATIONS_FORM.alphabetic, {
    name: 'year',
    type: 'text',
    label: t('mySimulations.year'),
  })
  const month = useInputValue('', VALIDATORS_MY_SIMULATIONS_FORM.alphabetic, {
    name: 'lastName',
    type: 'text',
    label: t('mySimulations.month'),
  })
  const day = useInputValue('', VALIDATORS_MY_SIMULATIONS_FORM.alphabetic, {
    name: 'lastName',
    type: 'text',
    label: t('mySimulations.day'),
  })

  return {
    search,
    modelType,
    parameterType,
    year,
    month,
    day
  }
}
