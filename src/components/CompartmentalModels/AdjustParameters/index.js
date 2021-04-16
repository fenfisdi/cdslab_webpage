import React from 'react'
import {  useAdjustParametersStyles } from './styles'
import { useAdjustParametersState } from './state'
import BackButton from '../../ui/BackButton'
import AdjustParametersFormDataUpload from './children/AdjustParametersFormDataUpload'
import AdjustParametersFormResourceSelection from './children/AdjustParametersFormResourceSelection'
import { COMPARTMENTAL_FIELDS } from '../../../constants/compartmental'


const AdjustParameters = ({
  handleClickAdjustParameters,
  options,
  loading,
  fatherUpdateStep,
  setParameters,
  parameters}) => {
    
  const classes = useAdjustParametersStyles()
  const {
    handleClickButton,
    setModelData,
    updateStep,
    step,
    modelData
  }= useAdjustParametersState({handleClickAdjustParameters})
  const { name:slectedModel } = modelData || {}
  const { predefinedModel: { indetifier } }= parameters || {}

  return (
    <>
      { <BackButton evenOnClick={()=>{step==0 ?fatherUpdateStep():updateStep(step-1)}} text="back" />}
      {step == 0 && <AdjustParametersFormResourceSelection
        options={options}
        setModelData={setModelData}
        classes={classes}
        modelData={modelData}
        handleClickButton={handleClickButton}
        slectedModel={slectedModel}

      />}

      {step == 1 && <AdjustParametersFormDataUpload 
        parameters={parameters}
        selectValues={COMPARTMENTAL_FIELDS[indetifier].stateVariables}
      />}
    </>
  )
}

export default AdjustParameters
