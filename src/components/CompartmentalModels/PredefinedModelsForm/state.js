import { useEffect, useState } from 'react'
import { useInputValue } from '../../ui/Input/useInputValue'
import { VALIDATORS_PREDEFINED_MODELS_FORM } from './validators'



export const usePredefinedModelsState = ({ handleClickPredefinedModels }) => {

  const [modelData, setModelData] = useState({})

  const simulationName = useInputValue('', VALIDATORS_PREDEFINED_MODELS_FORM.simulationName, {

    name: 'simulationName',
    type: 'text',
    label: 'Insert simulation name',

  })

  const handleClickButton = () => {
    handleClickPredefinedModels(modelData)
  }

  return {
    handleClickButton,
    setModelData,
    modelData,
    simulationName
  }
}
