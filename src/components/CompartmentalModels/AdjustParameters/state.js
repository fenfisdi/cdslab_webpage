import { useState } from 'react'
import { ADJUST_PARAMETERS } from '../../../constants/compartmental'

export const useAdjustParametersState = ({ handleClickAdjustParameters }) => {

  const [step, setStep] = useState(0)
  const [modelData, setModelData] = useState({})

  const handleClickButton = () => {
    handleClickAdjustParameters(modelData)
    const { indetifier } = modelData || {}
    if (indetifier == ADJUST_PARAMETERS.UPLOAD_DATA) {
      updateStep(1)
    } else if (indetifier == ADJUST_PARAMETERS.USE_AVAILABLE) {
      console.log(' page no found')
    }
  }

  const updateStep = (int) => {
    setStep(int)
  }

  const sendForm = () => {
    console.log('enviear el formualrio')
  }

  return {
    handleClickButton,
    setModelData,
    updateStep,
    sendForm,
    step,
    modelData
  }
}
