import React, { useState } from 'react'

import { useCompartmentalModelsPageState } from './state'
import { useCompartmentalModelsPageStyles } from './styles'

import PredefinedModels from '../../components/CompartmentalModels/PredefinedModels'
import SimulationType from '../../components/CompartmentalModels/SimulationType'
import AdjustParameters from '../../components/CompartmentalModels/AdjustParameters'
import FixedParameters from '../../components/CompartmentalModels/FixedParameters'
import BackButton from '../../components/ui/BackButton'
import { OPTIONS_ADJUST_PARAMETERS, OPTIONS_PREDEFINED_MODELS, OPTIONS_SIMULATION_TYPE } from '../../constants/compartmental'
import SnackbarComponent from '../../components/ui/Snackbars'


const CompartmentalModelsPage = () => {
  const classes = useCompartmentalModelsPageStyles()
  const [showSnack, setShowSnack] = useState({show:false, success:false, error:false, successMessage:'', errorMessage:''})
  
  const {  
    handleClickPredefinedModels,
    handleClickSimulationType,
    handleClickAdjustParameters,
    handleClickBackButton,
    handleClickFixedParameters,
    step,
    parameters
  }= useCompartmentalModelsPageState()

  const handleCloseSnack = () => {
    setShowSnack({...showSnack,show:false,success:false, error:false, successMessage:'', errorMessage:''})
  }

  const  { predefinedModel, simulationType } = parameters

  return (
    <div>
      {step!=0 && <BackButton evenOnClick={handleClickBackButton} text="back" />}

      {step==0 && <PredefinedModels handleClickPredefinedModels={handleClickPredefinedModels} options={OPTIONS_PREDEFINED_MODELS}/>}

      {step==1 && <SimulationType handleClickSimulationType={handleClickSimulationType} options={OPTIONS_SIMULATION_TYPE}/>}

      {step==2 && <AdjustParameters handleClickAdjustParameters={handleClickAdjustParameters} options={OPTIONS_ADJUST_PARAMETERS}/>}

      {step==3 && <FixedParameters 
        predefinedModel={predefinedModel} 
        handleClickFixedParameters={handleClickFixedParameters}
        loading={false}
      /> }
      
      {showSnack && showSnack.show && <SnackbarComponent 
        snackDuration={3500}
        configData={showSnack}  
        handleCloseSnack={handleCloseSnack} 
        successMessage={showSnack.successMessage} 
        errorMessage={showSnack.errorMessage}/>}
    </div>
  )
}

export default CompartmentalModelsPage
